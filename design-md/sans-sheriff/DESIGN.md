# Design System Inspiration of Sans Sheriff

## 1. Visual Theme & Atmosphere

Sans Sheriff reads as playful interaction, type-led composition. The live capture resolves to a dark-leaning system built around #fc6462, #2dca38, and accent notes from #fcc63e. So this website presents a sans-serif font and they've made a game with a sheriff character whom can be shot. Don't you get it?!!

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Jaune Variable, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #fc6462, #2dca38, #fcc63e, #fbae92
- Typography stack: Jaune Variable, Jaune Mini, Jaune Midi
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fc6462 - canvas / dominant background
- Color 2: #2dca38 - primary text or opposing surface
- Color 3: #fcc63e - accent / interactive signal
- Color 4: #fbae92 - supporting surface or hover state
- Color 5: #f80a07 - supporting surface or hover state
- Color 6: #0304f7 - supporting surface or hover state
- Color 7: #e7a550 - supporting surface or hover state
- Color 8: #f7c641 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Jaune Variable
- Secondary: Jaune Mini
- Support: Jaune Midi
- Support: Jaune Maxi
- Support: NaNJauneGX

### Hierarchy Snapshot
- Heading sample: 28.8px / weight 400 / letter-spacing normal
- Body sample: 22px / weight 900 / line-height 24.2px
- Button sample: 80px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(254, 198, 63) text.
- Links inherit rgb(254, 176, 147) as the interaction signal.
- Border radius trends: 24px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Jaune Variable in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fc6462) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (game, typography) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 16px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Jaune Variable consistently for headlines and interface labels.
- Keep the palette anchored to #fc6462, #2dca38, and #fcc63e.
- Preserve the experimental posture signaled by the loadmo.re tags: game, typography.
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

> Build a responsive landing page inspired by Sans Sheriff. Keep the palette centered on #fc6462, #2dca38, and #fcc63e. Use Jaune Variable for headlines, preserve the playful interaction, type-led composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/sans-sheriff)
- Live site: https://www.sanssheriff.wtf/
- Credits: NaN, Studio Triple, Johannes Neumeier
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
