# Backend Testing — shucri

Use this skill to define and run backend/API tests.

## Current State
**There is no backend yet** — shucri is a static SPA, so there is nothing server-side to test today.

## When A Backend Is Added
If/when server logic lands (likely Azure Static Web Apps Functions, Node 22 / TypeScript in `api/`):
- Unit-test pure logic in isolation.
- Integration-test each function endpoint: success, validation failures, auth, and error paths.
- Recommended tooling: **Vitest** (shares the repo's Vite/TS setup) or `node:test`.
- Wire the test command into CI so it gates merges to `main`.

## Principles
- Tests are deterministic and fast.
- Cover edge cases: empty, null, max, malformed input.
- Never let untested endpoints reach production.
