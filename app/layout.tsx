import { ReactNode } from 'react';

import type { Metadata } from 'next';

import { Geist, Geist_Mono } from 'next/font/google';

import { Analytics } from '@vercel/analytics/next';

import { SnowEffect } from '@/components/effects/snow-effect';
import { ThemeProvider } from '@/components/theme-provider';

import './globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'Logae - Time de Desenvolvimento',
  description: 'Plataforma natalina mágica do time de desenvolvimento',
  generator: 'Igor Trentini',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='pt-BR' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          <SnowEffect />
          {/* Header component removed */}
          <main className='min-h-screen'>{children}</main>
          {/* Footer component removed for TV slideshow experience */}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
