# Direct manipulation and continuous motion

Use for drag, swipe, drawers, reorder, scrubbers and other interactions where an object should feel attached to the user's movement. These principles transfer across visual styles; they do not require an Apple appearance or a particular spring library.

## Maintain contact

Preserve the offset between the pointer and the point where the object was grabbed. Track in a consistent coordinate space so scroll, transforms or nested containers do not create jumps. Give immediate press feedback while preserving the control's intended activation and cancellation semantics.

On the web, [Pointer Events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events) and pointer capture can keep a drag coherent outside the element's bounds. Choose `touch-action` for the intended gesture while preserving unrelated native scrolling. Handle cancellation and lost capture, and distinguish a tap from a drag. Small movement thresholds or hysteresis can reduce accidental activation and oscillation near a boundary; tune them to the gesture rather than copying one universal distance. Offer a usable keyboard or control-based equivalent.

## Transfer motion, not just a destination

While dragging, position should follow input directly unless resistance is an intentional part of the material. Smooth a short history of timestamped movement when estimating release velocity; an old sample after a pause should not fling the object unexpectedly.

On release, a velocity-aware projection can choose a more plausible snap target than the nearest point to the release position. Bound that projection to valid destinations, then hand the current position and velocity to the settling animation. Check the animation API's units: pixels per second, normalised velocity and spring parameter conventions are not interchangeable. Handle tiny remaining distances without dividing by zero.

When new input interrupts settling, continue from the visible position and relevant current velocity. Keeping only the logical target creates a jump. Springs, retargetable animations and explicit state models are possible implementations; inspect the chosen mechanism's interruption behaviour instead of banning CSS or requiring a library by name.

## Boundaries and spatial meaning

Progressive resistance beyond a boundary can communicate continued responsiveness with limited travel. The visual overshoot should not create an invalid selected state. Use hysteresis around snap or mode thresholds when jitter would switch states repeatedly.

Anchor expansion to its source when that relationship explains the interface. Preserve object identity across transitions, while allowing a different exit path when the action has a different meaning, such as throwing something away. Physical plausibility supports understanding; it does not require literal simulation.

Check grab, slow release, flick, pause before release, reversal during settling, boundary resistance, cancellation and an interrupted close/reopen. Include touch scrolling, keyboard operation and reduced motion. Inspect on representative hardware before making smoothness claims. Reuse the project's motion tokens; select response, damping and overshoot by the intended feel and task.

The source influence is Emil Kowalski's apple-design skill and Apple's [Designing Fluid Interfaces](https://developer.apple.com/videos/play/wwdc2018/803/). The exact adapted revision is recorded in the package source lock.
