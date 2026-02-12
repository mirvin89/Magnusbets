import Link from 'next/link'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Hero />

      {/* Features Section */}
      <section className="section-padding border-y border-accent-gold/10">
        <div className="container-premium">
          <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-white">
              Why <span className="text-gradient">MagnusBets</span>
            </h2>
            <p className="text-lg text-gray-400">
              Built on a foundation of rigorous quantitative analysis and real-world validation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '✓',
                title: 'Verified Results',
                description: 'Every pick tracked with actual game outcomes. No simulations, no excuses. Pure data.',
              },
              {
                icon: '◆',
                title: 'Transparent Models',
                description: 'Understand the logic behind each pick. Clear confidence scores and edge calculations.',
              },
              {
                icon: '◇',
                title: 'Professional Grade',
                description: 'Built by quantitative analysts. Multi-model consensus. Risk management included.',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="card-premium group p-8"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-3xl text-gradient mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-gold transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
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
      <section className="section-padding border-t border-accent-gold/10">
        <div className="container-premium">
          <div className="relative max-w-2xl mx-auto">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/10 to-accent-amber/10 rounded-3xl blur-2xl opacity-40"></div>

            <div className="relative card-premium p-8 md:p-12 text-center">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to Get <span className="text-gradient">Serious</span> About Picks?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Join the community of data-driven bettors. Free access during beta.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 btn-primary">
                  Get Started Free
                </button>
                <Link href="/track-record" className="flex-1 btn-secondary">
                  View Full Results
                </Link>
              </div>

              <p className="text-sm text-gray-500 mt-6">
                ✓ No credit card required • ✓ Full pick history included • ✓ Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
