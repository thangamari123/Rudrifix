import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, User, Phone, Mail, Building2, Layers, MessageSquare, Shield } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const businessTypes = ['Retail Shop', 'Restaurant', 'E-commerce', 'Service Business', 'Startup', 'Other']
const serviceOptions = ['Meta Ads (Facebook & Instagram)', 'Website Development', 'SEO & Google Ranking', 'Social Media Management', 'Content Creation', 'Full Digital Marketing Package', 'Other']

export default function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.05 })
  const [form, setForm] = useState({ name: '', phone: '', email: '', business: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 4000) }

  /* shared field styles */
  const inputBase = "w-full h-16 px-5 rounded-[18px] text-[#0F172A] text-sm font-medium placeholder-[#94A3B8] transition-all duration-300 outline-none"
  const inputBorder = "border border-[rgba(99,102,241,0.12)] bg-[rgba(255,255,255,0.7)] focus:border-[#8B5CF6] focus:shadow-[0_0_0_4px_rgba(139,92,246,0.12)]"

  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-20" style={{ background: 'linear-gradient(135deg, #FAFBFF 0%, #F4F1FF 40%, #EEF4FF 100%)' }}>
      {/* ── Background decorations ── */}
      <div className="absolute top-[-8%] left-[-6%] w-[550px] h-[550px] rounded-full bg-purple-200/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-8%] right-[-6%] w-[500px] h-[500px] rounded-full bg-blue-200/20 blur-[110px] pointer-events-none" />
      <div className="absolute top-[40%] right-[20%] w-[250px] h-[250px] rounded-full bg-indigo-100/20 blur-[90px] pointer-events-none" />

      {/* Abstract curved line */}
      <svg className="absolute top-20 right-0 w-[280px] h-[280px] pointer-events-none opacity-[0.04]" viewBox="0 0 280 280">
        <path d="M0,140 Q70,40 140,140 T280,140" fill="none" stroke="#8B5CF6" strokeWidth="2" />
        <path d="M0,170 Q70,70 140,170 T280,170" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
      </svg>
      <svg className="absolute bottom-20 left-0 w-[200px] h-[200px] pointer-events-none opacity-[0.03]" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="none" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="6 6" />
      </svg>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(139,92,246,0.025) 1px, transparent 0)', backgroundSize: '44px 44px' }} />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { t: 12, l: 8, s: 5 }, { t: 30, l: 85, s: 4 }, { t: 65, l: 15, s: 6 },
          { t: 80, l: 78, s: 3 }, { t: 45, l: 92, s: 4 },
        ].map((p, i) => (
          <motion.div key={i} className="absolute rounded-full bg-indigo-400/15"
            style={{ top: `${p.t}%`, left: `${p.l}%`, width: p.s, height: p.s }}
            animate={{ y: [0, -25, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>

        {/* ═══ Header ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6" style={{ background: 'rgba(139,92,246,0.12)', backdropFilter: 'blur(12px)', boxShadow: '0 10px 30px rgba(124,58,237,0.12)' }}>
            <Send size={13} className="text-[#7C3AED]" />
            <span className="text-[#7C3AED] text-xs font-bold uppercase tracking-[0.08em] font-heading">Get In Touch</span>
          </div>

          <h2 className="font-heading font-extrabold text-[#0F172A] leading-[1.08] mb-5" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.04em' }}>
            Let's Grow Your{' '}
            <span className="gradient-text-pb">Business</span>{' '}
            Together
          </h2>

          <p className="text-[#64748B] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* ═══ Form Card ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-[36px] p-6 sm:p-10 lg:p-12"
          style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(24px)', border: '1px solid rgba(99,102,241,0.12)', boxShadow: '0 30px 80px rgba(15,23,42,0.08)' }}
        >
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

              {/* Name */}
              <div>
                <label className="flex items-center gap-2 mb-3">
                  <IconBadge><User size={18} /></IconBadge>
                  <span className="text-[0.95rem] font-bold text-[#0F172A] tracking-wide">Your Name <span className="text-red-400">*</span></span>
                </label>
                <input name="name" type="text" required value={form.name} onChange={update} placeholder="John Doe" className={`${inputBase} ${inputBorder}`} />
              </div>

              {/* Phone */}
              <div>
                <label className="flex items-center gap-2 mb-3">
                  <IconBadge><Phone size={18} /></IconBadge>
                  <span className="text-[0.95rem] font-bold text-[#0F172A] tracking-wide">Phone Number <span className="text-red-400">*</span></span>
                </label>
                <input name="phone" type="tel" required value={form.phone} onChange={update} placeholder="+91 XXXXX XXXXX" className={`${inputBase} ${inputBorder}`} />
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center gap-2 mb-3">
                  <IconBadge><Mail size={18} /></IconBadge>
                  <span className="text-[0.95rem] font-bold text-[#0F172A] tracking-wide">Email Address</span>
                </label>
                <input name="email" type="email" value={form.email} onChange={update} placeholder="you@company.com" className={`${inputBase} ${inputBorder}`} />
              </div>

              {/* Business Type */}
              <div>
                <label className="flex items-center gap-2 mb-3">
                  <IconBadge><Building2 size={18} /></IconBadge>
                  <span className="text-[0.95rem] font-bold text-[#0F172A] tracking-wide">Business Type</span>
                </label>
                <select name="business" value={form.business} onChange={update} className={`${inputBase} ${inputBorder} appearance-none cursor-pointer`}>
                  <option value="">Select your business type</option>
                  {businessTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              {/* Service */}
              <div className="md:col-span-2">
                <label className="flex items-center gap-2 mb-3">
                  <IconBadge><Layers size={18} /></IconBadge>
                  <span className="text-[0.95rem] font-bold text-[#0F172A] tracking-wide">Service Interested In <span className="text-red-400">*</span></span>
                </label>
                <select name="service" required value={form.service} onChange={update} className={`${inputBase} ${inputBorder} appearance-none cursor-pointer`}>
                  <option value="">Select a service</option>
                  {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="flex items-center gap-2 mb-3">
                  <IconBadge><MessageSquare size={18} /></IconBadge>
                  <span className="text-[0.95rem] font-bold text-[#0F172A] tracking-wide">Goals / Message</span>
                </label>
                <textarea
                  name="message" value={form.message} onChange={update} rows={5}
                  placeholder="What are you looking to achieve with digital marketing?"
                  className={`w-full px-5 py-5 rounded-[22px] text-[#0F172A] text-sm font-medium placeholder-[#94A3B8] resize-none transition-all duration-300 outline-none ${inputBorder}`}
                  style={{ minHeight: 140 }}
                />
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              type="submit"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="group w-full h-[72px] rounded-[22px] text-white font-heading font-bold text-lg sm:text-xl flex items-center justify-center gap-3 transition-all duration-300"
              style={{ background: 'linear-gradient(90deg, #7C3AED, #4F46E5, #2563EB)', boxShadow: submitted ? 'none' : '0 20px 40px rgba(99,102,241,0.3)' }}
              disabled={submitted}
            >
              {submitted ? (
                <span className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">✓</span>
                  Message Sent Successfully!
                </span>
              ) : (
                <>
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </>
              )}
            </motion.button>

            {/* Privacy */}
            <div className="flex items-center justify-center gap-2 mt-5">
              <Shield size={14} className="text-[#94A3B8]" />
              <p className="text-[#94A3B8] text-sm">
                We respect your privacy. Your information will never be shared.
              </p>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Smooth blend to next light section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FAFBFF] to-transparent" />
    </section>
  )
}

/* ─── Reusable icon badge ─── */
function IconBadge({ children }) {
  return (
    <div className="w-10 h-10 rounded-[14px] flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(99,102,241,0.08))' }}>
      <span className="text-[#8B5CF6]">{children}</span>
    </div>
  )
}
