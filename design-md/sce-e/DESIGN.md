# Design System Inspiration of Sce.e

## 1. Visual Theme & Atmosphere

Sce.e reads as playful interaction, sonic pacing. The live capture resolves to a light-leaning system built around #e8e3df, #030403, and accent notes from #a2a09d. Experience experimental audio-reactive visuals where abstract shapes sync with minimal techno drum patterns, all crafted with JavaScript.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers __Noto_Sans_JP_a84b9a, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #e8e3df, #030403, #a2a09d, #60605e
- Typography stack: __Noto_Sans_JP_a84b9a, __Noto_Sans_JP_Fallback_a84b9a, __Noto_Sans_JP_4f79c5
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #e8e3df - canvas / dominant background
- Color 2: #030403 - primary text or opposing surface
- Color 3: #a2a09d - accent / interactive signal
- Color 4: #60605e - supporting surface or hover state
- Color 5: #187542 - supporting surface or hover state
- Color 6: #135d33 - supporting surface or hover state
- Color 7: #c2bcb9 - supporting surface or hover state
- Color 8: #c8c2bc - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: __Noto_Sans_JP_a84b9a
- Secondary: __Noto_Sans_JP_Fallback_a84b9a
- Support: __Noto_Sans_JP_4f79c5
- Support: __Noto_Sans_JP_Fallback_4f79c5
- Support: __Inconsolata_482696
- Support: __Inconsolata_Fallback_482696

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 20px / weight 900 / line-height 28px
- Button sample: 20px / weight 900

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit #a2a09d as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps __Noto_Sans_JP_a84b9a in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#e8e3df) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (sound-design, colorful, playful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use __Noto_Sans_JP_a84b9a consistently for headlines and interface labels.
- Keep the palette anchored to #e8e3df, #030403, and #a2a09d.
- Preserve the experimental posture signaled by the loadmo.re tags: sound-design, colorful, playful.
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

> Build a responsive landing page inspired by Sce.e. Keep the palette centered on #e8e3df, #030403, and #a2a09d. Use __Noto_Sans_JP_a84b9a for headlines, preserve the playful interaction, sonic pacing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/sce-e)
- Live site: https://www.ssccee.com/
- Credits: sce.e Akira Hayasaka
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
