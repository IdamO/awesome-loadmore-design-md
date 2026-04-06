# Design System Inspiration of øøø

## 1. Visual Theme & Atmosphere

øøø reads as playful interaction. The live capture resolves to a light-leaning system built around #fdfdfd, #a2a3a4, and accent notes from #f6d3a5. Draw with multicoloured stamps, or with circles and lines that have a life of their own.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Inter, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fdfdfd, #a2a3a4, #f6d3a5, #f2a69d
- Typography stack: Inter
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #fdfdfd - canvas / dominant background
- Color 2: #a2a3a4 - primary text or opposing surface
- Color 3: #f6d3a5 - accent / interactive signal
- Color 4: #f2a69d - supporting surface or hover state
- Color 5: #97b0e9 - supporting surface or hover state
- Color 6: #b3d0f1 - supporting surface or hover state
- Color 7: #f5a26e - supporting surface or hover state
- Color 8: #717172 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Inter

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 48px / weight 400 / line-height normal
- Button sample: 13.3333px / weight 400

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
- Let the main background color (#fdfdfd) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (playful, colorful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Inter consistently for headlines and interface labels.
- Keep the palette anchored to #fdfdfd, #a2a3a4, and #f6d3a5.
- Preserve the experimental posture signaled by the loadmo.re tags: playful, colorful.
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

> Build a responsive landing page inspired by øøø. Keep the palette centered on #fdfdfd, #a2a3a4, and #f6d3a5. Use Inter for headlines, preserve the playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/ooo)
- Live site: https://xn--pdaaa.com/sketch/stamps
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
