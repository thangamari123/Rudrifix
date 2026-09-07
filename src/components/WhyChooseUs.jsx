import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Target, ShieldCheck, TrendingUp, Zap, Headphones, Wallet,
  CheckCircle2, ArrowRight, ChevronLeft, ChevronRight, Layers, Grid
} from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { Link } from 'react-router-dom'

const advantageCards = [
  {
    icon: Target,
    title: 'Strategic Precision',
    metric: 'Data-Backed',
    desc: 'Every engagement begins with deep market intelligence, competitor benchmarking, and a tailored conversion roadmap.',
    features: ['Market Intelligence', 'Funnel Architecture', 'Audience Modeling'],
    tag: 'Roadmap'
  },
  {
    icon: TrendingUp,
    title: 'Results & ROI Driven',
    metric: 'High Impact',
    desc: 'Obsessed with measurable business outcomes — pipeline growth, qualified leads, and maximized return on ad spend.',
    features: ['Revenue Attribution', 'CAC Optimization', 'Conversion Testing'],
    tag: 'Performance'
  },
  {
    icon: Zap,
    title: 'Enterprise Scalability',
    metric: 'Production Grade',
    desc: 'Engineered with modern cloud frameworks, clean maintainable codebases, and bank-grade security standards.',
    features: ['Modern Cloud Stacks', '99.9% Uptime SLA', 'Enterprise Security'],
    tag: 'Engineering'
  },
  {
    icon: ShieldCheck,
    title: 'Transparent Governance',
    metric: 'Total Clarity',
    desc: 'Direct visibility into campaign metrics and sprint deliverables. Zero vanity numbers, only honest data.',
    features: ['Live Client Dashboard', 'Weekly Sprint Reviews', 'Audit-Ready Reports'],
    tag: 'Governance'
  },
  {
    icon: Headphones,
    title: 'Dedicated Leadership',
    metric: 'Senior Access',
    desc: 'Direct access to senior strategists and tech leads who understand your market. Never outsourced or handed off.',
    features: ['Dedicated Account Lead', 'Rapid Turnaround', 'Strategic Guidance'],
    tag: 'Partnership'
  },
  {
    icon: Wallet,
    title: 'Predictable Investment',
    metric: 'Zero Surprises',
    desc: 'Defined milestone deliverables and transparent budgets. Premium agency results without enterprise overhead.',
    features: ['Milestone Pricing', 'Cost Predictability', 'No Hidden Fees'],
    tag: 'Efficiency'
  }
]

export default function WhyChooseUs() {
  const [ref, isInView] = useInView({ threshold: 0.08 })
  const [activeSlide, setActiveSlide] = useState(0)
  const [mobileView, setMobileView] = useState('carousel') // 'carousel' | 'grid'
  const sliderRef = useRef(null)

  const handleMobileScroll = (e) => {
    const { scrollLeft, clientWidth } = e.target
    if (clientWidth > 0) {
      const cardWidth = clientWidth * 0.84 + 14
      const newIndex = Math.round(scrollLeft / cardWidth)
      setActiveSlide(Math.max(0, Math.min(newIndex, advantageCards.length - 1)))
    }
  }

  const scrollToSlide = (index) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.clientWidth * 0.84 + 14
      sliderRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' })
      setActiveSlide(index)
    }
  }

  return (
    <section id="whychoose" className="relative overflow-hidden bg-white py-14 sm:py-20 md:py-24 border-t border-slate-100">
      {/* Subtle Corporate Lighting & Background Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.15) 1px, transparent 0)', 
          backgroundSize: '40px 40px' 
        }} 
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-blue-50/60 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>

        {/* ═══ Section Header ═══ */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-xs mb-3.5"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold text-blue-800 tracking-wider uppercase">The Rudrifix Advantage</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight"
          >
            Why Smart Brands Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">Rudrifix</span>
          </motion.h2>
        </div>

        {/* ═══ Mobile View Switcher (Visible only on Mobile) ═══ */}
        <div className="flex md:hidden items-center justify-between px-1 mb-3.5">
          <span className="text-xs font-bold text-slate-500 tracking-wide uppercase flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            Value Pillars ({advantageCards.length})
          </span>
          <div className="inline-flex p-0.5 rounded-lg bg-slate-100 border border-slate-200 shadow-xs">
            <button
              onClick={() => setMobileView('carousel')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1 transition-all ${
                mobileView === 'carousel' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers size={13} />
              <span>Card Deck</span>
            </button>
            <button
              onClick={() => setMobileView('grid')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1 transition-all ${
                mobileView === 'grid' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Grid size={13} />
              <span>Grid</span>
            </button>
          </div>
        </div>

        {/* ═══ MOBILE PRESENTATION (md:hidden) ═══ */}
        <div className="block md:hidden mb-4">
          <AnimatePresence mode="wait">
            {mobileView === 'carousel' ? (
              /* Mobile Style 1: Corporate Card Deck Carousel */
              <motion.div
                key="carousel-advantages"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                {/* Horizontal Snap Rail */}
                <div
                  ref={sliderRef}
                  onScroll={handleMobileScroll}
                  className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory pt-1 pb-3 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                  {advantageCards.map((card, idx) => {
                    const Icon = card.icon
                    return (
                      <div
                        key={card.title}
                        className="w-[84vw] max-w-[320px] snap-center shrink-0 bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between relative overflow-hidden"
                      >
                        {/* Top Accent Line */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600" />

                        <div>
                          {/* Top Meta Bar */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center shadow-xs">
                              <Icon size={20} strokeWidth={2} />
                            </div>
                            <span className="text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full">
                              {card.metric}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-base font-bold text-slate-900 leading-snug mb-2">
                            {card.title}
                          </h3>

                          {/* Description */}
                          <p className="text-xs text-slate-600 leading-relaxed mb-4">
                            {card.desc}
                          </p>

                          {/* Feature Highlights */}
                          <ul className="space-y-1.5 pt-3 border-t border-slate-200/80 mb-2">
                            {card.features.map((feat) => (
                              <li key={feat} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                                <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Card Footer */}
                        <div className="pt-3 mt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px]">
                          <span className="font-mono text-slate-400 font-bold">
                            ADVANTAGE #{String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="font-bold text-blue-600 bg-white px-2 py-0.5 rounded border border-slate-200/80">
                            {card.tag}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Mobile Slider Controls */}
                <div className="flex items-center justify-between pt-3 px-2">
                  <div className="flex items-center gap-1.5">
                    {advantageCards.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => scrollToSlide(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          activeSlide === i ? 'w-5 bg-blue-600' : 'w-1.5 bg-slate-300'
                        }`}
                        aria-label={`Advantage slide ${i + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
                      disabled={activeSlide === 0}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed shadow-xs active:scale-95"
                      aria-label="Previous advantage"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() => scrollToSlide(Math.min(advantageCards.length - 1, activeSlide + 1))}
                      disabled={activeSlide === advantageCards.length - 1}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed shadow-xs active:scale-95"
                      aria-label="Next advantage"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Mobile Style 2: Compact Corporate 2-Column Grid */
              <motion.div
                key="grid-advantages"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-2 gap-2.5 px-0.5"
              >
                {advantageCards.map((card, idx) => {
                  const Icon = card.icon
                  return (
                    <div
                      key={card.title}
                      className="bg-[#F8FAFC] rounded-xl p-3.5 border border-slate-200/90 shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-8 h-8 rounded-lg bg-white text-blue-600 flex items-center justify-center border border-slate-200 shadow-2xs">
                            <Icon size={16} strokeWidth={2} />
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 font-bold">
                            #{String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>

                        <h3 className="font-bold text-xs text-slate-900 leading-tight mb-1">
                          {card.title}
                        </h3>

                        <p className="text-[11px] text-slate-500 leading-snug line-clamp-2 mb-2">
                          {card.desc}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between">
                        <span className="text-[9px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
                          {card.metric}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ═══ DESKTOP PRESENTATION (hidden md:grid) ═══ */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {advantageCards.map((card, idx) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative bg-[#F8FAFC] hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 hover:border-blue-500/40 shadow-xs hover:shadow-xl hover:shadow-blue-500/8 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 overflow-hidden"
              >
                {/* Top Corporate Line Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Meta Bar: Icon + Metric Pill */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/90 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shadow-xs">
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-slate-200/80 text-slate-700 text-xs font-bold shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span>{card.metric}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5 leading-snug">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {card.desc}
                  </p>

                  {/* Corporate Checklist Highlights */}
                  <ul className="space-y-2 mb-2 pt-3 border-t border-slate-200/60">
                    {card.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Pillar Tag */}
                <div className="pt-4 mt-auto border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400 font-bold tracking-wider">
                    PILLAR {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    {card.tag}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ═══ Bottom Corporate CTA Strip ═══ */}
        <div className="mt-10 sm:mt-14 pt-8 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Ready to accelerate your brand with an engineering-first partner?</span>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 group"
          >
            <span>Speak With a Senior Strategist</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  )
}
