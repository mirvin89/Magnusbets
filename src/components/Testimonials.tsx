'use client'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Alex T.',
      role: 'Professional Bettor',
      content: 'I\'ve tried dozens of services. MagnusBets is the only one that consistently delivers +EV picks. The quantitative models are transparent and the edge is real.',
      profit: '+$8,400',
      avatar: 'AT',
      color: 'from-blue-600 to-blue-400'
    },
    {
      name: 'Jordan M.',
      role: 'Weekend Warrior',
      content: 'As someone with a full-time job, I don\'t have time to crunch numbers. MagnusBets gives me actionable picks I can trust. Up 12 units this month.',
      profit: '+$2,100',
      avatar: 'JM',
      color: 'from-purple-600 to-purple-400'
    },
    {
      name: 'Casey R.',
      role: 'Data Scientist',
      content: 'The statistical rigor behind their models is impressive. I\'ve backtested their methodology and the results hold up. This is the real deal.',
      profit: '+$5,700',
      avatar: 'CR',
      color: 'from-pink-600 to-pink-400'
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-premium">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-white">
            What Our <span className="text-gradient">Members Say</span>
          </h2>
          <p className="text-lg text-gray-400">
            Join thousands of bettors who have transformed their approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="card-premium p-8 relative" style={{ animationDelay: `${idx * 0.1}s` }}>
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent-gold text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 italic mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-6 border-t border-accent-gold/10">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{testimonial.name}</div>
                    <div className="text-gray-500 text-xs">{testimonial.role}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-accent-gold font-bold text-lg">{testimonial.profit}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating Badge */}
        <div className="flex justify-center mb-12">
          <div className="card-premium inline-flex items-center gap-6 px-8 py-6">
            <div>
              <div className="text-4xl font-bold text-gradient">4.9</div>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent-gold">★</span>
                ))}
              </div>
            </div>
            <div className="w-px h-12 bg-accent-gold/20"></div>
            <div className="text-left">
              <p className="font-bold text-white">From 247+ Members</p>
              <p className="text-sm text-gray-400">Average member rating</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">Ready to join the community?</p>
          <button className="btn-primary">
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials