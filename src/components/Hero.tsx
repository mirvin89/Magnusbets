import React from 'react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white text-gray-900">
      <div className="absolute inset-0 bg-grid-gray/5 bg-grid-16"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-gray-900">
              Data‑Driven NBA Picks
            </span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-700">With Proven Results</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
            Join professional bettors using quantitative models to beat the books.
            <span className="block text-green-600 font-semibold mt-2">
              Verified 24.2% ROI · 72.9% Win Rate · $24,200 Profit
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-2xl shadow-xl hover:shadow-gray-900/20 transition-all duration-300 transform hover:-translate-y-1">
              Get Today's Picks – Free During Beta
            </button>
            <button className="px-8 py-4 bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 font-bold rounded-2xl shadow-md hover:shadow-gray-300/30 transition-all duration-300">
              See Live Track Record
            </button>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200">
              <div className="text-3xl font-bold text-green-600">72.9%</div>
              <div className="text-gray-600 mt-2">Win Rate</div>
              <div className="text-sm text-gray-500">Across 418 tracked bets</div>
            </div>
            <div className="bg-gray-50/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200">
              <div className="text-3xl font-bold text-green-600">24.2%</div>
              <div className="text-gray-600 mt-2">ROI</div>
              <div className="text-sm text-gray-500">Average return on investment</div>
            </div>
            <div className="bg-gray-50/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200">
              <div className="text-3xl font-bold text-green-600">+$24.2k</div>
              <div className="text-gray-600 mt-2">Total Profit</div>
              <div className="text-sm text-gray-500">Since 2022‑23 season</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;