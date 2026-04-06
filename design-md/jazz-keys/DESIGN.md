# Design System Inspiration of Jazz Keys

## 1. Visual Theme & Atmosphere

Jazz Keys reads as playful interaction, sonic pacing. The live capture resolves to a dark-leaning system built around #121212, #272727, and accent notes from #363636. Send a message in Jazz!

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Canela, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #121212, #272727, #363636, #0e0e0e
- Typography stack: Canela
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #121212 - canvas / dominant background
- Color 2: #272727 - primary text or opposing surface
- Color 3: #363636 - accent / interactive signal
- Color 4: #0e0e0e - supporting surface or hover state
- Color 5: #434343 - supporting surface or hover state
- Color 6: #ffffff - supporting surface or hover state
- Color 7: #0c0c0c - supporting surface or hover state
- Color 8: #9f9f9f - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Canela

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit #363636 as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Canela in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#121212) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (sound-design, music, playful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Canela consistently for headlines and interface labels.
- Keep the palette anchored to #121212, #272727, and #363636.
- Preserve the experimental posture signaled by the loadmo.re tags: sound-design, music, playful.
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

> Build a responsive landing page inspired by Jazz Keys. Keep the palette centered on #121212, #272727, and #363636. Use Canela for headlines, preserve the playful interaction, sonic pacing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/jazz-keys)
- Live site: https://jazzkeys.plan8.co/
- Credits: Plan8
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
