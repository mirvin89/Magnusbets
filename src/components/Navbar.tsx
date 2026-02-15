'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-50 glass border-b border-accent-gold/10">
      <div className="container-premium">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-playfair font-bold text-gradient hover:opacity-80 transition-opacity"
          >
            MB
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { href: '/track-record', label: 'Results' },
              { href: '/picks', label: 'Picks' },
              { href: '/about', label: 'About' },
              { href: '/pricing', label: 'Pricing' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-gray-500 hover:text-accent-gold transition-colors text-sm font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-accent-gold to-accent-amber scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link href="/auth" className="relative px-6 py-2.5 rounded-lg font-medium text-sm overflow-hidden group transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-600 text-gray-900 hover:shadow-lg hover:shadow-blue-500/50">
            <span className="relative z-10">Join Beta</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-accent-gold hover:text-accent-amber transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-accent-gold/10 animate-fade-in">
            {[
              { href: '/track-record', label: 'Results' },
              { href: '/picks', label: 'Picks' },
              { href: '/about', label: 'About' },
              { href: '/pricing', label: 'Pricing' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-gray-500 hover:text-cyan-400 transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/auth"
              className="block px-4 py-3 text-cyan-400 font-medium text-sm border-t border-blue-500/10"
            >
              Join Beta
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
