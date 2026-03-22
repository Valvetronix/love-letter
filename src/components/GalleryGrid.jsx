import { motion } from 'motion/react'
import { getAssetPath } from '../lib/assets'

function GalleryGrid({ images }) {
  return (
    <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {images.map((image, index) => (
        <motion.div
          key={image.src}
          className="group relative cursor-pointer overflow-hidden bg-white p-3"
          style={{
            boxShadow: '0 0 20px #ff00ff, 0 0 30px #00ffff',
            border: '3px solid #fff',
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
        >
          <div className="relative aspect-square overflow-hidden">
            <img
              src={getAssetPath(image.src)}
              alt={image.alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              style={{ border: '2px solid #ccc' }}
              loading="lazy"
            />

            <motion.div
              className="absolute inset-0 flex items-end justify-center p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  'linear-gradient(to top, rgba(255,0,255,0.9), rgba(0,255,255,0.7), transparent)',
              }}
            >
              <p
                className="text-center text-base font-bold text-white"
                style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '2px 2px 4px #000, 0 0 10px #ffff00',
                }}
              >
                .:*~*:. {image.label} .:*~*:.
              </p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default GalleryGrid
