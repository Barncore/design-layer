# Expressive interaction and material behaviour

Use this when experimental interaction, spatial depth, responsive material or perceptual transformation could define the experience. The brief can imply that opportunity without naming an effect or library. Bring relevant possibilities into concept development early, while composition and interaction are still open.

## Design the behaviour

Describe what the interface should feel like to manipulate: tension, weight, elasticity, flow, friction, optical depth or an unfamiliar but coherent physical response. Connect that character to the subject and user action. Fictional physics can be convincing when cause and response remain intelligible.

Decide what changes with input, where the transformation occurs, and what remains stable enough to orient the user. Movement can communicate through a whole experience when the brief calls for it. Its intensity should suit that experience and repeated use. A restrained work tool and an immersive exploratory site can make different, equally deliberate choices.

## From experience to technique

These are starting points for choosing, combining or inventing mechanisms. A technique earns its place through the experience it produces.

| Intended quality | Techniques to consider | Distinction that changes the design |
| --- | --- | --- |
| A surface that folds, curls or stretches | Subdivided geometry, vertex deformation, 3D transforms | Transforming a flat card moves a rigid plane; bending its silhouette needs geometry deformation or an equivalent rendering treatment. |
| Liquid or elastic imagery | Texture-coordinate (UV) displacement, noise or flow fields, spring-driven deformation | A fluid appearance may need only a controllable distortion. Use a simulation when persistent flow or physical interactions matter. |
| Momentum, drag or a lingering trace | Velocity-driven image smearing, directional sampling, temporal feedback | A spatial smear stretches the current image; a temporal trail retains previous frames. Choose the visual memory the interaction needs. |
| Prismatic edges or optical instability | Chromatic fringing through offset colour-channel sampling, refraction | Control where the optical effect appears and how it responds. Preserve readable content through masking, limited intensity or a separate clear layer. |
| Weight, tension and release | Springs, damping, inertia, constraints and gesture mapping | Tune how an action responds, can be interrupted and settles. Elastic response alone does not require 3D rendering. |
| An inhabitable spatial scene | Perspective, parallax, occlusion, lighting and camera choreography | Establish a consistent spatial relationship between navigation, content and viewpoint. |
| A responsive atmosphere | Particles, procedural fields, light, ripple or ripple-like displacement | Connect environmental change to a meaningful action or rhythm so it belongs to the interaction. |

## Choose the rendering approach

Choose the simplest approach that preserves the defining behaviour, and reuse the project's stack where it fits. Simplicity includes maintaining fidelity to the intended experience.

- **HTML, CSS and SVG:** native controls, transform-based depth, masks, vector morphing, filters and many optical treatments. Start here when these can express the idea convincingly.
- **Canvas 2D:** custom drawing, compositing and image or particle treatments that do not need a 3D scene. Preserve the semantic interaction outside the drawing surface.
- **WebGL and shaders:** consider GPU rendering for deformable meshes, per-pixel distortion, many particles or effects involving multiple rendering passes. Vertex work changes geometry; fragment work changes the appearance of pixels. GPU rendering can serve an apparently two-dimensional interface.
- **Three.js:** useful when scene organisation, cameras, geometry, materials and rendering support make the work simpler. It is a library for building graphics, not a visual style, physics engine or requirement for every shader effect.

Check current APIs and the actual renderer before implementation; the design direction does not prescribe a library version or rendering backend. A hybrid often fits: semantic HTML for content and controls, with a graphics layer for the expressive surface. Keep their selected state, positions and hit targets in sync.

## Make the defining interaction tangible

Prototype the uncertain behaviour with representative content before expanding the surrounding interface. A still image can establish composition but cannot establish gesture response, interruption or settling. Inspect the action, transition and resting state together; preserve the characteristic behaviour when adapting to a smaller screen or touch input.

Use the existing audit for focus, keyboard and touch paths, reduced motion and readable states. For a graphics layer, also exercise resizing, unavailable graphics/assets and the performance budget on a representative device. Tune pixel density, geometry, texture sizes and rendering passes according to what is actually expensive. Stop unnecessary rendering when the surface is inactive and release graphics resources when removed.

Before handing off, compare the working interaction with the intended material or spatial character. Check whether simplification removed the defining effect or added effects diluted it. Report what was exercised and what remains untested; package checks and attractive screenshots do not establish motion quality or device performance.

## Technical references

Use primary documentation for implementation details: [MDN WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API), [Three.js fundamentals](https://threejs.org/manual/pages/fundamentals.html), and [MDN Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API). These are technical references, not bundled code or required dependencies.
