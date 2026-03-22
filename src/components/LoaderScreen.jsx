import { motion } from 'motion/react'
import { getAssetPath } from '../lib/assets'

function LoaderScreen({ message }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 px-4">
      <motion.img
        className="mb-8 h-[120px] w-[120px] object-contain"
        src={getAssetPath('images/loading/sunflower-loading.gif')}
        alt="Girasol cargando"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <p className="animate-pulse text-center text-2xl font-bold tracking-widest text-white">
        {message}
      </p>
    </div>
  )
}

export default LoaderScreen
