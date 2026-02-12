'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="border-b border-purple-900/20 bg-purple-950/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-playfair font-bold text-white hover:text-purple-400 transition-colors">
            MagnusBets
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/track-record" className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-medium">
              Results
            </Link>
            <Link href="/picks" className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-medium">
              Picks
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-medium">
              Pricing
            </Link>
          </div>

          {/* Sign In Button */}
          <button className="px-6 py-2 text-purple-400 hover:text-purple-300 font-medium text-sm border border-purple-700/50 hover:border-purple-500 rounded-lg transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  )
}
