const Testimonials = () => {
  const testimonials = [
    {
      name: 'Alex T.',
      role: 'Professional Bettor',
      content: 'I’ve tried dozens of services. MagnusBets is the only one that consistently delivers +EV picks. The quantitative models are transparent and the edge is real.',
      profit: '+$8,400',
      avatar: 'AT'
    },
    {
      name: 'Jordan M.',
      role: 'Weekend Warrior',
      content: 'As someone with a full‑time job, I don’t have time to crunch numbers. MagnusBets gives me actionable picks I can trust. Up 12 units this month.',
      profit: '+$2,100',
      avatar: 'JM'
    },
    {
      name: 'Casey R.',
      role: 'Data Scientist',
      content: 'The statistical rigor behind their models is impressive. I’ve back‑tested their methodology and the results hold up. This is the real deal.',
      profit: '+$5,700',
      avatar: 'CR'
    }
  ]

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Members Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join hundreds of bettors who have transformed their approach.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-3xl p-8 hover:border-gray-300 transition-all shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {testimonial.avatar}
              </div>
              <div className="ml-4">
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-500 text-sm">{testimonial.role}</div>
              </div>
              <div className="ml-auto text-2xl font-bold text-green-600">
                {testimonial.profit}
              </div>
            </div>
            <p className="text-gray-700 italic mb-6">"{testimonial.content}"</p>
            <div className="flex text-yellow-500">
              {'★'.repeat(5)}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-4 bg-gray-50 border border-gray-300 rounded-2xl px-8 py-4">
          <div className="text-3xl font-bold text-gray-900">4.9</div>
          <div className="text-left">
            <div className="flex text-yellow-500">
              {'★'.repeat(5)}
            </div>
            <div className="text-gray-500 text-sm">Average rating from 247 members</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials