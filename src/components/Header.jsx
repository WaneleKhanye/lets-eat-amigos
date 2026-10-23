import { useEffect, useState } from 'react'
import { business } from '../data/site.js'
import { orderAction, whatsappEnabled } from '../lib.js'
import { CloseIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from './Icons.jsx'

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#find-us', label: 'Find Us' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const OrderIcon = whatsappEnabled ? WhatsAppIcon : PhoneIcon

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-coal/95 text-cream backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-sun focus:px-4 focus:py-2 focus:text-coal"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6">
        <a href="#home" className="flex items-center gap-3" aria-label={`${business.name} — home`}>
          <img
            src="/images/brand/lets-eat-amigos-logo.webp"
            alt=""
            width="240"
            height="251"
            className="h-12 w-auto sm:h-16"
          />
          <span className="font-display text-xl uppercase leading-none tracking-wide sm:text-2xl">
            Let’s Eat <span className="text-ember">Amigos</span>
          </span>
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="rounded-full px-4 py-2 font-semibold hover:text-sun">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={orderAction.href}
            {...(orderAction.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="btn-primary hidden min-h-11 px-5 sm:inline-flex"
          >
            <OrderIcon />
            {orderAction.label}
          </a>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full text-cream hover:bg-white/10 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-white/10 md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 font-display text-2xl uppercase hover:bg-white/5 hover:text-sun"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
