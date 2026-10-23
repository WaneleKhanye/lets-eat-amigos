// A framed photo. fit: 'contain' photos are shown whole over a blurred copy of
// themselves, so frames stay a consistent shape without cutting off the food.
export default function Photo({ photo, src, srcSet, sizes, className = '', lazy = true }) {
  const common = { src, srcSet, sizes, loading: lazy ? 'lazy' : undefined, decoding: 'async' }

  return (
    <div className={`relative overflow-hidden bg-coal-2 ${className}`}>
      {photo.fit === 'contain' && (
        <img {...common} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full scale-110 object-cover opacity-60 blur-xl" />
      )}
      <img
        {...common}
        alt={photo.alt}
        className={`relative h-full w-full ${photo.fit === 'contain' ? 'object-contain' : 'object-cover'}`}
        style={{ objectPosition: photo.position || 'center' }}
      />
    </div>
  )
}
