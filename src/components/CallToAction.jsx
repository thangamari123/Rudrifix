import React from 'react'
import { motion } from 'framer-motion'
import { 
  Zap, CalendarDays, ArrowRight, Phone, 
  ShieldCheck, Clock, CheckCircle2, Sparkles 
} from 'lucide-react'
import { useInView } from '../hooks/useInView'

const assurances = [
  { icon: Clock, label: 'Response Within 2 Hours' },
  { icon: ShieldCheck, label: '100% Confidential & NDA' },
  { icon: CheckCircle2, label: 'Free Technical Roadmap' },
  { icon: Sparkles, label: 'Zero Long-Term Lock-in' }
]

export default function CallToAction() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="cta" className="relative overflow-hidden py-14 sm:py-20 md:py-24 bg-[#F8FAFC] border-t border-slate-100">
      {/* ── Background Subtle Lighting & Dot Grid ── */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.15) 1px, transparent 0)', 
          backgroundSize: '40px 40px' 
        }} 
      />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-indigo-100/40 rounded-full blur-[130px] pointer-events-none translate-y-1/2" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>

        {/* ═══ Framed Executive Card Container ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl sm:rounded-3xl bg-white/95 border border-slate-200/80 shadow-xl shadow-blue-500/5 p-6 sm:p-10 md:p-14 text-center overflow-hidden"
        >
          {/* Subtle Top Accent Glow Line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-blue-600 to-transparent" />

          {/* ═══ Badge ═══ */}
          <div className="flex justify-center mb-5 sm:mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 shadow-xs">
              <Zap size={13} className="text-blue-600" />
              <span className="text-blue-700 text-xs font-bold uppercase tracking-[0.08em] font-heading">
                Enterprise Acceleration
              </span>
            </div>
          </div>

          {/* ═══ Headline ═══ */}
          <h2
            className="font-heading font-extrabold text-[#0F172A] leading-[1.1] text-center mb-8 sm:mb-10 max-w-2xl mx-auto tracking-tight text-2xl sm:text-4xl md:text-5xl"
          >
            Ready to Dominate{' '}
            <span className="gradient-text-pb">Your Market Online?</span>
          </h2>

          {/* ═══ Desktop CTA Buttons (sm and up) ═══ */}
          <div className="hidden sm:flex flex-row items-center justify-center gap-4 mb-8">
            {/* Primary — Book Free Strategy Call */}
            <motion.a
              href="#contact"
              onClick={(e) => { 
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) 
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2.5 px-8 h-13 sm:h-14 rounded-xl text-white font-heading font-semibold text-sm sm:text-base shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, #2563EB, #1D4ED8, #1E40AF)' }}
            >
              <CalendarDays size={18} className="text-blue-100 group-hover:scale-110 transition-transform" />
              <span>Book Free Strategy Call</span>
              <ArrowRight size={16} className="text-blue-200 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* Secondary — WhatsApp Consultation */}
            <motion.a
              href="https://wa.me/918300227525?text=Hi%20Rudrifix%20Team%2C%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2.5 px-7 h-13 sm:h-14 rounded-xl font-heading font-semibold text-sm sm:text-base text-slate-800 bg-white border border-slate-200 hover:border-emerald-500/50 hover:bg-emerald-50/30 hover:text-slate-900 shadow-sm transition-all duration-200"
            >
              {/* WhatsApp Icon */}
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366] group-hover:scale-110 transition-transform shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Chat on WhatsApp</span>
              <span className="flex items-center gap-1.5 pl-1.5 border-l border-slate-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider">Online</span>
              </span>
            </motion.a>
          </div>

          {/* ═══ Mobile CTA Layout (compact & ergonomic) ═══ */}
          <div className="flex sm:hidden flex-col gap-3 mb-6">
            {/* Primary Action Button */}
            <motion.a
              href="#contact"
              onClick={(e) => { 
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) 
              }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-between w-full h-12 px-5 rounded-xl text-white font-heading font-semibold text-sm shadow-md shadow-blue-600/20"
              style={{ background: 'linear-gradient(135deg, #2563EB, #1D4ED8, #1E40AF)' }}
            >
              <div className="flex items-center gap-2.5">
                <CalendarDays size={18} className="text-blue-100" />
                <span>Book Free Strategy Call</span>
              </div>
              <ArrowRight size={16} className="text-blue-200 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>

            {/* Split Row: WhatsApp + Direct Call */}
            <div className="grid grid-cols-2 gap-2.5 w-full">
              <motion.a
                href="https://wa.me/918300227525?text=Hi%20Rudrifix%20Team%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 h-11 px-3 rounded-xl bg-white border border-emerald-200/80 shadow-xs text-slate-800 font-heading font-semibold text-xs active:bg-emerald-50/40"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366] shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              </motion.a>

              <motion.a
                href="tel:+918300227525"
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 h-11 px-3 rounded-xl bg-white border border-blue-200/80 shadow-xs text-slate-800 font-heading font-semibold text-xs active:bg-blue-50/40"
              >
                <Phone size={14} className="text-blue-600 shrink-0" />
                <span>Call Now</span>
              </motion.a>
            </div>
          </div>

          {/* ═══ Direct Line Micro-Copy (Desktop) ═══ */}
          <div className="hidden sm:block text-slate-500 text-xs sm:text-sm mb-8">
            Prefer direct contact? Call our advisory team directly at{' '}
            <a 
              href="tel:+918300227525" 
              className="font-semibold text-blue-600 hover:text-blue-700 hover:underline inline-flex items-center gap-1"
            >
              <Phone size={12} className="inline" />
              +91 83002 27525
            </a>
          </div>

          {/* ═══ Executive Trust & Assurance Strip ═══ */}
          <div className="pt-6 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {assurances.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="flex items-center justify-center gap-2 text-slate-600">
                  <div className="w-6 h-6 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <Icon size={13} className="text-blue-600" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-medium text-slate-600 text-left whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              )
            })}
          </div>

        </motion.div>

      </div>
    </section>
  )
}
