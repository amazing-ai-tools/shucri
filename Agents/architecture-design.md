# Architecture Design — shucri

Use this skill to shape product and system architecture.

## Current State
- Single-page static app: Vite + React + TypeScript, deployed to Azure Static Web Apps.
- No backend, no database, no auth. All runtime config arrives via `VITE_*` build env vars.
- The product itself is undefined — this is a fresh template.

## Decisions To Make
- **What is shucri?** The product direction must be set before structural work begins.
- **Static vs. backend:** Stay static as long as possible. When server logic is genuinely needed, prefer **Azure Static Web Apps managed Functions** (Node 22 / TypeScript) in an `api/` folder over standing up separate infra.
- **State & data:** Introduce client state libraries or persistence only when a feature demands them; don't pre-build.
- **Routing:** Add a router only when there's more than one real screen.

## Principles
- Keep the foundation clean and deployable at all times.
- Add complexity only in response to a concrete requirement.
- Document any architecture change in the repo and notify the squad (Gandalf/Aragorn).
