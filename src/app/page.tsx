import Link from 'next/link'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Hero />

      {/* Features Section */}
      <section className="py-12 md:py-20 border-y border-accent-gold/10">
        <div className="container-premium">
          <div className="text-center mb-12 md:mb-20 max-w-2xl mx-auto px-4 md:px-0">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-white">
              Why <span className="text-gradient">MagnusBets</span>
            </h2>
            <p className="text-base md:text-lg text-gray-400">
              Built on a foundation of rigorous quantitative analysis and real-world validation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
            {[
              {
                icon: '✓',
                title: 'Verified Results',
                description: 'Every pick tracked with actual game outcomes. No simulations, no excuses. Pure data.',
                color: 'from-green-600 to-emerald-500',
              },
              {
                icon: '◆',
                title: 'Transparent Models',
                description: 'Understand the logic behind each pick. Clear confidence scores and edge calculations.',
                color: 'from-accent-gold to-accent-amber',
              },
              {
                icon: '◇',
                title: 'Professional Grade',
                description: 'Built by quantitative analysts. Multi-model consensus. Risk management included.',
                color: 'from-blue-600 to-cyan-500',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="card-premium group p-8 border border-accent-gold/10 hover:border-accent-gold/40 transition-all duration-300"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`w-12 md:w-14 h-12 md:h-14 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-xl md:text-2xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-accent-gold transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8 text-white text-center">
              Our <span className="text-gradient">Methodology</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Multi-Model Consensus',
                  description: 'Multiple quantitative models analyze team performance, player metrics, matchups, and historical patterns.',
                },
                {
                  step: '02',
                  title: 'Edge Detection',
                  description: 'We identify true edge: where market odds diverge from our calculated probabilities by 3%+.',
                },
                {
                  step: '03',
                  title: 'Risk Management',
                  description: 'Every pick includes position sizing, confidence scores, and risk-adjusted returns.',
                },
                {
                  step: '04',
                  title: 'Continuous Improvement',
                  description: 'Models are backtested, validated, and refined based on real outcomes.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-accent-gold to-accent-amber text-premium-dark font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-gradient-to-b from-accent-gold/5 to-transparent">
        <div className="container-premium">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-white">
              Trusted by Professional <span className="text-gradient">Bettors</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { count: '1,200+', label: 'Active Members' },
              { count: '418', label: 'Verified Picks' },
              { count: '72.9%', label: 'Win Rate' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold text-gradient mb-2">{stat.count}</div>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding border-t border-accent-gold/10 bg-gradient-to-b from-accent-gold/5 to-transparent">
        <div className="container-premium">
          <div className="relative max-w-3xl mx-auto">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/15 to-accent-amber/15 rounded-3xl blur-3xl opacity-50"></div>

            <div className="relative card-premium p-8 md:p-14 text-center border border-accent-gold/20 hover:border-accent-gold/40 transition-colors">
              <div className="inline-block mb-4 px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/30">
                <p className="text-xs font-bold text-accent-gold uppercase tracking-widest">Join 1,200+ Data-Driven Traders</p>
              </div>

              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
                Ready to <span className="text-gradient">Win Consistently?</span>
              </h2>
              <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Get verified NBA picks with 72.9% win rate. Real models, real results, real transparency.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button className="btn-primary px-8 py-3 text-base group relative overflow-hidden">
                  <span className="relative z-10">Start Free Beta →</span>
                </button>
                <Link href="/track-record" className="btn-secondary px-8 py-3 text-base hover:border-accent-gold/70 transition-all">
                  View Live Results
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 text-center max-w-md mx-auto mb-6">
                <div>
                  <p className="text-2xl font-bold text-accent-gold">72.9%</p>
                  <p className="text-xs text-gray-400 mt-1">Win Rate</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent-gold">+24.2%</p>
                  <p className="text-xs text-gray-400 mt-1">Avg ROI</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent-gold">418</p>
                  <p className="text-xs text-gray-400 mt-1">Verified</p>
                </div>
              </div>

              <p className="text-xs text-gray-500">
                ✓ No credit card • ✓ Transparent methodology • ✓ Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
