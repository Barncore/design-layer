---
name: design-audit
description: Verify a visible artifact using hard gates and contextual warnings. Use for accessibility, responsive behavior, interaction states, semantic structure, performance-sensitive UI patterns, deterministic anti-pattern output, or pre-ship design QA. Use read-only unless the user explicitly asks to fix findings.
---

# Design Audit

Separate what can fail objectively from what deserves human judgment.

## 1. Establish evidence scope

State whether the audit is based on source inspection, static tooling, a rendered artifact, browser interaction, screenshots, or some combination. Never call source review runtime proof.

## 2. Run hard gates

Read [gate-policy.md](references/gate-policy.md). Inspect, as applicable:

- valid structure and required format
- semantic controls and keyboard reachability
- accessible names, focus visibility, contrast, and reduced motion
- responsive layout, overflow, text expansion, empty/error/loading/disabled states
- destructive-action safeguards and truthful feedback
- broken links/assets, console or build errors, and material performance hazards

A hard-gate failure blocks approval. Cite exact file and line or exact screen/component, observed evidence, impact, and a concrete fix.

## 3. Normalize optional Impeccable output

Impeccable is optional. This plugin includes a pinned Windows x64 engine; running it makes no download. Use it deliberately as supplementary evidence and read [impeccable-adapter.md](references/impeccable-adapter.md) for coverage and operating limits. The wrapper records targets, source/browser mode, raw output, operational failures and normalized findings:

```powershell
node <design-audit-skill-dir>/scripts/scan-design.mjs --mode source --target <file> --out <report-dir> --root <project-root>
```

Use `--mode browser --target <local-app-url>` when JavaScript and rendered styles matter. Audit permission does not imply permission to inject a live editor. If importing detector JSON from another run, normalize with:

```powershell
node <design-audit-skill-dir>/scripts/normalize-impeccable.mjs --input <findings.json>
```

Resolve the script path relative to this `SKILL.md`. The adapter maps each rule to `fail`, `warn`, `critique`, or `approved`. Detector-only hard-gate candidates remain warnings marked `candidateHardGate` until verified in source or runtime; once confirmed, report them as hard-gate failures. Project configuration can override contextual dispositions when intent is documented, but cannot reclassify protected candidates. Read [impeccable-adapter.md](references/impeccable-adapter.md).

## 4. Report heuristic warnings

Warnings identify likely craft, consistency, or maintainability problems that need context. Do not inflate them into failures. Route subjective questions such as whether a glow, gradient, or asymmetry is intentional and effective to `$design-critique`.

## Output

Use three sections:

1. **Hard gates** — pass/fail, findings, evidence.
2. **Heuristic warnings** — ranked, contextual, non-blocking unless they expose a gate.
3. **Verification limits** — checks not run and what would prove them.

Verdict: `Block` if any hard gate fails, `Needs review` if gates pass but material warnings remain, `Approve` only when gates pass and no actionable warning remains. Do not edit files unless explicitly authorized.
