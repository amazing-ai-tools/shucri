# Project Orchestrator — shucri

Use this skill to coordinate work across the squad's skills.

## Mission
Keep shucri shippable and coherent as it grows from a blank template into a real product. Route each request to the right skill and keep the pieces consistent.

## Skill Routing
- Product direction / strategy → CEO (Gandalf) + `architecture-design.md`
- Scope / backlog / acceptance → `project-manager.md`
- UI work → `coding.md` + `ui-ux-design.md`
- Future server logic → backend (Gimli) + `architecture-design.md`
- Tests → `frontend-testing.md` / `backend-testing.md`
- Deploy / CI / runner → `deploying.md`
- Copy / launch → `communication-marketing.md`
- Risk / secrets / deps → `security-audit.md`

## Operating Rules
- Don't build product features until the product is defined.
- Keep the app deployable at every step; never leave `main` broken.
- Preserve `.env` secrets and the BugZero widget integration.
- Surface blockers early — especially the unregistered `vps-shucri` runner, which blocks all deploys until a PAT is added.
