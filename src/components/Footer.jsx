import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Facebook, Linkedin, Mail, Shield, ChevronRight, Target } from 'lucide-react'

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
  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative py-12 px-6 overflow-hidden">
      {/* SaaS Background Style - EXACT AS REQUESTED */}
      <div className="absolute inset-0 z-0" style={{
        background: `
          radial-gradient(circle at top left, rgba(124,77,255,0.08), transparent 30%),
          radial-gradient(circle at right, rgba(91,140,255,0.08), transparent 30%),
          #F5F7FF
        `
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start pb-10 border-b border-saas-border">

          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-8">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white shadow-lg shadow-brand-purple/10 flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                <img src="/rudrifix logo.webp" alt="Rudrifix" className="w-full h-auto" />
              </div>
              <span className="font-heading font-black text-xl text-black tracking-tighter">Rudrifix</span>
            </a>

            <p className="text-black text-sm font-medium leading-relaxed max-w-sm">
              We engineer high-performance marketing infrastructure for brands that demand explosive growth and a premium digital presence.
            </p>

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

          {/* Link Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
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
                            onPrivacyClick()
                          } else if (link.name === 'Terms & Conditions') {
                            e.preventDefault()
                            onTermsClick()
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
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex items-center justify-center border-t border-saas-border/10">
          <p className="text-[10px] font-black text-black/40 uppercase tracking-[0.4em] text-center">
            © 2026 Rudrifix. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
