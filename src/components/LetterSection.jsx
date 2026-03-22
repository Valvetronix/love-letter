import { motion } from 'motion/react'
import { getAssetPath } from '../lib/assets'

function LetterSection({ content, onPrimaryAction }) {
  const backgroundImage = getAssetPath(content.background)

  return (
    <div
      className="relative flex min-h-screen items-center justify-center overflow-hidden p-4"
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
            'linear-gradient(135deg, rgba(255,0,255,0.5), rgba(0,255,255,0.4), rgba(255,255,0,0.3))',
        }}
      />

      <motion.div
        className="relative z-10 w-full max-w-3xl"
        initial={{ y: 100, opacity: 0, rotateX: 90 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        <AsciiBlock
          lines={content.topAscii}
          className="mb-4 text-center text-xs text-yellow-300 md:text-sm"
          shadow="0 0 10px #ff00ff, 0 0 20px #00ffff"
        />

        {content.title ? (
          <motion.h2
            className="mb-6 text-center text-4xl font-bold md:text-6xl"
            style={{
              fontFamily: 'Comic Sans MS, cursive',
              color: '#fff',
              textShadow:
                '3px 3px 0 #ff00ff, -3px -3px 0 #00ffff, 0 0 20px #ffff00, 0 0 30px #ff00ff',
              filter: 'drop-shadow(0 0 10px #00ffff)',
            }}
          >
            {content.title}
          </motion.h2>
        ) : null}

        <div
          className="mb-6 bg-white/90 p-8 md:p-12"
          style={{
            border: '5px double #ff00ff',
            boxShadow:
              '0 0 30px #ff00ff, 0 0 50px #00ffff, inset 0 0 30px rgba(255,0,255,0.2)',
          }}
        >
          <div className="space-y-6 text-lg leading-relaxed text-gray-800">
            <p style={{ fontFamily: 'Comic Sans MS, cursive' }}>{content.intro}</p>
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph} style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                {paragraph}
              </p>
            ))}
            <p
              className="text-right"
              style={{ fontFamily: 'Comic Sans MS, cursive' }}
              dangerouslySetInnerHTML={{ __html: content.signature }}
            />
          </div>
        </div>

        <motion.pre
          className="mb-4 text-center font-mono text-xs text-pink-300 md:text-sm"
          style={{ textShadow: '0 0 10px #ff00ff, 0 0 20px #ffff00' }}
        >
          {content.dividerAscii}
        </motion.pre>

        <div className="text-center">
          <motion.button
            onClick={onPrimaryAction}
            className="px-10 py-4 text-xl font-bold"
            style={{
              fontFamily: 'Impact, fantasy',
              background:
                'linear-gradient(135deg, #ff00ff 0%, #00ffff 50%, #ffff00 100%)',
              backgroundSize: '200% 200%',
              color: '#fff',
              textShadow: '2px 2px 4px #000, 0 0 10px #00ffff',
              border: '4px dashed #ffff00',
              borderRadius: '25px',
              boxShadow: '0 0 25px #ff00ff, 0 0 40px #00ffff',
              animation: 'rainbow 3s ease infinite',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {content.buttonLabel}
          </motion.button>
        </div>

        <AsciiBlock
          lines={content.bottomAscii}
          className="mt-4 text-center text-xs text-cyan-300 md:text-sm"
          shadow="0 0 10px #00ffff, 0 0 20px #ff00ff"
        />
      </motion.div>

      <style>{`
        @keyframes rainbow {
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

export default LetterSection
