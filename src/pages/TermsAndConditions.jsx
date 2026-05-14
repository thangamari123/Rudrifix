import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FileText, ArrowLeft, Mail, Globe, Scale, Shield, AlertCircle, CreditCard, Clock, CheckCircle, Lock, Ban } from 'lucide-react'

export default function TermsAndConditions({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sections = [
    {
      id: 'services',
      title: '1. Services',
      icon: CheckCircle,
      content: (
        <div className="space-y-6">
          <p className="text-[#6B7280] font-medium">Rudrifix provides digital services including but not limited to:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Website Design & Development',
              'UI/UX Design',
              'Branding & Creative Services',
              'SEO & Digital Marketing',
              'Social Media Services',
              'Automation & Technical Solutions'
            ].map(item => (
              <div key={item} className="flex items-center gap-3 bg-white px-5 py-4 rounded-2xl border border-[#E5E7EB] text-[#111827] text-sm font-bold shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#7C4DFF]" />
                {item}
              </div>
            ))}
          </div>
          <p className="p-4 rounded-xl bg-[#EDE9FE] border border-[#7C4DFF]/10 text-[#7C4DFF] text-xs font-bold italic">
            Service scope, timelines, pricing, and deliverables will be discussed separately for each project.
          </p>
        </div>
      )
    },
    {
      id: 'responsibilities',
      title: '2. User Responsibilities',
      icon: Shield,
      content: (
        <div className="space-y-6">
          <p className="text-[#6B7280] font-medium">By using our website or services, you agree:</p>
          <ul className="space-y-4">
            {[
              'To provide accurate information',
              'Not to misuse the website',
              'Not to attempt unauthorized access to systems or data',
              'Not to copy, reproduce, or resell our content'
            ].map(item => (
              <li key={item} className="flex items-center gap-3 text-[#111827] text-sm font-bold">
                <div className="w-5 h-5 rounded-full bg-[#5B8CFF]/10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5B8CFF]" />
                </div>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-4 p-5 rounded-2xl bg-rose-50 border border-rose-100 text-rose-600 text-sm font-bold flex items-center gap-3">
            <Ban size={18} />
            Any unlawful or abusive activity may result in termination of services.
          </div>
        </div>
      )
    },
    {
      id: 'payments',
      title: '3. Payments',
      icon: CreditCard,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {[
              'Payments must be made as agreed before execution.',
              'Certain projects require advance payment.',
              'Delayed payments can result in project suspension.',
              'Payments are generally non-refundable once work starts.'
            ].map((text, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#22C55E]/10 flex items-center justify-center flex-shrink-0">
                  <CreditCard size={16} className="text-[#22C55E]" />
                </div>
                <p className="text-[#111827] text-sm font-bold leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'ip',
      title: '4. Intellectual Property',
      icon: Lock,
      content: (
        <div className="space-y-6">
          <p className="text-[#6B7280] font-medium leading-relaxed">Unless otherwise agreed:</p>
          <div className="p-8 rounded-[32px] bg-[#111827] text-white space-y-4">
            <div className="flex items-center gap-3 text-[#7C4DFF] font-black uppercase tracking-widest text-[10px]">
              <Lock size={12} />
              Ownership Policy
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              Final approved work delivered to the client becomes client property after <span className="text-white font-black underline decoration-[#7C4DFF] decoration-2">full payment</span>. Rudrifix may showcase completed work in portfolios unless requested otherwise.
            </p>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="min-h-screen text-[#111827] selection:bg-[#7C4DFF]/20 selection:text-[#7C4DFF]" 
      style={{ 
        background: 'radial-gradient(circle at top left, rgba(124,77,255,0.08), transparent 30%), radial-gradient(circle at right, rgba(91,140,255,0.08), transparent 30%), #F5F7FF'
      }}>
      
      {/* ─── Header ─── */}
      <header className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-full max-w-4xl h-64 bg-[#5B8CFF]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.button
            onClick={onBack}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="group flex items-center gap-2 text-[#6B7280] hover:text-[#111827] transition-all mb-12 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full border border-[#E5E7EB] w-fit"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest">Back to Home</span>
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EDE9FE] border border-[#7C4DFF]/10 text-[#7C4DFF] text-[10px] font-black uppercase tracking-widest">
                <Scale size={12} />
                Agreement
              </div>
              <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.9]">
                Terms & <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #7C4DFF 0%, #D946EF 100%)' }}>Conditions</span>
              </h1>
              <p className="text-[#6B7280] text-lg font-medium leading-relaxed max-w-md">
                By using Rudrifix services, you agree to follow our guidelines and terms of service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5B8CFF]/20 to-[#D946EF]/20 blur-[60px] rounded-full" />
              <div className="relative bg-white/70 backdrop-blur-xl border border-white p-8 rounded-[40px] shadow-[0_40px_80px_rgba(17,24,39,0.08)]">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7C4DFF] to-[#D946EF] flex items-center justify-center text-white shadow-lg shadow-[#7C4DFF]/30">
                    <Scale size={24} />
                  </div>
                  <div>
                    <h3 className="font-black text-lg">Terms of Service</h3>
                    <p className="text-xs text-[#6B7280] font-bold uppercase tracking-widest">Compliance v1.4</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-10 rounded-xl bg-[#E5E7EB]/30 animate-pulse" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* ─── Content ─── */}
      <main className="max-w-5xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-32 space-y-4">
              <h3 className="text-[#111827] font-black text-xs uppercase tracking-[0.2em] mb-6 px-4">Navigation</h3>
              {sections.map(s => (
                <button
                  key={s.id}
                  onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-left transition-all hover:bg-white border border-transparent hover:border-[#E5E7EB] hover:shadow-sm group"
                >
                  <s.icon size={18} className="text-[#6B7280] group-hover:text-[#7C4DFF] transition-colors" />
                  <span className="text-sm font-bold text-[#6B7280] group-hover:text-[#111827] transition-colors">{s.title.split('. ')[1]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-8 sm:p-12 rounded-[40px] bg-white border border-[#E5E7EB] shadow-[0_30px_60px_rgba(17,24,39,0.04)]"
            >
              <p className="text-lg text-[#6B7280] leading-relaxed font-medium">
                Welcome to Rudrifix. By accessing or using our website and services, you agree to comply with these Terms & Conditions. If you do not agree with these terms, please do not use our website or services.
              </p>
            </motion.div>

            <div className="space-y-24">
              {sections.map((section, idx) => (
                <motion.section
                  id={section.id}
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="space-y-8"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center border border-[#E5E7EB] shadow-sm">
                      <section.icon size={24} className="text-[#5B8CFF]" />
                    </div>
                    <h2 className="text-4xl font-black text-[#111827] tracking-tight">{section.title}</h2>
                  </div>
                  <div className="pl-0 sm:pl-20">
                    {section.content}
                  </div>
                </motion.section>
              ))}
            </div>

            {/* Final Contact CTA */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-[48px] bg-gradient-to-br from-[#7C4DFF] to-[#5B8CFF] text-white relative overflow-hidden shadow-2xl shadow-indigo-500/20"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
              <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20">
                  <Mail size={32} />
                </div>
                <div className="space-y-3">
                  <h2 className="text-4xl font-black tracking-tight leading-tight">Still have questions?</h2>
                  <p className="text-white/80 font-medium max-w-md mx-auto">Our support team is here to help you understand our service agreement better.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                  <a href="mailto:rudrifix@gmail.com" className="flex-1 py-5 rounded-2xl bg-white text-[#111827] font-black text-sm hover:bg-opacity-90 transition-all shadow-xl shadow-black/10">
                    Email Support
                  </a>

                  <a href="/#contact" onClick={onBack} className="flex-1 py-5 rounded-2xl bg-[#111827] text-white font-black text-sm hover:bg-opacity-90 transition-all">
                    Back to Home
                  </a>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
    </div>
  )
}
