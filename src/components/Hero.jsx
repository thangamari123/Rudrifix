import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Code2, Bot, Megaphone, Rocket, Phone, CalendarCheck2, Star, TrendingUp, Zap, Globe, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const services = [
  'Web Development', 'App Development', 'AI Automation', 'UI/UX Design',
  'Custom SaaS', 'SEO Services', 'Social Media', 'Digital Marketing',
  'Google Ads', 'Meta Ads', 'Branding', 'E-commerce',
]

const stats = [
  { value: '20+', label: 'Happy Clients', icon: Star },
  { value: '15+', label: 'Projects Done', icon: TrendingUp },
  { value: '3+', label: 'Years Exp.', icon: Zap },
]

export default function Hero() {
  const [serviceIdx, setServiceIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setServiceIdx(i => (i + 1) % services.length), 2200)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="home" className="relative overflow-hidden bg-[#EEF6FD] pt-24 pb-8 sm:pt-28 sm:pb-10">

      {/* Subtle Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-200/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 relative z-10">

        {/* ════ BENTO GRID ════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4">

          {/* ── Card 1: MAIN HEADLINE (large, spans 7 cols) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-8 shadow-sm border border-blue-100/60 relative overflow-hidden"
          >
            {/* Dot grid decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 opacity-[0.04] pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle, #1e3a8a 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-blue-600 uppercase">Digital Growth Partner</span>
            </div>

            {/* H1 */}
            <h1 className="text-[#0F172A] text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.2] mb-3">
              Software Development,{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">AI Automation</span>
              {' '}&amp;{' '}
              <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">Digital Marketing</span>
              {' '}Company
            </h1>

            {/* Animated service line */}
            <div className="flex items-center gap-2 mb-5">
              <span className="text-gray-500 text-sm sm:text-base font-medium">We help you grow with</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={serviceIdx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="text-sm sm:text-base font-bold text-blue-600 bg-blue-50 px-3 py-0.5 rounded-full border border-blue-100 whitespace-nowrap"
                >
                  {services[serviceIdx]}
                </motion.span>
              </AnimatePresence>
            </div>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
              Build websites, SaaS apps, CRM, ERP &amp; e-commerce solutions — and grow your business with data-driven marketing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Rocket size={17} />
                Start Growing Today
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#work"
                onClick={e => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-[#0F172A] font-semibold text-sm sm:text-base border border-gray-200 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200 shadow-sm"
              >
                See Our Work
              </a>
            </div>
          </motion.div>

          {/* ── Card 2: STATS (spans 5 cols) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 bg-gradient-to-br from-[#0F172A] to-[#1e3460] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-sm relative overflow-hidden"
          >
            {/* Glow orb */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-4">
                <Globe size={12} className="text-blue-300" />
                <span className="text-[10px] text-blue-200 font-bold uppercase tracking-widest">Our Numbers</span>
              </div>

              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                Trusted by growing businesses across India to deliver real, measurable results.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 relative z-10">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 text-center"
                >
                  <s.icon size={18} className="text-blue-300 mx-auto mb-1.5" />
                  <div className="text-white font-black text-xl sm:text-2xl leading-none">{s.value}</div>
                  <div className="text-white/50 text-[10px] font-medium mt-1 leading-tight">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Card 3: Software Dev ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 bg-white rounded-3xl p-6 border border-blue-100/60 shadow-sm group hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex gap-4 items-start relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-3xl" />
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform">
              <Code2 size={24} strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-bold text-[#0F172A] text-base sm:text-lg mb-1">Software Development</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">Web, mobile & SaaS apps built for scale and performance.</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {['React', 'Node.js', 'Flutter'].map(t => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-semibold border border-blue-100">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Card 4: AI Automation ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-4 bg-white rounded-3xl p-6 border border-indigo-100/60 shadow-sm group hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex gap-4 items-start relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-3xl" />
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 group-hover:scale-110 transition-transform">
              <Bot size={24} strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-bold text-[#0F172A] text-base sm:text-lg mb-1">AI Automation</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">Automate workflows and business processes with smart AI tools.</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {['ChatGPT', 'n8n', 'Zapier'].map(t => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 font-semibold border border-indigo-100">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Card 5: Digital Marketing ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-4 bg-white rounded-3xl p-6 border border-emerald-100/60 shadow-sm group hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex gap-4 items-start relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-3xl" />
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 group-hover:scale-110 transition-transform">
              <Megaphone size={24} strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-bold text-[#0F172A] text-base sm:text-lg mb-1">Digital Marketing</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">Data-driven strategies — SEO, Ads & Social Media that convert.</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {['SEO', 'Meta Ads', 'Google Ads'].map(t => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-semibold border border-emerald-100">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Card 6: CONTACT BAR (full width bottom) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="lg:col-span-12 bg-white rounded-3xl px-5 py-4 border border-blue-100/60 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            {/* Left: Trust signals */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
              {[
                { icon: CheckCircle, text: 'No Hidden Fees', color: 'text-emerald-500' },
                { icon: CheckCircle, text: 'Dedicated Support', color: 'text-blue-500' },
                { icon: CheckCircle, text: 'On-Time Delivery', color: 'text-indigo-500' },
              ].map(({ icon: Icon, text, color }) => (
                <div key={text} className="flex items-center gap-1.5">
                  <Icon size={14} className={color} />
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">{text}</span>
                </div>
              ))}
            </div>

            {/* Right: Contact buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:+919487816005"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-all"
              >
                <Phone size={15} />
                Call Us
              </a>
              <a
                href="https://wa.me/919487816005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold text-sm hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all"
              >
                <CalendarCheck2 size={15} />
                Book a Call
              </a>
            </div>
          </motion.div>

        </div>
        {/* ════ END BENTO GRID ════ */}

      </div>
    </section>
  )
}
