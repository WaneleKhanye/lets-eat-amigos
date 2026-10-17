import { highlightIds } from '../data/site.js'
import { orderAction, photoById, photoSrc, photoSrcSet } from '../lib.js'
import Photo from './Photo.jsx'

export default function Highlights() {
  const items = highlightIds.map((id) => photoById[id]).filter(Boolean)

  return (
    <section aria-labelledby="highlights-title" className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="eyebrow text-ember-ink">Straight from our kitchen</p>
        <h2 id="highlights-title" className="mt-3 text-5xl sm:text-6xl">
          Food that fills you up
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Real photos of real plates. Some of these dishes aren’t on the printed menu yet —{' '}
          <a href={orderAction.href} className="font-semibold text-ink underline underline-offset-4">
            ask us
          </a>{' '}
          what’s available today and for the price.
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p) => (
            <li key={p.id} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/5">
              <Photo
                photo={p}
                src={photoSrc(p.id, 640)}
                srcSet={photoSrcSet(p.id)}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="aspect-[4/5]"
              />
              <div className="p-5">
                <h3 className="text-2xl">{p.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{p.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
