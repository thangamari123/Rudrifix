import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Globe, ShoppingCart, Database, Smartphone, Bot, 
  Layout, Palette, Video, Camera, Film, Hexagon,
  Search, PenTool, Share2, MapPin, Target,
  MousePointerClick, Megaphone, MonitorPlay, Linkedin, Users, RefreshCw, LineChart,
  ArrowRight, ChevronLeft, ChevronRight, Grid, Layers, CheckCircle2
} from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { Link } from 'react-router-dom'

const categories = [
  { id: 'tech', label: 'Tech & Dev' },
  { id: 'design', label: 'Creative & Design' },
  { id: 'organic', label: 'Organic Marketing' },
  { id: 'paid', label: 'Paid Marketing' }
]

const servicesData = {
  tech: [
    { title: 'Website Development', desc: 'Custom responsive websites designed for speed, performance, and seamless user experiences across all devices.', icon: Globe, link: '/web-development' },
    { title: 'E-Commerce Solutions', desc: 'Complete online store development with payment gateway integration, inventory management, order tracking, and secure checkout systems.', icon: ShoppingCart, link: '/ecommerce-solutions' },
    { title: 'Custom SaaS & CRM', desc: 'Tailor-made software solutions, CRM platforms, ERP systems, and business automation tools designed to streamline operations and improve productivity.', icon: Database, link: '/custom-saas-crm' },
    { title: 'App Development', desc: 'Scalable mobile and web applications with modern UI, robust functionality, and high-performance architecture.', icon: Smartphone, link: '/app-development' },
    { title: 'Automation Tools', desc: 'Workflow automation, AI-powered solutions, API integrations, and process optimization to reduce manual effort and increase efficiency.', icon: Bot, link: '/automation-tools' }
  ],
  design: [
    { title: 'UI/UX Design', desc: 'User-focused interface and experience design that enhances usability, engagement, accessibility, and conversion rates.', icon: Layout, link: '/ui-ux-design' },
    { title: 'Creative Design', desc: 'Professional poster design, social media creatives, banners, brochures, flyers, and marketing materials.', icon: Palette, link: '/creative-design' },
    { title: 'Video Editing & Motion Graphics', desc: 'High-quality editing for promotional videos, advertisements, reels, shorts, and branded content.', icon: Video, link: '/video-editing' },
    { title: 'Photography & Videography', desc: 'Professional on-site photo and video shoots using high-end cameras, lighting setups, and audio equipment.', icon: Camera, link: '/photography' },
    { title: 'Reels & Short-Form Content', desc: 'Creation of engaging Instagram Reels, YouTube Shorts, Facebook Reels, and other short-form content.', icon: Film, link: '/reels-shorts' },
    { title: 'Branding & Visual Identity', desc: 'Logo implementation, brand guidelines, visual consistency, and brand positioning across digital platforms.', icon: Hexagon, link: '/branding' }
  ],
  organic: [
    { title: 'Search Engine Optimization', desc: 'Improve website rankings, increase organic traffic, and enhance online visibility through strategic optimization.', icon: Search, link: '/seo-services' },
    { title: 'Content Marketing', desc: 'Professional content creation, blog writing, website copywriting, and brand storytelling that attracts and engages audiences.', icon: PenTool, link: '/content-marketing' },
    { title: 'Social Media Management', desc: 'Content planning, scheduling, publishing, audience engagement, community management, and growth strategies.', icon: Share2, link: '/social-media-marketing' },
    { title: 'Local SEO & Profiles', desc: 'Google Business Profile optimization and local search strategies to improve regional visibility.', icon: MapPin, link: '/local-seo' },
    { title: 'Content Strategy & Planning', desc: 'Monthly content calendars, campaign planning, audience research, and performance tracking.', icon: Target, link: '/content-strategy' }
  ],
  paid: [
    { title: 'Google Ads', desc: 'Search, Display, Shopping, and Performance Max campaigns focused on generating quality leads and sales.', icon: MousePointerClick, link: '/google-ads-management' },
    { title: 'Meta Ads', desc: 'Targeted Facebook and Instagram advertising campaigns designed to increase reach, engagement, and conversions.', icon: Megaphone, link: '/meta-ads-management' },
    { title: 'YouTube Advertising', desc: 'Video ad campaigns that build brand awareness and generate qualified traffic.', icon: MonitorPlay, link: '/youtube-ads' },
    { title: 'LinkedIn Advertising', desc: 'B2B-focused campaigns for lead generation, recruitment, and professional brand growth.', icon: Linkedin, link: '/linkedin-ads' },
    { title: 'Lead Gen Campaigns', desc: 'Strategic advertising funnels designed to attract, nurture, and convert potential customers.', icon: Users, link: '/lead-gen' },
    { title: 'Remarketing & Retargeting', desc: 'Re-engage website visitors and previous customers to maximize conversion opportunities.', icon: RefreshCw, link: '/remarketing' },
    { title: 'Performance Analytics', desc: 'Continuous monitoring, reporting, A/B testing, and campaign optimization to improve ROI.', icon: LineChart, link: '/performance-analytics' }
  ]
}

const allServices = [
  ...servicesData.tech,
  ...servicesData.design,
  ...servicesData.organic,
  ...servicesData.paid
]

export default function Services() {
  const [ref, isInView] = useInView({ threshold: 0.05 })
  const [activeTab, setActiveTab] = useState('tech')
  const [activeSlide, setActiveSlide] = useState(0)
  const [mobileView, setMobileView] = useState('carousel') // 'carousel' | 'grid'
  const mobileSliderRef = useRef(null)

  const currentServices = servicesData[activeTab] || []

  const handleMobileScroll = (e) => {
    const { scrollLeft, clientWidth } = e.target
    if (clientWidth > 0) {
      const cardWidth = clientWidth * 0.84 + 14
      const newIndex = Math.round(scrollLeft / cardWidth)
      setActiveSlide(Math.max(0, Math.min(newIndex, currentServices.length - 1)))
    }
  }

  const scrollToSlide = (index) => {
    if (mobileSliderRef.current) {
      const cardWidth = mobileSliderRef.current.clientWidth * 0.84 + 14
      mobileSliderRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' })
      setActiveSlide(index)
    }
  }

  const handleTabChange = (catId) => {
    setActiveTab(catId)
    setActiveSlide(0)
    if (mobileSliderRef.current) {
      mobileSliderRef.current.scrollTo({ left: 0, behavior: 'instant' })
    }
  }

  return (
    <section id="services" className="relative overflow-hidden bg-[#F8FAFC] py-14 sm:py-20 md:py-24 border-t border-slate-100">
      {/* Subtle Corporate Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.15) 1px, transparent 0)', 
          backgroundSize: '40px 40px' 
        }} 
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[140px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-[130px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>

        {/* ═══ Section Header ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs mb-3.5">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold text-blue-800 tracking-wider uppercase">Our Capabilities</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">Digital Solutions</span>
          </h2>
        </motion.div>

        {/* ═══ Segmented Category Controller ═══ */}
        <div className="flex justify-center mb-6 sm:mb-10">
          <div className="inline-flex p-1 sm:p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm max-w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id
              const count = servicesData[cat.id]?.length || 0
              return (
                <button
                  key={cat.id}
                  onClick={() => handleTabChange(cat.id)}
                  className={`px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] sm:text-xs px-1.5 py-0.2 rounded-full font-bold transition-colors ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* ═══ Mobile Header View Switcher (Visible only on Mobile) ═══ */}
        <div className="flex md:hidden items-center justify-between px-1 mb-3.5">
          <span className="text-xs font-bold text-slate-500 tracking-wide uppercase flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            {categories.find(c => c.id === activeTab)?.label} ({currentServices.length})
          </span>
          <div className="inline-flex p-0.5 rounded-lg bg-white border border-slate-200 shadow-xs">
            <button
              onClick={() => setMobileView('carousel')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1 transition-all ${
                mobileView === 'carousel' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers size={13} />
              <span>Card Deck</span>
            </button>
            <button
              onClick={() => setMobileView('grid')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1 transition-all ${
                mobileView === 'grid' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Grid size={13} />
              <span>Grid</span>
            </button>
          </div>
        </div>

        {/* ═══ MOBILE PRESENTATION (md:hidden) ═══ */}
        <div className="block md:hidden mb-4">
          <AnimatePresence mode="wait">
            {mobileView === 'carousel' ? (
              /* Style 1: Corporate Mobile Card Deck Carousel */
              <motion.div
                key={`carousel-${activeTab}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                {/* Horizontal Snap Rail */}
                <div
                  ref={mobileSliderRef}
                  onScroll={handleMobileScroll}
                  className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory pt-1 pb-3 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                  {currentServices.map((service, idx) => {
                    const Icon = service.icon
                    return (
                      <div
                        key={service.title}
                        className="w-[84vw] max-w-[320px] snap-center shrink-0 bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between relative overflow-hidden"
                      >
                        {/* Top Accent Line */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600" />

                        <div>
                          {/* Top Meta Bar */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-11 h-11 rounded-xl bg-blue-50/80 border border-blue-100 text-blue-600 flex items-center justify-center shadow-xs">
                              <Icon size={20} strokeWidth={2} />
                            </div>
                            <span className="text-[11px] font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                              {String(idx + 1).padStart(2, '0')} / {String(currentServices.length).padStart(2, '0')}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-base font-bold text-slate-900 leading-snug mb-2">
                            {service.title}
                          </h3>

                          {/* Description */}
                          <p className="text-xs text-slate-600 leading-relaxed mb-5 line-clamp-3">
                            {service.desc}
                          </p>
                        </div>

                        {/* CTA Link */}
                        <Link
                          to={service.link}
                          className="w-full py-2.5 px-4 bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-sm active:scale-95"
                        >
                          <span>Explore Solution</span>
                          <ArrowRight size={13} />
                        </Link>
                      </div>
                    )
                  })}
                </div>

                {/* Carousel Controls: Dots & Navigation Arrows */}
                <div className="flex items-center justify-between pt-3 px-2">
                  <div className="flex items-center gap-1.5">
                    {currentServices.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => scrollToSlide(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          activeSlide === i ? 'w-5 bg-blue-600' : 'w-1.5 bg-slate-300'
                        }`}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
                      disabled={activeSlide === 0}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed shadow-xs active:scale-95"
                      aria-label="Previous service"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() => scrollToSlide(Math.min(currentServices.length - 1, activeSlide + 1))}
                      disabled={activeSlide === currentServices.length - 1}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed shadow-xs active:scale-95"
                      aria-label="Next service"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Style 2: Compact Corporate 2-Column Bento Grid */
              <motion.div
                key={`grid-${activeTab}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-2 gap-2.5 px-0.5"
              >
                {currentServices.map((service, idx) => {
                  const Icon = service.icon
                  return (
                    <Link
                      key={service.title}
                      to={service.link}
                      className="bg-white rounded-xl p-3.5 border border-slate-200/90 shadow-xs flex flex-col justify-between active:scale-[0.98] transition-transform"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2.5">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100/80">
                            <Icon size={16} strokeWidth={2} />
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 font-bold">
                            #{String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>

                        <h3 className="font-bold text-xs text-slate-900 leading-tight mb-1 line-clamp-2">
                          {service.title}
                        </h3>

                        <p className="text-[11px] text-slate-500 leading-snug line-clamp-2 mb-2">
                          {service.desc}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex items-center text-[10px] font-bold text-blue-600">
                        <span>Details</span>
                        <ArrowRight size={11} className="ml-1" />
                      </div>
                    </Link>
                  )
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ═══ DESKTOP PRESENTATION (hidden md:block) ═══ */}
        <div className="hidden md:block min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
            >
              {currentServices.map((service, idx) => {
                const Icon = service.icon
                return (
                  <Link
                    key={service.title}
                    to={service.link}
                    className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-blue-500/50 shadow-xs hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 overflow-hidden"
                  >
                    {/* Top Corporate Line Accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      {/* Top Meta Bar */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shadow-xs">
                          <Icon size={22} strokeWidth={2} />
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-blue-600 transition-colors tracking-widest">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5 leading-snug">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                        {service.desc}
                      </p>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                      <span className="text-xs font-bold text-blue-600 flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                        Explore Solution
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60 flex items-center gap-1">
                        <CheckCircle2 size={10} className="text-emerald-500" />
                        Enterprise
                      </span>
                    </div>
                  </Link>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ═══ Bottom Corporate Trust Footer ═══ */}
        <div className="mt-10 sm:mt-14 pt-8 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-900">Customized Enterprise Delivery</span> — Architecture, Development &amp; Managed Growth.
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 group"
          >
            <span>Request Custom Solution Architecture</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  )
}
