"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'

export default function Home() {
  const [picks, setPicks] = useState([])

  useEffect(() => {
    fetch('/today_top_plays.csv')
      .then(r => r.text())
      .then(text => {
        const lines = text.trim().split('\n').slice(1)
        const parsed = lines.map(line => {
          const cols = line.split(',')
          return {
            game: cols[1],
            bet: cols[2],
            price: cols[3],
            models: cols[4],
            edge: parseFloat(cols[6] || 0).toFixed(1),
            conf: parseFloat(cols[5] || 0).toFixed(1)
          }
        }).slice(0, 5)
        setPicks(parsed)
      })
      .catch(console.error)
  }, [])

  const mlbStrats = [
    {name: 'RF any_dog >20%', roi: 20.7, bets: 291},
    {name: 'XGB batting home_dog >20%', roi: 20.5, bets: 200},
    {name: 'LR away_dog >10% Med Dog', roi: 18.5, bets: 160},
    {name: 'Batting GBM home_dog >20%', roi: 15.9, bets: 673},
    {name: 'GBM_Reg totals >2.5R', roi: 14.0, bets: 500},
  ]

  const maxRoi = 25

  return (
    <>
      <Hero />

      {/* NBA Top Plays */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-950 border-b border-blue-500/20">
        <div className="container-premium px-4 md:px-0">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Today's Top 5 NBA Picks
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse bg-gray-800/50 rounded-xl backdrop-blur">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-blue-700">
                  <th className="p-4 text-left text-white font-bold">Game</th>
                  <th className="p-4 text-left text-white font-bold">Bet</th>
                  <th className="p-4 text-left text-white font-bold">Price</th>
                  <th className="p-4 text-left text-white font-bold">Edge %</th>
                  <th className="p-4 text-left text-white font-bold">Models</th>
                </tr>
              </thead>
              <tbody>
                {picks.map((pick, idx) => (
                  <tr key={idx} className="border-t border-gray-700 hover:bg-gray-700/50 transition-colors">
                    <td className="p-4 text-gray-200">{pick.game}</td>
                    <td className="p-4 text-gray-100 font-semibold">{pick.bet}</td>
                    <td className="p-4 text-gray-200">{pick.price}</td>
                    <td className="p-4 text-green-400 font-bold">{pick.edge}</td>
                    <td className="p-4 text-gray-200">{pick.models}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MLB ROI Chart */}
      <section className="py-16 md:py-24 bg-gray-900/50 border-b border-blue-500/20">
        <div className="container-premium px-4 md:px-0">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            MLB Model ROIs (2023-25 Backtest)
          </h2>
          <p className="text-gray-400 mb-12 text-center text-lg">Top strategies with verified ROI ≥14%</p>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {mlbStrats.map((strat, idx) => (
              <div key={idx} className="flex items-center gap-6 p-6 bg-gray-800/50 rounded-xl backdrop-blur border border-gray-700 hover:border-blue-500/50 transition-all group">
                <div className="flex-1 bg-gray-700 rounded-full h-10 relative overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-400 via-green-500 to-blue-500 rounded-full shadow-lg transition-all group-hover:scale-x-105 origin-left"
                    style={{ width: `${(strat.roi / maxRoi) * 100}%` }}
                  />
                </div>
                <div className="text-right min-w-0 flex-1">
                  <div className="text-2xl font-bold text-white truncate mb-1">{strat.roi}%</div>
                  <div className="text-sm text-gray-400">{strat.name}</div>
                  <div className="text-xs text-gray-500">({strat.bets} bets)</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keep existing sections but darken */}
      <section className="py-24 md:py-40 border-b border-blue-500/10 bg-gray-900/20">
        <div className="container-premium">
          <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto px-4 md:px-0">
            <h2 className="font-bold text-4xl md:text-5xl mb-4 text-white">
              Why MagnusBets
            </h2>
            <p className="text-base md:text-lg text-gray-300">
              Built on rigorous quantitative analysis and real-world validation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 px-4 md:px-0">
            {[
              {
                icon: '✓',
                title: 'Verified Results',
                description: 'Every pick tracked with actual game outcomes. No simulations, no excuses. Pure data.',
              },
              {
                icon: '◆',
                title: 'Transparent Models',
                description: 'Understand the logic behind each pick. Clear confidence scores and edge calculations.',
              },
              {
                icon: '◇',
                title: 'Professional Grade',
                description: 'Built by quantitative analysts. Multi-model consensus. Risk management included.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="card-premium group p-12 hover:shadow-xl transition-all bg-gray-800/50 backdrop-blur border border-gray-700 hover:border-blue-500/50 rounded-xl">
                <div className="w-12 md:w-14 h-12 md:h-14 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-xl md:text-2xl font-bold text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing with Stripe */}
      <section className="py-24 md:py-40 border-b border-blue-500/10 bg-gray-900/20">
        <div className="container-premium px-4 md:px-0">
          <h2 className="font-bold text-3xl md:text-4xl mb-12 md:mb-16 text-white text-center">
            Pro Subscription - $19/month
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="card-premium p-8 md:p-12 bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">$19<span className="text-2xl text-gray-400">/month</span></h3>
              <p className="text-gray-300 mb-8">Unlock full access to daily picks, model details, and premium features.</p>

              <ul className="space-y-4 mb-10">
                {[
                  'Daily NBA & MLB picks',
                  'Live tracking & results',
                  'Model transparency & edges',
                  'Advanced stats & backtests',
                  'Priority Discord access',
                  'Mobile notifications',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-emerald-400 font-bold text-lg">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="stripe-sub w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-lg backdrop-blur border border-purple-500/50">
                Subscribe $19/mo via Stripe
              </button>
              <p className="text-xs text-gray-500 text-center mt-4">
                Secure checkout. Cancel anytime. 7-day money-back guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-40 bg-gradient-to-b from-gray-900 to-black/90">
        <div className="container-premium px-4 md:px-0 text-center">
          <h2 className="font-bold text-4xl md:text-5xl mb-6 text-white">
            Join Pro Bettors Winning with Data
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Quantitative edge for NBA & MLB. Verified models, transparent results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="stripe-sub px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-lg">
              Start Free Trial →
            </button>
            <Link
              href="/track-record"
              className="px-8 py-4 border-2 border-blue-500/50 text-blue-300 font-bold rounded-xl hover:border-blue-400 hover:bg-blue-500/10 transition-all backdrop-blur"
            >
              View Track Record
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}