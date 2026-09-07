import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { buildWebPageSchema } from '../utils/schemaBuilders';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Shield, Zap, Users, Megaphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
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
    id: 2,
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
  {
    id: 3,
    category: 'Creative & Media',
    title: 'Doodo Designs — Video & Content Production',
    desc: 'Dynamic creative studio and video production portfolio driving business inquiries with commercial video reels and brand storytelling.',
    metric: '200+ Videos Done',
    subMetric: '100% Satisfaction',
    icon: Megaphone,
    image: '/doodo.webp',
    tag: 'Creative Studio',
    link: 'https://www.doododesigns.com/',
    cardBg: 'bg-[#F9EFFB]',
    cardBorder: 'border-[#ECD7EF]',
    hoverBorder: 'hover:border-[#C77DFF]',
    cardShadow: 'shadow-[#ECD7EF]/50',
    titleColor: 'text-[#28152D]',
    descColor: 'text-[#6F4E77]',
    badgeStyle: 'bg-[#EFDAF3] text-[#481E50] border-[#E2C3E7]',
    metricStyle: 'bg-[#F4E2F7] text-[#581A64] border-[#E5C6EA]',
    tagStyle: 'bg-[#F4E2F7] text-[#6F4E77] border-[#E5C6EA]',
    buttonStyle: 'bg-[#25152A] hover:bg-[#7B2CBF] text-white',
    dividerColor: 'border-[#ECD7EF]',
  },
  {
    id: 4,
    category: 'Tech & SaaS',
    title: 'ZYNINFO — Digital Innovation & Growth',
    desc: 'Modern tech firm web presence showcasing full-funnel digital strategy, web & app engineering, AI solutions, and client growth.',
    metric: '2.8× Faster Growth',
    subMetric: 'Global Scale',
    icon: Zap,
    image: '/zyninfo.webp',
    tag: 'IT & Software',
    link: 'https://zyninfo-website.pages.dev/',
    cardBg: 'bg-[#080E1B]',
    cardBorder: 'border-[#17253F]',
    hoverBorder: 'hover:border-cyan-400',
    cardShadow: 'shadow-slate-950/60',
    titleColor: 'text-white',
    descColor: 'text-slate-300',
    badgeStyle: 'bg-[#132039] text-cyan-300 border-[#23375D]',
    metricStyle: 'bg-[#101C32] text-cyan-400 border-[#1E3157]',
    tagStyle: 'bg-[#132039] text-slate-300 border-[#23375D]',
    buttonStyle: 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white',
    dividerColor: 'border-[#17253F]',
  },
  {
    id: 5,
    category: 'Healthcare',
    title: 'Aanandha Fertility Hospital & IVF Center',
    desc: 'Compassionate healthcare website for a top fertility hospital in Salem, featuring specialist profiles and online consultation booking.',
    metric: '95% Success Rate',
    subMetric: '5,000+ Families',
    icon: Users,
    image: '/aaanandhaclinic.webp',
    tag: 'Fertility Hospital',
    link: 'https://aanandha-clinic.pages.dev/',
    cardBg: 'bg-[#F0F8F4]',
    cardBorder: 'border-[#CBE6D7]',
    hoverBorder: 'hover:border-emerald-500',
    cardShadow: 'shadow-[#CBE6D7]/50',
    titleColor: 'text-[#0F3523]',
    descColor: 'text-[#3B634F]',
    badgeStyle: 'bg-[#DCF0E5] text-[#0D4428] border-[#BEE0CE]',
    metricStyle: 'bg-[#E3F4EB] text-[#0A522E] border-[#BEE0CE]',
    tagStyle: 'bg-[#E3F4EB] text-[#3B634F] border-[#BEE0CE]',
    buttonStyle: 'bg-[#0D4428] hover:bg-[#14663D] text-white',
    dividerColor: 'border-[#CBE6D7]',
  },
  {
    id: 6,
    category: 'Healthcare',
    title: 'Sairam Dental Care — Advanced Smile Studio',
    desc: 'Modern dental healthcare portal highlighting smile makeovers, orthodontics, laser dentistry, and instant consultation scheduling.',
    metric: '4,000+ Patients',
    subMetric: 'Top Local Rank',
    icon: Shield,
    image: '/sairamdental.webp',
    tag: 'Dental Clinic',
    link: 'https://sairam-clinic.pages.dev/',
    cardBg: 'bg-[#F0F6FD]',
    cardBorder: 'border-[#CCE1F7]',
    hoverBorder: 'hover:border-blue-500',
    cardShadow: 'shadow-[#CCE1F7]/50',
    titleColor: 'text-[#0C2D54]',
    descColor: 'text-[#3C5D85]',
    badgeStyle: 'bg-[#DCEBF9] text-[#0E3E75] border-[#BDD8F4]',
    metricStyle: 'bg-[#E2EFFB] text-[#0A4585] border-[#BDD8F4]',
    tagStyle: 'bg-[#E2EFFB] text-[#3C5D85] border-[#BDD8F4]',
    buttonStyle: 'bg-[#0B4382] hover:bg-[#155EB0] text-white',
    dividerColor: 'border-[#CCE1F7]',
  },
  {
    id: 7,
    category: 'Salon & Lifestyle',
    title: 'YES Wellness Studio — Luxury Family Salon',
    desc: 'Luxury family salon website in Ambattur, Chennai, presenting hair artistry, bridal services, aesthetic ambience, and direct appointments.',
    metric: '4.9★ Google Rating',
    subMetric: '500+ Clients',
    icon: Users,
    image: '/yes.webp',
    tag: 'Family Salon',
    link: 'https://yesstudio-site.pages.dev/',
    cardBg: 'bg-[#FAF7F2]',
    cardBorder: 'border-[#E8DFD0]',
    hoverBorder: 'hover:border-[#C19A5B]',
    cardShadow: 'shadow-[#E8DFD0]/50',
    titleColor: 'text-[#2E2416]',
    descColor: 'text-[#6B5A43]',
    badgeStyle: 'bg-[#EFE8DA] text-[#3E301B] border-[#DFD4C0]',
    metricStyle: 'bg-[#F3ECE0] text-[#4A381E] border-[#DFD4C0]',
    tagStyle: 'bg-[#F3ECE0] text-[#6B5A43] border-[#DFD4C0]',
    buttonStyle: 'bg-[#241C10] hover:bg-[#875F25] text-white',
    dividerColor: 'border-[#E8DFD0]',
  },
  {
    id: 8,
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
    id: 9,
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
    id: 10,
    category: 'Healthcare',
    title: 'Arun Ortho Clinic',
    desc: 'A dedicated healthcare website for an orthopaedic clinic. Focuses on easy patient navigation, doctor profiles, and quick appointments.',
    metric: '40% More Enquiries',
    subMetric: 'Enhanced Trust',
    icon: Users,
    image: '/ortho-clinic-website.png',
    tag: 'Ortho Clinic',
    link: 'https://arun-ortho-main.pages.dev/',
    cardBg: 'bg-[#F0FDF4]',
    cardBorder: 'border-[#BBF7D0]',
    hoverBorder: 'hover:border-emerald-500',
    cardShadow: 'shadow-[#BBF7D0]/50',
    titleColor: 'text-[#14532D]',
    descColor: 'text-[#166534]',
    badgeStyle: 'bg-[#DCFCE7] text-[#15803D] border-[#BBF7D0]',
    metricStyle: 'bg-[#DCFCE7] text-[#16A34A] border-[#BBF7D0]',
    tagStyle: 'bg-[#DCFCE7] text-[#15803D] border-[#BBF7D0]',
    buttonStyle: 'bg-[#15803D] hover:bg-[#166534] text-white',
    dividerColor: 'border-[#BBF7D0]',
  },
  {
    id: 11,
    category: 'Hardware & B2B',
    title: 'Weldtech Solutions',
    desc: 'A professional corporate website for an industrial welding company. Designed to showcase equipment, services, and generate B2B leads.',
    metric: 'Global Reach',
    subMetric: 'B2B Lead Gen',
    icon: Megaphone,
    image: '/weldtech-website.png',
    tag: 'Industrial Welding',
    link: 'https://www.weldtechsolution.com/',
    cardBg: 'bg-[#FFF7ED]',
    cardBorder: 'border-[#FFEDD5]',
    hoverBorder: 'hover:border-orange-500',
    cardShadow: 'shadow-[#FFEDD5]/50',
    titleColor: 'text-[#7C2D12]',
    descColor: 'text-[#9A3412]',
    badgeStyle: 'bg-[#FFEDD5] text-[#C2410C] border-[#FED7AA]',
    metricStyle: 'bg-[#FFEDD5] text-[#EA580C] border-[#FED7AA]',
    tagStyle: 'bg-[#FFEDD5] text-[#C2410C] border-[#FED7AA]',
    buttonStyle: 'bg-[#C2410C] hover:bg-[#9A3412] text-white',
    dividerColor: 'border-[#FFEDD5]',
  },
];

const categories = [
  'All',
  'Healthcare',
  'E-Commerce',
  'Tech & SaaS',
  'Creative & Media',
  'Hardware & B2B',
  'Salon & Lifestyle',
];

function ProjectCard({ project }) {
  return (
    <div
      className={`group ${project.cardBg} rounded-xl sm:rounded-2xl border ${project.cardBorder} ${project.hoverBorder} shadow-sm ${project.cardShadow} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden`}
    >
      {/* Visual Preview */}
      <div className={`relative aspect-[16/10] ${project.cardBg} overflow-hidden border-b ${project.dividerColor}`}>
        {/* Live Indicator */}
        <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10">
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold bg-emerald-500 text-white shadow-sm backdrop-blur-sm">
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
          className="hidden sm:flex absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center gap-2 text-white font-bold text-xs backdrop-blur-[2px] z-20"
          aria-label={`Open ${project.title} in a new tab`}
        >
          <span className="px-3.5 py-2 bg-white text-slate-900 rounded-full font-bold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 hover:scale-105">
            Visit Website
            <ExternalLink size={14} className="text-blue-600" />
          </span>
        </a>
      </div>

      {/* Card Content with matching theme background */}
      <div className={`p-3.5 sm:p-4 md:p-4.5 flex flex-col flex-1 ${project.cardBg}`}>
        <div className="flex items-start justify-between gap-2 mb-1 sm:mb-1.5">
          <h3 
            className={`text-sm sm:text-base md:text-[17px] font-bold ${project.titleColor} transition-colors line-clamp-1`}
            title={project.title}
          >
            {project.title}
          </h3>
        </div>

        <p className={`${project.descColor} text-[11px] sm:text-xs leading-relaxed mb-3 line-clamp-2 flex-1`}>
          {project.desc}
        </p>

        {/* Metric & Category Row */}
        <div className={`flex items-center justify-between gap-1.5 pt-2.5 border-t ${project.dividerColor} mb-3 text-[11px] sm:text-xs`}>
          <div className={`inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md font-bold shadow-xs border text-[10px] sm:text-xs ${project.metricStyle}`}>
            <Zap size={12} />
            <span>{project.metric}</span>
          </div>

          <span className={`text-[10px] sm:text-[11px] font-bold border px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-md ${project.badgeStyle}`}>
            {project.category}
          </span>
        </div>

        {/* Action Button */}
        <a
          href={project.link || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full flex items-center justify-center gap-1.5 py-2 sm:py-2.5 px-3 ${project.buttonStyle} font-semibold rounded-lg sm:rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98] mt-auto`}
        >
          <span>View Live Website</span>
          <ExternalLink size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle = "Our Work & Projects | Rudrifix";
  const pageDescription = "Explore our portfolio of high-performing websites, SaaS applications, and digital marketing campaigns that drive real business growth.";

  const schemas = [
    buildWebPageSchema(pageTitle, pageDescription, "https://rudrifix.com/projects")
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-900">
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords="portfolio, rudrifix projects, our work, digital marketing case studies, web development portfolio"
        canonicalUrl="/projects"
        schemas={schemas}
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-4 sm:pt-28 sm:pb-6 md:pt-36 md:pb-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-violet-300/20 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/80 border border-blue-200 backdrop-blur-md mb-4 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-bold text-blue-800 tracking-wider uppercase">Our Portfolio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 sm:mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Best Work</span>
          </motion.h1>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section className="py-2 pb-16 sm:pb-20 md:pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          
          {/* Category Filter Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-3 pt-1 mb-6 sm:mb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-1">
            {categories.map((cat) => {
              const count = cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]'
                      : 'bg-white text-slate-600 border border-slate-200/80 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Compact, Responsive Grid */}
          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-14 md:py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Ready to start your project?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-lg mx-auto">
            Let's create something amazing together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/30 active:scale-95 text-sm"
          >
            Get in touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
