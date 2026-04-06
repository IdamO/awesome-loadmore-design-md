# Design System Inspiration of Nike - Swoosh

## 1. Visual Theme & Atmosphere

Nike - Swoosh reads as spatial depth. The live capture resolves to a dark-leaning system built around #202122, #ab8d65, and accent notes from #61645e. Loading page where users can interact with a 3D nike swoosh, made from particles which can be expanded and contracted on tap.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers __fontRoobert_71c26d, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #202122, #ab8d65, #61645e, #9a9b93
- Typography stack: __fontRoobert_71c26d, __fontRoobert_Fallback_71c26d, __fontHelveticaMono_1ca649
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #202122 - canvas / dominant background
- Color 2: #ab8d65 - primary text or opposing surface
- Color 3: #61645e - accent / interactive signal
- Color 4: #9a9b93 - supporting surface or hover state
- Color 5: #6c4f2f - supporting surface or hover state
- Color 6: #96734f - supporting surface or hover state
- Color 7: #4b3526 - supporting surface or hover state
- Color 8: #8d6433 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: __fontRoobert_71c26d
- Secondary: __fontRoobert_Fallback_71c26d
- Support: __fontHelveticaMono_1ca649
- Support: __fontHelveticaMono_Fallback_1ca649
- Support: swiper-icons

### Hierarchy Snapshot
- Heading sample: 80px / weight 700 / letter-spacing normal
- Body sample: 14px / weight 500 / line-height 21px
- Button sample: 14px / weight 500

## 4. Component Stylings

### Web
- Buttons tend toward rgb(17, 17, 17) backgrounds with rgb(255, 255, 255) text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 6px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps __fontRoobert_71c26d in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#202122) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (3d-space, tactile) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 6px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use __fontRoobert_71c26d consistently for headlines and interface labels.
- Keep the palette anchored to #202122, #ab8d65, and #61645e.
- Preserve the experimental posture signaled by the loadmo.re tags: 3d-space, tactile.
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

> Build a responsive landing page inspired by Nike - Swoosh. Keep the palette centered on #202122, #ab8d65, and #61645e. Use __fontRoobert_71c26d for headlines, preserve the spatial depth mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/nike-swoosh)
- Live site: https://www.swoosh.nike/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
