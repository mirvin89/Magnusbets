'use client'

import { useState } from 'react'
import AuthModal from './AuthModal'

export default function Hero() {
  const [authOpen, setAuthOpen] = useState(false)

  return (
    <>
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
      <section className="pt-24 md:pt-32 pb-24 md:pb-40 relative overflow-hidden">
        <div className="container-premium">
          <div className="text-center max-w-3xl mx-auto px-6 sm:px-8 md:px-0 mb-12 md:mb-20">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 md:mb-8 text-gray-900 leading-tight tracking-tight">
              Quantitative Sports Picks
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-12 font-medium">
              Verified Results
            </p>
            <button 
              onClick={() => setAuthOpen(true)} 
              className="btn-primary inline-block px-12 py-6 md:py-8 text-lg md:text-xl font-bold shadow-xl hover:shadow-2xl transition-all mx-auto"
            >
              Join Beta Free
            </button>
          </div>
        </div>
      </section>
    </>
  )
}