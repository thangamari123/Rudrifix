import React, { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Zap, BarChart3, Users, Megaphone, ChevronRight, ExternalLink, Shield } from 'lucide-react'
import { useInView } from '../hooks/useInView'

/* ─── 4 Portfolio Cards ─── */
const projects = [
  {
    id: 1,
    category: 'Healthcare',
    title: 'Tooth & Smile Dental Clinic',
    desc: 'A modern, patient-focused website for a premier dental clinic. Features seamless online appointment booking and clear service overviews.',
    metric: '3× More Bookings',
    subMetric: '#1 Local SEO Rank',
    icon: Shield,
    image: '/website-project.png',
    gradient: 'from-blue-600 to-cyan-500',
    accentLight: 'bg-blue-50',
    accentBorder: 'border-blue-100',
    accentIcon: 'text-blue-600',
    tag: 'Clinic',
    link: 'https://www.toothandsmile.in',
  },
  {
    id: 2,
    category: 'ISP Solutions',
    title: 'RSPL Internet Services',
    desc: 'A high-performance digital portal for an Internet Service Provider. Designed for seamless plan browsing and quick customer onboarding.',
    metric: '2× Faster Onboarding',
    subMetric: 'High Conversions',
    icon: Zap,
    image: '/RSPL-website.png',
    gradient: 'from-violet-600 to-blue-600',
    accentLight: 'bg-violet-50',
    accentBorder: 'border-violet-100',
    accentIcon: 'text-violet-600',
    tag: 'Telecom',
    link: 'https://rspl-website.pages.dev/',
  },
  {
    id: 3,
    category: 'Healthcare',
    title: 'Arun Ortho Clinic',
    desc: 'A dedicated healthcare website for an orthopaedic clinic. Focuses on easy patient navigation, doctor profiles, and quick appointments.',
    metric: '40% More Enquiries',
    subMetric: 'Enhanced Trust',
    icon: Users,
    image: '/ortho-clinic-website.png',
    gradient: 'from-emerald-500 to-teal-500',
    accentLight: 'bg-emerald-50',
    accentBorder: 'border-emerald-100',
    accentIcon: 'text-emerald-600',
    tag: 'Clinic',
    link: 'https://arun-ortho-main.pages.dev/',
  },
  {
    id: 4,
    category: 'Industrial',
    title: 'Weldtech Solutions',
    desc: 'A professional corporate website for an industrial welding company. Designed to showcase equipment, services, and generate B2B leads.',
    metric: 'Global Reach',
    subMetric: 'B2B Lead Gen',
    icon: Megaphone,
    image: '/weldtech-website.png',
    gradient: 'from-pink-500 to-orange-400',
    accentLight: 'bg-pink-50',
    accentBorder: 'border-pink-100',
    accentIcon: 'text-pink-500',
    tag: 'Corporate',
    link: 'https://www.weldtechsolution.com/',
  },
]

/* ─── Single compact card with Browser Mockup ─── */
function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-[24px] border border-gray-200 shadow-xl shadow-gray-200/30 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/15 group overflow-hidden">
      
      {/* ── Image Area: Browser Mockup ── */}
      <div className="bg-gray-50/80 border-b border-gray-100 p-4 sm:p-6 flex flex-col items-center justify-center relative overflow-hidden">
         {/* Background gradient blob */}
         <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${project.gradient}`} />
         
         {/* Category Badge */}
         <div className="absolute top-4 right-4 z-10">
           <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-gradient-to-r ${project.gradient} text-white shadow-sm`}>
             {project.category}
           </span>
         </div>
         
         {/* Browser Frame */}
         <div className="w-full bg-white rounded-t-xl rounded-b-lg shadow-lg border border-gray-200/80 overflow-hidden flex flex-col relative z-10 transition-transform duration-500 group-hover:scale-[1.03]">
           {/* Browser dots */}
           <div className="h-6 bg-gray-100/80 border-b border-gray-200/80 flex items-center px-3 gap-1.5 shrink-0 backdrop-blur-sm">
             <div className="w-2 h-2 rounded-full bg-rose-400 border border-rose-500/20"></div>
             <div className="w-2 h-2 rounded-full bg-amber-400 border border-amber-500/20"></div>
             <div className="w-2 h-2 rounded-full bg-emerald-400 border border-emerald-500/20"></div>
           </div>
           {/* Image: proper fit fully, small, perfect size */}
           <div className="w-full h-40 sm:h-44 bg-white flex items-center justify-center p-2 relative">
             <img
               src={project.image}
               alt={project.title}
               className="max-w-full max-h-full object-contain"
               loading="lazy"
             />
           </div>
         </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 bg-white">
        <h3 className="text-xl font-black text-[#0F172A] mb-2 leading-tight group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
          {project.desc}
        </p>

        {/* Metrics */}
        <div className="flex items-center justify-between mb-6">
           <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${project.accentLight} border ${project.accentBorder}`}>
             <Zap size={14} className={project.accentIcon} />
             <span className="font-bold text-[#0F172A] text-xs">{project.metric}</span>
           </div>
        </div>

        {/* Button */}
        <a 
          href={project.link || '#'} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3.5 bg-gray-900 text-white font-bold rounded-xl text-sm transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 mt-auto"
        >
          View Live Website
          <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const scrollRef = useRef(null)

  // Automatic sliding for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current && window.innerWidth < 1024) { // Only auto-slide on mobile/tablet
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // If reached the end, scroll back to start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll by one card width
          scrollRef.current.scrollBy({ left: clientWidth * 0.85 + 20, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="work"
      className="relative overflow-hidden py-16 sm:py-24"
      style={{ background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 45%, #DBEAFE 100%)' }}
    >
      {/* BG blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-violet-100/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>

        {/* ── Header ── */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 border border-white/80 shadow-sm mb-5"
          >
            <span className="text-blue-600 text-xs font-black uppercase tracking-widest">Our Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-[#0F172A] leading-[1.05] mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)', letterSpacing: '-0.05em' }}
          >
            Completed <span className="gradient-text-saas">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18 }}
            className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto"
          >
            A selection of high-performing websites we've built to help our clients grow and succeed online.
          </motion.p>
        </div>

        {/* ── Layout: Mobile Auto-Scroll / Desktop Proper Grid ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          ref={scrollRef}
          className="flex overflow-x-auto pb-8 -mx-4 px-4 gap-5 snap-x snap-mandatory lg:grid lg:grid-cols-2 lg:max-w-5xl lg:mx-auto lg:overflow-visible lg:pb-0 lg:px-0 lg:gap-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className="min-w-[85vw] md:min-w-[45vw] lg:min-w-0 snap-center h-full flex flex-col"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm shadow-xl hover:shadow-blue-300/40 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
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
