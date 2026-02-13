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
    <div className="card-premium p-8 md:p-12 max-w-2xl mx-auto mb-16 border-l-4 border-l-accent-gold relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-accent-gold/5 rounded-full blur-2xl -z-10"></div>

      <div className="relative z-10">
        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/30">
          <p className="text-xs font-bold text-accent-gold uppercase tracking-wider">⚡ Limited Beta Access</p>
        </div>

        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-2">
          72.9% Win Rate <span className="text-gradient">Picks</span>
        </h2>
        <p className="text-gray-300 mb-8 text-lg leading-relaxed">
          Join 1,200+ traders getting verified NBA picks with transparent ROI. Free beta access—no credit card needed.
        </p>

        {/* Key Benefits */}
        <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
          {[
            '✓ Daily picks with confidence scores',
            '✓ Live performance tracking',
            '✓ Model methodology explained',
            '✓ Cancel anytime',
          ].map((benefit, idx) => (
            <div key={idx} className="text-gray-300">{benefit}</div>
          ))}
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-6 py-3 bg-premium-navy/70 border border-accent-gold/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent-gold/70 focus:bg-premium-navy/90 transition-all duration-300"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:shadow-accent-gold/30"
          >
            {status === 'loading' ? 'Joining...' : 'Get Access →'}
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
          We never share your email. See our <a href="#" className="text-accent-gold hover:text-accent-amber transition-colors">privacy policy</a>.
        </p>
      </div>
    </div>
  )
}
