# Keldmere — website and commercial launch (draft)

Keldmere is a proposed customer-facing brand operated by **Webify Limited**, an Irish company. Trading-name clearance, statutory disclosures and applicable tax arrangements remain subject to verification.

## Current positioning (based on the website branch)
- Primary: small-business website design/development, website care and proposed managed websites.
- Secondary: scoped Microsoft 365 configuration review and remote IT assistance.
- Target markets stated on the website: US, Canada, UK, Ireland, Australia and New Zealand.
- Contact CTA: `hello@keldmere.com` via the visitor's email application (no server-side form).

## Technical stack
Next.js 16, React 19, `output: "export"`, `trailingSlash: true`, unoptimized local images. The only intended deployment is GitHub Pages, **not enabled or published by this PR**.

## Portfolio
Three locally stored, optimized AI-generated website design images are displayed in the homepage reel:
- `public/images/hartwell-premium.webp`
- `public/images/brightsmile-premium.webp`
- `public/images/atrium-premium.webp`

These show sample website designs; they are not commissioned client references. A separate older interactive building demo remains at `/demos/trades/` and does not currently match the featured Atrium artwork. Do not imply the two are the same project.

## Source of truth and release process
- `commercial/WEBSITE-PACKAGES-ECONOMICS.md`: provisional pricing and cost assumptions.
- `commercial/SALES-OPERATIONS-CHECKLIST.md`: lead-to-delivery workflow.
- `commercial/WEBSITE-COMPLIANCE-OPEN-ISSUES.md`: legal and data-protection gaps.
- `commercial/LAUNCH-GATES.md`: evidence and remaining launch decisions.
- `scripts/audit-image-assets.mjs`, `scripts/audit-launch.mjs`, `scripts/capture-visual-qa.mjs`: automated gates.

Continue work on `feat/landing-v1`, PR #1 as draft. Passing build/Playwright tests does not authorize commercial publication. No merge, GitHub Pages activation, DNS, indexing or external hosting change without explicit approval.
