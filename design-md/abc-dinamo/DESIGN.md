# Design System Inspiration of ABC Dinamo

## 1. Visual Theme & Atmosphere

ABC Dinamo reads as type-led composition. The live capture resolves to a dark-leaning system built around #fd4100, #eff3f6, and accent notes from #e53a03. Explore this vibrant, clean type studio site with smooth interactions. Navigate through typefaces and test them with your own text.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Monument Grotesk, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #fd4100, #eff3f6, #e53a03, #9f2a07
- Typography stack: Monument Grotesk, Monument Grotesk Mono, Monument Grotesk Semi Mono
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. World Systems & Archetype

### World Systems
- Primary: Playable Poster - tags include typography; description mentions typeface; archetype affinity: playable poster
- Secondary: Collage Core - archetype affinity: playable poster

### Interaction Archetype
- Archetype: Playable Poster (88% confidence)
- Why: tags include typography; description mentions typeface; sticky layout
- Core verbs: reveal, distort, stage
- Inputs: scroll, tap, hover, type



## 3. Color Palette & Roles

- Color 1: #fd4100 - canvas / dominant background
- Color 2: #eff3f6 - primary text or opposing surface
- Color 3: #e53a03 - accent / interactive signal
- Color 4: #9f2a07 - supporting surface or hover state
- Color 5: #1a0d0a - supporting surface or hover state
- Color 6: #621a07 - supporting surface or hover state
- Color 7: #ef9473 - supporting surface or hover state
- Color 8: #9ea1a3 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: Monument Grotesk
- Secondary: Monument Grotesk Mono
- Support: Monument Grotesk Semi Mono
- Support: DinamoDarkroom
- Support: DinamoLoading
- Support: font-full-3755034
- Support: font-full-3748205
- Support: font-full-3748204

### Hierarchy Snapshot
- Heading sample: 32.7628px / weight 400 / letter-spacing normal
- Body sample: 20.8491px / weight 400 / line-height 22.934px
- Button sample: 9.15391px / weight 400

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fd4100) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (typography) imply the system is intentionally non-generic.
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(255, 255, 255) text, and links inherit rgb(0, 0, 0) as the interaction signal.

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
- Inputs to preserve: scroll, tap, hover, type
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
  - tags include typography
  - description mentions typeface
  - sticky layout
- Mobile fallback: Split the poster into two to four scenes, preserve one hero interaction, and drop hover-only secondary behavior.
- Fallback path: reduced-motion, static-poster
- Manual validation:
  - The hero gesture is obvious in under three seconds.
  - Desktop and mobile preserve the same campaign idea with different staging.
  - Typography remains part of the interaction system.

## 12. Do's and Don'ts

### Do
- Use Monument Grotesk consistently for headlines and interface labels.
- Keep the palette anchored to #fd4100, #eff3f6, and #e53a03.
- Preserve the experimental posture signaled by the archive tags: typography.
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

> Build this as a Playable Poster page with a secondary cue from Collage Core using the Playable Poster interaction model. Keep Monument Grotesk as the voice anchor, preserve the palette around #fd4100, #eff3f6, #e53a03, drive the page through scroll, tap, hover, type, and implement the mobile fallback as: Split the poster into two to four scenes, preserve one hero interaction, and drop hover-only secondary behavior.



## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/abc-dinamo)
- Live site: https://abcdinamo.com/typefaces/otto
- Credits: not listed
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
