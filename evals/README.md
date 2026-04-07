# Blind Agent Evals

These builds test whether the repo can guide a fresh coding agent toward a strong result without naming exact source sites.

## Current evals

- `blind-build-01` — SCENEKIT, built from a four-reference stack discovered by the worker agent
- `blind-build-02` — RAVEHOUSE, built from a different three-reference stack discovered by a separate worker agent

## What these prove

- the repo can be navigated by an unfamiliar agent
- the retrieval path is legible enough for synthesis, not just browsing
- the result can be a recombination instead of a copy of one source site
