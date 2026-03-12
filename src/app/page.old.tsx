"use client"

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import PicksCard from '@/components/PicksCard'
import PerformanceTable from '@/components/PerformanceTable'
import PricingSection from '@/components/PricingSection'

interface Pick {
  game: string
  bet: string
  price: string
  edge: string
  models: string
}

export default function Home() {
  const [picks, setPicks] = useState<Pick[]>([])

  useEffect(() => {
    // Mock picks data - in production, fetch from API/CSV
    const mockPicks = [
      {
        game: 'Timberwolves/Trail Blazers',
        bet: 'OVER 236.5',
        price: '-108',
        edge: '+5.6pp',
        models: '5'
      },
      {
        game: '76ers @ Pacers',
        bet: '76ers -10.5',
        price: '-102',
        edge: '+4.4pp',
        models: '4'
      },
      {
        game: 'Xavier/Providence',
        bet: 'OVER 170.5',
        price: '-110',
        edge: '+19.3pp',
        models: '6'
      },
      {
        game: 'Cognizant Classic',
        bet: 'Shane Lowry Top 20',
        price: '+120',
        edge: '+47.4pp',
        models: '1'
      },
      {
        game: 'CBB',
        bet: 'Minnesota +21.5',
        price: '-105',
        edge: '+23.3pp',
        models: '4'
      }
    ]
    setPicks(mockPicks)
  }, [])

  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Today's Picks Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Today's Top Plays
            </h2>
            <p className="text-xl text-gray-400">February 24, 2026</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {picks.map((pick, idx) => (
              <PicksCard key={idx} pick={pick} />
            ))}
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Season Performance
            </h2>
            <p className="text-xl text-gray-400">Verified Results</p>
          </div>

          <PerformanceTable />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Get Premium Picks
            </h2>
            <p className="text-xl text-gray-400">Access daily picks before odds move</p>
          </div>

          <PricingSection />
        </div>
      </section>
    </div>
  )
}
