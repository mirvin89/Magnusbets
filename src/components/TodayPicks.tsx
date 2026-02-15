'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

type Pick = {
  id: string
  game_date: string
  away_team: string
  home_team: string
  bet_type: string
  line: string
  edge: number
  confidence: number
  odds?: number
}

export default function TodayPicks() {
  const [picks, setPicks] = useState<Pick[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPicks()
  }, [])

  const fetchPicks = async () => {
    const today = new Date().toISOString().split('T')[0]
    const { data, error } = await supabase
      .from('picks')
      .select('*')
      .eq('game_date', today)
      .order('confidence', { ascending: false })
    if (error) console.error(error)
    else setPicks(data || [])
    setLoading(false)
  }

  if (loading) return <div className="section-padding container-premium text-center"><p className="text-xl text-gray-600">Loading live picks...</p></div>

  return (
    <section className="section-padding">
      <div className="container-premium">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 rounded-lg glass border-blue-500/30">
            <p className="text-sm font-medium text-blue-500">Live Quantitative Picks</p>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Today's <span className="text-gradient">Top Picks</span>
          </h2>
          <p className="text-lg text-gray-600">
            Quantitative models • Live data • Responsive table
          </p>
        </div>

        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
          <table className="min-w-full divide-y divide-gray-200 bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Game</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Bet</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Line</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Edge</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Confidence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {picks.map((pick) => (
                <tr key={pick.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {pick.away_team} @ {pick.home_team}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">
                    {pick.bet_type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    {pick.line}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      +{pick.edge.toFixed(1)}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {pick.confidence}%
                  </td>
                </tr>
              ))}
              {picks.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500 text-lg">
                    No picks available today. Check back tomorrow!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-16 text-center">
          <Link href="/auth" className="btn-primary">
            Join Beta for Alerts & Full Access
          </Link>
        </div>
      </div>
    </section>
  )
}