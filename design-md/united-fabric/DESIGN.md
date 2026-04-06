# Design System Inspiration of United Fabric

## 1. Visual Theme & Atmosphere

United Fabric reads as restrained minimalism. The live capture resolves to a dark-leaning system built around #515050, #442122, and accent notes from #1a1b1e. Spin the globe and click on names to receive messages from around the world.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Inter, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #515050, #442122, #1a1b1e, #8f8f8f
- Typography stack: Inter, Inter Fallback, Karla
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #515050 - canvas / dominant background
- Color 2: #442122 - primary text or opposing surface
- Color 3: #1a1b1e - accent / interactive signal
- Color 4: #8f8f8f - supporting surface or hover state
- Color 5: #4c394a - supporting surface or hover state
- Color 6: #a83439 - supporting surface or hover state
- Color 7: #cd6468 - supporting surface or hover state
- Color 8: #d3888b - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Inter
- Secondary: Inter Fallback
- Support: Karla
- Support: Karla Fallback
- Support: Roboto
- Support: Roboto Fallback

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height normal
- Button sample: 13.3333px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(26, 26, 26) text.
- Links inherit #1a1b1e as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Inter in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#515050) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (minimal, participative) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Inter consistently for headlines and interface labels.
- Keep the palette anchored to #515050, #442122, and #1a1b1e.
- Preserve the experimental posture signaled by the loadmo.re tags: minimal, participative.
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

> Build a responsive landing page inspired by United Fabric. Keep the palette centered on #515050, #442122, and #1a1b1e. Use Inter for headlines, preserve the restrained minimalism mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/united-fabric)
- Live site: https://unitedfabric.org/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
