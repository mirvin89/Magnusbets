'use client'

import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import Link from 'next/link'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleCheckout = async (priceId: string) => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      })

      const { sessionId, error: checkoutError } = await response.json()

      if (checkoutError) {
        setError(checkoutError)
        setLoading(false)
        return
      }

      const stripe = await stripePromise
      if (!stripe) throw new Error('Stripe not loaded')

      await stripe.redirectToCheckout({ sessionId })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Checkout failed')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Link href="/" className="text-gray-400 hover:text-white mb-8 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-white mb-4">Choose Your Plan</h1>
          <p className="text-xl text-gray-400">Select a subscription to access premium picks</p>
        </div>

        {error && (
          <div className="max-w-2xl mx-auto mb-8 p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Monthly */}
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-8 hover:border-slate-600/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-2">Monthly</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold text-white">$29</span>
              <span className="text-gray-400">/mo</span>
            </div>
            <button
              onClick={() => handleCheckout('price_monthly')}
              disabled={loading}
              className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-all duration-300 disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Subscribe'}
            </button>
          </div>

          {/* Quarterly - Featured */}
          <div className="relative border-2 border-cyan-500 bg-slate-800/80 rounded-xl p-8 md:scale-105 shadow-2xl shadow-cyan-500/20">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold">
              BEST VALUE
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Quarterly</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold text-white">$74</span>
              <span className="text-gray-400">/3mo</span>
            </div>
            <button
              onClick={() => handleCheckout('price_quarterly')}
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-lg transition-all duration-300 disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Subscribe'}
            </button>
          </div>

          {/* Annual */}
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-8 hover:border-slate-600/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-2">Annual</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold text-white">$249</span>
              <span className="text-gray-400">/year</span>
            </div>
            <button
              onClick={() => handleCheckout('price_annual')}
              disabled={loading}
              className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-all duration-300 disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Subscribe'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
