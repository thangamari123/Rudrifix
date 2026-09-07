import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, ExternalLink, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

/* ─── 4 Featured Home Portfolio Cards ─── */
const projects = [
  {
    id: 1,
    category: 'Tech & SaaS',
    title: 'RSPL Internet Services',
    desc: 'A high-performance digital portal for an Internet Service Provider. Designed for seamless plan browsing and quick customer onboarding.',
    metric: '2× Faster Onboarding',
    subMetric: 'High Conversions',
    icon: Zap,
    image: '/RSPL-website.png',
    tag: 'Telecom & ISP',
    link: 'https://rathnaaspectra.com/',
    cardBg: 'bg-[#F5F3FF]',
    cardBorder: 'border-[#DDD6FE]',
    hoverBorder: 'hover:border-violet-500',
    cardShadow: 'shadow-[#DDD6FE]/50',
    titleColor: 'text-[#3B0764]',
    descColor: 'text-[#6D28D9]',
    badgeStyle: 'bg-[#EDE9FE] text-[#5B21B6] border-[#DDD6FE]',
    metricStyle: 'bg-[#EDE9FE] text-[#6D28D9] border-[#DDD6FE]',
    tagStyle: 'bg-[#EDE9FE] text-[#5B21B6] border-[#DDD6FE]',
    buttonStyle: 'bg-[#6D28D9] hover:bg-[#5B21B6] text-white',
    dividerColor: 'border-[#DDD6FE]',
  },
  {
    id: 2,
    category: 'Healthcare',
    title: 'Tooth & Smile Dental Clinic',
    desc: 'A modern, patient-focused website for a premier dental clinic. Features seamless online appointment booking and clear service overviews.',
    metric: '3× More Bookings',
    subMetric: '#1 Local SEO Rank',
    icon: Shield,
    image: '/website-project.png',
    tag: 'Dental Clinic',
    link: 'https://www.toothandsmile.in',
    cardBg: 'bg-[#F0F9FF]',
    cardBorder: 'border-[#BAE6FD]',
    hoverBorder: 'hover:border-sky-500',
    cardShadow: 'shadow-[#BAE6FD]/50',
    titleColor: 'text-[#0C4A6E]',
    descColor: 'text-[#0369A1]',
    badgeStyle: 'bg-[#E0F2FE] text-[#0369A1] border-[#BAE6FD]',
    metricStyle: 'bg-[#E0F2FE] text-[#0284C7] border-[#BAE6FD]',
    tagStyle: 'bg-[#E0F2FE] text-[#0369A1] border-[#BAE6FD]',
    buttonStyle: 'bg-[#0284C7] hover:bg-[#0369A1] text-white',
    dividerColor: 'border-[#BAE6FD]',
  },
  {
    id: 3,
    category: 'E-Commerce',
    title: 'RasTime — Luxury Watches & Automatics',
    desc: 'High-end e-commerce destination for luxury timepieces, sports chronographs, and automatic watches with seamless checkout.',
    metric: '4.9★ Brand Rating',
    subMetric: 'Direct-to-Consumer',
    icon: Shield,
    image: '/rastime.webp',
    tag: 'Luxury Retail',
    link: 'https://rastime.com/',
    cardBg: 'bg-[#F8F4EC]',
    cardBorder: 'border-[#E5DEC9]',
    hoverBorder: 'hover:border-[#C6A974]',
    cardShadow: 'shadow-[#E5DEC9]/40',
    titleColor: 'text-[#2C2314]',
    descColor: 'text-[#685942]',
    badgeStyle: 'bg-[#ECE4D0] text-[#3B2F18] border-[#DDD3B9]',
    metricStyle: 'bg-[#EFE9DA] text-[#42341A] border-[#DDD3B9]',
    tagStyle: 'bg-[#EFE9DA] text-[#554323] border-[#DDD3B9]',
    buttonStyle: 'bg-[#211B10] hover:bg-[#8B6B2B] text-white',
    dividerColor: 'border-[#E5DEC9]',
  },
  {
    id: 4,
    category: 'Hardware & B2B',
    title: 'VEERAAM TECH — LED Video Wall Solutions',
    desc: "Corporate portal for India's trusted LED display manufacturer, showcasing control rooms, digital signage, and lead capture systems.",
    metric: '500+ Installations',
    subMetric: 'Pan-India Reach',
    icon: Zap,
    image: '/veeraamtech.webp',
    tag: 'LED Displays',
    link: 'https://veeraamtech.in/',
    cardBg: 'bg-[#04153B]',
    cardBorder: 'border-[#0D2866]',
    hoverBorder: 'hover:border-blue-400',
    cardShadow: 'shadow-blue-950/60',
    titleColor: 'text-white',
    descColor: 'text-blue-100/80',
    badgeStyle: 'bg-[#0A225C] text-blue-200 border-[#153994]',
    metricStyle: 'bg-[#0A225C] text-cyan-300 border-[#153994]',
    tagStyle: 'bg-[#0A225C] text-blue-200 border-[#153994]',
    buttonStyle: 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/50',
    dividerColor: 'border-[#0D2866]',
  },
]

/* ─── Compact Card with Original Brand Colors ─── */
function ProjectCard({ project }) {
  return (
    <div
      className={`group ${project.cardBg} rounded-2xl border ${project.cardBorder} ${project.hoverBorder} shadow-md ${project.cardShadow} hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full overflow-hidden`}
    >
      {/* Visual Preview */}
      <div className={`relative aspect-[16/10] ${project.cardBg} overflow-hidden border-b ${project.dividerColor}`}>
        {/* Live Indicator */}
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500 text-white shadow-sm backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Live
          </span>
        </div>

        {/* Main Image with Hover Zoom */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Quick View overlay on desktop hover */}
        <a
          href={project.link || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-bold text-xs backdrop-blur-[2px] z-20"
          aria-label={`Open ${project.title} in a new tab`}
        >
          <span className="px-3.5 py-2 bg-white text-slate-900 rounded-full font-bold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 hover:scale-105">
            Visit Website
            <ExternalLink size={14} className="text-blue-600" />
          </span>
        </a>
      </div>

      {/* Card Content with matching theme background */}
      <div className={`p-4 sm:p-5 flex flex-col flex-1 ${project.cardBg}`}>
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3
            className={`text-base sm:text-lg font-bold ${project.titleColor} transition-colors line-clamp-1`}
            title={project.title}
          >
            {project.title}
          </h3>
        </div>

        <p className={`${project.descColor} text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2 flex-1`}>
          {project.desc}
        </p>

        {/* Metric & Category Row */}
        <div className={`flex items-center justify-between gap-2 pt-3 border-t ${project.dividerColor} mb-4 text-xs`}>
          <div className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md font-bold shadow-xs border text-[11px] sm:text-xs ${project.metricStyle}`}>
            <Zap size={13} />
            <span>{project.metric}</span>
          </div>

          <span className={`text-[11px] font-bold border px-2.5 py-0.5 rounded-md ${project.badgeStyle}`}>
            {project.category}
          </span>
        </div>

        {/* Action Button */}
        <a
          href={project.link || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full flex items-center justify-center gap-1.5 py-2.5 px-4 ${project.buttonStyle} font-semibold rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98] mt-auto`}
        >
          <span>View Live Website</span>
          <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
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
        <div className="text-center mb-8 sm:mb-12">
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
            className="font-heading font-black text-[#0F172A] leading-[1.05]"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)', letterSpacing: '-0.05em' }}
          >
            Completed <span className="gradient-text-saas">Projects</span>
          </motion.h2>
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
          className="text-center mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-slate-800 font-bold text-sm shadow-md border border-slate-200/80 hover:bg-slate-50 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
          >
            Explore All Projects
            <ArrowRight size={16} className="text-blue-600" />
          </Link>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-bold text-sm shadow-xl hover:shadow-blue-300/40 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
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
