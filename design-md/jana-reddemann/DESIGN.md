# Design System Inspiration of Jana Reddemann

## 1. Visual Theme & Atmosphere

Jana Reddemann reads as retro-computing cues. The live capture resolves to a light-leaning system built around #f2f2f2, #acacac, and accent notes from #5aa0f0. Pure default HTML aesthetics.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers TimesNewArial, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f2f2f2, #acacac, #5aa0f0, #6d6d6d
- Typography stack: TimesNewArial
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f2f2f2 - canvas / dominant background
- Color 2: #acacac - primary text or opposing surface
- Color 3: #5aa0f0 - accent / interactive signal
- Color 4: #6d6d6d - supporting surface or hover state
- Color 5: #c9b6d3 - supporting surface or hover state
- Color 6: #a78fda - supporting surface or hover state
- Color 7: #9657dd - supporting surface or hover state
- Color 8: #c3b8b5 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: TimesNewArial

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 12px / weight 400 / line-height 16px
- Button sample: 12px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgb(239, 239, 239) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps TimesNewArial in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f2f2f2) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, retro, default-aesthetics) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use TimesNewArial consistently for headlines and interface labels.
- Keep the palette anchored to #f2f2f2, #acacac, and #5aa0f0.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, retro, default-aesthetics.
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

> Build a responsive landing page inspired by Jana Reddemann. Keep the palette centered on #f2f2f2, #acacac, and #5aa0f0. Use TimesNewArial for headlines, preserve the retro-computing cues mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/jana-reddemann)
- Live site: https://janareddemann.de/hfbk
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
