# Design System Inspiration of Daisy Chain Studio

## 1. Visual Theme & Atmosphere

Daisy Chain Studio reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #d9dee1, #b7c7d9, and accent notes from #ac9ce6. Portfolio for Daisy Chain Studio with a cute stretchy flowers scrollbar

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Unica77LLWeb-Regular, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #d9dee1, #b7c7d9, #ac9ce6, #5c5c5e
- Typography stack: Unica77LLWeb-Regular
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #d9dee1 - canvas / dominant background
- Color 2: #b7c7d9 - primary text or opposing surface
- Color 3: #ac9ce6 - accent / interactive signal
- Color 4: #5c5c5e - supporting surface or hover state
- Color 5: #9fa4a3 - supporting surface or hover state
- Color 6: #151515 - supporting surface or hover state
- Color 7: #dfd6a3 - supporting surface or hover state
- Color 8: #a4a358 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Unica77LLWeb-Regular

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 16px
- Button sample: 27.2px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgb(0, 0, 0) backgrounds with rgb(255, 255, 255) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 24px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Unica77LLWeb-Regular in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#d9dee1) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 24px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Unica77LLWeb-Regular consistently for headlines and interface labels.
- Keep the palette anchored to #d9dee1, #b7c7d9, and #ac9ce6.
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

> Build a responsive landing page inspired by Daisy Chain Studio. Keep the palette centered on #d9dee1, #b7c7d9, and #ac9ce6. Use Unica77LLWeb-Regular for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/daisy-chain-studio)
- Live site: https://www.daisychainstudio.net/
- Credits: Harry Butt Connor Campbell
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
