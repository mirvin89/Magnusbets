'use client'

interface Pick {
  game: string
  bet: string
  price: string
  edge: string
  models: string
}

export default function PicksCard({ pick }: { pick: Pick }) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
      <div className="flex justify-between items-start mb-4">
        <div className="text-xs font-bold text-cyan-400 bg-slate-900/50 px-3 py-1 rounded">
          {pick.models} Models
        </div>
        <div className="text-sm font-bold text-green-400">{pick.edge}</div>
      </div>

      <h3 className="text-lg font-bold text-white mb-2">{pick.game}</h3>

      <div className="bg-slate-900/50 rounded p-3 mb-4">
        <p className="text-sm text-gray-400">Bet</p>
        <p className="text-base font-mono text-white">{pick.bet}</p>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-400">Odds: {pick.price}</span>
        <button className="px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 text-cyan-400 text-sm font-bold rounded transition-all duration-300">
          Bet Now
        </button>
      </div>
    </div>
  )
}
