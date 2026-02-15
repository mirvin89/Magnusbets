'use client'

const CTA = () => {
  return (
    <section className="section-padding">
      <div className="container-premium">
        <div className="card-premium p-12 md:p-16 text-center border-t-4 border-t-accent-gold">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Start Beating the <span className="text-gradient">Books</span> Today
            </h2>
            <p className="text-xl text-gray-500 mb-12">
              Get data-driven picks, live tracking, and proven results. Free during beta, then lock in your price forever.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  price: '$29',
                  period: '/month',
                  name: 'Pro',
                  desc: 'Full access to daily picks, track record, and community.',
                  btn: 'Start Free Trial',
                  featured: false,
                },
                {
                  price: '$99',
                  period: '/month',
                  name: 'Elite',
                  desc: 'Pro + priority support, 1-on-1 sessions, and custom models.',
                  btn: 'Schedule Demo',
                  featured: true,
                },
                {
                  price: 'Free',
                  period: 'forever',
                  name: 'Starter',
                  desc: 'Try limited picks risk-free during our beta.',
                  btn: 'Get Started',
                  featured: false,
                },
              ].map((plan, idx) => (
                <div
                  key={idx}
                  className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                    plan.featured
                      ? 'bg-gradient-to-br from-accent-gold/20 to-accent-amber/10 border-2 border-accent-gold ring-2 ring-accent-gold/50 ring-offset-2 ring-offset-premium-navy'
                      : 'card-premium'
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-gold to-accent-amber"></div>
                  )}
                  
                  <div className="p-8">
                    <div className="text-5xl font-bold text-gradient mb-2">
                      {plan.price}
                    </div>
                    <div className="text-gray-600 text-sm mb-4">{plan.period}</div>
                    <div className="font-bold text-gray-900 text-xl mb-3">{plan.name}</div>
                    <p className="text-gray-600 mb-8 text-sm h-16 flex items-center">
                      {plan.desc}
                    </p>
                    <button
                      className={plan.featured ? 'btn-primary w-full' : 'btn-secondary w-full'}
                    >
                      {plan.btn}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="bg-gradient-to-r from-accent-gold/5 to-accent-amber/5 rounded-xl border border-accent-gold/20 p-6 mb-8">
              <p className="text-accent-gold font-medium mb-3">
                ✓ 7-day money-back guarantee · ✓ No long-term contract · ✓ Cancel anytime
              </p>
              <p className="text-gray-600 text-sm">
                All subscriptions include access to our Discord community, real-time alerts, and full historical data.
              </p>
            </div>

            {/* Bottom CTA */}
            <p className="text-gray-600 text-sm">
              Questions? <a href="#" className="text-accent-gold hover:text-accent-amber transition-colors">Join our Discord</a> or email support.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA