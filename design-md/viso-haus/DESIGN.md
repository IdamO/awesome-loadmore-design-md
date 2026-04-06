# Design System Inspiration of Viso Haus

## 1. Visual Theme & Atmosphere

Viso Haus reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #080707, #e6dddd, and accent notes from #5a2317. Land on a mesmerizing page of blurred objects leaving painterly light trails—drag to control their movement or tap to explore the portfolio

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers __GTAmerica_36d514, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #080707, #e6dddd, #5a2317, #5c5c5b
- Typography stack: __GTAmerica_36d514, __GTAmerica_Fallback_36d514, __NTBauMono_6186eb
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #080707 - canvas / dominant background
- Color 2: #e6dddd - primary text or opposing surface
- Color 3: #5a2317 - accent / interactive signal
- Color 4: #5c5c5b - supporting surface or hover state
- Color 5: #d5afa3 - supporting surface or hover state
- Color 6: #a29f99 - supporting surface or hover state
- Color 7: #922e1c - supporting surface or hover state
- Color 8: #da3120 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: __GTAmerica_36d514
- Secondary: __GTAmerica_Fallback_36d514
- Support: __NTBauMono_6186eb
- Support: __NTBauMono_Fallback_6186eb

### Hierarchy Snapshot
- Heading sample: 16px / weight 400 / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 24px
- Button sample: 16px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(23, 23, 23) text.
- Links inherit rgb(23, 23, 23) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps __GTAmerica_36d514 in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#080707) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (tactile) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use __GTAmerica_36d514 consistently for headlines and interface labels.
- Keep the palette anchored to #080707, #e6dddd, and #5a2317.
- Preserve the experimental posture signaled by the loadmo.re tags: tactile.
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

> Build a responsive landing page inspired by Viso Haus. Keep the palette centered on #080707, #e6dddd, and #5a2317. Use __GTAmerica_36d514 for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/viso-haus)
- Live site: https://viso.haus/
- Credits: Viso Haus
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
