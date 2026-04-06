# Design System Inspiration of Bus Group

## 1. Visual Theme & Atmosphere

Bus Group reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #090a08, #626c51, and accent notes from #8a9675. Cool portfolio interface for a cool CGI studio. Feels like browsing some kind of new Instagram interface for trendy graphic designers.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Diatype Pre, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #090a08, #626c51, #8a9675, #4a5436
- Typography stack: Diatype Pre
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #090a08 - canvas / dominant background
- Color 2: #626c51 - primary text or opposing surface
- Color 3: #8a9675 - accent / interactive signal
- Color 4: #4a5436 - supporting surface or hover state
- Color 5: #e6ede4 - supporting surface or hover state
- Color 6: #162659 - supporting surface or hover state
- Color 7: #9fa891 - supporting surface or hover state
- Color 8: #798564 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Diatype Pre

### Hierarchy Snapshot
- Heading sample: 34px / weight 700 / letter-spacing 0.17px
- Body sample: 45px / weight 400 / line-height 51.75px
- Button sample: 14px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgba(16, 16, 16, 0.7) text.
- Links inherit rgb(16, 16, 16) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Diatype Pre in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#090a08) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, graphic-design) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Diatype Pre consistently for headlines and interface labels.
- Keep the palette anchored to #090a08, #626c51, and #8a9675.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, graphic-design.
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

> Build a responsive landing page inspired by Bus Group. Keep the palette centered on #090a08, #626c51, and #8a9675. Use Diatype Pre for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/bus-group)
- Live site: https://bus.group/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
