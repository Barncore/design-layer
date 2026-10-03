# Validation and known limits

Validation has separate layers. A package can be structurally valid without proving the model makes better creative decisions. An automated detector can complete successfully without establishing that a site is accessible.

## Reproducible repository checks

Run from the repository root with Node.js 22 or later:

```text
node scripts/check-package.mjs
node --test tests/public-release.test.mjs
```

The package check validates manifest agreement, the eight skill entrypoints, local Markdown links, neutral preference defaults, and pinned runtime hashes. It also checks all 86 field-guide parameters, twelve domains, 44 source targets and direct retrieval routes from router, exploration, execution and critique. The tests use synthetic fixtures and temporary directories. They exercise clean context resolution, preserving existing project context, append-only corrections, promotion evidence and protected detector dispositions. Field-guide regression cases remove a parameter and disconnect an execution route to verify that incomplete packaging fails. No test needs a personal preference profile or live project.

GitHub Actions runs these portable checks on Windows, macOS and Linux. A passing result on those systems covers the helpers; it does not make the Windows executable portable or prove end-to-end creative quality.

## Bounded tool pilot

A September 2026 Windows pilot exercised the pinned Impeccable engine in nine cases: a baseline, inline contrast, linked CSS, JavaScript-only contrast in source and browser modes, rendered contrast, an unlabelled input, a missing target and a partial target failure.

Linked CSS and rendered changes were detected. Source mode missed the JavaScript-only condition, as expected. An unlabelled input was missed. Missing or partially missing targets produced an operational failure rather than a clean result; available findings were retained.

A separate static HTML live-edit flow was exercised. Minified markup exposed overly broad source-location and cleanup risks, including removal of existing inline styles. These results are the reason the live workflow requires recoverable snapshots, source-span inspection and explicit cleanup checks.

These are summarized development observations, not a published benchmark or exhaustive browser/framework test suite. The private pilot workspace is not distributed. The operating limits are retained in the [detector adapter](../skills/design-audit/references/impeccable-adapter.md) and [live workflow](../skills/design-live/references/live-workflow.md).

## Bounded interaction planning check

An October 2026 read-only model pass used the expressive interaction guidance for three briefs: an immersive photography exhibition, scoped feedback in a frequent-use invoicing interface, and a music browser explicitly requesting pervasive expressive motion with an existing Three.js dependency and no new libraries. The plans differentiated their motion and rendering choices while retaining the stated constraints.

This checks reference retrieval and planning in a small set of cases. It does not establish an improvement over the previous instructions, rendered quality, accessibility or device performance. No UI was built for this check.

## Craft expansion planning check

The 0.4.0 references received an independent read-only planning pass on three synthetic requests: improve an existing HSL dashboard's dark theme without migration; compare crisp and elastic swipeable sheets at realistic size; and diagnose a notification's lingering hit target and animated-height jitter. The pass retrieved the intended references, retained the existing system, and distinguished gesture, measurement and exit-lifecycle concerns. It found no material routing failure in those cases.

This is bounded retrieval and planning evidence, not a built prototype, measured contrast result, runtime repair or proof of better design judgment. Package checks and the existing helper tests remain separate from those claims.

## Field guide retrieval check

The 0.5.0 integration received an independent planning pass on three synthetic briefs: a distinctive experimental-book archive, a scoped dashboard translation fix and a description-based critique of a self-paced science explainer. Exploration, execution and critique retrieved the relevant parameter domains and used them to make brief-specific decisions. The pass did not ask the user to rate parameters, infer private taste, or turn the scoped fix into a redesign. Its actual reference reads and outputs were inspected.

The structural check separately verifies all 86 parameters and 44 sources. The planning cases do not exercise every dimension or establish rendered quality, accessibility, learning outcomes or general creative improvement.

## Limits that remain

- The three-round interview is a collaboration default, not an experimentally optimized question count.
- There is no controlled evidence yet that the plugin consistently outperforms an unassisted model across varied briefs.
- Detailed guidance and tool trials concentrate on web UI. Broader artifact routing does not imply equally tested coverage for every medium.
- Source checks, screenshots and browser interaction establish different things. Each audit should state its actual evidence.
- Feedback scripts validate records but do not prove the interpretation or generality of a preference. Human approval remains necessary for promotion.
- Concurrent ledger writes are not coordinated by a lock. Serialize them.
- The bundled engine is supplementary. It is not a complete accessibility auditor, and its live editor has limited framework validation.

When reporting a problem, provide a minimal synthetic example, the skill or command used, expected behavior and the observed result. Remove private project data and session credentials first.
