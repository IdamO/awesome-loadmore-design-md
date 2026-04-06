# Design System Inspiration of Martine Rose

## 1. Visual Theme & Atmosphere

Martine Rose reads as editorial fashion energy. The live capture resolves to a dark-leaning system built around #080707, #524c49, and accent notes from #4b3533. A real-time experience of Martine Rose's SS23 show, looping perpetually.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers vcr osd mono, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #080707, #524c49, #4b3533, #49423b
- Typography stack: vcr osd mono
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #080707 - canvas / dominant background
- Color 2: #524c49 - primary text or opposing surface
- Color 3: #4b3533 - accent / interactive signal
- Color 4: #49423b - supporting surface or hover state
- Color 5: #945959 - supporting surface or hover state
- Color 6: #493e40 - supporting surface or hover state
- Color 7: #3e3e40 - supporting surface or hover state
- Color 8: #c97576 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: vcr osd mono

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 18px / weight 400 / line-height 18px
- Button sample: 18px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(248, 147, 147) text.
- Links inherit #4b3533 as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps vcr osd mono in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#080707) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (fashion, video) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use vcr osd mono consistently for headlines and interface labels.
- Keep the palette anchored to #080707, #524c49, and #4b3533.
- Preserve the experimental posture signaled by the loadmo.re tags: fashion, video.
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

> Build a responsive landing page inspired by Martine Rose. Keep the palette centered on #080707, #524c49, and #4b3533. Use vcr osd mono for headlines, preserve the editorial fashion energy mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/martine-rose)
- Live site: https://ss23.martine-rose.com/
- Credits: International Magic
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
