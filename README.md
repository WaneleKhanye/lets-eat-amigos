# Let’s Eat Amigos — website

Website for Let’s Eat Amigos, a kota and takeaway food business in Daveyton. Built with React, Vite and Tailwind CSS.

## Run it

```bash
npm install
npm run dev       # live preview at http://localhost:5173
npm run build     # production files in dist/
npm run preview   # preview the production build
```

`dist/` can be hosted on any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).

## Updating the site

**All business details, menu items, prices and photo captions are in one file: [`src/data/site.js`](src/data/site.js).** You don't need to edit anything else.

### Change a price or menu item
Open `src/data/site.js` and find the `menus` list.
- **Change a price:** edit the number, e.g. `price: 15` → `price: 18`.
- **Change ingredients:** edit the words inside `ingredients: [ ... ]`.
- **Add an item:** copy an existing `{ price: …, ingredients: [ … ] }` line, paste it under the original and change it. Items can also have a `name:` and an `extra:` line (shown in orange).
- **Remove an item:** delete its line.

### WhatsApp ordering
WhatsApp ordering is on: `business.whatsapp` has `confirmed: true` and `number: '27787234176'`, so every order button opens https://wa.me/27787234176. Call buttons stay alongside it. To change the number, edit `number` (written as `27…`, with no `+` or spaces). To switch back to phone-only ordering, set `confirmed: false`.

### Opening hours
Edit `openingHours` (one line per group of days) and `hoursNote`. To hide the opening-hours row, set `openingHours: null`.

### Card surcharges
Edit `payments.cardSurcharges`, e.g. `{ where: 'at events', amount: 5 }`. The text appears in the menu's order panel and under Find Us.

### Which menu is shown
`activeMenuId` is `'main'`, the current menu, transcribed from the black-and-orange menu poster (`public/images/menu/menu-poster-black-orange.jpg`, which the "View printed menu" link opens). Categories appear in the order listed: Kota, Special Kotas, Packet chips, Kota Wrap, Sides. The superseded Kasi Flavour menu is kept in the file but isn't shown. If `activeMenuId` is set to `null`, the site shows *what we serve* without prices.

### Add or replace a photo
1. Make two copies of the photo as WebP: one 640 px wide and one 1200 px wide.
   With ImageMagick: `convert photo.jpg -resize 640x -quality 78 my-dish-640.webp` (and the same with `1200x` → `my-dish-1200.webp`).
2. Put both in `public/images/food/`.
3. Add an entry to `photos` in `site.js` with `id: 'my-dish'`, a `title`, a short `description` and an `alt` text describing the photo for people who can't see it.
4. To show it in the Food highlights section, add its id to `highlightIds`. To use it as the main hero photo, set `heroPhotoId`.

If a photo is wide, add `fit: 'contain'` so the food never gets cropped. Otherwise use `position: 'center 40%'` to choose which part stays in frame.

## Media

| File | Source file supplied |
| --- | --- |
| `public/images/brand/lets-eat-amigos-logo.png/.webp` | Cropped from the black/orange menu poster |
| `public/images/menu/menu-poster-colour.jpg` | WhatsApp Image 2026-10-05 at 18.58.55 |
| `public/images/menu/menu-poster-black-orange.jpg` | WhatsApp Image 2026-10-05 at 18.58.56 |
| `public/images/menu/menu-kasi-flavour.jpg` | WhatsApp Image 2026-10-05 at 19.01.24 |
| `public/images/food/kota-tower-wings-chips-*` | 18.58.57 |
| `public/images/food/meat-platter-chips-salad-*` | 19.01.04 |
| `public/images/food/burger-meals-foil-trays-*` | 19.01.07 |
| `public/images/food/double-cheeseburgers-ribs-onion-rings-*` | 19.01.10 |
| `public/images/food/stew-rice-salads-*` | 19.01.11 (1), with black phone bar cropped off |
| `public/images/food/toasted-sandwich-chips-*` | 19.01.11, with bottom bar cropped off |
| `public/images/food/sharing-platter-ribs-samoosas-*` | 19.01.22 |
| `public/images/food/mixed-grill-tray-*` | 19.01.24 (1), with top phone bar cropped off |
| `public/videos/sunday-platter-video.mp4/.webm` | WhatsApp Video 2026-10-05 at 19.01.17 |

The original WhatsApp files were removed from the project folder after the organised copies were checked. They are still in the Git history (commit `bde1f77`) if you ever need them.

## Before publishing

Open questions for the business are in **[HANDOVER.md](HANDOVER.md)**. Unconfirmed details are left off the website rather than shown as "to be confirmed".
