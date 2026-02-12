'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-amber-900/20 bg-slate-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-white font-playfair font-bold text-xl mb-4">MagnusBets</h3>
            <p className="text-sm text-gray-500">Quantitative NBA picks with verified results. Professional-grade models, transparent methodology.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/picks" className="hover:text-amber-500 transition-colors">Today's Picks</Link></li>
              <li><Link href="/track-record" className="hover:text-amber-500 transition-colors">Track Record</Link></li>
              <li><Link href="/pricing" className="hover:text-amber-500 transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-amber-500 transition-colors">About</Link></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-amber-900/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© 2026 MagnusBets. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors">Twitter</a>
              <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors">Discord</a>
              <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors">Email</a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-slate-800/30 border border-amber-900/20 rounded-lg">
          <p className="text-xs text-gray-500">
            <strong>Disclaimer:</strong> Past performance does not guarantee future results. Betting carries risk. Please gamble responsibly and consult local regulations.
          </p>
        </div>
      </div>
    </footer>
  )
}
