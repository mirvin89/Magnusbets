'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 md:pb-32">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl opacity-30 animate-pulse-soft"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-amber/5 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent-gold/5 rounded-full blur-2xl opacity-25"></div>

      <div className="container-premium relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto animate-fade-in">
          <div className="inline-block mb-6 px-4 py-2 rounded-full glass border-accent-gold/30">
            <p className="text-sm font-medium text-accent-gold">Professional NBA Intelligence</p>
          </div>
          
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Quantitative </span>
            <span className="text-gradient">NBA Picks</span>
            <span className="block text-white">Verified Results</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Professional-grade quantitative models with transparent methodology. No AI hype, just data-driven edge and verified performance.
          </p>
        </div>

        {/* Key Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {[
            { value: '72.9%', label: 'Win Rate', sublabel: '418 verified bets' },
            { value: '+24.2%', label: 'Avg ROI', sublabel: 'Per bet' },
            { value: '$24.2K', label: 'Total Profit', sublabel: 'Since launch' },
          ].map((stat, idx) => (
            <div key={idx} className="stat-card group cursor-default">
              <div className="relative z-10">
                <p className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider">
                  {stat.label}
                </p>
                <p className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500">
                  {stat.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <button className="btn-primary">
            Get Started Free
          </button>
          <Link href="/track-record" className="btn-secondary">
            View Track Record
          </Link>
        </div>

        {/* Trust Badge */}
        <div className="text-center text-sm text-gray-400 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p>✓ Zero commission • ✓ Transparent models • ✓ Real results</p>
        </div>
      </div>
    </section>
  )
}
