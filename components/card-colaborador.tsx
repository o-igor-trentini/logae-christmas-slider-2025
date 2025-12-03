"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface CardColaboradorProps {
  id: string
  foto: string
  nome: string
  funcao: string
  time: string
  descricao: string
  onClick: () => void
}

export function CardColaborador({ id, foto, nome, funcao, time, descricao, onClick }: CardColaboradorProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [mouseOverCount, setMouseOverCount] = useState(0)

  const handleMouseEnter = () => {
    setIsHovering(true)
    setMouseOverCount((prev) => prev + 1)
  }

  return (
    <motion.div
      data-card-id={id}
      whileHover={{ y: -12, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovering(false)}
      className="cursor-pointer group h-full"
    >
      <div className="relative h-full overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300">
        {/* Gradient border effect */}
        <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-[#064635] via-[#1CBA89] to-[#064635] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-[2px] rounded-2xl bg-white dark:bg-slate-800"></div>
        </div>

        {/* Content container */}
        <div className="relative h-full p-6 flex flex-col bg-white dark:bg-slate-800 rounded-2xl">
          {/* Background shimmer effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1CBA89] to-transparent opacity-0 group-hover:opacity-10 animate-pulse pointer-events-none rounded-2xl" />

          {/* Image container with enhanced effects */}
          <div className="relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-[#064635] to-[#1CBA89] p-[3px]">
            <motion.img
              src={foto}
              alt={nome}
              className="w-full h-48 object-cover rounded-lg"
              animate={isHovering ? { scale: 1.08, rotate: 1 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Floating snow particles on hover */}
            {isHovering && (
              <>
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-2xl pointer-events-none"
                    initial={{ opacity: 0, y: 0, x: 0 }}
                    animate={{
                      opacity: [1, 0],
                      y: 50,
                      x: Math.random() * 80 - 40,
                    }}
                    transition={{ duration: 1.2, delay: i * 0.08 }}
                  >
                    ❄️
                  </motion.div>
                ))}
              </>
            )}
          </div>

          {/* Name with gradient */}
          <motion.h3
            className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#064635] to-[#1CBA89] bg-clip-text text-transparent"
            animate={isHovering ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {nome}
          </motion.h3>

          {/* Role and team info */}
          <div className="mb-4 pb-4 border-b border-[#1CBA89] border-opacity-20">
            <p className="text-sm font-semibold text-[#1CBA89] mb-1">{funcao}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{time}</p>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-6 flex-grow leading-relaxed">{descricao}</p>

          {/* Action button with gradient */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-gradient-to-r from-[#064635] to-[#1CBA89] text-white font-bold rounded-lg hover:shadow-lg transition-all duration-200 relative overflow-hidden group/btn"
          >
            {/* Button shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover/btn:opacity-20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-all duration-500"></div>
            <span className="relative">Ver Detalhes ⭐</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
