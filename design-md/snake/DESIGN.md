# Design System Inspiration of Snake

## 1. Visual Theme & Atmosphere

Snake reads as playful interaction. The live capture resolves to a light-leaning system built around #fefef2, #a5a59e, and accent notes from #656461. Draw ur wish in the year of the snake for someone!

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Geist, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fefef2, #a5a59e, #656461, #82827d
- Typography stack: Geist, Geist Fallback, Geist Mono
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fefef2 - canvas / dominant background
- Color 2: #a5a59e - primary text or opposing surface
- Color 3: #656461 - accent / interactive signal
- Color 4: #82827d - supporting surface or hover state
- Color 5: #c3c3bb - supporting surface or hover state
- Color 6: #3a3937 - supporting surface or hover state
- Color 7: #41403e - supporting surface or hover state
- Color 8: #c0bfb6 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Geist
- Secondary: Geist Fallback
- Support: Geist Mono
- Support: Geist Mono Fallback

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height normal
- Button sample: 0px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(255, 255, 255) text.
- Links inherit #656461 as the interaction signal.
- Border radius trends: 5px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Geist in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fefef2) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (participative, playful, illustration) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 5px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Geist consistently for headlines and interface labels.
- Keep the palette anchored to #fefef2, #a5a59e, and #656461.
- Preserve the experimental posture signaled by the loadmo.re tags: participative, playful, illustration.
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

> Build a responsive landing page inspired by Snake. Keep the palette centered on #fefef2, #a5a59e, and #656461. Use Geist for headlines, preserve the playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/snake)
- Live site: https://snake.messyplayground.com/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
