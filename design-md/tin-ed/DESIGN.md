# Design System Inspiration of Tin & Ed

## 1. Visual Theme & Atmosphere

Tin & Ed reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #fdfdfc, #93a361, and accent notes from #2b2d24. Vibrant abstract 3D shapes that visitors can drag to 'paint' the screen with their trailing patterns.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Untitled Sans, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fdfdfc, #93a361, #2b2d24, #57672b
- Typography stack: Untitled Sans, IBM Plex Mono, swiper-icons
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fdfdfc - canvas / dominant background
- Color 2: #93a361 - primary text or opposing surface
- Color 3: #2b2d24 - accent / interactive signal
- Color 4: #57672b - supporting surface or hover state
- Color 5: #5e665c - supporting surface or hover state
- Color 6: #9ba697 - supporting surface or hover state
- Color 7: #d6e7a7 - supporting surface or hover state
- Color 8: #6c882d - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Untitled Sans
- Secondary: IBM Plex Mono
- Support: swiper-icons

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 17.6px
- Button sample: 16px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgb(255, 255, 255) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 9999px.
- Shadow language: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 4px 4px 0px.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Untitled Sans in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fdfdfc) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (colorful, tactile, portfolio) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 4px 4px 0px.
- Radius cue: 9999px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Untitled Sans consistently for headlines and interface labels.
- Keep the palette anchored to #fdfdfc, #93a361, and #2b2d24.
- Preserve the experimental posture signaled by the loadmo.re tags: colorful, tactile, portfolio.
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

> Build a responsive landing page inspired by Tin & Ed. Keep the palette centered on #fdfdfc, #93a361, and #2b2d24. Use Untitled Sans for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/tin-ed)
- Live site: https://tinanded.com/
- Credits: Tin & Ed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
