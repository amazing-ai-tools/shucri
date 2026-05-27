# Coding — shucri

Use this skill for focused implementation work in the shucri repository.

## Stack
- React 18 + TypeScript 5 (strict) + Vite 5
- No backend yet — pure static SPA
- lucide-react for icons
- Plain CSS in `src/styles.css`
- Frontend deployment through Azure Static Web Apps

## Defaults
- Read the relevant file before editing.
- Keep components typed and small. No `any`.
- Avoid adding routing, state libraries, or CSS frameworks unless the feature clearly needs them.
- Keep secrets out of the client bundle — only `VITE_*` public config is allowed in the frontend.
- Preserve the deploy-time BugZero widget integration (`ensureBugZeroWidget`).
- Run `npm run build` after meaningful changes. Add `npm test` once a test runner is set up.

## Key Files
- `src/main.tsx` — app entry + the single placeholder `App` component
- `src/styles.css` — global styles
- `src/vite-env.d.ts` — Vite/TS ambient types
- `index.html`
- `package.json`
- `tsconfig.json`
