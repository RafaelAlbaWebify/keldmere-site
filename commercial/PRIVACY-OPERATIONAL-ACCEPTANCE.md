# Privacy operational acceptance — before public launch

**Prepared 24 October 2026; not yet signed off.** Public notice: `src/app/privacy/page.tsx`. Legal company identity from operator-provided MyIncorpro screenshot: WEBIFY LIMITED, company number 761605, current CRO confirmation outstanding.

| Action | Proposed handling | Evidence still required |
| --- | --- | --- |
| Enquiry purposes | Answer direct website enquiries and prepare requested quotes; no automatic marketing list | Confirm mailbox workflow and access roles |
| Lawful bases | Art. 6(1)(b) for personal pre-contract requests; Art. 6(1)(f) may cover B2B representatives where balancing supports it | Record legitimate-interest balancing and controller review |
| Personal data | Name, work email, business URL, submitted project details | Verify no other forms, analytics or embedded collection |
| Retention | Proposed deletion/review of unsuccessful enquiries within 12 months of last substantive contact; contracted customer records governed separately | Adopt rule and create an actual periodic mailbox cleanup routine; exception handling for disputes/statutory retention |
| Processors/recipients | Namecheap mail forwarding, Google/Gmail, Brevo sending and GitHub Pages static host | Check contracts and data locations, subprocessor roles, EEA/non-EEA safeguards and hosting logs |
| Transfers | Disclose non-EEA access/transfers when applicable, with adequacy/SCC or other valid mechanism | Verify provider arrangements; do not assume all processing stays in the EEA |
| Rights | Requests to hello@keldmere.com; DPC complaint route | Confirm mailbox receives rights requests, procedure and response assignment |
| Security | No credentials/customer records in initial enquiry; restrict inbox access | Check account security, MFA, forwarding and continuity |
| Consent and cookies | No intentionally implemented tracking or website forms | Verify deployed site/runtime; third-party additions require reassessment |

**Legal basis and retention source:** Irish Data Protection Commission transparency guidance and GDPR Article 13. The 12-month retention is a **proposed company policy**, not a legally mandated period.

## Exit gate
- [ ] Confirm and operationalise the above controls.
- [ ] Verify email providers' processing/transfer information.
- [ ] Approve lawful bases, retention and privacy notice for public release.
- [ ] Verify final site for tracking/cookies after hosting is configured.
- [ ] Confirm company legal/trading name and address.

## Independent public-source checks — 24 October 2026

- Irish DPC privacy-notice guidance: https://www.dataprotection.ie/en/individuals/know-your-rights/right-be-informed-transparency-article-13-14-gdpr — Article 13 requires the actual controller, bases, recipients, transfers, retention, rights and complaint route. **Public guidance checked; company compliance not attested.**
- Irish DPC retention FAQ: https://dataprotection.ie/en/faqs/responsibilities-data-controllers/how-long-should-personal-data-be-held-meet-obligations-imposed-gdpr — no universal GDPR 12-month period. Proposed 12-month rule remains **not implemented/verified**.
- Namecheap public DPA: https://www.namecheap.com/legal/universal/data-processing-addendum/ — DPA and SCC framework publicly available. **Whether this DPA covers the exact active account and email forwarding product remains unconfirmed.**
- Brevo DPA guidance: https://help.brevo.com/hc/en-us/articles/15403782599570-Where-can-I-find-the-Data-Processing-Agreement-DPA — terms contain a DPA. **No evidence of the current account agreement or all subprocessor/transfers.**
- GitHub Pages data collection: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages — visitor IP logged for security. Privacy notice should acknowledge this, and exact contractual allocation still needs verification.
- Google/Gmail: the mailbox was described as Gmail, **not proven to be a business Workspace tenant covered by a Workspace data processing amendment**. Do not state one applies without account evidence.

### Actions not possible from source-code or public documentation alone
- [ ] Inspect provider account-level agreements, linked subprocessor information and Google account type.
- [ ] Define and apply mailbox deletion/review routine (12 months is a proposed period, not an enacted policy).
- [ ] Verify account MFA and authorised mailbox access, SPF/DKIM/DMARC from delivered email headers.
- [ ] Confirm documented legitimate-interest balancing (when applicable) and approve final notice on the company’s behalf.

**External verification complete for published sources; operational and contractual attestation still open.**
