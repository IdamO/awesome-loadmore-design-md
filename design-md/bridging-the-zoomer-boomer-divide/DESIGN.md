# Design System Inspiration of Bridging the Zoomer-Boomer divide

## 1. Visual Theme & Atmosphere

Bridging the Zoomer-Boomer divide reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #faf7f3, #205ada, and accent notes from #a2a3a7. Blog article designed as a DM thred between the author and his friend.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers EB Garamond, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #faf7f3, #205ada, #a2a3a7, #658dda
- Typography stack: EB Garamond, IBM Plex Mono, Graphik
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #faf7f3 - canvas / dominant background
- Color 2: #205ada - primary text or opposing surface
- Color 3: #a2a3a7 - accent / interactive signal
- Color 4: #658dda - supporting surface or hover state
- Color 5: #565b67 - supporting surface or hover state
- Color 6: #92aedd - supporting surface or hover state
- Color 7: #4978da - supporting surface or hover state
- Color 8: #1d2536 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: EB Garamond
- Secondary: IBM Plex Mono
- Support: Graphik
- Support: Graphik Compact

### Hierarchy Snapshot
- Heading sample: 20px / weight 900 / letter-spacing normal
- Body sample: 17px / weight 400 / line-height 25.5px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(20, 30, 48) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps EB Garamond in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#faf7f3) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (online-magazine) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: 8px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use EB Garamond consistently for headlines and interface labels.
- Keep the palette anchored to #faf7f3, #205ada, and #a2a3a7.
- Preserve the experimental posture signaled by the loadmo.re tags: online-magazine.
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

> Build a responsive landing page inspired by Bridging the Zoomer-Boomer divide. Keep the palette centered on #faf7f3, #205ada, and #a2a3a7. Use EB Garamond for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/bridging-the-zoomer-boomer-divide)
- Live site: https://aaronzlewis.com/blog/2020/08/01/bridging-the-zoomer-boomer-divide/
- Credits: Aaron Z Lewis, Michał Sajnóg
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
