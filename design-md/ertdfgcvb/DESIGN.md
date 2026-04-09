# Design System Inspiration of ertdfgcvb

## 1. Visual Theme & Atmosphere

ertdfgcvb reads as retro-computing cues. The live capture resolves to a dark-leaning system built around #020202, #151515, and accent notes from #252525. Enter the matrix with this experimental micro website.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Simple Console, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #020202, #151515, #252525, #373737
- Typography stack: Simple Console
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. World Systems & Archetype

### World Systems
- Primary: Cozy Desktop - tags include retro; tags include portfolio; archetype affinity: desktop shell world
- Secondary: Collage Core - tags include retro

### Interaction Archetype
- Archetype: Desktop Shell World (68% confidence)
- Why: tags include retro; tags include portfolio
- Core verbs: open, drag, shuffle
- Inputs: drag, tap, click



## 3. Color Palette & Roles

- Color 1: #020202 - canvas / dominant background
- Color 2: #151515 - primary text or opposing surface
- Color 3: #252525 - accent / interactive signal
- Color 4: #373737 - supporting surface or hover state
- Color 5: #474747 - supporting surface or hover state
- Color 6: #565656 - supporting surface or hover state
- Color 7: #646464 - supporting surface or hover state
- Color 8: #747474 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: Simple Console

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 19px
- Button sample: n/a / weight n/a

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#020202) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (animation, retro, portfolio) imply the system is intentionally non-generic.
- Buttons tend toward transparent backgrounds with inherit text, and links inherit rgb(240, 240, 240) as the interaction signal.

## 6. Interaction Mechanics

- Primary model: desktop_shell_world
- Navigation structure: hub / wayfinding ambient / friction medium
- Navigation model: Users move between windows or objects instead of scrolling through one flat document.
- State model: Shell at rest -> open or focus window -> inspect content -> shuffle or close.
- Must-keep mechanic: Navigation happens through windows, icons, folders, panels, or desktop objects; the chrome is part of the fiction.

## 7. Motion System

- Density: medium
- Cadence: event-driven
- Triggers: pointer
- Transition types: shuffle, snap, focus-lift
- Physics level: light
- Motion recipe:
  - Use window open and close snaps.
  - Use drag inertia sparingly and focus elevation clearly.
  - Use subtle CRT or idle ambient loops only as background texture.

## 8. Spatial Model

- Space type: layered-2d
- Camera behavior: fixed
- Depth cues: occlusion, scale
- HUD layering: overlay
- Render tier: dom
- Primary depth cue in capture: flat surfaces / contrast-only separation

## 9. Participation & State

- Participation mode: customize
- Persistence: session
- Inputs to preserve: drag, tap, click
- Reset/save posture: Default to resettable, lightweight state changes.

## 10. Sound & Sensor Behavior

- Audio role: none
- Audio triggers: none
- Controls: none
- Sync: none
- Required APIs or platform hooks: none

## 11. Implementation Checklist

- Complexity: high
- Required APIs: none
- Must-have mechanics:
  - Make z-order, focus, and close states unambiguous.
  - Keep the fiction warm and usable, not ironic.
  - Use persistence selectively so revisits feel lived-in.
  - The capture suggests anchored framing or sticky context; preserve that orientation device in the rebuild.
- Nice-to-have embellishments:
  - tags include retro
  - tags include portfolio
- Mobile fallback: Translate the window system into a card stack, bottom drawer, or tabbed shell while preserving the desktop fiction in the chrome.
- Fallback path: stacked-shell, reduced-motion
- Manual validation:
  - Opening and focusing windows is intuitive.
  - Desktop chrome supports the content instead of obscuring it.
  - Mobile keeps the fiction without impossible drag behavior.

## 12. Do's and Don'ts

### Do
- Use Simple Console consistently for headlines and interface labels.
- Keep the palette anchored to #020202, #151515, and #252525.
- Preserve the experimental posture signaled by the archive tags: animation, retro, portfolio.
- Build separate desktop and mobile compositions instead of pretending one layout can fake both.
- Use the inferred mechanics schema as the implementation baseline before adding ornament.

### Don't
- Don't genericize the interface into a default SaaS landing page.
- Don't introduce rounded, pastel, or glassmorphism defaults unless the captured site already does.
- Don't replace the extracted font stack with Inter/Roboto/system as the main voice unless no custom stack loaded.
- Don't ignore the mobile fallback just because the desktop interaction is more fun.
- Don't copy screenshots literally when the repo only has archival capture evidence.

## 13. Responsive Behavior

- Desktop capture uses screenshots/desktop.jpg as the visual baseline.
- Mobile capture uses screenshots/mobile.jpg as the mobile baseline.
- Keep touch targets oversized on mobile and allow the background system to dominate the viewport.
- Implement mobile as: Translate the window system into a card stack, bottom drawer, or tabbed shell while preserving the desktop fiction in the chrome..
- If the live site failed to capture, fall back to the archival poster on the loadmo.re post page before inventing missing behavior.

## 14. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build this as a Cozy Desktop page with a secondary cue from Collage Core using the Desktop Shell World interaction model. Keep Simple Console as the voice anchor, preserve the palette around #020202, #151515, #252525, drive the page through drag, tap, click, and implement the mobile fallback as: Translate the window system into a card stack, bottom drawer, or tabbed shell while preserving the desktop fiction in the chrome.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/ertdfgcvb)
- Live site: https://ertdfgcvb.xyz
- Credits: Andreas Gysin
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
