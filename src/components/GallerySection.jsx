import { getAssetPath } from '../lib/assets'
import GalleryGrid from './GalleryGrid'
import SectionShell from './SectionShell'

function GallerySection({ content }) {
  return (
    <SectionShell background={getAssetPath(content.background)} align="top" scrollable>
      <section className="panel panel--content panel--gallery">
        <div className="section-heading">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="section-title section-title--medium">{content.title}</h2>
          <p className="section-copy">{content.description}</p>
        </div>

        <GalleryGrid images={content.images} />
      </section>
    </SectionShell>
  )
}

export default GallerySection
