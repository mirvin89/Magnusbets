export default function PricingPage() {
  return (
    <div className="min-h-screen pt-32">
      <div className="container-premium pb-20">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 rounded-full glass border-accent-gold/30">
            <p className="text-sm font-medium text-accent-gold">Simple & Transparent</p>
          </div>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Pricing Built for <span className="text-gradient">Serious Bettors</span>
          </h1>
          <p className="text-xl text-gray-600">
            No hidden fees. No surprises. Free during beta, then lock in your price forever.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {[
            {
              name: 'Starter',
              price: 'Free',
              period: 'During Beta',
              description: 'Perfect for trying our service',
              features: [
                'Daily picks (limited)',
                'Basic model breakdowns',
                'Community access',
                'Email support',
              ],
              cta: 'Get Started',
              highlighted: false,
            },
            {
              name: 'Pro',
              price: '$29',
              period: '/month',
              description: 'Most popular choice',
              features: [
                'All daily picks (unlimited)',
                'Full model breakdowns',
                'Live tracking dashboard',
                'Discord access',
                'Real-time alerts',
                'Priority support',
              ],
              cta: 'Start Free Trial',
              highlighted: true,
            },
            {
              name: 'Elite',
              price: '$99',
              period: '/month',
              description: 'For serious professionals',
              features: [
                'Everything in Pro',
                'One-on-one strategy sessions',
                'Custom model configuration',
                'API access',
                'Advanced analytics',
                'Dedicated account manager',
              ],
              cta: 'Schedule Demo',
              highlighted: false,
            },
          ].map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? 'card-premium ring-2 ring-accent-gold scale-105 relative'
                  : 'card-premium'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-gold to-accent-amber"></div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-5xl font-bold text-gradient">{plan.price}</span>
                  <span className="text-gray-600 text-sm ml-2">{plan.period}</span>
                </div>

                <button
                  className={plan.highlighted ? 'btn-primary w-full mb-8' : 'btn-secondary w-full mb-8'}
                >
                  {plan.cta}
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature, fdx) => (
                    <div key={fdx} className="flex items-start gap-3">
                      <span className="text-accent-gold font-bold flex-shrink-0">✓</span>
                      <span className="text-gray-500 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="font-playfair text-3xl font-bold text-gray-900 text-center mb-12">
            What's <span className="text-gradient">Included</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: '✓', title: 'Daily Picks', desc: 'Quantitative model picks every morning' },
              { icon: '✓', title: 'Full Transparency', desc: 'See the logic behind every pick' },
              { icon: '✓', title: 'Live Dashboard', desc: 'Track results in real-time' },
              { icon: '✓', title: 'Discord Community', desc: 'Network with other serious bettors' },
              { icon: '✓', title: 'Real-Time Alerts', desc: 'Get notified instantly of new picks' },
              { icon: '✓', title: 'Historical Data', desc: 'Download and analyze past picks' },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-accent-gold/10 to-accent-amber/5 rounded-xl border border-accent-gold/20">
                <div className="text-2xl text-gradient mb-3">{feature.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="font-playfair text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently <span className="text-gradient">Asked Questions</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Can I cancel anytime?',
                a: 'Yes, absolutely. No long-term contracts. Cancel anytime and keep access until the end of your billing period.',
              },
              {
                q: 'Do you offer a money-back guarantee?',
                a: 'We offer a 7-day money-back guarantee if you are not satisfied. No questions asked.',
              },
              {
                q: 'What sports do you cover?',
                a: 'We currently focus on NBA basketball. We plan to add NFL, MLB, and NHL in the coming months.',
              },
              {
                q: 'Do you offer API access?',
                a: 'API access is available on the Elite plan. Contact us for more details.',
              },
              {
                q: 'How often are picks published?',
                a: 'Daily picks are published each morning before 9 AM EST. Additional picks may be added during the day.',
              },
              {
                q: 'Is there a free trial?',
                a: 'Yes, all plans include a 7-day free trial. No credit card required to get started.',
              },
            ].map((item, idx) => (
              <div key={idx} className="card-premium p-6">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="card-premium p-8 md:p-12 text-center border-l-4 border-l-accent-gold">
          <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
            Still have <span className="text-gradient">questions?</span>
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Our team is here to help. Reach out anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Email Us
            </button>
            <button className="btn-secondary">
              Join Discord
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}