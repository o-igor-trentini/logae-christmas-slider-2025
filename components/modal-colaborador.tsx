"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from "react"

interface ModalColaboradorProps {
  isOpen: boolean
  onClose: () => void
  colaborador: {
    foto: string
    nome: string
    funcao: string
    time: string
    descricao: string
    descricaoCompleta: string
  } | null
}

export function ModalColaborador({ isOpen, onClose, colaborador }: ModalColaboradorProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && colaborador && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-800 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative"
          >
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-[#064635] via-[#1CBA89] to-[#064635] pointer-events-none">
              <div className="absolute inset-[2px] rounded-3xl bg-white dark:bg-slate-800"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-8">
              {/* Image with gradient border */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="mb-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#064635] to-[#1CBA89] p-[2px]"
              >
                <img
                  src={colaborador.foto || "/placeholder.svg"}
                  alt={colaborador.nome}
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </motion.div>

              {/* Info section with gradient accent */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="mb-6 p-6 rounded-xl bg-gradient-to-r from-[#064635] from-10% via-[#1CBA89] via-50% to-[#064635] to-90% opacity-10 border border-[#1CBA89] border-opacity-30"
              >
                <h2 className="text-3xl font-bold text-[#064635] dark:text-[#1CBA89] mb-3">{colaborador.nome} ⭐</h2>
                <p className="text-lg font-semibold text-[#1CBA89] mb-2">{colaborador.funcao}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{colaborador.time}</p>
              </motion.div>

              {/* Description with modern styling */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mb-8 p-5 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-l-4 border-[#1CBA89]"
              >
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
                  {colaborador.descricaoCompleta}
                </p>
              </motion.div>

              {/* Action buttons */}
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="flex-1 py-3 bg-gradient-to-r from-[#064635] to-[#1CBA89] text-white font-bold rounded-lg hover:shadow-lg transition-all relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-500"></div>
                  <span className="relative">Voltar 🎄</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 py-3 border-2 border-[#1CBA89] text-[#1CBA89] font-bold rounded-lg hover:bg-[#1CBA89] hover:text-white transition-all duration-200"
                >
                  Compartilhar 🎁
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
