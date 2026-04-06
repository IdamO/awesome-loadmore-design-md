# Design System Inspiration of Paint.stx

## 1. Visual Theme & Atmosphere

Paint.stx reads as playful interaction. The live capture resolves to a light-leaning system built around #fefefe, #b1b1b1, and accent notes from #9c16cc. Create absolute chaos with psychedelic brushes.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Fragment Mono, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fefefe, #b1b1b1, #9c16cc, #6669d1
- Typography stack: Fragment Mono
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #fefefe - canvas / dominant background
- Color 2: #b1b1b1 - primary text or opposing surface
- Color 3: #9c16cc - accent / interactive signal
- Color 4: #6669d1 - supporting surface or hover state
- Color 5: #9555d3 - supporting surface or hover state
- Color 6: #7805ce - supporting surface or hover state
- Color 7: #5d94d2 - supporting surface or hover state
- Color 8: #a89fde - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Fragment Mono

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 13px / weight 400 / line-height 18px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit #9c16cc as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Fragment Mono in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fefefe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (playful, participative, colorful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Fragment Mono consistently for headlines and interface labels.
- Keep the palette anchored to #fefefe, #b1b1b1, and #9c16cc.
- Preserve the experimental posture signaled by the loadmo.re tags: playful, participative, colorful.
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

> Build a responsive landing page inspired by Paint.stx. Keep the palette centered on #fefefe, #b1b1b1, and #9c16cc. Use Fragment Mono for headlines, preserve the playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/paint-stx)
- Live site: https://paint.stx.studio/
- Credits: Siiri Tännler
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
