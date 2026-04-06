# Design System Inspiration of Real Life

## 1. Visual Theme & Atmosphere

Real Life reads as exhibition-like framing. The live capture resolves to a light-leaning system built around #efefef, #a3a3a2, and accent notes from #f0e765. Online magazine about living with technology. Simple and clean layout with an interactive background: article's imagery is blurred it to create a texture.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Suisse Works, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #efefef, #a3a3a2, #f0e765, #dc6d62
- Typography stack: Suisse Works, PicaSW-Plain Medium
- Desktop posture: fixed/sticky framing
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #efefef - canvas / dominant background
- Color 2: #a3a3a2 - primary text or opposing surface
- Color 3: #f0e765 - accent / interactive signal
- Color 4: #dc6d62 - supporting surface or hover state
- Color 5: #6d97d3 - supporting surface or hover state
- Color 6: #1c1c1b - supporting surface or hover state
- Color 7: #6d6d6c - supporting surface or hover state
- Color 8: #d8d399 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Suisse Works
- Secondary: PicaSW-Plain Medium

### Hierarchy Snapshot
- Heading sample: 18px / weight 400 / letter-spacing 0.54px
- Body sample: 18px / weight 400 / line-height 27.99px
- Button sample: 13.3333px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Suisse Works in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#efefef) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (colorful, arts&culture, online-magazine) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Suisse Works consistently for headlines and interface labels.
- Keep the palette anchored to #efefef, #a3a3a2, and #f0e765.
- Preserve the experimental posture signaled by the loadmo.re tags: colorful, arts&culture, online-magazine.
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

> Build a responsive landing page inspired by Real Life. Keep the palette centered on #efefef, #a3a3a2, and #f0e765. Use Suisse Works for headlines, preserve the exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/real-life)
- Live site: https://reallifemag.com
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
