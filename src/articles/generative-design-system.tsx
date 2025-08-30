import { Typography, Box, Divider } from '@mui/joy';
import type { ArticleData } from '../types/article';

export const generativeDesignSystem: ArticleData = {
  meta: {
    id: 'generative-design-system',
    title: 'The Generative Design System: Why AI Should Learn Your Patterns, Not Follow Your Rules',
    description:
      'Stop enforcing consistency manually. Start teaching it through examples. How exemplar-driven architecture creates self-improving design systems.',
    date: 'June 2025',
    readTime: '7 min read',
    type: 'internal',
  },
    content: (
      <>
        <Typography level="body-sm" sx={{ mb: 3, fontStyle: 'italic', color: 'text.secondary', display: 'block', borderLeft: '3px solid', borderColor: 'primary.300', pl: 2 }}>
          "Stop enforcing consistency manually. Start teaching it through examples. This is my framework for thinking about exemplar-driven architecture and self-improving design systems."
        </Typography>

        <Typography level="body-md" sx={{ mb: 3 }}>
          Traditional design systems are rigid, rule-bound, and manually enforced. But what if consistency wasn't enforced — but <strong>learned</strong>? This approach introduces a <strong>virtuous cycle of architectural refinement</strong>:
        </Typography>

        <Box sx={{ 
          bgcolor: 'neutral.50', 
          p: 3, 
          borderRadius: 'md', 
          mb: 4,
          fontFamily: 'monospace',
          fontSize: 'sm',
          textAlign: 'center'
        }}>
          Human creates exemplar → AI generates variants → Human refines → AI learns patterns → Better generation
        </Box>

        <Typography level="body-md" sx={{ mb: 4 }}>
          Where traditional design systems become brittle and bloated over time, a generative design system <strong>gets smarter</strong> — improving with every use, rather than decaying under complexity.
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography level="h3" sx={{ mb: 3 }}>
          🏗️ Core Components
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography level="h4" sx={{ mb: 2 }}>
            1. The Exemplar Layer (Human-Crafted)
          </Typography>
          
          <Typography level="body-md" sx={{ mb: 3 }}>
            A curated "kitchen sink" file like <code>ArticleExemplar.tsx</code> serves as the architectural north star:
          </Typography>

          <Box sx={{ 
            bgcolor: 'neutral.50', 
            p: 3, 
            borderRadius: 'md', 
            mb: 3,
            fontFamily: 'monospace',
            fontSize: 'sm'
          }}>
            ArticleExemplar.tsx<br/>
            ├── Hero variations<br/>
            ├── Content block patterns<br/>
            ├── Sidebar configurations<br/>
            ├── Footer arrangements<br/>
            ├── Interactive elements<br/>
            └── Edge case handling
          </Box>

          <Typography level="body-md" sx={{ mb: 3 }}>
            It demonstrates every intended composition, from typical use cases to stylistic and structural edge cases.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography level="h4" sx={{ mb: 2 }}>
            2. The Generation Layer (AI-Driven)
          </Typography>
          
          <Typography level="body-md" sx={{ mb: 2 }}>
            This layer references the exemplar to:
          </Typography>
          
          <Box sx={{ pl: 3, mb: 3 }}>
            <Typography level="body-md" sx={{ mb: 1 }}>• Generate structurally coherent variants</Typography>
            <Typography level="body-md" sx={{ mb: 1 }}>• Maintain architectural consistency</Typography>
            <Typography level="body-md">• Learn from human adjustments and corrections</Typography>
          </Box>

          <Typography level="body-md" sx={{ mb: 3 }}>
            Over time, the AI begins to predict and respect your team's idioms and stack-specific preferences.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography level="h4" sx={{ mb: 2 }}>
            3. The Content Layer (Data-Driven)
          </Typography>
          
          <Typography level="body-md" sx={{ mb: 2 }}>
            Content — whether structured (JSON), semi-structured (markdown), or freeform (text) — flows into the system and is formatted according to learned patterns. The result:
          </Typography>
          
          <Box sx={{ pl: 3, mb: 3 }}>
            <Typography level="body-md" sx={{ mb: 1 }}>• Style is preserved</Typography>
            <Typography level="body-md" sx={{ mb: 1 }}>• Semantics are respected</Typography>
            <Typography level="body-md">• Compositional integrity is maintained</Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Typography level="h3" sx={{ mb: 3 }}>
          🔄 The Self-Improving Mechanism
        </Typography>

        <Typography level="body-md" sx={{ mb: 3 }}>
          Every generation-refinement cycle teaches the system something new:
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography level="body-md" sx={{ mb: 1 }}>• <strong>Stack-Specific Quirks</strong>: It learns how your particular frontend stack behaves in real usage.</Typography>
          <Typography level="body-md" sx={{ mb: 1 }}>• <strong>Edge Cases</strong>: It adapts to unusual, valid combinations you surface through exemplars.</Typography>
          <Typography level="body-md" sx={{ mb: 1 }}>• <strong>Team Aesthetic</strong>: It internalizes visual and structural preferences specific to your team or product.</Typography>
          <Typography level="body-md">• <strong>Performance Patterns</strong>: It starts to understand what renders well and what doesn't — in real-world scenarios.</Typography>
        </Box>

        <Typography level="body-md" sx={{ mb: 4 }}>
          This feedback loop allows the system to grow <em>with</em> your codebase.
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography level="h3" sx={{ mb: 3 }}>
          💡 Why It Matters
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography level="body-md" sx={{ mb: 2 }}>
            ⚡ <strong>Lower Cognitive Load</strong>:
          </Typography>
          <Box sx={{ pl: 3 }}>
            <Typography level="body-md" sx={{ mb: 1 }}>• Developers learn by reading rich, concrete exemplars — not abstract API docs</Typography>
            <Typography level="body-md" sx={{ mb: 1 }}>• New contributors can follow realistic compositions instead of deciphering configuration</Typography>
            <Typography level="body-md">• Component usage becomes obvious in context</Typography>
          </Box>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography level="body-md" sx={{ mb: 2 }}>
            🔄 <strong>Built-in Consistency</strong>:
          </Typography>
          <Box sx={{ pl: 3 }}>
            <Typography level="body-md" sx={{ mb: 1 }}>• Instead of enforcing rules manually, patterns are learned and reproduced automatically</Typography>
            <Typography level="body-md" sx={{ mb: 1 }}>• Generated variants stay architecturally coherent — no lint rules required</Typography>
            <Typography level="body-md">• Quality improves over time with minimal governance</Typography>
          </Box>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography level="body-md" sx={{ mb: 2 }}>
            📈 <strong>Scalable by Default</strong>:
          </Typography>
          <Box sx={{ pl: 3 }}>
            <Typography level="body-md" sx={{ mb: 1 }}>• New content types follow established, exemplar-based patterns</Typography>
            <Typography level="body-md" sx={{ mb: 1 }}>• AI handles the boring, repetitive parts of system enforcement</Typography>
            <Typography level="body-md">• Developers focus on higher-leverage architectural decisions</Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Typography level="h3" sx={{ mb: 3 }}>
          🛠️ Implementation Considerations
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography level="h4" sx={{ mb: 2 }}>
            Exemplar Design
          </Typography>
          <Box sx={{ pl: 3 }}>
            <Typography level="body-md" sx={{ mb: 1 }}>• Must include all intended patterns and realistic usage</Typography>
            <Typography level="body-md" sx={{ mb: 1 }}>• Should include known edge cases and error states</Typography>
            <Typography level="body-md">• Needs to balance completeness with maintainability</Typography>
          </Box>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography level="h4" sx={{ mb: 2 }}>
            Training Data Quality
          </Typography>
          <Box sx={{ pl: 3 }}>
            <Typography level="body-md" sx={{ mb: 1 }}>• Exemplars become the <strong>source of truth</strong> for architectural rules</Typography>
            <Typography level="body-md" sx={{ mb: 1 }}>• Every human refinement expands the system's internal dataset</Typography>
            <Typography level="body-md">• Poor-quality exemplars produce weak generation — garbage in, garbage out</Typography>
          </Box>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography level="h4" sx={{ mb: 2 }}>
            Guardrails and Boundaries
          </Typography>
          <Box sx={{ pl: 3 }}>
            <Typography level="body-md" sx={{ mb: 1 }}>• AI is scoped to compositional rules, not creative control</Typography>
            <Typography level="body-md" sx={{ mb: 1 }}>• Humans remain in charge of structure and semantics</Typography>
            <Typography level="body-md">• Boundaries prevent overgeneralization or pattern drift</Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Typography level="h3" sx={{ mb: 3 }}>
          🚀 The Long-Term Vision
        </Typography>

        <Typography level="body-md" sx={{ mb: 3 }}>
          This approach reframes frontend development:
        </Typography>

        <Box sx={{ overflowX: 'auto', mb: 4 }}>
          <Box sx={{ minWidth: 500, border: '1px solid', borderColor: 'divider', borderRadius: 'md', overflow: 'hidden' }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', bgcolor: 'neutral.100' }}>
              <Typography level="body-sm" sx={{ p: 2, fontWeight: 'bold', borderRight: '1px solid', borderColor: 'divider' }}>Traditional</Typography>
              <Typography level="body-sm" sx={{ p: 2, fontWeight: 'bold' }}>Generative</Typography>
            </Box>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '1px solid', borderColor: 'divider' }}>
              <Typography level="body-sm" sx={{ p: 2, borderRight: '1px solid', borderColor: 'divider' }}>Manual consistency</Typography>
              <Typography level="body-sm" sx={{ p: 2 }}>Learned pattern recognition</Typography>
            </Box>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '1px solid', borderColor: 'divider' }}>
              <Typography level="body-sm" sx={{ p: 2, borderRight: '1px solid', borderColor: 'divider' }}>Rigid component libraries</Typography>
              <Typography level="body-sm" sx={{ p: 2 }}>Adaptive compositional systems</Typography>
            </Box>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '1px solid', borderColor: 'divider' }}>
              <Typography level="body-sm" sx={{ p: 2, borderRight: '1px solid', borderColor: 'divider' }}>Abstract rules</Typography>
              <Typography level="body-sm" sx={{ p: 2 }}>Concrete example learning</Typography>
            </Box>
          </Box>
        </Box>

        <Typography level="body-md" sx={{ mb: 4 }}>
          Instead of becoming brittle and bloated over time, the design system <strong>gets smarter</strong> — improving with every use, rather than decaying under complexity.
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography level="h3" sx={{ mb: 3 }}>
          ✅ TL;DR
        </Typography>

        <Box sx={{ bgcolor: 'primary.50', p: 3, borderRadius: 'md', mb: 4 }}>
          <Typography level="body-md" sx={{ fontWeight: 'bold', mb: 2 }}>
            You don't enforce rules. You demonstrate patterns. The system learns.
          </Typography>
          <Typography level="body-md" sx={{ fontStyle: 'italic' }}>
            This is what happens when you treat your design system not as a rulebook — but as training data.
          </Typography>
        </Box>
      </>
    )
};
