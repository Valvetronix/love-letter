import { motion } from 'motion/react';
import lavenderField from 'figma:asset/002483eef74bba8d4c660456759c92aa448d4e93.png';

const lavenderBg = 'https://images.unsplash.com/photo-1684746742697-dd830100ba5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXZlbmRlciUyMGZsb3dlcnMlMjBwcm92ZW5jZSUyMGZpZWxkfGVufDF8fHx8MTc3NDE5MzIzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

const images = [
  {
    url: lavenderField,
    title: 'Campo de Lavanda',
  },
  {
    url: 'https://images.unsplash.com/photo-1629936120687-aad4ce37c548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5mbG93ZXIlMjBmaWVsZCUyMHZpbnRhZ2V8ZW58MXx8fHwxNzc0MTkyNzE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Girasoles',
  },
  {
    url: 'https://images.unsplash.com/photo-1713082063908-cd994b8a2372?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjBmbG93ZXJzJTIwYWVzdGhldGljfGVufDF8fHx8MTc3NDE5MjcyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Flores Purpuras',
  },
  {
    url: 'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWlzeSUyMGZsb3dlcnMlMjBnYXJkZW58ZW58MXx8fHwxNzc0MTkyNzIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Margaritas',
  },
  {
    url: 'https://images.unsplash.com/photo-1651192335723-918f51c714a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dWxpcCUyMGZpZWxkJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc0MTkyNzIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Tulipanes',
  },
  {
    url: 'https://images.unsplash.com/photo-1655241238398-df1b5cd8c743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkZmxvd2VycyUyMG1lYWRvd3xlbnwxfHx8fDE3NzQxNjE4Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Flores Silvestres',
  },
  {
    url: 'https://images.unsplash.com/photo-1606804645535-0160540d7d40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlJTIwZ2FyZGVuJTIwcGlua3xlbnwxfHx8fDE3NzQwOTY1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Rosas Rosadas',
  },
  {
    url: 'https://images.unsplash.com/photo-1563483698633-a944c5e78cf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBmbG93ZXJzJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc0MTkyNzIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Flores Botanicas',
  },
  {
    url: 'https://images.unsplash.com/photo-1617836250803-24873f080562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVycnklMjBibG9zc29tJTIwc3ByaW5nfGVufDF8fHx8MTc3NDEzMDI3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Cerezos en Flor',
  },
];

export function Galeria() {
  return (
    <div 
      className="min-h-screen py-12 px-4 relative overflow-hidden"
      style={{
        backgroundImage: `url(${lavenderBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay neón animado */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(135deg, rgba(255,0,255,0.4), rgba(0,255,255,0.3), rgba(255,255,0,0.3), rgba(255,0,255,0.4))',
          backgroundSize: '400% 400%',
          animation: 'megaRainbow 8s ease infinite',
        }}
      />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* ASCII art decorativo superior */}
        <motion.pre
          className="text-yellow-300 text-center text-xs md:text-sm mb-6 font-mono"
          style={{
            textShadow: '0 0 15px #ff00ff, 0 0 25px #00ffff',
          }}
        >
{`╔════════════════════════════════════════════════════════╗
║  ★·.·´¯\`·.·★  ♥  GALERIA DE MOMENTOS  ♥  ★·.·´¯\`·.·★  ║
╚════════════════════════════════════════════════════════╝`}
        </motion.pre>

        <motion.h2
          className="text-5xl md:text-7xl font-bold text-center mb-8"
          style={{
            fontFamily: 'Impact, fantasy',
            color: '#fff',
            textShadow: '4px 4px 0 #ff00ff, -4px -4px 0 #00ffff, 0 0 30px #ffff00, 0 0 50px #ff00ff',
            letterSpacing: '0.05em',
          }}
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", bounce: 0.4 }}
        >
          .:*~*:. GALERIA .:*~*:.
        </motion.h2>
        
        <motion.pre
          className="text-center text-lg md:text-xl text-white mb-12 font-mono"
          style={{
            textShadow: '2px 2px 4px #000, 0 0 10px #ff00ff',
          }}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
{`♥ ★ Una coleccion de belleza natural ★ ♥
*** que quiero compartir contigo ***`}
        </motion.pre>
        
        {/* Grid responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden cursor-pointer bg-white p-3"
              style={{
                boxShadow: '0 0 20px #ff00ff, 0 0 30px #00ffff',
                border: '3px solid #fff',
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{
                    border: '2px solid #ccc',
                  }}
                />
                
                {/* Overlay con título - estilo 2000s */}
                <motion.div
                  className="absolute inset-0 flex items-end justify-center p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(to top, rgba(255,0,255,0.9), rgba(0,255,255,0.7), transparent)',
                  }}
                >
                  <p 
                    className="text-white font-bold text-base text-center"
                    style={{
                      fontFamily: 'Comic Sans MS, cursive',
                      textShadow: '2px 2px 4px #000, 0 0 10px #ffff00',
                    }}
                  >
                    .:*~*:. {image.title} .:*~*:.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* ASCII art final */}
        <motion.pre
          className="text-pink-300 text-center text-base md:text-lg font-mono"
          style={{
            textShadow: '0 0 15px #ff00ff, 0 0 25px #ffff00',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
{`♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥
★  Espero que hayas disfrutado  ★
★    este pequeno detalle  <3    ★
♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥`}
        </motion.pre>

        {/* Más decoración ASCII */}
        <motion.pre
          className="text-cyan-300 text-center text-xs md:text-sm mt-6 font-mono"
          style={{
            textShadow: '0 0 10px #00ffff, 0 0 20px #ff00ff',
          }}
        >
{`╔════════════════════════════════════════════════════════╗
║  ★·.·´¯\`·.·★  ♥  ★·.·´¯\`·.·★  ♥  ★·.·´¯\`·.·★  ♥  ★  ║
╚════════════════════════════════════════════════════════╝`}
        </motion.pre>
      </motion.div>

      <style>{`
        @keyframes megaRainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}