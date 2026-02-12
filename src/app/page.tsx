import Hero from '@/components/Hero'
import TodayPicks from '@/components/TodayPicks'
import PerformanceChart from '@/components/PerformanceChart'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <TodayPicks />
        <PerformanceChart />
        <Testimonials />
        <CTA />
      </div>
    </div>
  )
}