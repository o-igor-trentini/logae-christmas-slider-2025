"use client"
import { motion } from "framer-motion"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-primary via-secondary to-accent shadow-lg border-b-4 border-accent">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="cursor-pointer"
          data-logo
        >
          <div className="text-3xl font-bold text-primary-foreground">🎄 Logae</div>
        </motion.div>
      </div>
    </header>
  )
}
