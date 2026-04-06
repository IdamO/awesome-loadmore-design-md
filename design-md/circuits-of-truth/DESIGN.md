# Design System Inspiration of Circuits of Truth

## 1. Visual Theme & Atmosphere

Circuits of Truth reads as sonic pacing. The live capture resolves to a light-leaning system built around #f9f3fc, #f0b5fe, and accent notes from #a6b2d7. Beautifully designed research project website about

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Base-Bloom, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f9f3fc, #f0b5fe, #a6b2d7, #7090cd
- Typography stack: Base-Bloom, Didact, Space-Grotesk
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f9f3fc - canvas / dominant background
- Color 2: #f0b5fe - primary text or opposing surface
- Color 3: #a6b2d7 - accent / interactive signal
- Color 4: #7090cd - supporting surface or hover state
- Color 5: #536cae - supporting surface or hover state
- Color 6: #bac3df - supporting surface or hover state
- Color 7: #374b8f - supporting surface or hover state
- Color 8: #7183b9 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Base-Bloom
- Secondary: Didact
- Support: Space-Grotesk
- Support: a3201
- Support: Dyade
- Support: Cormorant

### Hierarchy Snapshot
- Heading sample: 50.8032px / weight 400 / letter-spacing normal
- Body sample: 14.112px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(16, 36, 164) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Base-Bloom in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f9f3fc) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (graphic-design, music, educational) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgb(16, 36, 164) 5px 0px 0px 0px inset.
- Radius cue: 10%.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Base-Bloom consistently for headlines and interface labels.
- Keep the palette anchored to #f9f3fc, #f0b5fe, and #a6b2d7.
- Preserve the experimental posture signaled by the loadmo.re tags: graphic-design, music, educational.
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

> Build a responsive landing page inspired by Circuits of Truth. Keep the palette centered on #f9f3fc, #f0b5fe, and #a6b2d7. Use Base-Bloom for headlines, preserve the sonic pacing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/circuits-of-truth)
- Live site: https://machinic.info/
- Credits: Anna Engelhardt
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
