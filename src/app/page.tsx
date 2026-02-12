import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 text-white">
              Data-Driven NBA Picks
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Professional quantitative models with verified results. Transparent methodology, no AI hype.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-colors">
                Get Started
              </button>
              <Link href="/track-record" className="px-8 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500/10 font-bold rounded-lg transition-colors">
                View Results
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="space-y-4">
            <div className="bg-purple-900/20 border border-purple-700/30 rounded-lg p-6">
              <div className="text-sm text-gray-400 mb-2">Win Rate</div>
              <div className="text-4xl font-bold text-purple-400">72.9%</div>
              <div className="text-sm text-gray-500 mt-2">Across 418 verified bets</div>
            </div>
            <div className="bg-purple-900/20 border border-purple-700/30 rounded-lg p-6">
              <div className="text-sm text-gray-400 mb-2">Average ROI</div>
              <div className="text-4xl font-bold text-purple-400">+24.2%</div>
              <div className="text-sm text-gray-500 mt-2">Per bet</div>
            </div>
            <div className="bg-purple-900/20 border border-purple-700/30 rounded-lg p-6">
              <div className="text-sm text-gray-400 mb-2">Total Profit</div>
              <div className="text-4xl font-bold text-purple-400">$24.2K</div>
              <div className="text-sm text-gray-500 mt-2">Since launch</div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-purple-900/20"></div>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-playfair text-4xl font-bold mb-12 text-white">Why MagnusBets</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-3">Verified Results</h3>
            <p className="text-gray-400">Every pick tracked with actual game outcomes. No simulations, no excuses.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-3">Transparent Models</h3>
            <p className="text-gray-400">Understand the logic behind each pick. Clear confidence scores and edge calculations.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-3">Professional Grade</h3>
            <p className="text-gray-400">Built by quantitative analysts. Multi-model consensus. Risk management included.</p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-purple-900/20"></div>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="font-playfair text-4xl font-bold mb-6 text-white">Ready to Get Picks?</h2>
        <p className="text-xl text-gray-400 mb-8">Free during beta. Join the waitlist.</p>
        <form className="flex max-w-md mx-auto gap-2">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-3 bg-purple-900/30 border border-purple-700/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-colors"
          >
            Join
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">No spam. Picks only.</p>
      </section>
    </>
  )
}
