import React, { useState, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  DollarSign, Building2, Layers, PieChart,
  Check, ChevronRight, ChevronLeft,
  Megaphone, Search, Share2, FileText,
  Plus, Minus, ArrowRight
} from 'lucide-react'
import { useInView } from '../hooks/useInView'

/* ─── Step definitions ─── */
const steps = [
  { id: 1, label: 'Budget', icon: DollarSign },
  { id: 2, label: 'Business Type', icon: Building2 },
  { id: 3, label: 'Services', icon: Layers },
  { id: 4, label: 'Your Plan', icon: PieChart },
]

/* ─── Business types ─── */
const businessTypes = ['Retail Shop', 'Restaurant', 'E-commerce', 'Service Business', 'Startup']

/* ─── Services ─── */
const servicesList = [
  { id: 'meta', name: 'Meta Ads', desc: 'Facebook & Instagram ads', min: 2000, icon: Megaphone, color: '#8B5CF6', gradient: 'from-purple-600 to-indigo-600' },
  { id: 'seo', name: 'SEO', desc: 'Rank higher on Google', min: 2000, icon: Search, color: '#3B82F6', gradient: 'from-blue-600 to-cyan-500' },
  { id: 'social', name: 'Social Media', desc: 'Posts & growth stories', min: 2000, icon: Share2, color: '#22C55E', gradient: 'from-emerald-500 to-teal-500' },
  { id: 'content', name: 'Content', desc: 'Blogs & brand writing', min: 1500, icon: FileText, color: '#FB923C', gradient: 'from-amber-500 to-orange-500' },
]

const barColors = ['#8B5CF6', '#3B82F6', '#22C55E', '#FB923C']

export default function BudgetPlanner() {
  const [ref, isInView] = useInView({ threshold: 0.05 })
  const [step, setStep] = useState(1)
  const [budget, setBudget] = useState(40000)
  const [bizType, setBizType] = useState('')
  const [selectedServices, setSelectedServices] = useState([])
  const [allocations, setAllocations] = useState({})

  /* helpers */
  const fmt = (n) => '₹' + n.toLocaleString('en-IN')

  const toggleService = useCallback((id) => {
    setSelectedServices(prev => {
      const next = prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
      /* initialize allocations for new services */
      setAllocations(alloc => {
        const updated = { ...alloc }
        next.forEach(sid => { if (!(sid in updated)) updated[sid] = servicesList.find(s => s.id === sid)?.min || 2000 })
        Object.keys(updated).forEach(k => { if (!next.includes(k)) delete updated[k] })
        return updated
      })
      return next
    })
  }, [])

  const adjustAlloc = useCallback((id, delta) => {
    setAllocations(prev => {
      const svc = servicesList.find(s => s.id === id)
      const newVal = Math.max(svc?.min || 1000, (prev[id] || 0) + delta)
      const otherTotal = Object.entries(prev).filter(([k]) => k !== id).reduce((s, [, v]) => s + v, 0)
      if (newVal + otherTotal > budget) return prev
      return { ...prev, [id]: newVal }
    })
  }, [budget])

  const allocated = useMemo(() => Object.values(allocations).reduce((s, v) => s + v, 0), [allocations])
  const remaining = budget - allocated

  const canNext = () => {
    if (step === 1) return budget >= 5000
    if (step === 2) return bizType !== ''
    if (step === 3) return selectedServices.length > 0
    return true
  }

  /* ─── Slide variants ─── */
  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  }
  const [direction, setDirection] = useState(1)

  const goNext = () => { if (canNext() && step < 4) { setDirection(1); setStep(s => s + 1) } }
  const goBack = () => { if (step > 1) { setDirection(-1); setStep(s => s - 1) } }

  return (
    <section id="planner" className="relative overflow-hidden py-16 sm:py-20" style={{ background: 'linear-gradient(135deg, #FAFBFF 0%, #F5F3FF 45%, #EEF4FF 100%)' }}>
      {/* Background */}
      <div className="absolute top-[-6%] right-[-6%] w-[500px] h-[500px] rounded-full bg-purple-200/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-6%] left-[-6%] w-[400px] h-[400px] rounded-full bg-blue-200/15 blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(139,92,246,0.02) 1px, transparent 0)', backgroundSize: '44px 44px' }} />

      {/* Abstract curves */}
      <svg className="absolute top-12 left-0 w-[250px] h-[250px] pointer-events-none opacity-[0.03]" viewBox="0 0 250 250">
        <path d="M0,125 Q62,30 125,125 T250,125" fill="none" stroke="#8B5CF6" strokeWidth="2" />
        <path d="M0,155 Q62,60 125,155 T250,155" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
      </svg>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>

        {/* ═══ Header ═══ */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 shadow-sm" style={{ background: 'rgba(139,92,246,0.12)', backdropFilter: 'blur(12px)' }}>
            <span className="text-[#7C3AED] text-xs font-bold uppercase tracking-[0.08em] font-heading">Marketing Tools</span>
          </div>
          <h2 className="font-heading font-extrabold text-[#0F172A] leading-[1.08] mb-5" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', letterSpacing: '-0.04em' }}>
            How Should You Spend Your{' '}
            <span className="gradient-text-pb">Marketing Budget?</span>
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Set your monthly budget, pick your business type, and choose the services you need — we'll build your plan instantly.
          </p>
        </motion.div>

        {/* ═══ Step Navigation ═══ */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="flex items-center justify-center gap-2 sm:gap-0 mb-10">
          {steps.map((s, i) => (
            <React.Fragment key={s.id}>
              <button
                onClick={() => { if (s.id <= step || canNext()) { setDirection(s.id > step ? 1 : -1); setStep(s.id) } }}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 ${s.id === step
                  ? 'text-white shadow-lg shadow-indigo-300/30 scale-[1.02]'
                  : s.id < step
                    ? 'text-[#8B5CF6] bg-purple-50'
                    : 'text-[#94A3B8] bg-white/50'
                  }`}
                style={s.id === step ? { background: 'linear-gradient(135deg, #8B5CF6, #6366F1)' } : {}}
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${s.id === step ? 'bg-white/20' : s.id < step ? 'bg-purple-100' : 'bg-slate-100'}`}>
                  {s.id < step ? <Check size={14} className="text-[#8B5CF6]" /> : <s.icon size={14} />}
                </div>
                <span className="hidden sm:inline">{s.label}</span>
              </button>
              {i < steps.length - 1 && (
                <div className="w-6 sm:w-10 h-[2px] mx-1 rounded-full" style={{ background: i < step - 1 ? 'linear-gradient(90deg, #8B5CF6, #6366F1)' : 'rgba(99,102,241,0.12)' }} />
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* ═══ Main Glass Card ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 mb-8 bg-white/80 backdrop-blur-2xl border border-white/50 shadow-2xl shadow-indigo-500/5"
        >
          <AnimatePresence mode="wait" custom={direction}>
            {/* ─── STEP 1: Budget ─── */}
            {step === 1 && (
              <motion.div key="s1" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }}>
                <p className="text-[#8B5CF6] text-xs font-bold uppercase tracking-widest mb-6 font-heading">Step 1 — Monthly Budget</p>
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-1 w-full">
                    {/* Budget display */}
                    <div className="text-center lg:text-left mb-6">
                      <motion.p
                        key={budget}
                        initial={{ scale: 0.95, opacity: 0.6 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="font-heading font-extrabold text-[#0F172A] tabular-nums"
                        style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '-0.03em' }}
                      >
                        {fmt(budget)}
                      </motion.p>
                      <div className="flex items-center gap-2 mt-2 justify-center lg:justify-start">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                          <Check size={12} className="text-emerald-600" />
                        </div>
                        <span className="text-emerald-600 text-sm font-medium">Great — your budget is set</span>
                      </div>
                    </div>

                    {/* Slider */}
                    <div className="relative mb-4">
                      <input
                        type="range"
                        min={5000}
                        max={200000}
                        step={1000}
                        value={budget}
                        onChange={(e) => setBudget(Number(e.target.value))}
                        className="w-full h-3 rounded-full appearance-none cursor-pointer slider-purple"
                        style={{ background: `linear-gradient(to right, #8B5CF6 0%, #6366F1 ${((budget - 5000) / 195000) * 100}%, rgba(99,102,241,0.12) ${((budget - 5000) / 195000) * 100}%, rgba(99,102,241,0.12) 100%)` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-[#94A3B8] font-medium">
                      <span>₹5,000</span>
                      <span>₹2,00,000</span>
                    </div>
                  </div>

                  {/* Budget illustration */}
                  <div className="w-48 h-48 rounded-3xl flex items-center justify-center relative flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(99,102,241,0.04))' }}>
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #8B5CF6, #6366F1)', boxShadow: '0 12px 30px rgba(139,92,246,0.3)' }}>
                      <DollarSign size={36} className="text-white" />
                    </div>
                    <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shadow-md">
                      <span className="text-amber-600 text-xs font-bold">₹</span>
                    </motion.div>
                    <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-6 left-4 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shadow">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ─── STEP 2: Business Type ─── */}
            {step === 2 && (
              <motion.div key="s2" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }}>
                <p className="text-[#8B5CF6] text-xs font-bold uppercase tracking-widest mb-6 font-heading">Step 2 — Business Type</p>
                <p className="text-[#0F172A] font-heading font-bold text-xl mb-6">What type of business are you?</p>
                <div className="flex flex-wrap gap-3">
                  {businessTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setBizType(type)}
                      className={`px-6 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${bizType === type
                        ? 'text-white shadow-lg shadow-blue-400/25 scale-[1.02]'
                        : 'bg-white text-[#64748B] border border-indigo-100/50 hover:border-indigo-200 hover:text-indigo-600 hover:shadow-md'
                        }`}
                      style={bizType === type ? { background: 'linear-gradient(135deg, #3B82F6, #2563EB)' } : {}}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                {bizType && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 mt-5">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center"><Check size={12} className="text-emerald-600" /></div>
                    <span className="text-emerald-600 text-sm font-medium">Selected: {bizType}</span>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* ─── STEP 3: Services ─── */}
            {step === 3 && (
              <motion.div key="s3" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }}>
                <p className="text-[#8B5CF6] text-xs font-bold uppercase tracking-widest mb-6 font-heading">Step 3 — Choose Services</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {servicesList.map((svc) => {
                    const active = selectedServices.includes(svc.id)
                    return (
                      <button
                        key={svc.id}
                        onClick={() => toggleService(svc.id)}
                        className={`relative rounded-3xl p-6 text-left transition-all duration-350 hover:-translate-y-1 ${active
                          ? 'text-white shadow-2xl scale-[1.01]'
                          : 'bg-white/90 border border-indigo-50 hover:shadow-lg hover:border-indigo-100'
                          }`}
                        style={active ? { background: `linear-gradient(135deg, ${svc.color}, #4F46E5)`, boxShadow: `0 20px 50px ${svc.color}30` } : {}}
                      >
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${active ? 'bg-white/20' : 'bg-gradient-to-br ' + svc.gradient + ' shadow-md'}`}>
                          <svc.icon size={22} className="text-white" />
                        </div>
                        <h4 className={`font-heading font-bold text-lg mb-1 ${active ? '' : 'text-[#0F172A]'}`}>{svc.name}</h4>
                        <p className={`text-sm mb-3 ${active ? 'text-white/70' : 'text-[#64748B]'}`}>{svc.desc}</p>
                        <span className={`text-xs font-semibold ${active ? 'text-white/60' : 'text-[#94A3B8]'}`}>Min {fmt(svc.min)}/mo</span>

                        {active && (
                          <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/25 flex items-center justify-center">
                            <Check size={14} />
                          </div>
                        )}
                      </button>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {/* ─── STEP 4: Your Plan ─── */}
            {step === 4 && (
              <motion.div key="s4" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35 }}>
                <p className="text-[#8B5CF6] text-xs font-bold uppercase tracking-widest mb-6 font-heading">Step 4 — Your Budget Plan</p>

                {/* Budget summary */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { label: 'Total Budget', value: fmt(budget), color: 'text-[#0F172A]' },
                    { label: 'Allocated', value: fmt(allocated), color: 'text-[#8B5CF6]' },
                    { label: 'Remaining', value: fmt(remaining), color: remaining < 0 ? 'text-red-500' : 'text-emerald-500' },
                  ].map(item => (
                    <div key={item.label} className="text-center p-4 rounded-2xl bg-white/60">
                      <p className="text-[#94A3B8] text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1">{item.label}</p>
                      <p className={`font-heading font-extrabold text-lg sm:text-2xl ${item.color} tabular-nums`}>{item.value}</p>
                    </div>
                  ))}
                </div>

                {/* Allocation bar */}
                <div className="h-5 rounded-full overflow-hidden mb-8 flex" style={{ background: 'rgba(99,102,241,0.1)' }}>
                  {selectedServices.map((sid, i) => {
                    const pct = budget > 0 ? ((allocations[sid] || 0) / budget) * 100 : 0
                    return (
                      <motion.div
                        key={sid}
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-full"
                        style={{ background: barColors[i % barColors.length], minWidth: pct > 0 ? '2px' : 0 }}
                      />
                    )
                  })}
                </div>

                {/* Service sliders */}
                {selectedServices.length === 0 ? (
                  <p className="text-center text-[#94A3B8] text-sm py-8">Go back to Step 3 and select services first.</p>
                ) : (
                  <div className="space-y-4">
                    {selectedServices.map((sid, i) => {
                      const svc = servicesList.find(s => s.id === sid)
                      const val = allocations[sid] || svc.min
                      const pct = budget > 0 ? Math.round((val / budget) * 100) : 0
                      return (
                        <div key={sid} className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-2xl bg-white/60">
                          <div className="flex items-center gap-3 flex-shrink-0 min-w-[140px]">
                            <div className="w-3 h-3 rounded-full" style={{ background: barColors[i % barColors.length] }} />
                            <span className="font-heading font-bold text-sm text-[#0F172A]">{svc.name}</span>
                          </div>

                          <div className="flex items-center gap-3 flex-1">
                            <button onClick={() => adjustAlloc(sid, -500)} className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-shadow flex-shrink-0" aria-label="Decrease">
                              <Minus size={14} className="text-[#64748B]" />
                            </button>

                            <div className="flex-1 relative">
                              <div className="h-2.5 rounded-full overflow-hidden" style={{ background: 'rgba(99,102,241,0.1)' }}>
                                <motion.div className="h-full rounded-full" style={{ background: barColors[i % barColors.length] }} animate={{ width: `${pct}%` }} transition={{ duration: 0.3 }} />
                              </div>
                            </div>

                            <button onClick={() => adjustAlloc(sid, 500)} className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-shadow flex-shrink-0" aria-label="Increase">
                              <Plus size={14} className="text-[#64748B]" />
                            </button>
                          </div>

                          <div className="text-right flex-shrink-0 min-w-[100px]">
                            <p className="font-heading font-bold text-sm text-[#0F172A] tabular-nums">{fmt(val)}</p>
                            <p className="text-[10px] text-[#94A3B8] font-medium">{pct}% of budget</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ═══ Navigation Buttons ═══ */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={goBack}
            className={`flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 ${step === 1 ? 'opacity-0 pointer-events-none' : 'bg-white text-[#64748B] shadow-md hover:shadow-lg hover:-translate-y-0.5'
              }`}
          >
            <ChevronLeft size={16} />
            Back
          </button>

          {step < 4 ? (
            <button
              onClick={goNext}
              disabled={!canNext()}
              className={`group flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-white transition-all duration-300 ${canNext() ? 'hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]' : 'opacity-40 cursor-not-allowed'
                }`}
              style={{ background: 'linear-gradient(135deg, #8B5CF6, #3B82F6)', boxShadow: canNext() ? '0 16px 40px rgba(99,102,241,0.25)' : 'none' }}
            >
              Continue
              <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          ) : (
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="group flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]"
              style={{ background: 'linear-gradient(135deg, #8B5CF6, #3B82F6)', boxShadow: '0 16px 40px rgba(99,102,241,0.25)' }}
            >
              Get Your Free Plan
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          )}
        </div>
      </div>

      {/* Smooth blend to next light section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAFBFF] to-transparent" />
    </section>
  )
}
