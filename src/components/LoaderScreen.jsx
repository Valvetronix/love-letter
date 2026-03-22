import { motion } from 'motion/react'

function LoaderScreen({ message }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 px-4">
      <motion.div
        className="mb-8"
        animate={{ rotate: [0, 180, 180, 360, 360] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          times: [0, 0.4, 0.5, 0.9, 1],
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <ellipse
              key={index}
              cx="60"
              cy="60"
              rx="15"
              ry="30"
              fill="#FFD700"
              transform={`rotate(${index * 30} 60 60)`}
              style={{ transformOrigin: '60px 60px' }}
            />
          ))}

          <circle cx="60" cy="60" r="25" fill="#8B4513" />

          {Array.from({ length: 8 }).map((_, index) => (
            <circle
              key={`dot-${index}`}
              cx={60 + Math.cos((index * Math.PI) / 4) * 12}
              cy={60 + Math.sin((index * Math.PI) / 4) * 12}
              r="2"
              fill="#654321"
            />
          ))}
        </svg>
      </motion.div>

      <p className="animate-pulse text-center text-2xl font-bold tracking-widest text-white">
        {message}
      </p>
    </div>
  )
}

export default LoaderScreen
