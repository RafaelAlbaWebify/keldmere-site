# Keldmere branded email — decision checklist

**Status: not configured.** Current website contact routes to webify.reception@gmail.com.

## Recommended address
hello@keldmere.com (customer enquiries). Optionally create a distinct billing@keldmere.com alias later.

## Decision criteria
- Prefer an existing licensed Microsoft 365 Business tenant *only if* the Irish business already has an eligible tenant and admin control; otherwise compare Microsoft 365 Business Basic, Exchange Online Plan 1, and other hosted email providers at checkout.
- Domain can remain with Namecheap BasicDNS. No website hosting purchase required.
- Never change DNS until the mailbox is provisioned, credentials secured, and a rollback plan recorded.
- If migrating existing email, capture current MX/TXT/CNAME entries before any edits; do not delete unrelated records.

## Implementation gate (once provider selected)
1. Add/verify keldmere.com inside the chosen email provider.
2. Create mailbox/alias, enable MFA and account recovery, choose least-privileged administration.
3. Update Namecheap DNS exactly as supplied by provider: MX, SPF TXT, DKIM selectors/CNAME, and DMARC starting policy after verifying senders.
4. Verify inbound from external personal addresses, outbound to different providers, reply-to, spam reputation and email signature.
5. Update contact CTAs and public footer from temporary Gmail only after tests pass.
6. Document provider, renewal cost, administrator recovery, DNS baseline and failure rollback.

**Do not invent provider DNS values, assume a subscription, or publish untested @keldmere.com addresses.**
