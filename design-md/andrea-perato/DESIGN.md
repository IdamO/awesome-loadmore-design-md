# Design System Inspiration of Andrea Perato

## 1. Visual Theme & Atmosphere

Andrea Perato reads as restrained minimalism. The live capture resolves to a light-leaning system built around #f7f7f7, #0b0b0b, and accent notes from #a4a4a4. A google sheets iframe portfolio.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f7f7f7, #0b0b0b, #a4a4a4, #5e5e5e
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f7f7f7 - canvas / dominant background
- Color 2: #0b0b0b - primary text or opposing surface
- Color 3: #a4a4a4 - accent / interactive signal
- Color 4: #5e5e5e - supporting surface or hover state
- Color 5: #9cb7d5 - supporting surface or hover state
- Color 6: #0070cd - supporting surface or hover state
- Color 7: #b0c6dd - supporting surface or hover state
- Color 8: #2d89d1 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: 14px / weight 700 / letter-spacing normal
- Body sample: 14px / weight 300 / line-height 19.6px
- Button sample: 14px / weight 300

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f7f7f7) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, minimal) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 64px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #f7f7f7, #0b0b0b, and #a4a4a4.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, minimal.
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

> Build a responsive landing page inspired by Andrea Perato. Keep the palette centered on #f7f7f7, #0b0b0b, and #a4a4a4. Use the extracted primary font for headlines, preserve the restrained minimalism mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/andrea-perato)
- Live site: http://andreaperato.com/
- Credits: Andrea Perato
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
