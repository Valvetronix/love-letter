import { useEffect } from 'react'
import GiftSection from './components/GiftSection'
import GallerySection from './components/GallerySection'
import IntroSection from './components/IntroSection'
import LetterSection from './components/LetterSection'
import LoaderScreen from './components/LoaderScreen'
import BackgroundAudio from './components/music/BackgroundAudio'
import { siteContent } from './config/siteContent'
import { useAnniversaryFlow } from './hooks/useAnniversaryFlow'

function App() {
  const { currentScreen, loadingState, goToNextScreen } = useAnniversaryFlow({
    initialScreen: 'intro',
    transitions: siteContent.transitions,
  })

  useEffect(() => {
    document.title = siteContent.meta.title
  }, [])

  if (loadingState) {
    return (
      <LoaderScreen
        message={loadingState.message}
        durationMs={loadingState.durationMs}
      />
    )
  }

  if (currentScreen === 'intro') {
    return (
      <IntroSection
        content={siteContent.screens.intro}
        onPrimaryAction={goToNextScreen}
      />
    )
  }

  if (currentScreen === 'letter') {
    return (
      <LetterSection
        content={siteContent.screens.letter}
        onPrimaryAction={goToNextScreen}
      />
    )
  }

  if (currentScreen === 'gift') {
    return (
      <GiftSection
        content={siteContent.screens.gift}
        onPrimaryAction={goToNextScreen}
      />
    )
  }

  return <GallerySection content={siteContent.screens.gallery} />
}

function AppWithAudio() {
  return (
    <>
      <App />
      <BackgroundAudio config={siteContent.audio} />
    </>
  )
}

export default AppWithAudio
