# Keldmere + VERIDRA — website assessment to quotation (internal procedure)

**Status:** internal operating protocol. VERIDRA repository reviewed 23 Oct 2026; integration is **process-level**, not a deployed API bridge.

## System boundaries
- **Keldmere:** public website and enquiry address `hello@keldmere.com`. It does not automatically store leads, run audits or issue proposals.
- **VERIDRA:** local private Webify operator running in Windows at `http://127.0.0.1:8010/agency`. Its documented workflow is discovery → qualify → audit → compliant conversation → proposal → acceptance/work-start → project/delivery → handover → care. VERIDRA stores evidence and proposal versions, not authoritative invoices, tax determinations or payments.
- **Human/operator:** confirms site ownership/authorisation, scope, estimated remedial effort, exclusions, quote price, contractual and tax details. No promise that automated scoring equals implementation effort.
- **External authorities:** customer acceptance, signed terms, payment and invoicing are verified outside VERIDRA and referenced in its records.

## End-to-end workflow
1. **Receive:** visitor emails Keldmere with business website and project goals. Avoid secrets or customer records.
2. **Qualify:** log request internally and confirm client's right to commission work; identify whether it is a new build, redesign, audit+repair, care or managed website.
3. **Public assessment:** on approved public URL, use VERIDRA to collect *bounded passive* technical, SEO/indexability, AI crawler policy, trust/contact, accessibility heuristic, structured data and public security evidence. Record access limits and crawl gaps. No login required.
4. **Scope judgement:** classify each finding as validated observation, needs manual inspection, blocked/unknown or out of scope. Translate only selected findings to tasks and estimate by activity, complexity, dependencies, risks and expected verification. No deterministic price from severity score alone.
5. **Estimate:** record task-level minimum/expected/maximum effort if evidence supports a range; identify third-party expenses and unknowns separately. Internal time-cost target requires business approval. For bespoke sites, discovery and creative direction must be scoped independently of the audit.
6. **Quote:** produce a client-readable proposal using `commercial/PROPOSAL-TEMPLATE.md` and the latest VERIDRA evidence, including affected URLs, agreed deliverables, acceptance criteria, revisions, proposed price, tax verification, assumptions and exclusions. The human operator approves wording and fee.
7. **Accept:** only after external signed terms and required payment evidence; record reference in VERIDRA, then progress to authorised delivery.
8. **Deliver:** remediation/redesign occurs outside VERIDRA as agreed; run reassessment where supported, save before/after evidence and record handover.
9. **Care:** offer ongoing maintenance only when a supported stack and evidenced recurring need justify it. No automatic subscription or unapproved monitoring promise.

## Decision classifications
| Audit result | Commercial interpretation |
| --- | --- |
| Objective evidence and affected URLs | Candidate repair task subject to manual feasibility |
| Heuristic score or severity label | Prioritisation aid; **not** hours, price or certification |
| Crawl restricted, login-required, anti-bot blocked or unknown | Discovery item; quote after inspection or exclude explicitly |
| Site technically adequate but visual/business objective poor | Needs creative and conversion review beyond VERIDRA automated checks |
| Severe security concern | Bounded public finding only; no penetration testing or guarantee |
| Change of platform, migration or complex integration | Bespoke discovery and separately priced scope |

## Operator acceptance simulation (no fabricated client)
Use `commercial/PHASE3-ACCEPTANCE-DRILL.md`. Demonstrate a synthetic enquiry with no personal data, create an evidence-cited draft scope, flag unknowns, produce a **draft** proposal, reject an unapproved work-start, and verify the acceptance gates in the real VERIDRA operator UI. Passing written/CI contract checks is not proof of a manually accepted Windows workflow.

## Identity blocker
The Keldmere site identifies **Webify Limited**. VERIDRA's `docs/product/webify-commercial-offer.md` calls the provider **Webify Digital Solutions Ltd**. Neither wording is authoritative without current Irish corporate verification. Do not copy either blindly into a contract or assume the two are interchangeable.

## Security and privacy
Only audit publicly reachable sites with bounded requests; respect VERIDRA's DNS/IP and redirect target safety checks. Never send credentials or private customer content through the lead email or public repo. Do not enable unsolicited marketing without applicable outreach eligibility checks.
