'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative border-t border-accent-gold/10 mt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-premium-dark via-transparent to-transparent opacity-50 pointer-events-none"></div>

      <div className="container-premium relative z-10 py-16 md:py-24">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-playfair font-bold text-gradient mb-4 inline-block">
              MB
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Quantitative NBA picks with verified results. Professional-grade models, transparent methodology, zero AI hype.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: 'Twitter', href: '#' },
                { icon: 'Discord', href: '#' },
                { icon: 'Email', href: '#' },
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  className="w-10 h-10 rounded-full glass border-accent-gold/20 flex items-center justify-center text-accent-gold hover:text-accent-amber hover:border-accent-gold/50 transition-all duration-300"
                  aria-label={social.icon}
                >
                  <span className="text-xs font-bold">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/picks', label: 'Today\'s Picks' },
                { href: '/track-record', label: 'Track Record' },
                { href: '/pricing', label: 'Pricing' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/about', label: 'About' },
                { href: '#', label: 'Blog' },
                { href: '#', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: '#', label: 'Terms' },
                { href: '#', label: 'Privacy' },
                { href: '#', label: 'Disclaimer' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent-gold/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2026 MagnusBets. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Built with precision. Proven with data.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="card-premium bg-gradient-to-r from-accent-gold/5 to-accent-amber/5 p-4">
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong className="text-accent-gold">Disclaimer:</strong> Past performance does not guarantee future results. Betting involves risk. Please gamble responsibly and consult local regulations.
          </p>
        </div>
      </div>
    </footer>
  )
}
