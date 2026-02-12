import PerformanceChart from '@/components/PerformanceChart'

export default function TrackRecordPage() {
  return (
    <div className="min-h-screen pt-32">
      <div className="container-premium pb-20">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="inline-block mb-6 px-4 py-2 rounded-full glass border-accent-gold/30">
            <p className="text-sm font-medium text-accent-gold">Verified Performance</p>
          </div>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 text-white">
            Our <span className="text-gradient">Track Record</span>
          </h1>
          <p className="text-xl text-gray-400">
            Transparent metrics across all models and bet types. No cherry-picking, no simulation—just real results.
          </p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: '72.9%', label: 'Win Rate', change: '+2.1%' },
            { value: '+24.2%', label: 'Average ROI', change: 'Per bet' },
            { value: '418', label: 'Verified Picks', change: 'All tracked' },
            { value: '$24.2K', label: 'Total Profit', change: 'Since launch' },
          ].map((metric, idx) => (
            <div key={idx} className="stat-card">
              <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">
                {metric.label}
              </p>
              <p className="text-4xl font-bold text-gradient mb-2">
                {metric.value}
              </p>
              <p className="text-sm text-gray-500">
                {metric.change}
              </p>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="card-premium p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Performance Over Time</h2>
          <PerformanceChart />
        </div>

        {/* Breakdown Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* By Bet Type */}
          <div className="card-premium p-8">
            <h3 className="text-xl font-bold text-white mb-6">Performance by Bet Type</h3>
            <div className="space-y-4">
              {[
                { type: 'Spread', wr: '73.2%', roi: '+25.1%', picks: '156' },
                { type: 'Total', wr: '71.8%', roi: '+22.9%', picks: '142' },
                { type: 'Moneyline', wr: '74.1%', roi: '+24.8%', picks: '120' },
              ].map((row, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 bg-accent-gold/5 rounded-xl border border-accent-gold/10 hover:border-accent-gold/30 transition-colors">
                  <div className="font-medium text-white">{row.type}</div>
                  <div className="flex gap-8">
                    <div className="text-center">
                      <p className="text-xs text-gray-400 mb-1">Win Rate</p>
                      <p className="font-bold text-accent-gold">{row.wr}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-400 mb-1">ROI</p>
                      <p className="font-bold text-accent-gold">{row.roi}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-400 mb-1">Picks</p>
                      <p className="font-bold text-white">{row.picks}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* By Month */}
          <div className="card-premium p-8">
            <h3 className="text-xl font-bold text-white mb-6">Monthly Performance</h3>
            <div className="space-y-4">
              {[
                { month: 'February 2026', wr: '74.3%', roi: '+28.5%', picks: '47' },
                { month: 'January 2026', wr: '71.5%', roi: '+20.1%', picks: '52' },
                { month: 'December 2025', wr: '72.8%', roi: '+23.7%', picks: '54' },
              ].map((row, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 bg-accent-gold/5 rounded-xl border border-accent-gold/10 hover:border-accent-gold/30 transition-colors">
                  <div className="font-medium text-white">{row.month}</div>
                  <div className="flex gap-8">
                    <div className="text-center">
                      <p className="text-xs text-gray-400 mb-1">Win Rate</p>
                      <p className="font-bold text-accent-gold">{row.wr}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-400 mb-1">ROI</p>
                      <p className="font-bold text-accent-gold">{row.roi}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-400 mb-1">Picks</p>
                      <p className="font-bold text-white">{row.picks}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Confidence Breakdown */}
        <div className="card-premium p-8">
          <h3 className="text-xl font-bold text-white mb-6">Confidence Level Analysis</h3>
          <div className="space-y-6">
            {[
              { level: '80%+ Confidence', wr: '78.9%', picks: '142', color: 'from-green-600 to-emerald-500' },
              { level: '70-80% Confidence', wr: '71.3%', picks: '198', color: 'from-accent-gold to-accent-amber' },
              { level: '60-70% Confidence', wr: '62.1%', picks: '78', color: 'from-orange-600 to-orange-400' },
            ].map((row, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-white">{row.level}</span>
                  <span className="text-sm text-gray-400">{row.picks} picks</span>
                </div>
                <div className="h-3 bg-gray-700/50 rounded-full overflow-hidden border border-gray-600/30">
                  <div
                    className={`h-full bg-gradient-to-r ${row.color}`}
                    style={{ width: `${parseInt(row.wr)}%` }}
                  ></div>
                </div>
                <div className="mt-2 text-right text-sm font-medium text-accent-gold">{row.wr} win rate</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}