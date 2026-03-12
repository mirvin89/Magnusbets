'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700/30 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-400 transition-all duration-300">
            ⚡ MagnusBets
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#picks" className="text-gray-400 hover:text-white transition-colors duration-300">
              Picks
            </a>
            <a href="#performance" className="text-gray-400 hover:text-white transition-colors duration-300">
              Performance
            </a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition-colors duration-300">
              Pricing
            </a>
          </div>

          <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  )
}
