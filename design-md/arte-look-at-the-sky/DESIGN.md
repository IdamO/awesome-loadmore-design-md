# Design System Inspiration of Look at the sky

## 1. Visual Theme & Atmosphere

Look at the sky reads as type-led composition, spatial depth. The concept capture resolves to a dark-leaning system built around #2c2c2b, #d7c8ad, and accent notes from #e6e6e6. Look at the sky is treated here as a poster-derived website concept. The source is the Arte Collective poster, but the design guidance describes how to turn the art into a live browser world with depth, motion, and mobile behavior.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Wide Grotesk Display (approx), which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #2c2c2b, #d7c8ad, #e6e6e6, #3c3b39
- Typography stack: Wide Grotesk Display (approx), Light Grotesk Text (approx), Mono Caption (approx)
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. World Systems & Archetype

### World Systems
- Primary: Playable Poster - The poster already behaves like a campaign artifact and should stay singular on the web.
- Secondary: Luxury Archive - The atmosphere needs enough structure to stay legible while drifting.

### Interaction Archetype
- Archetype: Spatial Exhibition World (89% confidence)
- Why: The poster becomes strongest as a layered atmospheric chamber with shallow depth, orbiting labels, and slow camera travel.
- Core verbs: glide, reveal, focus, drift
- Inputs: scroll, hover, tap

### Poster-to-Website Translation
- Family: Orbital Atmosphere Field
- Aura: Look at the sky should feel like a drifting internet relic whose full poster composition becomes a shallow-depth, glow-rail field.
- Full-poster decomposition: Expand the orb, haze, or glow into the browser field so labels float inside the atmosphere instead of beside the poster.
- Layer grammar: Treat the full poster like a luminous atmospheric field; scroll advances chapters, pointer drift shifts parallax layers, and tap opens captions floating inside the composition.
- Motion system: ambient drift, parallax wake, caption bloom, halo pulse
- Spatial model: The full poster becomes the atmosphere, with title and texture layers drifting at different depths and slim orbital captions around the edges.
- Sound direction: Optional soft synth bed after user intent; silence is acceptable if the motion already feels alive.
- Poster asset: assets/poster-crop.jpg


## 3. Color Palette & Roles

- Color 1: #2c2c2b - canvas / dominant background
- Color 2: #d7c8ad - primary text or opposing surface
- Color 3: #e6e6e6 - accent / interactive signal
- Color 4: #3c3b39 - supporting surface or hover state
- Color 5: #5b5854 - supporting surface or hover state
- Color 6: #e4e3e1 - supporting surface or hover state
- Color 7: #1f1f1f - supporting surface or hover state
- Color 8: #979083 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: Wide Grotesk Display (approx)
- Secondary: Light Grotesk Text (approx)
- Support: Mono Caption (approx)

### Hierarchy Snapshot
- Heading sample: 108px / weight 860 / letter-spacing -0.05em
- Body sample: 16px / weight 500 / line-height 1.6
- Button sample: 12px / weight 700

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#2c2c2b) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (poster-derived, 3d-space, typography, animation, graphic-design, colorful, arte-aesthetic) imply the system is intentionally non-generic.
- Buttons tend toward #d7c8ad backgrounds with #111111 text, and links inherit #d7c8ad as the interaction signal.

## 6. Interaction Mechanics

- Primary model: spatial_exhibition_world
- Navigation structure: single-scene / wayfinding ambient / friction low
- Navigation model: A staged atmospheric chamber where the whole poster is the field and glow-rail chapters emerge from it.
- State model: Ambient drift -> parallax wake across the poster field -> caption bloom -> chapter shift -> settle.
- Must-keep mechanic: Treat the full poster like a luminous atmospheric field; scroll advances chapters, pointer drift shifts parallax layers, and tap opens captions floating inside the composition.

## 7. Motion System

- Density: medium
- Cadence: ambient
- Triggers: pointer, scroll, time
- Transition types: parallax, fade, glow-bloom
- Physics level: light
- Motion recipe:
  - Run slow atmospheric drift in the background at all times.
  - Shift foreground and background planes at different parallax speeds.
  - Use a soft bloom or halo when captions or chips become active.

## 8. Spatial Model

- Space type: 2.5d
- Camera behavior: rail
- Depth cues: perspective, blur, glow, occlusion
- HUD layering: overlay
- Render tier: dom
- Primary depth cue in capture: 0 24px 80px rgba(215, 200, 173, 0.35)

## 9. Participation & State

- Participation mode: explore
- Persistence: ephemeral
- Inputs to preserve: scroll, hover, tap
- Reset/save posture: Default to resettable, lightweight state changes.

## 10. Sound & Sensor Behavior

- Audio role: ambient
- Audio triggers: entry, focus
- Controls: mute
- Sync: loose
- Required APIs or platform hooks: none

## 11. Implementation Checklist

- Complexity: medium
- Required APIs: none
- Must-have mechanics:
  - Do not paste the poster into a normal hero section and call it done; the full composition needs atmospheric depth.
  - Keep the motion slow enough to feel cinematic, not busy.
  - Preserve the palette hierarchy: dark field, light type, one glow accent.
- Nice-to-have embellishments:
  - Orbit Stage
  - Glow Rail
  - \ \ \ hid mh WY
  - WR \ \ \ i J Wi j 4 ij
- Mobile fallback: Split the atmosphere into vertical scenes with one parallax hero object and one caption rail per section.
- Fallback path: guided-tour, reduced-motion
- Manual validation:
  - The full poster field reads as depth, not as wallpaper with overlay text.
  - Parallax changes are noticeable but calm.
  - Mobile keeps one clear hero plane and one clear caption rail.

## 12. Do's and Don'ts

### Do
- Use Wide Grotesk Display (approx) consistently for headlines and interface labels.
- Keep the palette anchored to #2c2c2b, #d7c8ad, and #e6e6e6.
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
- Implement mobile as: Split the atmosphere into vertical scenes with one parallax hero object and one caption rail per section..
- Use the isolated poster crop as the visual source of truth, not the Shopify frame mockup.

## 14. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build a responsive website inspired by the Arte Collective poster "Look at the sky". Ignore the room mockup and frame; isolate the poster art, keep the palette around #1f1f1f, #e6e6e6, and #d7c8ad, use Wide Grotesk Display (approx) for the hero voice and Light Grotesk Text (approx) for metadata, build the page as a Playable Poster surface with Spatial Exhibition World mechanics, and stage the desktop hero as the full poster becomes the atmosphere, with title and texture layers drifting at different depths and slim orbital captions around the edges. Mobile fallback: Split the atmosphere into vertical scenes with one parallax hero object and one caption rail per section.



## 15. Source Capture & Validation

- Source: Arte Collective (https://arte-collective.com/collections/aesthetic/products/look-at-the-sky)
- Live site: https://arte-collective.com/collections/aesthetic/products/look-at-the-sky
- Credits: Arte Collective
- Capture mode: concept-derived
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
