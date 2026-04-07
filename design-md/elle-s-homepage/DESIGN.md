# Design System Inspiration of Elle's Homepage

## 1. Visual Theme & Atmosphere

Elle's Homepage reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #fdfdfd, #aaa9ad, and accent notes from #646069. Welcome to Elle's under-construction homepage with a nostalgic 2000s vibe—click around and watch the pixel art character explore <3

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers jbmono, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fdfdfd, #aaa9ad, #646069, #bebdc0
- Typography stack: jbmono, lora, hyperlg
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Fan Shrine - tags include portfolio; archetype affinity: portfolio artifact
- Secondary: Luxury Archive - archetype affinity: portfolio artifact

### Interaction Archetype
- Archetype: Portfolio Artifact (76% confidence)
- Why: tags include portfolio
- Core verbs: read, browse, contact
- Inputs: scroll, tap

## 3. Color Palette & Roles

- Color 1: #fdfdfd - canvas / dominant background
- Color 2: #aaa9ad - primary text or opposing surface
- Color 3: #646069 - accent / interactive signal
- Color 4: #bebdc0 - supporting surface or hover state
- Color 5: #2b2531 - supporting surface or hover state
- Color 6: #7d7a81 - supporting surface or hover state
- Color 7: #433a4a - supporting surface or hover state
- Color 8: #3b3443 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: jbmono
- Secondary: lora
- Support: hyperlg
- Support: elle
- Support: ellepx

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 11.2px / weight 400 / line-height 15.68px
- Button sample: 7.2px / weight 400

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fdfdfd) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio) imply the site is intentionally non-generic.
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(70, 62, 78) text, and links inherit rgb(47, 42, 53) as the interaction signal.

## 6. Interaction Mechanics

- Primary model: portfolio_artifact
- Navigation structure: linear / wayfinding ambient / friction low
- Navigation model: The author voice or project sequence leads; navigation stays secondary and quiet.
- State model: Arrival -> authored sequence of text, image, or projects -> contact or archive state.
- Must-keep mechanic: Asymmetrical document flow, authored modules, and selective reveals make the portfolio itself feel like a designed object.

## 7. Motion System

- Density: low
- Cadence: event-driven
- Triggers: scroll, pointer
- Transition types: fade, crop-shift
- Physics level: none
- Motion recipe:
  - Use restrained reveals and occasional viewpoint shifts.
  - Let typography and image sequencing do more work than animation.
  - Use one irrational but coherent move to keep the page from feeling templated.

## 8. Spatial Model

- Space type: flat
- Camera behavior: fixed
- Depth cues: scale
- HUD layering: none
- Render tier: dom
- Primary depth cue in capture: none

## 9. Participation & State

- Participation mode: browse
- Persistence: none
- Inputs to preserve: scroll, tap
- Reset/save posture: Default to resettable, lightweight state changes.

## 10. Sound & Sensor Behavior

- Audio role: none
- Audio triggers: none
- Controls: none
- Sync: none
- Required APIs or platform hooks: none

## 11. Implementation Checklist

- Complexity: low
- Required APIs: none
- Must-have mechanics:
  - Keep one strong authorial decision intact across breakpoints.
  - Use type, pacing, and framing as the identity before relying on motion.
  - If the site feels like a normal portfolio shell, push one layer further.
- Nice-to-have embellishments:
  - tags include portfolio
- Mobile fallback: Keep the asymmetry in rhythm and type, but simplify the layout into a single authored column with strong anchors.
- Fallback path: single-column, reduced-motion
- Manual validation:
  - The author voice is visible within three seconds.
  - Projects or writing feel sequenced, not dumped into a grid.
  - Mobile preserves the same voice without literal layout copying.

## 12. Do's and Don'ts

### Do
- Use jbmono consistently for headlines and interface labels.
- Keep the palette anchored to #fdfdfd, #aaa9ad, and #646069.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio.
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
- Implement mobile as: Keep the asymmetry in rhythm and type, but simplify the layout into a single authored column with strong anchors..
- If the live site failed to capture, fall back to the archival poster on the loadmo.re post page before inventing missing behavior.

## 14. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build this as a Fan Shrine page with a secondary cue from Luxury Archive using the Portfolio Artifact interaction model. Keep jbmono as the voice anchor, preserve the palette around #fdfdfd, #aaa9ad, #646069, drive the page through scroll, tap, and implement the mobile fallback as: Keep the asymmetry in rhythm and type, but simplify the layout into a single authored column with strong anchors.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/elle-s-homepage)
- Live site: https://ellesho.me/page
- Credits: not listed
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
