# Variant protocol

## Concept exploration ledger

Record:

```json
{
  "mode": "concept",
  "invariants": ["audience", "job", "required content", "hard constraints"],
  "concepts": [
    {
      "id": "descriptive-slug",
      "thesis": "...",
      "signature": "...",
      "tradeoffs": ["..."]
    }
  ]
}
```

Concepts must be holistic and equally resolved. Differences should appear in hierarchy, spatial model, visual language, interaction posture, and signature—not merely palette.

## Controlled calibration ledger

Record:

```json
{
  "mode": "calibration",
  "axis": "expressive-intensity",
  "invariants": ["content", "layout", "type scale", "interaction model"],
  "variants": [
    {"id": "quiet", "position": 0.25},
    {"id": "balanced", "position": 0.5},
    {"id": "vivid", "position": 0.8}
  ]
}
```

Change only the named axis. If another variable must change for technical reasons, disclose it. Capture screenshots or equivalent renders using the same viewport, data, state, and fidelity.

## Full-size interactive comparisons

When behaviour, scale or context is the uncertainty, build a small isolated prototype with an immediate variant switcher. Show the design at a realistic size with representative surrounding content and usable interactions; miniature cards can conceal differences in density, navigation and motion. Use a plain local page or an isolated route in the existing stack, whichever answers the question with less setup.

Keep the comparison controls secondary to the work. Label choices meaningfully, support keyboard operation, and make the selected variant clear. Preserve equivalent data, viewport and relevant interaction state when switching; if state cannot be shared fairly, provide an explicit reset or replay. For calibration, keep non-axis variables fixed. For concept exploration, hold the brief constant while allowing the concepts' underlying design logic to differ.

A switcher is useful when quick alternation improves judgment; static side-by-side renders may be clearer for other questions. Choose the number of variants and control layout for the decision. There is no required grid, framework or fixed option count. Use equivalent fidelity so the presentation does not decide the winner.

Keep experimental state and temporary comparison controls identifiable and separate from the production flow. Once a direction is selected, carry the relevant implementation and reasons into the project, then check that prototype controls or inactive variants have not leaked into the deliverable. Existing [design-live](../../design-live/SKILL.md) is available when the task is in-place element selection and editing instead.

## Selection handoff

When the user chooses, send the ledger, chosen option, rejected options, and stated reasons to `$design-feedback`. Do not infer reasons the user did not give.
