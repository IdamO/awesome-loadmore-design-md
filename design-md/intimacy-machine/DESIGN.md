# Design System Inspiration of Intimacy Machine

## 1. Visual Theme & Atmosphere

Intimacy Machine reads as sonic pacing. The live capture resolves to a light-leaning system built around #00fe01, #fcfdfc, and accent notes from #d366a3. A creative way to explore a layout; by sliding a magnetic grid, you get access to a highly specific research data.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Hepta Variable, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #00fe01, #fcfdfc, #d366a3, #a5f4a5
- Typography stack: Hepta Variable, Hepta Static
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #00fe01 - canvas / dominant background
- Color 2: #fcfdfc - primary text or opposing surface
- Color 3: #d366a3 - accent / interactive signal
- Color 4: #a5f4a5 - supporting surface or hover state
- Color 5: #77f978 - supporting surface or hover state
- Color 6: #a09ba0 - supporting surface or hover state
- Color 7: #ce6771 - supporting surface or hover state
- Color 8: #ac9859 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Hepta Variable
- Secondary: Hepta Static

### Hierarchy Snapshot
- Heading sample: 31.68px / weight 400 / letter-spacing normal
- Body sample: 15.84px / weight 400 / line-height 19.008px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Hepta Variable in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#00fe01) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (music, animation) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Hepta Variable consistently for headlines and interface labels.
- Keep the palette anchored to #00fe01, #fcfdfc, and #d366a3.
- Preserve the experimental posture signaled by the loadmo.re tags: music, animation.
- Build separate desktop and mobile compositions instead of pretending one layout can fake both.

### Don't
- Don't genericize the interface into a default SaaS landing page.
- Don't introduce rounded, pastel, or glassmorphism defaults unless the captured site already does.
- Don't replace the extracted font stack with Inter/Roboto/system as the main voice unless no custom stack loaded.

## 8. Responsive Behavior

- Desktop capture uses screenshots/desktop.jpg as the visual baseline.
- Mobile capture uses screenshots/mobile.jpg as the mobile baseline.
- Keep touch targets oversized on mobile and allow the background system to dominate the viewport.
- If the live site failed to capture, fall back to the archival poster on the loadmo.re post page before inventing missing behavior.

## 9. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build a responsive landing page inspired by Intimacy Machine. Keep the palette centered on #00fe01, #fcfdfc, and #d366a3. Use Hepta Variable for headlines, preserve the sonic pacing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/intimacy-machine)
- Live site: http://www.intimacy-machine.net/
- Credits: Studio Harris Blondman
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
