'use client'

import { useState } from 'react'
import AuthModal from './AuthModal'

export default function Hero() {
  const [authOpen, setAuthOpen] = useState(false)

  return (
    <>
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
      <section className="pt-24 md:pt-32 pb-24 md:pb-40 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-premium max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 md:mb-8 bg-gradient-to-r from-gray-900 to-slate-700 bg-clip-text text-transparent leading-tight tracking-tight">
              Quantitative Sports Picks
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-12 font-medium leading-relaxed">
              Pro models meet verified results. 55% win rate. +38% ROI on spreads. Beat Vegas lines.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <button 
                onClick={() => setAuthOpen(true)} 
                className="btn-primary inline-block px-12 py-6 md:py-8 text-lg md:text-xl font-bold shadow-xl hover:shadow-2xl transition-all"
              >
                Join Free Beta
              </button>
              <a href="#results" className="px-12 py-6 md:py-8 border-3 border-gray-200 text-gray-900 text-lg font-bold rounded-xl hover:bg-white hover:shadow-lg transition-all">
                See Verified Results →
              </a>
            </div>
            {/* Stats grid like raspicks */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <span className="text-3xl md:text-4xl font-bold text-blue-600 block">55%</span>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Win Rate</p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-bold text-green-600 block">+38%</span>
                <p className="text-sm text-gray-500 uppercase tracking-wide">ROI</p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-bold text-purple-600 block">+$2.4k</span>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Paper P&L</p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-bold text-indigo-600 block">14</span>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Models</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
