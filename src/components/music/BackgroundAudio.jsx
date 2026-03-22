import { useEffect, useRef, useState } from 'react'
import { getAssetPath } from '../../lib/assets'

function BackgroundAudio({ config }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  if (!config?.enabled || !config?.source) {
    return null
  }

  const toggleAudio = async () => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
      return
    }

    try {
      await audio.play()
      setIsPlaying(true)
    } catch {
      setIsPlaying(false)
    }
  }

  return (
    <>
      <audio loop ref={audioRef} src={getAssetPath(config.source)} />
      <button
        className="fixed bottom-4 right-4 z-[60] rounded-full border-2 border-yellow-300 bg-pink-500 px-4 py-3 text-sm font-bold text-white shadow-[0_0_20px_#ff00ff]"
        onClick={toggleAudio}
        type="button"
      >
        {isPlaying ? 'Pausar cancion' : 'Reproducir cancion'}
      </button>
    </>
  )
}

export default BackgroundAudio
