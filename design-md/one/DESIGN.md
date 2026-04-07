# Design System Inspiration of ONE

## 1. Visual Theme & Atmosphere

ONE reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #9ba2a1, #edeceb, and accent notes from #5a6461. Minimalist yet efficient website showcasing the work from ONE, a collective reuniting outstanding digital designers and 3D artists.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers MagicUiPro, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #9ba2a1, #edeceb, #5a6461, #345122
- Typography stack: MagicUiPro, feather
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Fan Shrine - tags include portfolio; archetype affinity: portfolio artifact
- Secondary: Luxury Archive - archetype affinity: portfolio artifact

### Interaction Archetype
- Archetype: Portfolio Artifact (76% confidence)
- Why: tags include portfolio; description mentions artist
- Core verbs: read, browse, contact
- Inputs: scroll, tap

## 3. Color Palette & Roles

- Color 1: #9ba2a1 - canvas / dominant background
- Color 2: #edeceb - primary text or opposing surface
- Color 3: #5a6461 - accent / interactive signal
- Color 4: #345122 - supporting surface or hover state
- Color 5: #2b3223 - supporting surface or hover state
- Color 6: #788889 - supporting surface or hover state
- Color 7: #669133 - supporting surface or hover state
- Color 8: #4a682d - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: MagicUiPro
- Secondary: feather

### Hierarchy Snapshot
- Heading sample: 24px / weight 600 / letter-spacing -0.24px
- Body sample: 24px / weight 500 / line-height 33.6px
- Button sample: 18px / weight 500

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#9ba2a1) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio) imply the site is intentionally non-generic.
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text, and links inherit #5a6461 as the interaction signal.

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
  - description mentions artist
- Mobile fallback: Keep the asymmetry in rhythm and type, but simplify the layout into a single authored column with strong anchors.
- Fallback path: single-column, reduced-motion
- Manual validation:
  - The author voice is visible within three seconds.
  - Projects or writing feel sequenced, not dumped into a grid.
  - Mobile preserves the same voice without literal layout copying.

## 12. Do's and Don'ts

### Do
- Use MagicUiPro consistently for headlines and interface labels.
- Keep the palette anchored to #9ba2a1, #edeceb, and #5a6461.
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

> Build this as a Fan Shrine page with a secondary cue from Luxury Archive using the Portfolio Artifact interaction model. Keep MagicUiPro as the voice anchor, preserve the palette around #9ba2a1, #edeceb, #5a6461, drive the page through scroll, tap, and implement the mobile fallback as: Keep the asymmetry in rhythm and type, but simplify the layout into a single authored column with strong anchors.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/one)
- Live site: https://one-is.com/
- Credits: not listed
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
