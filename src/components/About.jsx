import { business } from '../data/site.js'
import { photoSrc } from '../lib.js'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-ember py-16 text-coal sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2">
        <div>
          <p className="eyebrow">About us</p>
          <h2 id="about-title" className="mt-3 text-5xl sm:text-6xl">
            Proudly local. <span className="block">Made for you.</span>
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed">
            <p>
              {business.name} is a {business.address.area} food business, serving the community since{' '}
              {business.established}. We make kotas the way they should be: garlic-toasted bread, generous
              fillings and chips piled in.
            </p>
            <p>
              From a simple polony kota to special kotas stacked with burger patties, egg, wings and ribs — plus kota
              wraps, chips and sides — everything is served hot and fresh.
            </p>
            {business.eventStalls && (
              <p>You’ll also find our food stall at events.</p>
            )}
            <p className="font-display text-2xl uppercase">Thank you for supporting local!</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src={photoSrc('meat-platter-chips-salad')}
            alt="A platter of glazed beef strips, sticky chicken, wors, chips and fresh salad."
            loading="lazy"
            className="aspect-[3/4] w-full rounded-3xl object-cover shadow-lg"
          />
          <img
            src={photoSrc('mixed-grill-tray')}
            alt="A foil tray of saucy chips, glazed chicken, viennas, wings and salad."
            loading="lazy"
            className="mt-10 aspect-[3/4] w-full rounded-3xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
