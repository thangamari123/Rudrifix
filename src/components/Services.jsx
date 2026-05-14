import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Megaphone, Palette, Video, ArrowRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'

/* ─── Decorative SVG Components ─── */
const DotGrid = ({ className = '', color = 'rgba(124,58,237,0.12)' }) => (
  <svg className={className} width="60" height="60" viewBox="0 0 60 60">
    {[...Array(5)].map((_, r) =>
      [...Array(5)].map((_, c) => (
        <circle key={`${r}-${c}`} cx={6 + c * 12} cy={6 + r * 12} r="1.5" fill={color} />
      ))
    )}
  </svg>
)

const WaveCurve = ({ color = '#7c3aed', opacity = 0.15 }) => (
  <svg viewBox="0 0 400 60" preserveAspectRatio="none" className="w-full h-full">
    <path d="M0,40 C100,60 200,10 400,35 L400,60 L0,60 Z" fill={color} opacity={opacity} />
  </svg>
)



export default function Services() {
  const [ref, isInView] = useInView({ threshold: 0.05 })

  return (
    <section id="services" className="relative overflow-hidden services-light-bg pt-8 pb-16 sm:pt-10 sm:pb-20">
      {/* Background decorative glows */}
      <div className="services-glow bg-purple-200" style={{ top: '-10%', left: '-8%' }} />
      <div className="services-glow bg-blue-200" style={{ bottom: '-10%', right: '-8%' }} />
      <div className="services-glow bg-indigo-100 w-[400px] h-[400px]" style={{ top: '40%', left: '50%', transform: 'translateX(-50%)' }} />

      {/* Dot grid background */}
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(124,58,237,0.03) 1px, transparent 0)', backgroundSize: '48px 48px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>

        {/* ═══ Section Header ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100/80 backdrop-blur-sm mb-6 shadow-sm">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-[0.15em] font-heading">What We Do</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-[#0f172a] leading-tight mb-5">
            Smart <span className="gradient-text-pb">Digital Solutions</span>
          </h2>

          <p className="text-slate-500 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            From high-converting websites to data-driven ad campaigns, we craft digital experiences that grow your business.
          </p>
        </motion.div>

        {/* ═══ Service Cards Grid ═══ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-20">

          {/* ─── Card 1: Website Development (Dark gradient) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="group relative rounded-[28px] p-7 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/15"
            style={{ background: 'linear-gradient(160deg, #1e1b4b 0%, #4c1d95 50%, #6d28d9 100%)' }}
          >
            {/* Dot decoration */}
            <div className="absolute top-4 right-4 opacity-30">
              <DotGrid color="rgba(255,255,255,0.25)" />
            </div>

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-white/15 transition-all duration-300">
              <Code2 size={26} className="text-purple-200" />
            </div>

            {/* Accent underline */}
            <div className="w-10 h-1 rounded-full bg-purple-400/60 mb-4" />

            <h3 className="font-heading font-bold text-xl text-white mb-2.5">Website Development</h3>
            <p className="text-purple-200/70 text-sm leading-relaxed mb-6">
              Fast, mobile-first, SEO-optimized websites that convert visitors into customers.
            </p>

            <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-1.5 text-purple-200 text-sm font-semibold group-hover:gap-2.5 transition-all duration-300">
              Learn More <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Bottom wave */}
            <div className="card-wave">
              <WaveCurve color="#7c3aed" opacity={0.2} />
            </div>
          </motion.div>

          {/* ─── Card 2: Meta Ads (White glass, green accent) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="group relative rounded-[28px] p-7 overflow-hidden bg-white/70 backdrop-blur-xl border border-white/80 shadow-lg shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-emerald-100 transition-all duration-300">
              <Megaphone size={26} className="text-emerald-600" />
            </div>

            {/* Accent underline */}
            <div className="w-10 h-1 rounded-full bg-emerald-400/50 mb-4" />

            <h3 className="font-heading font-bold text-xl text-[#0f172a] mb-2.5">Meta Ads</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              High-ROI Facebook & Instagram campaigns that turn scrollers into buyers.
            </p>

            <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-1.5 text-emerald-600 text-sm font-semibold group-hover:gap-2.5 transition-all duration-300">
              Learn More <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Bottom wave */}
            <div className="card-wave">
              <WaveCurve color="#22c55e" opacity={0.12} />
            </div>
          </motion.div>

          {/* ─── Card 3: Branding & Design (Cream, orange accent) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="group relative rounded-[28px] p-7 overflow-hidden bg-[#FFFBF5]/80 backdrop-blur-xl border border-orange-100/60 shadow-lg shadow-orange-100/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-400/10"
          >
            {/* Dot decoration */}
            <div className="absolute top-4 right-4 opacity-20">
              <DotGrid color="rgba(251,146,60,0.3)" />
            </div>

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-orange-100 transition-all duration-300">
              <Palette size={26} className="text-orange-500" />
            </div>

            {/* Accent underline */}
            <div className="w-10 h-1 rounded-full bg-orange-400/50 mb-4" />

            <h3 className="font-heading font-bold text-xl text-[#0f172a] mb-2.5">Branding & Design</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Visual identities and creative assets that make your brand unforgettable.
            </p>

            <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-1.5 text-orange-500 text-sm font-semibold group-hover:gap-2.5 transition-all duration-300">
              Learn More <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Bottom wave */}
            <div className="card-wave">
              <WaveCurve color="#fb923c" opacity={0.12} />
            </div>
          </motion.div>

          {/* ─── Card 4: Content Creation (Blue gradient) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.4 }}
            className="group relative rounded-[28px] p-7 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/15"
            style={{ background: 'linear-gradient(160deg, #1e3a5f 0%, #2563eb 50%, #3b82f6 100%)' }}
          >
            {/* Decorative circles */}
            <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute bottom-12 right-12 w-14 h-14 rounded-full bg-white/5 pointer-events-none" />

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-white/15 transition-all duration-300">
              <Video size={26} className="text-blue-200" />
            </div>

            {/* Accent underline */}
            <div className="w-10 h-1 rounded-full bg-blue-300/50 mb-4" />

            <h3 className="font-heading font-bold text-xl text-white mb-2.5">Content Creation</h3>
            <p className="text-blue-200/70 text-sm leading-relaxed mb-6">
              Professional photo shoots, reels, and video content that elevate your brand story.
            </p>

            <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-1.5 text-blue-200 text-sm font-semibold group-hover:gap-2.5 transition-all duration-300">
              Learn More <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Bottom wave */}
            <div className="card-wave">
              <WaveCurve color="#3b82f6" opacity={0.2} />
            </div>
          </motion.div>
        </div>


      </div>

      {/* Smooth blend to next light section */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#F8F9FF] to-transparent" />
    </section>
  )
}
