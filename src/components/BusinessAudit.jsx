import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, MapPin, Share2, Megaphone, BarChart3, ArrowRight, Shield, Zap, Lock, Check, X } from 'lucide-react'
import { useInView } from '../hooks/useInView'

/* ─── Questions Data ─── */
const questions = [
  {
    id: 1,
    text: 'Does your business have a website?',
    icon: Globe,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    activeGradient: 'from-purple-500 to-indigo-500',
  },
  {
    id: 2,
    text: 'Is your business listed on Google Maps?',
    icon: MapPin,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    activeGradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    text: 'Do you post on social media at least 3 times a week?',
    icon: Share2,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    activeGradient: 'from-emerald-500 to-teal-500',
  },
  {
    id: 4,
    text: 'Do you run any paid advertising campaigns?',
    icon: Megaphone,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    activeGradient: 'from-amber-500 to-orange-500',
  },
  {
    id: 5,
    text: 'Do you track your website analytics regularly?',
    icon: BarChart3,
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    activeGradient: 'from-pink-500 to-rose-500',
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

  /* Score label */
  const getScoreLabel = () => {
    if (!allAnswered) return null
    if (score <= 1) return { text: 'Needs Urgent Attention', color: 'text-red-500' }
    if (score <= 2) return { text: 'Below Average', color: 'text-orange-500' }
    if (score <= 3) return { text: 'Average — Room to Grow', color: 'text-amber-500' }
    if (score <= 4) return { text: 'Good — Can Be Better', color: 'text-blue-500' }
    return { text: 'Excellent Online Presence!', color: 'text-emerald-500' }
  }
  const scoreLabel = getScoreLabel()

  return (
    <section id="audit" className="relative overflow-hidden py-16 sm:py-20" style={{ background: 'linear-gradient(135deg, #F9FAFF 0%, #F4F3FF 50%, #EEF4FF 100%)' }}>
      {/* Background decorations */}
      <div className="absolute top-[-8%] left-[-6%] w-[500px] h-[500px] rounded-full bg-purple-200/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-8%] right-[-6%] w-[450px] h-[450px] rounded-full bg-blue-200/20 blur-[110px] pointer-events-none" />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(139,92,246,0.025) 1px, transparent 0)', backgroundSize: '44px 44px' }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-5 py-2 rounded-full mb-6 shadow-sm" style={{ background: 'rgba(139,92,246,0.12)', backdropFilter: 'blur(12px)' }}>
            <span className="text-[#7C3AED] text-xs font-bold uppercase tracking-widest font-heading">Free Business Audit</span>
          </div>

          <h2 className="font-heading font-black text-[#0F172A] leading-[1.1] mb-5" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.04em' }}>
            How Strong Is Your <span className="gradient-text-saas">Business Online?</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="rounded-[2.5rem] p-6 sm:p-10"
          style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.5)', boxShadow: '0 25px 50px rgba(0,0,0,0.05)' }}
        >
          <div className="space-y-4 mb-8">
            {questions.map((q) => (
              <div key={q.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white/50 border border-white/80 transition-all hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl ${q.iconBg} flex items-center justify-center`}>
                    <q.icon size={20} className={q.iconColor} />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-[#0F172A]">{q.text}</span>
                </div>
                <div className="flex gap-2 ml-14 sm:ml-0">
                  <button
                    onClick={() => handleAnswer(q.id, true)}
                    className={`px-6 py-2 rounded-xl text-sm font-black transition-all ${answers[q.id] === true ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-50'}`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handleAnswer(q.id, false)}
                    className={`px-6 py-2 rounded-xl text-sm font-black transition-all ${answers[q.id] === false ? 'bg-slate-800 text-white shadow-lg' : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-50'}`}
                  >
                    No
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-black text-[#0F172A]">Audit Progress</span>
              <span className="text-sm font-black text-indigo-600">{score}/{questions.length}</span>
            </div>
            <div className="h-3 rounded-full bg-slate-100 overflow-hidden">
              <motion.div
                animate={{ width: `${progress}%` }}
                className="h-full bg-indigo-600 rounded-full"
              />
            </div>
            <AnimatePresence>
              {scoreLabel && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`mt-4 text-center font-black ${scoreLabel.color}`}>
                  {scoreLabel.text}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full py-5 bg-[#0F172A] text-white font-black text-lg rounded-2xl transition-all hover:bg-indigo-600 shadow-xl shadow-indigo-500/10 active:scale-[0.98]"
          >
            Get Detailed Analysis
          </button>
        </motion.div>
      </div>
    </section>
  )
}
