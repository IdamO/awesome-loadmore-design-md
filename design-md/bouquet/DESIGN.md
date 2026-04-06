# Design System Inspiration of Bouquet

## 1. Visual Theme & Atmosphere

Bouquet reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #e6e6e7, #a2a2a5, and accent notes from #6b696e. Bouquet delves into the nature of a digital entity by exposing its data infrastructure.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers B612Mono, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #e6e6e7, #a2a2a5, #6b696e, #b5b6c5
- Typography stack: B612Mono
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #e6e6e7 - canvas / dominant background
- Color 2: #a2a2a5 - primary text or opposing surface
- Color 3: #6b696e - accent / interactive signal
- Color 4: #b5b6c5 - supporting surface or hover state
- Color 5: #71728e - supporting surface or hover state
- Color 6: #c0bec4 - supporting surface or hover state
- Color 7: #bdc0cd - supporting surface or hover state
- Color 8: #7d819a - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: B612Mono

### Hierarchy Snapshot
- Heading sample: 11px / weight 700 / letter-spacing normal
- Body sample: 10px / weight 400 / line-height 13px
- Button sample: 11px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(63, 63, 65, 0.655) backgrounds with rgb(237, 237, 237) text.
- Links inherit #6b696e as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps B612Mono in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#e6e6e7) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (educational, glitches) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use B612Mono consistently for headlines and interface labels.
- Keep the palette anchored to #e6e6e7, #a2a2a5, and #6b696e.
- Preserve the experimental posture signaled by the loadmo.re tags: educational, glitches.
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

> Build a responsive landing page inspired by Bouquet. Keep the palette centered on #e6e6e7, #a2a2a5, and #6b696e. Use B612Mono for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/bouquet)
- Live site: http://www.bouquet.hhvv.org/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
