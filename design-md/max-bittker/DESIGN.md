# Design System Inspiration of Max Bittker

## 1. Visual Theme & Atmosphere

Max Bittker reads as retro-computing cues. The live capture resolves to a light-leaning system built around #e1dbdb, #b16c4e, and accent notes from #aba6a5. Max Bittker is an artist, a teacher and a coder. He's the creator of <a href=

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Arvo, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #e1dbdb, #b16c4e, #aba6a5, #c8bab6
- Typography stack: Arvo, Montserrat
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #e1dbdb - canvas / dominant background
- Color 2: #b16c4e - primary text or opposing surface
- Color 3: #aba6a5 - accent / interactive signal
- Color 4: #c8bab6 - supporting surface or hover state
- Color 5: #c87659 - supporting surface or hover state
- Color 6: #57271e - supporting surface or hover state
- Color 7: #e2896a - supporting surface or hover state
- Color 8: #b5c5dd - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Arvo
- Secondary: Montserrat

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 18px / weight 400 / line-height 29.7px
- Button sample: 10px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgb(244, 238, 239) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(85, 136, 204) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Arvo in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#e1dbdb) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, retro, default-aesthetics, net.art) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Arvo consistently for headlines and interface labels.
- Keep the palette anchored to #e1dbdb, #b16c4e, and #aba6a5.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, retro, default-aesthetics, net.art.
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

> Build a responsive landing page inspired by Max Bittker. Keep the palette centered on #e1dbdb, #b16c4e, and #aba6a5. Use Arvo for headlines, preserve the retro-computing cues mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/max-bittker)
- Live site: https://maxbittker.com/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
