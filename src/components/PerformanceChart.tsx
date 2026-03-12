'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
)

interface BetRecord {
  date: string
  sport: string
  bet_type: string
  result: 'win' | 'loss'
  roi: number
}

const PerformanceChart = () => {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'season'>('season')
  const [data, setData] = useState<any[]>([])
  const [stats, setStats] = useState({ winRate: 0, avgRoi: 0, totalProfit: 0, totalBets: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [timeRange])

  const fetchData = async () => {
    setLoading(true)
    try {
      // Fetch all bet records from Supabase
      const { data: bets, error } = await supabase
        .from('bets')
        .select('*')
        .order('date', { ascending: false })

      if (error) throw error

      // Process data based on timeRange
      const processed = processData(bets || [], timeRange)
      setData(processed.chartData)
      setStats(processed.stats)
    } catch (err) {
      console.error('Error fetching data:', err)
      setData([])
    } finally {
      setLoading(false)
    }
  }

  const processData = (bets: any[], range: string) => {
    let groupedData: any = {}
    let wins = 0
    let losses = 0
    let totalRoi = 0

    bets.forEach(bet => {
      const date = new Date(bet.date)
      let key: string

      if (range === 'week') {
        const daysAgo = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24))
        if (daysAgo > 7) return
        key = date.toLocaleDateString('en-US', { weekday: 'short' })
      } else if (range === 'month') {
        const daysAgo = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24))
        if (daysAgo > 30) return
        key = `Day ${date.getDate()}`
      } else {
        key = date.toLocaleDateString('en-US', { month: 'short' })
      }

      if (!groupedData[key]) {
        groupedData[key] = { wins: 0, losses: 0, roi: 0, count: 0 }
      }

      groupedData[key].count++
      groupedData[key].roi += bet.roi || 0
      if (bet.result === 'win') {
        groupedData[key].wins++
        wins++
      } else {
        groupedData[key].losses++
        losses++
      }
      totalRoi += bet.roi || 0
    })

    const chartData = Object.entries(groupedData).map(([key, value]: any) => ({
      label: key,
      roi: (value.roi / value.count).toFixed(1),
      wins: value.wins,
      losses: value.losses
    }))

    const totalBets = wins + losses
    const winRate = totalBets > 0 ? parseFloat(((wins / totalBets) * 100).toFixed(1)) : 0
    const avgRoi = totalBets > 0 ? parseFloat((totalRoi / totalBets).toFixed(1)) : 0
    const totalProfit = parseFloat(totalRoi.toFixed(2))

    return {
      chartData,
      stats: {
        winRate,
        avgRoi,
        totalProfit,
        totalBets
      }
    }
  }

  if (loading) {
    return (
      <section className="py-16">
        <div className="text-center">
          <p className="text-gray-500">Loading performance data...</p>
        </div>
      </section>
    )
  }

  const maxRoi = data.length > 0 ? Math.max(...data.map(d => parseFloat(d.roi))) : 10
  const chartData = data.length > 0 ? data : [{ label: 'No data', roi: 0, wins: 0, losses: 0 }]

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Performance Track Record</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Real-time ROI across all verified bets. Transparency is our edge.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">ROI Over Time</h3>
            <p className="text-gray-500">Average return on investment per {timeRange}</p>
          </div>
          <div className="flex space-x-2">
            {(['week', 'month', 'season'] as const).map(range => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  timeRange === range
                    ? 'bg-gray-900 text-gray-900'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-end h-64 gap-2 md:gap-4 mb-8">
          {chartData.map((item, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center">
              <div 
                className="w-full bg-green-500/30 rounded-t-lg transition-all hover:opacity-90"
                style={{ height: `${(parseFloat(item.roi) / maxRoi) * 90}%` }}
              ></div>
              <div className="text-gray-500 text-sm mt-2">{item.label}</div>
              <div className="text-green-600 font-bold">{item.roi}%</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-2xl">
            <div className="text-gray-500 mb-2">Total Win Rate</div>
            <div className="text-3xl font-bold text-green-600">{stats.winRate.toFixed(1)}%</div>
            <div className="text-sm text-gray-500">Over {stats.totalBets} bets</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl">
            <div className="text-gray-500 mb-2">Average ROI</div>
            <div className="text-3xl font-bold text-green-600">{stats.avgRoi}%</div>
            <div className="text-sm text-gray-500">Per bet</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl">
            <div className="text-gray-500 mb-2">Total Profit</div>
            <div className="text-3xl font-bold text-green-600">${stats.totalProfit}</div>
            <div className="text-sm text-gray-500">Since launch</div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>All results are verified with actual game outcomes. Past performance does not guarantee future results.</p>
        </div>
      </div>
    </section>
  )
}

export default PerformanceChart
