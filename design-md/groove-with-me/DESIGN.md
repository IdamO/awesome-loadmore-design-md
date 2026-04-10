# Design System Inspiration of Groove with me

## 1. Visual Theme & Atmosphere

Groove with me reads as playful interaction, sonic pacing, spatial depth. The live capture resolves to a light-leaning system built around #e6ecf1, #abd2df, and accent notes from #8fb557. Pick a character and make it groove within this online fantasy land.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #e6ecf1, #abd2df, #8fb557, #a4c966
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Club Instrument - tags include music; tags include playful; tags include 3d-space
- Secondary: Collage Core - tags include playful; archival visual bias

### Interaction Archetype
- Archetype: Club Instrument (66% confidence)
- Why: tags include music; tags include playful; tags include 3d-space
- Core verbs: trigger, press, mix
- Inputs: tap, drag, press



## 3. Color Palette & Roles

- Color 1: #e6ecf1 - canvas / dominant background
- Color 2: #abd2df - primary text or opposing surface
- Color 3: #8fb557 - accent / interactive signal
- Color 4: #a4c966 - supporting surface or hover state
- Color 5: #d5d8a8 - supporting surface or hover state
- Color 6: #5f9530 - supporting surface or hover state
- Color 7: #73a94b - supporting surface or hover state
- Color 8: #b2cf94 - supporting surface or hover state

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
- Let the main background color (#e6ecf1) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (music, playful, 3d-space) imply the system is intentionally non-generic.
- Buttons tend toward transparent backgrounds with inherit text, and links inherit #8fb557 as the interaction signal.

## 6. Interaction Mechanics

- Primary model: club_instrument
- Navigation structure: single-scene / wayfinding explicit / friction low
- Navigation model: The hero stage is primary; secondary controls tune the same live system instead of opening unrelated sections.
- State model: Idle pulse -> active press/gesture -> audible or visual response -> decay/settle.
- Must-keep mechanic: Single hero stage plus reactive controls; user input changes sound or system state immediately; the interface should feel like an instrument, not a dashboard.

## 7. Motion System

- Density: medium
- Cadence: tempo-linked
- Triggers: pointer, time
- Transition types: pulse, meter-fill, glow
- Physics level: light
- Motion recipe:
  - Keep one ambient pulse running behind the page.
  - Tie meter fills, glows, or counters to direct user input.
  - Use press feedback that resolves in under 180ms.

## 8. Spatial Model

- Space type: layered-2d
- Camera behavior: fixed
- Depth cues: scale, lighting
- HUD layering: overlay
- Render tier: mixed
- Primary depth cue in capture: flat surfaces / contrast-only separation

## 9. Participation & State

- Participation mode: compose
- Persistence: ephemeral
- Inputs to preserve: tap, drag, press
- Reset/save posture: Default to resettable, lightweight state changes.

## 10. Sound & Sensor Behavior

- Audio role: instrument
- Audio triggers: press, drag
- Controls: mute, play-pause
- Sync: tight
- Required APIs or platform hooks: webaudio

## 11. Implementation Checklist

- Complexity: high
- Required APIs: webaudio
- Must-have mechanics:
  - This entry relies on archival fallback captures, so use the visual direction literally and the interaction model heuristically.
  - Keep latency visibly and audibly tight; delayed response kills the instrument illusion.
  - Treat meters, counters, or glows as live telemetry, not decoration.
  - Gate autoplay and heavy audio initialization until the first explicit gesture.
  - Live DOM analysis was sparse, so the description and tags carry more weight than sampled interface tokens.
- Nice-to-have embellishments:
  - tags include music
  - tags include playful
  - tags include 3d-space
- Mobile fallback: Collapse to one active control strip, one focal stage, and tap-to-trigger presets instead of a dense multi-panel control surface.
- Fallback path: mute-first, reduced-motion
- Manual validation:
  - Gesture-to-sound response feels immediate after user intent.
  - The main control loop is readable in one glance.
  - Mobile keeps one clear control path rather than shrinking every panel.
  - Before shipping, manually verify any interaction that the capture could not prove live.
  - Cross-check screenshots against the description so the interaction model does not drift away from the source premise.

## 12. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #e6ecf1, #abd2df, and #8fb557.
- Preserve the experimental posture signaled by the archive tags: music, playful, 3d-space.
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
- Implement mobile as: Collapse to one active control strip, one focal stage, and tap-to-trigger presets instead of a dense multi-panel control surface..
- If the live site failed to capture, fall back to the archival poster on the loadmo.re post page before inventing missing behavior.

## 14. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build this as a Club Instrument page with a secondary cue from Collage Core using the Club Instrument interaction model. Keep the extracted primary font as the voice anchor, preserve the palette around #e6ecf1, #abd2df, #8fb557, drive the page through tap, drag, press, and implement the mobile fallback as: Collapse to one active control strip, one focal stage, and tap-to-trigger presets instead of a dense multi-panel control surface.



## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/groove-with-me)
- Live site: https://groovewithme.xyz/
- Credits: Rachel Kim
- Capture mode: archival-fallback
- Desktop capture: failed
- Mobile capture: failed
- Archival fallback: poster image used for missing screenshots
