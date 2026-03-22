import { getAssetPath } from '../lib/assets'

function GalleryGrid({ images }) {
  return (
    <div className="gallery-grid">
      {images.map((image) => (
        <figure key={image.src} className="gallery-card">
          <div className="gallery-card__media">
            <img
              className="gallery-card__image"
              src={getAssetPath(image.src)}
              alt={image.alt}
              loading="lazy"
            />
          </div>

          <figcaption className="gallery-card__body">
            <p className="gallery-card__label">{image.label}</p>
            <p className="gallery-card__hint">
              Reemplazable desde config y public/images/gallery.
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

export default GalleryGrid
