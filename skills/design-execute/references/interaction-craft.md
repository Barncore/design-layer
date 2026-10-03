# Interaction craft: focused reference lenses

Consult the relevant section for animated content changes, interface sound, speculative loading or fine icon and type behaviour. These are selected principles influenced by [User Interface Wiki](https://github.com/raphaelsalaja/userinterface-wiki), not its complete rule set or a mandatory stack. Existing framework and platform facilities may already solve the problem.

## Measured containers and changing content

When a container animates to fit content, separate the element being measured from the wrapper whose dimensions animate. Measuring the animated wrapper can feed intermediate dimensions back into its own target. Observe intrinsic content changes, including fonts, responsive wrapping and asynchronous data, and batch reads and writes to avoid a measurement loop.

Treat an initial zero measurement deliberately: it may mean hidden or not yet laid out, while zero can also be the correct collapsed state. Keep the first visible render sensible without disabling legitimate collapse. Choose clipping according to the design: an overflow-hidden wrapper can trim focus rings, shadows or popovers. Check content replacement and rapid successive changes, not only first expansion.

## Exit lifecycle and view transitions

Visual departure and logical removal are different moments. Keep an exiting node mounted for the transition when continuity needs it, then remove it on completion. Account for interruption, reduced motion and the no-animation path so cleanup cannot wait forever on an event that never fires.

Decide whether a departing element can still receive input. A dismissed control should not remain a ghost hit target or keyboard stop; move focus meaningfully before making its subtree inert or removing it. An intentionally reversible sheet may instead remain grabbable while closing. Coordinate that decision with the [direct-manipulation guidance](direct-manipulation.md).

For shared-element or browser view transitions, give simultaneously participating elements distinct identities and associate only the elements that should appear continuous. Treat generated transition layers as temporary presentation, while the underlying document remains usable if the enhancement is unsupported or reduced. Inspect back navigation, focus and cancellation as well as the attractive forward transition.

## Sound as an optional interaction material

Use sound when it adds useful feedback or expressive character to the brief. Retain mute/volume control and equivalent visual or textual information. Respect the platform's user-activation requirements; [Web Audio best practices](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Best_practices) explain the lifecycle constraints.

Reuse a suitable audio context rather than creating one for each tap. Shape amplitude with a short attack and release to avoid clicks; schedule against the audio clock when timing matters. Exponential gain ramps need a positive target, so approach a small positive value before stopping or setting exact silence. Stop and disconnect finished sources, cap overlapping voices and clean up on teardown. Rapid repeated actions and volume at ordinary listening levels are more revealing than a single isolated effect.

## Loading ahead of intent

When navigation latency is a demonstrated problem, pointer trajectory, hover dwell, keyboard focus or viewport proximity can be signals for prefetching. Choose a signal appropriate to the interaction and input device; trajectory prediction is an option, not a requirement. Reuse framework facilities when available, deduplicate work and bound concurrency or cancellation so moving across a menu does not trigger an unbounded fetch burst.

Prefetch only resources appropriate to retrieve speculatively: observing intent should not trigger a purchase, destructive operation or other state-changing action. Consider bandwidth preferences and cache freshness. Measure whether the latency benefit justifies unused requests. Loading data and announcing navigation are separate events.

## Icons, type and decorative layers

A morph can make related icon states feel like one object. Compatible path structure helps interpolation; a crossfade or deliberate replacement may be clearer for unrelated shapes. Keep the control's accessible name and state accurate throughout. Group pieces by their role in the motion instead of enforcing one icon library or animation API.

Use supported stylistic sets or alternate glyphs when they improve ambiguous identifiers, codes or numerals in the actual font. Check the relevant characters and fallback, since feature tags and appearances vary. Font-axis and metric guidance already lives in [craft-details.md](craft-details.md).

Pseudo-elements and layered backgrounds can create material detail without extra semantic nodes. Ensure decorative layers do not intercept interaction or obscure focus, and profile expensive effects in context. This is a rendering choice, not a ban on gradients, shadows or expressive surfaces.

Before handoff, exercise the lifecycle or state transition that motivated the section. Report what was actually observed; a pattern or documentation reference alone does not establish runtime correctness.
