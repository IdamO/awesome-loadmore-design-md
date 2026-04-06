# Design System Inspiration of Vivien Hoffmann

## 1. Visual Theme & Atmosphere

Vivien Hoffmann reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #f7f6f4, #a3a09b, and accent notes from #615e5d. Vivien Hoffmann is a graphic designer focusing on progressive typography. Her website has an unusual layout.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers webflow-icons, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f7f6f4, #a3a09b, #615e5d, #1e1f1f
- Typography stack: webflow-icons, Font, Marista
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f7f6f4 - canvas / dominant background
- Color 2: #a3a09b - primary text or opposing surface
- Color 3: #615e5d - accent / interactive signal
- Color 4: #1e1f1f - supporting surface or hover state
- Color 5: #977872 - supporting surface or hover state
- Color 6: #998579 - supporting surface or hover state
- Color 7: #bdc2c5 - supporting surface or hover state
- Color 8: #b6bbc4 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: webflow-icons
- Secondary: Font
- Support: Marista

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 14px / weight 400 / line-height 20px
- Button sample: 14px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(255, 255, 255) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps webflow-icons in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f7f6f4) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use webflow-icons consistently for headlines and interface labels.
- Keep the palette anchored to #f7f6f4, #a3a09b, and #615e5d.
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

> Build a responsive landing page inspired by Vivien Hoffmann. Keep the palette centered on #f7f6f4, #a3a09b, and #615e5d. Use webflow-icons for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/vivien-hoffmann)
- Live site: http://www.vivienhoffmann.com/index.html
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
