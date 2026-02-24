'use client'

export default function PricingSection() {
  const plans = [
    {
      name: 'Monthly',
      price: '$29',
      period: '/mo',
      features: [
        'Daily picks (NBA, CBB, MLB)',
        'Live picks feed',
        'Performance tracking',
        'Email alerts'
      ],
      cta: 'Subscribe Now',
      featured: false
    },
    {
      name: 'Quarterly',
      price: '$74',
      period: '/3mo',
      badge: 'BEST VALUE',
      features: [
        'Daily picks (NBA, CBB, MLB)',
        'Live picks feed',
        'Performance tracking',
        'Email alerts',
        '15% discount'
      ],
      cta: 'Subscribe Now',
      featured: true
    },
    {
      name: 'Annual',
      price: '$249',
      period: '/year',
      features: [
        'Daily picks (NBA, CBB, MLB)',
        'Live picks feed',
        'Performance tracking',
        'Email alerts',
        '29% discount'
      ],
      cta: 'Subscribe Now',
      featured: false
    }
  ]

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative rounded-xl backdrop-blur-sm transition-all duration-300 ${
            plan.featured
              ? 'border-2 border-cyan-500 bg-slate-800/80 shadow-2xl shadow-cyan-500/20 md:scale-105'
              : 'border border-slate-700/50 bg-slate-800/40 hover:border-slate-600/50'
          }`}
        >
          {plan.badge && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold">
              {plan.badge}
            </div>
          )}

          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold text-white">{plan.price}</span>
              <span className="text-gray-400">{plan.period}</span>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-300">
                  <span className="text-cyan-400 mr-3">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
                plan.featured
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-xl'
                  : 'border border-slate-600 text-gray-300 hover:border-slate-500 hover:text-white'
              }`}
            >
              {plan.cta}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
