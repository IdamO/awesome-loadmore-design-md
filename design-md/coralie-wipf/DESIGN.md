# Design System Inspiration of Coralie Wipf

## 1. Visual Theme & Atmosphere

Coralie Wipf reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #f4e7a7, #f0e7ed, and accent notes from #1501ec. Colour swatches as a clever navigation system.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Monument, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f4e7a7, #f0e7ed, #1501ec, #eaa3d7
- Typography stack: Monument, Monument_semi-mono
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #f4e7a7 - canvas / dominant background
- Color 2: #f0e7ed - primary text or opposing surface
- Color 3: #1501ec - accent / interactive signal
- Color 4: #eaa3d7 - supporting surface or hover state
- Color 5: #dcb4a1 - supporting surface or hover state
- Color 6: #f5128d - supporting surface or hover state
- Color 7: #e0e719 - supporting surface or hover state
- Color 8: #fc0101 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Monument
- Secondary: Monument_semi-mono

### Hierarchy Snapshot
- Heading sample: 16px / weight 400 / letter-spacing 0.48px
- Body sample: 16px / weight 400 / line-height 16px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Monument in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f4e7a7) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (participative, colorful, portfolio) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgba(0, 0, 0, 0.2) 0px 0px 10px 0px.
- Radius cue: 4px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Monument consistently for headlines and interface labels.
- Keep the palette anchored to #f4e7a7, #f0e7ed, and #1501ec.
- Preserve the experimental posture signaled by the loadmo.re tags: participative, colorful, portfolio.
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

> Build a responsive landing page inspired by Coralie Wipf. Keep the palette centered on #f4e7a7, #f0e7ed, and #1501ec. Use Monument for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/coralie-wipf)
- Live site: http://coraliewipf.ch/
- Credits: Samuel Weidmann
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
