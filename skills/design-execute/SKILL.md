---
name: design-execute
description: Build or materially revise a visible artifact from an approved or sufficiently clear direction. Use for implementation of web UI, product screens, dashboards, documents, presentations, visualizations, motion, or other designed outputs. Do not use when the user primarily wants multiple concepts, read-only critique, or an audit.
---

# Design Execute

Implement the brief as a design engineer, preserving the project's system and the user's actual constraints. For creative choices, apply the shared [creative philosophy](../design-router/references/creative-philosophy.md).

## Workflow

1. Read the routed brief and the current project brief (`DESIGN-BRIEF.md` or its established path), plus applicable `PRODUCT.md`, `DESIGN.md`, project overlay, and taste evidence. For a website or app UI whose creative direction still needs developing, use [intent-interview.md](../design-router/references/intent-interview.md) before implementation. Continue from existing answers.
2. Inspect the artifact and its existing design system before changing it. Reuse established tokens, components, conventions, and content structure unless the brief explicitly replaces them.
3. When choosing or refining visual or interaction relationships, consult the relevant domains of the [design parameter field guide](../design-router/references/design-parameters.md). Carry the chosen relationships and their reasons into the implementation and visual review. A scoped fix within an established direction does not require a catalogue-wide redesign. For substantial creative work, state a compact design thesis connecting the subject, audience, purpose and visual logic. Let distinctive choices express the project's character and intended experience.
4. Plan the smallest coherent change. Match execution complexity to the vision: expressive work needs enough craft; minimal work needs exact spacing, type, rhythm, and states.
5. Implement fully, including responsive behavior, keyboard operation, visible focus, meaningful states, readable contrast, reduced-motion behavior, and real content where available.
6. Inspect the result visually when the environment permits. Test relevant states and viewports, then fix the defects you can observe.
7. Run `$design-audit`. Use `$design-critique` only when judgment beyond gates is useful.

Read [frontend-mechanics.md](references/frontend-mechanics.md) for frontend work and [motion-mechanics.md](references/motion-mechanics.md) whenever motion is introduced or changed.

Load additional references only when relevant:

- [expressive-interaction.md](../design-explore/references/expressive-interaction.md) when implementing a defining spatial, material or experimental interaction, including shader and 3D effects.
- [concept-fidelity.md](references/concept-fidelity.md) to implement an approved visual concept without losing its defining relationships.
- [component-repertoire.md](../design-explore/references/component-repertoire.md) when a component or effect reference would help realise the brief.
- [transformations.md](references/transformations.md) to interpret feedback such as bolder, quieter or more distinctive.
- [craft-details.md](references/craft-details.md) for fine type, spacing, colour, material and interaction decisions.
- [color-systems.md](references/color-systems.md) when authoring palette scales, semantic colour roles or themes.
- [direct-manipulation.md](references/direct-manipulation.md) for drag, swipe, snapping and interruptible gesture-driven motion.
- [interaction-craft.md](references/interaction-craft.md) for measured containers, exit lifecycles, shared-element identity, optional sound, prefetching or icon morphs.
- [native-platforms.md](references/native-platforms.md) for iOS, iPadOS or Android work.

## Decision rules

- Typography, layout, structure, color, motion, and copy must encode something true about the product or content.
- Do not default to familiar AI design tropes unless the brief genuinely calls for them.
- Taste is a tiebreaker, not a mandate. Contextual taste beats global taste; both lose to explicit instructions and project truth.
- Never install a library when the existing stack or platform primitives can do the job well.
- Never invent evidence that visual QA occurred. State what was and was not rendered or exercised.

## Handoff

Lead with what is now built. List the important files changed, the core design decision, validation performed, and any remaining risk. Keep design autobiography out of it.
