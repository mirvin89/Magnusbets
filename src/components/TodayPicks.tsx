'use client'

import { useState, useEffect } from 'react'

type Pick = {
  id: number
  game_date: string
  team: string
  opponent: string
  bet_type: 'spread' | 'total' | 'moneyline'
  line: string
  confidence: number
  predicted_outcome: 'win' | 'loss' | 'pending'
  actual_outcome?: 'win' | 'loss' | 'push'
  odds: number
}

const TodayPicks = () => {
  const [picks] = useState<Pick[]>([
    {
      id: 1,
      game_date: '2026-02-12',
      team: 'Lakers',
      opponent: 'Warriors',
      bet_type: 'spread',
      line: 'Lakers -5.5',
      confidence: 78,
      predicted_outcome: 'win',
      odds: 1.91
    },
    {
      id: 2,
      game_date: '2026-02-12',
      team: 'Celtics',
      opponent: 'Nets',
      bet_type: 'total',
      line: 'OVER 225.5',
      confidence: 82,
      predicted_outcome: 'win',
      odds: 1.87
    },
    {
      id: 3,
      game_date: '2026-02-12',
      team: 'Bucks',
      opponent: 'Suns',
      bet_type: 'moneyline',
      line: 'Bucks ML',
      confidence: 65,
      predicted_outcome: 'win',
      odds: 1.75
    },
    {
      id: 4,
      game_date: '2026-02-12',
      team: 'Heat',
      opponent: 'Knicks',
      bet_type: 'spread',
      line: 'Heat +3.5',
      confidence: 71,
      predicted_outcome: 'win',
      odds: 1.95
    }
  ])

  const getBetTypeColor = (type: string) => {
    switch (type) {
      case 'spread':
        return 'from-blue-600 to-blue-400'
      case 'total':
        return 'from-purple-600 to-purple-400'
      case 'moneyline':
        return 'from-amber-600 to-amber-400'
      default:
        return 'from-accent-gold to-accent-amber'
    }
  }

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'from-green-600 to-emerald-500'
    if (confidence >= 70) return 'from-accent-gold to-accent-amber'
    return 'from-orange-600 to-orange-400'
  }

  return (
    <section className="section-padding">
      <div className="container-premium">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 rounded-full glass border-accent-gold/30">
            <p className="text-sm font-medium text-accent-gold">Live Picks</p>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-white">
            Today's <span className="text-gradient">Top Picks</span>
          </h2>
          <p className="text-lg text-gray-400">
            Hand-selected from our quantitative models with confidence scores and edge analysis.
          </p>
          <div className="inline-flex items-center mt-6 px-4 py-2 glass border-accent-gold/30">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
            <span className="text-sm text-gray-300">Live picks refresh daily at 5 PM EST</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {picks.map((pick, idx) => (
            <div
              key={pick.id}
              className="card-premium p-6 group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-bold text-white">{pick.team}</span>
                    <span className="text-gray-500">vs</span>
                    <span className="text-2xl font-bold text-white">{pick.opponent}</span>
                  </div>
                  <div className="text-sm text-gray-500">{pick.game_date}</div>
                </div>
                <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${getBetTypeColor(pick.bet_type)} flex items-center justify-center`}>
                  <span className="text-xs font-bold text-white uppercase">{pick.bet_type[0]}</span>
                </div>
              </div>

              {/* Bet Details Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-accent-gold/10 to-accent-amber/5 rounded-xl p-4 border border-accent-gold/20">
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Line</p>
                  <p className="text-2xl font-bold text-white">{pick.line}</p>
                </div>
                <div className="bg-gradient-to-br from-accent-gold/10 to-accent-amber/5 rounded-xl p-4 border border-accent-gold/20">
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Odds</p>
                  <p className="text-2xl font-bold text-accent-gold">{pick.odds.toFixed(2)}</p>
                </div>
              </div>

              {/* Confidence Score */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium text-gray-300">Confidence</p>
                  <p className={`text-lg font-bold bg-gradient-to-r ${getConfidenceColor(pick.confidence)} bg-clip-text text-transparent`}>
                    {pick.confidence}%
                  </p>
                </div>
                <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden border border-gray-600/30">
                  <div
                    className={`h-full bg-gradient-to-r ${getConfidenceColor(pick.confidence)} transition-all duration-1000`}
                    style={{ width: `${pick.confidence}%` }}
                  ></div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-6 border-t border-accent-gold/10 flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  <span className="text-accent-gold font-medium">Edge:</span> +{pick.confidence - 50}%
                </div>
                <button className="btn-primary text-xs px-4 py-2">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Beta CTA */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="card-premium p-8 border-l-4 border-l-accent-gold text-center">
            <div className="inline-block mb-4 text-3xl">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-3">Free During Beta</h3>
            <p className="text-gray-300 mb-6">
              All picks are currently free. Subscribe now to lock in lifetime pricing and get priority support.
            </p>
            <button className="btn-primary w-full md:w-auto">
              Subscribe Now – It's Free
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Members get real-time alerts, full model breakdowns, and live tracking.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TodayPicks