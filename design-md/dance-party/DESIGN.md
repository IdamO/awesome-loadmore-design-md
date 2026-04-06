# Design System Inspiration of Dance Party

## 1. Visual Theme & Atmosphere

Dance Party reads as playful interaction. The live capture resolves to a dark-leaning system built around #282828, #353535, and accent notes from #1c1c1c. An unlikely cast of characters tearing up the third dimension.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Open Sans, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #282828, #353535, #1c1c1c, #464646
- Typography stack: Open Sans, Roboto Mono
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #282828 - canvas / dominant background
- Color 2: #353535 - primary text or opposing surface
- Color 3: #1c1c1c - accent / interactive signal
- Color 4: #464646 - supporting surface or hover state
- Color 5: #565656 - supporting surface or hover state
- Color 6: #6a6a6a - supporting surface or hover state
- Color 7: #959595 - supporting surface or hover state
- Color 8: #c1c1c1 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Open Sans
- Secondary: Roboto Mono

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit #1c1c1c as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Open Sans in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#282828) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (playful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Open Sans consistently for headlines and interface labels.
- Keep the palette anchored to #282828, #353535, and #1c1c1c.
- Preserve the experimental posture signaled by the loadmo.re tags: playful.
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

> Build a responsive landing page inspired by Dance Party. Keep the palette centered on #282828, #353535, and #1c1c1c. Use Open Sans for headlines, preserve the playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/dance-party)
- Live site: https://dddance.party/
- Credits: FUZZYW
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
