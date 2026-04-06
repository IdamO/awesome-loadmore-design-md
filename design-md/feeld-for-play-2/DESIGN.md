# Design System Inspiration of Feeld for Play

## 1. Visual Theme & Atmosphere

Feeld for Play reads as playful interaction. The live capture resolves to a dark-leaning system built around #1b1b27, #303145, and accent notes from #585861. Fun game to promote a dating app. Turn on your camera to generate your 3D floating shape that will maybe flirt with other online users.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Geologica, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #1b1b27, #303145, #585861, #9b9ca0
- Typography stack: Geologica
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #1b1b27 - canvas / dominant background
- Color 2: #303145 - primary text or opposing surface
- Color 3: #585861 - accent / interactive signal
- Color 4: #9b9ca0 - supporting surface or hover state
- Color 5: #e42847 - supporting surface or hover state
- Color 6: #552331 - supporting surface or hover state
- Color 7: #d3203b - supporting surface or hover state
- Color 8: #cfd0d2 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Geologica

### Hierarchy Snapshot
- Heading sample: 32px / weight 700 / letter-spacing normal
- Body sample: 14px / weight 100 / line-height 24px
- Button sample: 16px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(255, 255, 255) text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 4px.
- Shadow language: rgba(0, 0, 0, 0.24) 0px 2px 4px 0px.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Geologica in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#1b1b27) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (participative, playful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgba(0, 0, 0, 0.24) 0px 2px 2px 0px.
- Radius cue: 4px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Geologica consistently for headlines and interface labels.
- Keep the palette anchored to #1b1b27, #303145, and #585861.
- Preserve the experimental posture signaled by the loadmo.re tags: participative, playful.
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

> Build a responsive landing page inspired by Feeld for Play. Keep the palette centered on #1b1b27, #303145, and #585861. Use Geologica for headlines, preserve the playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/feeld-for-play-2)
- Live site: https://feeldforplay.com/
- Credits: Moniker
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
