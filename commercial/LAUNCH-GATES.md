# Keldmere — release gates and evidence (22 Oct 2026)

Passing GitHub Actions does **not** mean the business or website is cleared to launch.

## Technical evidence
- [x] Draft PR #1 on `feat/landing-v1` (do not merge without approval).
- [x] Next.js static export for GitHub Pages configured in `next.config.ts`.
- [x] Three premium WebP files committed, used in homepage and registered for asset provenance.
- [x] CI build, image audit and four-viewport Playwright smoke tests passed for the last verified head before this batch.
- [ ] CI green for the **current** batch head (verify exact commit, not prior builds).
- [ ] Human visual sign-off of actual desktop/phone screenshots, including portfolio cropping, contrast, readability and animation states.
- [ ] Browser inspection of full page, real-world mobile/contact links and navigation.
- [ ] Confirm older demos match the premium visual standard or remove their entry points.
- [ ] Check reduced-motion and no-animation behaviour in real browser.

## Commercial evidence
- [x] Provisional package prices and economic scenarios documented in `WEBSITE-PACKAGES-ECONOMICS.md`.
- [x] Website-focused enquiry, sales operations and proposal **draft templates** documented.
- [ ] Obtain measured build/care effort, real third-party costs and approved target margins.
- [ ] Approve supported stacks, package inclusions, revisions and acceptance criteria.
- [ ] Approve managed website term, ownership, portability, cancellation and payment terms.
- [ ] Approve publicly advertised prices, currency and tax treatment.

## Company and privacy
- [ ] Verify Irish company particulars, business-name status and required public disclosures.
- [ ] Review Irish/Spanish jurisdiction, tax and insurance treatment with appropriate advisers.
- [ ] Complete and approve GDPR privacy notice with actual controller, processing, processors, rights, retention and transfers.
- [x] Branded email inbound/outbound previously tested using Namecheap forwarding + Gmail + Brevo (documented 21 Oct).
- [ ] Confirm delivered message SPF/DKIM/DMARC headers and continuity/backup arrangements.
- [ ] Confirm data handling for client web care and any third-party hosting/analytics.

## Controlled publication
- [ ] Explicit approval to merge PR.
- [ ] Explicit approval to enable GitHub Pages or deploy.
- [ ] Explicit approval for DNS changes, HTTPS review and removal of `noindex`.

**Rule:** Do not describe this branch as production-ready until critical technical, commercial and legal items have evidence and approval.

## Portfolio-claim review (23 Oct 2026)

Latest visual QA artifact: GitHub Actions run 39990205891, commit 97c67b5. All automated smoke checks passed. Direct inspection of the 1440px screenshot confirms the premium images appear, but generated design artwork may contain invented law-firm awards, client totals, years of experience, patient-review claims or professional association marks **within the pixels**. Those claims are not evidence of Keldmere clients or accredited sample businesses.

- [ ] Inspect all three premium WebP images at native resolution for fictitious credentials, statistics, logos, awards, reviews and confusing text.
- [ ] Replace or edit any problematic artwork, or present it in a way that cannot be mistaken for a real client achievement, before publication.
- [ ] Approve actual 1440px and 390px screenshot crops. Browser automation confirms loading and layout, not factual truth inside AI-generated images.

This is a **commercial trust blocker**, separate from successful CI.
