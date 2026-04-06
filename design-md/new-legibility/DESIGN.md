# Design System Inspiration of New Legibility

## 1. Visual Theme & Atmosphere

New Legibility reads as playful interaction. The live capture resolves to a dark-leaning system built around #fe6c16, #fe731b, and accent notes from #e55e1e. Click through this interactive essay to uncover the full narrative.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Cormorant Garamond, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #fe6c16, #fe731b, #e55e1e, #fd862a
- Typography stack: Cormorant Garamond
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #fe6c16 - canvas / dominant background
- Color 2: #fe731b - primary text or opposing surface
- Color 3: #e55e1e - accent / interactive signal
- Color 4: #fd862a - supporting surface or hover state
- Color 5: #fe7b22 - supporting surface or hover state
- Color 6: #fc9235 - supporting surface or hover state
- Color 7: #b04c1d - supporting surface or hover state
- Color 8: #f99541 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Cormorant Garamond

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 18px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(101, 1, 43) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Cormorant Garamond in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fe6c16) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (playful, educational, game) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgb(248, 214, 105) 6px 6px 120px 0px.
- Radius cue: 30%.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Cormorant Garamond consistently for headlines and interface labels.
- Keep the palette anchored to #fe6c16, #fe731b, and #e55e1e.
- Preserve the experimental posture signaled by the loadmo.re tags: playful, educational, game.
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

> Build a responsive landing page inspired by New Legibility. Keep the palette centered on #fe6c16, #fe731b, and #e55e1e. Use Cormorant Garamond for headlines, preserve the playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/new-legibility)
- Live site: https://thehtml.review/04/new-legibility/
- Credits: Theo Ellin Ballew
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
