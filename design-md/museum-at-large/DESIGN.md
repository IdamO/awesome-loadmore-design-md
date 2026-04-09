# Design System Inspiration of Museum At Large

## 1. Visual Theme & Atmosphere

Museum At Large reads as exhibition-like framing. The live capture resolves to a light-leaning system built around #f8c9d3, #151011, and accent notes from #d1aab2. Adjust your reading rhythm by navigating with a drawing tool.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Relative-Book, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f8c9d3, #151011, #d1aab2, #ae8d94
- Typography stack: Relative-Book, Relative-Bold
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Playable Poster - tags include colorful; tags include tactile; archetype affinity: playable poster
- Secondary: Luxury Archive - tags include arts&culture; description mentions museum

### Interaction Archetype
- Archetype: Playable Poster (68% confidence)
- Why: tags include colorful; tags include tactile; large display type
- Core verbs: reveal, distort, stage, draw
- Inputs: scroll, tap, hover



## 3. Color Palette & Roles

- Color 1: #f8c9d3 - canvas / dominant background
- Color 2: #151011 - primary text or opposing surface
- Color 3: #d1aab2 - accent / interactive signal
- Color 4: #ae8d94 - supporting surface or hover state
- Color 5: #6b575b - supporting surface or hover state
- Color 6: #897075 - supporting surface or hover state
- Color 7: #e6bbc4 - supporting surface or hover state
- Color 8: #987c82 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: Relative-Book
- Secondary: Relative-Bold

### Hierarchy Snapshot
- Heading sample: 90px / weight 300 / letter-spacing normal
- Body sample: 10px / weight 300 / line-height 10px
- Button sample: n/a / weight n/a

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f8c9d3) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (tactile, arts&culture, colorful) imply the system is intentionally non-generic.
- Buttons tend toward transparent backgrounds with inherit text, and links inherit rgb(0, 0, 238) as the interaction signal.

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
  - large display type
- Mobile fallback: Split the poster into two to four scenes, preserve one hero interaction, and drop hover-only secondary behavior.
- Fallback path: reduced-motion, static-poster
- Manual validation:
  - The hero gesture is obvious in under three seconds.
  - Desktop and mobile preserve the same campaign idea with different staging.
  - Typography remains part of the interaction system.

## 12. Do's and Don'ts

### Do
- Use Relative-Book consistently for headlines and interface labels.
- Keep the palette anchored to #f8c9d3, #151011, and #d1aab2.
- Preserve the experimental posture signaled by the archive tags: tactile, arts&culture, colorful.
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

> Build this as a Playable Poster page with a secondary cue from Luxury Archive using the Playable Poster interaction model. Keep Relative-Book as the voice anchor, preserve the palette around #f8c9d3, #151011, #d1aab2, drive the page through scroll, tap, hover, and implement the mobile fallback as: Split the poster into two to four scenes, preserve one hero interaction, and drop hover-only secondary behavior.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/museum-at-large)
- Live site: https://museumatlarge.com
- Credits: Steven Thorne, TR Bennett
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
