# Design System Inspiration of World On a Wire

## 1. Visual Theme & Atmosphere

World On a Wire reads as exhibition-like framing. The live capture resolves to a dark-leaning system built around #605d6b, #09090a, and accent notes from #122463. Tactile website, which feels like an interactive elastic poster to promote an artistic event by Hyundai Motorstudio.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers HyundaiSansText-Regular, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #605d6b, #09090a, #122463, #e2dcdc
- Typography stack: HyundaiSansText-Regular, HyundaiSansText-Medium
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Playable Poster - description mentions poster; description mentions event; archetype affinity: playable poster
- Secondary: Luxury Archive - tags include arts&culture

### Interaction Archetype
- Archetype: Playable Poster (76% confidence)
- Why: description mentions poster; description mentions interactive
- Core verbs: reveal, distort, stage
- Inputs: scroll, tap, hover



## 3. Color Palette & Roles

- Color 1: #605d6b - canvas / dominant background
- Color 2: #09090a - primary text or opposing surface
- Color 3: #122463 - accent / interactive signal
- Color 4: #e2dcdc - supporting surface or hover state
- Color 5: #9c9aa3 - supporting surface or hover state
- Color 6: #936e65 - supporting surface or hover state
- Color 7: #5c6488 - supporting surface or hover state
- Color 8: #aeb5c5 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: HyundaiSansText-Regular
- Secondary: HyundaiSansText-Medium

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#605d6b) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (arts&culture) imply the system is intentionally non-generic.
- Buttons tend toward transparent backgrounds with inherit text, and links inherit #122463 as the interaction signal.

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
- Primary depth cue in capture: rgb(255, 255, 255) 0px 0px 0px 0.1px inset

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
- Mobile fallback: Split the poster into two to four scenes, preserve one hero interaction, and drop hover-only secondary behavior.
- Fallback path: reduced-motion, static-poster
- Manual validation:
  - The hero gesture is obvious in under three seconds.
  - Desktop and mobile preserve the same campaign idea with different staging.
  - Typography remains part of the interaction system.

## 12. Do's and Don'ts

### Do
- Use HyundaiSansText-Regular consistently for headlines and interface labels.
- Keep the palette anchored to #605d6b, #09090a, and #122463.
- Preserve the experimental posture signaled by the archive tags: arts&culture.
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

> Build this as a Playable Poster page with a secondary cue from Luxury Archive using the Playable Poster interaction model. Keep HyundaiSansText-Regular as the voice anchor, preserve the palette around #605d6b, #09090a, #122463, drive the page through scroll, tap, hover, and implement the mobile fallback as: Split the poster into two to four scenes, preserve one hero interaction, and drop hover-only secondary behavior.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/world-on-a-wire)
- Live site: https://worldonawire.net/
- Credits: Yehwan Song 송예환
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
