# Design System Inspiration of Leila Mcglew

## 1. Visual Theme & Atmosphere

Leila Mcglew reads as playful interaction. The live capture resolves to a light-leaning system built around #f4f5f0, #f4f5f1, and accent notes from #000000. Playful yet simple page that lets you draw emojis everywhere. Satisfying!

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Nunito, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f4f5f0, #f4f5f1, #000000
- Typography stack: Nunito
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Playable Poster - tags include playful; tags include tactile; archetype affinity: toy loop microgame
- Secondary: Collage Core - tags include playful; tags include tactile; archetype affinity: toy loop microgame

### Interaction Archetype
- Archetype: Toy Loop Microgame (73% confidence)
- Why: tags include playful; description mentions play
- Core verbs: play, drag, reset, draw
- Inputs: tap, drag



## 3. Color Palette & Roles

- Color 1: #f4f5f0 - canvas / dominant background
- Color 2: #f4f5f1 - primary text or opposing surface
- Color 3: #000000 - accent / interactive signal

## 4. Typography Rules

### Font Families
- Primary: Nunito

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 79.2px / weight 1000 / line-height 81.18px
- Button sample: n/a / weight n/a

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f4f5f0) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (playful, tactile) imply the system is intentionally non-generic.
- Buttons tend toward transparent backgrounds with inherit text, and links inherit rgb(244, 245, 241) as the interaction signal.

## 6. Interaction Mechanics

- Primary model: toy_loop_microgame
- Navigation structure: single-scene / wayfinding explicit / friction medium
- Navigation model: The loop is the page; everything else supports replay or escalation.
- State model: Instruction or teaser -> play loop -> reward or reveal -> reset.
- Must-keep mechanic: One simple rule, immediate feedback, short mastery loop, replayable in under a minute.

## 7. Motion System

- Density: high
- Cadence: continuous
- Triggers: pointer, physics
- Transition types: shuffle, pop, reset
- Physics level: heavy
- Motion recipe:
  - Prefer instant response plus elastic decay.
  - Show state pops or score pops clearly.
  - Make reset or replay feel ceremonial enough that users want another round.

## 8. Spatial Model

- Space type: layered-2d
- Camera behavior: fixed
- Depth cues: scale, occlusion
- HUD layering: overlay
- Render tier: canvas2d
- Primary depth cue in capture: flat surfaces / contrast-only separation

## 9. Participation & State

- Participation mode: play
- Persistence: ephemeral
- Inputs to preserve: tap, drag
- Reset/save posture: Default to resettable, lightweight state changes.

## 10. Sound & Sensor Behavior

- Audio role: none
- Audio triggers: none
- Controls: none
- Sync: none
- Required APIs or platform hooks: canvas

## 11. Implementation Checklist

- Complexity: high
- Required APIs: canvas
- Must-have mechanics:
  - Explain the rule through interaction, not a paragraph.
  - Keep the mastery loop short and replayable.
  - If the toy is the hook, let it start above the fold.
- Nice-to-have embellishments:
  - tags include playful
  - description mentions play
- Mobile fallback: Keep only tap and drag; remove precision mechanics, shorten the loop, and enlarge hit targets.
- Fallback path: reduced-motion
- Manual validation:
  - The rule is clear after one attempt.
  - The loop completes quickly and invites replay.
  - Mobile keeps the same toy, not a broken imitation of desktop controls.

## 12. Do's and Don'ts

### Do
- Use Nunito consistently for headlines and interface labels.
- Keep the palette anchored to #f4f5f0, #f4f5f1, and #000000.
- Preserve the experimental posture signaled by the archive tags: playful, tactile.
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
- Implement mobile as: Keep only tap and drag; remove precision mechanics, shorten the loop, and enlarge hit targets..
- If the live site failed to capture, fall back to the archival poster on the loadmo.re post page before inventing missing behavior.

## 14. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build this as a Playable Poster page with a secondary cue from Collage Core using the Toy Loop Microgame interaction model. Keep Nunito as the voice anchor, preserve the palette around #f4f5f0, #f4f5f1, #000000, drive the page through tap, drag, and implement the mobile fallback as: Keep only tap and drag; remove precision mechanics, shorten the loop, and enlarge hit targets.



## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/leila-mcglew)
- Live site: http://leilamcglew.com
- Credits: Jake Dow Smith
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
