'use client'

import AuthModal from '@/components/AuthModal'
import { useState } from 'react'

export default function AuthPage() {
  return (
    <div className="min-h-screen pt-32">
      <div className="container-premium px-4 md:px-0">
        <AuthModal isOpen={true} onClose={() => window.history.back()} />
      </div>
    </div>
  )
}
