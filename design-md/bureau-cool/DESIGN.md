# Design System Inspiration of Bureau Cool

## 1. Visual Theme & Atmosphere

Bureau Cool reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #dddddd, #e3e3e3, and accent notes from #999999. Single-page yet rich portfolio for digital works. Starts with a 3D floating circle that displays recent visitors' location.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers ArialMonospaced-Bold, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #dddddd, #e3e3e3, #999999, #c7c7c7
- Typography stack: ArialMonospaced-Bold, CentSchbookMonoBTWXX-Rg
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #dddddd - canvas / dominant background
- Color 2: #e3e3e3 - primary text or opposing surface
- Color 3: #999999 - accent / interactive signal
- Color 4: #c7c7c7 - supporting surface or hover state
- Color 5: #202020 - supporting surface or hover state
- Color 6: #606060 - supporting surface or hover state
- Color 7: #b8b8b8 - supporting surface or hover state
- Color 8: #f2f2f2 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: ArialMonospaced-Bold
- Secondary: CentSchbookMonoBTWXX-Rg

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 69.12px / weight 400 / line-height 69.12px
- Button sample: 16px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps ArialMonospaced-Bold in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#dddddd) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use ArialMonospaced-Bold consistently for headlines and interface labels.
- Keep the palette anchored to #dddddd, #e3e3e3, and #999999.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio.
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

> Build a responsive landing page inspired by Bureau Cool. Keep the palette centered on #dddddd, #e3e3e3, and #999999. Use ArialMonospaced-Bold for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/bureau-cool)
- Live site: https://bureau.cool
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
