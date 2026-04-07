# Motion Grammar

Motion is part of the brand layer. Treat it as grammar, not decoration.

## Motion roles

### Ambient
Used to keep the page alive when the user is not acting.

- examples: background drift, glow breathing, slow orbiting objects, tape flutter, noise movement
- duration: 8s to 20s
- easing: linear, gentle in-out, or custom low-energy curves
- rule: always subtle enough that copy remains readable

### Intent
Used to acknowledge hover, drag, focus, press, scrub, or selection.

- examples: card tilt, cursor-follow glow, slider stretch, button compression, object drag inertia
- duration: 120ms to 280ms
- easing: strong ease-out or spring
- rule: should confirm action, not show off

### Ceremonial
Used on page load, section entrances, mode switches, or launch moments.

- examples: oversized title reveal, tape line drawing on, room opening, object landing, section stack unfolding
- duration: 400ms to 1200ms
- easing: asymmetric curves with confidence, not generic fade-ins
- rule: one or two per page, not everywhere

### Navigational
Used to help users understand where they are moving.

- examples: sticky shifts, anchor travel, tab transitions, card expansion, list-to-detail morphs
- duration: 220ms to 520ms
- easing: preserve continuity, often ease-in-out or FLIP-style transforms
- rule: clarity before flourish

### Decay
Used on exit, dismissal, idle settling, or drag release.

- examples: settle wobble, blur fade, flicker out, overshoot then rest
- duration: 180ms to 600ms
- easing: spring or overshoot curves with restraint
- rule: especially useful for making interactions feel physical

## Motion systems worth using

- `motion/react` for layout, SVG, gesture, scroll, and ordinary authored animation
- `GSAP` for heavyweight timeline choreography, flip transitions, and page-scale sequences
- `Lenis` only when the page benefits from immersive scroll control; not by default
- `Rive` for interactive illustrated brand objects with explicit states
- `Matter.js` for pile, toss, drag, and collectible behavior that should feel physical
- `Tone.js` for subtle sonic feedback after user gesture

## Signature moves this repo should encourage

- draw-on scribbles and rules using SVG path animation
- slow drifting gradients behind a disciplined grid
- drag-and-release objects with believable settling
- editorial image crops that shift while text remains stable
- ticker bands that behave like signals, not generic marquees
- meter-like UI that gives launches a sense of live energy

## Signature moves this repo should discourage

- tiny hover microinteractions as the only motion language
- parallax for its own sake
- over-smoothed scroll with no conceptual reason
- every section animating in the same way
- generic staggered card reveals on every page

## Default timing cheatsheet

- tap/press: 120ms to 180ms
- hover: 160ms to 240ms
- card expand: 220ms to 360ms
- hero entrance: 700ms to 1100ms
- room transition: 420ms to 720ms
- ambient loop: 8s+

## Rule of one

Every page should have:

- one ambient system
- one interaction system
- one ceremonial entrance

If there are more than three motion ideas competing, choose the strongest and cut the rest.
