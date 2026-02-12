import CTA from '@/components/CTA'

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Pricing</h1>
        <p className="text-gray-600 mb-8">Choose the plan that fits your betting style. All plans include access to our quantitative picks and community.</p>
        <CTA />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">What's Included</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Daily quantitative model picks</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Full model breakdowns</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Live track record dashboard</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Discord community access</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Real‑time alerts</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Historical data download</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">FAQ</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900">Can I cancel anytime?</h4>
                <p className="text-gray-500 text-sm">Yes, no long‑term contracts. Cancel anytime and keep access until the end of your billing period.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Do you offer a guarantee?</h4>
                <p className="text-gray-500 text-sm">We offer a 7‑day money‑back guarantee if you're not satisfied.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">What sports do you cover?</h4>
                <p className="text-gray-500 text-sm">Currently focused on NBA basketball. We plan to add NFL, MLB, and NHL soon.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Support</h3>
            <p className="text-gray-700 mb-4">Need help? Reach out to our team.</p>
            <ul className="space-y-2 text-gray-500">
              <li>Email: support@magnusbets.com</li>
              <li>Discord: Join our community</li>
              <li>Twitter: @MagnusBets</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}