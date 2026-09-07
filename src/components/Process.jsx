import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, Lightbulb, Zap, TrendingUp, ArrowRight, 
  CheckCircle2, ChevronLeft, ChevronRight, Layers, GitCommit
} from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { Link } from 'react-router-dom'

const workflowSteps = [
  {
    step: '01',
    phase: 'Phase 01',
    duration: 'Week 1',
    title: 'Discovery & Analysis',
    tagline: 'Data-Backed Foundation',
    desc: 'Deep-dive audit into your current digital presence, competitor benchmarks, user behavior, and high-impact opportunities.',
    deliverables: ['Tech & SEO Audit', 'Competitor Benchmarks', 'Conversion Blueprint'],
    icon: Search,
    status: 'Audit & Roadmap'
  },
  {
    step: '02',
    phase: 'Phase 02',
    duration: 'Week 2',
    title: 'Strategic Architecture',
    tagline: 'Custom Execution Plan',
    desc: 'Bespoke strategy mapping target audiences, UI/UX wireframes, technical stack selection, and high-impact acquisition channels.',
    deliverables: ['UI/UX Wireframes', 'Stack Architecture', 'Go-To-Market Funnel'],
    icon: Lightbulb,
    status: 'Strategic Plan'
  },
  {
    step: '03',
    phase: 'Phase 03',
    duration: 'Weeks 3–4',
    title: 'Precision Execution',
    tagline: 'Production-Grade Build',
    desc: 'Agile sprints delivering pixel-perfect development, conversion automation, tracking tags, and targeted ad funnels.',
    deliverables: ['Production Build', 'Campaign Setup', 'QA & Speed Testing'],
    icon: Zap,
    status: 'Production Launch'
  },
  {
    step: '04',
    phase: 'Phase 04',
    duration: 'Ongoing',
    title: 'Optimization & Scale',
    tagline: 'Continuous Performance',
    desc: 'Continuous real-time telemetry, multivariate A/B testing, and ROI optimization to compound business revenue month over month.',
    deliverables: ['Bi-Weekly Reviews', 'A/B Testing Loops', 'Attribution Reports'],
    icon: TrendingUp,
    status: 'Continuous ROI'
  }
]

export default function Process() {
  const [ref, isInView] = useInView({ threshold: 0.08 })
  const [activeSlide, setActiveSlide] = useState(0)
  const [mobileView, setMobileView] = useState('carousel') // 'carousel' | 'timeline'
  const sliderRef = useRef(null)

  const handleMobileScroll = (e) => {
    const { scrollLeft, clientWidth } = e.target
    if (clientWidth > 0) {
      const cardWidth = clientWidth * 0.84 + 14
      const newIndex = Math.round(scrollLeft / cardWidth)
      setActiveSlide(Math.max(0, Math.min(newIndex, workflowSteps.length - 1)))
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
    <section id="process" className="relative overflow-hidden bg-[#F8FAFC] py-14 sm:py-20 md:py-24 border-t border-slate-100">
      {/* Subtle Corporate Lighting & Background Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.15) 1px, transparent 0)', 
          backgroundSize: '40px 40px' 
        }} 
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[140px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-[130px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>

        {/* ═══ Section Header ═══ */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs mb-3.5"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold text-blue-800 tracking-wider uppercase font-heading">Our Delivery Methodology</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight"
          >
            How We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">Success</span>
          </motion.h2>
        </div>

        {/* ═══ Mobile View Switcher (Visible only on Mobile) ═══ */}
        <div className="flex md:hidden items-center justify-between px-1 mb-3.5">
          <span className="text-xs font-bold text-slate-500 tracking-wide uppercase flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            Workflow Phases (4)
          </span>
          <div className="inline-flex p-0.5 rounded-lg bg-white border border-slate-200 shadow-xs">
            <button
              onClick={() => setMobileView('carousel')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1 transition-all ${
                mobileView === 'carousel' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers size={13} />
              <span>Step Deck</span>
            </button>
            <button
              onClick={() => setMobileView('timeline')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1 transition-all ${
                mobileView === 'timeline' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <GitCommit size={13} />
              <span>Timeline</span>
            </button>
          </div>
        </div>

        {/* ═══ MOBILE PRESENTATION (md:hidden) ═══ */}
        <div className="block md:hidden mb-4">
          <AnimatePresence mode="wait">
            {mobileView === 'carousel' ? (
              /* Mobile Style 1: Corporate Step Deck Carousel */
              <motion.div
                key="carousel-process"
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
                  {workflowSteps.map((step, idx) => {
                    const Icon = step.icon
                    return (
                      <div
                        key={step.step}
                        className="w-[84vw] max-w-[320px] snap-center shrink-0 bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between relative overflow-hidden"
                      >
                        {/* Top Accent Line */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600" />

                        <div>
                          {/* Top Meta Bar */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-11 h-11 rounded-xl bg-blue-50/80 border border-blue-100 text-blue-600 flex items-center justify-center shadow-xs">
                              <Icon size={20} strokeWidth={2} />
                            </div>
                            <div className="flex flex-col items-end">
                              <span className="text-[11px] font-mono font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">
                                STEP {step.step}
                              </span>
                              <span className="text-[10px] text-slate-400 font-semibold mt-1">
                                {step.duration}
                              </span>
                            </div>
                          </div>

                          {/* Tagline */}
                          <span className="inline-block text-[10px] font-bold text-blue-700 bg-blue-50/80 border border-blue-100/80 px-2 py-0.5 rounded mb-2 uppercase tracking-wide">
                            {step.tagline}
                          </span>

                          {/* Title */}
                          <h3 className="text-base font-bold text-slate-900 leading-snug mb-2">
                            {step.title}
                          </h3>

                          {/* Description */}
                          <p className="text-xs text-slate-600 leading-relaxed mb-4">
                            {step.desc}
                          </p>

                          {/* Deliverables Checklist */}
                          <div className="pt-3 border-t border-slate-100 space-y-1.5 mb-2">
                            {step.deliverables.map((d) => (
                              <div key={d} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                                <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                                <span>{d}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Card Footer */}
                        <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                          <span className="text-[10px] uppercase font-bold text-slate-400">
                            {step.status}
                          </span>
                          <span className="font-bold text-blue-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/80">
                            {step.phase}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Mobile Slider Controls */}
                <div className="flex items-center justify-between pt-3 px-2">
                  <div className="flex items-center gap-1.5">
                    {workflowSteps.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => scrollToSlide(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          activeSlide === i ? 'w-5 bg-blue-600' : 'w-1.5 bg-slate-300'
                        }`}
                        aria-label={`Step slide ${i + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
                      disabled={activeSlide === 0}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed shadow-xs active:scale-95"
                      aria-label="Previous step"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() => scrollToSlide(Math.min(workflowSteps.length - 1, activeSlide + 1))}
                      disabled={activeSlide === workflowSteps.length - 1}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed shadow-xs active:scale-95"
                      aria-label="Next step"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Mobile Style 2: Connected Executive Timeline */
              <motion.div
                key="timeline-process"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative pl-6 space-y-4"
              >
                {/* Vertical Timeline Spine Line */}
                <div className="absolute left-2.5 top-3 bottom-3 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-500 to-violet-500" />

                {workflowSteps.map((step, idx) => {
                  const Icon = step.icon
                  return (
                    <div key={step.step} className="relative bg-white rounded-xl p-4 border border-slate-200/90 shadow-xs">
                      {/* Timeline Node Pin */}
                      <div className="absolute -left-[27px] top-4 w-5 h-5 rounded-full bg-blue-600 border-2 border-white shadow-xs flex items-center justify-center text-white text-[9px] font-bold">
                        {step.step}
                      </div>

                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shrink-0">
                            <Icon size={14} strokeWidth={2} />
                          </div>
                          <div>
                            <h3 className="font-bold text-xs text-slate-900 leading-tight">
                              {step.title}
                            </h3>
                            <span className="text-[10px] text-blue-600 font-semibold">{step.tagline}</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-semibold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200 shrink-0">
                          {step.duration}
                        </span>
                      </div>

                      <p className="text-[11px] text-slate-600 leading-relaxed mb-2.5">
                        {step.desc}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                        {step.deliverables.map((d) => (
                          <span key={d} className="inline-flex items-center gap-1 text-[10px] bg-slate-50 text-slate-700 px-2 py-0.5 rounded border border-slate-200/80">
                            <CheckCircle2 size={10} className="text-emerald-500" />
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ═══ DESKTOP PRESENTATION (hidden md:block) ═══ */}
        <div className="hidden md:block">
          {/* Connector Rail Header */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            {workflowSteps.map((step, idx) => (
              <div key={`rail-${step.step}`} className="flex items-center">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-600">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] shadow-xs">
                    {step.step}
                  </span>
                  <span className="text-slate-500">{step.phase}</span>
                </div>
                {idx < workflowSteps.length - 1 && (
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-200 to-slate-200 mx-3 relative">
                    <ArrowRight size={12} className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 4-Step Connected Corporate Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="group relative bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-blue-500/40 shadow-xs hover:shadow-xl hover:shadow-blue-500/8 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 overflow-hidden"
                >
                  {/* Top Corporate Line Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/80 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shadow-xs">
                        <Icon size={20} strokeWidth={2} />
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-xs font-mono font-bold text-blue-600">STEP {step.step}</span>
                        <span className="text-[10px] text-slate-400 font-semibold mt-0.5">{step.duration}</span>
                      </div>
                    </div>

                    {/* Tagline */}
                    <span className="inline-block text-[10px] font-bold text-blue-700 bg-blue-50/80 border border-blue-100/80 px-2 py-0.5 rounded mb-2.5 uppercase tracking-wide">
                      {step.tagline}
                    </span>

                    {/* Title */}
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {step.desc}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="pt-3 border-t border-slate-100 space-y-1.5 mb-2">
                      {step.deliverables.map((d) => (
                        <div key={d} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                          <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Status Tag */}
                  <div className="pt-3.5 mt-auto border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-[10px] uppercase font-bold text-slate-400">
                      {step.status}
                    </span>
                    <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {step.phase}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* ═══ Bottom Corporate Delivery Guarantee ═══ */}
        <div className="mt-10 sm:mt-14 pt-8 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-900">Sprint-Based Delivery</span> — Weekly milestones, live progress tracking, and transparent reviews.
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 group"
          >
            <span>Schedule Discovery Consultation</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  )
}
