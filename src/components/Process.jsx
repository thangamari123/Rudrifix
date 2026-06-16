import React from 'react'
import { motion } from 'framer-motion'
import { Search, Lightbulb, Zap, TrendingUp, ArrowRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const steps = [
  {
    id: '01',
    title: 'Discovery',
    desc: 'We dive deep into your business, market trends, and competitor landscape to find hidden growth opportunities.',
    icon: Search,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    borderColor: 'border-blue-100',
    glow: 'shadow-blue-500/10'
  },
  {
    id: '02',
    title: 'Strategy',
    desc: 'Our experts craft a bespoke roadmap tailored to your specific brand goals and target audience.',
    icon: Lightbulb,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    borderColor: 'border-blue-100',
    glow: 'shadow-blue-500/10'
  },
  {
    id: '03',
    title: 'Execution',
    desc: 'From high-converting ads to stunning web design, we launch everything with surgical precision.',
    icon: Zap,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    borderColor: 'border-rose-100',
    glow: 'shadow-rose-500/10'
  },
  {
    id: '04',
    title: 'Scaling',
    desc: 'We continuously optimize and scale what works, ensuring consistent and long-term business growth.',
    icon: TrendingUp,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
    glow: 'shadow-emerald-500/10'
  }
]

export default function Process() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="process" className="relative overflow-hidden py-16 sm:py-20" style={{ background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 45%, #DBEAFE 100%)' }}>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-100/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/80 shadow-sm mb-6"
          >

            <span className="text-blue-600 text-xs font-black uppercase tracking-widest font-heading">Our Workflow</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-black text-[#0F172A] leading-[1.05] mb-8"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', letterSpacing: '-0.05em' }}
          >
            How We Build <span className="gradient-text-saas">Success</span>
          </motion.h2>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-100 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative h-full"
              >
                {/* Node Container */}
                <div className="h-full bg-white/80 backdrop-blur-xl border border-white/60 rounded-[2.5rem] p-8 sm:p-10 shadow-xl shadow-gray-200/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col">
                  {/* Step ID */}
                  <div className={`absolute -top-4 left-10 px-4 py-1.5 rounded-full ${step.bg} ${step.borderColor} border shadow-sm`}>
                    <span className={`text-xs font-black font-heading ${step.color}`}>STEP {step.id}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${step.bg} flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <step.icon size={28} className={step.color} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed flex-grow">
                    {step.desc}
                  </p>

                  {/* Arrow for Desktop */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                      <div className="w-8 h-8 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-300">
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Pulsing Glow behind card */}
                <div className={`absolute -inset-2 rounded-[2.5rem] bg-gradient-to-br ${step.bg} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Specialized Mobile Connector */}
        <div className="lg:hidden flex flex-col items-center mt-8 space-y-4">
          <div className="w-px h-12 bg-gradient-to-b from-blue-200 to-transparent" />
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-blue-400"
          >
            <Zap size={20} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
