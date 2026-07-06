import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About Us', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    megaMenu: [
      {
        category: 'Tech & Dev',
        items: [
          { name: 'Web Development', href: '/web-development' },
          { name: 'App Development', href: '/app-development' },
          { name: 'UI/UX Design', href: '/ui-ux-design' },
          { name: 'Custom SaaS CRM', href: '/custom-saas-crm' },
          { name: 'Automation Tools', href: '/automation-tools' }
        ]
      },
      {
        category: 'Creative & Design',
        items: [
          { name: 'Creative Design', href: '/creative-design' },
          { name: 'Branding', href: '/branding' },
          { name: 'Video Editing', href: '/video-editing' },
          { name: 'Photography', href: '/photography' },
          { name: 'Reels & Shorts', href: '/reels-shorts' }
        ]
      },
      {
        category: 'Organic Marketing',
        items: [
          { name: 'SEO Services', href: '/seo-services' },
          { name: 'Local SEO', href: '/local-seo' },
          { name: 'Social Media', href: '/social-media-marketing' },
          { name: 'Content Marketing', href: '/content-marketing' },
          { name: 'Content Strategy', href: '/content-strategy' }
        ]
      },
      {
        category: 'Paid Marketing',
        items: [
          { name: 'Google Ads', href: '/google-ads-management' },
          { name: 'Meta Ads', href: '/meta-ads-management' },
          { name: 'LinkedIn Ads', href: '/linkedin-ads' },
          { name: 'YouTube Ads', href: '/youtube-ads' },
          { name: 'Lead Gen', href: '/lead-gen' },
          { name: 'E-commerce Solutions', href: '/ecommerce-solutions' }
        ]
      }
    ]
  },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const location = useLocation()
  const [activeSection, setActiveSection] = useState('/#home')

  useEffect(() => {
    if (location.hash) {
      setActiveSection('/' + location.hash)
    } else if (location.pathname === '/') {
      setActiveSection('/#home')
    } else {
      setActiveSection(location.pathname)
    }
  }, [location])

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [location])

  const handleNavClick = (e, href) => {
    setIsOpen(false)
    setActiveSection(href)
    
    if (href.includes('#')) {
      const hash = href.substring(href.indexOf('#'))
      if (location.pathname === '/') {
        e.preventDefault()
        const id = hash.replace('#', '')
        if (id === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
          const element = document.getElementById(id)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }
        window.history.pushState(null, '', href)
      }
    }
  }

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-7xl bg-white/95 backdrop-blur-xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl px-4 py-3 md:px-6 md:py-4 transition-all duration-300">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <Link to="/#home" className="flex items-center gap-3 group" onClick={(e) => handleNavClick(e, '/#home')}>
            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shadow-md shadow-blue-500/10 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/rudrifix logo.webp"
                alt="Rudrifix Logo"
                className="w-full h-full object-cover"
                fetchpriority="high"
                loading="eager"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = '#6366f1';
                  e.target.parentElement.innerHTML = '<span class="text-white font-bold text-xs">Rx</span>';
                }}
              />
            </div>
            <span className="font-bold text-xl text-gray-800 tracking-tight hidden sm:block">Rudrifix</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href || (link.megaMenu && link.megaMenu.some(col => col.items.some(sub => activeSection === sub.href)));
              
              if (link.megaMenu) {
                return (
                  <div key={link.name} className="relative group py-2">
                    <Link
                      to={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="flex items-center gap-1"
                    >
                      <span className={`text-[15px] font-medium transition-colors duration-300 ${isActive ? 'text-blue-600' : 'text-gray-500 hover:text-gray-800'}`}>
                        {link.name}
                      </span>
                      <ChevronDown size={14} className={`transition-transform duration-300 group-hover:rotate-180 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
                    </Link>
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-blue-600 rounded-t-full" />
                    )}

                    {/* Mega Menu Dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max max-w-[90vw] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top group-hover:translate-y-0 translate-y-2">
                      <div className="bg-white rounded-2xl shadow-2xl shadow-blue-900/10 border border-gray-100 p-6 flex gap-8 relative before:absolute before:-top-2 before:left-0 before:right-0 before:h-2 before:bg-transparent">
                        {link.megaMenu.map((column) => (
                          <div key={column.category} className="w-48">
                            <h4 className="text-sm font-bold text-gray-900 mb-3 border-b border-gray-100 pb-2">{column.category}</h4>
                            <div className="flex flex-col gap-1">
                              {column.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  onClick={(e) => handleNavClick(e, subItem.href)}
                                  className="px-2 py-1.5 rounded-lg text-sm font-medium text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative group py-2"
                >
                  <span className={`text-[15px] font-medium transition-colors duration-300 ${isActive ? 'text-blue-600' : 'text-gray-500 hover:text-gray-800'}`}>
                    {link.name}
                  </span>
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-blue-600 rounded-t-full" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              onClick={(e) => handleNavClick(e, '/contact')}
              className="hidden md:flex items-center gap-3 bg-[#6366f1] text-white pl-6 pr-1.5 py-1.5 rounded-full hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 group"
            >
              <span className="font-medium text-[15px]">Book Consultation</span>
              <div className="bg-white rounded-full p-1.5 transition-transform group-hover:translate-x-0.5">
                <ArrowRight size={16} className="text-[#6366f1]" />
              </div>
            </Link>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-800 p-2 rounded-lg hover:bg-gray-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-y-auto overflow-x-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[80vh] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-2 pt-2 pb-4 border-t border-gray-100">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href || (link.megaMenu && link.megaMenu.some(col => col.items.some(sub => activeSection === sub.href)));
              
              if (link.megaMenu) {
                return (
                  <div key={link.name} className="flex flex-col">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {link.name}
                      <ChevronDown size={18} className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-[1200px] mt-1' : 'max-h-0'}`}>
                      <div className="flex flex-col gap-5 pl-4 border-l-2 border-blue-100 ml-6 py-4">
                        {link.megaMenu.map((column) => (
                          <div key={column.category}>
                            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">{column.category}</h4>
                            <div className="flex flex-col gap-1">
                              {column.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  onClick={(e) => handleNavClick(e, subItem.href)}
                                  className={`py-1.5 rounded-lg text-sm font-medium transition-all ${
                                    activeSection === subItem.href ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'
                                  }`}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
            <Link
              to="/contact"
              onClick={(e) => handleNavClick(e, '/contact')}
              className="mt-2 flex items-center justify-between bg-[#6366f1] text-white px-5 py-3 rounded-xl font-medium active:scale-95 transition-transform"
            >
              <span>Book Consultation</span>
              <div className="bg-white rounded-full p-1">
                <ArrowRight size={16} className="text-[#6366f1]" />
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
