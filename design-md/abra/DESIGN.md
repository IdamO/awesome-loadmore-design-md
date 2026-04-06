# Design System Inspiration of ABRA

## 1. Visual Theme & Atmosphere

ABRA reads as editorial fashion energy. The live capture resolves to a light-leaning system built around #c6c7c2, #a8a9a4, and accent notes from #171717. Retro interface for this footwear brand.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Geist, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #c6c7c2, #a8a9a4, #171717, #555554
- Typography stack: Geist, GTStandard-M
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #c6c7c2 - canvas / dominant background
- Color 2: #a8a9a4 - primary text or opposing surface
- Color 3: #171717 - accent / interactive signal
- Color 4: #555554 - supporting surface or hover state
- Color 5: #c1c2bd - supporting surface or hover state
- Color 6: #bfc0bb - supporting surface or hover state
- Color 7: #d2d3cd - supporting surface or hover state
- Color 8: #81827f - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Geist
- Secondary: GTStandard-M

### Hierarchy Snapshot
- Heading sample: 12px / weight 100 / letter-spacing 0.6px
- Body sample: 12px / weight 100 / line-height 18px
- Button sample: 12px / weight 100

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Geist in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#c6c7c2) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (fashion, e-commerce) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 2px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Geist consistently for headlines and interface labels.
- Keep the palette anchored to #c6c7c2, #a8a9a4, and #171717.
- Preserve the experimental posture signaled by the loadmo.re tags: fashion, e-commerce.
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

> Build a responsive landing page inspired by ABRA. Keep the palette centered on #c6c7c2, #a8a9a4, and #171717. Use Geist for headlines, preserve the editorial fashion energy mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/abra)
- Live site: http://www.abra.paris/x1.0/indexm.php
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
