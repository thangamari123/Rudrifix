import React, { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Zap, BarChart3, Users, Megaphone, ChevronRight, ExternalLink } from 'lucide-react'
import { useInView } from '../hooks/useInView'

/* ─── 4 Portfolio Cards ─── */
const projects = [
  {
    id: 1,
    category: 'Meta Ads',
    title: 'Interior Design Growth',
    desc: 'Scalable lead generation for premium interior services. We optimized creative sets and targeting to lower cost-per-lead by 40%.',
    metric: '120+ High-Quality Leads',
    subMetric: '40% Lower CPL',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop',
    gradient: 'from-purple-600 to-indigo-600',
    accentLight: 'bg-purple-50',
    accentBorder: 'border-purple-100',
    accentIcon: 'text-purple-600',
    tag: 'Ads',
  },
  {
    id: 2,
    category: 'Web Design',
    title: 'E-commerce Platform',
    desc: 'Modern, high-converting storefront for a local retail brand. Focused on speed, mobile UX, and seamless checkout experience.',
    metric: '200% Conversion Boost',
    subMetric: '3× Revenue Growth',
    icon: BarChart3,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    gradient: 'from-blue-600 to-cyan-500',
    accentLight: 'bg-blue-50',
    accentBorder: 'border-blue-100',
    accentIcon: 'text-blue-600',
    tag: 'Web',
  },
  {
    id: 3,
    category: 'Social Media',
    title: 'Brand Identity Campaign',
    desc: 'Organic growth and community building for a growing startup. Created a consistent visual language that tripled follower engagement.',
    metric: '5× Engagement Rate',
    subMetric: '10K+ New Followers',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=800&fit=crop',
    gradient: 'from-pink-500 to-orange-400',
    accentLight: 'bg-pink-50',
    accentBorder: 'border-pink-100',
    accentIcon: 'text-pink-500',
    tag: 'Social',
  },
  {
    id: 4,
    category: 'Digital Marketing',
    title: 'Restaurant Chain Scale',
    desc: 'Full-funnel digital marketing for a restaurant chain across Thoothukudi. Combined local SEO, Meta Ads, and content to double monthly footfall.',
    metric: '2× Monthly Footfall',
    subMetric: '₹4L+ Revenue Added',
    icon: Megaphone,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop',
    gradient: 'from-emerald-500 to-teal-500',
    accentLight: 'bg-emerald-50',
    accentBorder: 'border-emerald-100',
    accentIcon: 'text-emerald-600',
    tag: 'Growth',
  },
]

/* ─── Single slide card ─── */
function ProjectCard({ project, isActive }) {
  return (
    <div
      className={`relative bg-white/80 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/80 shadow-xl shadow-slate-200/40 flex flex-col h-full transition-all duration-500 ${isActive ? 'scale-100 opacity-100' : 'scale-[0.97] opacity-70'
        }`}
    >
      {/* Image */}
      <div className="relative h-52 sm:h-60 overflow-hidden shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[10px] font-black uppercase tracking-widest shadow">
            {project.category}
          </span>
        </div>

        {/* Tag pill top-right */}
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-gradient-to-r ${project.gradient} text-white shadow`}
          >
            {project.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-7">
        {/* Icon + label */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`w-9 h-9 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white shadow-md shrink-0`}
          >
            {React.createElement(project.icon, { size: 17 })}
          </div>
          <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Featured Work</span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] mb-3 tracking-tight leading-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-500 text-sm sm:text-[0.92rem] leading-relaxed mb-5 flex-1">
          {project.desc}
        </p>

        {/* Metrics row */}
        <div className="flex items-center gap-2 mb-5 flex-wrap">
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-xl ${project.accentLight} ${project.accentBorder} border`}
          >
            <Zap size={14} className={project.accentIcon} />
            <span className="font-black text-[#0F172A] text-sm">{project.metric}</span>
          </div>
          <div className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-100">
            <span className="font-bold text-slate-500 text-xs">{project.subMetric}</span>
          </div>
        </div>

        {/* CTA */}
        <button className="group w-full flex items-center justify-center gap-2 py-3 bg-[#0F172A] text-white font-bold rounded-2xl text-sm transition-all hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95">
          View Case Study
          <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const total = projects.length
  const autoRef = useRef(null)

  const go = useCallback(
    (idx) => {
      setDirection(idx > current ? 1 : -1)
      setCurrent(idx)
    },
    [current]
  )

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((p) => (p + 1) % total)
  }, [total])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((p) => (p - 1 + total) % total)
  }, [total])

  /* Auto-slide every 4.5s */
  useEffect(() => {
    autoRef.current = setInterval(next, 4500)
    return () => clearInterval(autoRef.current)
  }, [next])

  const pause = () => clearInterval(autoRef.current)
  const resume = () => {
    autoRef.current = setInterval(next, 4500)
  }

  /* Drag / swipe state */
  const dragStart = useRef(0)
  const onDragStart = (_, info) => { dragStart.current = info.point.x }
  const onDragEnd = (_, info) => {
    const delta = info.point.x - dragStart.current
    if (delta < -50) next()
    else if (delta > 50) prev()
  }

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? '60%' : '-60%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? '-60%' : '60%', opacity: 0 }),
  }

  return (
    <section
      id="work"
      className="relative overflow-hidden py-16 sm:py-24"
      style={{ background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 45%, #DBEAFE 100%)' }}
    >
      {/* BG blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-100/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-100/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>

        {/* ── Header ── */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 border border-white/80 shadow-sm mb-5"
          >
            <span className="text-indigo-600 text-xs font-black uppercase tracking-widest">Our Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-[#0F172A] leading-[1.05] mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)', letterSpacing: '-0.05em' }}
          >
            Designed To <span className="gradient-text-saas">Scale Businesses</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18 }}
            className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto"
          >
            Real results for real businesses — from local brands to growing e-commerce stores.
          </motion.p>
        </div>

        {/* ── Carousel ── */}
        <div className="relative" onMouseEnter={pause} onMouseLeave={resume}>

          {/* ─── MOBILE / TABLET: single card slide ─── */}
          <div className="block lg:hidden">
            <div className="relative overflow-hidden">
              <AnimatePresence mode="popLayout" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragStart={onDragStart}
                  onDragEnd={onDragEnd}
                  className="w-full cursor-grab active:cursor-grabbing select-none"
                >
                  <div className="max-w-md mx-auto sm:max-w-lg">
                    <ProjectCard project={projects[current]} isActive={true} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Swipe hint */}
            <p className="text-center text-slate-400 text-xs mt-4 select-none">
              ← swipe to explore →
            </p>
          </div>

          {/* ─── DESKTOP: show 2 cards + slide ─── */}
          <div className="hidden lg:block">
            <div className="relative overflow-hidden">
              <AnimatePresence mode="popLayout" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  className="grid grid-cols-2 gap-6"
                >
                  {[0, 1].map((offset) => {
                    const idx = (current + offset) % total
                    return (
                      <ProjectCard
                        key={projects[idx].id}
                        project={projects[idx]}
                        isActive={offset === 0}
                      />
                    )
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ── Prev / Next arrows ── */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 hover:shadow-indigo-200 transition-all duration-200 active:scale-90"
              aria-label="Previous"
            >
              <ArrowLeft size={18} />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-400 ${current === i ? 'w-8 bg-indigo-500' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 hover:shadow-indigo-200 transition-all duration-200 active:scale-90"
              aria-label="Next"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm shadow-xl hover:shadow-indigo-300/40 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
            style={{ background: 'linear-gradient(135deg, #6366F1, #A855F7)' }}
          >
            Start Your Project
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
