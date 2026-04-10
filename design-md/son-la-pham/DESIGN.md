# Design System Inspiration of Son La Pham

## 1. Visual Theme & Atmosphere

Son La Pham reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #cccccc, #a0dca1, and accent notes from #20ef23. Son La's website is like a living ecosystem. Draw pixels and they'll start having a little digital life of their own, moving, growing, changing.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers neuzeit, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #cccccc, #a0dca1, #20ef23, #5ee662
- Typography stack: neuzeit
- Desktop posture: flowing document rhythm
- Mobile posture: sticky, app-like chrome

## 2. World Systems & Archetype

### World Systems
- Primary: Playable Poster - tags include colorful; tags include tactile; archetype affinity: playable poster
- Secondary: Collage Core - tags include colorful; tags include tactile; archetype affinity: playable poster

### Interaction Archetype
- Archetype: Playable Poster (60% confidence)
- Why: tags include colorful; tags include tactile; sticky layout
- Core verbs: reveal, distort, stage, draw
- Inputs: scroll, tap, hover



## 3. Color Palette & Roles

- Color 1: #cccccc - canvas / dominant background
- Color 2: #a0dca1 - primary text or opposing surface
- Color 3: #20ef23 - accent / interactive signal
- Color 4: #5ee662 - supporting surface or hover state
- Color 5: #a1a3dc - supporting surface or hover state
- Color 6: #26a769 - supporting surface or hover state
- Color 7: #25908e - supporting surface or hover state
- Color 8: #26d14d - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: neuzeit

### Hierarchy Snapshot
- Heading sample: 48px / weight 400 / letter-spacing -0.48px
- Body sample: 48px / weight 400 / line-height 57.6px
- Button sample: n/a / weight n/a

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#cccccc) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, colorful, tactile) imply the system is intentionally non-generic.
- Buttons tend toward transparent backgrounds with inherit text, and links inherit rgb(255, 255, 255) as the interaction signal.

## 6. Interaction Mechanics

- Primary model: playable_poster
- Navigation structure: single-scene / wayfinding explicit / friction low
- Navigation model: The page behaves like one campaign object or a short sequence of staged frames.
- State model: Poster at rest -> big reveal -> one interactive transformation -> rest or reset.
- Must-keep mechanic: One-screen poster composition with one or two high-conviction interactions such as drag, reveal, type morph, or hover distort.

## 7. Motion System

- Density: high
- Cadence: event-driven
- Triggers: pointer, time, scroll
- Transition types: morph, draw-on, shuffle
- Physics level: light
- Motion recipe:
  - Lead with one ceremonial entrance.
  - Use oversized type or graphic elements as moving actors, not background garnish.
  - Keep only one hero gesture alive on mobile.

## 8. Spatial Model

- Space type: layered-2d
- Camera behavior: fixed
- Depth cues: scale, occlusion
- HUD layering: overlay
- Render tier: dom
- Primary depth cue in capture: flat surfaces / contrast-only separation

## 9. Participation & State

- Participation mode: none
- Persistence: ephemeral
- Inputs to preserve: scroll, tap, hover
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
  - Use scale, typography, and dead space aggressively; do not fill every region with content.
  - Keep the interaction count low and the conviction high.
  - If a visual move is the identity, it should land before the user sees the CTA.
  - The capture suggests anchored framing or sticky context; preserve that orientation device in the rebuild.
- Nice-to-have embellishments:
  - tags include colorful
  - tags include tactile
  - sticky layout
- Mobile fallback: Split the poster into two to four scenes, preserve one hero interaction, and drop hover-only secondary behavior.
- Fallback path: reduced-motion, static-poster
- Manual validation:
  - The hero gesture is obvious in under three seconds.
  - Desktop and mobile preserve the same campaign idea with different staging.
  - Typography remains part of the interaction system.

## 12. Do's and Don'ts

### Do
- Use neuzeit consistently for headlines and interface labels.
- Keep the palette anchored to #cccccc, #a0dca1, and #20ef23.
- Preserve the experimental posture signaled by the archive tags: portfolio, colorful, tactile.
- Build separate desktop and mobile compositions instead of pretending one layout can fake both.
- Use the inferred mechanics schema as the implementation baseline before adding ornament.

### Don't
- Don't genericize the interface into a default SaaS landing page.
- Don't introduce rounded, pastel, or glassmorphism defaults unless the captured site already does.
- Don't replace the extracted font stack with Inter/Roboto/system as the main voice unless no custom stack loaded.
- Don't ignore the mobile fallback just because the desktop interaction is more fun.
- Don't copy screenshots literally when the repo only has archival capture evidence.

## 13. Responsive Behavior

- Desktop capture uses screenshots/desktop.jpg as the visual baseline.
- Mobile capture uses screenshots/mobile.jpg as the mobile baseline.
- Keep touch targets oversized on mobile and allow the background system to dominate the viewport.
- Implement mobile as: Split the poster into two to four scenes, preserve one hero interaction, and drop hover-only secondary behavior..
- If the live site failed to capture, fall back to the archival poster on the loadmo.re post page before inventing missing behavior.

## 14. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build this as a Playable Poster page with a secondary cue from Collage Core using the Playable Poster interaction model. Keep neuzeit as the voice anchor, preserve the palette around #cccccc, #a0dca1, #20ef23, drive the page through scroll, tap, hover, and implement the mobile fallback as: Split the poster into two to four scenes, preserve one hero interaction, and drop hover-only secondary behavior.


## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/son-la-pham)
- Live site: https://www.son-la.co/
- Credits: Son La Pham
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
