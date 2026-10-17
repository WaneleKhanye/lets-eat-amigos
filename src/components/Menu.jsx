import { activeMenuId, business, menuOverview, menus } from '../data/site.js'
import { orderAction, rand, whatsappEnabled } from '../lib.js'
import { CardIcon, ExternalIcon, PhoneIcon, WhatsAppIcon } from './Icons.jsx'

const listToSentence = (list) => {
  if (!list?.length) return ''
  const text = list.length === 1 ? list[0] : `${list.slice(0, -1).join(', ')} & ${list.at(-1)}`
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function MenuItem({ item }) {
  return (
    <li className="flex items-start gap-4 py-4">
      <span className="font-display inline-flex min-w-[4.25rem] shrink-0 justify-center rounded-xl bg-sun px-2 py-1.5 text-2xl leading-none text-coal">
        {rand(item.price)}
      </span>
      <div className="min-w-0 pt-0.5">
        {item.name && <p className="text-lg font-bold leading-snug">{item.name}</p>}
        {item.ingredients && <p className="leading-relaxed text-ink/85">{listToSentence(item.ingredients)}</p>}
        {item.extra && <p className="mt-1 font-semibold text-ember-ink">{item.extra}</p>}
      </div>
    </li>
  )
}

function Category({ category }) {
  return (
    <section aria-labelledby={`cat-${category.id}-title`} className="scroll-mt-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-ink/5 sm:p-7" id={`cat-${category.id}`}>
      <h3 id={`cat-${category.id}-title`} className="text-3xl sm:text-4xl">
        {category.name}
      </h3>
      {category.note && <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-muted">{category.note}</p>}
      <ul className="mt-2 divide-y divide-ink/10">
        {category.items.map((item, i) => (
          <MenuItem key={i} item={item} />
        ))}
      </ul>
    </section>
  )
}

function FullMenu({ menu }) {
  const cats = menu.categories
  return (
    <div className="mt-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        {cats.length > 1 && (
          <nav aria-label="Menu categories">
            <ul className="flex flex-wrap gap-2">
              {cats.map((c) => (
                <li key={c.id}>
                  <a
                    href={`#cat-${c.id}`}
                    className="inline-flex min-h-11 items-center rounded-full bg-coal px-4 font-semibold text-cream hover:bg-ember hover:text-coal"
                  >
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        {menu.poster && (
          <a
            href={menu.poster}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold underline underline-offset-4"
          >
            View printed menu <ExternalIcon />
            <span className="sr-only">(opens image in a new tab)</span>
          </a>
        )}
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {cats.map((c) => (
          <Category key={c.id} category={c} />
        ))}
      </div>
    </div>
  )
}

// Shown until a menu version is confirmed: what we serve, without prices.
function Overview() {
  return (
    <ul className="mt-10 grid gap-6 sm:grid-cols-2">
      {menuOverview.map((c) => (
        <li key={c.id} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/5 sm:p-7">
          <h3 className="text-3xl sm:text-4xl">{c.name}</h3>
          <p className="mt-3 text-lg leading-relaxed text-ink/85">{c.description}</p>
          {c.fillings && (
            <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${c.name} fillings`}>
              {c.fillings.map((f) => (
                <li key={f} className="rounded-full bg-sun/40 px-3 py-1 text-sm font-semibold">
                  {f}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}

export default function Menu() {
  const menu = menus.find((m) => m.id === activeMenuId)
  const OrderIcon = whatsappEnabled ? WhatsAppIcon : PhoneIcon

  return (
    <section id="menu" aria-labelledby="menu-title" className="bg-cream-2 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="eyebrow text-ember-ink">{menu ? 'Prices in rand' : 'What we serve'}</p>
        <h2 id="menu-title" className="mt-3 text-5xl sm:text-6xl">
          The menu
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">Kotas made to order and served hot and fresh.</p>

        {menu ? <FullMenu menu={menu} /> : <Overview />}

        <div className="mt-10 flex flex-col gap-5 rounded-3xl bg-coal p-6 text-cream sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="font-display text-3xl uppercase">{menu ? 'Ready to order?' : 'Prices & today’s menu'}</p>
            <p className="mt-1 text-cream/80">
              {menu ? 'Give us a call and we’ll have it ready.' : 'Call us for current prices and to place your order.'}
            </p>
            {business.payments.cardAccepted && (
              <p className="mt-3 flex items-center gap-2 font-semibold text-sun">
                <CardIcon />
                We accept card payments.
                {business.payments.note && <span className="font-normal text-cream/70">{business.payments.note}</span>}
              </p>
            )}
          </div>
          <a
            href={orderAction.href}
            {...(orderAction.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="btn-primary shrink-0"
          >
            <OrderIcon />
            {whatsappEnabled ? orderAction.label : `Call ${business.phone.display}`}
          </a>
        </div>
      </div>
    </section>
  )
}
