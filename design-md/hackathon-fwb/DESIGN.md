# Design System Inspiration of Hackathon FWB

## 1. Visual Theme & Atmosphere

Hackathon FWB reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #1b1b1b, #dbe6d4, and accent notes from #fcf115. Web3 hackathon website with a cool graphic layout.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers TWKEverett, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #1b1b1b, #dbe6d4, #fcf115, #b1b3b0
- Typography stack: TWKEverett
- Desktop posture: fixed/sticky framing
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #1b1b1b - canvas / dominant background
- Color 2: #dbe6d4 - primary text or opposing surface
- Color 3: #fcf115 - accent / interactive signal
- Color 4: #b1b3b0 - supporting surface or hover state
- Color 5: #494a49 - supporting surface or hover state
- Color 6: #a09a1a - supporting surface or hover state
- Color 7: #b7c6ac - supporting surface or hover state
- Color 8: #c5d6ba - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: TWKEverett

### Hierarchy Snapshot
- Heading sample: 20px / weight 400 / letter-spacing -0.8px
- Body sample: 20px / weight 400 / line-height 22px
- Button sample: 20px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(255, 255, 255) text.
- Links inherit rgb(30, 30, 30) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps TWKEverett in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#1b1b1b) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (graphic-design) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 50px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use TWKEverett consistently for headlines and interface labels.
- Keep the palette anchored to #1b1b1b, #dbe6d4, and #fcf115.
- Preserve the experimental posture signaled by the loadmo.re tags: graphic-design.
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

> Build a responsive landing page inspired by Hackathon FWB. Keep the palette centered on #1b1b1b, #dbe6d4, and #fcf115. Use TWKEverett for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/hackathon-fwb)
- Live site: https://hackathon.fwb.help/
- Credits: Wednesday Studio
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
