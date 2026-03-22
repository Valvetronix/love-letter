import { motion } from 'motion/react'

function GiftSection({ content, onPrimaryAction }) {
  const stars = Array.from({ length: 30 }, (_, index) => ({
    id: index,
    left: `${(index * 17) % 100}%`,
    top: `${(index * 29) % 100}%`,
    duration: 2 + (index % 4) * 0.4,
    delay: (index % 5) * 0.3,
  }))

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden p-4">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff, #00ffff)',
          backgroundSize: '400% 400%',
          animation: 'megaRainbow 5s ease infinite',
        }}
      />

      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute text-2xl text-white"
            style={{
              left: star.left,
              top: star.top,
              textShadow: '0 0 10px #fff',
            }}
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
            }}
          >
            *
          </motion.div>
        ))}
      </div>

      <motion.div
        className="relative z-10 w-full max-w-4xl"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
      >
        <AsciiBlock
          lines={content.topAscii}
          className="mb-6 text-center text-sm text-yellow-300 md:text-base"
          shadow="0 0 15px #ff00ff, 0 0 25px #00ffff"
        />

        <motion.h2
          className="mb-8 text-center text-5xl font-bold md:text-7xl"
          style={{
            fontFamily: 'Impact, fantasy',
            color: '#fff',
            textShadow:
              '4px 4px 0 #ff00ff, -4px -4px 0 #00ffff, 0 0 30px #ffff00, 0 0 50px #ff00ff',
            letterSpacing: '0.1em',
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {content.title}
        </motion.h2>

        <div
          className="mb-8 bg-white/95 p-8 md:p-12"
          style={{
            border: '6px ridge #ff00ff',
            boxShadow:
              '0 0 40px #ff00ff, 0 0 60px #00ffff, inset 0 0 40px rgba(255,255,0,0.3)',
          }}
        >
          <div className="space-y-6 text-lg leading-relaxed text-gray-800">
            <p
              className="text-center text-2xl font-bold"
              style={{
                fontFamily: 'Comic Sans MS, cursive',
                color: '#ff00ff',
                textShadow: '2px 2px 0 #00ffff',
              }}
            >
              {content.heading}
            </p>

            <div
              className="p-6"
              style={{
                background: 'linear-gradient(135deg, #ffccff, #ccffff, #ffffcc)',
                border: '4px dotted #ff00ff',
              }}
            >
              <p
                className="text-xl"
                style={{ fontFamily: 'Comic Sans MS, cursive' }}
              >
                {content.notes[0]}
              </p>
              <p
                className="mt-4"
                style={{ fontFamily: 'Comic Sans MS, cursive' }}
              >
                {content.notes[1]}
              </p>
            </div>

            <p
              className="text-center text-lg"
              style={{
                fontFamily: 'Comic Sans MS, cursive',
                color: '#666',
                fontStyle: 'italic',
              }}
            >
              {content.notes[2]}
            </p>
          </div>
        </div>

        <motion.pre
          className="mb-6 text-center font-mono text-sm text-pink-300 md:text-base"
          style={{ textShadow: '0 0 15px #ff00ff, 0 0 25px #ffff00' }}
        >
          {content.dividerAscii}
        </motion.pre>

        <div className="text-center">
          <motion.button
            onClick={onPrimaryAction}
            className="px-10 py-5 text-xl font-bold md:px-14 md:text-2xl"
            style={{
              fontFamily: 'Impact, fantasy',
              background:
                'linear-gradient(135deg, #ff00ff 0%, #00ffff 25%, #ffff00 50%, #00ffff 75%, #ff00ff 100%)',
              backgroundSize: '300% 300%',
              color: '#fff',
              textShadow: '3px 3px 6px #000, 0 0 15px #ff00ff',
              border: '5px double #ffff00',
              borderRadius: '30px',
              boxShadow:
                '0 0 30px #ff00ff, 0 0 50px #00ffff, 0 0 70px #ffff00',
              animation: 'megaRainbow 4s ease infinite, megaPulse 1.5s ease infinite',
            }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.9 }}
          >
            {content.buttonLabel}
          </motion.button>
        </div>

        <AsciiBlock
          lines={content.bottomAscii}
          className="mt-6 text-center text-sm text-cyan-300 md:text-base"
          shadow="0 0 15px #00ffff, 0 0 25px #ff00ff"
        />
      </motion.div>

      <style>{`
        @keyframes megaRainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes megaPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
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

export default GiftSection
