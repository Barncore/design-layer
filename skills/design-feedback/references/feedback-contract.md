# Feedback evidence contract

Events record an explicit observation, decision, scope, confidence, provenance, and append-only correction.

## Required ideas

- `projectId`: stable project identifier or normalized project path
- `artifactId`: file, route, screen, deck, document, or experiment identifier
- `domain`: optional cross-project domain such as product-ui, editorial, or presentation
- `eventType`: `selection`, `rejection`, `rating`, `reaction`, `correction`
- `decision`: concise factual statement of what the user chose or rejected
- `scope`: `artifact`, `project`, `domain`, `global`, or `unknown`
- `confidence`: 0 to 1; confidence in transcription/scope, not strength of taste
- `evidence`: user words or a faithful compact paraphrase
- `provenance`: who supplied it and how

## Variant fields

When feedback comes from exploration, include `invariants`, `axis`, `selected`, and `rejected`. This lets later systems distinguish a preference for stronger contrast from a preference for an entirely different concept.

## Corrections

Never edit the earlier line. Append a `correction` event with `correctsEventId` and the corrected statement.

## Promotion logic

The proposal script defaults to at least three supportive events, at least two distinct projects or named domains, mean support confidence of at least 0.75, and more support events than contradictions. Use its `--min-count` and `--min-confidence` flags to change those thresholds; it does not read plugin or project configuration. Contradiction confidence and contextual specificity are reported for review rather than used as automatic vetoes. This is a proposal threshold, not proof or permission to generalize.
