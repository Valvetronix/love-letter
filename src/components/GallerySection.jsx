import { motion } from 'motion/react'
import { getAssetPath } from '../lib/assets'
import GalleryGrid from './GalleryGrid'

function GallerySection({ content }) {
  const backgroundImage = getAssetPath(content.background)

  return (
    <div
      className="relative min-h-screen overflow-y-auto px-4 py-12"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,0,255,0.4), rgba(0,255,255,0.3), rgba(255,255,0,0.3), rgba(255,0,255,0.4))',
          backgroundSize: '400% 400%',
          animation: 'megaRainbow 8s ease infinite',
        }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-7xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AsciiBlock
          lines={content.topAscii}
          className="mb-6 text-center text-xs text-yellow-300 md:text-sm"
          shadow="0 0 15px #ff00ff, 0 0 25px #00ffff"
        />

        <motion.h2
          className="mb-8 text-center text-5xl font-bold md:text-7xl"
          style={{
            fontFamily: 'Impact, fantasy',
            color: '#fff',
            textShadow:
              '4px 4px 0 #ff00ff, -4px -4px 0 #00ffff, 0 0 30px #ffff00, 0 0 50px #ff00ff',
            letterSpacing: '0.05em',
          }}
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', bounce: 0.4 }}
        >
          {content.title}
        </motion.h2>

        <motion.pre
          className="mb-12 whitespace-pre-wrap text-center text-lg text-white md:text-xl"
          style={{
            fontFamily: 'monospace',
            textShadow: '2px 2px 4px #000, 0 0 10px #ff00ff',
          }}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {content.description}
        </motion.pre>

        <GalleryGrid images={content.images} />

        <AsciiBlock
          lines={content.bottomAscii}
          className="text-center text-base text-pink-300 md:text-lg"
          shadow="0 0 15px #ff00ff, 0 0 25px #ffff00"
        />
      </motion.div>

      <style>{`
        @keyframes megaRainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  )
}

function AsciiBlock({ lines, className, shadow }) {
  return (
    <motion.pre
      className={`font-mono whitespace-pre-wrap ${className}`}
      style={{ textShadow: shadow }}
    >
      {lines.join('\n')}
    </motion.pre>
  )
}

export default GallerySection
