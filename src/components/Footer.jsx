import { business } from '../data/site.js'
import { fullAddress, telUrl } from '../lib.js'
import { navLinks } from './Header.jsx'

export default function Footer() {
  return (
    <footer className="bg-coal pb-28 pt-12 text-cream/80 md:pb-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <img src="/images/brand/lets-eat-amigos-logo.webp" alt="" width="240" height="251" loading="lazy" className="h-20 w-auto" />
          <div>
            <p className="font-display text-2xl uppercase text-cream">{business.name}</p>
            <p className="text-sm">{fullAddress}</p>
            <a href={telUrl} className="text-sm underline underline-offset-4">
              {business.phone.display}
            </a>
          </div>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex min-h-11 items-center font-semibold hover:text-sun">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-4 text-sm text-cream/60 sm:px-6">
        © {new Date().getFullYear()} {business.name}. Thank you for supporting local!
      </p>
    </footer>
  )
}
