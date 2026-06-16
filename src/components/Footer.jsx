import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram, Facebook, Linkedin, Mail, Shield, ChevronRight, Target, Phone, ChevronDown } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Website Development', href: '#services' },
    { name: 'Meta Ads Scaling', href: '#services' },
    { name: 'Branding & Design', href: '#services' },
    { name: 'Content Creation', href: '#services' },
  ],
  company: [
    { name: 'Home', href: '#home' },
    { name: 'Audit tool', href: '#audit' },
    { name: 'Work', href: '#work' },
    { name: 'Budget Planner', href: '#planner' },
  ],
  support: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-and-conditions' },
  ],
}

const socials = [
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61580568705126' },
  { icon: Instagram, href: 'https://www.instagram.com/rudrifix' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/rudrifix-041367406/' },
  { icon: Mail, href: 'mailto:rudrifix@gmail.com' },
]

export default function Footer({ onPrivacyClick, onTermsClick }) {
  const [openSection, setOpenSection] = useState(null)

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative py-8 px-4 md:py-12 md:px-6 overflow-hidden">
      {/* SaaS Background Style - EXACT AS REQUESTED */}
      <div className="absolute inset-0 z-0" style={{
        background: `
          radial-gradient(circle at top left, rgba(59,130,246,0.08), transparent 30%),
          radial-gradient(circle at right, rgba(96,165,250,0.08), transparent 30%),
          #F0F9FF
        `
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 items-start pb-8 md:pb-10 border-b border-saas-border">

          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 group">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white shadow-xl shadow-blue-500/10 flex items-center justify-center p-2 md:p-3 group-hover:scale-110 transition-transform">
                <img src="/rudrifix logo.webp" alt="Rudrifix" className="w-full h-auto object-contain" />
              </div>

            </a>

            <p className="text-black text-sm font-medium leading-relaxed max-w-sm">
              We engineer high-performance marketing infrastructure for brands that demand explosive growth and a premium digital presence.
            </p>

            <div className="flex flex-col gap-3">
              <a href="tel:+918300227525" className="flex items-center gap-2 text-black/70 hover:text-brand-purple transition-colors text-sm font-bold w-fit">
                <Phone size={16} />
                +91 8300227525
              </a>
              <a href="tel:+919487816005" className="flex items-center gap-2 text-black/70 hover:text-brand-purple transition-colors text-sm font-bold w-fit">
                <Phone size={16} />
                +91 94878 16005
              </a>
            </div>

            <div className="flex gap-3">
              {socials.map((soc, i) => (
                <a
                  key={i}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white border border-saas-border flex items-center justify-center text-black/60 hover:text-brand-purple hover:border-brand-purple/30 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <soc.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns Desktop */}
          <div className="hidden md:grid lg:col-span-7 grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-black/60">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          if (link.name === 'Privacy Policy') {
                            e.preventDefault()
                            if (onPrivacyClick) {
                              onPrivacyClick()
                            }
                          } else if (link.name === 'Terms & Conditions') {
                            e.preventDefault()
                            if (onTermsClick) {
                              onTermsClick()
                            }
                          } else {
                            handleNavClick(e, link.href)
                          }
                        }}
                        className="text-black/70 hover:text-brand-purple hover:translate-x-1 text-sm font-bold transition-all duration-300 block relative group/link w-fit"
                      >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all duration-300 group-hover/link:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Link Columns Mobile Accordion */}
          <div className="md:hidden lg:col-span-7 flex flex-col gap-3 mt-4">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="bg-white rounded-xl border border-saas-border shadow-sm overflow-hidden">
                <button 
                  onClick={() => setOpenSection(openSection === title ? null : title)}
                  className="w-full flex items-center justify-between p-4"
                >
                  <span className="text-sm font-bold text-black capitalize">{title}</span>
                  <ChevronDown size={18} className={`text-black/60 transition-transform duration-300 ${openSection === title ? 'rotate-180' : ''}`} />
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out ${openSection === title ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <ul className="px-4 pb-4 space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          onClick={(e) => {
                            if (link.name === 'Privacy Policy') {
                              e.preventDefault()
                              if (onPrivacyClick) {
                                onPrivacyClick()
                              }
                            } else if (link.name === 'Terms & Conditions') {
                              e.preventDefault()
                              if (onTermsClick) {
                                onTermsClick()
                              }
                            } else {
                              handleNavClick(e, link.href)
                            }
                          }}
                          className="text-black/70 hover:text-brand-purple text-sm font-bold transition-all duration-300 block w-fit"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 flex items-center justify-center border-t border-saas-border/10">
          <p className="text-[10px] font-black text-black/40 uppercase tracking-[0.4em] text-center">
            © 2026 Rudrifix. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
