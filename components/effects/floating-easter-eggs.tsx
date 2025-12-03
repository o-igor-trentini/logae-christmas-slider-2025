"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { EASTER_EGGS } from "@/lib/constants/easter-eggs"
import Image from "next/image"

interface FloatingEasterEgg {
  id: string
  content: string
  type: string
  startX: number
  startY: number
  endX: number
  endY: number
  duration: number
}

export function FloatingEasterEggs() {
  const [eggs, setEggs] = useState<FloatingEasterEgg[]>([])

  useEffect(() => {
    const generateEggs = () => {
      const count = Math.floor(Math.random() * 3) + 1 // 1-3 eggs por geração

      const newEggs: FloatingEasterEgg[] = []

      for (let i = 0; i < count; i++) {
        const randomEgg = EASTER_EGGS[Math.floor(Math.random() * EASTER_EGGS.length)]

        // Posição inicial aleatória
        const startX = Math.random() * 100
        const startY = Math.random() * 100

        // Posição final aleatória diferente da inicial
        const endX = Math.random() * 100
        const endY = Math.random() * 100

        // Duração variável para movimento mais natural
        const duration = Math.random() * 8 + 8 // 8-16 segundos

        newEggs.push({
          id: `${Date.now()}-${i}`,
          content: randomEgg.content,
          type: randomEgg.type,
          startX,
          startY,
          endX,
          endY,
          duration,
        })
      }

      setEggs((prev) => [...prev, ...newEggs])

      // Limpar eggs antigos e gerar novos periodicamente
      setTimeout(() => {
        setEggs((prev) => prev.slice(-3)) // Manter apenas os últimos 3
        generateEggs()
      }, 10000)
    }

    generateEggs()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {eggs.map((egg) => (
        <motion.div
          key={egg.id}
          initial={{
            left: `${egg.startX}%`,
            top: `${egg.startY}%`,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            left: `${egg.endX}%`,
            top: `${egg.endY}%`,
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
            rotate: [0, Math.random() * 360, Math.random() * 360],
          }}
          transition={{
            duration: egg.duration,
            ease: "easeInOut",
          }}
          className="fixed pointer-events-none"
        >
          {egg.type === "emoji" ? (
            <div className="text-6xl drop-shadow-lg filter blur-0 hover:drop-shadow-xl transition-all">
              {egg.content}
            </div>
          ) : egg.type === "image" ? (
            <div className="relative w-24 h-24 drop-shadow-lg">
              <Image
                src={egg.content || "/placeholder.svg"}
                alt="Easter egg"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          ) : (
            <div className="px-4 py-2 bg-gradient-to-r from-[#1CBA89]/40 to-[#064635]/40 rounded-full backdrop-blur-sm border border-[#1CBA89]/50 whitespace-nowrap">
              <span className="text-white font-bold text-lg drop-shadow-lg">{egg.content}</span>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
