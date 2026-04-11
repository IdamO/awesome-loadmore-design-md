# Arte Collective Poster Corpus

This is the static-art-to-website wing of the repo.

## What is in here

- `76` unique Arte Collective poster concepts converted into browser-native website systems
- source coverage across:
  - `collections/arte-aesthetic.md`
  - `collections/arte-technology.md`
  - `collections/arte-minimalism.md`
- each entry includes:
  - `DESIGN.md`
  - `README.md`
  - `meta.json`
  - `preview.html`
  - `preview-dark.html`
  - desktop and mobile screenshots

## How to use it

1. Pick the source family:
   - `arte-aesthetic.md` for dreamy, atmospheric, or object-led worlds
   - `arte-technology.md` for signal-rich, machine-like, or HUD-style worlds
   - `arte-minimalism.md` for restraint, negative space, and calm spatial staging
2. Open the chosen `design-md/arte-*/DESIGN.md`
3. Use the `Agent Prompt Guide`, `Interaction Mechanics`, `Motion System`, and `Mobile fallback`
4. If the entry exposes a domain remix block in `meta.json`, prefer that over the generic poster interpretation

## Key special case

- `design-md/arte-relic/` includes a built-in `musicTransposition`
- that entry also ships generated music-object assets under:
  - `design-md/arte-relic/assets/generated/`
- blind eval proving repo-guided generation exists at:
  - `evals/blind-build-relic-music-03/`

## Representative examples

- `design-md/arte-artifact/` — object-led archive room
- `design-md/arte-coding-brain/` — club-instrument HUD world
- `design-md/arte-censor/` — phrase-stack manifesto surface
- `design-md/arte-minimal-space-blue-dream/` — atmospheric spatial field
- `design-md/arte-relic/` — archive-to-music transposition with generated assets
