'use client'

export default function PerformanceTable() {
  const stats = [
    {
      sport: 'NBA',
      record: '21-17',
      winRate: '55.3%',
      pnl: '+$230',
      roi: '+2.4%'
    },
    {
      sport: 'CBB',
      record: '4-7',
      winRate: '36.4%',
      pnl: '-$361',
      roi: '-9.1%'
    },
    {
      sport: 'Overall',
      record: '25-24',
      winRate: '51.0%',
      pnl: '+$359',
      roi: '+1.8%',
      highlight: true
    }
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-700/50">
            <th className="px-6 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">Sport</th>
            <th className="px-6 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">Record</th>
            <th className="px-6 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">Win Rate</th>
            <th className="px-6 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">P&L</th>
            <th className="px-6 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">ROI</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((stat) => (
            <tr
              key={stat.sport}
              className={`border-b border-slate-700/30 transition-colors duration-300 ${
                stat.highlight
                  ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20'
                  : 'hover:bg-slate-700/20'
              }`}
            >
              <td className="px-6 py-4 text-sm font-bold text-white">{stat.sport}</td>
              <td className="px-6 py-4 text-sm font-mono text-gray-300">{stat.record}</td>
              <td className="px-6 py-4 text-sm font-bold text-cyan-400">{stat.winRate}</td>
              <td className={`px-6 py-4 text-sm font-bold ${stat.pnl.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                {stat.pnl}
              </td>
              <td className="px-6 py-4 text-sm font-bold text-gray-400">{stat.roi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
