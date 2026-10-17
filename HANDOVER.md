# Handover checklist — Let's Eat Amigos

These questions are still open. None of them appear on the website as "to be confirmed": anything unconfirmed is simply left off until it's answered. Each item says what to change in [`src/data/site.js`](src/data/site.js) once you have the answer.

## Still to confirm

- [ ] **1. Which menu and prices are current?**
  The two menu posters match each other (kotas R15–R50, special kotas R50–R100, kota wrap R65, packet chips R10/R20/R30, sides R3–R17). The "Food Menu — Kasi Flavour" image lists different kotas: Kota 01 R50, Kota 02 R100, Kota 03 R150 and Kota 04 R200.
  *For now the site shows what's served, with no prices, and asks customers to call for prices.*
  → Set `activeMenuId` to `'main'` (posters) or `'kasi-flavour'`. If prices changed, edit them in `menus` first.

- [ ] **2. Is +27 78 723 4176 on WhatsApp, and should orders come through WhatsApp?**
  *For now WhatsApp isn't mentioned, and the order buttons say "Call to order".*
  → Set `whatsapp.confirmed: true` (and check `whatsapp.number`).

- [ ] **3. Opening hours.**
  *For now there's no opening-hours row.*
  → Fill in `openingHours` (the example is in the file).

- [ ] **4. Name spelling: "Let's Eat Amigos" or "Let's Eat Amigo's"?**
  The logos say "Amigo's"; other text says "Amigos". *The site uses "Amigos".*
  → Change `business.name`, plus the header wordmark in `src/components/Header.jsx` if needed.

- [ ] **5. Original logo file, with the correct founding year.**
  The logo was cropped from a menu poster, and its artwork says **"EST. 2025"**. The founding year is now confirmed as **2024**, which the site's text uses.
  → Send a sharp logo file (PNG or SVG) showing EST. 2024, ideally on a transparent background. Replace `public/images/brand/lets-eat-amigos-logo.png` and `.webp`.

- [ ] **6. Do card charges apply?**
  Only the Kasi Flavour menu says "charges do apply". *For now the site only says "We accept card payments."*
  → Put the wording in `payments.note`, e.g. `'Card charges may apply.'`

- [ ] **7. Dishes in the photos that aren't on any menu.**
  Burgers, the stew plate, the toasted sandwich and the platters/trays. *For now they appear as photos only, and customers are asked to call.* Should any be added to the menu, and at what prices?

- [ ] **8. Map location.**
  Check that "Get directions" and "Show map" find 31075 Mawele Street, Daveyton 1520 correctly. If not, send a Google Maps pin link.

- [ ] **9. Delivery, collection or catering.**
  *For now none of these is mentioned.* Which are offered, if any?

## Confirmed

- [x] Founding year: **2024** (`business.established`)
- [x] Card payments accepted (`payments.cardAccepted`)
- [x] Address: 31075 Mawele Street, Daveyton 1520 (printed on all menus)
- [x] Phone for orders: +27 78 723 4176 (printed on all menus)
