"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { createPortal } from "react-dom"

interface Particle {
  id: number
  x: number
  y: number
  life: number
  type: "snowflake" | "gift" | "sparkle"
}

export function CursorTrail() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    let particleId = 0
    const particleArray: Particle[] = []
    const types = ["snowflake", "gift", "sparkle"] as const

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() < 0.4) {
        const type = types[Math.floor(Math.random() * types.length)]
        const newParticle: Particle = {
          id: particleId++,
          x: e.clientX,
          y: e.clientY,
          life: 1,
          type,
        }
        particleArray.push(newParticle)
        setParticles([...particleArray.slice(-50)])
      }

      particleArray.forEach((p) => {
        p.life -= 0.02
      })
      particleArray.splice(
        0,
        particleArray.findIndex((p) => p.life <= 0),
      )
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (!mounted) return null

  const ParticleElement = ({ particle }: { particle: Particle }) => {
    const getEmoji = () => {
      switch (particle.type) {
        case "snowflake":
          return "❄️"
        case "gift":
          return "🎁"
        case "sparkle":
          return "✨"
        default:
          return "❄️"
      }
    }

    return (
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 0 }}
        transition={{ duration: 1 }}
        className="pointer-events-none fixed text-2xl"
        style={{
          left: particle.x,
          top: particle.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        {getEmoji()}
      </motion.div>
    )
  }

  return (
    <>
      {mounted &&
        particles.map((particle) =>
          createPortal(<ParticleElement key={particle.id} particle={particle} />, document.body),
        )}
    </>
  )
}
