'use client'

import { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

export function Footer() {
  const [showGift, setShowGift] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  const handleGiftClick = () => {
    setClickCount(clickCount + 1)
    if (clickCount === 0) {
      setShowGift(true)
      setTimeout(() => setShowGift(false), 3000)
    }
  }

  return (
    <footer className='bg-gradient-to-r from-primary to-secondary text-primary-foreground py-12 border-t-4 border-accent'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
          <div>
            <h3 className='text-xl font-bold mb-2'>Logae 2024</h3>
            <p className='opacity-90'>Criado com amor para o time de desenvolvimento ❤️</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGiftClick}
            className='text-4xl cursor-pointer hover:opacity-80 transition-opacity'
            title='Clique para encontrar o presente secreto!'
          >
            🎁
          </motion.button>

          <AnimatePresence>
            {showGift && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className='fixed bottom-32 right-8 bg-accent text-accent-foreground p-6 rounded-lg shadow-2xl font-bold text-center'
              >
                🎁 Você encontrou o presente misterioso!
                <br />
                Que seus deploys nunca quebrem 🎄
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className='mt-8 pt-8 border-t border-primary-foreground/20 text-center opacity-75'>
          <p>Feliz Natal! 🎅 Ho Ho Ho!</p>
        </div>
      </div>
    </footer>
  )
}
