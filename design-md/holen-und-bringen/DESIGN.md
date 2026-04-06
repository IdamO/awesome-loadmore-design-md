# Design System Inspiration of Holen Und Bringen

## 1. Visual Theme & Atmosphere

Holen Und Bringen reads as exhibition-like framing. The live capture resolves to a light-leaning system built around #e7f84b, #121210, and accent notes from #dddddd. Navigate through this dense informational website enhanced by a simple navigation and nice use of typography.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers slick, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #e7f84b, #121210, #dddddd, #9aa637
- Typography stack: slick, steinbeckregular, suisse_neuemedium
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #e7f84b - canvas / dominant background
- Color 2: #121210 - primary text or opposing surface
- Color 3: #dddddd - accent / interactive signal
- Color 4: #9aa637 - supporting surface or hover state
- Color 5: #5b6223 - supporting surface or hover state
- Color 6: #9f9f9e - supporting surface or hover state
- Color 7: #5e5e5d - supporting surface or hover state
- Color 8: #fa5704 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: slick
- Secondary: steinbeckregular
- Support: suisse_neuemedium
- Support: suisse_neuemedium_italic
- Support: suisse_neuelight

### Hierarchy Snapshot
- Heading sample: 106.56px / weight 400 / letter-spacing -4.32px
- Body sample: 18.72px / weight 400 / line-height 18.72px
- Button sample: 0px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgba(0, 0, 0, 0) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps slick in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#e7f84b) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (arts&culture) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use slick consistently for headlines and interface labels.
- Keep the palette anchored to #e7f84b, #121210, and #dddddd.
- Preserve the experimental posture signaled by the loadmo.re tags: arts&culture.
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

> Build a responsive landing page inspired by Holen Und Bringen. Keep the palette centered on #e7f84b, #121210, and #dddddd. Use slick for headlines, preserve the exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/holen-und-bringen)
- Live site: https://hub.werkleitz.de/
- Credits: Hub Werkleitz
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
