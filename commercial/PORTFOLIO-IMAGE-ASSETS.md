# Portfolio imagery — acquisition and approval

Keldmere demos use fictional businesses and concept-only architectural visuals. Photos must never imply actual client work or completed projects.

## AI-generated concept assets
- AI-generated visuals are acceptable for *fictional design studies*, not as evidence of completed construction, existing premises, customers or results.
- Record generation date, model/tool, prompt intent, filename, and any known editing steps in the same register.
- Use clear page-level labels such as **fictional concept**. Do not include fake testimonials, real-company logos, invented project results or misleading photos of people.
- Review generated architectural details and human anatomy at the actual crop sizes before approval.
- Store final optimized assets locally in `public/images/` before referencing them in application code. Chat attachments are not production asset URLs.

## Asset sourcing
- Prefer downloadable Pexels or free Unsplash images with a source page for each exact image.
- Confirm the individual image is not premium/restricted and is permitted for commercial use.
- Record photographer, original photo URL, download date, asset filename, and license URL in a new row of the asset register before merging.
- Avoid recognizable individuals, client logos, branded signage and third-party artworks when releases or permissions are not clear.
- Save optimized AVIF/WebP/JPEG files in `public/images/`; never rely on runtime hotlinking to photo hosts.
- Target <=500 KiB per image and <=3 MiB cumulative static images, enforced by `scripts/audit-image-assets.mjs`.
- If an asset requires more, document the reason and adjust the budget explicitly in a reviewed commit.
- Provide meaningful alt text for informative photos; empty alt for purely decorative photos. Always test mobile crops at 390px and desktop at 1440px.

## Image register
| Filename | Source URL or AI generation reference | Creator / tool | Rights / usage basis | Date verified | Intended section |
| --- | --- | --- | --- | --- | --- |
| *(awaiting selected and downloaded image assets)* | | | | | |

## Release rule
No imagery enters published Keldmere without a complete register row, correct visual context and human review. Current abstract architectural graphics remain labelled as illustrations and fictional examples.

Reference licence pages:
- https://unsplash.com/license
- https://www.pexels.com/license/

## AI-generated visual candidates (not yet committed as binaries)
Two small WebP studies were prepared on 2026-10-21 from an AI-generated concept composition:
- `everwell-yoga-concept.webp` — 428×345, approximately 20 KiB; AI-generated wellness subject.
- `fieldwork-architecture-concept.webp` — 377×338, approximately 22 KiB; AI-generated architecture subject.

These are **fictional illustrations**, not photographic evidence of classes, clients, buildings or completed projects. They are low-resolution composition studies, not approved final production hero assets. The binary files are currently packaged separately for review; they have **not** been added to `public/images` and the website does **not** reference them. If adopted, upload them to `public/images`, maintain the AI-origin disclosure in the asset register, and verify the resulting GitHub Pages static export before merging.
