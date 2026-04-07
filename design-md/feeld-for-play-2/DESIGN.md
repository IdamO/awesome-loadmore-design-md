# Design System Inspiration of Feeld for Play

## 1. Visual Theme & Atmosphere

Feeld for Play reads as playful interaction. The live capture resolves to a dark-leaning system built around #1b1b27, #303145, and accent notes from #585861. Fun game to promote a dating app. Turn on your camera to generate your 3D floating shape that will maybe flirt with other online users.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Geologica, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #1b1b27, #303145, #585861, #9b9ca0
- Typography stack: Geologica
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. World Systems & Archetype

### World Systems
- Primary: Playable Poster - tags include playful; archetype affinity: toy loop microgame
- Secondary: Collage Core - tags include playful; archetype affinity: toy loop microgame

### Interaction Archetype
- Archetype: Toy Loop Microgame (96% confidence)
- Why: tags include playful; tags include participative; description mentions game; description mentions play
- Core verbs: play, drag, reset
- Inputs: tap, drag

## 3. Color Palette & Roles

- Color 1: #1b1b27 - canvas / dominant background
- Color 2: #303145 - primary text or opposing surface
- Color 3: #585861 - accent / interactive signal
- Color 4: #9b9ca0 - supporting surface or hover state
- Color 5: #e42847 - supporting surface or hover state
- Color 6: #552331 - supporting surface or hover state
- Color 7: #d3203b - supporting surface or hover state
- Color 8: #cfd0d2 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: Geologica

### Hierarchy Snapshot
- Heading sample: 32px / weight 700 / letter-spacing normal
- Body sample: 14px / weight 100 / line-height 24px
- Button sample: 16px / weight 400

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#1b1b27) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (participative, playful) imply the site is intentionally non-generic.
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(255, 255, 255) text, and links inherit rgb(255, 255, 255) as the interaction signal.

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
- Primary depth cue in capture: rgba(0, 0, 0, 0.24) 0px 2px 2px 0px

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
  - The capture suggests anchored framing or sticky context; preserve that orientation device in the rebuild.
- Nice-to-have embellishments:
  - tags include playful
  - tags include participative
  - description mentions game
  - description mentions play
- Mobile fallback: Keep only tap and drag; remove precision mechanics, shorten the loop, and enlarge hit targets.
- Fallback path: reduced-motion
- Manual validation:
  - The rule is clear after one attempt.
  - The loop completes quickly and invites replay.
  - Mobile keeps the same toy, not a broken imitation of desktop controls.

## 12. Do's and Don'ts

### Do
- Use Geologica consistently for headlines and interface labels.
- Keep the palette anchored to #1b1b27, #303145, and #585861.
- Preserve the experimental posture signaled by the loadmo.re tags: participative, playful.
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

> Build this as a Playable Poster page with a secondary cue from Collage Core using the Toy Loop Microgame interaction model. Keep Geologica as the voice anchor, preserve the palette around #1b1b27, #303145, #585861, drive the page through tap, drag, and implement the mobile fallback as: Keep only tap and drag; remove precision mechanics, shorten the loop, and enlarge hit targets.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/feeld-for-play-2)
- Live site: https://feeldforplay.com/
- Credits: Moniker
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
