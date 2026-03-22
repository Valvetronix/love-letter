import { motion } from 'motion/react';

const lavenderBg = 'https://images.unsplash.com/photo-1617490506269-4406a7d610f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXZlbmRlciUyMGZpZWxkJTIwcHVycGxlJTIwc3VtbWVyfGVufDF8fHx8MTc3NDE5MzIzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

export function Carta({ onOpenRegalo }: { onOpenRegalo: () => void }) {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        backgroundImage: `url(${lavenderBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay neón */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(135deg, rgba(255,0,255,0.5), rgba(0,255,255,0.4), rgba(255,255,0,0.3))',
        }}
      />

      <motion.div
        className="max-w-3xl w-full relative z-10"
        initial={{ y: 100, opacity: 0, rotateX: 90 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        {/* ASCII art superior */}
        <motion.pre
          className="text-yellow-300 text-center text-xs md:text-sm mb-4 font-mono"
          style={{
            textShadow: '0 0 10px #ff00ff, 0 0 20px #00ffff',
          }}
        >
{`★·.·´¯\`·.·★ ♥ ★·.·´¯\`·.·★ ♥ ★·.·´¯\`·.·★
  .:*~*:. .:*~*:. .:*~*:. .:*~*:.
★·.·´¯\`·.·★ ♥ ★·.·´¯\`·.·★ ♥ ★·.·´¯\`·.·★`}
        </motion.pre>

        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-6"
          style={{
            fontFamily: 'Comic Sans MS, cursive',
            color: '#fff',
            textShadow: '3px 3px 0 #ff00ff, -3px -3px 0 #00ffff, 0 0 20px #ffff00, 0 0 30px #ff00ff',
            filter: 'drop-shadow(0 0 10px #00ffff)',
          }}
        >
          .:*~*:. Mi Carta Para Ti .:*~*:.
        </motion.h2>
        
        <div 
          className="bg-white/90 p-8 md:p-12 mb-6"
          style={{
            border: '5px double #ff00ff',
            boxShadow: '0 0 30px #ff00ff, 0 0 50px #00ffff, inset 0 0 30px rgba(255,0,255,0.2)',
          }}
        >
          <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
            <p style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Querida persona especial,
            </p>
            <p style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Hoy quiero decirte lo mucho que significas para mi. Cada dia a tu lado es un regalo 
              lleno de momentos hermosos que atesoro en mi corazon. Tu sonrisa ilumina mis dias 
              mas oscuros y tu presencia hace que todo tenga mas sentido.
            </p>
            <p style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Eres esa persona que hace que los dias ordinarios se conviertan en extraordinarios. 
              Gracias por ser tan especial, por tu bondad, tu carino y por todos los momentos 
              compartidos que llevare siempre conmigo.
            </p>
            <p style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Este pequeno detalle es solo una muestra de todo lo que guardas en mi vida. 
              Espero que te haga sonreir tanto como tu me haces sonreir a mi cada dia.
            </p>
            <p className="text-right" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Con todo mi carino,<br />
              Alguien que te aprecia mucho &lt;3
            </p>
          </div>
        </div>

        {/* ASCII art decorativo */}
        <motion.pre
          className="text-pink-300 text-center text-xs md:text-sm mb-4 font-mono"
          style={{
            textShadow: '0 0 10px #ff00ff, 0 0 20px #ffff00',
          }}
        >
{`♥♥♥ ★ ♥♥♥ ★ ♥♥♥ ★ ♥♥♥ ★ ♥♥♥`}
        </motion.pre>
        
        <div className="text-center">
          <motion.button
            onClick={onOpenRegalo}
            className="px-10 py-4 text-xl font-bold"
            style={{
              fontFamily: 'Impact, fantasy',
              background: 'linear-gradient(135deg, #ff00ff 0%, #00ffff 50%, #ffff00 100%)',
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
            *** ABRIR REGALO ***
          </motion.button>
        </div>

        {/* ASCII art inferior */}
        <motion.pre
          className="text-cyan-300 text-center text-xs md:text-sm mt-4 font-mono"
          style={{
            textShadow: '0 0 10px #00ffff, 0 0 20px #ff00ff',
          }}
        >
{`★·.·´¯\`·.·★ ♥ ★·.·´¯\`·.·★ ♥ ★·.·´¯\`·.·★
  .:*~*:. .:*~*:. .:*~*:. .:*~*:.`}
        </motion.pre>
      </motion.div>

      <style>{`
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}