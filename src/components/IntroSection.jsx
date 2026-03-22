import { motion } from 'motion/react'
import { getAssetPath } from '../lib/assets'

function IntroSection({ content, onPrimaryAction }) {
  const backgroundImage = getAssetPath(content.background)

  return (
    <div
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
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
            'linear-gradient(45deg, rgba(255,0,255,0.6), rgba(0,255,255,0.5), rgba(255,255,0,0.4), rgba(255,0,255,0.6))',
          animation: 'rainbow 3s ease infinite',
        }}
      />

      <motion.div
        className="relative z-10 px-4 text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AsciiBlock
          lines={content.topAscii}
          className="mb-4 text-sm text-yellow-300 md:text-base"
          shadow="0 0 10px #ff00ff, 0 0 20px #00ffff"
        />

        <motion.h1
          className="mb-4 text-5xl font-bold md:text-8xl"
          style={{
            fontFamily: 'Impact, fantasy',
            background:
              'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 40px rgba(255,255,255,0.8)',
            filter:
              'drop-shadow(0 0 20px #ff00ff) drop-shadow(0 0 30px #00ffff)',
            animation: 'rainbow 2s ease infinite',
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          {content.title}
        </motion.h1>

        <AsciiBlock
          lines={content.middleAscii}
          className="mb-8 text-sm text-pink-300 md:text-base"
          shadow="0 0 10px #ff00ff, 0 0 20px #ffff00"
        />

        <motion.button
          onClick={onPrimaryAction}
          className="relative overflow-hidden px-8 py-5 text-xl font-bold md:px-12 md:py-6 md:text-2xl"
          style={{
            fontFamily: 'Impact, fantasy',
            background:
              'linear-gradient(135deg, #ff00ff 0%, #00ffff 50%, #ffff00 100%)',
            backgroundSize: '200% 200%',
            color: '#fff',
            textShadow: '2px 2px 4px #000, 0 0 10px #ff00ff',
            border: '4px dotted #ffff00',
            borderRadius: '20px',
            boxShadow:
              '0 0 20px #ff00ff, 0 0 40px #00ffff, inset 0 0 20px rgba(255,255,255,0.5)',
            animation: 'rainbow 3s ease infinite, pulse 1s ease infinite',
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
            }}
            animate={{ x: ['-200%', '200%'] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
          />
          <span className="relative z-10">{content.buttonLabel}</span>
        </motion.button>

        <AsciiBlock
          lines={content.bottomAscii}
          className="mt-8 text-sm text-cyan-300 md:text-base"
          shadow="0 0 10px #00ffff, 0 0 20px #ff00ff"
        />
      </motion.div>

      <style>{`
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
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

export default IntroSection
