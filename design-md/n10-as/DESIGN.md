# Design System Inspiration of N10.AS

## 1. Visual Theme & Atmosphere

N10.AS reads as sonic pacing, retro-computing cues. The live capture resolves to a dark-leaning system built around #121315, #f0f1f1, and accent notes from #a2a2a3. N10.AS is an online radio station based in Monteral, they have a cool website with 90s GUI.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers FixedsysExcelsior301Regular, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #121315, #f0f1f1, #a2a2a3, #5f6061
- Typography stack: FixedsysExcelsior301Regular
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #121315 - canvas / dominant background
- Color 2: #f0f1f1 - primary text or opposing surface
- Color 3: #a2a2a3 - accent / interactive signal
- Color 4: #5f6061 - supporting surface or hover state
- Color 5: #0c1df8 - supporting surface or hover state
- Color 6: #b5b6c7 - supporting surface or hover state
- Color 7: #ece90f - supporting surface or hover state
- Color 8: #5865e5 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: FixedsysExcelsior301Regular

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
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps FixedsysExcelsior301Regular in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#121315) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (retro, music) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use FixedsysExcelsior301Regular consistently for headlines and interface labels.
- Keep the palette anchored to #121315, #f0f1f1, and #a2a2a3.
- Preserve the experimental posture signaled by the loadmo.re tags: retro, music.
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

> Build a responsive landing page inspired by N10.AS. Keep the palette centered on #121315, #f0f1f1, and #a2a2a3. Use FixedsysExcelsior301Regular for headlines, preserve the sonic pacing, retro-computing cues mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/n10-as)
- Live site: https://n10.as/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
