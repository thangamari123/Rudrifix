import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, MapPin, Share2, Megaphone, BarChart3, ArrowRight, Lock } from 'lucide-react'
import { useInView } from '../hooks/useInView'

/* ─── Questions Data ─── */
const questions = [
  {
    id: 1,
    text: 'Does your business have a website?',
    icon: Globe,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    id: 2,
    text: 'Is your business listed on Google Maps?',
    icon: MapPin,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    id: 3,
    text: 'Do you post on social media at least 3x a week?',
    icon: Share2,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
  },
  {
    id: 4,
    text: 'Do you run any paid advertising campaigns?',
    icon: Megaphone,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
  {
    id: 5,
    text: 'Do you track your website analytics regularly?',
    icon: BarChart3,
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
  },
]

export default function BusinessAudit() {
  const [ref, isInView] = useInView({ threshold: 0.05 })
  const [answers, setAnswers] = useState({})

  const handleAnswer = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }))
  }

  const score = useMemo(() => {
    return Object.values(answers).filter((v) => v === true).length
  }, [answers])

  const answered = Object.keys(answers).length
  const progress = (answered / questions.length) * 100
  const allAnswered = answered === questions.length

  const getScoreLabel = () => {
    if (!allAnswered) return null
    if (score <= 1) return { text: 'Needs Urgent Attention 🚨', color: 'text-red-500' }
    if (score <= 2) return { text: 'Below Average — Let\'s Fix It 📉', color: 'text-orange-500' }
    if (score <= 3) return { text: 'Average — Room to Grow 📈', color: 'text-amber-500' }
    if (score <= 4) return { text: 'Good — Can Be Better 💪', color: 'text-blue-500' }
    return { text: 'Excellent Online Presence! 🚀', color: 'text-emerald-500' }
  }
  const scoreLabel = getScoreLabel()

  return (
    <section
      id="audit"
      className="relative overflow-hidden py-16 sm:py-24"
      style={{ background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 50%, #DBEAFE 100%)' }}
    >
      {/* Background blobs */}
      <div className="absolute top-[-8%] left-[-6%] w-[400px] h-[400px] rounded-full bg-purple-200/25 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-8%] right-[-6%] w-[400px] h-[400px] rounded-full bg-blue-200/25 blur-[110px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(139,92,246,0.03) 1px, transparent 0)',
          backgroundSize: '44px 44px',
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <div
            className="inline-flex items-center px-5 py-2 rounded-full mb-5 shadow-sm"
            style={{ background: 'rgba(139,92,246,0.12)', backdropFilter: 'blur(12px)' }}
          >
            <span className="text-[#7C3AED] text-xs font-bold uppercase tracking-widest">
              Free Business Audit
            </span>
          </div>

          <h2
            className="font-heading font-black text-[#0F172A] leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(1.75rem, 5vw, 3.25rem)', letterSpacing: '-0.04em' }}
          >
            How Strong Is Your{' '}
            <span className="gradient-text-saas">Business Online?</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
            Answer 5 quick questions and get an instant snapshot of your digital presence.
          </p>
        </motion.div>

        {/* ── Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-3xl p-5 sm:p-10"
          style={{
            background: 'rgba(255,255,255,0.85)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.6)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.06)',
          }}
        >
          {/* ── Question Grid ── */}
          <div className="flex flex-col gap-3 mb-8">
            {questions.map((q, idx) => {
              const selected = answers[q.id]
              return (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.15 + idx * 0.07 }}
                  className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 rounded-2xl border transition-all duration-200 ${
                    selected === true
                      ? 'bg-indigo-50/60 border-indigo-200'
                      : selected === false
                      ? 'bg-slate-50 border-slate-200'
                      : 'bg-white/60 border-white/80 hover:shadow-sm hover:border-slate-200'
                  }`}
                >
                  {/* Icon + Question text */}
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div
                      className={`w-10 h-10 shrink-0 rounded-xl ${q.iconBg} flex items-center justify-center`}
                    >
                      <q.icon size={19} className={q.iconColor} />
                    </div>
                    <span className="text-sm sm:text-[0.95rem] font-bold text-[#0F172A] leading-snug">
                      {q.text}
                    </span>
                  </div>

                  {/* Yes / No buttons — full width on mobile, auto on desktop */}
                  <div className="flex gap-2 w-full sm:w-auto shrink-0">
                    <button
                      onClick={() => handleAnswer(q.id, true)}
                      className={`flex-1 sm:flex-none px-5 py-2 rounded-xl text-sm font-black transition-all duration-200 ${
                        selected === true
                          ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                          : 'bg-white border border-slate-200 text-slate-500 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600'
                      }`}
                    >
                      ✓ Yes
                    </button>
                    <button
                      onClick={() => handleAnswer(q.id, false)}
                      className={`flex-1 sm:flex-none px-5 py-2 rounded-xl text-sm font-black transition-all duration-200 ${
                        selected === false
                          ? 'bg-slate-800 text-white shadow-lg shadow-slate-200'
                          : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-50 hover:border-slate-300'
                      }`}
                    >
                      ✗ No
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* ── Progress ── */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs sm:text-sm font-black text-[#0F172A]">Audit Progress</span>
              <span className="text-xs sm:text-sm font-black text-indigo-600">
                {answered} / {questions.length} answered
              </span>
            </div>
            <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
              <motion.div
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #6366F1, #A855F7)' }}
              />
            </div>

            <AnimatePresence>
              {scoreLabel && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-center"
                >
                  <span className={`text-base sm:text-lg font-black ${scoreLabel.color}`}>
                    {scoreLabel.text}
                  </span>
                  <p className="text-xs text-slate-400 mt-1">
                    Your digital score: <strong className="text-slate-600">{score} / {questions.length}</strong>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── CTA Button ── */}
          <button
            onClick={() => {
              if (allAnswered) {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            disabled={!allAnswered}
            className={`w-full py-4 sm:py-5 font-black text-base sm:text-lg rounded-2xl transition-all duration-200 shadow-xl active:scale-[0.98] flex items-center justify-center gap-3 ${
              allAnswered
                ? 'text-white hover:opacity-90 hover:shadow-2xl'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none'
            }`}
            style={
              allAnswered
                ? { background: 'linear-gradient(135deg, #6366F1, #A855F7)', boxShadow: '0 16px 40px rgba(99,102,241,0.3)' }
                : {}
            }
          >
            {!allAnswered && <Lock size={18} />}
            {allAnswered ? 'Get My Free Analysis' : 'Complete All Questions to Unlock'}
            {allAnswered && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
          </button>

          {allAnswered && (
            <p className="text-center text-xs text-slate-400 mt-3 font-medium">
              🔒 100% Free — No credit card required
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
