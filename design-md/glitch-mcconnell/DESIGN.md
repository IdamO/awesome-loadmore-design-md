# Design System Inspiration of Glitch Mcconnell

## 1. Visual Theme & Atmosphere

Glitch Mcconnell reads as playful interaction. The live capture resolves to a dark-leaning system built around #000000, #454545, and accent notes from #191919. Create cursed glitch art with Mitch McConnell

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Roboto Mono, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #000000, #454545, #191919, #535353
- Typography stack: Roboto Mono
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #000000 - canvas / dominant background
- Color 2: #454545 - primary text or opposing surface
- Color 3: #191919 - accent / interactive signal
- Color 4: #535353 - supporting surface or hover state
- Color 5: #313131 - supporting surface or hover state
- Color 6: #6d6d6d - supporting surface or hover state
- Color 7: #939393 - supporting surface or hover state
- Color 8: #dadada - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Roboto Mono

### Hierarchy Snapshot
- Heading sample: 32px / weight 700 / letter-spacing normal
- Body sample: 12.8px / weight 100 / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit #191919 as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Roboto Mono in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#000000) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (glitches, playful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: 5px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Roboto Mono consistently for headlines and interface labels.
- Keep the palette anchored to #000000, #454545, and #191919.
- Preserve the experimental posture signaled by the loadmo.re tags: glitches, playful.
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

> Build a responsive landing page inspired by Glitch Mcconnell. Keep the palette centered on #000000, #454545, and #191919. Use Roboto Mono for headlines, preserve the playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/glitch-mcconnell)
- Live site: https://glitchmcconnell.netlify.app/
- Credits: Anton Plauche
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
