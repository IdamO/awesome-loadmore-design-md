# Design System Inspiration of Steel Machine 002

## 1. Visual Theme & Atmosphere

Steel Machine 002 reads as retro-computing cues, type-led composition, spatial depth. The concept capture resolves to a light-leaning system built around #e4e4e4, #1c1b1a, and accent notes from #201f1d. Steel Machine 002 is treated here as a poster-derived website concept. The source is the Arte Collective poster, but the design guidance describes how to turn the art into a live browser world with depth, motion, and mobile behavior.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Ultra Condensed Grotesk Display (approx), which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #e4e4e4, #1c1b1a, #201f1d, #a58b67
- Typography stack: Ultra Condensed Grotesk Display (approx), Bitmap Mono Caption (approx), Signal Sans Labels (approx)
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. World Systems & Archetype

### World Systems
- Primary: Luxury Archive - The poster reads like an object accessioned into a high-contrast digital chamber.
- Secondary: Club Instrument - The browser version should feel collectible and tactile rather than informational.

### Interaction Archetype
- Archetype: Spatial Exhibition World (93% confidence)
- Why: The poster wants to become one hero object inside a shallow 3D room with hotspot detail and object focus.
- Core verbs: explore, focus, open, orbit
- Inputs: scroll, drag, hover, tap

### Poster-to-Website Translation
- Family: Artifact Monolith Stage
- Aura: Steel Machine 002 should feel like a sacred object from Technology, with the entire poster composition expanded into a shallow 3D archive room.
- Full-poster decomposition: Explode the poster into one headline wall, one text atmosphere, and one heavy object cluster. No rectangular poster survives inside the viewport.
- Layer grammar: Explode the full poster across the viewport: the headline becomes architecture, the background copy becomes the room, and the hardware collage becomes floating evidence layers that react to scroll, drag, and hover.
- Motion system: ambient drift, hover lift, card rail reveal, specimen pulse
- Spatial model: The full poster fills the room; title planes become architecture, copy becomes atmosphere, and the object collage separates into floating evidence layers.
- Sound direction: Low mechanical hum and soft relay clicks after user intent.
- Poster asset: assets/poster-crop.jpg


## 3. Color Palette & Roles

- Color 1: #e4e4e4 - canvas / dominant background
- Color 2: #1c1b1a - primary text or opposing surface
- Color 3: #201f1d - accent / interactive signal
- Color 4: #a58b67 - supporting surface or hover state
- Color 5: #161515 - supporting surface or hover state
- Color 6: #e7e7e6 - supporting surface or hover state
- Color 7: #493f33 - supporting surface or hover state
- Color 8: #d4c6b4 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: Ultra Condensed Grotesk Display (approx)
- Secondary: Bitmap Mono Caption (approx)
- Support: Signal Sans Labels (approx)

### Hierarchy Snapshot
- Heading sample: 112px / weight 900 / letter-spacing -0.065em
- Body sample: 16px / weight 500 / line-height 1.6
- Button sample: 12px / weight 700

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#e4e4e4) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (poster-derived, 3d-space, typography, animation, graphic-design, retro, tactile, culture-tech, arte-technology) imply the system is intentionally non-generic.
- Buttons tend toward #a58b67 backgrounds with #ffffff text, and links inherit #a58b67 as the interaction signal.

## 6. Interaction Mechanics

- Primary model: spatial_exhibition_world
- Navigation structure: single-scene / wayfinding ambient / friction medium
- Navigation model: Users move through one full-poster chamber where the title plane, copy field, and evidence layers each open supporting notes without leaving the composition.
- State model: Idle hum -> title and copy field wake -> evidence layers separate in depth -> note rail opens -> return to the full composition.
- Must-keep mechanic: Explode the full poster across the viewport: the headline becomes architecture, the background copy becomes the room, and the hardware collage becomes floating evidence layers that react to scroll, drag, and hover.

## 7. Motion System

- Density: medium
- Cadence: ambient
- Triggers: pointer, time, scroll
- Transition types: camera-travel, focus-lift, card-rail
- Physics level: light
- Motion recipe:
  - Run a slow ambient camera drift across the full poster field at rest.
  - Lift extracted evidence layers forward on hover or pointer proximity.
  - Animate note cards and title planes on springy rails instead of fading them flat.

## 8. Spatial Model

- Space type: 3d-object
- Camera behavior: orbit
- Depth cues: perspective, occlusion, shadow, lighting
- HUD layering: overlay
- Render tier: mixed
- Primary depth cue in capture: 0 24px 80px rgba(165, 139, 103, 0.35)

## 9. Participation & State

- Participation mode: explore
- Persistence: ephemeral
- Inputs to preserve: scroll, drag, hover, tap
- Reset/save posture: Default to resettable, lightweight state changes.

## 10. Sound & Sensor Behavior

- Audio role: ambient
- Audio triggers: entry, focus
- Controls: mute
- Sync: loose
- Required APIs or platform hooks: css-3d

## 11. Implementation Checklist

- Complexity: high
- Required APIs: css-3d
- Must-have mechanics:
  - Do not use the framed product photo in the final surface; decompose the poster into title, copy field, object cluster, and note rails.
  - The poster should fill the viewport first; extracted depth layers should feel like pieces of the same artifact, not pasted cards.
  - The object cluster must feel heavy and collectible, not like a random floating image.
- Nice-to-have embellishments:
  - Machine Relic
  - Archive Interface
  - 17 a 2
  - iy Se ; eS
- Mobile fallback: Reduce to one guided poster stage with swipe between viewpoints and a single expandable evidence rail under the hero object.
- Fallback path: guided-tour, reduced-motion
- Manual validation:
  - The full poster composition reads as a spatial room within three seconds.
  - Drag and hover create a clear depth response without losing the poster logic.
  - Mobile keeps the same poster-world ritual, not a shrunken desktop scene.

## 12. Do's and Don'ts

### Do
- Use Ultra Condensed Grotesk Display (approx) consistently for headlines and interface labels.
- Keep the palette anchored to #e4e4e4, #1c1b1a, and #201f1d.
- Preserve the experimental posture signaled by the archive tags: poster-derived, 3d-space, typography, animation, graphic-design, retro, tactile, culture-tech, arte-technology.
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
- Implement mobile as: Reduce to one guided poster stage with swipe between viewpoints and a single expandable evidence rail under the hero object..
- Use the isolated poster crop as the visual source of truth, not the Shopify frame mockup.

## 14. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build a responsive website inspired by the Arte Collective poster "Steel Machine 002". Ignore the room mockup and frame; isolate the poster art, keep the palette around #161515, #e7e7e6, and #a58b67, use Ultra Condensed Grotesk Display (approx) for the hero voice and Bitmap Mono Caption (approx) for metadata, build the page as a Luxury Archive surface with Spatial Exhibition World mechanics, and stage the desktop hero as the full poster fills the room; title planes become architecture, copy becomes atmosphere, and the object collage separates into floating evidence layers. Mobile fallback: Reduce to one guided poster stage with swipe between viewpoints and a single expandable evidence rail under the hero object.



## 15. Source Capture & Validation

- Source: Arte Collective (https://arte-collective.com/collections/technology/products/steel-machine-002)
- Live site: https://arte-collective.com/collections/technology/products/steel-machine-002
- Credits: Arte Collective
- Capture mode: concept-derived
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
