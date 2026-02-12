'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
)

export default function SignupModal() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email, created_at: new Date() }])

      if (error) throw error

      setStatus('success')
      setMessage('✓ You\'re on the list! Check your email.')
      setEmail('')
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      setStatus('error')
      setMessage('Error joining waitlist. Try again.')
    }
  }

  return (
    <div className="bg-gradient-to-r from-slate-800/50 to-slate-800/30 backdrop-blur border border-amber-700/30 rounded-2xl p-8 mb-16">
      <h2 className="text-3xl font-playfair font-bold mb-2">Get Free Picks During Beta</h2>
      <p className="text-gray-400 mb-6">Join our waitlist for early access and daily NBA picks.</p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-4 py-3 bg-slate-800 border border-amber-700/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:opacity-50 text-slate-950 font-bold rounded-lg transition-all"
        >
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
        </button>
      </form>

      {status === 'success' && (
        <p className="mt-4 text-amber-400 text-sm">{message}</p>
      )}
      {status === 'error' && (
        <p className="mt-4 text-red-400 text-sm">{message}</p>
      )}
    </div>
  )
}
