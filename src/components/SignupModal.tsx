'use client'

import { useState } from 'react'

export default function SignupModal() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Simulate API call
      setTimeout(() => {
        setStatus('success')
        setMessage('✓ You\'re on the list! Check your email for beta access.')
        setEmail('')
        setTimeout(() => setStatus('idle'), 5000)
      }, 1000)
    } catch (err) {
      setStatus('error')
      setMessage('Error joining waitlist. Try again.')
    }
  }

  return (
    <div className="card-premium p-8 md:p-10 max-w-2xl mx-auto mb-16 border-l-4 border-l-accent-gold">
      <h2 className="font-playfair text-3xl font-bold text-white mb-2">
        Get Free Picks During <span className="text-gradient">Beta</span>
      </h2>
      <p className="text-gray-400 mb-8">
        Join our exclusive community for early access to daily quantitative picks and live tracking.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-6 py-3 bg-premium-navy/50 border border-accent-gold/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent-gold/70 focus:bg-premium-navy/70 transition-all duration-300"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
        </button>
      </form>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="p-4 bg-green-600/20 border border-green-500/50 rounded-lg animate-fade-in">
          <p className="text-green-300 text-sm font-medium">
            ✓ {message}
          </p>
        </div>
      )}
      {status === 'error' && (
        <div className="p-4 bg-red-600/20 border border-red-500/50 rounded-lg animate-fade-in">
          <p className="text-red-300 text-sm font-medium">
            ✗ {message}
          </p>
        </div>
      )}

      {/* Trust note */}
      <p className="text-xs text-gray-500 mt-4">
        We never share your email. Unsubscribe anytime.
      </p>
    </div>
  )
}
