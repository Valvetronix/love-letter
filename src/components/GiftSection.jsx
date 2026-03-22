import { getAssetPath } from '../lib/assets'
import MainButton from './MainButton'
import SectionShell from './SectionShell'

function GiftSection({ content, onPrimaryAction }) {
  return (
    <SectionShell background={getAssetPath(content.background)} align="top" scrollable>
      <section className="panel panel--content">
        <div className="section-heading">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="section-title section-title--medium">{content.title}</h2>
          <p className="section-copy">{content.description}</p>
        </div>

        <ul className="note-list">
          {content.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>

        <div className="button-row">
          <MainButton onClick={onPrimaryAction}>{content.buttonLabel}</MainButton>
        </div>
      </section>
    </SectionShell>
  )
}

export default GiftSection
