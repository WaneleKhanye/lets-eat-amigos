import { useState } from 'react'
import { business } from '../data/site.js'
import { directionsUrl, fullAddress, mapEmbedUrl, surchargeText, telUrl, whatsappEnabled, whatsappUrl } from '../lib.js'
import { CardIcon, ClockIcon, ExternalIcon, PhoneIcon, PinIcon, WhatsAppIcon } from './Icons.jsx'

function Row({ icon: Icon, title, children }) {
  return (
    <div className="flex gap-4 py-5">
      <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coal text-sun">
        <Icon />
      </span>
      <div className="min-w-0">
        <h3 className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-muted">{title}</h3>
        <div className="mt-1 text-lg">{children}</div>
      </div>
    </div>
  )
}

export default function FindUs() {
  const [showMap, setShowMap] = useState(false)

  return (
    <section id="find-us" aria-labelledby="find-title" className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="eyebrow text-ember-ink">Contact & location</p>
        <h2 id="find-title" className="mt-3 text-5xl sm:text-6xl">
          Find us
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="divide-y divide-ink/10">
            <Row icon={PinIcon} title="Address">
              <address className="not-italic font-semibold">
                {business.address.street}
                <br />
                {business.address.area} {business.address.postalCode}
              </address>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark mt-3 min-h-11 px-5 text-sm"
              >
                Get directions <ExternalIcon />
              </a>
            </Row>

            <Row icon={PhoneIcon} title="Phone (for orders)">
              <a href={telUrl} className="font-semibold underline underline-offset-4">
                {business.phone.display}
              </a>
            </Row>

            {whatsappEnabled && (
              <Row icon={WhatsAppIcon} title="WhatsApp">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-1 min-h-11 px-5 text-sm">
                  Order on WhatsApp <ExternalIcon />
                </a>
                <p className="mt-2 text-base text-muted">{business.phone.display}</p>
              </Row>
            )}

            {business.openingHours?.length > 0 && (
              <Row icon={ClockIcon} title="Opening hours">
                <dl className="grid grid-cols-[auto_auto] justify-start gap-x-5 gap-y-1 max-[384px]:gap-x-4 max-[384px]:text-base">
                  {business.openingHours.map((h) => (
                    <div key={h.days} className="contents">
                      <dt className="font-semibold">{h.days}</dt>
                      <dd className="whitespace-nowrap tabular-nums">{h.time}</dd>
                    </div>
                  ))}
                </dl>
                {business.hoursNote && <p className="mt-2 text-sm text-muted">{business.hoursNote}</p>}
              </Row>
            )}

            {business.payments.cardAccepted && (
              <Row icon={CardIcon} title="Payment">
                <p>We accept card payments.</p>
                {surchargeText() && (
                  <p className="mt-1 font-semibold">
                    Card surcharge: {surchargeText()}.
                  </p>
                )}
              </Row>
            )}
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-coal text-cream ring-1 ring-ink/10">
              {showMap ? (
                <iframe
                  title={`Map showing ${fullAddress}`}
                  src={mapEmbedUrl}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
                  <PinIcon width={40} height={40} className="text-ember" />
                  <p className="font-display text-3xl uppercase">{business.address.area}</p>
                  <button type="button" className="btn-primary" onClick={() => setShowMap(true)}>
                    Show map
                  </button>
                  <p className="text-xs text-cream/60">Loads Google Maps, based on our street address</p>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-3xl">Follow the flavour</h3>
              <ul className="mt-4 flex flex-wrap gap-3">
                {business.social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-coal px-5 font-semibold hover:bg-coal hover:text-cream"
                    >
                      {s.label}
                      <span className="text-sm font-normal opacity-75">{s.handle}</span>
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
