# Routing lanes

| User intent | Primary skill | Typical follow-up |
| --- | --- | --- |
| Build, redesign, implement, refine | `design-execute` | audit, optional critique |
| Concepts, directions, variants, compare | `design-explore` | execute selected option |
| Select browser elements, tune live, compare edits in place | `design-live` | execute accepted change, audit |
| Check, verify, accessibility, QA, ship review | `design-audit` | critique if aesthetics matter |
| Critique, opinion, why it feels wrong, choose | `design-critique` | execute if fixes authorized |
| I prefer/reject/choose/rate this | `design-feedback` | rebuild overlay |
| Clean generated cruft, simplify diff | `design-deslop` | audit |

## Mixed requests

- "Give me options and build the best" -> explore, pause for user choice unless permission to choose is explicit, then execute.
- "Audit and fix" -> audit first, then execute only confirmed findings, then audit again.
- "Critique this" -> critique only; do not silently fix.
- "Make it accessible and prettier" -> execute with hard accessibility gates, then audit; critique only if useful.
- "Backend endpoint for a design app" -> no routing unless a visible artifact is also in scope.
