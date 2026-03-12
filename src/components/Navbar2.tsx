import React from 'react';
import Link from 'next/link';

export default function Navbar2() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Picks', href: '#picks' },
    { label: 'Performance', href: '#performance' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400">⚡</span>
            <span>MagnusBets</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="px-5 py-2 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white rounded-lg font-medium transition-colors">
              Sign In
            </button>
            <button className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-lg transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}