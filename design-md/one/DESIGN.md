# Design System Inspiration of ONE

## 1. Visual Theme & Atmosphere

ONE reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #9ba2a1, #edeceb, and accent notes from #5a6461. Minimalist yet efficient website showcasing the work from ONE, a collective reuniting outstanding digital designers and 3D artists.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers MagicUiPro, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #9ba2a1, #edeceb, #5a6461, #345122
- Typography stack: MagicUiPro, feather
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #9ba2a1 - canvas / dominant background
- Color 2: #edeceb - primary text or opposing surface
- Color 3: #5a6461 - accent / interactive signal
- Color 4: #345122 - supporting surface or hover state
- Color 5: #2b3223 - supporting surface or hover state
- Color 6: #788889 - supporting surface or hover state
- Color 7: #669133 - supporting surface or hover state
- Color 8: #4a682d - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: MagicUiPro
- Secondary: feather

### Hierarchy Snapshot
- Heading sample: 24px / weight 600 / letter-spacing -0.24px
- Body sample: 24px / weight 500 / line-height 33.6px
- Button sample: 18px / weight 500

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit #5a6461 as the interaction signal.
- Border radius trends: 999px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps MagicUiPro in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#9ba2a1) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 999px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use MagicUiPro consistently for headlines and interface labels.
- Keep the palette anchored to #9ba2a1, #edeceb, and #5a6461.
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

> Build a responsive landing page inspired by ONE. Keep the palette centered on #9ba2a1, #edeceb, and #5a6461. Use MagicUiPro for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/one)
- Live site: https://one-is.com/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
