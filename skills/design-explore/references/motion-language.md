# Motion as an exploration axis

Keep layout, content, visual tokens, and interaction semantics fixed. Vary only motion energy through:

- frequency: how often motion occurs
- amplitude: distance, scale, or visual displacement
- duration and rhythm
- choreography: isolated versus orchestrated
- physical character: crisp, fluid, weighted, elastic

Every variant must preserve reduced-motion behavior and static state cues. Do not use animation to disguise latency, weak hierarchy, or unclear interaction. For frequent-use controls, compare repeated use as well as the first impression; let the brief determine the acceptable energy.

## Translate the observed effect

Use vocabulary to identify the mechanism and communicate a choice, without making the user learn a glossary first. Similar appearances can have different causes.

| Description or observed behaviour | Useful distinction |
| --- | --- |
| The panel grows out of its button | An origin-aware transition anchors movement to the trigger; changing transform-origin alone may not reproduce the full spatial relationship. |
| The thumbnail becomes the large image | A shared-element transition preserves apparent identity; a crossfade replaces overlapping content; a morph changes shape. |
| Pulling farther moves it less | Rubber-banding is resistance during input; spring overshoot is settling after release. |
| Items arrive in a wave | Stagger offsets item timing; orchestration coordinates several motions or phases. |
| It moves as I scroll | Scroll-driven progress follows position; a scroll reveal starts when a threshold is crossed. Parallax introduces relative movement across depth layers. |
| The outline draws itself | Stroke reveal traces a path; a mask or clip reveals an area. Choose according to the geometry. |
| The numbers roll into place | A digit ticker moves glyphs; numeric interpolation changes the value. Keep meaning and reading order stable. |
| It feels heavy, then follows through | Response, velocity, damping and secondary settling shape the feel; a longer duration alone may only add latency. |

An image can suggest an effect but cannot prove its timing, interruption behaviour or implementation. Inspect motion when available. Use [expressive-interaction.md](expressive-interaction.md) for material and spatial effects and [direct-manipulation.md](../../design-execute/references/direct-manipulation.md) for gesture physics. Terms are adaptable reference language, not required wording or a checklist of effects.
