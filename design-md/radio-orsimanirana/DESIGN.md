# Design System Inspiration of Radio Orsimanirana

## 1. Visual Theme & Atmosphere

Radio Orsimanirana reads as sonic pacing, exhibition-like framing. The live capture resolves to a dark-leaning system built around #111210, #645d5c, and accent notes from #a49f9d. Online radio that acts as the digital platform linked to an exhibition. Pick a floating shape to select a program.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #111210, #645d5c, #a49f9d, #e7e7e8
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #111210 - canvas / dominant background
- Color 2: #645d5c - primary text or opposing surface
- Color 3: #a49f9d - accent / interactive signal
- Color 4: #e7e7e8 - supporting surface or hover state
- Color 5: #935e63 - supporting surface or hover state
- Color 6: #535c2e - supporting surface or hover state
- Color 7: #562528 - supporting surface or hover state
- Color 8: #eff70a - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 14px / weight 400 / line-height 20px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit #a49f9d as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#111210) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (music, arts&culture, glitches) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #111210, #645d5c, and #a49f9d.
- Preserve the experimental posture signaled by the loadmo.re tags: music, arts&culture, glitches.
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

> Build a responsive landing page inspired by Radio Orsimanirana. Keep the palette centered on #111210, #645d5c, and #a49f9d. Use the extracted primary font for headlines, preserve the sonic pacing, exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/radio-orsimanirana)
- Live site: https://www.radio-orsimanirana.com/
- Credits: Jerszy Seymour, Eurico Sá Fernandes
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
