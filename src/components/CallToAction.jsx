import React from 'react'
import { motion } from 'framer-motion'
import { Zap, CalendarDays, MessageCircle } from 'lucide-react'

import { useInView } from '../hooks/useInView'


export default function CallToAction() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="cta" className="relative overflow-hidden py-16 sm:py-20" style={{ background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 45%, #DBEAFE 100%)' }}>
      {/* ── Background decorations ── */}
      <div className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] rounded-full bg-violet-200/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[5%] w-[550px] h-[550px] rounded-full bg-blue-200/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] right-[30%] w-[300px] h-[300px] rounded-full bg-blue-100/25 blur-[100px] pointer-events-none" />

      {/* Abstract curves */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]" viewBox="0 0 1440 600" preserveAspectRatio="none">
        <path d="M0,300 Q360,100 720,300 T1440,300" fill="none" stroke="#3B82F6" strokeWidth="2" />
        <path d="M0,340 Q360,140 720,340 T1440,340" fill="none" stroke="#60A5FA" strokeWidth="1.5" />
        <path d="M0,380 Q360,180 720,380 T1440,380" fill="none" stroke="#93C5FD" strokeWidth="1" />
      </svg>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(139,92,246,0.025) 1px, transparent 0)', backgroundSize: '44px 44px' }} />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { t: 15, l: 10, s: 6 }, { t: 25, l: 80, s: 5 }, { t: 60, l: 5, s: 7 },
          { t: 70, l: 90, s: 4 }, { t: 40, l: 50, s: 5 }, { t: 85, l: 25, s: 4 },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/15"
            style={{ top: `${p.t}%`, left: `${p.l}%`, width: p.s, height: p.s }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 6 + i * 0.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>

        {/* ═══ Badge ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-7"
        >
          <div className="relative inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full" style={{ background: 'rgba(59,130,246,0.12)', backdropFilter: 'blur(12px)', boxShadow: '0 10px 30px rgba(59,130,246,0.12)' }}>
            <Zap size={14} className="text-[#3B82F6]" />
            <span className="text-[#3B82F6] text-xs font-bold uppercase tracking-[0.08em] font-heading">Stay Ahead</span>
            {/* Glow pulse */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ border: '1px solid rgba(59,130,246,0.2)' }}
              animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>

        {/* ═══ Headline ═══ */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-heading font-extrabold text-[#0F172A] leading-[1.05] text-center mb-6"
          style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', letterSpacing: '-0.05em' }}
        >
          Ready to Dominate{' '}
          <span className="gradient-text-pb">Your Market Online?</span>
        </motion.h2>

        {/* ═══ Subtitle ═══ */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="text-[#64748B] text-lg sm:text-xl text-center max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Let's create a digital strategy that puts your business ahead of the competition.
        </motion.p>

        {/* ═══ CTA Buttons ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-7 mb-14"
        >
          {/* Primary — Book Free Call */}
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center justify-center gap-3 w-full sm:w-auto px-10 sm:px-11 h-[72px] sm:h-[80px] rounded-3xl text-white font-heading font-bold text-lg sm:text-xl transition-shadow duration-400"
            style={{ background: 'linear-gradient(90deg, #3B82F6, #2563EB, #1E40AF)', boxShadow: '0 20px 50px rgba(59,130,246,0.35)' }}
          >
            <CalendarDays size={20} className="group-hover:scale-110 transition-transform" />
            Book Free Call
          </motion.a>

          {/* Secondary — WhatsApp Us */}
          <motion.a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center justify-center gap-3 w-full sm:w-auto px-10 sm:px-11 h-[72px] sm:h-[80px] rounded-3xl font-heading font-bold text-lg sm:text-xl text-[#2563EB] transition-all duration-400"
            style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(16px)', border: '2px solid rgba(59,130,246,0.3)', boxShadow: '0 10px 30px rgba(15,23,42,0.05)' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.9)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(37,99,235,0.15)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.55)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(15,23,42,0.05)' }}
          >
            {/* WhatsApp icon */}
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366] group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </motion.a>
        </motion.div>


      </div>

      {/* Bottom transition to light footer */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F0F9FF] to-transparent" />
    </section>
  )
}
