# Design System Inspiration of Loverboy

## 1. Visual Theme & Atmosphere

Loverboy reads as editorial fashion energy. The live capture resolves to a light-leaning system built around #fefefe, #d1d7da, and accent notes from #e7e8e8. 360 lookbook giving access to LOVERBOY's products.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fefefe, #d1d7da, #e7e8e8, #b1b1b1
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fefefe - canvas / dominant background
- Color 2: #d1d7da - primary text or opposing surface
- Color 3: #e7e8e8 - accent / interactive signal
- Color 4: #b1b1b1 - supporting surface or hover state
- Color 5: #d7d7d7 - supporting surface or hover state
- Color 6: #b6cedd - supporting surface or hover state
- Color 7: #9ab8d5 - supporting surface or hover state
- Color 8: #7e7e7e - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: 60px / weight 300 / letter-spacing normal
- Body sample: 15px / weight 400 / line-height 22.5px
- Button sample: 13px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgb(255, 255, 255) backgrounds with rgb(0, 81, 195) text.
- Links inherit rgb(47, 123, 191) as the interaction signal.
- Border radius trends: 4px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fefefe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (fashion, e-commerce, illustration) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 4px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #fefefe, #d1d7da, and #e7e8e8.
- Preserve the experimental posture signaled by the loadmo.re tags: fashion, e-commerce, illustration.
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

> Build a responsive landing page inspired by Loverboy. Keep the palette centered on #fefefe, #d1d7da, and #e7e8e8. Use the extracted primary font for headlines, preserve the editorial fashion energy mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/loverboy)
- Live site: https://loverboy.net/reality
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
