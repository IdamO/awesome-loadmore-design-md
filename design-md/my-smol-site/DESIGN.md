# Design System Inspiration of My Smol Site

## 1. Visual Theme & Atmosphere

My Smol Site reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #f8f8f8, #1f1865, and accent notes from #fd6b36. This is a site to help people make one-page sites, resurrecting Clippy in the form of the cartoon character from the Loki series.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers IBM Plex Mono, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f8f8f8, #1f1865, #fd6b36, #f3f30a
- Typography stack: IBM Plex Mono, IBM Plex Sans Condensed, Patrick Hand
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f8f8f8 - canvas / dominant background
- Color 2: #1f1865 - primary text or opposing surface
- Color 3: #fd6b36 - accent / interactive signal
- Color 4: #f3f30a - supporting surface or hover state
- Color 5: #a6a5a5 - supporting surface or hover state
- Color 6: #585867 - supporting surface or hover state
- Color 7: #f8ab8f - supporting surface or hover state
- Color 8: #645c88 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: IBM Plex Mono
- Secondary: IBM Plex Sans Condensed
- Support: Patrick Hand
- Support: Poppins

### Hierarchy Snapshot
- Heading sample: 85.8307px / weight 500 / letter-spacing -0.98956px
- Body sample: 14.4px / weight 400 / line-height 20.16px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps IBM Plex Mono in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f8f8f8) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (colorful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px.
- Radius cue: 8px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use IBM Plex Mono consistently for headlines and interface labels.
- Keep the palette anchored to #f8f8f8, #1f1865, and #fd6b36.
- Preserve the experimental posture signaled by the loadmo.re tags: colorful.
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

> Build a responsive landing page inspired by My Smol Site. Keep the palette centered on #f8f8f8, #1f1865, and #fd6b36. Use IBM Plex Mono for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/my-smol-site)
- Live site: https://mysmol.site/
- Credits: Sarim Haque
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
