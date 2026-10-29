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

## Phase 2 package economics (23 Oct 2026)

- [x] Service/package boundaries and unsupported assumptions documented in `commercial/PACKAGE-SCOPE-DECISION-MATRIX.md`.
- [x] Measurement protocol in `commercial/UNIT-ECONOMICS-PILOT.md`.
- [x] Hypothetical sensitivity examples in `commercial/economics-scenario.example.json` with automated test `scripts/test-evaluate-package-economics.mjs`.
- [ ] Actual build and care time measurements: **no verified dataset supplied**.
- [ ] Real operating/hosting/payment/provider costs and owner-approved minimum margin/rate.
- [ ] Precise revision, hosting, backup, supported-stack, cancellation, price/tax and renewal terms approved for client use.

**Status:** phase 2 tooling and evidence framework built; pricing and margin validation **not complete**. Do not infer profitability from the examples or approve the public price floor solely on that basis.

## Phase 3 Keldmere → VERIDRA delivery process (23 Oct 2026)
- [x] Reconciled VERIDRA current `README.md`, operator workflow audit and commercial offer with Keldmere lead process.
- [x] Defined internal assessment-to-quote workflow in `commercial/VERIDRA-QUOTE-WORKFLOW.md`; VERIDRA public audit findings inform manual scope, effort estimation and operator-approved pricing, not an unverified automatic price.
- [x] Created an evidence-conscious acceptance drill `commercial/PHASE3-ACCEPTANCE-DRILL.md` and CI contract test.
- [ ] **Run actual local Windows operator acceptance** against a permitted public target and capture evidence of transitions and output (cannot be established from GitHub source alone).
- [ ] Confirm company identity discrepancy: Keldmere names Webify Limited; VERIDRA commercial offer names Webify Digital Solutions Ltd. Verify official corporate name before using contract documents.
- [ ] Validate Keldmere mailbox intake, proposal acceptance and external invoice/payment reference handling in a representative real workflow.
- [ ] Production approval of pricing, legal terms and privacy remains a separate requirement.

**Phase 3:** documented technical/workflow integration ready for local acceptance; actual end-to-end operational acceptance still open.

## Prepublication batch (23 October 2026)

- [x] Legal name clarified by operator-provided company-overview screenshot: **WEBIFY LIMITED**, incorporation 10 April 2024, company number **761605**, registered office **Unit 2, 2 Bridge Street, Athlone, Co. Westmeath, N37 F1W4, Ireland**. This is operator evidence, not yet an independent current CRO confirmation.
- [x] Public company page, enquiry privacy draft and homepage footer updated to contain matching company particulars.
- [x] Public page now labels portfolio images as fictional design studies; prices visibly described as indicative and dependent on written scope.
- [x] Static consistency checks extended to company details, privacy, transparency and price disclaimer.
- [ ] Confirm *current* identity/address in CRO and whether **Keldmere** is registered as a business name (or complete registration) before trading under the brand.
- [ ] Approve actual privacy retention period, controller legal basis, processor contracts and international transfer details (Namecheap/Gmail/Brevo/GitHub Pages), and publish complete notice; the current draft still explicitly discloses unresolved details.
- [ ] Resolve planned VAT/tax presentation and customer service terms before accepting a paid order. Displayed entry prices remain indicative.
- [ ] Confirm mailbox deliverability/authentication and actual user-initiated mailto behaviour on common client devices.
- [ ] Approve full visual/functional QA and latest CI head; fix any issues before a launch decision.
- [ ] **Separate, explicit permission** for PR merge, GitHub Pages, domain DNS and indexing. No publication authorised by this prelaunch batch.

This checklist distinguishes **implemented draft** from **legally approved publication copy**.

## Privacy and commercial pre-registration batch — 24 October 2026
- [x] Public enquiry privacy copy expanded: controller, contact, requested-quote bases, recipient categories, transfer uncertainty, rights and proposed 12-month unsuccessful-enquiry retention rule.
- [x] Proposed actual mailbox implementation and provider verification captured in `commercial/PRIVACY-OPERATIONAL-ACCEPTANCE.md`.
- [x] Website-specific commercial process and scope/quote boundaries clarified; indicative floors documented in `commercial/PRELAUNCH-COMMERCIAL-DECISION.md`.
- [ ] Confirm provider contracts, transfer safeguards and actual processing locations; implement the retention rule before claiming it as established practice.
- [ ] Owner approves proposed privacy basis, retention, public prices and individual binding terms.
- [ ] Keldmere business-name registration and current CRO particulars still require confirmation.

**Status:** policy and commercial recommendations prepared, not a completed legal review or owner sign-off. Site remains draft and `noindex` is retained.
