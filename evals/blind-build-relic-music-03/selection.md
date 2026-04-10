# Reference Selection

I navigated the repo the way the agent guide intended:

1. `AGENTS.md` for the retrieval strategy and the repo's design-encoding model.
2. `playbooks/poster-to-website.md`, `playbooks/interaction-archetypes.md`, and `playbooks/validation-rubric.md` to lock the poster-to-website translation rules before building.
3. `collections/music-tech.md` to confirm the music-tech starter pack and the page tone for a musical product surface.
4. `design-md/arte-relic/DESIGN.md`, `design-md/arte-relic/README.md`, and `design-md/arte-relic/meta.json` to extract the exact poster palette, typography attitude, mechanics, and the built-in music transposition prompt.
5. `design-md/arte-relic/preview-dark.html` and the screenshot assets referenced by the README to sanity-check the visual composition and keep the rebuild anchored in the repo's own concept capture.
6. `evals/blind-build-01/selection.md` and `evals/blind-build-02/selection.md` to mirror the existing blind-eval format without copying their reference stack.

## What the repo encodes

- `collections/*.md` are the retrieval front door: they map a domain like music-tech to a starter pack of relevant references and recommend which world system / archetype to prioritize.
- `design-md/*/DESIGN.md` is the human-readable design system narrative: palette, type, depth model, motion, mobile fallback, and implementation posture.
- `design-md/*/README.md` is the compact source summary: it names the source, capture status, and the files to inspect first.
- `design-md/*/meta.json` is the machine-readable prompt payload: source metadata, extracted tokens, mechanics schema, validation checklist, and `implementationPrompt` / `musicTransposition` fields.

## Picked references

- `design-md/arte-relic` — the visual and structural anchor. I used it for the dark archive palette, the condensed headline attitude, the shallow 3D chamber logic, and the explicit Relic-to-music transposition already encoded in `meta.json`.
- `collections/music-tech.md` — the domain filter. I used it to keep the build in the music-tech lane and to avoid drifting into generic fashion/editorial or SaaS polish.
- `playbooks/poster-to-website.md` — the translation rulebook. I used it to force decomposition of the poster into browser-native layers instead of pasting a poster image into a hero block.
- `playbooks/interaction-archetypes.md` — the mechanic selection layer. I used it to preserve the spatial/exhibition energy while transposing the hero object into a music-tech relic.

## Why this mix

- `Arte Relic` supplies the exact aura, palette, and structural discipline the task asked for.
- `Music Tech` keeps the page from becoming a literal art poster clone and gives the result a credible domain shift.
- `Poster to Website` prevents the common failure mode where a poster image just becomes a framed screenshot.
- `Interaction Archetypes` keeps the whole page organized around a single dominant world model rather than a pile of decorative sections.

## What I intentionally avoided

- Copying the poster crop or building a frame around it.
- Reusing the prior eval reference stacks.
- Flattening the page into a generic SaaS landing page with music-themed labels.
