# Design System Inspiration of Studio Ānanda

## 1. Visual Theme & Atmosphere

Studio Ānanda reads as exhibition-like framing. The live capture resolves to a dark-leaning system built around #908b90, #9a788f, and accent notes from #938b64. Channeling Studio Ānanda's spirit of wellness with soft use of CSS filters, blend modes, and SVG animations.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers ortica-bold, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #908b90, #9a788f, #938b64, #d66f92
- Typography stack: ortica-bold, ortica, national-heavy
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #908b90 - canvas / dominant background
- Color 2: #9a788f - primary text or opposing surface
- Color 3: #938b64 - accent / interactive signal
- Color 4: #d66f92 - supporting surface or hover state
- Color 5: #6d915b - supporting surface or hover state
- Color 6: #907868 - supporting surface or hover state
- Color 7: #93873b - supporting surface or hover state
- Color 8: #63625c - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: ortica-bold
- Secondary: ortica
- Support: national-heavy
- Support: national-outline
- Support: national
- Support: national-thin

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 24px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps ortica-bold in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#908b90) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (online-magazine, colorful, arts&culture) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use ortica-bold consistently for headlines and interface labels.
- Keep the palette anchored to #908b90, #9a788f, and #938b64.
- Preserve the experimental posture signaled by the loadmo.re tags: online-magazine, colorful, arts&culture.
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

> Build a responsive landing page inspired by Studio Ānanda. Keep the palette centered on #908b90, #9a788f, and #938b64. Use ortica-bold for headlines, preserve the exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/studio-ananda)
- Live site: https://www.studioananda.space
- Credits: Ellen Lo
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
