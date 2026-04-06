# Design System Inspiration of Wandering Wondering Rocks

## 1. Visual Theme & Atmosphere

Wandering Wondering Rocks reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #0e0e0e, #161616, and accent notes from #252525. A site and digitized cemetery of unanswered words – preserving what’s been left behind drifting, echoing, floating.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers VictorMono, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #0e0e0e, #161616, #252525, #373737
- Typography stack: VictorMono, EarthTone
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #0e0e0e - canvas / dominant background
- Color 2: #161616 - primary text or opposing surface
- Color 3: #252525 - accent / interactive signal
- Color 4: #373737 - supporting surface or hover state
- Color 5: #484848 - supporting surface or hover state
- Color 6: #5b5b5b - supporting surface or hover state
- Color 7: #777777 - supporting surface or hover state
- Color 8: #919191 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: VictorMono
- Secondary: EarthTone

### Hierarchy Snapshot
- Heading sample: 16px / weight 700 / letter-spacing normal
- Body sample: 17.6px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit #252525 as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps VictorMono in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#0e0e0e) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (net.art) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use VictorMono consistently for headlines and interface labels.
- Keep the palette anchored to #0e0e0e, #161616, and #252525.
- Preserve the experimental posture signaled by the loadmo.re tags: net.art.
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

> Build a responsive landing page inspired by Wandering Wondering Rocks. Keep the palette centered on #0e0e0e, #161616, and #252525. Use VictorMono for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/wandering-wondering-rocks)
- Live site: https://wandering-wondering.rocks/graveyard/
- Credits: Arin Pantja
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
