# Design System Inspiration of White Russian

## 1. Visual Theme & Atmosphere

White Russian reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #1a1b1b, #ebe1e1, and accent notes from #5c5c59. Portfolio interface that feels like an app.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Inter, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #1a1b1b, #ebe1e1, #5c5c59, #a19f9d
- Typography stack: Inter, Inter Fallback, Varela Round
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #1a1b1b - canvas / dominant background
- Color 2: #ebe1e1 - primary text or opposing surface
- Color 3: #5c5c59 - accent / interactive signal
- Color 4: #a19f9d - supporting surface or hover state
- Color 5: #a9cae6 - supporting surface or hover state
- Color 6: #9ab8d8 - supporting surface or hover state
- Color 7: #58532b - supporting surface or hover state
- Color 8: #91725f - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Inter
- Secondary: Inter Fallback
- Support: Varela Round
- Support: Varela Round Fallback

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 14px / weight 400 / line-height 20px
- Button sample: 16px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(255, 255, 255) text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Inter in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#1a1b1b) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 12.8px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Inter consistently for headlines and interface labels.
- Keep the palette anchored to #1a1b1b, #ebe1e1, and #5c5c59.
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

> Build a responsive landing page inspired by White Russian. Keep the palette centered on #1a1b1b, #ebe1e1, and #5c5c59. Use Inter for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/white-russian)
- Live site: https://whiterussian.studio
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
