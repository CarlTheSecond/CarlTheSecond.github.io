import { Typography, Box, Divider } from "@mui/joy";
import type { ArticleData } from '../types/article';
import diagramScaleOpinionation from '../assets/diagram-scale-opinionation.png';
import diagramScaleOpinionation2 from '../assets/diagram-scale-opinionation-2.png';

export const maintainableCode: ArticleData = {
    meta: {
    id: 'maintainable-code',
    title: "Maintainability in UI Design Systems: Scale vs. Opinionation",
    description: "Some ideas about maintainablity over the long term.",
    date: "October 2023",
    readTime: "6 min read",
    type: 'internal',
    },
    content: (
      <>
        <Typography level="body-sm" sx={{ mb: 3, fontStyle: 'italic', color: 'text.secondary', display: 'block', borderLeft: '3px solid', borderColor: 'primary.300', pl: 2 }}>
          "This is a work-in-progress mental model I've been using to think about component design more clearly. Curious if others have found something similar helpful — or see flaws I haven't."
        </Typography>

        <Typography level="body-md" sx={{ mb: 3 }}>
          Maintainability isn't a single axis—it's a balance between <strong>context independence</strong>, <strong>composability</strong>, and <strong>cognitive load</strong>. But there's another key dimension that influences maintainability and usability in component libraries:
        </Typography>

        <Box 
          component="img" 
          src={diagramScaleOpinionation} 
          alt="Scale vs Opinionation - Overlapping circles"
          sx={{ width: '100%', mb: 3, borderRadius: 'md' }}
          onError={(e) => {
            // Hide broken images gracefully
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />

        <Typography level="body-sm" sx={{ mb: 3, fontStyle: 'italic', textAlign: 'center', color: 'text.secondary' }}>
          The relationship between a component's scale and its level of opinionation.
        </Typography>

        <Box 
          component="img" 
          src={diagramScaleOpinionation2} 
          alt="Scale vs Opinionation - Stepped layout"
          sx={{ width: '100%', mb: 3, borderRadius: 'md' }}
          onError={(e) => {
            // Hide broken images gracefully
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />

        <Typography level="body-md" sx={{ mb: 4 }}>
          If you were to plot all of the components in your design system on this chart, anything which falls into the overlapping areas is likely to be bending the rules in a way that causes significant maintenance overhead when changes are required as the design system progresses through its lifecycle.
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography level="h3" sx={{ mb: 3 }}>
          ⚖️ Scale vs. Opinionation Matrix
        </Typography>

        <Box sx={{ overflowX: 'auto', mb: 4 }}>
          <Box sx={{ minWidth: 600, border: '1px solid', borderColor: 'divider', borderRadius: 'md', overflow: 'hidden' }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 2fr', bgcolor: 'neutral.100' }}>
              <Typography level="body-sm" sx={{ p: 2, fontWeight: 'bold', borderRight: '1px solid', borderColor: 'divider' }}>Scale</Typography>
              <Typography level="body-sm" sx={{ p: 2, fontWeight: 'bold', borderRight: '1px solid', borderColor: 'divider' }}>Focus</Typography>
              <Typography level="body-sm" sx={{ p: 2, fontWeight: 'bold', borderRight: '1px solid', borderColor: 'divider' }}>Opinionation</Typography>
              <Typography level="body-sm" sx={{ p: 2, fontWeight: 'bold' }}>Design Strategy</Typography>
            </Box>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 2fr', borderTop: '1px solid', borderColor: 'divider' }}>
              <Typography level="body-sm" sx={{ p: 2, fontWeight: 'bold', borderRight: '1px solid', borderColor: 'divider' }}>Atomic</Typography>
              <Typography level="body-sm" sx={{ p: 2, borderRight: '1px solid', borderColor: 'divider' }}>Broad <em>coverage</em> for use cases</Typography>
              <Typography level="body-sm" sx={{ p: 2, borderRight: '1px solid', borderColor: 'divider' }}>🔹 Very low</Typography>
              <Typography level="body-sm" sx={{ p: 2 }}>Unopinionated and flexible — think buttons, icons, checkboxes.</Typography>
            </Box>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 2fr', borderTop: '1px solid', borderColor: 'divider' }}>
              <Typography level="body-sm" sx={{ p: 2, fontWeight: 'bold', borderRight: '1px solid', borderColor: 'divider' }}>Composed</Typography>
              <Typography level="body-sm" sx={{ p: 2, borderRight: '1px solid', borderColor: 'divider' }}><em>Context independence</em> within a known pattern</Typography>
              <Typography level="body-sm" sx={{ p: 2, borderRight: '1px solid', borderColor: 'divider' }}>🔸 Medium</Typography>
              <Typography level="body-sm" sx={{ p: 2 }}>Slightly opinionated — structured enough to be useful, flexible enough to be reused.</Typography>
            </Box>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 2fr', borderTop: '1px solid', borderColor: 'divider' }}>
              <Typography level="body-sm" sx={{ p: 2, fontWeight: 'bold', borderRight: '1px solid', borderColor: 'divider' }}>Templates</Typography>
              <Typography level="body-sm" sx={{ p: 2, borderRight: '1px solid', borderColor: 'divider' }}><em>Business logic & flow</em> for a specific feature</Typography>
              <Typography level="body-sm" sx={{ p: 2, borderRight: '1px solid', borderColor: 'divider' }}>🔴 High</Typography>
              <Typography level="body-sm" sx={{ p: 2 }}>Highly opinionated — intended for direct use in a specific context.</Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography level="body-md" sx={{ mb: 1 }}>• <strong>Atomic components</strong> prioritize <strong>context independence</strong> and reduce <strong>cognitive load</strong>.</Typography>
          <Typography level="body-md" sx={{ mb: 1 }}>• <strong>Composed components</strong> offer a trade-off between <strong>composability</strong> and <strong>independence</strong>.</Typography>
          <Typography level="body-md">• <strong>Templates</strong> focus on <strong>composability</strong>, but with greater <strong>cognitive overhead</strong> and reduced flexibility.</Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Typography level="h3" sx={{ mb: 3 }}>
          💡 Design Guidelines
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography level="body-md" sx={{ mb: 2 }}>
            🔹 <strong>Atomic components</strong> (e.g. <code>adm-btn</code>, <code>adm-icon</code>):
          </Typography>
          <Box sx={{ pl: 3 }}>
            <Typography level="body-md" sx={{ mb: 1 }}>• Should cover many use cases</Typography>
            <Typography level="body-md" sx={{ mb: 1 }}>• Avoid assumptions about layout, size, or semantics</Typography>
            <Typography level="body-md" sx={{ mb: 1 }}>• Be extremely reusable</Typography>
          </Box>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography level="body-md" sx={{ mb: 2 }}>
            🔸 <strong>Composed components</strong> (e.g. <code>adm-form-input</code>):
          </Typography>
          <Box sx={{ pl: 3 }}>
            <Typography level="body-md" sx={{ mb: 1 }}>• Wrap atomic components into a useful pattern</Typography>
            <Typography level="body-md" sx={{ mb: 1 }}>• Have sensible defaults, but allow overrides</Typography>
            <Typography level="body-md" sx={{ mb: 1 }}>• Prioritize context independence for reuse in various flows</Typography>
          </Box>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography level="body-md" sx={{ mb: 2 }}>
            🔴 <strong>Templates</strong> (e.g. <code>user-registration-form</code>, <code>vehicle-risk-step</code>):
          </Typography>
          <Box sx={{ pl: 3 }}>
            <Typography level="body-md" sx={{ mb: 1 }}>• Wire up multiple compositions into a single task-oriented unit</Typography>
            <Typography level="body-md" sx={{ mb: 1 }}>• Highly specific to a domain or flow</Typography>
            <Typography level="body-md" sx={{ mb: 1 }}>• Should favor clarity and maintainability over generalization</Typography>
          </Box>
        </Box>

        <Typography level="h3" sx={{ mb: 3 }}>
          💥 When to Break the Rules
        </Typography>

        <Typography level="body-md" sx={{ mb: 3 }}>
          While staying within the ideal zones of the scale/opinionation matrix encourages consistency, reusability, and maintainability, real-world product development often demands flexibility. There are valid reasons to break the rules — but it's important to do so <em>intentionally</em> and with an understanding of the tradeoffs.
        </Typography>

        <Typography level="body-md" sx={{ mb: 3 }}>
          Here's how bending the rules in each quadrant impacts your architecture:
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ mb: 4 }}>
          <Typography level="h4" sx={{ mb: 2 }}>
            🔹 Bottom Left: <em>Ultra-Generic Atomic Components</em>
          </Typography>
          
          <Typography level="body-md" sx={{ mb: 2 }}>
            <strong>Breaking the Rule</strong>: Adding slight opinionation (e.g., default styles, layout behavior)
          </Typography>

          <Typography level="body-md" sx={{ mb: 1 }}>
            <strong>When it's worth it</strong>:
          </Typography>
          <Box sx={{ pl: 3, mb: 2 }}>
            <Typography level="body-md" sx={{ mb: 1 }}>• When the component is used frequently enough to justify a convenience default</Typography>
            <Typography level="body-md">• To improve dev experience by reducing boilerplate for 80% of cases</Typography>
          </Box>

          <Typography level="body-md" sx={{ mb: 1 }}>
            <strong>Tradeoffs</strong>:
          </Typography>
          <Box sx={{ pl: 3, mb: 2 }}>
            <Typography level="body-md">• May unintentionally encode design assumptions that don't scale</Typography>
          </Box>

          <Typography level="body-md" sx={{ mb: 1 }}>
            <strong>Mitigation</strong>:
          </Typography>
          <Box sx={{ pl: 3, mb: 2 }}>
            <Typography level="body-md" sx={{ mb: 1 }}>• Ensure overrides are easy and documented</Typography>
            <Typography level="body-md">• Keep defaults minimal and opt-in where possible</Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Typography level="h3" sx={{ mb: 3 }}>
          🌀 Long-Term Strategy
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography level="body-md" sx={{ mb: 1 }}>• <strong>Start unopinionated and context-independent.</strong> Early utilities should prioritize flexibility.</Typography>
          <Typography level="body-md" sx={{ mb: 1 }}>• <strong>Let patterns emerge.</strong> As usage grows, refactor common combinations into composed components.</Typography>
          <Typography level="body-md" sx={{ mb: 1 }}>• <strong>Build templates last.</strong> Only once needs are clear should highly opinionated templates emerge.</Typography>
        </Box>

        <Box sx={{ bgcolor: 'primary.50', p: 3, borderRadius: 'md', mb: 4 }}>
          <Typography level="body-md" sx={{ fontStyle: 'italic' }}>
            Some technical debt is just deferred decision-making. Let the usage surface show you where opinionation is truly needed.
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Typography level="h3" sx={{ mb: 3 }}>
          ✅ Summary
        </Typography>

        <Box>
          <Typography level="body-md" sx={{ mb: 1 }}>• Maintainability is a moving target—flexibility now enables better abstractions later.</Typography>
          <Typography level="body-md" sx={{ mb: 1 }}>• Don't over-engineer early. Keep atomic components lean and adaptable.</Typography>
          <Typography level="body-md" sx={{ mb: 1 }}>• Scale opinionation with component scope: <strong>small = flexible</strong>, <strong>large = opinionated</strong>.</Typography>
          <Typography level="body-md">• Use this model as a guidepost, not a hard rule. Design for the team that's maintaining the code next.</Typography>
        </Box>
      </>
    )
}
