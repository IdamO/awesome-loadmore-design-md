# Design System Inspiration of Remember to Forget

## 1. Visual Theme & Atmosphere

Remember to Forget reads as exhibition-like framing. The live capture resolves to a light-leaning system built around #f9f9f8, #a9a9a8, and accent notes from #c0c0be. “Remember to Forget” by Faris Kassim archives 10 years of film slides, blurring images to the point of complete indistinguishability. Through a process akin to memory recall, the project downsizes and reconstructs images, filling in gaps with imagined data.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers L, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f9f9f8, #a9a9a8, #c0c0be, #c0bfbd
- Typography stack: L
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f9f9f8 - canvas / dominant background
- Color 2: #a9a9a8 - primary text or opposing surface
- Color 3: #c0c0be - accent / interactive signal
- Color 4: #c0bfbd - supporting surface or hover state
- Color 5: #bdc0be - supporting surface or hover state
- Color 6: #bebfc0 - supporting surface or hover state
- Color 7: #bfc1c0 - supporting surface or hover state
- Color 8: #c1bfc0 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: L

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 300 / line-height 26.56px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps L in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f9f9f8) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (arts&culture, animation) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use L consistently for headlines and interface labels.
- Keep the palette anchored to #f9f9f8, #a9a9a8, and #c0c0be.
- Preserve the experimental posture signaled by the loadmo.re tags: arts&culture, animation.
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

> Build a responsive landing page inspired by Remember to Forget. Keep the palette centered on #f9f9f8, #a9a9a8, and #c0c0be. Use L for headlines, preserve the exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/remember-to-forget)
- Live site: http://www.remembertoforget.me/
- Credits: OKOK Services
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
