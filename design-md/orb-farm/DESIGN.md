# Design System Inspiration of Orb Farm

## 1. Visual Theme & Atmosphere

Orb Farm reads as playful interaction, retro-computing cues. The live capture resolves to a light-leaning system built around #c7c7c7, #677789, and accent notes from #949fa8. A cute and quirky aquatic organism invites you to interact with its retro environment, where you can nurture, sculpt and observe.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Pixelated MS Sans Serif, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #c7c7c7, #677789, #949fa8, #758695
- Typography stack: Pixelated MS Sans Serif, pixelmixregular, times16
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #c7c7c7 - canvas / dominant background
- Color 2: #677789 - primary text or opposing surface
- Color 3: #949fa8 - accent / interactive signal
- Color 4: #758695 - supporting surface or hover state
- Color 5: #626e77 - supporting surface or hover state
- Color 6: #e09fdc - supporting surface or hover state
- Color 7: #c0c0be - supporting surface or hover state
- Color 8: #b7b7c3 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Pixelated MS Sans Serif
- Secondary: pixelmixregular
- Support: times16

### Hierarchy Snapshot
- Heading sample: 18px / weight 700 / letter-spacing normal
- Body sample: 18px / weight 400 / line-height normal
- Button sample: 11px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgb(192, 192, 192) backgrounds with rgba(0, 0, 0, 0) text.
- Links inherit rgb(0, 0, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: rgb(10, 10, 10) -1px -1px 0px 0px inset, rgb(255, 255, 255) 1px 1px 0px 0px inset, rgb(128, 128, 128) -2px -2px 0px 0px inset, rgb(223, 223, 223) 2px 2px 0px 0px inset.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Pixelated MS Sans Serif in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#c7c7c7) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (game, retro, net.art, default-aesthetics) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgb(10, 10, 10) -1px -1px 0px 0px inset, rgb(255, 255, 255) 1px 1px 0px 0px inset, rgb(128, 128, 128) -2px -2px 0px 0px inset, rgb(223, 223, 223) 2px 2px 0px 0px inset.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Pixelated MS Sans Serif consistently for headlines and interface labels.
- Keep the palette anchored to #c7c7c7, #677789, and #949fa8.
- Preserve the experimental posture signaled by the loadmo.re tags: game, retro, net.art, default-aesthetics.
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

> Build a responsive landing page inspired by Orb Farm. Keep the palette centered on #c7c7c7, #677789, and #949fa8. Use Pixelated MS Sans Serif for headlines, preserve the playful interaction, retro-computing cues mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/orb-farm)
- Live site: https://orb.farm/
- Credits: Max Bittker
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
