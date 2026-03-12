import React from 'react';
import Link from 'next/link';

export default function Footer2() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-400">⚡</span> MagnusBets
            </h3>
            <p className="text-gray-400 text-sm">
              Professional sports betting models with verified results.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link href="/picks" className="text-gray-400 hover:text-cyan-400 transition-colors">Picks</Link></li>
              <li><Link href="/performance" className="text-gray-400 hover:text-cyan-400 transition-colors">Performance</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-cyan-400 transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/disclaimer" className="text-gray-400 hover:text-cyan-400 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="https://twitter.com/MagnusBets" className="text-gray-400 hover:text-cyan-400 transition-colors">Twitter</a></li>
              <li><a href="mailto:support@magnusbets.com" className="text-gray-400 hover:text-cyan-400 transition-colors">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} MagnusBets. All rights reserved.
        </div>
      </div>
    </footer>
  );
}