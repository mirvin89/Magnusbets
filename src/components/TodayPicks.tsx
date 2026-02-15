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
  const [picks, setPicks] = useState&lt;Pick[]&gt;([])
  const [loading, setLoading] = useState(true)

  useEffect(() =&gt; {
    fetchPicks()
  }, [])

  const fetchPicks = async () =&gt; {
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

  if (loading) return &lt;div className="section-padding container-premium text-center"&gt;&lt;p className="text-xl text-gray-600"&gt;Loading live picks...&lt;/p&gt;&lt;/div&gt;

  return (
    &lt;section className="section-padding"&gt;
      &lt;div className="container-premium"&gt;
        &lt;div className="text-center mb-16 max-w-2xl mx-auto"&gt;
          &lt;div className="inline-block mb-6 px-4 py-2 rounded-lg glass border-blue-500/30"&gt;
            &lt;p className="text-sm font-medium text-blue-500"&gt;Live Quantitative Picks&lt;/p&gt;
          &lt;/div&gt;
          &lt;h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-gray-900"&gt;
            Today's &lt;span className="text-gradient"&gt;Top Picks&lt;/span&gt;
          &lt;/h2&gt;
          &lt;p className="text-lg text-gray-600"&gt;
            Quantitative models • Live data • Responsive table
          &lt;/p&gt;
        &lt;/div&gt;

        &lt;div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md"&gt;
          &lt;table className="min-w-full divide-y divide-gray-200 bg-white"&gt;
            &lt;thead className="bg-gray-50"&gt;
              &lt;tr&gt;
                &lt;th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider"&gt;Game&lt;/th&gt;
                &lt;th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider"&gt;Bet&lt;/th&gt;
                &lt;th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider"&gt;Line&lt;/th&gt;
                &lt;th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider"&gt;Edge&lt;/th&gt;
                &lt;th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider"&gt;Confidence&lt;/th&gt;
              &lt;/tr&gt;
            &lt;/thead&gt;
            &lt;tbody className="divide-y divide-gray-200"&gt;
              {picks.map((pick) =&gt; (
                &lt;tr key={pick.id} className="hover:bg-gray-50"&gt;
                  &lt;td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"&gt;
                    {pick.away_team} @ {pick.home_team}
                  &lt;/td&gt;
                  &lt;td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize"&gt;
                    {pick.bet_type}
                  &lt;/td&gt;
                  &lt;td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900"&gt;
                    {pick.line}
                  &lt;/td&gt;
                  &lt;td className="px-6 py-4 whitespace-nowrap text-sm"&gt;
                    &lt;span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"&gt;
                      +{pick.edge.toFixed(1)}%
                    &lt;/span&gt;
                  &lt;/td&gt;
                  &lt;td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"&gt;
                    {pick.confidence}%
                  &lt;/td&gt;
                &lt;/tr&gt;
              ))}
              {picks.length === 0 &amp;&amp; (
                &lt;tr&gt;
                  &lt;td colSpan={5} className="px-6 py-12 text-center text-gray-500 text-lg"&gt;
                    No picks available today. Check back tomorrow!
                  &lt;/td&gt;
                &lt;/tr&gt;
              )}
            &lt;/tbody&gt;
          &lt;/table&gt;
        &lt;/div&gt;

        &lt;div className="mt-16 text-center"&gt;
          &lt;Link href="/auth" className="btn-primary"&gt;
            Join Beta for Alerts &amp; Full Access
          &lt;/Link&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  )
}