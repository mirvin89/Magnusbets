import TodayPicks from '@/components/TodayPicks'

export default function PicksPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Today's Picks</h1>
        <p className="text-gray-600 mb-8">Quantitative model predictions for today's NBA games. Updated daily with confidence scores and model consensus.</p>
        <TodayPicks />
      </div>
    </div>
  )
}