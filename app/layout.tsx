import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SnowEffect } from "@/components/effects/snow-effect"
import { ThemeProvider } from "@/components/theme-provider"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Logae - Time de Desenvolvimento",
  description: "Plataforma natalina mágica do time de desenvolvimento",
  generator: "v0.app",
  icons: {
    icon: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SnowEffect />
          {/* Header component removed */}
          <main className="min-h-screen">{children}</main>
          {/* Footer component removed for TV slideshow experience */}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
