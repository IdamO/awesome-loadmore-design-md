# Design System Inspiration of Urban Space Army vol.1

## 1. Visual Theme & Atmosphere

Urban Space Army vol.1 reads as playful interaction, sonic pacing, retro-computing cues. The concept capture resolves to a light-leaning system built around #e4e4e4, #f7f7f7, and accent notes from #d9d0c2. Urban Space Army vol.1 is treated here as a poster-derived website concept. The source is the Arte Collective poster, but the design guidance describes how to turn the art into a live browser world with depth, motion, and mobile behavior.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Condensed Display Grotesk (approx), which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #e4e4e4, #f7f7f7, #d9d0c2, #dfd6c8
- Typography stack: Condensed Display Grotesk (approx), Pixel Mono Console (approx), Utility Sans Narrow (approx)
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. World Systems & Archetype

### World Systems
- Primary: Club Instrument - The web version should feel like a responsive system, not a static poster pinned to the wall.
- Secondary: Playable Poster - Oversized type and one clear ritual keep the poster energy intact.

### Interaction Archetype
- Archetype: Club Instrument (90% confidence)
- Why: The poster language wants to become a reactive field of signals, meters, panels, and pressure-sensitive motion.
- Core verbs: pulse, scrub, reveal, tune
- Inputs: hover, tap, drag, scroll

### Poster-to-Website Translation
- Family: Signal Slab Field
- Aura: Urban Space Army vol.1 should feel like a live control poster whose full composition becomes a responsive HUD field instead of flat merch storytelling.
- Full-poster decomposition: Promote the contour or signal field into the environment itself. The browser becomes the scan surface, not a frame around it.
- Layer grammar: Turn the full poster into a responsive signal field: pointer movement shifts grids, tap reveals diagnostic panels, and drag scrubs the title, copy, and object fragments through layered depth planes.
- Motion system: scanline drift, pointer wake, panel snap, grid pulse
- Spatial model: The whole poster becomes a tilted HUD field, with title planes, copy grids, and object fragments separated into translucent depth rails.
- Sound direction: Soft synth ticks or filtered clicks after user gesture; silence before intent.
- Poster asset: assets/poster-crop.jpg


## 3. Color Palette & Roles

- Color 1: #e4e4e4 - canvas / dominant background
- Color 2: #f7f7f7 - primary text or opposing surface
- Color 3: #d9d0c2 - accent / interactive signal
- Color 4: #dfd6c8 - supporting surface or hover state
- Color 5: #dcd3c5 - supporting surface or hover state
- Color 6: #65625f - supporting surface or hover state
- Color 7: #e7e7e6 - supporting surface or hover state
- Color 8: #e3dcd0 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: Condensed Display Grotesk (approx)
- Secondary: Pixel Mono Console (approx)
- Support: Utility Sans Narrow (approx)

### Hierarchy Snapshot
- Heading sample: 98px / weight 900 / letter-spacing -0.055em
- Body sample: 15px / weight 500 / line-height 1.55
- Button sample: 12px / weight 700

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#e4e4e4) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (poster-derived, 3d-space, typography, animation, graphic-design, retro, playful, sound-design, culture-tech, arte-technology) imply the system is intentionally non-generic.
- Buttons tend toward #d9d0c2 backgrounds with #111111 text, and links inherit #d9d0c2 as the interaction signal.

## 6. Interaction Mechanics

- Primary model: club_instrument
- Navigation structure: single-scene / wayfinding explicit / friction medium
- Navigation model: The whole poster is the system surface; telemetry rails and notes emerge from the composition instead of sitting beside it.
- State model: Idle scan -> title and grid wake-up -> panel pulse -> scrubbed depth shift -> settle back into the full poster field.
- Must-keep mechanic: Turn the full poster into a responsive signal field: pointer movement shifts grids, tap reveals diagnostic panels, and drag scrubs the title, copy, and object fragments through layered depth planes.

## 7. Motion System

- Density: high
- Cadence: tempo-linked
- Triggers: pointer, time, scroll
- Transition types: pulse, scrub, panel-shift, glow
- Physics level: light
- Motion recipe:
  - Animate scanlines or grids continuously at low amplitude.
  - Use pointer proximity to shift panels in z-space.
  - Pulse labels and counters in sync with the accent color instead of generic hover fades.

## 8. Spatial Model

- Space type: 2.5d
- Camera behavior: perspective
- Depth cues: perspective, lighting, occlusion
- HUD layering: overlay
- Render tier: mixed
- Primary depth cue in capture: 0 24px 80px rgba(217, 208, 194, 0.35)

## 9. Participation & State

- Participation mode: compose
- Persistence: ephemeral
- Inputs to preserve: hover, tap, drag, scroll
- Reset/save posture: Default to resettable, lightweight state changes.

## 10. Sound & Sensor Behavior

- Audio role: reactive
- Audio triggers: pointer, press
- Controls: mute
- Sync: tight
- Required APIs or platform hooks: canvas

## 11. Implementation Checklist

- Complexity: high
- Required APIs: canvas
- Must-have mechanics:
  - The poster should become the whole system surface, not a background image with UI pasted on top.
  - Use lighting, scanlines, and layered panels to create depth without drowning the typography.
  - Let the accent color drive both signal and CTA emphasis.
- Nice-to-have embellishments:
  - Reactive Grid
  - Signal Stack
  - MILITARY OBSERVATION
  - DIVISION DIVISION
- Mobile fallback: Collapse to one active hero slab, two stacked telemetry rails, and tap-to-cycle data states instead of precision hover behavior.
- Fallback path: mute-first, reduced-motion
- Manual validation:
  - Users can feel the full poster field react immediately to pointer or touch.
  - The title, copy field, and object fragments remain legible while panels animate around them.
  - Mobile preserves the reactive feeling with fewer surfaces.

## 12. Do's and Don'ts

### Do
- Use Condensed Display Grotesk (approx) consistently for headlines and interface labels.
- Keep the palette anchored to #e4e4e4, #f7f7f7, and #d9d0c2.
- Preserve the experimental posture signaled by the archive tags: poster-derived, 3d-space, typography, animation, graphic-design, retro, playful, sound-design, culture-tech, arte-technology.
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
- Implement mobile as: Collapse to one active hero slab, two stacked telemetry rails, and tap-to-cycle data states instead of precision hover behavior..
- Use the isolated poster crop as the visual source of truth, not the Shopify frame mockup.

## 14. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build a responsive website inspired by the Arte Collective poster "Urban Space Army vol.1". Ignore the room mockup and frame; isolate the poster art, keep the palette around #65625f, #f7f7f7, and #d9d0c2, use Condensed Display Grotesk (approx) for the hero voice and Pixel Mono Console (approx) for metadata, build the page as a Club Instrument surface with Club Instrument mechanics, and stage the desktop hero as the whole poster becomes a tilted hud field, with title planes, copy grids, and object fragments separated into translucent depth rails. Mobile fallback: Collapse to one active hero slab, two stacked telemetry rails, and tap-to-cycle data states instead of precision hover behavior.


## 15. Source Capture & Validation

- Source: Arte Collective (https://arte-collective.com/collections/technology/products/urban-space-army-vol-1)
- Live site: https://arte-collective.com/collections/technology/products/urban-space-army-vol-1
- Credits: Arte Collective
- Capture mode: concept-derived
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
