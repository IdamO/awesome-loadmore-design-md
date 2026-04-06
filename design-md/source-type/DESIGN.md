# Design System Inspiration of Source Type

## 1. Visual Theme & Atmosphere

Source Type reads as type-led composition. The live capture resolves to a light-leaning system built around #f8f8f8, #636162, and accent notes from #9c9b9b. A platform for typographic research and visual literacy. Super-smooth perspective scroll through their website content.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers CookieRound, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f8f8f8, #636162, #9c9b9b, #1f1c1b
- Typography stack: CookieRound, Source X, Times NR
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #f8f8f8 - canvas / dominant background
- Color 2: #636162 - primary text or opposing surface
- Color 3: #9c9b9b - accent / interactive signal
- Color 4: #1f1c1b - supporting surface or hover state
- Color 5: #9b4a27 - supporting surface or hover state
- Color 6: #5e2d23 - supporting surface or hover state
- Color 7: #883a22 - supporting surface or hover state
- Color 8: #5e4723 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: CookieRound
- Secondary: Source X
- Support: Times NR
- Support: Rekord
- Support: Rekord Symbols
- Support: Karl Condensed

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 38px / weight 400 / line-height 40px
- Button sample: 10px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 5px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps CookieRound in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f8f8f8) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (typography) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 21px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use CookieRound consistently for headlines and interface labels.
- Keep the palette anchored to #f8f8f8, #636162, and #9c9b9b.
- Preserve the experimental posture signaled by the loadmo.re tags: typography.
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

> Build a responsive landing page inspired by Source Type. Keep the palette centered on #f8f8f8, #636162, and #9c9b9b. Use CookieRound for headlines, preserve the type-led composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/source-type)
- Live site: https://www.sourcetype.com/
- Credits: Laurenz Brunner Ben Schwartz
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
