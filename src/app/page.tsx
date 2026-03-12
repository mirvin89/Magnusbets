/* MagnusBets v2 */
import Navbar2 from '@/components/Navbar2';
import Hero2 from '@/components/Hero2';
import PicksGrid2 from '@/components/PicksGrid2';
import PerformanceTable2 from '@/components/PerformanceTable2';
import PricingSection2 from '@/components/PricingSection2';
import Footer2 from '@/components/Footer2';
import { getStats, getTodayPicks } from '@/lib/statistics';

export default async function Home() {
  const [stats, todayPicks] = await Promise.all([
    getStats(),
    getTodayPicks(),
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
      <Navbar2 />
      
      <Hero2
        totalPicks={stats.totalPicks}
        wins={stats.wins}
        winRate={stats.winRate}
        cumulativeProfit={stats.cumulativeProfit}
        pendingPicks={stats.pendingPicks}
      />

      {/* Today's Picks Section */}
      <section id="picks" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Today&apos;s Top Plays
            </h2>
            <p className="text-xl text-gray-400">
              {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          <PicksGrid2 picks={todayPicks} />
        </div>
      </section>

      {/* Performance Section */}
      <section id="performance" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Verified Performance
            </h2>
            <p className="text-xl text-gray-400">
              Every pick independently tracked and verified
            </p>
          </div>
          <PerformanceTable2 stats={stats} />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Get Premium Picks
            </h2>
            <p className="text-xl text-gray-400">
              Access daily picks before odds move
            </p>
          </div>
          <PricingSection2 />
        </div>
      </section>

      <Footer2 />
    </div>
  );
}