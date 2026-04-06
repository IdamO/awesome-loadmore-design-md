# Design System Inspiration of Lucy Hard Castle

## 1. Visual Theme & Atmosphere

Lucy Hard Castle reads as spatial depth. The live capture resolves to a light-leaning system built around #fefefe, #e7e7e7, and accent notes from #a8a8a8. A poetic portfolio that welcomes you with a virtual/abstract 3D landscape.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers kormelink, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fefefe, #e7e7e7, #a8a8a8, #c7c7c7
- Typography stack: kormelink, gt-america, lhs-headline-extended
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #fefefe - canvas / dominant background
- Color 2: #e7e7e7 - primary text or opposing surface
- Color 3: #a8a8a8 - accent / interactive signal
- Color 4: #c7c7c7 - supporting surface or hover state
- Color 5: #d6d6d6 - supporting surface or hover state
- Color 6: #b4b4b4 - supporting surface or hover state
- Color 7: #9a9a9a - supporting surface or hover state
- Color 8: #8f8f8f - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: kormelink
- Secondary: gt-america
- Support: lhs-headline-extended
- Support: LHSHeadlineExtended
- Support: WT_Kormelink_Roman
- Support: WT_Kormelink_Italic

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 18.6667px / weight 400 / line-height 29.8667px
- Button sample: 18.6667px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps kormelink in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fefefe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, 3d-space) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use kormelink consistently for headlines and interface labels.
- Keep the palette anchored to #fefefe, #e7e7e7, and #a8a8a8.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, 3d-space.
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

> Build a responsive landing page inspired by Lucy Hard Castle. Keep the palette centered on #fefefe, #e7e7e7, and #a8a8a8. Use kormelink for headlines, preserve the spatial depth mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/lucy-hard-castle)
- Live site: https://lucyhardcastle.com/
- Credits: Lucy Hardcastle Studio, DxR Zone, Haxiomic / George Corney, Jess Mae, Oli Easte
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
