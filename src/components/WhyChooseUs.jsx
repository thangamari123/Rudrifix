import React from 'react'
import { motion } from 'framer-motion'
import { Target, Wallet, TrendingUp, Headphones, SlidersHorizontal, ShieldCheck, Zap } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const cards = [
  {
    icon: Target,
    title: 'Strategy First',
    desc: "We research, analyze, and plan before we execute. Every campaign starts with a data-backed roadmap.",
    color: 'from-blue-500 to-indigo-600',
    shadow: 'shadow-blue-500/10',
    colSpan: 'lg:col-span-1'
  },
  {
    icon: Wallet,
    title: 'Budget-Friendly',
    desc: 'Affordable solutions designed for growing businesses. Premium quality that respects your ROI.',
    color: 'from-emerald-500 to-teal-600',
    shadow: 'shadow-emerald-500/10',
    colSpan: 'lg:col-span-1'
  },
  {
    icon: TrendingUp,
    title: 'Results Driven',
    desc: 'Focused on driving real leads, conversions, and measurable growth for your business.',
    color: 'from-orange-500 to-rose-600',
    shadow: 'shadow-orange-500/10',
    colSpan: 'lg:col-span-1'
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    desc: 'Direct communication with real humans who care about your success. No bots, just 24/7 strategic support.',
    color: 'from-purple-500 to-indigo-600',
    shadow: 'shadow-purple-500/10',
    colSpan: 'lg:col-span-2'
  },
  {
    icon: ShieldCheck,
    title: 'Transparent Process',
    desc: 'Full visibility into your campaigns. We believe in total honesty and clear reporting.',
    color: 'from-indigo-500 to-blue-600',
    shadow: 'shadow-indigo-500/10',
    colSpan: 'lg:col-span-1'
  }
]

export default function WhyChooseUs() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="whychoose" className="relative overflow-hidden py-16 sm:py-20" style={{ background: 'linear-gradient(135deg, #F8F9FF 0%, #F4F2FF 50%, #EEF4FF 100%)' }}>
      {/* Background Glows */}
      <div className="absolute top-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-purple-200/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[400px] h-[400px] rounded-full bg-blue-200/20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-6"
          >

            <span className="text-indigo-600 text-xs font-black uppercase tracking-widest">The Rudrifix Advantage</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-black text-[#0F172A] leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', letterSpacing: '-0.04em' }}
          >
            Why Smart Brands Choose <span className="gradient-text-saas">Rudrifix</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 text-lg sm:text-xl max-w-2xl mx-auto"
          >
            We combine data-driven precision with creative excellence to deliver results that don't just look good, but scale your business.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${card.colSpan} group relative overflow-hidden rounded-[2.5rem] p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1`}
              style={{ 
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.02)'
              }}
            >
              {/* Hover Glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${card.color}`} />
              
              {/* Icon Container */}
              <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${card.color} text-white shadow-lg ${card.shadow} mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <card.icon size={26} />
                <div className="absolute -inset-1 bg-white/20 blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] mb-4 tracking-tight group-hover:text-indigo-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
                  {card.desc}
                </p>
              </div>

              {/* Subtle Shimmer Border */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/50 rounded-[2.5rem] transition-colors duration-500 pointer-events-none" />
              
              {/* Corner Accent */}
              <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${card.color} opacity-5 blur-2xl group-hover:opacity-20 transition-opacity duration-700`} />
            </motion.div>
          ))}

          {/* Specialized CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:col-span-3 group relative overflow-hidden rounded-[2.5rem] p-8 sm:p-12 text-center flex flex-col items-center justify-center bg-[#0F172A]"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/20 via-transparent to-purple-500/20" />
            
            <Zap className="text-indigo-400 mb-6 relative z-10" size={40} />
            <h3 className="text-2xl sm:text-4xl font-black text-white mb-6 relative z-10 tracking-tight">
              Ready to see the <span className="text-indigo-400">Rudrifix difference?</span>
            </h3>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 relative z-10 shadow-xl shadow-indigo-500/20"
            >
              Get Started Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
