# Design System Inspiration of Sabrina Zeltner

## 1. Visual Theme & Atmosphere

Sabrina Zeltner reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #170f0f, #c989dc, and accent notes from #642d2e. Textured, layered portfolio website that feels like an interactive poster.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Ambiant-Light, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #170f0f, #c989dc, #642d2e, #b790f7
- Typography stack: Ambiant-Light, Ambiant-Bold
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #170f0f - canvas / dominant background
- Color 2: #c989dc - primary text or opposing surface
- Color 3: #642d2e - accent / interactive signal
- Color 4: #b790f7 - supporting surface or hover state
- Color 5: #da7bb1 - supporting surface or hover state
- Color 6: #705a97 - supporting surface or hover state
- Color 7: #9174c5 - supporting surface or hover state
- Color 8: #856bb5 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Ambiant-Light
- Secondary: Ambiant-Bold

### Hierarchy Snapshot
- Heading sample: 27px / weight 400 / letter-spacing normal
- Body sample: 54px / weight 400 / line-height 48.6px
- Button sample: 27px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(255, 102, 102) text.
- Links inherit rgb(255, 102, 102) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Ambiant-Light in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#170f0f) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, glitches) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 36px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Ambiant-Light consistently for headlines and interface labels.
- Keep the palette anchored to #170f0f, #c989dc, and #642d2e.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, glitches.
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

> Build a responsive landing page inspired by Sabrina Zeltner. Keep the palette centered on #170f0f, #c989dc, and #642d2e. Use Ambiant-Light for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/sabrina-zeltner)
- Live site: https://sabrinazeltner.com/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
