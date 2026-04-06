# Design System Inspiration of Alicia Mersy

## 1. Visual Theme & Atmosphere

Alicia Mersy reads as exhibition-like framing. The live capture resolves to a dark-leaning system built around #171618, #5c5e5e, and accent notes from #e8ecea. Insane graphic contents meshed together on this fun multi-layers website.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #171618, #5c5e5e, #e8ecea, #9da3a0
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #171618 - canvas / dominant background
- Color 2: #5c5e5e - primary text or opposing surface
- Color 3: #e8ecea - accent / interactive signal
- Color 4: #9da3a0 - supporting surface or hover state
- Color 5: #4d2f2b - supporting surface or hover state
- Color 6: #39454a - supporting surface or hover state
- Color 7: #343c42 - supporting surface or hover state
- Color 8: #b9c7c7 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: 100.8px / weight 700 / letter-spacing normal
- Body sample: 20.16px / weight 400 / line-height 27.2px
- Button sample: 13.3333px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgb(239, 239, 239) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#171618) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, arts&culture) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #171618, #5c5e5e, and #e8ecea.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, arts&culture.
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

> Build a responsive landing page inspired by Alicia Mersy. Keep the palette centered on #171618, #5c5e5e, and #e8ecea. Use the extracted primary font for headlines, preserve the exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/alicia-mersy)
- Live site: http://aliciamersy.com
- Credits: Cyrus Khalatbari
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
