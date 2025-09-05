import { Typography, Box, Divider, Link } from '@mui/joy';
import type { ArticleData } from '../types/article';

export const beyondComponentLibraries: ArticleData = {
  meta: {
    id: 'ecs-frontend-architecture',
    title: 'Modern Front-end: A simplified turn-based ECS engine',
    description:
      'How treating frontend like a simplified Entity Component System creates structured signals that both humans and AI can build on consistently.',
    date: 'September 2025',
    readTime: '8 min read',
    type: 'internal',
  },
  content: (
    <>
        <Typography
            level="body-sm"
            sx={{
                mb: 3,
                fontStyle: 'italic',
                color: 'text.secondary',
                display: 'block',
                borderLeft: '3px solid',
                borderColor: 'primary.300',
                pl: 2,
            }}
            >
            "The{' '}
            <Link
                href="https://mlq.ai/media/quarterly_decks/v0.1_State_of_AI_in_Business_2025_Report.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                MIT State of AI in Business 2025 report
            </Link>{' '}
            highlights that 95% of generative AI pilots fail to deliver measurable impact,
            often because they lack structure, integration, or repeatable systems. The lesson
            is clear: success comes from systematized foundations rather than one-off
            experiments. This is exactly what a turn-based ECS approach provides in frontend
            architecture."
    </Typography>

      <Typography level="body-md" sx={{ mb: 3 }}>
        By expressing UI in schemas, flags, and shared systems, we eliminate the brittleness of bespoke code and create a structured signal that both humans and AI can build on consistently.
      </Typography>

      <Typography level="body-md" sx={{ mb: 3 }}>
        I treat frontend like a simplified turn-based ECS engine: data (schemas), capabilities (flags), systems (cross-cutting behaviors), contexts (environments). That might sound silly or overengineered, but hear me out. It's not really for your benefit, it's for the benefit of the LLM you'll be using to generate your next feature.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography level="h3" sx={{ mb: 3 }}>
        The ECS Connection
      </Typography>

      <Typography level="body-md" sx={{ mb: 3 }}>
        ECS (Entity Component System) is a pattern from game development. It's a way of managing state across a huge range of triggers without baking assumptions into the stateful element itself. And honestly this is functionally identical to what modern frontend is trying to do. The only difference is we're playing a turn-based game, no continuous game loop, no physics tick, just actions triggered by user input.
      </Typography>

      <Typography level="body-md" sx={{ mb: 4 }}>
        Now look at how current LLMs actually behave. People complain they "don't understand" things. But that's the wrong framing. What they're really doing is building internal schemas on the fly, categorising, mapping, constraining. The "intelligence" isn't in some magic reasoning spark, it's in the implicit data structures they construct during a conversation.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography level="h3" sx={{ mb: 3 }}>
        Making Schemas Explicit
      </Typography>

      <Typography level="body-md" sx={{ mb: 3 }}>
        So why not make those schemas explicit. If we codify valid states and ranges in TypeScript, with detail rich exemplars, compatibility matrices, capabilities, we're feeding the LLM the exact kind of structured signal it thrives on. No more guesswork, no more hallucinating prop contracts.
      </Typography>

      <Typography level="body-md" sx={{ mb: 4 }}>
        That means new UI elements stop being "new code" in the traditional sense. They become new rows in a schema, or a new interface definition. The systems (validation, accessibility, focus management, analytics) already know how to apply themselves.
      </Typography>

      <Box sx={{ 
        bgcolor: 'primary.50', 
        p: 3, 
        borderRadius: 'md', 
        mb: 4
      }}>
        <Typography level="body-md" sx={{ fontWeight: 'bold', mb: 2 }}>
          The net result: a frontend architecture that works like an ECS, only turn-based, and a design system that's not just easier for humans to use, but optimized for AI collaboration.
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Typography level="h3" sx={{ mb: 3 }}>
        The Four Pillars
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography level="h4" sx={{ mb: 2 }}>
          Data (schemas)
        </Typography>
        
        <Typography level="body-md" sx={{ mb: 3 }}>
          Every UI element is defined by explicit TypeScript schemas that describe its shape, constraints, and relationships.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography level="h4" sx={{ mb: 2 }}>
          Capabilities (flags)
        </Typography>
        
        <Typography level="body-md" sx={{ mb: 3 }}>
          Feature flags that define what behaviors an entity supports, creating a compatibility matrix.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography level="h4" sx={{ mb: 2 }}>
          Systems (cross-cutting behaviors)
        </Typography>
        
        <Typography level="body-md" sx={{ mb: 3 }}>
          Shared systems that operate on any entity with the right capabilities - validation, accessibility, focus management, analytics.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography level="h4" sx={{ mb: 2 }}>
          Contexts (environments)
        </Typography>
        
        <Typography level="body-md" sx={{ mb: 3 }}>
          Environmental constraints that modify how entities behave based on theme, viewport, user preferences, and feature flags.
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Typography level="h3" sx={{ mb: 3 }}>
        The Architecture Advantage
      </Typography>

      <Typography level="body-md" sx={{ mb: 3 }}>
        This approach reframes frontend development from writing bespoke components to defining data structures and letting systems compose them. The AI can generate coherent, functional code because it's working within explicit constraints rather than reverse-engineering implicit patterns.
      </Typography>

      <Typography level="body-md" sx={{ mb: 3 }}>
        When you ask for a new feature, instead of the AI guessing at prop interfaces and implementing everything from scratch, it extends existing schemas and leverages established systems. The result is more consistent, maintainable, and architecturally coherent code.
      </Typography>

      <Typography level="body-md" sx={{ mb: 4 }}>
        The developer experience also improves - instead of remembering implicit patterns and hunting through component libraries, you learn schemas once and apply them everywhere. New team members can understand the system by reading concrete examples rather than abstract documentation.
      </Typography>
    </>
  )
};