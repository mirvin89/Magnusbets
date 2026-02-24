'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="text-6xl mb-6">✓</div>
        <h1 className="text-5xl font-bold text-white mb-4">Subscription Successful!</h1>
        <p className="text-xl text-gray-400 mb-8">
          Thank you for subscribing. Your access to premium picks is now active.
        </p>

        {sessionId && (
          <p className="text-sm text-gray-500 mb-8">
            Session ID: {sessionId}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-lg transition-all duration-300"
          >
            Back to Home
          </Link>
          <a
            href="mailto:support@magnusbets.com"
            className="px-8 py-4 border border-slate-600 text-gray-300 hover:border-slate-500 hover:text-white font-bold rounded-lg transition-all duration-300"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}
