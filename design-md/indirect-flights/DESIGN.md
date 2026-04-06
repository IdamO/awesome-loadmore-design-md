# Design System Inspiration of Indirect Flights

## 1. Visual Theme & Atmosphere

Indirect Flights reads as exhibition-like framing. The live capture resolves to a dark-leaning system built around #5f5f59, #dfdcd3, and accent notes from #a5a097. An online work by artist Joe Hamilton. Just let your swiping gesture wander through an infinite landscape of layered materials.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Fjalla One, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #5f5f59, #dfdcd3, #a5a097, #322f2b
- Typography stack: Fjalla One, Glyphicons Halflings
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #5f5f59 - canvas / dominant background
- Color 2: #dfdcd3 - primary text or opposing surface
- Color 3: #a5a097 - accent / interactive signal
- Color 4: #322f2b - supporting surface or hover state
- Color 5: #47392f - supporting surface or hover state
- Color 6: #514a37 - supporting surface or hover state
- Color 7: #968b71 - supporting surface or hover state
- Color 8: #897568 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Fjalla One
- Secondary: Glyphicons Halflings

### Hierarchy Snapshot
- Heading sample: 36px / weight 500 / letter-spacing normal
- Body sample: 24px / weight 400 / line-height 32px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(66, 139, 202) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Fjalla One in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#5f5f59) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (glitches, net.art, arts&culture) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Fjalla One consistently for headlines and interface labels.
- Keep the palette anchored to #5f5f59, #dfdcd3, and #a5a097.
- Preserve the experimental posture signaled by the loadmo.re tags: glitches, net.art, arts&culture.
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

> Build a responsive landing page inspired by Indirect Flights. Keep the palette centered on #5f5f59, #dfdcd3, and #a5a097. Use Fjalla One for headlines, preserve the exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/indirect-flights)
- Live site: http://indirect.flights/
- Credits: Joe Hamilton
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
