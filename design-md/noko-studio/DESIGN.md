# Design System Inspiration of Noko Studio

## 1. Visual Theme & Atmosphere

Noko Studio reads as restrained minimalism, playful interaction. The live capture resolves to a light-leaning system built around #fefefe, #9e9e9e, and accent notes from #6b6b6b. Ultra lightweight, super simple studio landing page featuring a silly interactive logo experiment.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Tex, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fefefe, #9e9e9e, #6b6b6b, #9ef99e
- Typography stack: Tex
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. World Systems & Archetype

### World Systems
- Primary: Playable Poster - tags include playful; archetype affinity: playable poster
- Secondary: Collage Core - tags include playful; archetype affinity: playable poster

### Interaction Archetype
- Archetype: Playable Poster (60% confidence)
- Why: tags include playful; description mentions interactive; sticky layout
- Core verbs: reveal, distort, stage
- Inputs: scroll, tap, hover

## 3. Color Palette & Roles

- Color 1: #fefefe - canvas / dominant background
- Color 2: #9e9e9e - primary text or opposing surface
- Color 3: #6b6b6b - accent / interactive signal
- Color 4: #9ef99e - supporting surface or hover state
- Color 5: #69f869 - supporting surface or hover state
- Color 6: #31f831 - supporting surface or hover state
- Color 7: #3e3e3e - supporting surface or hover state
- Color 8: #80f87f - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: Tex

### Hierarchy Snapshot
- Heading sample: 33.6px / weight 400 / letter-spacing normal
- Body sample: 33.6px / weight 400 / line-height 35.28px
- Button sample: 33.6px / weight 400

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fefefe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (playful, minimal) imply the site is intentionally non-generic.
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with color(display-p3 0 0 0) text, and links inherit color(display-p3 0 0 0) as the interaction signal.

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
  - tags include playful
  - description mentions interactive
  - sticky layout
- Mobile fallback: Split the poster into two to four scenes, preserve one hero interaction, and drop hover-only secondary behavior.
- Fallback path: reduced-motion, static-poster
- Manual validation:
  - The hero gesture is obvious in under three seconds.
  - Desktop and mobile preserve the same campaign idea with different staging.
  - Typography remains part of the interaction system.

## 12. Do's and Don'ts

### Do
- Use Tex consistently for headlines and interface labels.
- Keep the palette anchored to #fefefe, #9e9e9e, and #6b6b6b.
- Preserve the experimental posture signaled by the loadmo.re tags: playful, minimal.
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

> Build this as a Playable Poster page with a secondary cue from Collage Core using the Playable Poster interaction model. Keep Tex as the voice anchor, preserve the palette around #fefefe, #9e9e9e, #6b6b6b, drive the page through scroll, tap, hover, and implement the mobile fallback as: Split the poster into two to four scenes, preserve one hero interaction, and drop hover-only secondary behavior.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/noko-studio)
- Live site: https://noko.st/
- Credits: Noko Studio
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
