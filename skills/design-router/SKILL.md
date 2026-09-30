---
name: design-router
description: Route visible-artifact creation, editing, exploration, review, or cleanup through the Design Layer. Use for websites, apps, UI, dashboards, presentations, documents, data visualizations, motion, images, and other work whose visible experience materially matters. Do not use for backend-only, infrastructure-only, or purely textual work where visual form is incidental.
---

# Design Router

Use the smallest suitable Design Layer lane. Do not load every specialist.

## 1. Classify the request

Treat a task as visible-artifact work when composition, hierarchy, interaction, visual language, motion, layout, legibility, or presentation materially affects success. Otherwise stop routing and use the ordinary domain workflow.

Choose one primary lane:

- implement an approved or sufficiently clear direction -> `$design-execute`
- compare directions or calibrate one axis -> `$design-explore`
- point at a local browser element and compare edits in place -> `$design-live`
- verify correctness and quality gates -> `$design-audit`
- give read-only design judgment -> `$design-critique`
- record an explicit reaction or selection -> `$design-feedback`
- remove introduced cruft -> `$design-deslop`

When a task legitimately spans lanes, sequence them: context -> explore if needed -> execute -> audit -> critique -> feedback. Never pretend that aesthetic critique is a deterministic test.

## 2. Resolve context

Read [authority.md](references/authority.md), [context-contract.md](references/context-contract.md), and [lanes.md](references/lanes.md). Resolve every linked resource and script relative to this `SKILL.md`, not the user's current working directory. Run the resolver by its absolute resolved path:

```powershell
node <design-router-skill-dir>/scripts/resolve-context.mjs --root <project-root>
```

For creative direction or aesthetic judgment, read [creative-philosophy.md](references/creative-philosophy.md) and carry its intent into the selected lane.

Load only the files reported as present and relevant. Global taste is advisory evidence, never project authority. Do not create context files during review-only work.

Choose `<project-root>` as the nearest ancestor that contains the artifact and its product/design context. In a monorepo, prefer the nearest product root over the repository root. Ask only when multiple plausible roots would materially change the context.

## 3. Preflight

For a website or app UI whose creative direction needs developing, read [intent-interview.md](references/intent-interview.md). Use the project intent to infer design choices, refine that interpretation with the user, and maintain the evolving project brief. Continue from existing answers rather than restarting discovery.

For scoped edits or an established direction, ask only what is needed to resolve consequential uncertainty or blockers. Make and state bounded assumptions when they preserve intent and remain easy to revise.

## 4. Hand off

Tell the user which Design Layer skill is being used and why. Pass a compact brief containing:

- artifact, audience, and single job
- hard constraints and explicit instruction
- applicable project context and the current design brief location, when present
- taste signals labelled as contextual or global
- chosen lane and requested output
- unresolved uncertainty, if any

Invoke only the selected specialist. If the router can answer a trivial classification without loading another skill, do so.

## Guardrails

- Explicit current instructions beat all taste evidence.
- Accessibility, safety, legal, format, and hard technical constraints are never softened for aesthetics.
- Borrow mechanics, not identities. Do not paste a third-party house style onto the project.
- Review-only means no file writes, package installs, event appends, or configuration changes.
- Do not download optional tools implicitly.
