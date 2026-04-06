# Design System Inspiration of A proposal for immersive video on the web

## 1. Visual Theme & Atmosphere

A proposal for immersive video on the web reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #fcfcfc, #0c0c0c, and accent notes from #a09e9d. Interesting use of an interface to make a case and show in situ how to improve video players on the web, making them more interactive.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers marr-sans, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fcfcfc, #0c0c0c, #a09e9d, #9cdaa8
- Typography stack: marr-sans, nhg
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #fcfcfc - canvas / dominant background
- Color 2: #0c0c0c - primary text or opposing surface
- Color 3: #a09e9d - accent / interactive signal
- Color 4: #9cdaa8 - supporting surface or hover state
- Color 5: #5ca56a - supporting surface or hover state
- Color 6: #5f5e5e - supporting surface or hover state
- Color 7: #b5f2c6 - supporting surface or hover state
- Color 8: #03fe83 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: marr-sans
- Secondary: nhg

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 24px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps marr-sans in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fcfcfc) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (video) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: 2px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use marr-sans consistently for headlines and interface labels.
- Keep the palette anchored to #fcfcfc, #0c0c0c, and #a09e9d.
- Preserve the experimental posture signaled by the loadmo.re tags: video.
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

> Build a responsive landing page inspired by A proposal for immersive video on the web. Keep the palette centered on #fcfcfc, #0c0c0c, and #a09e9d. Use marr-sans for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/a-proposal-for-immersive-video-on-the-web)
- Live site: http://video.gabeferreira.com/
- Credits: Gabe Ferreira
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
