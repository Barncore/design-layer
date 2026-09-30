---
name: design-feedback
description: Record explicit user feedback about a design option or artifact, rebuild a project-local overlay, and propose evidence-backed taste-model promotions. Use after the user selects, rejects, rates, or explains a design choice. Never infer feedback from silence or automatically overwrite global taste.
---

# Design Feedback

Turn explicit reactions into inspectable evidence without converting one mood into constitutional law.

## Record an event

Read [feedback-contract.md](references/feedback-contract.md) and the schema at [feedback-event.schema.json](references/feedback-event.schema.json). Prepare one JSON event, then run:

```powershell
node <design-feedback-skill-dir>/scripts/append-event.mjs --root <project-root> --event <event.json>
```

Record the artifact, decision, selected/rejected option, invariants, named axis where applicable, reasons in the user's own terms, evidence scope, and confidence. Use `unknown` rather than invented certainty.

## Build the project overlay

```powershell
node <design-feedback-skill-dir>/scripts/build-overlay.mjs --root <project-root>
```

This deterministically rebuilds `.design-layer/project-overlay.md` from append-only events. The overlay is project guidance below `DESIGN.md`, not a replacement for it.

## Propose global promotion

```powershell
node <design-feedback-skill-dir>/scripts/propose-promotions.mjs --events <events-a.jsonl> --events <events-b.jsonl>
```

Resolve scripts relative to this `SKILL.md`. Promotion requires repeated, independent, reasonably confident active evidence; corrected-away events never count. The script emits proposals only. It never edits the global taste file. Present each proposal with supporting and contradicting events, scope, confidence, contextual exceptions, and the exact candidate wording for user approval.

## Rules

- Append; do not rewrite history. Corrections are new events referencing the prior event.
- Silence, continued work, or lack of complaint is not positive feedback.
- A project choice defaults to project scope.
- Preserve rejected options and reasons; negative evidence is often more diagnostic.
- Do not auto-promote. The user alone approves changes to global taste.
