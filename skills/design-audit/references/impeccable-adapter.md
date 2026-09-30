# Impeccable adapter

The adapter consumes the JSON array from `impeccable detect --json`. It does not run `npx`, install the package, enable hooks, or send telemetry.

Default disposition:

- detector findings marked `advisory` -> `warn`
- known accessibility and interaction correctness rules -> `warn` plus `candidateHardGate: true`; verify, then promote to audit `fail` if confirmed
- known stylistic AI-trope rules -> `critique`
- unknown error-severity rules -> `warn` plus an adapter warning until classified
- everything else -> `warn`

The project may add `.design-layer/config.json`:

```json
{
  "audit": {
    "impeccable": {
      "overrides": {
        "gradient-text": {
          "disposition": "approved",
          "reason": "Approved campaign identity treatment",
          "sourceRef": "DESIGN.md#campaign-title-treatment"
        }
      }
    }
  }
}
```

Allowed dispositions are `fail`, `warn`, `critique`, and `approved`. An override without a non-empty reason and `sourceRef` is ignored and reported. Approval suppresses neither source evidence nor detector output; it records intentional disposition so reviewers can inspect the decision.

Protected accessibility and interaction-correctness candidates cannot be reclassified by configuration. Detector output alone is still a candidate: a human or runtime check must confirm the condition before promoting it to a demonstrated hard-gate `fail`. Unverified candidates yield `Needs review`, not `Block`. Invalid and rejected overrides are returned in adapter warnings rather than disappearing silently.

Keep the bundled engine pinned. The lock file records both the source used to design the adapter and the shipped executable; they have different version labels. Running the optional engine is a separate choice from using Design Layer's ordinary audit guidance.


## Bundled engine and measured coverage

The optional runner bundles `@impeccable/cli-windows-x64@0.1.5` with its Apache-2.0 license and verified registry integrity. Its executable reports `4.0.0`; package and binary labels are recorded separately in `runtime/impeccable/provenance.json`. It does not install upstream skills or hooks.

The 2026-09-20 bounded pilot checked nine cases: a baseline, inline contrast, linked CSS, JavaScript-only contrast in source and browser modes, rendered contrast, an unlabelled input, a missing target and a partial target failure. Linked CSS and rendered changes were detected. Source scanning missed the JavaScript-only condition as expected. The unlabelled input was missed. Missing/partial targets returned an operational failure, with findings retained when present.

An empty findings array does not establish full coverage. Continue semantic, keyboard, accessible-name, state and responsive checks. The launcher selects an existing Edge/Chrome executable on Windows because the engine's automatic browser discovery failed in the pilot. An explicit `IMPECCABLE_BROWSER` takes precedence. No browser is downloaded.

Detector exit 2 means findings, not Design Layer hard-gate failure. Exit 1, invalid JSON, timeout or adapter failure makes `scan-report.json` incomplete. Never turn these into a passing audit. The wrapper uses `--no-config` to avoid silently inheriting detector exclusions; documented Design Layer disposition overrides still apply after scanning. Font/glow/gradient opinions remain critique, while contrast candidates require verification.
