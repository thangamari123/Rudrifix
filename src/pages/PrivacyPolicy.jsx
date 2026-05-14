import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Shield, ArrowLeft, Mail, Globe, Lock, Eye, FileText, Scale, ExternalLink, AlertCircle } from 'lucide-react'

export default function PrivacyPolicy({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sections = [
    {
      id: 'collection',
      title: '1. Information We Collect',
      icon: FileText,
      content: (
        <div className="space-y-6">
          <p className="text-[#6B7280] font-medium">We may collect the following information:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-[24px] border border-[#E5E7EB] shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-[#111827] font-bold mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#7C4DFF]/10 flex items-center justify-center">
                  <Shield size={16} className="text-[#7C4DFF]" />
                </div>
                Personal Information
              </h4>
              <p className="text-sm text-[#6B7280] mb-4">When you contact us, fill out a form, or book a service, we may collect:</p>
              <ul className="grid grid-cols-1 gap-3">
                {['Name', 'Email address', 'Phone number', 'Business details', 'Project requirements'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-[#111827] text-sm font-semibold">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7C4DFF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-[24px] border border-[#E5E7EB] shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-[#111827] font-bold mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#5B8CFF]/10 flex items-center justify-center">
                  <Globe size={16} className="text-[#5B8CFF]" />
                </div>
                Automatically Collected
              </h4>
              <p className="text-sm text-[#6B7280] mb-4">When you visit our website, we may automatically collect:</p>
              <ul className="grid grid-cols-1 gap-3">
                {['IP address', 'Browser type', 'Device information', 'Pages visited', 'Time spent', 'Cookies & analytics'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-[#111827] text-sm font-semibold">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5B8CFF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'usage',
      title: '2. How We Use Your Information',
      icon: Eye,
      content: (
        <div className="space-y-6">
          <p className="text-[#6B7280] font-medium">We use your information to:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Respond to inquiries',
              'Provide website and digital services',
              'Improve user experience',
              'Send project updates',
              'Analyze website performance',
              'Prevent spam, fraud, or misuse'
            ].map(item => (
              <div key={item} className="flex items-center gap-3 bg-white px-5 py-4 rounded-2xl border border-[#E5E7EB] text-[#111827] text-sm font-bold shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 p-5 rounded-[20px] bg-[#EDE9FE] border border-[#7C4DFF]/10 text-[#7C4DFF] text-sm font-bold flex items-center gap-3">
            <Shield size={18} />
            We do not sell your personal information to third parties.
          </div>
        </div>
      )
    },
    {
      id: 'cookies',
      title: '3. Cookies & Tracking',
      icon: Lock,
      content: (
        <div className="space-y-6">
          <p className="text-[#6B7280] font-medium">Our website may use cookies and similar technologies to:</p>
          <ul className="space-y-4">
            {['Improve website functionality', 'Understand visitor behavior', 'Measure marketing performance', 'Enhance user experience'].map(item => (
              <li key={item} className="flex items-center gap-3 text-[#111827] text-sm font-bold">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
          <p className="p-4 rounded-xl bg-amber-50 border border-amber-100 text-amber-700 text-xs font-semibold">
            You can disable cookies through your browser settings, but some website features may not function properly.
          </p>
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
        {/* Subtle Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-[#7C4DFF]/10 blur-[120px] rounded-full pointer-events-none" />
        
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
                <Shield size={12} />
                Security & Trust
              </div>
              <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.9]">
                Privacy <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #7C4DFF 0%, #5B8CFF 100%)' }}>Policy</span>
              </h1>
              <p className="text-[#6B7280] text-lg font-medium leading-relaxed max-w-md">
                Your privacy is our priority. We are committed to protecting your data and being transparent about our practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C4DFF]/20 to-[#5B8CFF]/20 blur-[60px] rounded-full" />
              <div className="relative bg-white/70 backdrop-blur-xl border border-white p-8 rounded-[40px] shadow-[0_40px_80px_rgba(17,24,39,0.08)]">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-[#7C4DFF] flex items-center justify-center text-white shadow-lg shadow-[#7C4DFF]/30">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="font-black text-lg">Legal Document</h3>
                    <p className="text-xs text-[#6B7280] font-bold uppercase tracking-widest">v2.0 Revision</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ x: '-100%' }}
                        animate={{ x: '0%' }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        className="h-full bg-[#7C4DFF]/20 w-3/4 rounded-full" 
                      />
                    </div>
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
          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-32 space-y-6">
              <div className="p-8 rounded-[32px] bg-white border border-[#E5E7EB] shadow-[0_20px_50px_rgba(17,24,39,0.04)]">
                <h3 className="text-[#111827] font-black text-lg mb-4">Summary</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-6 font-medium">
                  We collect information to provide and improve our services, and we never sell your data to third parties.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs font-bold text-[#111827]">
                    <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
                    Effective: May 14, 2026
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold text-[#111827]">
                    <div className="w-2 h-2 rounded-full bg-[#5B8CFF]" />
                    Last Updated: Today
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-[32px] bg-[#111827] text-white shadow-xl shadow-[#111827]/10">
                <h3 className="font-black text-lg mb-4">Need help?</h3>
                <p className="text-slate-400 text-sm mb-6">Our legal team is available to clarify any terms.</p>
                <a 
                  href="mailto:rudrifix@gmail.com" 
                  className="block w-full py-4 rounded-2xl bg-white text-[#111827] text-center font-black text-sm hover:bg-[#7C4DFF] hover:text-white transition-all"
                >
                  Contact Legal
                </a>
              </div>
            </div>
          </div>

          {/* Main Policy Content */}
          <div className="lg:col-span-8 space-y-16">
            {sections.map((section, idx) => (
              <motion.section
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-[#E5E7EB] shadow-sm">
                    <section.icon size={20} className="text-[#7C4DFF]" />
                  </div>
                  <h2 className="text-3xl font-black text-[#111827] tracking-tight">{section.title}</h2>
                </div>
                <div className="pl-0 sm:pl-16">
                  {section.content}
                </div>
              </motion.section>
            ))}

            {/* Final Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[40px] bg-white border border-[#E5E7EB] shadow-[0_30px_60px_rgba(17,24,39,0.05)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D946EF]/5 blur-[60px] rounded-full" />
              <div className="relative z-10 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-black tracking-tight">Got Questions?</h2>
                  <p className="text-[#6B7280] font-medium">Reach out for more information about our data practices.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ContactCard icon={Mail} label="Email Us" value="rudrifix@gmail.com" gradient="from-[#7C4DFF] to-[#6366F1]" />
                  <ContactCard icon={Globe} label="Support" value="rudrifix.com/help" gradient="from-[#5B8CFF] to-[#6366F1]" />
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
    </div>
  )
}

function CheckIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-[#22C55E]/10 flex items-center justify-center flex-shrink-0">
      <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
    </div>
  )
}

function ContactCard({ icon: Icon, label, value, gradient }) {
  return (
    <div className="p-6 rounded-3xl bg-[#F5F7FF] border border-[#E5E7EB] hover:border-[#7C4DFF]/30 transition-all group">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-4 shadow-lg shadow-indigo-500/10`}>
        <Icon size={20} />
      </div>
      <p className="text-[10px] font-black text-[#6B7280] uppercase tracking-widest mb-1">{label}</p>
      <p className="text-[#111827] font-black">{value}</p>
    </div>
  )
}

