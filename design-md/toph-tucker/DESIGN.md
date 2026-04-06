# Design System Inspiration of Toph Tucker

## 1. Visual Theme & Atmosphere

Toph Tucker reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #fefefe, #a1a0e4, and accent notes from #a1a1a5. Press 'shake on' to have fun with the website's content, as if it was an elastic material that reacted to your movement.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fefefe, #a1a0e4, #a1a1a5, #6969df
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fefefe - canvas / dominant background
- Color 2: #a1a0e4 - primary text or opposing surface
- Color 3: #a1a1a5 - accent / interactive signal
- Color 4: #6969df - supporting surface or hover state
- Color 5: #636364 - supporting surface or hover state
- Color 6: #6261a2 - supporting surface or hover state
- Color 7: #2e2ee1 - supporting surface or hover state
- Color 8: #cebce3 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: 44px / weight 400 / letter-spacing normal
- Body sample: 22px / weight 400 / line-height normal
- Button sample: 13.3333px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgb(239, 239, 239) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(0, 0, 238) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fefefe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (tactile, portfolio, default-aesthetics) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #fefefe, #a1a0e4, and #a1a1a5.
- Preserve the experimental posture signaled by the loadmo.re tags: tactile, portfolio, default-aesthetics.
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

> Build a responsive landing page inspired by Toph Tucker. Keep the palette centered on #fefefe, #a1a0e4, and #a1a1a5. Use the extracted primary font for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/toph-tucker)
- Live site: https://www.tophtucker.com/
- Credits: Toph Tucker
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
