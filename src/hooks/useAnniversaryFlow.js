import { startTransition, useCallback, useEffect, useState } from 'react'

export function useAnniversaryFlow({ initialScreen, transitions }) {
  const [currentScreen, setCurrentScreen] = useState(initialScreen)
  const [loadingState, setLoadingState] = useState(null)

  useEffect(() => {
    if (!loadingState) {
      return undefined
    }

    const timer = window.setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })

      startTransition(() => {
        setCurrentScreen(loadingState.target)
        setLoadingState(null)
      })
    }, loadingState.durationMs)

    return () => window.clearTimeout(timer)
  }, [loadingState])

  const goToNextScreen = useCallback(() => {
    const nextTransition = transitions[currentScreen]

    if (!nextTransition || loadingState) {
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    setLoadingState(nextTransition)
  }, [currentScreen, loadingState, transitions])

  return {
    currentScreen,
    loadingState,
    goToNextScreen,
  }
}
