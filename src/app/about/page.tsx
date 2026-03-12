export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32">
      <div className="container-premium pb-20">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="inline-block mb-6 px-4 py-2 rounded-full glass border-accent-gold/30">
            <p className="text-sm font-medium text-accent-gold">How We Work</p>
          </div>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            From <span className="text-gradient">Data to Decisions</span>
          </h1>
          <p className="text-xl text-gray-600">
            We combine quantitative models with rigorous backtesting to deliver actionable betting insights. No black boxes, no hype—just pure methodology.
          </p>
        </div>

        {/* Data Pipeline Section */}
        <div className="card-premium p-8 md:p-12 mb-12">
          <div className="flex gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-gold to-accent-amber flex items-center justify-center flex-shrink-0">
              <span className="text-xl">📊</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Data Pipeline</h2>
              <p className="text-gray-600">Millions of data points, daily ingestion, full transparency</p>
            </div>
          </div>
          <p className="text-gray-500 mb-6">Every single day, our systems ingest and process:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'NBA game statistics (traditional and advanced metrics)',
              'Historical odds from multiple sportsbooks',
              'Injury reports, lineup changes, and scheduling factors',
              'Market movement and betting volume',
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-r from-accent-gold/10 to-accent-amber/5 rounded-xl border border-accent-gold/20">
                <span className="text-accent-gold font-bold flex-shrink-0">✓</span>
                <span className="text-gray-500">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Models Section */}
        <div className="card-premium p-8 md:p-12 mb-12">
          <div className="flex gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-gold to-accent-amber flex items-center justify-center flex-shrink-0">
              <span className="text-xl">🧠</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Five Specialized Models</h2>
              <p className="text-gray-600">Each optimized for different bet types and market conditions</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: 'Spread Model',
                desc: 'Logistic regression with rolling averages of point differentials',
              },
              {
                name: 'Totals Model',
                desc: 'Random forest using pace, offensive/defensive ratings, and recent scores',
              },
              {
                name: 'Moneyline Model',
                desc: 'Gradient boosting with team strength metrics and rest-day adjustments',
              },
              {
                name: 'Player Props (Beta)',
                desc: 'Neural network analyzing individual player matchups and usage',
              },
            ].map((model, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-accent-gold/10 to-accent-amber/5 rounded-xl border border-accent-gold/20 hover:border-accent-gold/50 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{model.name}</h3>
                <p className="text-gray-600 text-sm">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Backtesting Section */}
        <div className="card-premium p-8 md:p-12 mb-12">
          <div className="flex gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-gold to-accent-amber flex items-center justify-center flex-shrink-0">
              <span className="text-xl">✅</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Rigorous Backtesting</h2>
              <p className="text-gray-600">Walk-forward validation across 3 NBA seasons</p>
            </div>
          </div>
          <p className="text-gray-500 mb-8">
            Every strategy is rigorously backtested across three full NBA seasons (2022-23 to 2024-25). We use walk-forward validation to avoid look-ahead bias and ensure our historical performance is genuinely predictive, not just curve-fitted to past data.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { metric: '24.2%', label: 'Average ROI', sublabel: 'Across top strategies' },
              { metric: '72.9%', label: 'Win Rate', sublabel: 'On 418 backtested picks' },
              { metric: '3 years', label: 'Validation Period', sublabel: 'Full NBA seasons' },
            ].map((item, idx) => (
              <div key={idx} className="stat-card">
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-3">
                  {item.label}
                </p>
                <p className="text-4xl font-bold text-gradient mb-2">
                  {item.metric}
                </p>
                <p className="text-sm text-gray-500">
                  {item.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Promise Section */}
        <div className="card-premium p-8 md:p-12 border-l-4 border-l-accent-gold">
          <div className="flex gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-gold to-accent-amber flex items-center justify-center flex-shrink-0">
              <span className="text-xl">🎯</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Our Promise</h2>
            </div>
          </div>
          <p className="text-gray-500 mb-6">
            We believe in radical transparency. That's why we publish our complete track record, share our methodology, and never hide behind vague claims or marketing fluff.
          </p>
          <p className="text-gray-500">
            We're not a get-rich-quick scheme. We're a tool for serious bettors who want a real edge. The models are sophisticated, but the output is simple: clear, actionable picks backed by data and a proven track record.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Still have questions about our methodology?
          </p>
          <button className="btn-primary">
            Join Our Discord Community
          </button>
        </div>
      </div>
    </div>
  )
}