# Design System Inspiration of Only Bags

## 1. Visual Theme & Atmosphere

Only Bags reads as restrained minimalism, editorial fashion energy. The live capture resolves to a light-leaning system built around #fbfbfb, #a2a2a0, and accent notes from #a65630. Cool minimal e-commerce with 3D spinning bags and a shopping trolley POV

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Open Sauce One, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fbfbfb, #a2a2a0, #a65630, #656261
- Typography stack: Open Sauce One, Space Mono
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #fbfbfb - canvas / dominant background
- Color 2: #a2a2a0 - primary text or opposing surface
- Color 3: #a65630 - accent / interactive signal
- Color 4: #656261 - supporting surface or hover state
- Color 5: #a51605 - supporting surface or hover state
- Color 6: #724622 - supporting surface or hover state
- Color 7: #0f1a0c - supporting surface or hover state
- Color 8: #a76852 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Open Sauce One
- Secondary: Space Mono

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 12px / weight 400 / line-height 15px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Open Sauce One in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fbfbfb) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (minimal, e-commerce, fashion) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Open Sauce One consistently for headlines and interface labels.
- Keep the palette anchored to #fbfbfb, #a2a2a0, and #a65630.
- Preserve the experimental posture signaled by the loadmo.re tags: minimal, e-commerce, fashion.
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

> Build a responsive landing page inspired by Only Bags. Keep the palette centered on #fbfbfb, #a2a2a0, and #a65630. Use Open Sauce One for headlines, preserve the restrained minimalism, editorial fashion energy mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/only-bags)
- Live site: https://onlybags.biz/
- Credits: MSCHF
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
