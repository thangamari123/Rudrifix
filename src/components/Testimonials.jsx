import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const testimonials = [
  {
    name: 'Karthik Rajan',
    business: 'Textile Showroom Owner',
    quote: 'Rudrifix transformed our Facebook ad campaigns. We saw a 3X increase in walk-in customers within the first month!',
    rating: 5, initials: 'KR', color: 'from-violet-500 to-blue-600',
  },
  {
    name: 'Priya Lakshmi',
    business: 'Restaurant & Cafe Chain',
    quote: 'Our new website looks incredible. Online orders increased by 180% within weeks of launch. They truly understand conversions.',
    rating: 5, initials: 'PL', color: 'from-accent to-violet-700',
  },
  {
    name: 'Senthil Kumar',
    business: 'Jewelry Brand',
    quote: 'The product photography and reels they created are stunning. Our Instagram engagement doubled across Tamil Nadu!',
    rating: 5, initials: 'SK', color: 'from-pink-500 to-rose-600',
  },
]

export default function Testimonials() {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000)
    return () => clearInterval(timer)
  }, [])

  const Card = ({ t, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass-card glass-card-hover rounded-3xl p-8 transition-all duration-500 relative group"
    >
      <Quote size={40} className="text-accent/10 absolute top-6 right-6 group-hover:text-accent/20 transition-colors" />
      <div className="flex gap-1 mb-4">
        {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />)}
      </div>
      <p className="text-text-secondary leading-relaxed mb-6 text-sm italic">"{t.quote}"</p>
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-heading font-bold text-sm shadow-md`}>{t.initials}</div>
        <div>
          <div className="font-heading font-bold text-text-primary text-sm">{t.name}</div>
          <div className="text-text-muted text-xs">{t.business}</div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section className="py-24 sm:py-32 section-dark-alt relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="orb w-[350px] h-[350px] bg-violet-600 bottom-[-100px] left-[20%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-accent-light font-heading font-semibold text-sm tracking-widest uppercase">Testimonials</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-text-primary mt-3 mb-4">What Our Clients Say</h2>
        </motion.div>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {testimonials.map((t, i) => <Card key={t.name} t={t} index={i} />)}
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Card t={testimonials[current]} index={0} />
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)} className="w-10 h-10 rounded-full glass-card flex items-center justify-center" aria-label="Previous"><ChevronLeft size={18} className="text-text-secondary" /></button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${current === i ? 'bg-accent w-6' : 'bg-white/20'}`} aria-label={`Testimonial ${i+1}`} />)}
            </div>
            <button onClick={() => setCurrent((p) => (p + 1) % testimonials.length)} className="w-10 h-10 rounded-full glass-card flex items-center justify-center" aria-label="Next"><ChevronRight size={18} className="text-text-secondary" /></button>
          </div>
        </div>
      </div>

      {/* Bottom transition to light Audit section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F0F9FF] to-transparent" />
    </section>
  )
}
