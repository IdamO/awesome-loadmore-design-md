# Design System Inspiration of Blob Opera

## 1. Visual Theme & Atmosphere

Blob Opera reads as playful interaction, sonic pacing, spatial depth. The live capture resolves to a dark-leaning system built around #080302, #5b5a59, and accent notes from #e1e4e4. Impressive and fun interface which lets you play with singing 3D blobs. Opera singers have trained a machine learning algorithm to sing to create this.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Google Sans, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #080302, #5b5a59, #e1e4e4, #a19e99
- Typography stack: Google Sans, Google Sans Text, Google Sans Display
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #080302 - canvas / dominant background
- Color 2: #5b5a59 - primary text or opposing surface
- Color 3: #e1e4e4 - accent / interactive signal
- Color 4: #a19e99 - supporting surface or hover state
- Color 5: #5f2724 - supporting surface or hover state
- Color 6: #1c76ec - supporting surface or hover state
- Color 7: #a9cbec - supporting surface or hover state
- Color 8: #1b569d - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Google Sans
- Secondary: Google Sans Text
- Support: Google Sans Display
- Support: Google Sans Mono
- Support: Google Sans Flex
- Support: Material Icons Extended

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 12px / weight 400 / line-height 16px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(60, 64, 67) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Google Sans in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#080302) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (music, playful, 3d-space) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: 50%.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Google Sans consistently for headlines and interface labels.
- Keep the palette anchored to #080302, #5b5a59, and #e1e4e4.
- Preserve the experimental posture signaled by the loadmo.re tags: music, playful, 3d-space.
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

> Build a responsive landing page inspired by Blob Opera. Keep the palette centered on #080302, #5b5a59, and #e1e4e4. Use Google Sans for headlines, preserve the playful interaction, sonic pacing, spatial depth mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/blob-opera)
- Live site: https://artsandculture.google.com/experiment/blob-opera/AAHWrq360NcGbw?cp=e30
- Credits: David Li
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
