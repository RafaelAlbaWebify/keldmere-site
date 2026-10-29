# Portfolio imagery — current inventory and controls

## Current assets
The active homepage displays three **locally committed** optimized WebP files:
| Asset | Source | Intended presentation |
| --- | --- | --- |
| `public/images/hartwell-premium.webp` | Original AI-generated website visual, 21 Oct 2026 | Legal services |
| `public/images/brightsmile-premium.webp` | Original AI-generated website visual, 21 Oct 2026 | Dental care |
| `public/images/atrium-premium.webp` | Original AI-generated website visual, 21 Oct 2026 | Architecture |

Provenance is in `commercial/IMAGE-ASSET-REGISTER.json`. The repository also contains the older `everwell-ai-study.svg` and `fieldwork-ai-study.svg` assets for older demonstration pages. Those are not the flagship portfolio.

## Quality and truthfulness
- These visuals show possible website designs; they are not evidence of customer commissions, operating clinics/law firms, buildings completed or commercial outcomes.
- Avoid bogus testimonials, credentials, awards, reviews or clients. Portfolio presentation may be minimal, but do not claim commissioned case studies.
- Inspect desktop (1440px) and phone (390px) crops, typography and generated image artifacts before final visual approval.
- The older `/demos/trades/` interactive demo is FIELDWORK+, **not** the Atrium design featured on the homepage. Avoid presenting it as an Atrium click-through.
- No production MP4 is committed: the current reel is a CSS cross-fade of three WebP screenshots.

## Acquisition rules for future imagery
Use original generated work or photos licensed for commercial use, recording asset-level evidence and restrictions. Do not hotlink external image hosts at runtime. Keep individual assets at or below 500 KiB and the total image set at or below 3 MiB unless deliberately reviewed and changed. The image audit enforces these limits and registration completeness.

## Required checks before any release
1. `node scripts/audit-image-assets.mjs` reports no missing or over-budget assets.
2. Playwright confirms the three images are fetched and returns valid image responses.
3. Human review signs off on mobile and desktop screenshots, captions and link destinations.
4. Any legal/ethical concern about AI depictions of people, professional status or property is resolved before publication.

## October 23 claim-safe replacement
The three production WebPs were replaced on the development branch by tighter, hero-only crops of the same AI-generated designs. Their original unverified award, experience, review and numerical claims were located in the discarded lower portions. These files remain **fictional design studies** and are not actual client websites. Their display crop and small-screen readability still require a fresh Playwright screenshot review.
