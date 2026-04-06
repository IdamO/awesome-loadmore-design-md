# Design System Inspiration of AWGE

## 1. Visual Theme & Atmosphere

AWGE reads as sonic pacing, retro-computing cues. The live capture resolves to a dark-leaning system built around #65635c, #b2aeac, and accent notes from #181718. A$AP Rocky's creative agency. Is this a retro video game? A vintage flash website? an old TV show made interactive? Can't say. Whatever you call it, it's brilliant.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Font Awesome 5 Brands, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #65635c, #b2aeac, #181718, #534c39
- Typography stack: Font Awesome 5 Brands, Font Awesome 5 Free, VideoJS
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #65635c - canvas / dominant background
- Color 2: #b2aeac - primary text or opposing surface
- Color 3: #181718 - accent / interactive signal
- Color 4: #534c39 - supporting surface or hover state
- Color 5: #8e8970 - supporting surface or hover state
- Color 6: #cacaca - supporting surface or hover state
- Color 7: #867a65 - supporting surface or hover state
- Color 8: #c0bbbc - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Font Awesome 5 Brands
- Secondary: Font Awesome 5 Free
- Support: VideoJS
- Support: Press Start 2P
- Support: Jura
- Support: Kanit-Klaviyo-Hosted

### Hierarchy Snapshot
- Heading sample: 32px / weight 400 / letter-spacing normal
- Body sample: 16px / weight 400 / line-height normal
- Button sample: 14.4px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(255, 255, 255) text.
- Links inherit rgb(0, 0, 238) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Font Awesome 5 Brands in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#65635c) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (music, retro, e-commerce) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Font Awesome 5 Brands consistently for headlines and interface labels.
- Keep the palette anchored to #65635c, #b2aeac, and #181718.
- Preserve the experimental posture signaled by the loadmo.re tags: music, retro, e-commerce.
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

> Build a responsive landing page inspired by AWGE. Keep the palette centered on #65635c, #b2aeac, and #181718. Use Font Awesome 5 Brands for headlines, preserve the sonic pacing, retro-computing cues mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/awge)
- Live site: https://www.awge.com/
- Credits: Alex shortt
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
