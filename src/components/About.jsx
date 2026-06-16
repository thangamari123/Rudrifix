import React from 'react'
import { motion } from 'framer-motion'
import { Users, Megaphone, Clock, TrendingUp, Target, ShieldCheck, Zap, ArrowRight, BarChart3, Globe2, Sparkles, CheckCircle2 } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const stats = [
  { icon: Globe2, value: '150+', label: 'Market Jurisdictions', color: 'text-blue-500' },
  { icon: BarChart3, value: '₹10Cr+', label: 'Ad Capital Managed', color: 'text-blue-500' },
  { icon: Clock, value: '5+', label: 'Years of Scaling', color: 'text-violet-500' },
  { icon: TrendingUp, value: '8.4x', label: 'Average ROAS', color: 'text-emerald-500' },
]

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const valueProps = [
    {
      title: '360° Growth Infrastructure',
      desc: 'We build the entire ecosystem—from high-speed web apps to cinematic content and Meta ad scaling.',
      icon: Sparkles
    },
    {
      title: 'Data-Driven Execution',
      desc: 'Our decisions are powered by deep-funnel analytics and real-time performance tracking.',
      icon: BarChart3
    }
  ]

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* SaaS Background Style */}
      <div className="absolute inset-0 z-0" style={{
        background: `
          radial-gradient(circle at top left, rgba(59,130,246,0.08), transparent 30%),
          radial-gradient(circle at right, rgba(96,165,250,0.08), transparent 30%),
          #F0F9FF
        `
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left - Narrative */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm"
              >
                <div className="w-2 h-2 rounded-full bg-brand-violet animate-pulse" />
                <span className="text-black text-[10px] font-black uppercase tracking-widest text-black/60">Technical Growth Agency</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                className="text-5xl sm:text-7xl font-black text-black leading-[1.05] tracking-tighter"
              >
                Comprehensive <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet via-brand-blue to-blue-500">Solutions Built</span> <br />
                To Scale.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                className="text-black/70 text-lg font-medium leading-relaxed max-w-xl"
              >
                Rudrifix is a performance-first agency engineered to master Meta Ads, Premium Branding, and Modern Web Infrastructure. We don't just run ads; we engineer growth.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 gap-5">
              {valueProps.map((prop, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="p-6 rounded-3xl bg-white/40 backdrop-blur-md border border-white shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-brand-violet/5 flex items-center justify-center text-brand-violet shrink-0 group-hover:scale-110 transition-transform">
                      <prop.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-1">{prop.title}</h4>
                      <p className="text-black/60 text-sm leading-relaxed">{prop.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-3">
              {['Full-Service Meta Ads Scaling', 'Cinematic Content Production', 'High-Performance Web Apps'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  <span className="text-black font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="pt-4"
            >
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-2xl font-bold text-sm hover:bg-gray-900 transition-all hover:translate-y-[-2px] shadow-xl shadow-black/10"
              >
                Start Your Scaling Phase
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right - Stats Bento */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-6 lg:pt-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="p-8 rounded-[40px] bg-white border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.02)] relative group overflow-hidden hover:translate-y-[-5px] transition-all duration-500"
              >
                <stat.icon size={80} className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:scale-110 transition-transform duration-700" />

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center ${stat.color} mb-6 group-hover:rotate-6 transition-transform`}>
                    <stat.icon size={24} />
                  </div>
                  <div className="text-4xl font-black text-black mb-1 tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-black/40 text-[9px] font-black uppercase tracking-[0.2em]">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Bottom Accent Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="col-span-2 p-8 rounded-[40px] bg-gradient-to-br from-brand-violet to-brand-blue relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Our Core Mission</h3>
                  <p className="text-white/80 font-medium text-sm max-w-sm">
                    To bridge the gap between abstract creativity and high-precision technical execution for explosive brand growth.
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <Zap size={28} className="text-white fill-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
