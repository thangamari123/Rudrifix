import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Zap, BarChart3, Users, ChevronRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const projects = [
  {
    id: 1,
    category: 'Meta Ads',
    title: 'Interior Design Growth',
    desc: 'Scalable lead generation for premium interior services. We optimized creative sets and targeting to lower cost-per-lead by 40%.',
    metric: '120+ High-Quality Leads',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop',
    color: 'from-purple-600 to-indigo-600',
    bg: 'bg-purple-50'
  },
  {
    id: 2,
    category: 'Web Design',
    title: 'E-commerce Platform',
    desc: 'Modern, high-converting storefront for local retail. Focused on speed, mobile UX, and seamless checkout flow.',
    metric: '200% Conversion Boost',
    icon: BarChart3,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    color: 'from-blue-600 to-cyan-500',
    bg: 'bg-blue-50'
  },
  {
    id: 3,
    category: 'Social Media',
    title: 'Brand Identity',
    desc: 'Organic growth and community building for startups. Created a consistent visual language that tripled follower engagement.',
    metric: '5X Engagement Rate',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=800&fit=crop',
    color: 'from-pink-500 to-orange-400',
    bg: 'bg-pink-50'
  }
]

export default function Portfolio() {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [current, setCurrent] = useState(0)

  const next = React.useCallback(() => setCurrent((p) => (p + 1) % projects.length), [])
  const prev = () => setCurrent((p) => (p - 1 + projects.length) % projects.length)

  React.useEffect(() => {
    const timer = setInterval(() => {
      next()
    }, 4000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section id="work" className="relative overflow-hidden py-16 sm:py-20" style={{ background: 'linear-gradient(135deg, #F8F9FF 0%, #F5F3FF 45%, #EEF4FF 100%)' }}>
      {/* Background Blurs */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-purple-100/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-100/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/80 shadow-sm mb-6"
          >

            <span className="text-indigo-600 text-xs font-black uppercase tracking-widest font-heading">Our Portfolio</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-[#0F172A] leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', letterSpacing: '-0.05em' }}
          >
            Designed To <span className="gradient-text-saas">Scale Businesses</span>
          </motion.h2>
        </div>

        {/* Sliding Portfolio Showcase */}
        <div className="relative group">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.7, ease: "circOut" }}
              className="relative bg-white/70 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden border border-white/80 shadow-xl shadow-slate-200/40 max-w-5xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Side */}
                <div className="relative h-[240px] sm:h-[300px] lg:h-[420px] overflow-hidden">
                  <motion.img 
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src={projects[current].image} 
                    alt={projects[current].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/10 to-transparent" />
                  
                  {/* Category Badge on Image */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
                      {projects[current].category}
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${projects[current].color} flex items-center justify-center text-white shadow-md`}>
                        {React.createElement(projects[current].icon, { size: 20 })}
                      </div>
                      <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Featured Work</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] mb-4 tracking-tight leading-tight">
                      {projects[current].title}
                    </h3>
                    
                    <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
                      {projects[current].desc}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mb-8">
                      <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-100">
                        <Zap size={18} className="text-indigo-500" />
                        <span className="font-heading font-black text-[#0F172A] text-base">{projects[current].metric}</span>
                      </div>
                    </div>

                    <button className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#0F172A] text-white font-bold rounded-full text-sm transition-all hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95">
                      Case Study
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-500 ${current === i ? 'w-12 bg-indigo-500' : 'w-2 bg-slate-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
