# Design System Inspiration of Planet Digital

## 1. Visual Theme & Atmosphere

Planet Digital reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #f5f5f5, #2c9ced, and accent notes from #f9a261. An exploration of digitalization by the University of Zurich and Museum für Gestaltung, where a kaleidoscopic entry screen leads to a hyperlinked web of embedded artworks

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers swiper-icons, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f5f5f5, #2c9ced, #f9a261, #a9aaaa
- Typography stack: swiper-icons, JJannon, Peterman
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #f5f5f5 - canvas / dominant background
- Color 2: #2c9ced - primary text or opposing surface
- Color 3: #f9a261 - accent / interactive signal
- Color 4: #a9aaaa - supporting surface or hover state
- Color 5: #d35d0d - supporting surface or hover state
- Color 6: #dd7168 - supporting surface or hover state
- Color 7: #fde076 - supporting surface or hover state
- Color 8: #5c97e0 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: swiper-icons
- Secondary: JJannon
- Support: Peterman

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 32px / weight 400 / line-height 40px
- Button sample: 30px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgb(0, 0, 0) backgrounds with rgb(128, 128, 128) text.
- Links inherit rgb(0, 70, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps swiper-icons in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f5f5f5) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (educational) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use swiper-icons consistently for headlines and interface labels.
- Keep the palette anchored to #f5f5f5, #2c9ced, and #f9a261.
- Preserve the experimental posture signaled by the loadmo.re tags: educational.
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

> Build a responsive landing page inspired by Planet Digital. Keep the palette centered on #f5f5f5, #2c9ced, and #f9a261. Use swiper-icons for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/planet-digital)
- Live site: https://www.planetdigital.ch/de/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
