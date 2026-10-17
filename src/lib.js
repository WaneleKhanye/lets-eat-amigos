import { business, photos } from './data/site.js'

export const whatsappEnabled = Boolean(business.whatsapp.confirmed && business.whatsapp.number)

export const whatsappUrl = whatsappEnabled ? `https://wa.me/${business.whatsapp.number}` : null

export const telUrl = `tel:${business.phone.dial}`

export const fullAddress = `${business.address.street}, ${business.address.area} ${business.address.postalCode}`

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${fullAddress}, South Africa`,
)}`

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(`${fullAddress}, South Africa`)}&output=embed`

export const photoById = Object.fromEntries(photos.map((p) => [p.id, p]))

export const photoSrc = (id, w = 640) => `/images/food/${id}-${w}.webp`
export const photoSrcSet = (id) => `${photoSrc(id, 640)} 640w, ${photoSrc(id, 1200)} 1200w`

export const rand = (n) => `R${n}`

// e.g. "R2 at our premises and R5 at events"
export const surchargeText = (list = business.payments.cardSurcharges) =>
  list?.length
    ? list.map((c) => `${rand(c.amount)} ${c.where}`).join(list.length === 2 ? ' and ' : ', ')
    : null

// Primary ordering action: WhatsApp once confirmed, otherwise a phone call.
export const orderAction = whatsappEnabled
  ? { href: whatsappUrl, label: 'Order on WhatsApp', external: true }
  : { href: telUrl, label: 'Call to order', external: false }
