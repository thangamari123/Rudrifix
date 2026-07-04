import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { buildWebPageSchema } from '../utils/schemaBuilders';
import { motion } from 'framer-motion';
import { ExternalLink, Shield, Zap, Users, Megaphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    link: 'https://rathnaaspectra.com/',
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
  // Add more projects here as needed
];

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-[24px] border border-gray-200 shadow-xl shadow-gray-200/30 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/15 group overflow-hidden">
      <div className="bg-gray-50/80 border-b border-gray-100 p-4 sm:p-6 flex flex-col items-center justify-center relative overflow-hidden">
         <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${project.gradient}`} />
         <div className="absolute top-4 right-4 z-10">
           <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-gradient-to-r ${project.gradient} text-white shadow-sm`}>
             {project.category}
           </span>
         </div>
         <div className="w-full bg-white rounded-t-xl rounded-b-lg shadow-lg border border-gray-200/80 overflow-hidden flex flex-col relative z-10 transition-transform duration-500 group-hover:scale-[1.03]">
           <div className="h-6 bg-gray-100/80 border-b border-gray-200/80 flex items-center px-3 gap-1.5 shrink-0 backdrop-blur-sm">
             <div className="w-2 h-2 rounded-full bg-rose-400 border border-rose-500/20"></div>
             <div className="w-2 h-2 rounded-full bg-amber-400 border border-amber-500/20"></div>
             <div className="w-2 h-2 rounded-full bg-emerald-400 border border-emerald-500/20"></div>
           </div>
           <div className="w-full h-40 sm:h-56 bg-white flex items-center justify-center p-2 relative">
             <img
               src={project.image}
               alt={project.title}
               className="max-w-full max-h-full object-contain"
               loading="lazy"
             />
           </div>
         </div>
      </div>
      <div className="flex flex-col flex-1 p-5 sm:p-6 bg-white">
        <h3 className="text-xl md:text-2xl font-black text-[#0F172A] mb-2 leading-tight group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 flex-1">
          {project.desc}
        </p>
        <div className="flex items-center justify-between mb-6">
           <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${project.accentLight} border ${project.accentBorder}`}>
             <Zap size={14} className={project.accentIcon} />
             <span className="font-bold text-[#0F172A] text-xs md:text-sm">{project.metric}</span>
           </div>
        </div>
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

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle = "Our Work & Projects | Rudrifix";
  const pageDescription = "Explore our portfolio of high-performing websites, SaaS applications, and digital marketing campaigns that drive real business growth.";
  
  const schemas = [
    buildWebPageSchema(pageTitle, pageDescription, "https://rudrifix.com/projects")
  ];

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
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-300/20 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-blue-200 backdrop-blur-md mb-8 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-sm font-bold text-blue-800 tracking-wide uppercase">Portfolio</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Best Work</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We don't just build websites; we build digital businesses. Take a look at some of our recent projects that have transformed our clients' online presence.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">Ready to start your project?</h2>
          <p className="text-lg text-gray-600 mb-10">Let's create something amazing together.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/30">
            Get in touch <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
