"use client"

import { useTheme } from "next-themes"
import Snowfall from "react-snowfall"
import { useEffect, useState } from "react"

export function SnowEffect() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const snowColor = theme === "dark" ? "rgba(255, 255, 255, 0.9)" : "rgba(59, 130, 246, 0.8)"

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 50 }}>
      <Snowfall color={snowColor} snowflakeCount={40} radius={[0.5, 3]} speed={[0.5, 2]} wind={[-0.5, 2]} />
    </div>
  )
}
