# Blind Agent Evals

These builds test whether the repo can guide a fresh coding agent toward a strong result without naming exact source sites.

## Current evals

- `manual-audit-2026-04-06.md` — representative human audit of the new mechanics layer across core archetypes
- `blind-build-01` — SCENEKIT, built from a four-reference stack discovered by the worker agent
- `blind-build-02` — RAVEHOUSE, built from a different three-reference stack discovered by a separate worker agent
- `blind-build-relic-music-03` — RELIC TAPE ARCHIVE, built by a blind worker using the repo's poster-to-website and `musicTransposition` guidance instead of a named-site handoff
- `blind-build-fox-savee-04` — first asset-drop blind eval; useful as a retrieval miss because the worker still routed into older music/culture references instead of the new commerce/archive lane
- `blind-build-fox-savee-05` — second asset-drop blind eval after adding `collections/design-asset-commerce.md`; the worker pulled Fox Rockett Studio + Savee Marketplace without a named-site handoff

## What these prove

- the repo can be navigated by an unfamiliar agent
- the retrieval path is legible enough for synthesis, not just browsing
- the result can be a recombination instead of a copy of one source site
- domain remixes can be encoded in the repo itself, then retrieved and executed without extra human explanation
- retrieval gaps can be found with blind evals, then corrected with new starter packs and prompt surfaces
