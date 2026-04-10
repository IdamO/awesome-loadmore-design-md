# Design System Inspiration of Type Saturn - Red

## 1. Visual Theme & Atmosphere

Type Saturn - Red reads as type-led composition, spatial depth. The concept capture resolves to a dark-leaning system built around #f13032, #e4e4e4, and accent notes from #f2393c. Type Saturn - Red is treated here as a poster-derived website concept. The source is the Arte Collective poster, but the design guidance describes how to turn the art into a live browser world with depth, motion, and mobile behavior.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Extended Geometric Sans (approx), which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #f13032, #e4e4e4, #f2393c, #ea5356
- Typography stack: Extended Geometric Sans (approx), Condensed Label Sans (approx), Micro Mono (approx)
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. World Systems & Archetype

### World Systems
- Primary: Playable Poster - The poster composition should stay bold and singular even after it becomes interactive.
- Secondary: Luxury Archive - Structured labels and controlled negative space keep the result from becoming noise.

### Interaction Archetype
- Archetype: Playable Poster (88% confidence)
- Why: The poster wants to become an authored 3D type composition with a small number of high-conviction transforms.
- Core verbs: reveal, tilt, extrude, stage
- Inputs: hover, drag, scroll, tap

### Poster-to-Website Translation
- Family: Geometry Chamber
- Aura: Type Saturn - Red should feel like a spatial type specimen whose full poster composition has been pushed into browser depth, not a flat print inside a grid.
- Full-poster decomposition: Extrude the poster into a few high-conviction planes. Keep negative space and one dominant transform so it stays authored.
- Layer grammar: Extrude the full poster into a typographic chamber: drag rotates type planes, hover activates refraction layers, and scroll reveals staggered strata pulled from the composition.
- Motion system: entrance extrusion, refraction wake, tilt response, caption slide
- Spatial model: The full poster becomes a field of duplicated type planes, offset in z, with one narrow refraction rail cutting through the scene.
- Sound direction: Silent by default; the geometry and easing should carry the drama.
- Poster asset: assets/poster-crop.jpg


## 3. Color Palette & Roles

- Color 1: #f13032 - canvas / dominant background
- Color 2: #e4e4e4 - primary text or opposing surface
- Color 3: #f2393c - accent / interactive signal
- Color 4: #ea5356 - supporting surface or hover state
- Color 5: #e7e8e8 - supporting surface or hover state
- Color 6: #e5a4a5 - supporting surface or hover state
- Color 7: #ed3438 - supporting surface or hover state
- Color 8: #892426 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: Extended Geometric Sans (approx)
- Secondary: Condensed Label Sans (approx)
- Support: Micro Mono (approx)

### Hierarchy Snapshot
- Heading sample: 102px / weight 800 / letter-spacing -0.045em
- Body sample: 15px / weight 500 / line-height 1.55
- Button sample: 12px / weight 700

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f13032) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (poster-derived, 3d-space, typography, animation, graphic-design, colorful, arte-aesthetic) imply the system is intentionally non-generic.
- Buttons tend toward #f13032 backgrounds with #ffffff text, and links inherit #f13032 as the interaction signal.

## 6. Interaction Mechanics

- Primary model: playable_poster
- Navigation structure: single-scene / wayfinding explicit / friction low
- Navigation model: One full-poster composition with staged type volumes and a disciplined lower content rail.
- State model: Poster field at rest -> depth wake-up -> refraction reveal -> caption rail -> reset.
- Must-keep mechanic: Extrude the full poster into a typographic chamber: drag rotates type planes, hover activates refraction layers, and scroll reveals staggered strata pulled from the composition.

## 7. Motion System

- Density: medium
- Cadence: event-driven
- Triggers: pointer, scroll, time
- Transition types: morph, depth-shift, refraction
- Physics level: light
- Motion recipe:
  - Run one ceremonial entrance with the headline or poster plane.
  - Use hover to activate refraction layers and depth shadows.
  - Move type planes on slightly different easing curves to preserve dimensionality.

## 8. Spatial Model

- Space type: 2.5d
- Camera behavior: fixed
- Depth cues: perspective, blur, shadow
- HUD layering: overlay
- Render tier: dom
- Primary depth cue in capture: 0 24px 80px rgba(241, 48, 50, 0.35)

## 9. Participation & State

- Participation mode: play
- Persistence: ephemeral
- Inputs to preserve: hover, drag, scroll, tap
- Reset/save posture: Default to resettable, lightweight state changes.

## 10. Sound & Sensor Behavior

- Audio role: none
- Audio triggers: none
- Controls: none
- Sync: none
- Required APIs or platform hooks: none

## 11. Implementation Checklist

- Complexity: medium
- Required APIs: none
- Must-have mechanics:
  - Do not flatten the poster typography into a normal hero block.
  - Keep at least one negative-space zone completely clean so the geometry can breathe.
  - Use the accent color sparingly as a precision edge, not a flood fill.
- Nice-to-have embellishments:
  - Type Volume
  - Refraction Rail
  - : Saturn a
  - Saturn® Saturn®
- Mobile fallback: Split the chamber into stacked scenes with one tilt response and one caption rail instead of maintaining full desktop depth.
- Fallback path: reduced-motion, static-poster
- Manual validation:
  - The full poster geometry reads as deliberate depth rather than random skew.
  - The headline remains the dominant actor before any CTA appears.
  - Mobile preserves one strong volumetric move.

## 12. Do's and Don'ts

### Do
- Use Extended Geometric Sans (approx) consistently for headlines and interface labels.
- Keep the palette anchored to #f13032, #e4e4e4, and #f2393c.
- Preserve the experimental posture signaled by the archive tags: poster-derived, 3d-space, typography, animation, graphic-design, colorful, arte-aesthetic.
- Build separate desktop and mobile compositions instead of pretending one layout can fake both.
- Use the inferred mechanics schema as the implementation baseline before adding ornament.

### Don't
- Don't genericize the interface into a default SaaS landing page.
- Don't introduce rounded, pastel, or glassmorphism defaults unless the captured site already does.
- Don't replace the extracted font stack with Inter/Roboto/system as the main voice unless no custom stack loaded.
- Don't ignore the mobile fallback just because the desktop interaction is more fun.
- Don't rebuild the framed product mockup or storefront chrome literally.

## 13. Responsive Behavior

- Desktop capture uses screenshots/desktop.jpg as the visual baseline.
- Mobile capture uses screenshots/mobile.jpg as the mobile baseline.
- Keep touch targets oversized on mobile and allow the background system to dominate the viewport.
- Implement mobile as: Split the chamber into stacked scenes with one tilt response and one caption rail instead of maintaining full desktop depth..
- Use the isolated poster crop as the visual source of truth, not the Shopify frame mockup.

## 14. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build a responsive website inspired by the Arte Collective poster "Type Saturn - Red". Ignore the room mockup and frame; isolate the poster art, keep the palette around #892426, #e7e8e8, and #f13032, use Extended Geometric Sans (approx) for the hero voice and Condensed Label Sans (approx) for metadata, build the page as a Playable Poster surface with Playable Poster mechanics, and stage the desktop hero as the full poster becomes a field of duplicated type planes, offset in z, with one narrow refraction rail cutting through the scene. Mobile fallback: Split the chamber into stacked scenes with one tilt response and one caption rail instead of maintaining full desktop depth.


## 15. Source Capture & Validation

- Source: Arte Collective (https://arte-collective.com/collections/aesthetic/products/type-saturn-red)
- Live site: https://arte-collective.com/collections/aesthetic/products/type-saturn-red
- Credits: Arte Collective
- Capture mode: concept-derived
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
