# Deploying — shucri

Use this skill for CI/CD, hosting, and production rollout.

## Infrastructure
- Host: Azure Static Web Apps
- Domain: `shucri.app.amazing-ai.tools`
- Repo: `https://github.com/amazing-ai-tools/shucri`
- Runner label: `vps-shucri`
- Workflow: `.github/workflows/deploy.yml` (triggers on push to `main` + `workflow_dispatch`)

## Required GitHub Configuration
- Variables: `APP_DISPLAY_NAME`, `APP_DOMAIN`, `BUGZERO_APP_KEY`, `BUGZERO_WIDGET_URL`, `RUNNER_LABEL`
- Secret: `AZURE_STATIC_WEB_APPS_API_TOKEN`

## Pipeline Steps
1. `actions/checkout@v4`
2. `actions/setup-node@v4` (Node 22, npm cache)
3. `npm ci --include=dev`
4. `npm run build` with `VITE_*` env from repo variables
5. `Azure/static-web-apps-deploy@v1` uploads `dist/`

## Commands
- Install: `npm ci`
- Build: `npm run build`
- Local preview: `npm run preview`

## Notes
- ⚠️ Self-hosted runner registration was **skipped during provisioning** because no GitHub PAT was supplied. Until a runner with label `vps-shucri` is registered, `deploy.yml` runs will queue with no runner. To register: add `GH_TOKEN=<pat>` to `.env`, set up `/home/ubuntu/actions-runner-shucri/` (systemd unit `actions.runner.amazing-ai-tools-shucri.vps-shucri.service`), and set the `RUNNER_LABEL` repo variable to `vps-shucri`.
- Never commit `.env` or deployment tokens.
