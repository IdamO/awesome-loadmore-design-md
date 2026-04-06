# Design System Inspiration of Haegeman Temmerman

## 1. Visual Theme & Atmosphere

Haegeman Temmerman reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #f4f5f6, #ab9f8f, and accent notes from #a18d76. Exhaustive portfolio with tidy navigation through native dropdown menus.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f4f5f6, #ab9f8f, #a18d76, #6e6459
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f4f5f6 - canvas / dominant background
- Color 2: #ab9f8f - primary text or opposing surface
- Color 3: #a18d76 - accent / interactive signal
- Color 4: #6e6459 - supporting surface or hover state
- Color 5: #8a745f - supporting surface or hover state
- Color 6: #cfb69e - supporting surface or hover state
- Color 7: #654b31 - supporting surface or hover state
- Color 8: #d6cab5 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 14px / weight 400 / line-height 16.1px
- Button sample: 0px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit #a18d76 as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f4f5f6) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, default-aesthetics, graphic-design) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #f4f5f6, #ab9f8f, and #a18d76.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, default-aesthetics, graphic-design.
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

> Build a responsive landing page inspired by Haegeman Temmerman. Keep the palette centered on #f4f5f6, #ab9f8f, and #a18d76. Use the extracted primary font for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/haegeman-temmerman)
- Live site: http://haegeman-temmerman.be
- Credits: Haegeman Temmerman, Jonas Temmerman
- Desktop capture: completed
- Mobile capture: failed
- Archival fallback: poster image used for missing screenshots
