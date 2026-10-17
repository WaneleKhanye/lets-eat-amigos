# Handover checklist — Let's Eat Amigos

Open questions are listed first, then the details the owner has confirmed. Nothing unconfirmed is shown on the website. Each item says what to change in [`src/data/site.js`](src/data/site.js).

## Still to do

- [ ] **1. Logo file showing EST. 2024.**
  The current logo was cropped from a menu poster, and its artwork says **"EST. 2025"**. The site's text uses the confirmed year, **2024**, but the logo graphic hasn't been changed.
  → Send a sharp logo file (PNG or SVG, ideally with a transparent background) that says EST. 2024. Replace `public/images/brand/lets-eat-amigos-logo.png` and `.webp`, then regenerate `public/favicon.png` and `public/apple-touch-icon.png`.

- [ ] **2. Map pin.**
  "Get directions" and "Show map" use Google's lookup of the confirmed address. The exact pin hasn't been checked on the ground.
  → Open the directions link on a phone and check it arrives at 31075 Mawele Street. If it doesn't, send a Google Maps pin link and we'll use it instead.

- [ ] **3. Dishes in photos that aren't on the current menu.**
  The photos show burgers, a stew plate, a toasted sandwich and platters/trays. None of these is on the Kasi Flavour menu. *For now they appear in the photos only, with no prices, and customers are asked to message or call.*
  → Should any be added to the menu, and at what prices? Or should any photos be swapped out?

- [ ] **4. Event stall details (optional).**
  *For now the site only says "You'll also find our food stall at events."* No dates, venues or booking details are shown.
  → If you'd like upcoming events listed, send the dates and venues.

## Confirmed by the owner

- [x] Business name: **Let's Eat Amigos**
- [x] Founded: **2024** (`business.established`)
- [x] Current menu: **Kasi Flavour** — Kota 01 R50, Kota 02 R100, Kota 03 R150, Kota 04 R200 (`activeMenuId = 'kasi-flavour'`). The older poster menu is kept in the file for reference but not shown.
- [x] WhatsApp orders on **+27 78 723 4176**, linking to https://wa.me/27787234176 (`whatsapp.confirmed = true`). A separate call option is kept.
- [x] Opening hours, South African time: **Monday–Friday 10:00–20:00; Saturday–Sunday 09:00–17:00** (`openingHours`)
- [x] Address: **31075 Mawele Street, Daveyton 1520**, used for directions
- [x] Card payments accepted, with a card surcharge of **R2 at the premises and R5 at events** (`payments.cardSurcharges`)
- [x] **No delivery, collection or catering**, so none of these is mentioned on the site
- [x] Runs **food stalls at events** (`eventStalls`)
- [x] Phone for orders: **+27 78 723 4176**
