import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar2 from '@/components/Navbar2'
import Footer2 from '@/components/Footer2'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MagnusBets - Professional Sports Betting Models',
  description: 'Data‑driven picks with verified results. Join the sharpest bettors.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen text-gray-100 antialiased overflow-x-hidden`}>
        <Navbar2 />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer2 />
      </body>
    </html>
  )
}