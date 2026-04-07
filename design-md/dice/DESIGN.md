# Design System Inspiration of Dice

## 1. Visual Theme & Atmosphere

Dice reads as exhibition-like framing. The live capture resolves to a light-leaning system built around #edecda, #5ed3ad, and accent notes from #50ad8e. Interactive poster with a 3d blob shape which reacts to the scrolling movement.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Space Mono, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #edecda, #5ed3ad, #50ad8e, #369979
- Typography stack: Space Mono, FontAwesome, Mabgate
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Playable Poster - description mentions poster; archetype affinity: playable poster; large display type
- Secondary: Luxury Archive - tags include arts&culture

### Interaction Archetype
- Archetype: Playable Poster (80% confidence)
- Why: description mentions poster; description mentions interactive; large display type
- Core verbs: reveal, distort, stage, scroll
- Inputs: scroll, tap, hover

## 3. Color Palette & Roles

- Color 1: #edecda - canvas / dominant background
- Color 2: #5ed3ad - primary text or opposing surface
- Color 3: #50ad8e - accent / interactive signal
- Color 4: #369979 - supporting surface or hover state
- Color 5: #a3dfc6 - supporting surface or hover state
- Color 6: #89d5b9 - supporting surface or hover state
- Color 7: #3da380 - supporting surface or hover state
- Color 8: #9ea79b - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: Space Mono
- Secondary: FontAwesome
- Support: Mabgate
- Support: MabgateLogotype

### Hierarchy Snapshot
- Heading sample: 421.4px / weight 400 / letter-spacing -10.535px
- Body sample: 16px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#edecda) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (arts&culture) imply the site is intentionally non-generic.
- Buttons tend toward transparent backgrounds with inherit text, and links inherit rgb(0, 0, 0) as the interaction signal.

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
  - description mentions poster
  - description mentions interactive
  - large display type
- Mobile fallback: Split the poster into two to four scenes, preserve one hero interaction, and drop hover-only secondary behavior.
- Fallback path: reduced-motion, static-poster
- Manual validation:
  - The hero gesture is obvious in under three seconds.
  - Desktop and mobile preserve the same campaign idea with different staging.
  - Typography remains part of the interaction system.

## 12. Do's and Don'ts

### Do
- Use Space Mono consistently for headlines and interface labels.
- Keep the palette anchored to #edecda, #5ed3ad, and #50ad8e.
- Preserve the experimental posture signaled by the loadmo.re tags: arts&culture.
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

> Build this as a Playable Poster page with a secondary cue from Luxury Archive using the Playable Poster interaction model. Keep Space Mono as the voice anchor, preserve the palette around #edecda, #5ed3ad, #50ad8e, drive the page through scroll, tap, hover, and implement the mobile fallback as: Split the poster into two to four scenes, preserve one hero interaction, and drop hover-only secondary behavior.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/dice)
- Live site: https://dice.berlin/
- Credits: not listed
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
