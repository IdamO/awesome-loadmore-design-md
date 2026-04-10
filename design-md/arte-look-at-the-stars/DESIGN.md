# Design System Inspiration of Look at the Stars

## 1. Visual Theme & Atmosphere

Look at the Stars reads as restrained minimalism, type-led composition, spatial depth. The concept capture resolves to a light-leaning system built around #e4e7e7, #2a2a5a, and accent notes from #2c2b5b. Look at the Stars is treated here as a poster-derived website concept. The source is the Arte Collective poster, but the design guidance describes how to turn the art into a live browser world with depth, motion, and mobile behavior.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Editorial Grotesk Display (approx), which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #e4e7e7, #2a2a5a, #2c2b5b, #29295a
- Typography stack: Editorial Grotesk Display (approx), Quiet Sans Text (approx), Caption Mono (approx)
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. World Systems & Archetype

### World Systems
- Primary: Luxury Archive - The translation should feel edited, calm, and deliberately paced.
- Secondary: Playable Poster - The page behaves like an authored text artifact rather than a neutral product shell.

### Interaction Archetype
- Archetype: Playable Poster (85% confidence)
- Why: The poster wants its text bars, negative space, and caption rhythm turned into the whole browser composition, not a generic scrolling layout.
- Core verbs: focus, glide, read
- Inputs: scroll, drag, tap

### Poster-to-Website Translation
- Family: Quiet Lightbox
- Aura: Look at the Stars should feel like a text artifact stretched into a calm browser field, where bars and phrases become the whole interaction surface.
- Full-poster decomposition: Turn the text lines and bars into the page architecture. The bars become interactive slabs and the phrase stack becomes navigation rhythm.
- Layer grammar: Turn the full poster into a typographic manifesto field: bars become interface slabs, key words become oversized live type, and small drag or scroll shifts the whole statement in depth.
- Motion system: light sweep, micro tilt, caption rise, shadow drift
- Spatial model: The full poster becomes a phrase stack and bar field, with subtle lift, shadow, and spatial drift instead of a framed room.
- Sound direction: No sound; preserve stillness.
- Poster asset: assets/poster-crop.jpg


## 3. Color Palette & Roles

- Color 1: #e4e7e7 - canvas / dominant background
- Color 2: #2a2a5a - primary text or opposing surface
- Color 3: #2c2b5b - accent / interactive signal
- Color 4: #29295a - supporting surface or hover state
- Color 5: #44456d - supporting surface or hover state
- Color 6: #222244 - supporting surface or hover state
- Color 7: #dfe1e1 - supporting surface or hover state
- Color 8: #2a294c - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: Editorial Grotesk Display (approx)
- Secondary: Quiet Sans Text (approx)
- Support: Caption Mono (approx)

### Hierarchy Snapshot
- Heading sample: 96px / weight 780 / letter-spacing -0.04em
- Body sample: 16px / weight 450 / line-height 1.65
- Button sample: 12px / weight 650

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#e4e7e7) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (poster-derived, 3d-space, typography, animation, graphic-design, minimal, arts&culture, editorial, arte-minimalism) imply the system is intentionally non-generic.
- Buttons tend toward #29295a backgrounds with #ffffff text, and links inherit #29295a as the interaction signal.

## 6. Interaction Mechanics

- Primary model: playable_poster
- Navigation structure: single-scene / wayfinding explicit / friction low
- Navigation model: One calm phrase stack plus sparse notes; movement is deliberate and minimal.
- State model: Still field -> slight viewpoint shift -> one phrase or bar lifts -> next caption appears -> field settles.
- Must-keep mechanic: Turn the full poster into a typographic manifesto field: bars become interface slabs, key words become oversized live type, and small drag or scroll shifts the whole statement in depth.

## 7. Motion System

- Density: low
- Cadence: ambient
- Triggers: pointer, scroll, time
- Transition types: light-sweep, fade, glide
- Physics level: none
- Motion recipe:
  - Move the field by a few degrees only.
  - Use slow opacity ramps and light sweeps instead of big transforms.
  - Let one phrase or bar rise after the field settles.

## 8. Spatial Model

- Space type: 2.5d
- Camera behavior: rail
- Depth cues: shadow, soft-perspective, blur
- HUD layering: overlay
- Render tier: dom
- Primary depth cue in capture: 0 24px 80px rgba(41, 41, 90, 0.35)

## 9. Participation & State

- Participation mode: browse
- Persistence: ephemeral
- Inputs to preserve: scroll, drag, tap
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
  - Do not replace the calm with generic minimal SaaS spacing; keep the manifesto-like stillness.
  - One motion layer is enough as long as it feels expensive.
  - Preserve the full poster field as the dominant artifact and keep all labels secondary.
  - If the poster contains bars or strike-through elements, those should become the primary interface slabs.
- Nice-to-have embellishments:
  - Manifesto Grid
  - Brush Rail
  - > +
  - lanl at
- Mobile fallback: Keep a single phrase stack, reveal one note at a time, and use swipe or tap to move between manifesto beats.
- Fallback path: guided-tour, reduced-motion
- Manual validation:
  - The field feels calm and spatial, and the poster still owns the entire browser.
  - Small motion changes are readable and intentional.
  - Mobile keeps the same stillness with fewer moving parts.

## 12. Do's and Don'ts

### Do
- Use Editorial Grotesk Display (approx) consistently for headlines and interface labels.
- Keep the palette anchored to #e4e7e7, #2a2a5a, and #2c2b5b.
- Preserve the experimental posture signaled by the archive tags: poster-derived, 3d-space, typography, animation, graphic-design, minimal, arts&culture, editorial, arte-minimalism.
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
- Implement mobile as: Keep a single phrase stack, reveal one note at a time, and use swipe or tap to move between manifesto beats..
- Use the isolated poster crop as the visual source of truth, not the Shopify frame mockup.

## 14. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build a responsive website inspired by the Arte Collective poster "Look at the Stars". Ignore the room mockup and frame; isolate the poster art, keep the palette around #e4e7e7, #222244, and #29295a, use Editorial Grotesk Display (approx) for the hero voice and Quiet Sans Text (approx) for metadata, build the page as a Luxury Archive surface with Playable Poster mechanics, and stage the desktop hero as the full poster becomes a phrase stack and bar field, with subtle lift, shadow, and spatial drift instead of a framed room. Mobile fallback: Keep a single phrase stack, reveal one note at a time, and use swipe or tap to move between manifesto beats.


## 15. Source Capture & Validation

- Source: Arte Collective (https://arte-collective.com/collections/minimalism/products/look-at-the-stars)
- Live site: https://arte-collective.com/collections/minimalism/products/look-at-the-stars
- Credits: Arte Collective
- Capture mode: concept-derived
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
