// ─────────────────────────────────────────────────────────────────────────────
//  LET'S EAT AMIGOS — all business details, menu items and photos live here.
//  Edit this file to update the website. You don't need to touch any other file.
//
//  Anything marked  null  or  confirmed: false  is left OFF the website until
//  you fill it in. Open questions are listed in HANDOVER.md.
// ─────────────────────────────────────────────────────────────────────────────

export const business = {
  name: "Let's Eat Amigos",
  established: 2024, // confirmed by the owner (the logo artwork still says EST. 2025 — see HANDOVER.md)
  tagline: 'Big flavour. Bigger appetite.', // from both menu posters
  slogan: 'Real kotas. Real taste. Real Amigos!', // from both menu posters

  // Confirmed address, used for the directions link. The map pin comes from
  // Google's lookup of this address and hasn't been checked on the ground.
  address: {
    street: '31075 Mawele Street',
    area: 'Daveyton',
    postalCode: '1520',
  },

  // Phone number printed on every menu as the number "for orders".
  phone: {
    display: '+27 78 723 4176',
    dial: '+27787234176',
  },

  // WhatsApp orders — confirmed by the owner. Order buttons link to
  // https://wa.me/<number>. Set confirmed: false to switch back to "Call to order".
  whatsapp: {
    number: '27787234176', // international format, no + or spaces
    confirmed: true,
  },

  // Opening hours — confirmed by the owner. Set to null to hide the row.
  openingHours: [
    { days: 'Monday–Friday', time: '10:00–20:00' },
    { days: 'Saturday–Sunday', time: '09:00–17:00' },
  ],
  hoursNote: 'South African time (SAST)',

  payments: {
    cardAccepted: true, // confirmed by the owner
    // Card surcharges — confirmed by the owner. Amounts in rand.
    cardSurcharges: [
      { where: 'at our premises', amount: 2 },
      { where: 'at events', amount: 5 },
    ],
  },

  // We run food stalls at events (confirmed). No dates or venues are listed on
  // the site. Set to false to remove the mention.
  eventStalls: true,

  // Not offered (confirmed): delivery, collection and catering. The site
  // doesn't mention them.

  social: [
    { label: 'TikTok', handle: '@lets.eat.amigos', url: 'https://www.tiktok.com/@lets.eat.amigos' },
    { label: 'Instagram', handle: '@amigompho', url: 'https://www.instagram.com/amigompho/' },
    { label: 'Facebook', handle: 'Watch our reel', url: 'https://www.facebook.com/reel/910736235200094/' },
  ],
}

// ─── MENU ────────────────────────────────────────────────────────────────────
//  Prices are in rand. To change a price, edit the number.
//  To add an item, copy an existing { ... } line and change it.
//
//  The current menu is the "Kasi Flavour" menu (confirmed by the owner).
//  'main' is the older poster menu, kept for reference but not shown.
//  activeMenuId picks which menu appears on the site. If it's set to null, the
//  site shows "menuOverview" (what we serve, no prices) instead.
// ─────────────────────────────────────────────────────────────────────────────

export const activeMenuId = 'kasi-flavour'

// Only shown if activeMenuId is null. No prices.
export const menuOverview = [
  {
    id: 'kotas',
    name: 'Kotas',
    description: 'Toasted bread loaded with chips and your choice of fillings.',
    fillings: ['Chips', 'Polony', 'Cheese', 'Russian', 'Vienna', 'Ham', 'Lettuce', 'Red onion'],
  },
  {
    id: 'loaded-kotas',
    name: 'Loaded kotas',
    description: 'Our biggest kotas, stacked high — some served with chicken wings and ribs.',
    fillings: ['Egg', 'Bacon', 'Beef burger', 'Rib burger', 'Chicken wings', 'Ribs'],
  },
  {
    id: 'kota-wrap',
    name: 'Kota wrap',
    description: 'Chicken strip and bacon with cheese, lettuce, jalapeño and tomato, with chips.',
  },
  {
    id: 'chips-sides',
    name: 'Chips & sides',
    description: 'Packet chips in small, medium and large, plus extra Russian, vienna, special, cheese or ham.',
  },
]

export const menus = [
  {
    id: 'main',
    title: 'Main menu',
    source: 'From the colour and black/orange menu posters (older menu — not current)',
    poster: '/images/menu/menu-poster-black-orange.jpg',
    categories: [
      {
        id: 'kota',
        name: 'Kota',
        note: 'All toasted bread with garlic',
        items: [
          { price: 15, ingredients: ['Archaar', 'chips', 'polony', 'special', 'red onions', 'lettuce'] },
          { price: 20, ingredients: ['Archaar', 'chips', 'polony', 'special', 'vienna', 'red onions', 'lettuce'] },
          { price: 25, ingredients: ['Archaar', 'chips', 'polony', 'special', 'cheese', 'Russian', 'red onions', 'lettuce'] },
          { price: 30, ingredients: ['Archaar', 'chips', 'cheese', 'polony', 'Russian', 'ham', 'red onion', 'lettuce'] },
          { price: 40, ingredients: ['Archaar', 'chips', 'cheese', 'polony', 'Russian', 'ham', 'special', 'red onion', 'lettuce', 'vienna'] },
          { price: 50, ingredients: ['Archaar', 'chips', 'cheese', 'special', 'Russian', 'vienna', 'bacon', 'ham', 'red onion', 'lettuce'] },
        ],
      },
      {
        id: 'special-kotas',
        name: 'Special Kotas',
        note: 'All served hot & fresh',
        items: [
          { price: 50, ingredients: ['Archaar', 'chips', 'cheese', 'special', 'Russian', 'vienna', 'bacon', 'ham', 'egg', 'beef or chicken burger', 'red onion'] },
          { price: 60, ingredients: ['Archaar', 'chips', 'cheese', 'special', 'Russian', 'vienna', 'bacon', 'ham', 'egg', 'rib burger', 'red onion'] },
          { price: 70, ingredients: ['Archaar', 'chips', 'cheese', 'special', 'Russian', 'vienna', 'bacon', 'ham', 'egg', 'beef burger', 'rib burger', 'red onions', 'lettuce'] },
          { price: 80, ingredients: ['Archaar', 'chips', 'cheese', 'special', 'Russian', 'vienna', 'bacon', 'ham', 'egg', 'beef burger', 'rib burger', 'red onions', 'lettuce'], extra: 'Served with chicken wings' },
          { price: 100, ingredients: ['Archaar', 'chips', 'cheese', 'special', 'Russian', 'vienna', 'bacon', 'ham', 'egg', 'beef burger', 'rib burger', 'red onions', 'lettuce'], extra: 'Toasted bread with garlic and egg, served with beef/pork ribs' },
        ],
      },
      {
        id: 'kota-wrap',
        name: 'Kota Wrap',
        items: [
          { name: 'Kota Wrap', price: 65, ingredients: ['Chicken strip', 'bacon', 'cheese', 'lettuce', 'jalapeño', 'tomato'], extra: 'With chips' },
        ],
      },
      {
        id: 'extras',
        name: 'Extras',
        items: [
          { name: 'Packet chips — small', price: 10 },
          { name: 'Packet chips — medium', price: 20 },
          { name: 'Packet chips — large', price: 30 },
        ],
      },
      {
        id: 'sides',
        name: 'Sides',
        items: [
          { name: 'Russian only', price: 17 },
          { name: 'Vienna only', price: 10 },
          { name: 'Special only', price: 3 },
          { name: 'Cheese only', price: 4 },
          { name: 'Ham only', price: 4 },
        ],
      },
    ],
  },
  {
    id: 'kasi-flavour',
    title: 'Kasi Flavour menu',
    source: 'From the "Food Menu — Kasi Flavour" image',
    poster: '/images/menu/menu-kasi-flavour.jpg',
    categories: [
      {
        id: 'kasi-kota',
        name: 'Kota',
        items: [
          { name: 'Kota 01', price: 50, ingredients: ['Chips', 'polony', 'cheese', 'Russian', 'ham', 'lettuce', 'red onions', 'chakalaka'] },
          { name: 'Kota 02', price: 100, ingredients: ['Chips', 'polony', 'cheese', 'Russian', 'vienna', 'ham', 'rib burger', 'egg', 'lettuce', 'red onion'] },
          { name: 'Kota 03', price: 150, ingredients: ['Chips', 'polony', 'cheese', 'Russian', 'vienna', 'ham', 'rib burger', 'egg', 'lettuce', 'red onion'], extra: 'With 3 wings and 3 ribs, plus crispy onion rings' },
          { name: 'Kota 04', price: 200, ingredients: ['Chips', 'polony', 'cheese', 'Russian', 'vienna', 'ham', 'rib burger', 'egg', 'lettuce', 'red onion'], extra: 'With 4 wings and 4 ribs, plus crispy onion rings' },
        ],
      },
    ],
  },
]

// ─── PHOTOS ──────────────────────────────────────────────────────────────────
//  Photos live in /public/images/food as  <name>-640.webp  and  <name>-1200.webp.
//  To add a photo: save both sizes there, then add an entry below.
//  "position" controls which part of the photo stays visible in square-ish
//  frames (e.g. 'center', 'center 30%'). "fit: 'contain'" never crops.
//  Prices are NOT shown for these dishes because they aren't on the printed
//  menus — customers are asked to enquire.
// ─────────────────────────────────────────────────────────────────────────────

export const photos = [
  {
    id: 'kota-tower-wings-chips',
    title: 'Loaded kota with wings',
    description: 'A towering kota stacked with viennas, a rib patty, onion ring and bacon, with crispy chicken wings and chips.',
    alt: 'A loaded kota stacked high with glazed viennas, a rib patty, an onion ring and bacon on garlic-toasted bread, next to fried chicken wings and saucy chips in a takeaway box.',
    position: 'center 60%',
  },
  {
    id: 'double-cheeseburgers-ribs-onion-rings',
    title: 'Cheeseburgers with ribs',
    description: 'Double-patty cheeseburgers with sticky glazed ribs, onion rings and spiced chips.',
    alt: 'Two double-patty cheeseburgers with melted cheese, served with glazed ribs, onion rings and spiced chips in black takeaway boxes.',
    position: 'center 40%',
  },
  {
    id: 'sharing-platter-ribs-samoosas',
    title: 'Sharing platter',
    description: 'Ribs, samoosas, chicken wings, crumbed bites, salad and chips — made for the table.',
    alt: 'A round black sharing platter with glazed ribs, samoosas, saucy chicken wings, crumbed bites, a fresh salad and chips on a wooden table.',
    fit: 'contain',
  },
  {
    id: 'stew-rice-salads',
    title: 'Stew plate',
    description: 'Rich stew with yellow rice, beetroot, coleslaw and fresh tomato salsa.',
    alt: 'A takeaway box of stew in rich gravy with yellow rice, diced beetroot, creamy coleslaw and fresh tomato and chilli salsa.',
    position: 'center 45%',
  },
  {
    id: 'toasted-sandwich-chips',
    title: 'Toasted sandwich & chips',
    description: 'Triple-stacked toasted sandwich with egg, cheese and lettuce, served with golden chips.',
    alt: 'Toasted triple-decker sandwich quarters layered with egg, cheese, mince, ham and lettuce, drizzled with sauce, next to golden chips.',
    position: 'center',
  },
  {
    id: 'meat-platter-chips-salad',
    title: 'Meat platter',
    description: 'Steak strips, glazed chicken, wors and sausages, chicken pieces, chips and salad.',
    alt: 'A platter of glazed beef strips, sticky chicken, sliced wors and sausages, golden chicken pieces, saucy chips, a fresh onion and cucumber salad and a relish in the centre.',
    position: 'center',
  },
  {
    id: 'mixed-grill-tray',
    title: 'Mixed tray',
    description: 'Saucy chicken, viennas, wors, wings, crumbed bites, salad and chips.',
    alt: 'A foil tray filled with sauce-drizzled chips, glazed chicken, viennas, sliced wors, fried wings, crumbed chicken bites and a green salad with onion rings.',
    position: 'center 55%',
  },
  {
    id: 'burger-meals-foil-trays',
    title: 'Burger meals',
    description: 'Burgers with viennas and saucy chips in foil trays.',
    alt: 'Two burgers in foil trays with viennas and chips drizzled with sauce, with bottles of sauce behind them.',
    position: 'center 60%',
  },
]

// Which photos appear in the "Food highlights" section (by id).
export const highlightIds = [
  'double-cheeseburgers-ribs-onion-rings',
  'sharing-platter-ribs-samoosas',
  'stew-rice-salads',
  'toasted-sandwich-chips',
]

// Photo used in the hero section.
export const heroPhotoId = 'kota-tower-wings-chips'

export const video = {
  src: '/videos/sunday-platter-video.mp4',
  webm: '/videos/sunday-platter-video.webm', // optional fallback copy
  poster: '/videos/sunday-platter-video-poster.jpg',
  title: 'A loaded Amigos takeaway box',
  description: 'Chips with sauce, wings, saucy chicken, a sausage and salad — up close.',
}
