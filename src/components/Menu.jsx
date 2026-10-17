import { business, menuNeedsConfirmation, menus } from '../data/site.js'
import { orderAction, rand } from '../lib.js'
import { CardIcon, ExternalIcon } from './Icons.jsx'

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
      <h4 id={`cat-${category.id}-title`} className="text-3xl sm:text-4xl">
        {category.name}
      </h4>
      {category.note && <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-muted">{category.note}</p>}
      <ul className="mt-2 divide-y divide-ink/10">
        {category.items.map((item, i) => (
          <MenuItem key={i} item={item} />
        ))}
      </ul>
    </section>
  )
}

export default function Menu() {
  const showNotice = menuNeedsConfirmation && menus.length > 1

  return (
    <section id="menu" aria-labelledby="menu-title" className="bg-cream-2 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="eyebrow text-ember-ink">Prices in rand</p>
        <h2 id="menu-title" className="mt-3 text-5xl sm:text-6xl">
          The menu
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Every kota is made on toasted bread with garlic and served hot and fresh.
        </p>

        {showNotice && (
          <div role="note" className="tbc mt-6 max-w-3xl text-base">
            <strong>Prices to be confirmed:</strong> we have two printed menus with different kotas and prices. Please
            confirm the price when you order on{' '}
            <a href={orderAction.href} className="underline underline-offset-4">
              {business.phone.display}
            </a>
            .
          </div>
        )}

        {menus.map((menu) => {
          const cats = menu.categories
          return (
            <div key={menu.id} className="mt-12" aria-labelledby={`menu-${menu.id}`} role="region">
              <div className="flex flex-wrap items-end justify-between gap-3 border-b-4 border-coal pb-3">
                <h3 id={`menu-${menu.id}`} className="text-4xl">
                  {menus.length > 1 ? menu.title : 'Our menu'}
                </h3>
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

              {cats.length > 1 && (
                <nav aria-label={`${menu.title} categories`} className="mt-5">
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

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                {cats.map((c) => (
                  <Category key={c.id} category={c} />
                ))}
              </div>
            </div>
          )
        })}

        {business.payments.cardAccepted && (
          <p className="mt-10 flex items-center gap-3 text-lg font-semibold">
            <CardIcon className="text-ember-ink" />
            We accept card payments.
            {business.payments.note && <span className="font-normal text-muted">{business.payments.note}</span>}
          </p>
        )}
      </div>
    </section>
  )
}
