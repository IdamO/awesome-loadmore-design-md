# Design System Inspiration of Trans Books

## 1. Visual Theme & Atmosphere

Trans Books reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #000000, #e4e4e5, and accent notes from #a4a4a5. Grid-based single page website with a fun inverted scrolling animation for the 2018 edition of this Japanese book fair.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers slick, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #000000, #e4e4e5, #a4a4a5, #5e5e5f
- Typography stack: slick, YakuHanJP, HelveticaNeueLTStd-Roman
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. World Systems & Archetype

### World Systems
- Primary: Club Instrument - archetype affinity: scroll scrub instrument
- Secondary: Fan Shrine - description mentions edition

### Interaction Archetype
- Archetype: Scroll Scrub Instrument (66% confidence)
- Why: description mentions scroll
- Core verbs: scroll, scrub, sequence
- Inputs: scroll, tap



## 3. Color Palette & Roles

- Color 1: #000000 - canvas / dominant background
- Color 2: #e4e4e5 - primary text or opposing surface
- Color 3: #a4a4a5 - accent / interactive signal
- Color 4: #5e5e5f - supporting surface or hover state
- Color 5: #dddc1b - supporting surface or hover state
- Color 6: #16d919 - supporting surface or hover state
- Color 7: #e6e29e - supporting surface or hover state
- Color 8: #e3e15a - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: slick
- Secondary: YakuHanJP
- Support: HelveticaNeueLTStd-Roman

### Hierarchy Snapshot
- Heading sample: 24px / weight 400 / letter-spacing 0.16px
- Body sample: 20px / weight 500 / line-height 26.6px
- Button sample: n/a / weight n/a

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#000000) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (event) imply the system is intentionally non-generic.
- Buttons tend toward transparent backgrounds with inherit text, and links inherit rgb(0, 0, 0) as the interaction signal.

## 6. Interaction Mechanics

- Primary model: scroll_scrub_instrument
- Navigation structure: linear / wayfinding explicit / friction medium
- Navigation model: Scroll is the transport; sections behave like tracks or cues.
- State model: Scroll offset -> note or frame change -> visible indicator -> optional audio decay.
- Must-keep mechanic: Map scroll position to notes, frames, or parameter changes so the page behaves like a score or sequencer.

## 7. Motion System

- Density: medium
- Cadence: tempo-linked
- Triggers: scroll
- Transition types: scrub, snap, fade
- Physics level: light
- Motion recipe:
  - Tie transforms directly to scrub progress instead of free-running timelines.
  - Use section snap or chapter markers to help users re-find the melody or state.
  - Keep auxiliary motion secondary to the scrub itself.

## 8. Spatial Model

- Space type: layered-2d
- Camera behavior: rail
- Depth cues: scale, perspective
- HUD layering: overlay
- Render tier: mixed
- Primary depth cue in capture: flat surfaces / contrast-only separation

## 9. Participation & State

- Participation mode: compose
- Persistence: ephemeral
- Inputs to preserve: scroll, tap
- Reset/save posture: Default to resettable, lightweight state changes.

## 10. Sound & Sensor Behavior

- Audio role: reactive
- Audio triggers: scroll
- Controls: mute, play-pause
- Sync: tight
- Required APIs or platform hooks: webaudio

## 11. Implementation Checklist

- Complexity: high
- Required APIs: webaudio
- Must-have mechanics:
  - Keep the mapping between scroll distance and output legible; hidden ratios feel broken.
  - Provide re-entry points so users can replay the interaction without hunting.
  - On mobile, reduce precision requirements and preserve the idea rather than the literal desktop mechanic.
  - The capture suggests anchored framing or sticky context; preserve that orientation device in the rebuild.
- Nice-to-have embellishments:
  - description mentions scroll
- Mobile fallback: Replace long scrub zones with a horizontal slider or stepped scenes while keeping audio opt-in.
- Fallback path: mute-first, reduced-motion
- Manual validation:
  - Scroll position clearly maps to a note, frame, or state change.
  - Replay and return paths are obvious.
  - Mobile keeps the same concept without precision overload.

## 12. Do's and Don'ts

### Do
- Use slick consistently for headlines and interface labels.
- Keep the palette anchored to #000000, #e4e4e5, and #a4a4a5.
- Preserve the experimental posture signaled by the archive tags: event.
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
- Implement mobile as: Replace long scrub zones with a horizontal slider or stepped scenes while keeping audio opt-in..
- If the live site failed to capture, fall back to the archival poster on the loadmo.re post page before inventing missing behavior.

## 14. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build this as a Club Instrument page with a secondary cue from Fan Shrine using the Scroll Scrub Instrument interaction model. Keep slick as the voice anchor, preserve the palette around #000000, #e4e4e5, #a4a4a5, drive the page through scroll, tap, and implement the mobile fallback as: Replace long scrub zones with a horizontal slider or stepped scenes while keeping audio opt-in.


## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/trans-books)
- Live site: https://transbooks.center/2018/
- Credits: Hagiwara Shunya
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
