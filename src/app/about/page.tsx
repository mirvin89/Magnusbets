export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">How It Works</h1>
        <p className="text-gray-600 mb-8">We combine quantitative models with rigorous backtesting to deliver actionable betting insights.</p>
        
        <div className="space-y-12">
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-green-600">The Data Pipeline</h2>
            <p className="text-gray-700 mb-4">Every day, we ingest millions of data points:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>NBA game statistics (traditional and advanced metrics)</li>
              <li>Historical odds from multiple sportsbooks</li>
              <li>Injury reports, lineup changes, and scheduling factors</li>
              <li>Market movement and betting volume</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-green-600">The Models</h2>
            <p className="text-gray-700 mb-4">We run five distinct quantitative models, each optimized for a different bet type:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-xl">
                <h3 className="font-bold text-gray-900">Spread Model</h3>
                <p className="text-gray-500 text-sm">Logistic regression with rolling averages of point differentials.</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-xl">
                <h3 className="font-bold text-gray-900">Totals Model</h3>
                <p className="text-gray-500 text-sm">Random forest using pace, offensive/defensive ratings, and recent totals.</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-xl">
                <h3 className="font-bold text-gray-900">Moneyline Model</h3>
                <p className="text-gray-500 text-sm">Gradient boosting with team strength metrics and rest‑day adjustments.</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-xl">
                <h3 className="font-bold text-gray-900">Player Prop Model</h3>
                <p className="text-gray-500 text-sm">Neural network analyzing individual player matchups (coming soon).</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-green-600">Backtesting & Validation</h2>
            <p className="text-gray-700 mb-4">Every strategy is rigorously backtested across three NBA seasons (2022‑23 to 2024‑25). We use walk‑forward validation to avoid look‑ahead bias and ensure realistic performance.</p>
            <div className="flex items-center justify-center mt-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-green-600">24.2%</div>
                <div className="text-gray-500">Average ROI across top strategies</div>
              </div>
              <div className="mx-8 text-gray-300">|</div>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-600">72.9%</div>
                <div className="text-gray-500">Win rate on 418 simulated bets</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-green-600">Our Promise</h2>
            <p className="text-gray-700 mb-4">We believe in transparency. That's why we publish our track record, share our methodology, and never hide behind vague claims.</p>
            <p className="text-gray-700">We're not a get‑rich‑quick scheme. We're a tool for serious bettors who want an edge. The models are sophisticated, but the output is simple: clear, actionable picks with a proven edge.</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">Have questions? Reach out on Discord or email support@magnusbets.com</p>
        </div>
      </div>
    </div>
  )
}