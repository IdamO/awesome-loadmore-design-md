# Design System Inspiration of AWGE

## 1. Visual Theme & Atmosphere

AWGE reads as sonic pacing, retro-computing cues. The live capture resolves to a dark-leaning system built around #65635c, #b2aeac, and accent notes from #181718. A$AP Rocky's creative agency. Is this a retro video game? A vintage flash website? an old TV show made interactive? Can't say. Whatever you call it, it's brilliant.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Font Awesome 5 Brands, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #65635c, #b2aeac, #181718, #534c39
- Typography stack: Font Awesome 5 Brands, Font Awesome 5 Free, VideoJS
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Fan Shrine - tags include e-commerce; tags include music
- Secondary: Club Instrument - tags include music

### Interaction Archetype
- Archetype: Toy Loop Microgame (71% confidence)
- Why: description mentions game; description mentions interact
- Core verbs: play, drag, reset
- Inputs: tap, drag



## 3. Color Palette & Roles

- Color 1: #65635c - canvas / dominant background
- Color 2: #b2aeac - primary text or opposing surface
- Color 3: #181718 - accent / interactive signal
- Color 4: #534c39 - supporting surface or hover state
- Color 5: #8e8970 - supporting surface or hover state
- Color 6: #cacaca - supporting surface or hover state
- Color 7: #867a65 - supporting surface or hover state
- Color 8: #c0bbbc - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: Font Awesome 5 Brands
- Secondary: Font Awesome 5 Free
- Support: VideoJS
- Support: Press Start 2P
- Support: Jura
- Support: Kanit-Klaviyo-Hosted
- Support: Nunito-Sans-Klaviyo-Hosted
- Support: Poppins-Klaviyo-Hosted

### Hierarchy Snapshot
- Heading sample: 32px / weight 400 / letter-spacing normal
- Body sample: 16px / weight 400 / line-height normal
- Button sample: 14.4px / weight 400

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#65635c) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (music, retro, e-commerce) imply the system is intentionally non-generic.
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(255, 255, 255) text, and links inherit rgb(0, 0, 238) as the interaction signal.

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
- Primary depth cue in capture: none

## 9. Participation & State

- Participation mode: play
- Persistence: ephemeral
- Inputs to preserve: tap, drag
- Reset/save posture: Default to resettable, lightweight state changes.

## 10. Sound & Sensor Behavior

- Audio role: reactive
- Audio triggers: gameplay
- Controls: mute
- Sync: loose
- Required APIs or platform hooks: canvas

## 11. Implementation Checklist

- Complexity: high
- Required APIs: canvas
- Must-have mechanics:
  - Explain the rule through interaction, not a paragraph.
  - Keep the mastery loop short and replayable.
  - If the toy is the hook, let it start above the fold.
- Nice-to-have embellishments:
  - description mentions game
  - description mentions interact
- Mobile fallback: Keep only tap and drag; remove precision mechanics, shorten the loop, and enlarge hit targets.
- Fallback path: reduced-motion
- Manual validation:
  - The rule is clear after one attempt.
  - The loop completes quickly and invites replay.
  - Mobile keeps the same toy, not a broken imitation of desktop controls.

## 12. Do's and Don'ts

### Do
- Use Font Awesome 5 Brands consistently for headlines and interface labels.
- Keep the palette anchored to #65635c, #b2aeac, and #181718.
- Preserve the experimental posture signaled by the archive tags: music, retro, e-commerce.
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

> Build this as a Fan Shrine page with a secondary cue from Club Instrument using the Toy Loop Microgame interaction model. Keep Font Awesome 5 Brands as the voice anchor, preserve the palette around #65635c, #b2aeac, #181718, drive the page through tap, drag, and implement the mobile fallback as: Keep only tap and drag; remove precision mechanics, shorten the loop, and enlarge hit targets.


## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/awge)
- Live site: https://www.awge.com/
- Credits: Alex shortt
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
