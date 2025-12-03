'use client'

import { useEffect, useState } from 'react'

interface AnimatedCounterProps {
  value: number | string
  className?: string
  duration?: number
}

export function AnimatedCounter({ value: finalValue, className = '', duration = 2 }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState<number | string>(0)

  const numericValue = typeof finalValue === 'string' ? Number.parseInt(finalValue, 10) : finalValue

  useEffect(() => {
    if (isNaN(numericValue)) {
      setDisplayValue(finalValue)
      return
    }

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      setDisplayValue(Math.floor(numericValue * progress))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setDisplayValue(numericValue)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [numericValue, duration])

  return <span className={className}>{displayValue}</span>
}
