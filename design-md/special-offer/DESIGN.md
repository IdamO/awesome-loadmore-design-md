# Design System Inspiration of Special Offer

## 1. Visual Theme & Atmosphere

Special Offer reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #de0001, #261e19, and accent notes from #51302b. That's a bold statement: an image-less landing page for a portfolio. Yes, because the page's design says it all. Sharp.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Helvetica Neue LT Std, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #de0001, #261e19, #51302b, #fb01ee
- Typography stack: Helvetica Neue LT Std, TeX Gyre Heros Cn, Helvetica Neue LT Hv
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Collage Core - tags include colorful; tags include graphic-design
- Secondary: Playable Poster - tags include colorful; tags include graphic-design

### Interaction Archetype
- Archetype: Portfolio Artifact (96% confidence)
- Why: tags include portfolio; description mentions portfolio
- Core verbs: read, browse, contact
- Inputs: scroll, tap



## 3. Color Palette & Roles

- Color 1: #de0001 - canvas / dominant background
- Color 2: #261e19 - primary text or opposing surface
- Color 3: #51302b - accent / interactive signal
- Color 4: #fb01ee - supporting surface or hover state
- Color 5: #60524f - supporting surface or hover state
- Color 6: #ac9e90 - supporting surface or hover state
- Color 7: #f1019f - supporting surface or hover state
- Color 8: #e8015b - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: Helvetica Neue LT Std
- Secondary: TeX Gyre Heros Cn
- Support: Helvetica Neue LT Hv
- Support: Helvetica Neue LT Md
- Support: ITC Franklin Gothic Std
- Support: Poppins
- Support: franklin-gothic-condensed

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 24px
- Button sample: n/a / weight n/a

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#de0001) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, colorful, graphic-design) imply the system is intentionally non-generic.
- Buttons tend toward transparent backgrounds with inherit text, and links inherit rgb(255, 0, 255) as the interaction signal.

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
- Primary depth cue in capture: flat surfaces / contrast-only separation

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
  - description mentions portfolio
- Mobile fallback: Keep the asymmetry in rhythm and type, but simplify the layout into a single authored column with strong anchors.
- Fallback path: single-column, reduced-motion
- Manual validation:
  - The author voice is visible within three seconds.
  - Projects or writing feel sequenced, not dumped into a grid.
  - Mobile preserves the same voice without literal layout copying.

## 12. Do's and Don'ts

### Do
- Use Helvetica Neue LT Std consistently for headlines and interface labels.
- Keep the palette anchored to #de0001, #261e19, and #51302b.
- Preserve the experimental posture signaled by the archive tags: portfolio, colorful, graphic-design.
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

> Build this as a Collage Core page with a secondary cue from Playable Poster using the Portfolio Artifact interaction model. Keep Helvetica Neue LT Std as the voice anchor, preserve the palette around #de0001, #261e19, #51302b, drive the page through scroll, tap, and implement the mobile fallback as: Keep the asymmetry in rhythm and type, but simplify the layout into a single authored column with strong anchors.



## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/special-offer)
- Live site: https://www.special-offer.studio/
- Credits: not listed
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
