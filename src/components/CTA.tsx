const CTA = () => {
  return (
    <section className="py-16">
      <div className="bg-white border border-gray-200 rounded-3xl p-12 text-center shadow-sm">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Start Beating the Books Today
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Get data‑driven picks, live tracking, and proven results—all for less than the price of a single bad bet.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <div className="text-5xl font-bold text-green-600 mb-4">$49</div>
              <div className="text-gray-900 font-bold text-xl mb-2">Monthly</div>
              <p className="text-gray-500 mb-6">Full access to daily picks, track record, and community.</p>
              <button className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl transition-all">
                Subscribe Now
              </button>
            </div>
            <div className="bg-gray-900 text-white p-8 rounded-2xl relative border-2 border-green-500">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <div className="text-5xl font-bold mb-4">$399</div>
              <div className="font-bold text-xl mb-2">Yearly</div>
              <p className="text-gray-300 mb-6">Save $189—includes priority support and model deep‑dives.</p>
              <button className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all">
                Save 35%
              </button>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <div className="text-5xl font-bold text-green-600 mb-4">$9</div>
              <div className="text-gray-900 font-bold text-xl mb-2">Daily Trial</div>
              <p className="text-gray-500 mb-6">Try one day of picks risk‑free. Cancel anytime.</p>
              <button className="w-full py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-xl transition-colors">
                Try Today
              </button>
            </div>
          </div>

          <div className="text-gray-500 text-sm max-w-2xl mx-auto">
            <p>✅ 7‑day money‑back guarantee · ✅ No long‑term contract · ✅ Cancel anytime</p>
            <p className="mt-2">All subscriptions include access to our live Discord community, real‑time alerts, and full historical data.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA