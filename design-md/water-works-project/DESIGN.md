# Design System Inspiration of Water Works Project

## 1. Visual Theme & Atmosphere

Water Works Project reads as sonic pacing. The live capture resolves to a dark-leaning system built around #2f01f4, #abaaad, and accent notes from #4d28e1. Initiated by Field Records, Waterworks covers over 50 Dutch waterworks developed across Japan during the Meiji era. Navigate around the map and click on sites' names to learn about their development — often accompanied by visual or sonic impressions.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers IBM Plex Mono, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #2f01f4, #abaaad, #4d28e1, #6e55d3
- Typography stack: IBM Plex Mono, IBM Plex Sans JP
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #2f01f4 - canvas / dominant background
- Color 2: #abaaad - primary text or opposing surface
- Color 3: #4d28e1 - accent / interactive signal
- Color 4: #6e55d3 - supporting surface or hover state
- Color 5: #2206a6 - supporting surface or hover state
- Color 6: #8674ca - supporting surface or hover state
- Color 7: #a095c9 - supporting surface or hover state
- Color 8: #c9cac7 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: IBM Plex Mono
- Secondary: IBM Plex Sans JP

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 11.25px / weight 500 / line-height 12.9375px
- Button sample: 11.25px / weight 500

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(255, 255, 255) text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps IBM Plex Mono in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#2f01f4) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (educational, music) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 4.5px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use IBM Plex Mono consistently for headlines and interface labels.
- Keep the palette anchored to #2f01f4, #abaaad, and #4d28e1.
- Preserve the experimental posture signaled by the loadmo.re tags: educational, music.
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

> Build a responsive landing page inspired by Water Works Project. Keep the palette centered on #2f01f4, #abaaad, and #4d28e1. Use IBM Plex Mono for headlines, preserve the sonic pacing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/water-works-project)
- Live site: https://waterworksproject.nl/en
- Credits: Field Records
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
