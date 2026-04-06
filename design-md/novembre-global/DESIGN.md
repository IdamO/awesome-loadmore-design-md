# Design System Inspiration of Novembre Global

## 1. Visual Theme & Atmosphere

Novembre Global reads as editorial fashion energy. The live capture resolves to a light-leaning system built around #eaece6, #aaedef, and accent notes from #1b1b19. Beautiful editorial website juggling between big type and big images

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Haas Grot Disp 45, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #eaece6, #aaedef, #1b1b19, #98a6a7
- Typography stack: Haas Grot Disp 45, Adobe Caslon Pro
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #eaece6 - canvas / dominant background
- Color 2: #aaedef - primary text or opposing surface
- Color 3: #1b1b19 - accent / interactive signal
- Color 4: #98a6a7 - supporting surface or hover state
- Color 5: #62625f - supporting surface or hover state
- Color 6: #759d9f - supporting surface or hover state
- Color 7: #c3c2bb - supporting surface or hover state
- Color 8: #956c57 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Haas Grot Disp 45
- Secondary: Adobe Caslon Pro

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 36px / weight 300 / line-height 36px
- Button sample: 13.3333px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(254, 254, 254) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Haas Grot Disp 45 in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#eaece6) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (online-magazine, fashion) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Haas Grot Disp 45 consistently for headlines and interface labels.
- Keep the palette anchored to #eaece6, #aaedef, and #1b1b19.
- Preserve the experimental posture signaled by the loadmo.re tags: online-magazine, fashion.
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

> Build a responsive landing page inspired by Novembre Global. Keep the palette centered on #eaece6, #aaedef, and #1b1b19. Use Haas Grot Disp 45 for headlines, preserve the editorial fashion energy mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/novembre-global)
- Live site: https://novembre.global
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
