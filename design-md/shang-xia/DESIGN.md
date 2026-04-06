# Design System Inspiration of Shang Xia

## 1. Visual Theme & Atmosphere

Shang Xia reads as restrained minimalism, editorial fashion energy. The live capture resolves to a light-leaning system built around #e6e8e4, #281a0e, and accent notes from #9cae99. Unusual navigation to explore the collection. Minimalist grid-system and sleek transitions.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Inter, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #e6e8e4, #281a0e, #9cae99, #778b6d
- Typography stack: Inter, Proza Libre, Noto Sans Regular
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #e6e8e4 - canvas / dominant background
- Color 2: #281a0e - primary text or opposing surface
- Color 3: #9cae99 - accent / interactive signal
- Color 4: #778b6d - supporting surface or hover state
- Color 5: #b0c7b5 - supporting surface or hover state
- Color 6: #5f5822 - supporting surface or hover state
- Color 7: #637055 - supporting surface or hover state
- Color 8: #899675 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Inter
- Secondary: Proza Libre
- Support: Noto Sans Regular
- Support: GTStandard-M

### Hierarchy Snapshot
- Heading sample: 48px / weight 500 / letter-spacing 2px
- Body sample: 12px / weight 700 / line-height 16px
- Button sample: 15px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(34, 34, 34) text.
- Links inherit rgb(34, 34, 34) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Inter in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#e6e8e4) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (fashion, clean-ui, minimal) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Inter consistently for headlines and interface labels.
- Keep the palette anchored to #e6e8e4, #281a0e, and #9cae99.
- Preserve the experimental posture signaled by the loadmo.re tags: fashion, clean-ui, minimal.
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

> Build a responsive landing page inspired by Shang Xia. Keep the palette centered on #e6e8e4, #281a0e, and #9cae99. Use Inter for headlines, preserve the restrained minimalism, editorial fashion energy mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/shang-xia)
- Live site: https://www.shangxia.com/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
