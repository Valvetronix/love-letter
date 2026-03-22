import { motion } from 'motion/react';

export function Loading({ message = "abriendo…" }: { message?: string }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500">
      <motion.div
        className="mb-8"
        animate={{
          rotate: [0, 180, 180, 360, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.4, 0.5, 0.9, 1],
        }}
      >
        {/* Girasol SVG */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Pétalos externos */}
          {[...Array(12)].map((_, i) => (
            <ellipse
              key={i}
              cx="60"
              cy="60"
              rx="15"
              ry="30"
              fill="#FFD700"
              transform={`rotate(${i * 30} 60 60)`}
              style={{ transformOrigin: '60px 60px' }}
            />
          ))}
          {/* Centro del girasol */}
          <circle cx="60" cy="60" r="25" fill="#8B4513" />
          {/* Detalles del centro */}
          {[...Array(8)].map((_, i) => (
            <circle
              key={`dot-${i}`}
              cx={60 + Math.cos((i * Math.PI) / 4) * 12}
              cy={60 + Math.sin((i * Math.PI) / 4) * 12}
              r="2"
              fill="#654321"
            />
          ))}
        </svg>
      </motion.div>
      
      <p className="text-white text-2xl font-bold tracking-widest animate-pulse">
        {message}
      </p>
    </div>
  );
}
