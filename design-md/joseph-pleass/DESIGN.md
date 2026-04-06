# Design System Inspiration of Joseph Pleass

## 1. Visual Theme & Atmosphere

Joseph Pleass reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #dcdcdc, #000000, and accent notes from #dbdbdb. Let yourself be guided through this fun portfolio thanks to cinematic subtitles.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #dcdcdc, #000000, #dbdbdb, #a1a1a1
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #dcdcdc - canvas / dominant background
- Color 2: #000000 - primary text or opposing surface
- Color 3: #dbdbdb - accent / interactive signal
- Color 4: #a1a1a1 - supporting surface or hover state
- Color 5: #646464 - supporting surface or hover state
- Color 6: #e4e366 - supporting surface or hover state
- Color 7: #d7d7a0 - supporting surface or hover state
- Color 8: #343434 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: 16px / weight 600 / letter-spacing 0.16px
- Body sample: 24px / weight 700 / line-height 32.4px
- Button sample: 16px / weight 300

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(51, 51, 51) text.
- Links inherit rgb(51, 51, 51) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#dcdcdc) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #dcdcdc, #000000, and #dbdbdb.
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

> Build a responsive landing page inspired by Joseph Pleass. Keep the palette centered on #dcdcdc, #000000, and #dbdbdb. Use the extracted primary font for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/joseph-pleass)
- Live site: https://josephpleass.com
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
