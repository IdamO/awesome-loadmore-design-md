# Design System Inspiration of temper

## 1. Visual Theme & Atmosphere

temper reads as restrained minimalism, type-led composition. The live capture resolves to a dark-leaning system built around #0e0e0e, #fc772f, and accent notes from #0c59fa. In situ demo for a sleek one page website editor.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Scope, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #0e0e0e, #fc772f, #0c59fa, #efee07
- Typography stack: Scope, Scope-Web, Scope Condensed
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #0e0e0e - canvas / dominant background
- Color 2: #fc772f - primary text or opposing surface
- Color 3: #0c59fa - accent / interactive signal
- Color 4: #efee07 - supporting surface or hover state
- Color 5: #f88d5c - supporting surface or hover state
- Color 6: #5a5a55 - supporting surface or hover state
- Color 7: #f5ae9f - supporting surface or hover state
- Color 8: #f5eef1 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Scope
- Secondary: Scope-Web
- Support: Scope Condensed
- Support: Scope Expanded
- Support: Fictional
- Support: Indicate Mono

### Hierarchy Snapshot
- Heading sample: 79.2px / weight 700 / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 18px
- Button sample: 79.2px / weight 700

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(0, 0, 238) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Scope in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#0e0e0e) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (typography, minimal) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 100%.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Scope consistently for headlines and interface labels.
- Keep the palette anchored to #0e0e0e, #fc772f, and #0c59fa.
- Preserve the experimental posture signaled by the loadmo.re tags: typography, minimal.
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

> Build a responsive landing page inspired by temper. Keep the palette centered on #0e0e0e, #fc772f, and #0c59fa. Use Scope for headlines, preserve the restrained minimalism, type-led composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/temper)
- Live site: https://temper.one/
- Credits: Jonas Pelzer
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
