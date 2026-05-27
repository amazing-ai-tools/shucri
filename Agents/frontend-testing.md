# Frontend Testing — shucri

Use this skill to validate the frontend build and behavior.

## Current State
- The only gate today is the build: `npm run build` (`tsc && vite build`) must succeed with no type errors.
- No component or E2E test runner is configured yet — setting one up is the first testing deliverable.

## Recommended Setup
- **Vitest** + **@testing-library/react** for unit/component tests (shares Vite config).
- **Playwright** for E2E against `npm run dev` / the built `dist/`.
- Add a `test` script to `package.json` and a CI step so tests gate `main`.

## What To Cover
- `App` renders without crashing.
- `ensureBugZeroWidget` injects the script only when `VITE_BUGZERO_APP_KEY` is set and not already present (no double-injection).
- Env-var fallbacks (`appName`, `appDomain`) behave when vars are missing.
- Once real screens exist: critical user flows, loading/empty/error states, keyboard + ARIA accessibility.

## Commands
- `npm run build` — type-check + production build (run after every meaningful change)
- `npm run preview` — serve the built app locally
- `npm test` — once a runner is configured
