# Design System Inspiration of New Dawn

## 1. Visual Theme & Atmosphere

New Dawn reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #dddbdc, #a9aaab, and accent notes from #846dee. Virtual exhibition with a cool digital identity.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Monument Grotesk, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #dddbdc, #a9aaab, #846dee, #aea8da
- Typography stack: Monument Grotesk, swiper-icons
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #dddbdc - canvas / dominant background
- Color 2: #a9aaab - primary text or opposing surface
- Color 3: #846dee - accent / interactive signal
- Color 4: #aea8da - supporting surface or hover state
- Color 5: #cbc4bb - supporting surface or hover state
- Color 6: #bac3c9 - supporting surface or hover state
- Color 7: #c5b9b4 - supporting surface or hover state
- Color 8: #686261 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Monument Grotesk
- Secondary: swiper-icons

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 24px
- Button sample: 16px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(254, 254, 254) text.
- Links inherit rgb(254, 254, 254) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Monument Grotesk in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#dddbdc) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (event) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 20.8px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Monument Grotesk consistently for headlines and interface labels.
- Keep the palette anchored to #dddbdc, #a9aaab, and #846dee.
- Preserve the experimental posture signaled by the loadmo.re tags: event.
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

> Build a responsive landing page inspired by New Dawn. Keep the palette centered on #dddbdc, #a9aaab, and #846dee. Use Monument Grotesk for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/new-dawn)
- Live site: https://newdawn.digital/
- Credits: Hongwei Tang Steffen Hotel
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
