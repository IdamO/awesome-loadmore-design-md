# Design System Inspiration of Mono X7

## 1. Visual Theme & Atmosphere

Mono X7 reads as spatial depth, exhibition-like framing. The live capture resolves to a light-leaning system built around #f8f8f8, #95989c, and accent notes from #0e0e0f. An infinite 3D scrolling gallery to explore artworks available on Mono X7's digital canvas.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers NH, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f8f8f8, #95989c, #0e0e0f, #636364
- Typography stack: NH, S-Condensed, S-Works
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #f8f8f8 - canvas / dominant background
- Color 2: #95989c - primary text or opposing surface
- Color 3: #0e0e0f - accent / interactive signal
- Color 4: #636364 - supporting surface or hover state
- Color 5: #7e8285 - supporting surface or hover state
- Color 6: #423d45 - supporting surface or hover state
- Color 7: #bcbdc0 - supporting surface or hover state
- Color 8: #3c3841 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: NH
- Secondary: S-Condensed
- Support: S-Works
- Support: EV
- Support: NSJ
- Support: swiper-icons

### Hierarchy Snapshot
- Heading sample: 28.008px / weight 100 / letter-spacing -1.4004px
- Body sample: 16px / weight 300 / line-height 21.44px
- Button sample: 14.0256px / weight 500

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(41, 41, 41) text.
- Links inherit rgb(41, 41, 41) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps NH in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f8f8f8) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (arts&culture, 3d-space, video) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use NH consistently for headlines and interface labels.
- Keep the palette anchored to #f8f8f8, #95989c, and #0e0e0f.
- Preserve the experimental posture signaled by the loadmo.re tags: arts&culture, 3d-space, video.
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

> Build a responsive landing page inspired by Mono X7. Keep the palette centered on #f8f8f8, #95989c, and #0e0e0f. Use NH for headlines, preserve the spatial depth, exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/mono-x7)
- Live site: https://mono.frm.fm/
- Credits: okok services
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
