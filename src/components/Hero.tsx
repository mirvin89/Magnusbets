'use client'

export default function Hero() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Professional Sports Betting Models
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            Data-driven picks with proven ROI
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
            <div className="text-3xl font-bold text-cyan-400 mb-2">51.0%</div>
            <div className="text-sm text-gray-400">Win Rate</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">+$359</div>
            <div className="text-sm text-gray-400">Cumulative P&L</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">49</div>
            <div className="text-sm text-gray-400">Picks Tracked</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
            <div className="text-3xl font-bold text-orange-400 mb-2">20.7%</div>
            <div className="text-sm text-gray-400">Best ROI</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Premium Picks
          </button>
          <button className="px-8 py-4 border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-bold rounded-lg transition-all duration-300">
            View Results
          </button>
        </div>
      </div>
    </section>
  )
}
