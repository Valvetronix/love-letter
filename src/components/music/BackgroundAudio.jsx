import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
import { getAssetPath } from '../../lib/assets'

const BackgroundAudio = forwardRef(function BackgroundAudio({ config }, ref) {
  const audioRef = useRef(null)

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  const playAudio = async () => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    try {
      await audio.play()
    } catch {
      return
    }
  }

  useImperativeHandle(ref, () => ({
    playAudio,
  }))

  if (!config?.enabled || !config?.source) {
    return null
  }

  return <audio loop ref={audioRef} src={getAssetPath(config.source)} />
})

export default BackgroundAudio
