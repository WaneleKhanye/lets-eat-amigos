# Handover checklist — Let's Eat Amigos

Remaining actions are listed first, then decisions, then the details the owner has confirmed. Nothing unconfirmed is shown on the website. Business details live in [`src/data/site.js`](src/data/site.js).

## Still to do

- [ ] **Check the map pin on the ground (owner action).**
  "Get directions" opens `https://www.google.com/maps/dir/?api=1&destination=31075 Mawele Street, Daveyton 1520, South Africa`, and "Show map" searches the same address. Both use Google's lookup of the confirmed address. **The exact pin couldn't be verified while building the site**: the build environment can't reach Google Maps or OpenStreetMap, and nobody has checked the result on the ground. The site doesn't claim the pin is exact; the map is labelled "based on our street address".
  → Open "Get directions" on a phone and check it arrives at the premises. If it doesn't, send a Google Maps pin or share link and we'll switch the directions to that pin.

- [ ] **Event dates and venues — only when you send them.**
  *They're left off the website on purpose.* The site only says "You'll also find our food stall at events."
  → When you'd like events listed, send the dates and venues and we'll add them.

## Decisions

- [x] **Logo corrected to EST. 2024.** The website logo (header, footer, favicon and Apple touch icon) is the original poster crop with the final "5" replaced by a "4". The rest of the design is unchanged. The uncorrected crop is kept in `design-source/logo-original-est-2025.png`. The menu poster (`public/images/menu/menu-poster-black-orange.jpg`) is unchanged as a source reference and still says EST. 2025. A sharper original logo file would still be welcome, but isn't required.
- [x] **Dishes shown only in photos stay in the gallery only.** Burgers, the stew plate, the toasted sandwich and the platters/trays aren't added to the menu and have no prices. The highlights text says some dishes "aren't on our current menu — ask us what's available."
- [x] **Directions stay address-based** until a verified pin link is provided (see above).
- [x] **No event dates or venues on the site** until you provide them.

## Confirmed by the owner

- [x] Business name: **Let's Eat Amigos**
- [x] Founded: **2024** (`business.established`)
- [x] Current menu: the **black-and-orange menu poster** (`activeMenuId = 'main'`). Prices: Kota R15/R20/R25/R30/R40/R50; Special Kotas R50/R60/R70/R80/R100; Packet chips small R10, medium R20, large R30; Kota Wrap R65; Sides: Russian R17, Vienna R10, Special R3, Cheese R4, Ham R4. The "View printed menu" link opens `public/images/menu/menu-poster-black-orange.jpg`. The poster's EST. 2025 doesn't override the confirmed 2024.
- [x] Poster wording: the R30 kota uses **"chips"**, and the special kotas list **"ham, egg"** as two separate fillings.
- [x] The Kasi Flavour menu was superseded. It's still in the data file but isn't shown on the site.
- [x] WhatsApp orders on **+27 78 723 4176**, linking to https://wa.me/27787234176 (`whatsapp.confirmed = true`). A separate call option is kept.
- [x] Opening hours, South African time: **Monday–Friday 10:00–20:00; Saturday–Sunday 09:00–17:00** (`openingHours`)
- [x] Address: **31075 Mawele Street, Daveyton 1520**, used for directions
- [x] Card payments accepted, with a card surcharge of **R2 at the premises and R5 at events** (`payments.cardSurcharges`)
- [x] **No delivery, collection or catering**, so none of these is mentioned on the site
- [x] Runs **food stalls at events** (`eventStalls`)
- [x] Phone for orders: **+27 78 723 4176**
