# Design System Inspiration of Pola - Mother's Day

## 1. Visual Theme & Atmosphere

Pola - Mother's Day reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #ececec, #e65232, and accent notes from #da301c. Cute animation triggered while scrolling down the page.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #ececec, #e65232, #da301c, #f1a621
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #ececec - canvas / dominant background
- Color 2: #e65232 - primary text or opposing surface
- Color 3: #da301c - accent / interactive signal
- Color 4: #f1a621 - supporting surface or hover state
- Color 5: #2258a5 - supporting surface or hover state
- Color 6: #ef6f58 - supporting surface or hover state
- Color 7: #1da1ab - supporting surface or hover state
- Color 8: #0e3c8b - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: 14px / weight 400 / letter-spacing normal
- Body sample: 13.008px / weight 400 / line-height 19.512px
- Button sample: 13.008px / weight 600

## 4. Component Stylings

### Web
- Buttons tend toward rgb(255, 255, 255) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 2px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#ececec) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (tactile, animation) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 2px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #ececec, #e65232, and #da301c.
- Preserve the experimental posture signaled by the loadmo.re tags: tactile, animation.
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

> Build a responsive landing page inspired by Pola - Mother's Day. Keep the palette centered on #ececec, #e65232, and #da301c. Use the extracted primary font for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/pola-mother-s-day)
- Live site: https://www.pola.co.jp/wecaremore/mothersday/
- Credits: mount inc.
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
