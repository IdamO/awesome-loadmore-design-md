# Design System Inspiration of Vàng Hoa

## 1. Visual Theme & Atmosphere

Vàng Hoa reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #5b4a34, #342f25, and accent notes from #6b644e. The essence of what we call a 'Tatile Interactive Website'.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Alegreya, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #5b4a34, #342f25, #6b644e, #f5f5f5
- Typography stack: Alegreya, Work Sans
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #5b4a34 - canvas / dominant background
- Color 2: #342f25 - primary text or opposing surface
- Color 3: #6b644e - accent / interactive signal
- Color 4: #f5f5f5 - supporting surface or hover state
- Color 5: #9a8a6d - supporting surface or hover state
- Color 6: #48392a - supporting surface or hover state
- Color 7: #a29b92 - supporting surface or hover state
- Color 8: #887558 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Alegreya
- Secondary: Work Sans

### Hierarchy Snapshot
- Heading sample: 30px / weight 700 / letter-spacing normal
- Body sample: 15px / weight 400 / line-height 19.5px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(34, 139, 131) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Alegreya in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#5b4a34) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (tactile, portfolio) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgb(0, 0, 0) 0px 0px 0px 1px, rgb(255, 255, 255) 0px 0px 0px 3px, rgb(0, 0, 0) 0px 0px 0px 4px.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Alegreya consistently for headlines and interface labels.
- Keep the palette anchored to #5b4a34, #342f25, and #6b644e.
- Preserve the experimental posture signaled by the loadmo.re tags: tactile, portfolio.
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

> Build a responsive landing page inspired by Vàng Hoa. Keep the palette centered on #5b4a34, #342f25, and #6b644e. Use Alegreya for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/vang-hoa)
- Live site: https://vanghoa.github.io/
- Credits: Nguyen Bao Anh
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
