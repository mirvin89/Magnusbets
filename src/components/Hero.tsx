'use client'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-block mb-8">
          <span className="px-4 py-2 rounded-full bg-amber-900/30 border border-amber-700/50 text-amber-300 text-sm font-medium">
            ✨ 24.2% Average ROI • 72.9% Win Rate
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
          Quantitative NBA Picks
          <span className="block text-amber-500">With Proven Results</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
          Professional-grade models backed by verified track record. No AI hype. Just data.
        </p>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          <div className="bg-slate-800/50 border border-amber-700/30 rounded-2xl p-6 backdrop-blur">
            <div className="text-4xl font-bold text-amber-500 mb-2">72.9%</div>
            <div className="text-gray-400 text-sm">Win Rate</div>
          </div>
          <div className="bg-slate-800/50 border border-amber-700/30 rounded-2xl p-6 backdrop-blur">
            <div className="text-4xl font-bold text-amber-500 mb-2">+24.2%</div>
            <div className="text-gray-400 text-sm">Average ROI</div>
          </div>
          <div className="bg-slate-800/50 border border-amber-700/30 rounded-2xl p-6 backdrop-blur">
            <div className="text-4xl font-bold text-amber-500 mb-2">418</div>
            <div className="text-gray-400 text-sm">Tracked Bets</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-lg transition-all shadow-lg hover:shadow-2xl transform hover:scale-105">
            Get Today's Picks – Free During Beta
          </button>
          <button className="px-8 py-4 border border-amber-700/50 hover:border-amber-500/80 text-amber-400 hover:text-amber-300 font-bold rounded-lg transition-all hover:bg-slate-800/50">
            See Live Track Record
          </button>
        </div>
      </div>
    </section>
  )
}
