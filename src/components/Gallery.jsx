import { useRef, useState } from 'react'
import { photos, video } from '../data/site.js'
import { photoSrc, photoSrcSet } from '../lib.js'
import { CloseIcon } from './Icons.jsx'
import Photo from './Photo.jsx'

export default function Gallery() {
  const dialogRef = useRef(null)
  const [index, setIndex] = useState(0)
  const current = photos[index]

  const openAt = (i) => {
    setIndex(i)
    dialogRef.current?.showModal()
  }
  const step = (d) => setIndex((i) => (i + d + photos.length) % photos.length)

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="scroll-mt-16 bg-coal py-16 text-cream sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="eyebrow text-sun">Gallery</p>
        <h2 id="gallery-title" className="mt-3 text-5xl sm:text-6xl">
          Good food, <span className="text-ember">good mood</span>
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-cream/75">Tap any photo to see it in full.</p>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {photos.map((p, i) => (
            <li key={p.id}>
              <button
                type="button"
                onClick={() => openAt(i)}
                className="group block w-full overflow-hidden rounded-2xl text-left ring-1 ring-white/10"
                aria-label={`View full photo: ${p.title}`}
              >
                <Photo
                  photo={p}
                  src={photoSrc(p.id, 640)}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="aspect-[4/5] transition-transform motion-safe:group-hover:scale-[1.02]"
                />
                <span className="block bg-coal-2 px-3 py-2.5 text-sm font-semibold">{p.title}</span>
              </button>
            </li>
          ))}
        </ul>

        {video && (
          <div className="mt-14 grid items-center gap-8 md:grid-cols-[minmax(0,18rem)_1fr]">
            <video
              controls
              playsInline
              preload="none"
              poster={video.poster}
              width="364"
              height="644"
              className="mx-auto aspect-[364/644] w-full max-w-xs rounded-3xl bg-coal-2 ring-4 ring-ember md:max-w-none"
              aria-describedby="video-desc"
            >
              <source src={video.src} type="video/mp4" />
              {video.webm && <source src={video.webm} type="video/webm" />}
              Your browser can’t play this video.
            </video>
            <div>
              <h3 className="text-4xl">{video.title}</h3>
              <p id="video-desc" className="mt-3 max-w-md text-lg text-cream/75">
                {video.description} Press play to watch — sound only plays when you choose.
              </p>
            </div>
          </div>
        )}
      </div>

      <dialog
        ref={dialogRef}
        aria-label={current.title}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') step(1)
          if (e.key === 'ArrowLeft') step(-1)
        }}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current.close()}
        className="m-auto max-h-[100dvh] w-full max-w-4xl bg-transparent p-3 text-cream backdrop:bg-black/85"
      >
        <figure className="flex flex-col items-center">
          <img
            src={photoSrc(current.id, 1200)}
            srcSet={photoSrcSet(current.id)}
            sizes="(min-width: 900px) 900px, 100vw"
            alt={current.alt}
            className="max-h-[75dvh] w-auto max-w-full rounded-2xl object-contain"
          />
          <figcaption className="mt-3 text-center">
            <span className="font-display text-2xl uppercase">{current.title}</span>
            <span className="block text-cream/75">{current.description}</span>
          </figcaption>
        </figure>
        <div className="mt-4 flex justify-center gap-3">
          <button type="button" className="btn-ghost" onClick={() => step(-1)}>
            ← Previous
          </button>
          <button type="button" className="btn-primary" onClick={() => dialogRef.current.close()} aria-label="Close photo">
            <CloseIcon />
          </button>
          <button type="button" className="btn-ghost" onClick={() => step(1)}>
            Next →
          </button>
        </div>
      </dialog>
    </section>
  )
}
