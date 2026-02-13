'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
)

export default function AuthModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(true)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      if (isSignUp) {
        if (password !== confirmPassword) {
          setStatus('error')
          setMessage('Passwords do not match')
          return
        }

        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: email.split('@')[0],
            },
          },
        })

        if (error) throw error

        setStatus('success')
        setMessage('Account created! Check your email to confirm.')
        setTimeout(() => {
          onClose()
          setEmail('')
          setPassword('')
          setConfirmPassword('')
          setStatus('idle')
        }, 3000)
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (error) throw error

        setStatus('success')
        setMessage('Logged in! Redirecting...')
        setTimeout(() => {
          window.location.href = '/dashboard'
        }, 1500)
      }
    } catch (err: any) {
      setStatus('error')
      setMessage(err.message || 'Something went wrong')
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="card-premium p-8 md:p-12 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          ✕
        </button>

        <h2 className="font-playfair text-3xl font-bold text-white mb-2">
          {isSignUp ? 'Join MagnusBets' : 'Sign In'}
        </h2>
        <p className="text-gray-400 mb-6">
          {isSignUp ? 'Create your free account to get started' : 'Welcome back'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 bg-cyan-950/30 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 bg-cyan-950/30 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>

          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-2 bg-cyan-950/30 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>
          )}

          {status === 'success' && (
            <div className="p-3 bg-green-500/20 border border-green-500/50 rounded-lg">
              <p className="text-green-300 text-sm">{message}</p>
            </div>
          )}

          {status === 'error' && (
            <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
              <p className="text-red-300 text-sm">{message}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full btn-primary py-2 disabled:opacity-60"
          >
            {status === 'loading' ? 'Processing...' : isSignUp ? 'Create Account' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-400">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4">
          We never share your email. See our privacy policy.
        </p>
      </div>
    </div>
  )
}
