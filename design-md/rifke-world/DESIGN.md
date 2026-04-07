# Design System Inspiration of Rifke World

## 1. Visual Theme & Atmosphere

Rifke World reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #000000, #262326, and accent notes from #555555. We love Rifke's simple website. You land there, it feels like there's nothing and eventually, your action reveals the content.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers ComicMono, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #000000, #262326, #555555, #550e55
- Typography stack: ComicMono
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Playable Poster - tags include colorful; tags include tactile; description mentions event
- Secondary: Collage Core - tags include colorful; tags include tactile; archetype affinity: playable poster

### Interaction Archetype
- Archetype: Playable Poster (68% confidence)
- Why: tags include colorful; tags include tactile; description mentions reveal
- Core verbs: reveal, distort, stage
- Inputs: scroll, tap, hover

## 3. Color Palette & Roles

- Color 1: #000000 - canvas / dominant background
- Color 2: #262326 - primary text or opposing surface
- Color 3: #555555 - accent / interactive signal
- Color 4: #550e55 - supporting surface or hover state
- Color 5: #8c8c8c - supporting surface or hover state
- Color 6: #8a1089 - supporting surface or hover state
- Color 7: #400a3f - supporting surface or hover state
- Color 8: #80117f - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: ComicMono

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#000000) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (tactile, portfolio, colorful) imply the site is intentionally non-generic.
- Buttons tend toward transparent backgrounds with inherit text, and links inherit rgb(255, 0, 255) as the interaction signal.

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
- Nice-to-have embellishments:
  - tags include colorful
  - tags include tactile
  - description mentions reveal
- Mobile fallback: Split the poster into two to four scenes, preserve one hero interaction, and drop hover-only secondary behavior.
- Fallback path: reduced-motion, static-poster
- Manual validation:
  - The hero gesture is obvious in under three seconds.
  - Desktop and mobile preserve the same campaign idea with different staging.
  - Typography remains part of the interaction system.

## 12. Do's and Don'ts

### Do
- Use ComicMono consistently for headlines and interface labels.
- Keep the palette anchored to #000000, #262326, and #555555.
- Preserve the experimental posture signaled by the loadmo.re tags: tactile, portfolio, colorful.
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

> Build this as a Playable Poster page with a secondary cue from Collage Core using the Playable Poster interaction model. Keep ComicMono as the voice anchor, preserve the palette around #000000, #262326, #555555, drive the page through scroll, tap, hover, and implement the mobile fallback as: Split the poster into two to four scenes, preserve one hero interaction, and drop hover-only secondary behavior.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/rifke-world)
- Live site: https://rifke.world/
- Credits: Rifke Sadleir
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
