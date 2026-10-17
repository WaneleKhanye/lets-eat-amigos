import { directionsUrl, orderAction, whatsappEnabled } from '../lib.js'
import { BookIcon, PhoneIcon, PinIcon, WhatsAppIcon } from './Icons.jsx'

// Always-visible quick actions on phones. The footer has extra bottom padding
// so this bar never hides content.
export default function MobileActionBar() {
  const OrderIcon = whatsappEnabled ? WhatsAppIcon : PhoneIcon
  const item = 'flex min-h-14 flex-1 flex-col items-center justify-center gap-0.5 text-xs font-bold'

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-white/10 bg-coal/95 pb-[env(safe-area-inset-bottom)] text-cream backdrop-blur md:hidden"
    >
      <a href="#menu" className={item}>
        <BookIcon />
        Menu
      </a>
      <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className={item}>
        <PinIcon />
        Directions
      </a>
      <a
        href={orderAction.href}
        {...(orderAction.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={`${item} bg-ember text-coal`}
      >
        <OrderIcon />
        {whatsappEnabled ? 'WhatsApp' : 'Call to order'}
      </a>
    </nav>
  )
}
