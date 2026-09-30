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

## Selection handoff

When the user chooses, send the ledger, chosen option, rejected options, and stated reasons to `$design-feedback`. Do not infer reasons the user did not give.
