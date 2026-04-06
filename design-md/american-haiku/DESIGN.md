# Design System Inspiration of American Haiku

## 1. Visual Theme & Atmosphere

American Haiku reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #010101, #262626, and accent notes from #373737. American Haiku, a new kind of creative agency from Brooklyn, NY

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Neureal Mono, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #010101, #262626, #373737, #5e5e5e
- Typography stack: Neureal Mono
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #010101 - canvas / dominant background
- Color 2: #262626 - primary text or opposing surface
- Color 3: #373737 - accent / interactive signal
- Color 4: #5e5e5e - supporting surface or hover state
- Color 5: #181818 - supporting surface or hover state
- Color 6: #464646 - supporting surface or hover state
- Color 7: #969696 - supporting surface or hover state
- Color 8: #d2d2d2 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Neureal Mono

### Hierarchy Snapshot
- Heading sample: 20px / weight 400 / letter-spacing normal
- Body sample: 18px / weight 400 / line-height 20px
- Button sample: 14px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(255, 255, 255) text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Neureal Mono in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#010101) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, video) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Neureal Mono consistently for headlines and interface labels.
- Keep the palette anchored to #010101, #262626, and #373737.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, video.
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

> Build a responsive landing page inspired by American Haiku. Keep the palette centered on #010101, #262626, and #373737. Use Neureal Mono for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/american-haiku)
- Live site: https://americanhaiku.xyz
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
