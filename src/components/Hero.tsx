'use client'

import SignupModal from './SignupModal'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-20">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 text-white leading-tight">
            Quantitative NBA Picks
            <span className="block text-amber-500">Verified Results</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Professional-grade models. Transparent methodology. No AI hype.
          </p>
        </div>

        {/* Key Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-16 max-w-2xl mx-auto">
          <div className="bg-slate-800/40 border border-amber-700/30 rounded-xl p-4 backdrop-blur text-center">
            <div className="text-3xl font-bold text-amber-500 mb-1">72.9%</div>
            <div className="text-xs text-gray-500">Win Rate</div>
          </div>
          <div className="bg-slate-800/40 border border-amber-700/30 rounded-xl p-4 backdrop-blur text-center">
            <div className="text-3xl font-bold text-amber-500 mb-1">+24.2%</div>
            <div className="text-xs text-gray-500">Avg ROI</div>
          </div>
          <div className="bg-slate-800/40 border border-amber-700/30 rounded-xl p-4 backdrop-blur text-center">
            <div className="text-3xl font-bold text-amber-500 mb-1">418</div>
            <div className="text-xs text-gray-500">Bets Tracked</div>
          </div>
        </div>

        {/* Signup Form */}
        <SignupModal />

        {/* Secondary CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 border border-amber-700/50 hover:border-amber-500 text-amber-400 hover:text-amber-300 font-bold rounded-lg transition-all hover:bg-slate-800/30">
            View Track Record
          </button>
          <button className="px-6 py-3 border border-amber-700/50 hover:border-amber-500 text-amber-400 hover:text-amber-300 font-bold rounded-lg transition-all hover:bg-slate-800/30">
            How It Works
          </button>
        </div>
      </div>
    </section>
  )
}
