# Design System Inspiration of Roel Kok

## 1. Visual Theme & Atmosphere

Roel Kok reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #fef0ee, #fefdfd, and accent notes from #e5e0e0. Let typography melt into an iridescent puddle in this beautifully simple interaction by Roel Kok

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fef0ee, #fefdfd, #e5e0e0, #070707
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fef0ee - canvas / dominant background
- Color 2: #fefdfd - primary text or opposing surface
- Color 3: #e5e0e0 - accent / interactive signal
- Color 4: #070707 - supporting surface or hover state
- Color 5: #a5a5a5 - supporting surface or hover state
- Color 6: #5c5c5c - supporting surface or hover state
- Color 7: #e5a3a5 - supporting surface or hover state
- Color 8: #bdc0c0 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: 200px / weight 700 / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 20px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgba(0, 0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fef0ee) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (tactile, portfolio, glitches) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #fef0ee, #fefdfd, and #e5e0e0.
- Preserve the experimental posture signaled by the loadmo.re tags: tactile, portfolio, glitches.
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

> Build a responsive landing page inspired by Roel Kok. Keep the palette centered on #fef0ee, #fefdfd, and #e5e0e0. Use the extracted primary font for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/roel-kok)
- Live site: http://roelkok.net/
- Credits: Baast Studio
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
