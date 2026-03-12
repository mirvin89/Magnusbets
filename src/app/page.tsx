import { getStats, getTodayPicks } from '@/lib/statistics';

export default async function Home() {
  const [stats, todayPicks] = await Promise.all([
    getStats(),
    getTodayPicks(),
  ]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold">
              <span className="text-cyan-400">⚡</span> MagnusBets
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#picks" className="text-gray-300 hover:text-white">Picks</a>
              <a href="#performance" className="text-gray-300 hover:text-white">Performance</a>
              <a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a>
              <a href="#about" className="text-gray-300 hover:text-white">About</a>
              <button className="px-5 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Professional <span className="text-cyan-400">Sports Betting</span> Models
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Data‑driven picks with verified results. Join the sharpest bettors.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl text-lg shadow-xl">
              Get Premium Picks
            </button>
            <button className="px-8 py-4 border-2 border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-bold rounded-xl text-lg">
              View Verified Results
            </button>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400">{stats.winRate.toFixed(1)}%</div>
              <div className="text-sm text-gray-400 uppercase mt-2">Win Rate</div>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400">${stats.cumulativeProfit.toFixed(0)}</div>
              <div className="text-sm text-gray-400 uppercase mt-2">Cumulative P&L</div>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400">{stats.totalPicks}</div>
              <div className="text-sm text-gray-400 uppercase mt-2">Picks Tracked</div>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-orange-400">{stats.pendingPicks}</div>
              <div className="text-sm text-gray-400 uppercase mt-2">Pending Today</div>
            </div>
          </div>
        </div>
      </section>

      {/* Today's Picks */}
      <section id="picks" className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Today&apos;s Top Plays</h2>
            <p className="text-xl text-gray-400">
              {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          {todayPicks.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {todayPicks.map((pick, idx) => (
                <div key={idx} className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-cyan-900/30 text-cyan-300 rounded-full text-xs font-bold">
                      {pick.Sport}
                    </span>
                    <span className="text-sm text-gray-400">{pick.Date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{pick['Away Team']} @ {pick['Home Team']}</h3>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-cyan-400">{pick['Bet Pick']}</div>
                    <div className="text-lg text-gray-300">Odds: {pick.Odds}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-400">Pending</div>
                    <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm">
                      Track
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-gray-300 mb-4">No picks for today</h3>
              <p className="text-gray-500">Check back later for today&apos;s top plays.</p>
            </div>
          )}
        </div>
      </section>

      {/* Performance */}
      <section id="performance" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Verified Performance</h2>
            <p className="text-xl text-gray-400">Every pick independently tracked and verified</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-800 bg-gray-900/50">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-400 uppercase">Sport</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-400 uppercase">Record</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-400 uppercase">Win Rate</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-400 uppercase">P&L</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-400 uppercase">ROI</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(stats.bySport).map(([sport, data]) => (
                  <tr key={sport} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                    <td className="px-6 py-4 text-sm font-bold">{sport}</td>
                    <td className="px-6 py-4 text-sm font-mono">{data.wins}-{data.total - data.wins}</td>
                    <td className="px-6 py-4 text-sm font-bold text-cyan-400">{((data.wins / data.total) * 100).toFixed(1)}%</td>
                    <td className={`px-6 py-4 text-sm font-bold ${data.profit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {data.profit >= 0 ? '+' : ''}${data.profit.toFixed(0)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400">{((data.profit / (data.total * 100)) * 100).toFixed(1)}%</td>
                  </tr>
                ))}
                <tr className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
                  <td className="px-6 py-4 text-sm font-bold">Overall</td>
                  <td className="px-6 py-4 text-sm font-mono">{stats.wins}-{stats.totalPicks - stats.wins}</td>
                  <td className="px-6 py-4 text-sm font-bold text-cyan-400">{stats.winRate.toFixed(1)}%</td>
                  <td className={`px-6 py-4 text-sm font-bold ${stats.cumulativeProfit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {stats.cumulativeProfit >= 0 ? '+' : ''}${stats.cumulativeProfit.toFixed(0)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">
                    {((stats.cumulativeProfit / (stats.totalPicks * 100)) * 100).toFixed(1)}%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get Premium Picks</h2>
            <p className="text-xl text-gray-400">Access daily picks before odds move</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Monthly', price: '$29', period: '/mo', badge: null, featured: false },
              { name: 'Quarterly', price: '$74', period: '/3mo', badge: 'BEST VALUE', featured: true },
              { name: 'Annual', price: '$249', period: '/year', badge: null, featured: false },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border ${
                  plan.featured
                    ? 'border-cyan-500 bg-gray-900 shadow-2xl shadow-cyan-500/20 md:scale-105'
                    : 'border-gray-700 bg-gray-900/40'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                    {plan.badge}
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {['Daily picks (NBA, CBB, MLB, PGA)', 'Live picks feed', 'Performance tracking', 'Email alerts', 'Discord access'].map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <span className="text-cyan-400 mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-bold ${
                    plan.featured
                      ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
                      : 'border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white'
                  }`}>
                    Subscribe Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-cyan-400 mr-2">⚡</span> MagnusBets
              </h3>
              <p className="text-gray-400 text-sm">
                Professional sports betting models with verified results.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-cyan-400">Home</a></li>
                <li><a href="#picks" className="text-gray-400 hover:text-cyan-400">Picks</a></li>
                <li><a href="#performance" className="text-gray-400 hover:text-cyan-400">Performance</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-cyan-400">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/terms" className="text-gray-400 hover:text-cyan-400">Terms of Service</a></li>
                <li><a href="/privacy" className="text-gray-400 hover:text-cyan-400">Privacy Policy</a></li>
                <li><a href="/disclaimer" className="text-gray-400 hover:text-cyan-400">Disclaimer</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="https://twitter.com/MagnusBets" className="text-gray-400 hover:text-cyan-400">Twitter</a></li>
                <li><a href="mailto:support@magnusbets.com" className="text-gray-400 hover:text-cyan-400">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} MagnusBets. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}