'use client'

import { motion } from 'framer-motion'

import { AnimatedCounter } from '@/components/animated-counter'

interface ContentRendererProps {
  content: string | number
  className?: string
  prefix?: string
  duration?: number
}

export function ContentRenderer({ content, className = '', prefix, duration = 2 }: ContentRendererProps) {
  const contentStr = String(content)

  const isNumeric = /^\d+[\d.,]*$/.test(contentStr)
  const hasPrefix = prefix || /^[^\d]*/.exec(contentStr)?.[0]
  const numericPart = contentStr.replace(/[^\d.,]/g, '')
  const extractedPrefix = prefix || /^[^\d]*/.exec(contentStr)?.[0] || ''

  if (isNumeric || (hasPrefix && numericPart)) {
    // Renderiza número com animação de contador e prefixo
    const numValue = numericPart.replace(/\D/g, '')

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={className}
      >
        <span className='text-white'>{extractedPrefix}</span>
        <AnimatedCounter value={numValue} className='text-white' duration={duration} />
      </motion.div>
    )
  }

  // Renderiza texto com animação discreta
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={className}
    >
      {contentStr}
    </motion.div>
  )
}
