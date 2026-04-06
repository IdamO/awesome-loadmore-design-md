# Design System Inspiration of New York Times - This is 18 around the world

## 1. Visual Theme & Atmosphere

New York Times - This is 18 around the world reads as playful interaction. The live capture resolves to a dark-leaning system built around #47292a, #5a5761, and accent notes from #221d22. Another example of NY Times's brilliant take on digital content. They certainly know how to immerse the reader in a story.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers nyt-stymie, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #47292a, #5a5761, #221d22, #9497a6
- Typography stack: nyt-stymie, nyt-cheltenham, nyt-cheltenham-sh
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #47292a - canvas / dominant background
- Color 2: #5a5761 - primary text or opposing surface
- Color 3: #221d22 - accent / interactive signal
- Color 4: #9497a6 - supporting surface or hover state
- Color 5: #5e708f - supporting surface or hover state
- Color 6: #323146 - supporting surface or hover state
- Color 7: #dfe1e6 - supporting surface or hover state
- Color 8: #788499 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: nyt-stymie
- Secondary: nyt-cheltenham
- Support: nyt-cheltenham-sh
- Support: nyt-cheltenham-extra-cn-bd
- Support: nyt-mag-serif-headline
- Support: nyt-karnak-display-130124

### Hierarchy Snapshot
- Heading sample: 144px / weight 200 / letter-spacing normal
- Body sample: 32px / weight 200 / line-height 41.6px
- Button sample: 20px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(21, 124, 210) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps nyt-stymie in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#47292a) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (online-magazine, playful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use nyt-stymie consistently for headlines and interface labels.
- Keep the palette anchored to #47292a, #5a5761, and #221d22.
- Preserve the experimental posture signaled by the loadmo.re tags: online-magazine, playful.
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

> Build a responsive landing page inspired by New York Times - This is 18 around the world. Keep the palette centered on #47292a, #5a5761, and #221d22. Use nyt-stymie for headlines, preserve the playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/new-york-times-this-is-18-around-the-world)
- Live site: https://www.nytimes.com/interactive/2018/10/11/style/this-is-18.html
- Credits: Bureau Borsche
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
