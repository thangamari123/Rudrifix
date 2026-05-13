import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Facebook, Linkedin, Mail, Shield, ChevronRight, ArrowUp, MapPin } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Meta Ads', href: '#services' },
    { name: 'Website Development', href: '#services' },
    { name: 'Photo & Video Production', href: '#services' },
    { name: 'Content Creation', href: '#services' },
    { name: 'SEO & Analytics', href: '#services' },
  ],
  company: [
    { name: 'Our Work', href: '#work' },
    { name: 'Business Audit', href: '#audit' },
    { name: 'Budget Planner', href: '#planner' },
    { name: 'Blog', href: '#home' },
    { name: 'Careers', href: '#contact' },
  ],
  support: [
    { name: 'Contact Us', href: '#contact' },
    { name: 'FAQs', href: '#contact' },
    { name: 'Privacy Policy', href: '#contact' },
    { name: 'Terms & Conditions', href: '#contact' },
  ],
}

const socials = [
  { icon: Facebook, href: 'https://facebook.com/rudrifix', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/rudrifix', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/rudrifix', label: 'LinkedIn' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #FAFBFF 0%, #F4F1FF 45%, #EEF4FF 100%)' }}>
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-200/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-200/20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-[42px] border border-[rgba(99,102,241,0.08)] backdrop-blur-[24px] shadow-[0_30_80_rgba(15,23,42,0.08)] p-8 sm:p-12 lg:p-[70px_70px_40px]"
          style={{ 
            background: 'rgba(255,255,255,0.82)',
            boxShadow: '0 30px 80px rgba(15,23,42,0.08)'
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-5 space-y-8">
              <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl overflow-hidden flex items-center justify-center shadow-xl shadow-indigo-500/20 group-hover:scale-110 transition-all duration-500">
                  <img 
                    src="/rudrifix logo.png" 
                    alt="Rudrifix Logo" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = 'linear-gradient(135deg, #8B5CF6, #6366F1, #3B82F6)';
                      e.target.parentElement.innerHTML = '<span class="text-white font-heading font-extrabold text-2xl">R</span>';
                    }}
                  />
                </div>
                <span className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tighter" style={{
                  background: 'linear-gradient(135deg, #8B5CF6, #6366F1, #3B82F6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Rudrifix
                </span>
              </a>
              <p className="text-[#64748B] text-lg leading-[2] max-w-[420px]">
                A results-driven digital marketing agency helping businesses grow online with smart strategies and creative solutions.
              </p>

              <div className="flex items-center gap-3 text-[#64748B]">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-[#6366F1]" />
                </div>
                <p className="text-sm font-medium">Thoothukudi, Tamil Nadu, India</p>
              </div>
              
              {/* Social Icons */}
              <div className="flex gap-4">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/70 backdrop-blur-[12px] shadow-[0_10px_30px_rgba(15,23,42,0.08)] flex items-center justify-center text-[#334155] hover:text-[#6366F1] transition-colors group relative overflow-hidden"
                    aria-label={social.label}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 to-[#3B82F6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {/* Services */}
              <div>
                <h4 className="font-heading font-extrabold text-xs sm:text-sm tracking-[0.15em] uppercase text-[#7C3AED] mb-8">
                  Services
                </h4>
                <ul className="space-y-4">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="group flex items-center gap-2 text-[#334155] hover:text-[#6366F1] text-base sm:text-lg font-medium transition-all duration-300"
                      >
                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                        <span>{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-heading font-extrabold text-xs sm:text-sm tracking-[0.15em] uppercase text-[#7C3AED] mb-8">
                  Company
                </h4>
                <ul className="space-y-4">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="group flex items-center gap-2 text-[#334155] hover:text-[#6366F1] text-base sm:text-lg font-medium transition-all duration-300"
                      >
                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                        <span>{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div className="col-span-2 sm:col-span-1">
                <h4 className="font-heading font-extrabold text-xs sm:text-sm tracking-[0.15em] uppercase text-[#7C3AED] mb-8">
                  Support
                </h4>
                <ul className="space-y-4">
                  {footerLinks.support.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="group flex items-center gap-2 text-[#334155] hover:text-[#6366F1] text-base sm:text-lg font-medium transition-all duration-300"
                      >
                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                        <span>{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full my-12" style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.15), transparent)' }} />

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3 text-[#475569] text-base sm:text-lg font-medium">
              <Shield size={20} className="text-[#8B5CF6]" />
              <p>© 2024 Rudrifix. All rights reserved.</p>
            </div>
            
            <a 
              href="mailto:hello@rudrifix.com" 
              className="flex items-center gap-3 text-[#334155] hover:text-[#6366F1] text-base sm:text-lg font-medium group transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center group-hover:bg-[#8B5CF6]/20 transition-colors">
                <Mail size={18} className="text-[#8B5CF6]" />
              </div>
              <span className="border-b border-transparent group-hover:border-[#6366F1] transition-all">hello@rudrifix.com</span>
            </a>

            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-[12px] border border-[rgba(99,102,241,0.1)] flex items-center justify-center text-[#64748B] hover:text-[#8B5CF6] hover:border-[#8B5CF6]/30 shadow-lg hover:shadow-[#8B5CF6]/20 transition-all duration-500"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
