# Design System Inspiration of Add seoul

## 1. Visual Theme & Atmosphere

Add seoul reads as editorial fashion energy. The live capture resolves to a dark-leaning system built around #1c1e17, #ffffff, and accent notes from #8c8b87. Have you ever petted a website? The interaction when touching the homepage's image is so satisfying that it's actually quite difficult to enter in the website.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers themify, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #1c1e17, #ffffff, #8c8b87, #916c52
- Typography stack: themify, Linearicons-Free, Spoqa Han Sans
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #1c1e17 - canvas / dominant background
- Color 2: #ffffff - primary text or opposing surface
- Color 3: #8c8b87 - accent / interactive signal
- Color 4: #916c52 - supporting surface or hover state
- Color 5: #654a35 - supporting surface or hover state
- Color 6: #aa8a73 - supporting surface or hover state
- Color 7: #c9a690 - supporting surface or hover state
- Color 8: #4d3726 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: themify
- Secondary: Linearicons-Free
- Support: Spoqa Han Sans
- Support: Helvetica Neue LT Std

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 12px / weight 400 / line-height 12px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit #8c8b87 as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps themify in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#1c1e17) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (e-commerce, fashion, tactile) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use themify consistently for headlines and interface labels.
- Keep the palette anchored to #1c1e17, #ffffff, and #8c8b87.
- Preserve the experimental posture signaled by the loadmo.re tags: e-commerce, fashion, tactile.
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

> Build a responsive landing page inspired by Add seoul. Keep the palette centered on #1c1e17, #ffffff, and #8c8b87. Use themify for headlines, preserve the editorial fashion energy mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/add-seoul)
- Live site: http://add-seoul.com
- Credits: 131design
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
