# Design System Inspiration of Scrolling the Arcane

## 1. Visual Theme & Atmosphere

Scrolling the Arcane reads as spatial depth. The live capture resolves to a dark-leaning system built around #0f1016, #172b55, and accent notes from #aa88b0. Enter into introspection by using your phone's motion and camera sensors to pan round an otherworldly dome.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #0f1016, #172b55, #aa88b0, #5a63aa
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Club Instrument - tags include 3d-space; archetype affinity: scroll scrub instrument
- Secondary: Collage Core - archival visual bias

### Interaction Archetype
- Archetype: Scroll Scrub Instrument (78% confidence)
- Why: description mentions scroll; title mentions scroll
- Core verbs: scroll, scrub, sequence
- Inputs: scroll, tap



## 3. Color Palette & Roles

- Color 1: #0f1016 - canvas / dominant background
- Color 2: #172b55 - primary text or opposing surface
- Color 3: #aa88b0 - accent / interactive signal
- Color 4: #5a63aa - supporting surface or hover state
- Color 5: #a67693 - supporting surface or hover state
- Color 6: #8f6577 - supporting surface or hover state
- Color 7: #37488a - supporting surface or hover state
- Color 8: #6d5764 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: n/a / weight n/a / line-height normal
- Button sample: n/a / weight n/a

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#0f1016) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (3d-space, portfolio) imply the system is intentionally non-generic.
- Buttons tend toward transparent backgrounds with inherit text, and links inherit #aa88b0 as the interaction signal.

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
  - This entry relies on archival fallback captures, so use the visual direction literally and the interaction model heuristically.
  - Keep the mapping between scroll distance and output legible; hidden ratios feel broken.
  - Provide re-entry points so users can replay the interaction without hunting.
  - On mobile, reduce precision requirements and preserve the idea rather than the literal desktop mechanic.
  - Live DOM analysis was sparse, so the description and tags carry more weight than sampled interface tokens.
- Nice-to-have embellishments:
  - description mentions scroll
  - title mentions scroll
- Mobile fallback: Replace long scrub zones with a horizontal slider or stepped scenes while keeping audio opt-in.
- Fallback path: mute-first, reduced-motion
- Manual validation:
  - Scroll position clearly maps to a note, frame, or state change.
  - Replay and return paths are obvious.
  - Mobile keeps the same concept without precision overload.
  - Before shipping, manually verify any interaction that the capture could not prove live.
  - Cross-check screenshots against the description so the interaction model does not drift away from the source premise.

## 12. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #0f1016, #172b55, and #aa88b0.
- Preserve the experimental posture signaled by the archive tags: 3d-space, portfolio.
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

> Build this as a Club Instrument page with a secondary cue from Collage Core using the Scroll Scrub Instrument interaction model. Keep the extracted primary font as the voice anchor, preserve the palette around #0f1016, #172b55, #aa88b0, drive the page through scroll, tap, and implement the mobile fallback as: Replace long scrub zones with a horizontal slider or stepped scenes while keeping audio opt-in.


## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/scrolling-the-arcane)
- Live site: https://scrollingthearcane.com/
- Credits: Max Ryan
- Capture mode: archival-fallback
- Desktop capture: failed
- Mobile capture: failed
- Archival fallback: poster image used for missing screenshots
