---
name: design-deslop
description: Remove newly introduced design, code, and copy cruft while preserving intentional craft and existing safeguards. Use after generated implementation when the user asks to clean up, simplify, de-slop, reduce boilerplate, or make a diff more disciplined. Do not use as permission for broad rewrites.
---

# Design Deslop

Make the artifact less generated, not less designed.

## Scope

Read [deslop-policy.md](references/deslop-policy.md). Start from the current diff or the explicitly named files. If no trustworthy baseline exists, say so and use a conservative source audit.

Remove only material cruft such as:

- redundant wrappers, tokens, helpers, comments, or duplicated styles
- copy that says nothing, repeats labels, or sounds like placeholder marketing
- arbitrary decorative devices unsupported by the brief
- unnecessary dependencies or abstractions introduced by the change
- defensive code that cannot execute and obscures real behavior

Preserve:

- accessibility semantics, focus behavior, reduced motion, states, and error handling
- security, validation, data integrity, and destructive-action safeguards
- responsive and internationalization behavior
- established project conventions and intentional signature details
- comments that explain non-obvious constraints or decisions

## Workflow

1. Identify the baseline and protected invariants.
2. Inspect the diff; distinguish introduced cruft from pre-existing debt.
3. Make the smallest edits that reduce complexity without changing behavior or design intent.
4. Run the relevant tests and `$design-audit` gates.
5. Report what was removed, what was deliberately preserved, and any behavior that still needs runtime verification.

Do not use line-count reduction as a quality metric. A shorter accessibility implementation that stops working is merely compact failure.
