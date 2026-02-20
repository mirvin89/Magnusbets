import Link from 'next/link'
import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'

' use client'

export default function Home() {
  const [picks, setPicks] = useState([])

  useEffect(() =&gt; {
    fetch('/today_top_plays.csv')
      .then(r =&gt; r.text())
      .then(text =&gt; {
        const lines = text.trim().split('\n').slice(1)
        const parsed = lines.map(line =&gt; {
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
    {name: 'RF any_dog &gt;20%', roi: 20.7, bets: 291},
    {name: 'XGB batting home_dog &gt;20%', roi: 20.5, bets: 200},
    {name: 'LR away_dog &gt;10% Med Dog', roi: 18.5, bets: 160},
    {name: 'Batting GBM home_dog &gt;20%', roi: 15.9, bets: 673},
    {name: 'GBM_Reg totals &gt;2.5R', roi: 14.0, bets: 500},
  ]

  const maxRoi = 25

  return (
    &lt;&gt;
      &lt;Hero /&gt;

      {/* NBA Top Plays */}
      &lt;section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-950 border-b border-blue-500/20"&gt;
        &lt;div className="container-premium px-4 md:px-0"&gt;
          &lt;h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"&gt;
            Today's Top 5 NBA Picks
          &lt;/h2&gt;
          &lt;div className="overflow-x-auto"&gt;
            &lt;table className="w-full table-auto border-collapse bg-gray-800/50 rounded-xl backdrop-blur"&gt;
              &lt;thead&gt;
                &lt;tr className="bg-gradient-to-r from-blue-600 to-blue-700"&gt;
                  &lt;th className="p-4 text-left text-white font-bold"&gt;Game&lt;/th&gt;
                  &lt;th className="p-4 text-left text-white font-bold"&gt;Bet&lt;/th&gt;
                  &lt;th className="p-4 text-left text-white font-bold"&gt;Price&lt;/th&gt;
                  &lt;th className="p-4 text-left text-white font-bold"&gt;Edge %&lt;/th&gt;
                  &lt;th className="p-4 text-left text-white font-bold"&gt;Models&lt;/th&gt;
                &lt;/tr&gt;
              &lt;/thead&gt;
              &lt;tbody&gt;
                {picks.map((pick, idx) =&gt; (
                  &lt;tr key={idx} className="border-t border-gray-700 hover:bg-gray-700/50 transition-colors"&gt;
                    &lt;td className="p-4 text-gray-200"&gt;{pick.game}&lt;/td&gt;
                    &lt;td className="p-4 text-gray-100 font-semibold"&gt;{pick.bet}&lt;/td&gt;
                    &lt;td className="p-4 text-gray-200"&gt;{pick.price}&lt;/td&gt;
                    &lt;td className="p-4 text-green-400 font-bold"&gt;{pick.edge}&lt;/td&gt;
                    &lt;td className="p-4 text-gray-200"&gt;{pick.models}&lt;/td&gt;
                  &lt;/tr&gt;
                ))}
              &lt;/tbody&gt;
            &lt;/table&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* MLB ROI Chart */}
      &lt;section className="py-16 md:py-24 bg-gray-900/50 border-b border-blue-500/20"&gt;
        &lt;div className="container-premium px-4 md:px-0"&gt;
          &lt;h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"&gt;
            MLB Model ROIs (2023-25 Backtest)
          &lt;/h2&gt;
          &lt;p className="text-gray-400 mb-12 text-center text-lg"&gt;Top strategies with verified ROI ≥14%&lt;/p&gt;
          &lt;div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto"&gt;
            {mlbStrats.map((strat, idx) =&gt; (
              &lt;div key={idx} className="flex items-center gap-6 p-6 bg-gray-800/50 rounded-xl backdrop-blur border border-gray-700 hover:border-blue-500/50 transition-all group"&gt;
                &lt;div className="flex-1 bg-gray-700 rounded-full h-10 relative overflow-hidden"&gt;
                  &lt;div 
                    className="h-full bg-gradient-to-r from-emerald-400 via-green-500 to-blue-500 rounded-full shadow-lg transition-all group-hover:scale-x-105 origin-left"
                    style={{ width: `${(strat.roi / maxRoi) * 100}%` }}
                  /&gt;
                &lt;/div&gt;
                &lt;div className="text-right min-w-0 flex-1"&gt;
                  &lt;div className="text-2xl font-bold text-white truncate mb-1"&gt;{strat.roi}%&lt;/div&gt;
                  &lt;div className="text-sm text-gray-400"&gt;{strat.name}&lt;/div&gt;
                  &lt;div className="text-xs text-gray-500"&gt;({strat.bets} bets)&lt;/div&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            ))}
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* Keep existing sections but darken */}
      &lt;section className="py-24 md:py-40 border-b border-blue-500/10 bg-gray-900/20"&gt;
        &lt;div className="container-premium"&gt;
          &lt;div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto px-4 md:px-0"&gt;
            &lt;h2 className="font-bold text-4xl md:text-5xl mb-4 text-white"&gt;
              Why MagnusBets
            &lt;/h2&gt;
            &lt;p className="text-base md:text-lg text-gray-300"&gt;
              Built on rigorous quantitative analysis and real-world validation.
            &lt;/p&gt;
          &lt;/div&gt;

          &lt;div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 px-4 md:px-0"&gt;
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
            ].map((feature, idx) =&gt; (
              &lt;div key={idx} className="card-premium group p-12 hover:shadow-xl transition-all bg-gray-800/50 backdrop-blur border border-gray-700 hover:border-blue-500/50 rounded-xl"&gt;
                &lt;div className="w-12 md:w-14 h-12 md:h-14 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-xl md:text-2xl font-bold text-white mb-4"&gt;
                  {feature.icon}
                &lt;/div&gt;
                &lt;h3 className="text-lg md:text-xl font-bold text-white mb-3"&gt;
                  {feature.title}
                &lt;/h3&gt;
                &lt;p className="text-sm md:text-base text-gray-300 leading-relaxed"&gt;
                  {feature.description}
                &lt;/p&gt;
              &lt;/div&gt;
            ))}
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* Pricing with Stripe */}
      &lt;section className="py-24 md:py-40 border-b border-blue-500/10 bg-gray-900/20"&gt;
        &lt;div className="container-premium px-4 md:px-0"&gt;
          &lt;h2 className="font-bold text-3xl md:text-4xl mb-12 md:mb-16 text-white text-center"&gt;
            Pro Subscription - $19/month
          &lt;/h2&gt;

          &lt;div className="max-w-2xl mx-auto"&gt;
            &lt;div className="card-premium p-8 md:p-12 bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl"&gt;
              &lt;h3 className="text-3xl md:text-4xl font-bold text-white mb-4"&gt;$19&lt;span className="text-2xl text-gray-400"&gt;/month&lt;/span&gt;&lt;/h3&gt;
              &lt;p className="text-gray-300 mb-8"&gt;Unlock full access to daily picks, model details, and premium features.&lt;/p&gt;

              &lt;ul className="space-y-4 mb-10"&gt;
                {[
                  'Daily NBA &amp; MLB picks',
                  'Live tracking &amp; results',
                  'Model transparency &amp; edges',
                  'Advanced stats &amp; backtests',
                  'Priority Discord access',
                  'Mobile notifications',
                ].map((item, idx) =&gt; (
                  &lt;li key={idx} className="flex items-center gap-3"&gt;
                    &lt;span className="text-emerald-400 font-bold text-lg"&gt;✓&lt;/span&gt;
                    &lt;span className="text-gray-300"&gt;{item}&lt;/span&gt;
                  &lt;/li&gt;
                ))}
              &lt;/ul&gt;

              &lt;button className="stripe-sub w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-lg backdrop-blur border border-purple-500/50"&gt;
                Subscribe $19/mo via Stripe
              &lt;/button&gt;
              &lt;p className="text-xs text-gray-500 text-center mt-4"&gt;
                Secure checkout. Cancel anytime. 7-day money-back guarantee.
              &lt;/p&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* Final CTA */}
      &lt;section className="py-24 md:py-40 bg-gradient-to-b from-gray-900 to-black/90"&gt;
        &lt;div className="container-premium px-4 md:px-0 text-center"&gt;
          &lt;h2 className="font-bold text-4xl md:text-5xl mb-6 text-white"&gt;
            Join Pro Bettors Winning with Data
          &lt;/h2&gt;
          &lt;p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"&gt;
            Quantitative edge for NBA &amp; MLB. Verified models, transparent results.
          &lt;/p&gt;

          &lt;div className="flex flex-col sm:flex-row gap-4 justify-center"&gt;
            &lt;button className="stripe-sub px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-lg"&gt;
              Start Free Trial →
            &lt;/button&gt;
            &lt;Link
              href="/track-record"
              className="px-8 py-4 border-2 border-blue-500/50 text-blue-300 font-bold rounded-xl hover:border-blue-400 hover:bg-blue-500/10 transition-all backdrop-blur"
            &gt;
              View Track Record
            &lt;/Link&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
    &lt;/&gt;
  )
}