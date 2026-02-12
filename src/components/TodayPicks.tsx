'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

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
  const [picks, setPicks] = useState<Pick[]>([
    {
      id: 1,
      game_date: '2026-02-11',
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
      game_date: '2026-02-11',
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
      game_date: '2026-02-11',
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
      game_date: '2026-02-11',
      team: 'Heat',
      opponent: 'Knicks',
      bet_type: 'spread',
      line: 'Heat +3.5',
      confidence: 71,
      predicted_outcome: 'win',
      odds: 1.95
    }
  ])
  const [loading, setLoading] = useState(false)

  // In a real implementation, fetch picks from Supabase
  useEffect(() => {
    // fetchPicks()
  }, [])

  const fetchPicks = async () => {
    setLoading(true)
    // TODO: fetch from a picks table
    setLoading(false)
  }

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Today's Top Picks</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Hand‑selected from our quantitative models. Updated daily with confidence scores and analysis.
        </p>
        <div className="inline-flex items-center mt-4 px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">
          <span className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse"></span>
          Live picks refresh at 5 PM EST
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {picks.map(pick => (
          <div key={pick.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-all hover:shadow-xl hover:shadow-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-gray-900">{pick.team}</span>
                  <span className="text-gray-500">vs</span>
                  <span className="text-xl font-bold text-gray-900">{pick.opponent}</span>
                </div>
                <div className="text-gray-500 text-sm mt-1">{pick.game_date}</div>
              </div>
              <div className="flex items-center gap-2">
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                  pick.bet_type === 'spread' ? 'bg-blue-100 text-blue-700' :
                  pick.bet_type === 'total' ? 'bg-purple-100 text-purple-700' :
                  'bg-amber-100 text-amber-700'
                }`}>
                  {pick.bet_type.toUpperCase()}
                </div>
                <div className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
                  Member Exclusive
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="text-gray-500 text-sm">Line</div>
                <div className="text-2xl font-bold text-gray-900">{pick.line}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="text-gray-500 text-sm">Confidence</div>
                <div className="flex items-center">
                  <div className="text-2xl font-bold text-green-600">{pick.confidence}%</div>
                  <div className="ml-3 w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${pick.confidence}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <div className="text-gray-500 text-sm">Odds</div>
                <div className="text-xl font-bold text-gray-900">{pick.odds.toFixed(2)}</div>
              </div>
              <div>
                <div className="text-gray-500 text-sm">Predicted Outcome</div>
                <div className="text-xl font-bold text-green-600">Win</div>
              </div>
              <button className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl transition-all">
                Bet Now
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-500">
              <div className="flex justify-between">
                <span>Model consensus: 4/5 models agree</span>
                <span className="text-gray-700">Edge: +{pick.confidence - 50}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="inline-block bg-green-50 border border-green-200 rounded-2xl px-6 py-4 mb-6">
          <p className="text-green-800 font-medium">
            🚀 <strong>Free During Beta:</strong> All picks are currently free. Subscribe now to lock in lifetime pricing.
          </p>
        </div>
        <button className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-2xl shadow-lg hover:shadow-gray-900/30 transition-all duration-300">
          Subscribe Now – Free During Beta
        </button>
        <p className="text-gray-500 text-sm mt-4">
          Subscribers get real‑time alerts, full model breakdowns, and live tracking.
        </p>
      </div>
    </section>
  )
}

export default TodayPicks