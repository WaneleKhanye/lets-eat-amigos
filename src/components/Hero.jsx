import { business, heroPhotoId } from '../data/site.js'
import { orderAction, photoById, photoSrc, photoSrcSet, whatsappEnabled } from '../lib.js'
import { BookIcon, PhoneIcon, PinIcon, WhatsAppIcon } from './Icons.jsx'

export default function Hero() {
  const photo = photoById[heroPhotoId]
  const OrderIcon = whatsappEnabled ? WhatsAppIcon : PhoneIcon
  const [first, second] = business.tagline.split('. ')

  return (
    <section id="home" className="relative overflow-hidden bg-coal text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-ember/20 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-4 px-4 pb-12 pt-4 sm:px-6 md:grid-cols-[1.05fr_1fr] md:gap-12 md:pb-20 md:pt-14">
        <div className="order-2 md:order-1">
          <p className="eyebrow flex items-center gap-2 text-sun">
            <PinIcon width={18} height={18} />
            {business.address.area} · Est. {business.established}
          </p>
          <h1 className="mt-2 text-[clamp(3rem,12.5vw,6.5rem)] md:mt-4">
            {first}.
            <span className="block text-ember">{second}</span>
          </h1>
          <p className="mt-3 max-w-md text-base leading-relaxed text-cream/85 sm:text-lg md:mt-6">
            Loaded kotas on garlic-toasted bread, special kotas, kota wraps and chips — all served hot and fresh from
            our kitchen in {business.address.area}.
          </p>
          <p className="mt-2 font-display text-xl uppercase tracking-wide text-sun max-md:[@media(max-height:740px)]:hidden">{business.slogan}</p>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:flex md:mt-8">
            <a href="#menu" className="btn-primary px-3 sm:px-6">
              <BookIcon />
              View Menu
            </a>
            <a
              href={orderAction.href}
              {...(orderAction.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="btn-ghost px-3 sm:px-6"
            >
              <OrderIcon />
              {orderAction.label}
            </a>
          </div>
          {!whatsappEnabled && (
            <p className="mt-3 text-sm text-cream/70">
              Orders: <a href={orderAction.href} className="font-semibold text-cream underline underline-offset-4">{business.phone.display}</a>
            </p>
          )}
        </div>

        <figure className="order-1 md:order-2">
          <div className="relative mx-auto h-[clamp(11rem,30svh,17rem)] w-full max-w-xl overflow-hidden rounded-3xl border-4 border-ember shadow-2xl shadow-black/60 md:aspect-[4/5] md:h-auto md:max-w-none md:rounded-[2rem]">
            <img
              src={photoSrc(photo.id, 1200)}
              srcSet={photoSrcSet(photo.id)}
              sizes="(min-width: 768px) 50vw, 100vw"
              alt={photo.alt}
              width="1200"
              height="1600"
              fetchPriority="high"
              className="h-full w-full object-cover"
              style={{ objectPosition: photo.position }}
            />
          </div>
          <figcaption className="mt-3 hidden text-right text-sm text-cream/70 md:block">{photo.title}</figcaption>
        </figure>
      </div>
    </section>
  )
}
