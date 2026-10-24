# Keldmere release policy

The repository uses two separate concepts:

**Technical QA** must pass to merge safe code changes. It checks Next.js static export, page navigation and Playwright mobile/desktop smoke tests.

**Commercial launch clearance** is deliberately separate. Run `node scripts/audit-launch.mjs` to generate `launch-audit.json`. A nonzero number of critical blockers means the site must not be presented as ready for publication, even when GitHub Actions is green.

Use `node scripts/audit-launch.mjs --require-launch-ready` as an explicit release gate. Do **not** wire this command into draft PR builds, because incomplete legal data would make every normal development commit fail.

Outstanding information is sourced from the Irish CRO requirements on company websites (section 151 Companies Act 2014) and Irish Data Protection Commission GDPR transparency guidance. The script is conservative, and cannot itself certify legal compliance.

Avoid filling missing statutory details with guesses. Company information must match CRO records. Do not activate GitHub Pages, point DNS, remove noindex or publish under an unregistered trading name without legal/commercial approval.

The email currently displayed is an existing functioning placeholder. A future branded address requires DNS and inbox testing, not just changing website text.
