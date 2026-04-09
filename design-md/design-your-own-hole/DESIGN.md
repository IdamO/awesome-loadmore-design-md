# Design System Inspiration of Design your own hole

## 1. Visual Theme & Atmosphere

Design your own hole reads as playful interaction. The live capture resolves to a dark-leaning system built around #0000fd, #e8e800, and accent notes from #a8a704. A website as a toy! A touchable interactive HTML object.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers GT-Haptik-Light-2, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #0000fd, #e8e800, #a8a704, #000001
- Typography stack: GT-Haptik-Light-2, GT-Haptik-Medium-2
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Playable Poster - tags include colorful; tags include playful; tags include tactile
- Secondary: Collage Core - tags include colorful; tags include playful; tags include tactile

### Interaction Archetype
- Archetype: Playable Poster (88% confidence)
- Why: tags include playful; tags include colorful; tags include tactile; description mentions touchable
- Core verbs: reveal, distort, stage
- Inputs: scroll, tap, hover, drag



## 3. Color Palette & Roles

- Color 1: #0000fd - canvas / dominant background
- Color 2: #e8e800 - primary text or opposing surface
- Color 3: #a8a704 - accent / interactive signal
- Color 4: #000001 - supporting surface or hover state
- Color 5: #12125c - supporting surface or hover state
- Color 6: #6061f0 - supporting surface or hover state
- Color 7: #5d5d0d - supporting surface or hover state
- Color 8: #0d0da0 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: GT-Haptik-Light-2
- Secondary: GT-Haptik-Medium-2

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 15px / weight 400 / line-height normal
- Button sample: 15px / weight 400

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#0000fd) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (tactile, playful, colorful) imply the system is intentionally non-generic.
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text, and links inherit #a8a704 as the interaction signal.

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
- Primary depth cue in capture: none

## 9. Participation & State

- Participation mode: none
- Persistence: ephemeral
- Inputs to preserve: scroll, tap, hover, drag
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
  - tags include playful
  - tags include colorful
  - tags include tactile
  - description mentions touchable
  - description mentions interactive
- Mobile fallback: Split the poster into two to four scenes, preserve one hero interaction, and drop hover-only secondary behavior.
- Fallback path: reduced-motion, static-poster
- Manual validation:
  - The hero gesture is obvious in under three seconds.
  - Desktop and mobile preserve the same campaign idea with different staging.
  - Typography remains part of the interaction system.

## 12. Do's and Don'ts

### Do
- Use GT-Haptik-Light-2 consistently for headlines and interface labels.
- Keep the palette anchored to #0000fd, #e8e800, and #a8a704.
- Preserve the experimental posture signaled by the archive tags: tactile, playful, colorful.
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

> Build this as a Playable Poster page with a secondary cue from Collage Core using the Playable Poster interaction model. Keep GT-Haptik-Light-2 as the voice anchor, preserve the palette around #0000fd, #e8e800, #a8a704, drive the page through scroll, tap, hover, drag, and implement the mobile fallback as: Split the poster into two to four scenes, preserve one hero interaction, and drop hover-only secondary behavior.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/design-your-own-hole)
- Live site: https://designyourownhole.com/
- Credits: Elwyn.co
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
