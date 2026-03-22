import { motion } from 'motion/react';

export function Regalo({ onVerGaleria }: { onVerGaleria: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Fondo gradiente súper kitsch */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff, #00ffff)',
          backgroundSize: '400% 400%',
          animation: 'megaRainbow 5s ease infinite',
        }}
      />

      {/* Estrellas parpadeantes de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              textShadow: '0 0 10px #fff',
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            ★
          </motion.div>
        ))}
      </div>

      <motion.div
        className="max-w-4xl w-full relative z-10"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
      >
        {/* ASCII art superior MÁS grande */}
        <motion.pre
          className="text-yellow-300 text-center text-sm md:text-base mb-6 font-mono"
          style={{
            textShadow: '0 0 15px #ff00ff, 0 0 25px #00ffff',
          }}
        >
{`╔═══════════════════════════════════════╗
║  ★ ♥ ★ ♥ REGALO ESPECIAL ♥ ★ ♥ ★  ║
╚═══════════════════════════════════════╝`}
        </motion.pre>

        <motion.h2
          className="text-5xl md:text-7xl font-bold text-center mb-8"
          style={{
            fontFamily: 'Impact, fantasy',
            color: '#fff',
            textShadow: '4px 4px 0 #ff00ff, -4px -4px 0 #00ffff, 0 0 30px #ffff00, 0 0 50px #ff00ff',
            letterSpacing: '0.1em',
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          *** TU REGALO ***
        </motion.h2>
        
        <div 
          className="bg-white/95 p-8 md:p-12 mb-8"
          style={{
            border: '6px ridge #ff00ff',
            boxShadow: '0 0 40px #ff00ff, 0 0 60px #00ffff, inset 0 0 40px rgba(255,255,0,0.3)',
          }}
        >
          <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
            <p 
              className="text-center text-2xl font-bold"
              style={{ 
                fontFamily: 'Comic Sans MS, cursive',
                color: '#ff00ff',
                textShadow: '2px 2px 0 #00ffff',
              }}
            >
              &gt;&gt;&gt; He preparado algo muy especial para ti &lt;&lt;&lt;
            </p>
            <div 
              className="p-6"
              style={{
                background: 'linear-gradient(135deg, #ffccff, #ccffff, #ffffcc)',
                border: '4px dotted #ff00ff',
              }}
            >
              <p className="text-xl" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                *** Una coleccion de momentos hermosos *** que he guardado con carino.
              </p>
              <p className="mt-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                Cada imagen representa algo especial: la belleza que encuentro en el mundo y que 
                me recuerda a ti. Flores coloridas, paisajes sonados y momentos de paz que quiero 
                compartir contigo.
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
              ~ Las mejores cosas de la vida no son cosas, son momentos compartidos 
              y recuerdos que duran para siempre ~
            </p>
          </div>
        </div>

        {/* ASCII art del medio */}
        <motion.pre
          className="text-pink-300 text-center text-sm md:text-base mb-6 font-mono"
          style={{
            textShadow: '0 0 15px #ff00ff, 0 0 25px #ffff00',
          }}
        >
{`♥ ★ ♥ ★ ♥ ★ ♥ ★ ♥ ★ ♥ ★ ♥ ★ ♥`}
        </motion.pre>
        
        <div className="text-center">
          <motion.button
            onClick={onVerGaleria}
            className="px-14 py-5 text-2xl font-bold"
            style={{
              fontFamily: 'Impact, fantasy',
              background: 'linear-gradient(135deg, #ff00ff 0%, #00ffff 25%, #ffff00 50%, #00ffff 75%, #ff00ff 100%)',
              backgroundSize: '300% 300%',
              color: '#fff',
              textShadow: '3px 3px 6px #000, 0 0 15px #ff00ff',
              border: '5px double #ffff00',
              borderRadius: '30px',
              boxShadow: '0 0 30px #ff00ff, 0 0 50px #00ffff, 0 0 70px #ffff00',
              animation: 'megaRainbow 4s ease infinite, megaPulse 1.5s ease infinite',
            }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.9 }}
          >
            .:*~*:. VER GALERIA .:*~*:.
          </motion.button>
        </div>

        {/* ASCII art inferior */}
        <motion.pre
          className="text-cyan-300 text-center text-sm md:text-base mt-6 font-mono"
          style={{
            textShadow: '0 0 15px #00ffff, 0 0 25px #ff00ff',
          }}
        >
{`╔═══════════════════════════════════════╗
║  ★·.·´¯\`·.·★  ♥  ★·.·´¯\`·.·★  ♥  ★  ║
╚═══════════════════════════════════════╝`}
        </motion.pre>
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
  );
}