# Portfolio imagery — acquisition and approval

Keldmere demos use fictional businesses and concept-only architectural visuals. Photos must never imply actual client work or completed projects.

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
| Filename | Original URL | Creator | Licence | Date verified | Intended section |
| --- | --- | --- | --- | --- | --- |
| *(awaiting selected and downloaded image assets)* | | | | | |

## Release rule
No imagery enters published Keldmere without a complete register row, correct visual context and human review. Current abstract architectural graphics remain labelled as illustrations and fictional examples.

Reference licence pages:
- https://unsplash.com/license
- https://www.pexels.com/license/
