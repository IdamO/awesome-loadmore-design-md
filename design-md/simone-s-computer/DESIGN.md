# Design System Inspiration of Simone's Computer

## 1. Visual Theme & Atmosphere

Simone's Computer reads as retro-computing cues. The live capture resolves to a dark-leaning system built around #171712, #e9e9ea, and accent notes from #284826. Visiting Simone Mazulli's website from a mobile feels weird: as if Windows 95 was running on a 2020 smartphone. Huh!!

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #171712, #e9e9ea, #284826, #9798b1
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #171712 - canvas / dominant background
- Color 2: #e9e9ea - primary text or opposing surface
- Color 3: #284826 - accent / interactive signal
- Color 4: #9798b1 - supporting surface or hover state
- Color 5: #294b4b - supporting surface or hover state
- Color 6: #525359 - supporting surface or hover state
- Color 7: #717195 - supporting surface or hover state
- Color 8: #4b502c - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height normal
- Button sample: 16px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgb(161, 163, 202) backgrounds with rgb(1, 6, 1) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: rgb(164, 167, 200) 1px 1px 0px 1px inset, rgb(91, 87, 161) -1px -1px 0px 1px inset.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#171712) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (retro, portfolio) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgb(164, 167, 200) 1px 1px 0px 1px inset, rgb(91, 87, 161) -1px -1px 0px 1px inset.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #171712, #e9e9ea, and #284826.
- Preserve the experimental posture signaled by the loadmo.re tags: retro, portfolio.
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

> Build a responsive landing page inspired by Simone's Computer. Keep the palette centered on #171712, #e9e9ea, and #284826. Use the extracted primary font for headlines, preserve the retro-computing cues mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/simone-s-computer)
- Live site: https://simone.computer
- Credits: Simone Marzulli
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
