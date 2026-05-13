import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [pastHero, setPastHero] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      /* Check if navbar is over a light section */
      const lightSections = ['#home', '#services', '#whychoose', '#process', '#work', '#audit', '#planner', '#contact', '#cta']
      const scrollY = window.scrollY + 60 // account for navbar height
      let overLight = false
      for (const sel of lightSections) {
        const el = document.querySelector(sel)
        if (el) {
          const top = el.offsetTop
          const bottom = top + el.offsetHeight
          if (scrollY >= top && scrollY < bottom) {
            overLight = true
            break
          }
        }
      }
      setPastHero(!overLight)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  /* Dynamic classes based on scroll position */
  const isDark = pastHero
  const navBg = !scrolled
    ? 'bg-transparent'
    : isDark
      ? 'bg-[#050510]/90 backdrop-blur-xl shadow-2xl shadow-black/20'
      : 'nav-saas-scrolled'

  const linkColor = isDark ? 'text-white/70 hover:text-white' : 'text-slate-500 hover:text-slate-800'
  const linkHover = isDark ? 'hover:bg-white/5' : 'hover:bg-slate-100/60'
  const logoText = isDark ? 'text-white' : 'text-slate-800'
  const menuIcon = isDark ? 'text-white' : 'text-slate-700'
  const mobileBg = isDark ? 'bg-[#0D0B1E]/95 backdrop-blur-xl border-white/10' : 'bg-white/90 backdrop-blur-xl border-slate-200'
  const mobileLink = isDark ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg} ${scrolled ? 'py-3' : 'py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group" onClick={(e) => handleNavClick(e, '#home')}>
            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/30 transition-all duration-500 group-hover:scale-110">
              <img 
                src="/rudrifix logo.png" 
                alt="Rudrifix Logo" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #6366F1, #A855F7)';
                  e.target.parentElement.innerHTML = '<span class="text-white font-heading font-extrabold text-xs">Rx</span>';
                }}
              />
            </div>
            <span className={`${logoText} font-heading font-bold text-xl tracking-tight transition-colors duration-300`}>
              Rudri<span className="gradient-text-saas">fix</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`${linkColor} ${linkHover} px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="ml-4 px-6 py-2.5 text-white font-heading font-semibold text-sm rounded-full hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
              style={{ background: 'linear-gradient(135deg, #6366F1, #C084FC)' }}
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${menuIcon} p-2 rounded-lg transition-colors`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`${mobileBg} rounded-2xl border p-4 space-y-1`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block ${mobileLink} px-4 py-3 rounded-xl text-base font-medium transition-all`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="block text-center mt-3 px-6 py-3 text-white font-heading font-semibold rounded-full"
              style={{ background: 'linear-gradient(135deg, #6366F1, #C084FC)' }}
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
