import React from 'react';

interface HeroProps {
  totalPicks: number;
  wins: number;
  winRate: number;
  cumulativeProfit: number;
  pendingPicks: number;
}

export default function Hero({ totalPicks, wins, winRate, cumulativeProfit, pendingPicks }: HeroProps) {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Professional <span className="text-cyan-400">Sports Betting</span> Models
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            Data‑driven picks with verified results. Join the sharpest bettors.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-cyan-400 mb-2">{winRate.toFixed(1)}%</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Win Rate</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-400 mb-2">${cumulativeProfit.toFixed(0)}</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Cumulative P&L</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-400 mb-2">{totalPicks}</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Picks Tracked</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-400 mb-2">{pendingPicks}</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Pending Today</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl text-lg">
            Get Premium Picks
          </button>
          <button className="px-8 py-4 border-2 border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-bold rounded-xl transition-all duration-300 text-lg">
            View Verified Results
          </button>
        </div>
      </div>
    </section>
  );
}