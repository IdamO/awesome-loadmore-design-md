# Design System Inspiration of The Peach Spring Beyond This World

## 1. Visual Theme & Atmosphere

The Peach Spring Beyond This World reads as exhibition-like framing. The live capture resolves to a dark-leaning system built around #5d5e61, #96a9cf, and accent notes from #9d5e5b. Navigate an online exhibition through a 3D world, encountering works from two digital artists via text, links, and reaction videos

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Crimson Text, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #5d5e61, #96a9cf, #9d5e5b, #9a9d9f
- Typography stack: Crimson Text, Noto Sans SC, Noto Serif SC
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #5d5e61 - canvas / dominant background
- Color 2: #96a9cf - primary text or opposing surface
- Color 3: #9d5e5b - accent / interactive signal
- Color 4: #9a9d9f - supporting surface or hover state
- Color 5: #262921 - supporting surface or hover state
- Color 6: #962726 - supporting surface or hover state
- Color 7: #602d28 - supporting surface or hover state
- Color 8: #58562e - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Crimson Text
- Secondary: Noto Sans SC
- Support: Noto Serif SC
- Support: Roboto
- Support: icomoon

### Hierarchy Snapshot
- Heading sample: 16px / weight 700 / letter-spacing normal
- Body sample: 16px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Crimson Text in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#5d5e61) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (digital-exhibition) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Crimson Text consistently for headlines and interface labels.
- Keep the palette anchored to #5d5e61, #96a9cf, and #9d5e5b.
- Preserve the experimental posture signaled by the loadmo.re tags: digital-exhibition.
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

> Build a responsive landing page inspired by The Peach Spring Beyond This World. Keep the palette centered on #5d5e61, #96a9cf, and #9d5e5b. Use Crimson Text for headlines, preserve the exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/the-peach-spring-beyond-this-world)
- Live site: http://beurownmastr.com/ty/
- Credits: oOOo Studio Amenue
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
