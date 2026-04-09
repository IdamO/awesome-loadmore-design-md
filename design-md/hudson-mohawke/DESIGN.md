# Design System Inspiration of Hudson Mohawke

## 1. Visual Theme & Atmosphere

Hudson Mohawke reads as sonic pacing. The live capture resolves to a dark-leaning system built around #345012, #6592f2, and accent notes from #dee3eb. Fun early 2000s Windows XP user interface vibe, including a rude Clippy character (the paperclip guy on Microsoft Word).

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Icons, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #345012, #6592f2, #dee3eb, #6b9317
- Typography stack: Icons, Fragment Mono, Press Start 2P
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Cozy Desktop - description mentions windows; archetype affinity: desktop shell world
- Secondary: Club Instrument - tags include music; tags include sound-design

### Interaction Archetype
- Archetype: Desktop Shell World (81% confidence)
- Why: description mentions windows; description mentions window
- Core verbs: open, drag, shuffle
- Inputs: drag, tap, click



## 3. Color Palette & Roles

- Color 1: #345012 - canvas / dominant background
- Color 2: #6592f2 - primary text or opposing surface
- Color 3: #dee3eb - accent / interactive signal
- Color 4: #6b9317 - supporting surface or hover state
- Color 5: #93b1ee - supporting surface or hover state
- Color 6: #1d64df - supporting surface or hover state
- Color 7: #4e6b17 - supporting surface or hover state
- Color 8: #b2c7f0 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: Icons
- Secondary: Fragment Mono
- Support: Press Start 2P
- Support: itc-avant-garde-gothic-pro
- Support: comic-sans-ms
- Support: tondo
- Support: tondo-signage
- Support: futura-pt

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 14.112px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#345012) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (net.art, music, sound-design) imply the system is intentionally non-generic.
- Buttons tend toward transparent backgrounds with inherit text, and links inherit rgba(255, 255, 255, 0.9) as the interaction signal.

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

- Audio role: ambient
- Audio triggers: entry
- Controls: mute
- Sync: loose
- Required APIs or platform hooks: none

## 11. Implementation Checklist

- Complexity: high
- Required APIs: none
- Must-have mechanics:
  - Make z-order, focus, and close states unambiguous.
  - Keep the fiction warm and usable, not ironic.
  - Use persistence selectively so revisits feel lived-in.
- Nice-to-have embellishments:
  - description mentions windows
  - description mentions window
- Mobile fallback: Translate the window system into a card stack, bottom drawer, or tabbed shell while preserving the desktop fiction in the chrome.
- Fallback path: stacked-shell, reduced-motion
- Manual validation:
  - Opening and focusing windows is intuitive.
  - Desktop chrome supports the content instead of obscuring it.
  - Mobile keeps the fiction without impossible drag behavior.

## 12. Do's and Don'ts

### Do
- Use Icons consistently for headlines and interface labels.
- Keep the palette anchored to #345012, #6592f2, and #dee3eb.
- Preserve the experimental posture signaled by the archive tags: net.art, music, sound-design.
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

> Build this as a Cozy Desktop page with a secondary cue from Club Instrument using the Desktop Shell World interaction model. Keep Icons as the voice anchor, preserve the palette around #345012, #6592f2, #dee3eb, drive the page through drag, tap, click, and implement the mobile fallback as: Translate the window system into a card stack, bottom drawer, or tabbed shell while preserving the desktop fiction in the chrome.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/hudson-mohawke)
- Live site: http://www.hudsonmohawke.com/
- Credits: DXR Zone
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used
