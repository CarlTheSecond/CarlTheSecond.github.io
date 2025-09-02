type WorkExperience = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  description: string;
  highlights: string[];
  technologies?: string[];
};

type SkillsData = {
  technical: {
    [category: string]: string[];
  };
  soft: string[];
};

type Message = {
  from: 'carl' | 'user';
  text: string;
  delay: number;
  type?: 'skill-bubble';
  skills?: string[];
};

import type { Article, ArticleData, InternalArticleMeta, ExternalArticleMeta } from './types/article';
import { useEffect, useState, useRef } from 'react';
import { Box, Typography, Avatar, Button, Chip, IconButton, Divider } from '@mui/joy';
import SendIcon from '@mui/icons-material/Send';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import SpeedIcon from '@mui/icons-material/Speed';
import ArticleIcon from '@mui/icons-material/Article';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import WorkIcon from '@mui/icons-material/Work';
import CircleIcon from '@mui/icons-material/Circle';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Sheet from '@mui/joy/Sheet';
import avatar from './assets/avatar.jpg';

import { generativeDesignSystem } from './articles/generative-design-system';
import { maintainableCode } from './articles/maintainable-code';
import { universalComponents } from './articles/universal-components';

const initialMessages: Message[] = [
  { from: 'carl', text: "Hey, I'm Carl 👋", delay: 1000 },
  { from: 'carl', text: "I'm a software developer from the UK, actively seeking out new opportunities.", delay: 1500 },
  { from: 'user', text: 'Hey Carl, what do you specialize in?', delay: 2000 },
  { from: 'carl', text: 'I specialize in:', delay: 1000 },
  { 
    from: 'carl', 
    text: 'React, TypeScript, and modern CSS', 
    type: 'skill-bubble',
    skills: ['React', 'Vue', 'Angular', 'TypeScript', 'Storybook', 'SCSS', 'Component Architecture', 'Responsive Design', 'Mobile first design'],
    delay: 1800 
  },
  { from: 'carl', text: 'I love building component systems that scale and delight users.', delay: 1700 },
  { from: 'user', text: 'That sounds great! What kind of projects have you worked on?', delay: 1500 },
  { from: 'carl', text: "I've built hundreds of complex forms and care about user experience. Each project taught me something new about performance, accessibility, and user experience.", delay: 2000 },
  { from: 'carl', text: "Most recently though, I've been working at Etch as a front-end developer, building and maintaing several component libraries and turning Figma prototypes into fully realised journeys.", delay: 2400 },
];

const articleContent: Record<string, ArticleData> = {
  [generativeDesignSystem.meta.id]: generativeDesignSystem,
  [maintainableCode.meta.id]: maintainableCode,
  [universalComponents.meta.id]: universalComponents,
};

const internalMetas: InternalArticleMeta[] = [
  generativeDesignSystem.meta,
  universalComponents.meta,
  maintainableCode.meta,
];

const externalMetas: ExternalArticleMeta[] = [
  {
    id: 'tetris-demo',
    title: "Codepen Tetris demo",
    description: "Fun challenge to build playable tetris inside codpen.",
    date: "December 2023",
    readTime: "",
    type: 'external',
    link: "https://codepen.io/carl-j-m/pen/VYZxpWW",
  },
  {
    id: 'physics-demo',
    title: "Codepen physics demo",
    description: "Another game experiment, this time with physics.",
    date: "January 2024",
    readTime: "",
    type: 'external',
    link: "https://codepen.io/carl-j-m/pen/MYgVzKG",
  }
];

const articles: Article[] = [...internalMetas, ...externalMetas];

const workExperience: WorkExperience[] = [
  {
    company: "Etch",
    role: "Frontend Developer",
    period: "2022 - Present",
    description: "Building and maintaining component libraries, transforming Figma designs into production-ready code.",
    highlights: [
      "Developed reusable component systems used across multiple projects",
      "Collaborated with designers to ensure pixel-perfect implementations",
      "Improved build times by 40% through optimization strategies",
      "Mentored junior developers on React best practices"
    ]
  },
  {
    company: "Previous Company",
    role: "UI Developer",
    period: "2020 - 2022",
    description: "Focused on creating responsive, accessible web applications for e-commerce platforms.",
    highlights: [
      "Built custom checkout flows that increased conversion by 25%",
      "Implemented A/B testing framework for UI experiments",
      "Led migration from legacy jQuery to modern React architecture",
      "Established coding standards and review processes"
    ]
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2018 - 2020",
    description: "Worked with various clients to deliver custom web solutions and user interfaces.",
    highlights: [
      "Delivered 15+ projects on time and within budget",
      "Specialized in responsive design and performance optimization",
      "Built relationships with clients leading to repeat business",
      "Managed full project lifecycle from concept to deployment"
    ]
  }
];

const quickActions = [
  { label: 'View Projects', icon: <CodeIcon />, id: 'projects' },
  { label: 'Skills', icon: <BrushIcon />, id: 'skills' },
  { label: 'Work Experience', icon: <SpeedIcon />, id: 'experience' },
];

function App() {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const [activeContent, setActiveContent] = useState('chat');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Data loading states
  const [articlesData, setArticlesData] = useState<Article[] | null>(null);
  const [experienceData, setExperienceData] = useState<WorkExperience[] | null>(null);
  const [skillsData, setSkillsData] = useState<SkillsData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentArticle, setCurrentArticle] = useState<string | null>(null);

  const year = new Date().getFullYear();
  const currentIdx = currentArticle ? internalMetas.findIndex(a => a.id === currentArticle) : -1;
  const prevArticle = currentIdx > 0 ? internalMetas[currentIdx - 1] : null;
  const nextArticle = currentIdx >= 0 && currentIdx < internalMetas.length - 1 ? internalMetas[currentIdx + 1] : null;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [visibleMessages]);

  useEffect(() => {
    const timeoutIds: number[] = [];
    let cumulativeDelay = 0;

    initialMessages.forEach((message, index) => {
      cumulativeDelay += message.delay;
      
      // Show typing indicator before Carl's messages
      if (message.from === 'carl' && index > 0) {
        const typingTimeoutId = setTimeout(() => {
          setIsTyping(true);
        }, cumulativeDelay - 500);
        timeoutIds.push(typingTimeoutId);
      }

      // Show the actual message
      const messageTimeoutId = setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages((msgs) => [...msgs, message]);
        
        // Show quick actions after all messages
        if (index === initialMessages.length - 1) {
          setTimeout(() => setShowQuickActions(true), 500);
        }
      }, cumulativeDelay);
      
      timeoutIds.push(messageTimeoutId);
    });

    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
    };
  }, []);

  // Simulate data fetching when content changes
  useEffect(() => {
    if (activeContent !== 'chat') {
      setIsLoading(true);
      
      // Simulate network delay
      const loadTimer = setTimeout(() => {
        if (activeContent === 'projects') {
          setArticlesData([...articles]);
        } else if (activeContent === 'experience') {
          setExperienceData(workExperience);
        } else if (activeContent === 'skills') {
          setSkillsData({
            technical: {
              'Frontend Frameworks': ['React', 'Vue', 'Angular', 'Next.js'],
              'Languages': ['TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3'],
              'Styling': ['SCSS', 'CSS-in-JS', 'Tailwind', 'Material-UI'],
              'Tools & Testing': ['Storybook', 'Jest', 'Cypress', 'Webpack', 'Vite'],
              'Concepts': ['Component Architecture', 'Responsive Design', 'Accessibility', 'Performance Optimization']
            },
            soft: ['Lifelong learner', 'Systems thinker', 'Technical writing', 'Active listening', 'Mentoring', 'Cross-functional collaboration']
          });
        }
        setIsLoading(false);
      }, 600);
      
      return () => clearTimeout(loadTimer);
    }
  }, [activeContent]);

  const handleActionClick = (actionId: string) => {
    setActiveContent(actionId);
  };

  const handleArticleClick = (article: Article) => {
    if (article.type === 'external') {
      window.open(article.link, '_blank');
    } else {
      setCurrentArticle(article.id);
      setActiveContent('article');
    }
  };

  const getHeaderTitle = () => {
    switch(activeContent) {
      case 'projects': return 'My Articles & Demos';
      case 'skills': return 'Skills';
      case 'experience': return 'Work Experience';
      case 'article':
        return currentArticle
          ? articleContent[currentArticle]?.meta.title ?? 'Article'
          : 'Article';
      default: return null;
    }
  };

  const LoadingContent = ({ text }: { text: string }) => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: 40,
          height: 40,
          borderColor: 'primary.200',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          '@keyframes spin': {
            to: { transform: 'rotate(360deg)' }
          }
        }}
      />
      <Typography level="body-lg" sx={{ color: 'text.secondary' }}>
        {text}
      </Typography>
    </Box>
  );

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: { xs: '100vw'},
        height: { xs: '100vh'},
        maxHeight: { xs: 'none' },
        bgcolor: 'background.surface',
        borderRadius: { xs: 0},
        boxShadow: { xs: 'none'},
        overflow: 'hidden',
        mx: { xs: 0 },
        my: { xs: 0 },
        display: 'flex',
        flexDirection: 'column',
        border: { xs: 'none', xl: '1px inset silver' },
        borderColor: 'divider',
        position: 'relative',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: 2,
          px: 6,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          boxShadow: 'sm',
          position: 'relative',
          minHeight: 64,
        }}
      >
        {activeContent !== 'chat' && (
          <IconButton
            onClick={() => {
              if (activeContent === 'article') {
                setActiveContent('projects');
                setCurrentArticle(null);
              } else {
                setActiveContent('chat');
              }
            }}
            sx={{
              position: 'absolute',
              left: 12,
              color: 'white',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
        )}
        
        {activeContent === 'chat' ? (
          <>
            <Box sx={{ position: 'relative' }}>
              <Avatar 
                alt='Carl Mensah'
                src={avatar}
              >
                C
              </Avatar>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: 12,
                  height: 12,
                  bgcolor: '#4caf50',
                  borderRadius: '50%',
                  border: '2px solid white',
                }}
              />
            </Box>
            <Box>
              <Typography level="title-md" sx={{ color: 'white', fontWeight: 600 }}>
                Carl Mensah
              </Typography>
              <Typography level="body-xs" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                Software Developer • Available
              </Typography>
            </Box>
          </>
        ) : (
          <Typography level="title-lg" sx={{ color: 'white', fontWeight: 600, mx: 'auto' }}>
            {getHeaderTitle()}
          </Typography>
        )}
      </Box>

      {/* Main Content Area */}
      <Box
        sx={{
          flex: 1,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'background.level1',
        }}
      >
        {activeContent === 'chat' && (
          <>
            {/* Messages Area */}
            <Box
              sx={{
                flex: 1,
                overflowY: 'auto',
                px: 2,
                py: 2,
                display: 'flex',
                flexDirection: 'column',
                minHeight: 0,
                gap: 1.5,
                '&::-webkit-scrollbar': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-track': {
                  bgcolor: 'transparent',
                },
                '&::-webkit-scrollbar-thumb': {
                  bgcolor: 'neutral.300',
                  borderRadius: '3px',
                },
              }}
            >
              {visibleMessages.map((msg, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start',
                    animation: 'slideIn 0.3s ease-out',
                    '@keyframes slideIn': {
                      from: {
                        opacity: 0,
                        transform: 'translateY(10px)',
                      },
                      to: {
                        opacity: 1,
                        transform: 'translateY(0)',
                      },
                    },
                  }}
                >
                  {msg.type === 'skill-bubble' ? (
                    <Box
                      sx={{
                        maxWidth: '85%',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 0.8,
                        px: 2,
                        py: 1,
                        borderRadius: '16px',
                        bgcolor: 'primary.50',
                      }}
                    >
                      {msg.skills?.map((skill, idx) => (
                        <Chip
                          key={idx}
                          size="sm"
                          variant="soft"
                          color="primary"
                          sx={{
                            fontWeight: 500,
                            borderRadius: 'sm',
                          }}
                        >
                          {skill}
                        </Chip>
                      ))}
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        maxWidth: '75%',
                        px: 2.5,
                        py: 1.5,
                        borderRadius: msg.from === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                        bgcolor: msg.from === 'user' ? 'primary.500' : 'background.surface',
                        color: msg.from === 'user' ? 'white' : 'text.primary',
                        boxShadow: 'sm',
                        border: msg.from === 'carl' ? '1px solid' : 'none',
                        borderColor: 'divider',
                      }}
                    >
                      <Typography 
                        level="body-sm" 
                        sx={{ 
                          lineHeight: 1.5,
                          color: msg.from === 'user' ? 'white' : 'text.primary',
                        }}
                      >
                        {msg.text}
                      </Typography>
                    </Box>
                  )}
                </Box>
              ))}
              
              {isTyping && (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    px: 2.5,
                    py: 1.5,
                    bgcolor: 'background.surface',
                    borderRadius: '18px 18px 18px 4px',
                    width: 'fit-content',
                    boxShadow: 'sm',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 0.3 }}>
                    {[0, 1, 2].map((i) => (
                      <Box
                        key={i}
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: 'neutral.400',
                          animation: `typing 1.4s ease-in-out ${i * 0.2}s infinite`,
                          '@keyframes typing': {
                            '0%, 60%, 100%': {
                              transform: 'translateY(0)',
                              opacity: 0.7,
                            },
                            '30%': {
                              transform: 'translateY(-10px)',
                              opacity: 1,
                            },
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              )}
              <div ref={messagesEndRef} />
            </Box>

            {/* Quick Actions */}
            {showQuickActions && (
              <Box
                sx={{
                  px: 2,
                  py: 1.5,
                  borderTop: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'background.surface',
                  display: 'flex',
                  gap: 1,
                  overflowX: 'auto',
                  flexShrink: 0,
                  '&::-webkit-scrollbar': { display: 'none' },
                  animation: 'fadeIn 0.5s ease-out',
                  '@keyframes fadeIn': {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                  },
                }}
              >
                {quickActions.map((action, idx) => (
                  <Button
                    key={idx}
                    variant="outlined"
                    size="sm"
                    startDecorator={action.icon}
                    onClick={() => handleActionClick(action.id)}
                    sx={{
                      borderRadius: 'xl',
                      whiteSpace: 'nowrap',
                      fontSize: 'xs',
                      py: 0.5,
                      px: 2,
                      minHeight: 32,
                      '&:hover': {
                        bgcolor: 'primary.50',
                        borderColor: 'primary.300',
                      },
                    }}
                  >
                    {action.label}
                  </Button>
                ))}
              </Box>
            )}
          </>
        )}

        {activeContent === 'projects' && (
          <Box
            sx={{
              flex: 1,
              overflowY: 'auto',
              px: 2,
              py: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              '&::-webkit-scrollbar': {
                width: '6px',
              },
              '&::-webkit-scrollbar-track': {
                bgcolor: 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                bgcolor: 'neutral.300',
                borderRadius: '3px',
              },
            }}
          >
            {isLoading ? (
              <LoadingContent text="Loading articles..." />
            ) : (
              articlesData?.map((article, idx) => {
                const isExternal = article.type === 'external' && !!article.link;

                return (
                  <Box
                    key={article.id}
                    component={isExternal ? 'a' : 'button'}
                    href={isExternal ? article.link : undefined}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    type={!isExternal ? 'button' : undefined}
                    onClick={!isExternal ? () => handleArticleClick(article) : undefined}
                    onKeyDown={
                      !isExternal
                        ? (e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              handleArticleClick(article);
                            }
                          }
                        : undefined
                    }
                    aria-label={`${article.title}${isExternal ? ' (opens in new tab)' : ''}`}
                    sx={{
                      textAlign: 'left',
                      width: '100%',
                      bgcolor: 'background.surface',
                      borderRadius: 'lg',
                      p: 2.5,
                      boxShadow: 'sm',
                      border: '1px solid',
                      borderColor: 'divider',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      animation: 'fadeIn 0.4s ease-out',
                      animationDelay: `${idx * 0.1}s`,
                      animationFillMode: 'both',
                      '@keyframes fadeIn': {
                        from: { opacity: 0, transform: 'translateY(10px)' },
                        to: { opacity: 1, transform: 'translateY(0)' }
                      },
                      '&:hover': {
                        boxShadow: 'md',
                        borderColor: 'primary.300',
                        transform: 'translateY(-2px)',
                      },
                      // visible keyboard focus
                      '&:focus-visible': {
                        outline: '2px solid',
                        outlineColor: 'primary.500',
                        outlineOffset: 2,
                        boxShadow: 'md',
                      },
                      // strip native button styles for internal variant
                      ...(isExternal ? {} : { background: 'none', appearance: 'none' }),
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <ArticleIcon
                        aria-hidden
                        sx={{ color: 'primary.500', fontSize: 24, mt: 0.5 }}
                      />
                      <Box sx={{ flex: 1 }}>
                        <Typography level="title-md" component="h3" sx={{ mb: 0.5 }}>
                          {article.title}
                        </Typography>
                        <Typography level="body-sm" sx={{ color: 'text.secondary', mb: 1 }}>
                          {article.description}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Typography level="body-xs" sx={{ color: 'text.tertiary' }}>
                            {article.date}
                          </Typography>
                          {article.readTime && (
                            <Typography level="body-xs" sx={{ color: 'text.tertiary' }}>
                              {article.readTime}
                            </Typography>
                          )}
                        </Box>
                      </Box>

                      {isExternal && (
                        <OpenInNewIcon
                          aria-hidden
                          sx={{ fontSize: 16, color: 'text.tertiary', mt: 0.5 }}
                        />
                      )}
                    </Box>
                  </Box>
                );
              })
            )}
          </Box>
        )}

        {activeContent === 'article' && currentArticle && articleContent[currentArticle as keyof typeof articleContent] && (
          <Box
            sx={{
              flex: 1,
              overflowY: 'auto',
              px: { xs: 2, md: 4 },
              py: { xs: 2, md: 3 },
              maxWidth: 800,
              mx: 'auto',
              width: '100%',
              '&::-webkit-scrollbar': {
                width: '6px',
              },
              '&::-webkit-scrollbar-track': {
                bgcolor: 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                bgcolor: 'neutral.300',
                borderRadius: '3px',
              },
            }}
          >
            <Box sx={{ mb: 3 }}>
              <Typography level="body-sm" sx={{ color: 'text.tertiary', mb: 1 }}>
                {articleContent[currentArticle as keyof typeof articleContent].meta.date} · {articleContent[currentArticle as keyof typeof articleContent].meta.readTime}
              </Typography>
            </Box>
            <Sheet
              component="article"
              variant="outlined"
              sx={{
                mx: 'auto',
                my: { xs: 1, md: 2 },
                p: { xs: 2, md: 3 },
                maxWidth: 840,
                bgcolor: 'background.surface',
                borderRadius: 'xl',
                boxShadow: 'md',
                borderColor: 'divider',
                position: 'relative',
                overflow: 'hidden',

                /* subtle entrance */
                opacity: 0,
                transform: 'translateY(8px) scale(0.992)',
                filter: 'blur(4px)',
                animation: 'pageIn 520ms cubic-bezier(.22,1,.36,1) forwards',

                /* soft inner highlight + drop shadow under the page */
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6)',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: 24,
                  right: 24,
                  bottom: -18,
                  height: 36,
                  filter: 'blur(16px)',
                  background:
                    'radial-gradient(60% 80% at 50% 0%, rgba(0,0,0,0.18), transparent 70%)',
                  pointerEvents: 'none',
                },

                /* top accent bar to echo your header gradient */
                '& > .accent': {
                  height: 3,
                  mb: 2,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: 'inherit',
                },

                /* nicer “prose” defaults */
                '& h2, & h3, & h4': { mt: 3, mb: 1 },
                '& p': { lineHeight: 1.75, mb: 2 },
                '& pre': {
                  p: 1.5, borderRadius: 'md', bgcolor: 'background.level1', overflow: 'auto',
                },
                '& code': { fontFamily: 'monospace' },

                '@keyframes pageIn': {
                  to: { opacity: 1, transform: 'translateY(0) scale(1)', filter: 'blur(0)' },
                },

                /* respect reduced motion */
                '@media (prefers-reduced-motion: reduce)': {
                  animation: 'none',
                  opacity: 1, transform: 'none', filter: 'none',
                  '&::after': { display: 'none' },
                },

                /* print-friendly */
                '@media print': {
                  boxShadow: 'none',
                  border: 'none',
                  borderRadius: 0,
                  my: 0, p: 0,
                  '&::after': { display: 'none' },
                },
              }}
            >
              <Box className="accent" />

              {/* your actual article content */}
              {articleContent[currentArticle as keyof typeof articleContent].content}
            </Sheet>
          </Box>
        )}

        {activeContent === 'skills' && (
          <Box
            sx={{
              flex: 1,
              overflowY: 'auto',
              px: 2,
              py: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              '&::-webkit-scrollbar': {
                width: '6px',
              },
              '&::-webkit-scrollbar-track': {
                bgcolor: 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                bgcolor: 'neutral.300',
                borderRadius: '3px',
              },
            }}
          >
            {isLoading ? (
              <LoadingContent text="Loading skills..." />
            ) : skillsData && (
              <>
                <Box>
                  <Typography level="title-lg" sx={{ mb: 3, fontWeight: 600 }}>
                    Technical Skills
                  </Typography>
                  {Object.entries(skillsData.technical).map(([category, skills], catIdx) => (
                    <Box 
                      key={category} 
                      sx={{ 
                        mb: 3,
                        animation: 'fadeIn 0.4s ease-out',
                        animationDelay: `${catIdx * 0.1}s`,
                        animationFillMode: 'both',
                        '@keyframes fadeIn': {
                          from: { opacity: 0, transform: 'translateY(10px)' },
                          to: { opacity: 1, transform: 'translateY(0)' }
                        },
                      }}
                    >
                      <Typography level="title-sm" sx={{ mb: 1.5, color: 'text.secondary' }}>
                        {category}
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 1,
                        }}
                      >
                        {skills.map((skill, idx) => (
                          <Chip
                            key={idx}
                            size="md"
                            variant="soft"
                            color="primary"
                            sx={{
                              fontWeight: 500,
                            }}
                          >
                            {skill}
                          </Chip>
                        ))}
                      </Box>
                    </Box>
                  ))}
                </Box>

                <Box
                  sx={{
                    animation: 'fadeIn 0.4s ease-out',
                    animationDelay: '0.5s',
                    animationFillMode: 'both',
                  }}
                >
                  <Typography level="title-lg" sx={{ mb: 2, fontWeight: 600 }}>
                    Soft Skills
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1,
                    }}
                  >
                    {skillsData.soft.map((skill, idx) => (
                      <Chip
                        key={idx}
                        size="md"
                        variant="soft"
                        color="neutral"
                        sx={{
                          fontWeight: 500,
                        }}
                      >
                        {skill}
                      </Chip>
                    ))}
                  </Box>
                </Box>
              </>
            )}
          </Box>
        )}

        {activeContent === 'experience' && (
          <Box
            sx={{
              flex: 1,
              overflowY: 'auto',
              px: 2,
              py: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              '&::-webkit-scrollbar': {
                width: '6px',
              },
              '&::-webkit-scrollbar-track': {
                bgcolor: 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                bgcolor: 'neutral.300',
                borderRadius: '3px',
              },
            }}
          >
            {isLoading ? (
              <LoadingContent text="Loading experience..." />
            ) : (
              experienceData?.map((job, idx) => (
                <Box
                  key={idx}
                  sx={{
                    bgcolor: 'background.surface',
                    borderRadius: 'lg',
                    p: 2.5,
                    boxShadow: 'sm',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.2s',
                    animation: 'fadeIn 0.4s ease-out',
                    animationDelay: `${idx * 0.1}s`,
                    animationFillMode: 'both',
                    '@keyframes fadeIn': {
                      from: { opacity: 0, transform: 'translateY(10px)' },
                      to: { opacity: 1, transform: 'translateY(0)' }
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>

                    { job.company === 'Etch' && (
                      <Box
                        component="svg"
                        viewBox="0 0 76 32"
                        aria-hidden
                        focusable="false"
                        sx={{
                          color: 'primary.500',   
                          height: 24,             
                          width: 'auto',          
                          mt: 0.5,
                          display: 'inline-block',
                          flexShrink: 0,
                        }}
                      >
                        <g>
                          <path fill="#F06" d="M0 4L0 20 16 4z"></path>
                          <path fill="#F06" d="M0 12L0 28 16 28z"></path>
                          <path fill="#F66" d="M0 12L0 28 16 12z"></path>
                        </g>
                        <g>
                          <path fill="#F06" d="M20 4H28V20H20z"></path>
                          <path fill="#F06" d="M20 12L20 28 36 28z"></path>
                          <path fill="#F66" d="M20 12L20 28 36 12z"></path>
                        </g>
                        <g>
                          <path fill="#F06" d="M40 12L40 28 56 28z"></path>
                          <path fill="#F66" d="M40 12L40 28 56 12z"></path>
                        </g>
                        <g>
                          <path fill="#F06" d="M60 4H68V20H60z"></path>
                          <path fill="#F06" d="M72 12L60 12 60 16 76 32 76 16z"></path>
                          <path fill="#F66" d="M60 12L60 32 76 16 72 12z"></path>
                        </g>
                      </Box>
                    )}

                    { job.company !== 'Etch' && (
                      <WorkIcon sx={{ color: 'primary.500', fontSize: 24, mt: 0.5, }} />
                    )}

                    <Box sx={{ flex: 1 }}>
                      <Typography level="title-md" sx={{ mb: 0.5 }}>
                        {job.role}
                      </Typography>
                      <Typography level="body-sm" sx={{ color: 'primary.600', mb: 0.5 }}>
                        {job.company}
                      </Typography>
                      <Typography level="body-xs" sx={{ color: 'text.tertiary', mb: 1.5 }}>
                        {job.period}
                      </Typography>
                      <Typography level="body-sm" sx={{ color: 'text.secondary', mb: 1.5 }}>
                        {job.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                        {job.highlights.map((highlight, hIdx) => (
                          <Box key={hIdx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                            <CircleIcon sx={{ fontSize: 6, color: 'primary.400', mt: 0.7 }} />
                            <Typography level="body-xs" sx={{ color: 'text.primary', flex: 1 }}>
                              {highlight}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))
            )}
          </Box>
        )}
      </Box>
  <>
    {/* Inline Article Footer */}
    <Box
      component="footer"
      sx={{
        borderColor: 'divider',
        bgcolor: 'background.surface',
      }}
    >
      {/* Accent bar to echo header gradient */}
      <Box
        sx={{
          height:4,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
      />
      {activeContent !== 'test'  && (
      <Box
        sx={{
          position: 'relative',
          py: 2.5,
          px: { xs: 2, md: 3 },
          display: 'grid',
          gap: 2,
          gridTemplateColumns: { xs: '1fr', md: '1fr auto' },
          alignItems: 'center',

        }}
      >
        {/* Left: nav + meta */}
        <Box sx={{ display: 'grid', gap: 1.25 }}>
          {/* Prev / Next */}
          {(prevArticle || nextArticle) && (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1, flexWrap: 'wrap' }}>
              <Button
                size="sm"
                variant="soft"
                color="neutral"
                startDecorator={<ChevronLeftIcon />}
                disabled={!prevArticle}
                onClick={() => {
                  if (!prevArticle) return;
                  setCurrentArticle(prevArticle.id);
                  setActiveContent('article');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {prevArticle ? prevArticle.title : 'Previous'}
              </Button>

              <Button
                size="sm"
                variant="soft"
                color="primary"
                endDecorator={<ChevronRightIcon />}
                disabled={!nextArticle}
                onClick={() => {
                  if (!nextArticle) return;
                  setCurrentArticle(nextArticle.id);
                  setActiveContent('article');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {nextArticle ? nextArticle.title : 'Next'}
              </Button>
            </Box>
          )}

          {activeContent !== 'chat' && (

          <Button
            size="sm"
            variant="outlined"
            onClick={() => {
              setActiveContent('chat');
              setCurrentArticle(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            sx={{ width: 'fit-content' }}
          >
            ← Home
          </Button>

          )}
      
          {/* Small print */}
          <Typography level="body-xs" sx={{ color: 'text.tertiary' }}>
            © {year} Carl Mensah • Built with Vite, React & MUI/Joy UI
          </Typography>
        </Box>

        {/* Right: contact / socials */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton
            component="a"
            href="mailto:carlmensahmail@gmail.com"
            variant="soft"
            color="neutral"
            size="sm"
            aria-label="Email"
            sx={{ borderRadius: 'md', boxShadow: 'sm', '&:hover': { boxShadow: 'md' } }}
          >
            <MailOutlineIcon fontSize="small" />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/Carl-J-M"
            target="_blank"
            rel="noopener noreferrer"
            variant="soft"
            color="neutral"
            size="sm"
            aria-label="GitHub"
            sx={{ borderRadius: 'md', boxShadow: 'sm', '&:hover': { boxShadow: 'md' } }}
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/carl-mensah/"
            target="_blank"
            rel="noopener noreferrer"
            variant="soft"
            color="primary"
            size="sm"
            aria-label="LinkedIn"
            sx={{ borderRadius: 'md', boxShadow: 'sm', '&:hover': { boxShadow: 'md' } }}
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
      )}
    </Box>
  </>
  </Box>
  );
}

export default App;

