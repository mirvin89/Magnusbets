import Link from 'next/link'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Hero />

      {/* Why MagnusBets - Benefits Section */}
      <section className="py-16 md:py-24 border-b border-cyan-500/10">
        <div className="container-premium">
          <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto px-4 md:px-0">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-white">
              Why <span className="text-gradient">MagnusBets</span>
            </h2>
            <p className="text-base md:text-lg text-gray-300">
              Built on a foundation of rigorous quantitative analysis and real-world validation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
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
              <div key={idx} className="card-premium group p-8 hover:shadow-lg transition-all">
                <div className="w-12 md:w-14 h-12 md:h-14 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-xl md:text-2xl font-bold text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">
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

      {/* Problem / Solution Section */}
      <section className="py-16 md:py-24 bg-cyan-950/20 border-b border-cyan-500/10">
        <div className="container-premium px-4 md:px-0">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-white">
              The Problem
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
              Most sports bettors lose money because they rely on intuition, bias, and incomplete information. Vegas odds are set by professionals with unlimited data. You need an edge—not luck.
            </p>

            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-white mt-12">
              Our Solution
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
              Quantitative models trained on years of historical data. We identify market inefficiencies where odds diverge from true probabilities. Every pick is transparent, tracked, and backed by math—not gut feel.
            </p>

            <div className="mt-10 pt-10 border-t border-cyan-500/10">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-6 text-white">What You Get</h3>
              <ul className="space-y-4">
                {[
                  'Daily NBA picks with confidence scores',
                  'Real-time tracking of all plays and results',
                  'Access to our validated quantitative models',
                  'Community of professional bettors',
                  'Complete transparency on methodology',
                  'Mobile app for instant notifications',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold text-lg mt-0.5">✓</span>
                    <span className="text-base text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology / How It Works */}
      <section className="py-16 md:py-24 border-b border-cyan-500/10">
        <div className="container-premium px-4 md:px-0">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-white text-center">
            How It Works
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                step: '01',
                title: 'Multi-Model Consensus',
                description: 'Multiple quantitative models analyze team performance, player metrics, matchups, and historical patterns to generate predictions.',
              },
              {
                step: '02',
                title: 'Edge Detection',
                description: 'We identify true edge: where market odds diverge from our calculated probabilities by 3%+, indicating a mispriced bet.',
              },
              {
                step: '03',
                title: 'Risk Management',
                description: 'Every pick includes position sizing, confidence scores, and risk-adjusted returns to maximize long-term profitability.',
              },
              {
                step: '04',
                title: 'Continuous Improvement',
                description: 'Models are backtested, validated, and refined based on real outcomes. We learn from every bet.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 text-white font-bold text-sm">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-16 md:py-24 bg-cyan-950/20 border-b border-cyan-500/10">
        <div className="container-premium px-4 md:px-0">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-white text-center">
            Trusted by Professional Bettors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { value: '1,200+', label: 'Active Members' },
              { value: '10/18', label: 'Win Rate (Feb 2026)' },
              { value: '+$219', label: 'Total Profit' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-gradient mb-2">{stat.value}</div>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="card-premium p-8 md:p-10">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed italic">
                "I've been using MagnusBets for 6 weeks now. The transparency is unreal. I can see exactly how each model votes on every play. Finally, a betting service that's not trying to hide anything."
              </p>
              <div>
                <p className="font-bold text-white">— Michael R., Professional Bettor</p>
                <p className="text-sm text-gray-400">Turned $500 into $1,240 in 2 months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services / Pricing Structure */}
      <section className="py-16 md:py-24 border-b border-cyan-500/10">
        <div className="container-premium px-4 md:px-0">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-white text-center">
            Simple Pricing
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="card-premium p-8 md:p-12">
              <div className="inline-block mb-6 px-3 py-1 bg-cyan-500/20 rounded text-sm font-semibold text-cyan-300">
                Free Beta
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">$0/month</h3>
              <p className="text-gray-300 mb-8">Get started with zero risk. Full access during beta.</p>

              <ul className="space-y-4 mb-10">
                {[
                  'Daily NBA predictions',
                  'Complete model transparency',
                  'Real-time play tracking',
                  'Access to all historical data',
                  'Community Discord',
                  'Mobile notifications',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="btn-primary w-full py-3">
                Join Free Beta
              </button>
              <p className="text-xs text-gray-500 text-center mt-4">
                No credit card required. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA / Action Banner */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-950/30 to-black/80">
        <div className="container-premium px-4 md:px-0 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-white">
            Stop Guessing. Start <span className="text-gradient">Winning</span>.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join 1,200+ bettors using quantitative models for real edge. Free beta access right now.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              Get Started Free →
            </button>
            <Link
              href="/track-record"
              className="px-8 py-3 border-2 border-cyan-500/50 text-cyan-300 font-bold rounded-lg hover:border-cyan-400 hover:bg-cyan-500/10 transition-colors"
            >
              View Track Record
            </Link>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            Real results. Real transparency. Real edge.
          </p>
        </div>
      </section>
    </>
  )
}
