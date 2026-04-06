# Design System Inspiration of Nearrest Neighbor

## 1. Visual Theme & Atmosphere

Nearrest Neighbor reads as exhibition-like framing. The live capture resolves to a dark-leaning system built around #91acc8, #020203, and accent notes from #b3c3bc. Thesis virtual exhibition for UCLA students. They've brilliantly transitionned from an IRL to an online format.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Arial Black, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #91acc8, #020203, #b3c3bc, #a2b9bb
- Typography stack: Arial Black, Arial Blur, Kyiv
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #91acc8 - canvas / dominant background
- Color 2: #020203 - primary text or opposing surface
- Color 3: #b3c3bc - accent / interactive signal
- Color 4: #a2b9bb - supporting surface or hover state
- Color 5: #abc5ca - supporting surface or hover state
- Color 6: #eff1f3 - supporting surface or hover state
- Color 7: #51596c - supporting surface or hover state
- Color 8: #647292 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Arial Black
- Secondary: Arial Blur
- Support: Kyiv

### Hierarchy Snapshot
- Heading sample: 21px / weight 700 / letter-spacing normal
- Body sample: 15px / weight 400 / line-height 15px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Arial Black in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#91acc8) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (arts&culture, educational, tactile) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Arial Black consistently for headlines and interface labels.
- Keep the palette anchored to #91acc8, #020203, and #b3c3bc.
- Preserve the experimental posture signaled by the loadmo.re tags: arts&culture, educational, tactile.
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

> Build a responsive landing page inspired by Nearrest Neighbor. Keep the palette centered on #91acc8, #020203, and #b3c3bc. Use Arial Black for headlines, preserve the exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/nearrest-neighbor)
- Live site: https://near.rest/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
