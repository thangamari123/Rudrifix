import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, User, Phone, Mail, Building2, Layers, MessageSquare, Shield } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const businessTypes = ['Retail Shop', 'Restaurant', 'E-commerce', 'Service Business', 'Startup', 'Other']
const serviceOptions = ['Meta Ads (Facebook & Instagram)', 'Website Development', 'SEO & Google Ranking', 'Social Media Management', 'Content Creation', 'Full Digital Marketing Package', 'Other']

export default function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.05 })
  const location = useLocation()
  const auditData = location.state?.auditData

  const [form, setForm] = useState({ name: '', phone: '', email: '', business: '', service: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Build WhatsApp Message
      let waText = `*New Lead from Website*\n\n`
      waText += `*Name:* ${form.name}\n`
      waText += `*Phone:* ${form.phone}\n`
      waText += `*Email:* ${form.email}\n`
      waText += `*Business Type:* ${form.business}\n`
      waText += `*Interested In:* ${form.service}\n`
      if (form.message) waText += `*Message:* ${form.message}\n`

      if (auditData) {
        waText += `\n*--- Free Business Audit Results ---*\n`
        waText += `*Score:* ${auditData.score}/5\n`
        waText += `*Analysis:* ${auditData.scoreLabel?.text || ''}\n`
        waText += `*Website:* ${auditData.answers[1] ? 'Yes' : 'No'}\n`
        waText += `*Google Maps:* ${auditData.answers[2] ? 'Yes' : 'No'}\n`
        waText += `*Social Media (3x/wk):* ${auditData.answers[3] ? 'Yes' : 'No'}\n`
        waText += `*Paid Ads:* ${auditData.answers[4] ? 'Yes' : 'No'}\n`
        waText += `*Analytics:* ${auditData.answers[5] ? 'Yes' : 'No'}\n`
      }

      // 1. Real Backend Call to Google Apps Script (run asynchronously without blocking)
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzb0bCuo7r4WQbdF1Gt2UNt2bj0tV_UURYd_tU5Jtg6IGEtdeuo9gKLtPQ08pjQLyE/exec';

      let sheetMessage = form.message;
      if (auditData) {
        sheetMessage += `\n\n--- Audit Results ---\nScore: ${auditData.score}/5 (${auditData.scoreLabel?.text || ''})\nWebsite: ${auditData.answers[1] ? 'Yes' : 'No'}, Maps: ${auditData.answers[2] ? 'Yes' : 'No'}, Social: ${auditData.answers[3] ? 'Yes' : 'No'}, Ads: ${auditData.answers[4] ? 'Yes' : 'No'}, Analytics: ${auditData.answers[5] ? 'Yes' : 'No'}`;
      }

      fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          message: sheetMessage,
          date: new Date().toLocaleString(),
          source: auditData ? 'Audit + Contact Form' : 'Contact Form'
        }),
      }).catch(err => console.error('Lead storage failed:', err));

      // 2. Redirect to WhatsApp
      const whatsappUrl = `https://wa.me/919487816005?text=${encodeURIComponent(waText)}`
      window.open(whatsappUrl, '_blank')

      // 3. Success state
      setSubmitted(true)
      setForm({ name: '', phone: '', email: '', business: '', service: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Submission failed:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  /* shared field styles */
  const inputBase = "w-full h-16 px-5 rounded-[18px] text-[#0F172A] text-sm font-medium placeholder-[#94A3B8] transition-all duration-300 outline-none"
  const inputBorder = "border border-[rgba(99,102,241,0.12)] bg-[rgba(255,255,255,0.7)] focus:border-[#8B5CF6] focus:shadow-[0_0_0_4px_rgba(139,92,246,0.12)]"

  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-20" style={{ background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 40%, #DBEAFE 100%)' }}>
      {/* ── Background decorations ── */}
      <div className="absolute top-[-8%] left-[-6%] w-[550px] h-[550px] rounded-full bg-violet-200/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-8%] right-[-6%] w-[500px] h-[500px] rounded-full bg-blue-200/20 blur-[110px] pointer-events-none" />
      <div className="absolute top-[40%] right-[20%] w-[250px] h-[250px] rounded-full bg-blue-100/20 blur-[90px] pointer-events-none" />

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
          <motion.div key={i} className="absolute rounded-full bg-blue-400/15"
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
          className="text-center mb-10 sm:mb-12"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-5" style={{ background: 'rgba(59,130,246,0.12)', backdropFilter: 'blur(12px)', boxShadow: '0 10px 30px rgba(59,130,246,0.12)' }}>
            <Send size={13} className="text-[#3B82F6]" />
            <span className="text-[#3B82F6] text-xs font-bold uppercase tracking-[0.08em] font-heading">Get In Touch</span>
          </div>

          <h2 className="font-heading font-extrabold text-[#0F172A] leading-[1.08]" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.04em' }}>
            Let's Grow Your{' '}
            <span className="gradient-text-pb">Business</span>{' '}
            Together
          </h2>
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
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`group w-full h-12 sm:h-14 rounded-xl sm:rounded-2xl text-white font-heading font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all duration-300 ${submitted ? 'bg-emerald-500 shadow-emerald-500/20' : ''
                }`}
              style={{
                background: !submitted ? 'linear-gradient(90deg, #7C3AED, #4F46E5, #2563EB)' : undefined,
                boxShadow: submitted ? 'none' : '0 12px 30px rgba(99,102,241,0.25)'
              }}
              disabled={submitted || isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </span>
              ) : submitted ? (
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
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F0F9FF] to-transparent" />

      {/* ═══ Thank You Popup Modal ═══ */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSubmitted(false)}
              className="absolute inset-0 bg-[#0F172A]/40 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg overflow-hidden rounded-[40px] bg-white p-8 sm:p-12 text-center shadow-[0_40px_100px_rgba(15,23,42,0.2)]"
            >
              {/* Background Accent */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-100 rounded-full blur-[80px] opacity-60" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-violet-100 rounded-full blur-[80px] opacity-60" />

              <div className="relative z-10 flex flex-col items-center">
                {/* Success Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 500, damping: 20 }}
                  className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 shadow-[0_20px_40px_rgba(16,185,129,0.1)]"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Send size={42} />
                  </motion.div>
                </motion.div>

                <h3 className="mb-4 font-heading text-3xl font-black text-[#0F172A] tracking-tight">
                  Message Sent <span className="text-emerald-500">Successfully!</span>
                </h3>

                <p className="mb-10 text-lg leading-relaxed text-gray-500 font-medium">
                  Thank you for reaching out to <span className="font-bold text-blue-600">Rudrifix</span>. We've received your inquiry and our strategy team will contact you within <span className="text-[#0F172A] font-bold">24 hours</span>.
                </p>

                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSubmitted(false)}
                  className="w-full rounded-2xl bg-[#0F172A] py-5 text-lg font-bold text-white shadow-xl shadow-gray-900/10 transition-all hover:bg-gray-800"
                >
                  Great, Thanks!
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
