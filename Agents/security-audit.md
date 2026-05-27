# Security Audit — shucri

Use this skill to review security posture and harden the app.

## Scope
Vite + React + TypeScript static SPA on Azure Static Web Apps, deployed via GitHub Actions on a self-hosted runner.

## Focus Areas
- **Secrets:** Nothing sensitive in the client bundle. Only `VITE_*` *public* config belongs in the frontend. `AZURE_STATIC_WEB_APPS_API_TOKEN` and any future `GH_TOKEN` stay in GitHub secrets / `.env` (chmod 600, `.gitignore`d). Confirm `.env` is never committed.
- **Remote widget:** `ensureBugZeroWidget` injects a script from `VITE_BUGZERO_WIDGET_URL`. Pin the trusted origin; consider CSP / SRI so a tampered build var can't load a malicious script.
- **Supply chain:** `npm ci` from the lockfile; run `npm audit` in CI; watch CVEs in `react`, `vite`, `lucide-react`.
- **XSS:** Avoid `dangerouslySetInnerHTML` with untrusted data once real screens land.
- **CI/CD trust boundary:** The self-hosted runner runs repo code — scope its token tightly, isolate it, review before running untrusted PR code.
- **Backend (future):** Validate/sanitize all input; guard against injection, SSRF, path traversal.
- **Transport:** Enforce HTTPS + HSTS on the SWA domain.

## Severity
- 🔴 Critical — exploitable now, fix today
- 🟠 High — plausible exploit, fix this week
- 🟡 Medium — defense-in-depth, fix this month
- 🔵 Low — best practice, log + revisit

## Response Protocol
1. File a private issue (security label) with repro steps.
2. Suggest a minimal patch.
3. Propose a regression test.
4. Rotate any leaked secrets after the fix.
