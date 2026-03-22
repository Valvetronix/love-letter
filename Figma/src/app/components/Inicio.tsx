import { motion } from 'motion/react';
import lavenderField from 'figma:asset/002483eef74bba8d4c660456759c92aa448d4e93.png';

export function Inicio({ onOpenCarta }: { onOpenCarta: () => void }) {
  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${lavenderField})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay con gradiente 2000s super brillante */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(45deg, rgba(255,0,255,0.6), rgba(0,255,255,0.5), rgba(255,255,0,0.4), rgba(255,0,255,0.6))',
          animation: 'rainbow 3s ease infinite',
        }}
      />
      
      <motion.div
        className="relative z-10 text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* ASCII art decorativo */}
        <motion.pre
          className="text-yellow-300 text-sm md:text-base mb-4 font-mono"
          style={{
            textShadow: '0 0 10px #ff00ff, 0 0 20px #00ffff',
          }}
        >
{`        .:*~*:._.:*~*:._.:*~*:.
    .:*~  ★ ♥ ★ ♥ ★  ~*:.
.:*~*:._.:*~*:._.:*~*:._.:*~*:.`}
        </motion.pre>

        <motion.h1
          className="mb-4 text-6xl md:text-8xl font-bold"
          style={{
            fontFamily: 'Impact, fantasy',
            background: 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 40px rgba(255,255,255,0.8)',
            filter: 'drop-shadow(0 0 20px #ff00ff) drop-shadow(0 0 30px #00ffff)',
            animation: 'rainbow 2s ease infinite',
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Feliz Aniversario &lt;3
        </motion.h1>

        {/* Más ASCII art */}
        <motion.pre
          className="text-pink-300 text-sm md:text-base mb-8 font-mono"
          style={{
            textShadow: '0 0 10px #ff00ff, 0 0 20px #ffff00',
          }}
        >
{`    ♥♥♥  ★  ♥♥♥  ★  ♥♥♥
  ★  .:*~*:.  ★  .:*~*:.  ★
    ♥♥♥  ★  ♥♥♥  ★  ♥♥♥`}
        </motion.pre>
        
        <motion.button
          onClick={onOpenCarta}
          className="px-12 py-6 text-2xl font-bold relative overflow-hidden"
          style={{
            fontFamily: 'Impact, fantasy',
            background: 'linear-gradient(135deg, #ff00ff 0%, #00ffff 50%, #ffff00 100%)',
            backgroundSize: '200% 200%',
            color: '#fff',
            textShadow: '2px 2px 4px #000, 0 0 10px #ff00ff',
            border: '4px dotted #ffff00',
            borderRadius: '20px',
            boxShadow: '0 0 20px #ff00ff, 0 0 40px #00ffff, inset 0 0 20px rgba(255,255,255,0.5)',
            animation: 'rainbow 3s ease infinite, pulse 1s ease infinite',
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
            }}
            animate={{
              x: ['-200%', '200%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
          />
          <span className="relative z-10">~*~ ABRIR CARTA ~*~</span>
        </motion.button>

        {/* ASCII art inferior */}
        <motion.pre
          className="text-cyan-300 text-sm md:text-base mt-8 font-mono"
          style={{
            textShadow: '0 0 10px #00ffff, 0 0 20px #ff00ff',
          }}
        >
{`.:*~*:._.:*~*:._.:*~*:._.:*~*:.
    ★ ♥ ★ ♥ ★ ♥ ★ ♥ ★
.:*~*:._.:*~*:._.:*~*:._.:*~*:.`}
        </motion.pre>
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
  );
}