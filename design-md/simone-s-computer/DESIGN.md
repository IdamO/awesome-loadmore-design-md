# Design System Inspiration of Simone's Computer

## 1. Visual Theme & Atmosphere

Simone's Computer reads as retro-computing cues. The live capture resolves to a dark-leaning system built around #171712, #e9e9ea, and accent notes from #284826. Visiting Simone Mazulli's website from a mobile feels weird: as if Windows 95 was running on a 2020 smartphone. Huh!!

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #171712, #e9e9ea, #284826, #9798b1
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Cozy Desktop - tags include retro; tags include portfolio; description mentions windows
- Secondary: Collage Core - tags include retro

### Interaction Archetype
- Archetype: Desktop Shell World (96% confidence)
- Why: tags include retro; tags include portfolio; description mentions windows; description mentions window
- Core verbs: open, drag, shuffle
- Inputs: drag, tap, click



## 3. Color Palette & Roles

- Color 1: #171712 - canvas / dominant background
- Color 2: #e9e9ea - primary text or opposing surface
- Color 3: #284826 - accent / interactive signal
- Color 4: #9798b1 - supporting surface or hover state
- Color 5: #294b4b - supporting surface or hover state
- Color 6: #525359 - supporting surface or hover state
- Color 7: #717195 - supporting surface or hover state
- Color 8: #4b502c - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height normal
- Button sample: 16px / weight 400

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#171712) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (retro, portfolio) imply the system is intentionally non-generic.
- Buttons tend toward rgb(161, 163, 202) backgrounds with rgb(1, 6, 1) text, and links inherit rgb(0, 0, 0) as the interaction signal.

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
- Primary depth cue in capture: rgb(164, 167, 200) 1px 1px 0px 1px inset, rgb(91, 87, 161) -1px -1px 0px 1px inset

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
- Nice-to-have embellishments:
  - tags include retro
  - tags include portfolio
  - description mentions windows
  - description mentions window
  - description mentions computer
  - title mentions computer
- Mobile fallback: Translate the window system into a card stack, bottom drawer, or tabbed shell while preserving the desktop fiction in the chrome.
- Fallback path: stacked-shell, reduced-motion
- Manual validation:
  - Opening and focusing windows is intuitive.
  - Desktop chrome supports the content instead of obscuring it.
  - Mobile keeps the fiction without impossible drag behavior.

## 12. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #171712, #e9e9ea, and #284826.
- Preserve the experimental posture signaled by the archive tags: retro, portfolio.
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

> Build this as a Cozy Desktop page with a secondary cue from Collage Core using the Desktop Shell World interaction model. Keep the extracted primary font as the voice anchor, preserve the palette around #171712, #e9e9ea, #284826, drive the page through drag, tap, click, and implement the mobile fallback as: Translate the window system into a card stack, bottom drawer, or tabbed shell while preserving the desktop fiction in the chrome.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/simone-s-computer)
- Live site: https://simone.computer
- Credits: Simone Marzulli
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
