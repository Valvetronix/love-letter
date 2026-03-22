import { getAssetPath } from '../lib/assets'
import MainButton from './MainButton'
import SectionShell from './SectionShell'

function LetterSection({ content, onPrimaryAction }) {
  return (
    <SectionShell background={getAssetPath(content.background)} align="top" scrollable>
      <article className="panel panel--content">
        <div className="section-heading">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="section-title section-title--medium">{content.title}</h2>
          <p className="section-copy">{content.intro}</p>
        </div>

        <div className="prose-stack">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="signature">{content.signature}</p>
        </div>

        <div className="button-row">
          <MainButton onClick={onPrimaryAction}>{content.buttonLabel}</MainButton>
        </div>
      </article>
    </SectionShell>
  )
}

export default LetterSection
