# Design System Inspiration of thisisneverthat FA22

## 1. Visual Theme & Atmosphere

thisisneverthat FA22 reads as editorial fashion energy, type-led composition. The live capture resolves to a light-leaning system built around #fdfdfd, #a0a0a0, and accent notes from #000000. Thisisneverthat teaser site where your ASCII reflection is generated from brand typography.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fdfdfd, #a0a0a0, #000000, #5e5e5e
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fdfdfd - canvas / dominant background
- Color 2: #a0a0a0 - primary text or opposing surface
- Color 3: #000000 - accent / interactive signal
- Color 4: #5e5e5e - supporting surface or hover state
- Color 5: #c4c4c4 - supporting surface or hover state
- Color 6: #282828 - supporting surface or hover state
- Color 7: #d8d8d8 - supporting surface or hover state
- Color 8: #e8e8e8 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: n/a / weight n/a / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit #000000 as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fdfdfd) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (fashion, video, typography) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #fdfdfd, #a0a0a0, and #000000.
- Preserve the experimental posture signaled by the loadmo.re tags: fashion, video, typography.
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

> Build a responsive landing page inspired by thisisneverthat FA22. Keep the palette centered on #fdfdfd, #a0a0a0, and #000000. Use the extracted primary font for headlines, preserve the editorial fashion energy, type-led composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/thisisneverthat-teaser)
- Live site: https://fa22.thisisneverthat.com/
- Credits: Minhyung Lee, Jinkyu Song, Yeojin Jung, Hye Seob Shim
- Desktop capture: failed
- Mobile capture: failed
- Archival fallback: poster image used for missing screenshots
