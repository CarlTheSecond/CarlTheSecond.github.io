import { Typography, Box } from "@mui/joy";
import type { ArticleData } from "../types/article";

export const universalComponents: ArticleData = {
    meta: {
        id: 'universal-components',
        title: "What if components stopped pretending they were universal?",
        description: 'Article about how universal components are misleading.',
        date: "March 2024",
        readTime: "8 min read",
        type: 'internal',
    },
    content: (
      <>
        <Typography level="h3" sx={{ mb: 3 }}>
          The Illusion of Universality
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          In modern component systems, we're taught to prize DRY reusable code above all else.
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          The ideal component, we're told, is flexible, generic, and universally applicable, it's totally context independent and able to be dropped into any layout, any theme, any interaction flow.
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          But this ideal often leads us down a path of brittle abstractions and hidden assumptions. Behind the clean surface of a "universal" component lies a tangle of implicit context: layout expectations, accessibility obligations, theming dependencies, and behavioural quirks.
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          When those assumptions go unmet, we're left debugging subtle failures that only appear when components are used "incorrectly".
        </Typography>

        <Typography level="body-md" sx={{ mb: 4 }}>
          This is the illusion of universality: the belief that components can work everywhere, when in truth, they were only ever designed to work somewhere, within some unspoken bounded context.
        </Typography>

        <Typography level="h3" sx={{ mb: 3 }}>
          🧩 Bounded Context Components – Compatibility Summary
        </Typography>

        <Typography level="h4" sx={{ mb: 2, color: 'success.600' }}>
          ✅ Core Idea
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          Components can belong to <strong>multiple contexts</strong>, each defining a set of behavioural guarantees.
        </Typography>

        <Typography level="body-md" sx={{ mb: 4 }}>
          <strong>Contextual compatibility</strong> becomes a <strong>metric of flexibility and composability</strong>, not just correctness.
        </Typography>

        <Typography level="h4" sx={{ mb: 2 }}>
          🔁 Components & Context Compatibility
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography level="body-md" sx={{ mb: 1 }}>
            • Components can <strong>declare compatibility</strong> with various contexts.
          </Typography>
          <Typography level="body-md" sx={{ mb: 1 }}>
            • Contexts define <strong>constraints, guarantees, and concerns</strong> (e.g., FormContext, LayoutContext, ThemeContext, TypographicContext).
          </Typography>
          <Typography level="body-md" sx={{ mb: 1 }}>
            • Components adapt behavior based on active context(s).
          </Typography>
        </Box>

        <Typography level="body-sm" sx={{ mb: 2, fontWeight: 'bold' }}>
          Example Compatibility Table
        </Typography>

        <Box sx={{ mb: 4, overflowX: 'auto' }}>
          <Box sx={{ minWidth: 400, border: '1px solid', borderColor: 'divider', borderRadius: 'md', overflow: 'hidden' }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr', bgcolor: 'neutral.100' }}>
              <Typography level="body-sm" sx={{ p: 2, fontWeight: 'bold', borderRight: '1px solid', borderColor: 'divider' }}>
                Component
              </Typography>
              <Typography level="body-sm" sx={{ p: 2, fontWeight: 'bold' }}>
                Compatible Contexts
              </Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr', borderTop: '1px solid', borderColor: 'divider' }}>
              <Typography level="body-sm" sx={{ p: 2, borderRight: '1px solid', borderColor: 'divider' }}>
                Button
              </Typography>
              <Typography level="body-sm" sx={{ p: 2 }}>
                Form, Layout, Action
              </Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr', borderTop: '1px solid', borderColor: 'divider' }}>
              <Typography level="body-sm" sx={{ p: 2, borderRight: '1px solid', borderColor: 'divider' }}>
                Card
              </Typography>
              <Typography level="body-sm" sx={{ p: 2 }}>
                Layout, Theme, Shadow
              </Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr', borderTop: '1px solid', borderColor: 'divider' }}>
              <Typography level="body-sm" sx={{ p: 2, borderRight: '1px solid', borderColor: 'divider' }}>
                Tooltip
              </Typography>
              <Typography level="body-sm" sx={{ p: 2 }}>
                Interaction, Accessibility
              </Typography>
            </Box>
          </Box>
        </Box>

        <Typography level="h4" sx={{ mb: 3 }}>
          📊 Compatibility as a First-Class Metric
        </Typography>

        <Typography level="body-sm" sx={{ mb: 2, fontWeight: 'bold' }}>
          1. Declarative Compatibility
        </Typography>

        <Box sx={{ bgcolor: 'neutral.100', p: 2, borderRadius: 'md', mb: 3 }}>
          <Typography level="body-sm" sx={{ fontFamily: 'monospace', whiteSpace: 'pre' }}>
            {
              `
                Button.compatibility = {
                FormContext: 'full',
                LayoutContext: 'partial',
                PresentationalContext: 'none'
              };
              `
            }
          </Typography>
        </Box>

        <Typography level="body-sm" sx={{ mb: 2, fontWeight: 'bold' }}>
          2. Context-Aware Linting
        </Typography>

        <Typography level="body-md" sx={{ mb: 3 }}>
          <strong>Example warning:</strong> "&lt;Tooltip&gt; used in &lt;FormContext&gt; without a focusable trigger."
        </Typography>

        <Typography level="body-sm" sx={{ mb: 2, fontWeight: 'bold' }}>
          3. Progressive Hardening
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography level="body-md" sx={{ mb: 1 }}>
            • <strong>Phase 1</strong> → Permissive composition (no enforcement)
          </Typography>
          <Typography level="body-md" sx={{ mb: 1 }}>
            • <strong>Phase 2</strong> → Log actual usage/mismatches for observability
          </Typography>
          <Typography level="body-md" sx={{ mb: 1 }}>
            • <strong>Phase 3</strong> → Require explicit compatibility declarations and tooling support
          </Typography>
        </Box>

        <Typography level="h4" sx={{ mb: 3 }}>
          🧠 Mental Model Shift
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography level="body-md" sx={{ mb: 1 }}>
            • <strong>Old mindset</strong>: "Can I use this here?"
          </Typography>
          <Typography level="body-md" sx={{ mb: 1 }}>
            • <strong>New mindset</strong>: "What does this component guarantee in this context?"
          </Typography>
        </Box>

        <Typography level="h4" sx={{ mb: 3, color: 'success.600' }}>
          ✅ Benefits
        </Typography>

        <Box sx={{ mb: 4, overflowX: 'auto' }}>
          <Box sx={{ minWidth: 500, border: '1px solid', borderColor: 'divider', borderRadius: 'md', overflow: 'hidden' }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: '150px 1fr', bgcolor: 'neutral.100' }}>
              <Typography level="body-sm" sx={{ p: 2, fontWeight: 'bold', borderRight: '1px solid', borderColor: 'divider' }}>
                Benefit
              </Typography>
              <Typography level="body-sm" sx={{ p: 2, fontWeight: 'bold' }}>
                Description
              </Typography>
            </Box>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: '150px 1fr', borderTop: '1px solid', borderColor: 'divider' }}>
              <Typography level="body-sm" sx={{ p: 2, borderRight: '1px solid', borderColor: 'divider' }}>
                🔄 Reusability
              </Typography>
              <Typography level="body-sm" sx={{ p: 2 }}>
                Adapt components to different use cases without rewriting
              </Typography>
            </Box>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: '150px 1fr', borderTop: '1px solid', borderColor: 'divider' }}>
              <Typography level="body-sm" sx={{ p: 2, borderRight: '1px solid', borderColor: 'divider' }}>
                📋 Auditability
              </Typography>
              <Typography level="body-sm" sx={{ p: 2 }}>
                Understand and visualize where components are safe to use
              </Typography>
            </Box>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: '150px 1fr', borderTop: '1px solid', borderColor: 'divider' }}>
              <Typography level="body-sm" sx={{ p: 2, borderRight: '1px solid', borderColor: 'divider' }}>
                🔐 Behavioral Guarantees
              </Typography>
              <Typography level="body-sm" sx={{ p: 2 }}>
                Improve consistency without rigidity
              </Typography>
            </Box>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: '150px 1fr', borderTop: '1px solid', borderColor: 'divider' }}>
              <Typography level="body-sm" sx={{ p: 2, borderRight: '1px solid', borderColor: 'divider' }}>
                ⚖️ Flexibility with Control
              </Typography>
              <Typography level="body-sm" sx={{ p: 2 }}>
                Encourage reuse while protecting system integrity
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ bgcolor: 'primary.50', p: 3, borderRadius: 'md', mb: 4 }}>
          <Typography level="body-md">
            💬 It creates a vocabulary for discussing component limitations. Instead of vague warnings like "don't use this here," you get precise statements about context compatibility.
          </Typography>
        </Box>

        <Typography level="body-md" sx={{ mb: 2 }}>
          I see this kinda like <strong>dependency injection for UX/behavior</strong>. By treating contexts like injectable services, you're formalizing the <em>environmental assumptions</em> of components which frees up the components to focus on handling a potential range of states within that boundary, a much more reasonable ask than must work everywhere no matter what.
        </Typography>

        <Typography level="body-md" sx={{ mb: 2 }}>
          We might end up with something like 'Presentational.Image' as a prefixing context boundary, or 'Accessible.Image', which will flag linting errors if the required props aren't present?
        </Typography>

        <Typography level="body-md" sx={{ mb: 3 }}>
          We could have context wrappers, which components could automatically derive their context from depending on their configuration of props, with a breakout of namespacing that component directly.
        </Typography>

        <Box sx={{ bgcolor: 'neutral.100', p: 2, borderRadius: 'md', mb: 4 }}>
          <Typography level="body-sm" sx={{ fontFamily: 'monospace', whiteSpace: 'pre' }}>
            {`<FormContext>
              <Presentation.Image {...imgProps}></Presentation.Image>
              <Tag {...tagProps} for=""></Tag>
              ...
            </FormContext>`}
          </Typography>
        </Box>
      </>
    )
}
