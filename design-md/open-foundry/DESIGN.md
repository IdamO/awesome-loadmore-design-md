# Design System Inspiration of Open Foundry

## 1. Visual Theme & Atmosphere

Open Foundry reads as type-led composition. The live capture resolves to a light-leaning system built around #f1f2f4, #686968, and accent notes from #15220f. Curation of free fonts that look cool, with a sleek interface.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Mirage, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f1f2f4, #686968, #15220f, #760607
- Typography stack: Mirage, Index, aileron
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Playable Poster - tags include typography; tags include graphic-design; archetype affinity: playable poster
- Secondary: Collage Core - tags include graphic-design; archetype affinity: playable poster

### Interaction Archetype
- Archetype: Playable Poster (76% confidence)
- Why: tags include typography; tags include graphic-design
- Core verbs: reveal, distort, stage
- Inputs: scroll, tap, hover



## 3. Color Palette & Roles

- Color 1: #f1f2f4 - canvas / dominant background
- Color 2: #686968 - primary text or opposing surface
- Color 3: #15220f - accent / interactive signal
- Color 4: #760607 - supporting surface or hover state
- Color 5: #19511d - supporting surface or hover state
- Color 6: #82080c - supporting surface or hover state
- Color 7: #4a4d34 - supporting surface or hover state
- Color 8: #a19e9c - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: Mirage
- Secondary: Index
- Support: aileron
- Support: archivo
- Support: bagnard
- Support: bluu-next
- Support: cotham-sans
- Support: cooper-hewitt

### Hierarchy Snapshot
- Heading sample: 16px / weight 500 / letter-spacing normal
- Body sample: 16px / weight 500 / line-height 29.44px
- Button sample: 15px / weight 450

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f1f2f4) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (graphic-design, typography) imply the system is intentionally non-generic.
- Buttons tend toward oklch(0.4 0.01 264 / 0.12) backgrounds with oklch(0.2 0.002 264) text, and links inherit oklch(0.2 0.002 264) as the interaction signal.

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
- Nice-to-have embellishments:
  - tags include typography
  - tags include graphic-design
- Mobile fallback: Split the poster into two to four scenes, preserve one hero interaction, and drop hover-only secondary behavior.
- Fallback path: reduced-motion, static-poster
- Manual validation:
  - The hero gesture is obvious in under three seconds.
  - Desktop and mobile preserve the same campaign idea with different staging.
  - Typography remains part of the interaction system.

## 12. Do's and Don'ts

### Do
- Use Mirage consistently for headlines and interface labels.
- Keep the palette anchored to #f1f2f4, #686968, and #15220f.
- Preserve the experimental posture signaled by the archive tags: graphic-design, typography.
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

> Build this as a Playable Poster page with a secondary cue from Collage Core using the Playable Poster interaction model. Keep Mirage as the voice anchor, preserve the palette around #f1f2f4, #686968, #15220f, drive the page through scroll, tap, hover, and implement the mobile fallback as: Split the poster into two to four scenes, preserve one hero interaction, and drop hover-only secondary behavior.


## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/open-foundry)
- Live site: https://open-foundry.com
- Credits: not listed
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
