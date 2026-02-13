'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-32">
      {/* No animated background for minimal look */}

      <div className="container-premium relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-8 md:mb-20 max-w-3xl mx-auto animate-fade-in px-4 md:px-0">
          <div className="inline-block mb-6 px-4 py-2 rounded-lg bg-gray-100 border border-gray-200">
            <p className="text-sm font-medium text-gray-700">Professional NBA Intelligence</p>
          </div>
          
          <h1 className="font-playfair text-3xl md:text-7xl font-bold mb-4 md:mb-6 leading-tight text-black">
            Quantitative<br />NBA Picks<br />Verified Results
          </h1>
          
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
            Data-driven NBA picks with transparent models. Every bet tracked, every result verified. Real performance, no excuses.
          </p>
        </div>

        {/* Key Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {[
            { value: '55.6%', label: 'Win Rate', sublabel: '10/18 verified bets' },
            { value: '+12.2%', label: 'Avg ROI', sublabel: 'Per bet' },
            { value: '+$219', label: 'Total Profit', sublabel: 'Real money' },
          ].map((stat, idx) => (
            <div key={idx} className="stat-card group cursor-default">
              <div className="relative z-10">
                <p className="text-xs md:text-sm font-medium text-gray-500 mb-3 uppercase tracking-wider">
                  {stat.label}
                </p>
                <p className="text-3xl md:text-5xl font-bold text-black mb-2">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  {stat.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 animate-slide-up px-4 md:px-0" style={{ animationDelay: '0.2s' }}>
          <button className="btn-primary group relative overflow-hidden">
            <span className="relative z-10">Join Free Beta →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-gold to-accent-amber opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <Link href="/track-record" className="btn-secondary hover:border-accent-gold/70 transition-colors">
            See Verified Results
          </Link>
        </div>

        {/* Trust Badge */}
        <div className="text-center text-xs md:text-sm text-gray-600 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p>✓ Zero commission • ✓ Transparent models • ✓ Real results</p>
        </div>
      </div>
    </section>
  )
}
