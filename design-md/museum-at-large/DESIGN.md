# Design System Inspiration of Museum At Large

## 1. Visual Theme & Atmosphere

Museum At Large reads as exhibition-like framing. The live capture resolves to a light-leaning system built around #f8c9d3, #151011, and accent notes from #d1aab2. Adjust your reading rhythm by navigating with a drawing tool.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Relative-Book, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f8c9d3, #151011, #d1aab2, #ae8d94
- Typography stack: Relative-Book, Relative-Bold
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f8c9d3 - canvas / dominant background
- Color 2: #151011 - primary text or opposing surface
- Color 3: #d1aab2 - accent / interactive signal
- Color 4: #ae8d94 - supporting surface or hover state
- Color 5: #6b575b - supporting surface or hover state
- Color 6: #897075 - supporting surface or hover state
- Color 7: #e6bbc4 - supporting surface or hover state
- Color 8: #987c82 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Relative-Book
- Secondary: Relative-Bold

### Hierarchy Snapshot
- Heading sample: 90px / weight 300 / letter-spacing normal
- Body sample: 10px / weight 300 / line-height 10px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 238) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Relative-Book in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f8c9d3) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (tactile, arts&culture, colorful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Relative-Book consistently for headlines and interface labels.
- Keep the palette anchored to #f8c9d3, #151011, and #d1aab2.
- Preserve the experimental posture signaled by the loadmo.re tags: tactile, arts&culture, colorful.
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

> Build a responsive landing page inspired by Museum At Large. Keep the palette centered on #f8c9d3, #151011, and #d1aab2. Use Relative-Book for headlines, preserve the exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/museum-at-large)
- Live site: https://museumatlarge.com
- Credits: Steven Thorne, TR Bennett
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
