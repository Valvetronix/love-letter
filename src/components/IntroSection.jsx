import { getAssetPath } from '../lib/assets'
import MainButton from './MainButton'
import SectionShell from './SectionShell'

function IntroSection({ content, onPrimaryAction }) {
  return (
    <SectionShell background={getAssetPath(content.background)}>
      <div className="panel panel--hero">
        <div className="section-heading">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 className="section-title">{content.title}</h1>
          <p className="section-copy">{content.description}</p>
          <p className="section-copy section-copy--muted">{content.helper}</p>
        </div>

        <div className="button-row">
          <MainButton onClick={onPrimaryAction}>{content.buttonLabel}</MainButton>
        </div>
      </div>
    </SectionShell>
  )
}

export default IntroSection
