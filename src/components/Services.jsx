import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Globe, ShoppingCart, Database, Smartphone, Bot, 
  Layout, Palette, Video, Camera, Film, Hexagon,
  Search, PenTool, Share2, MapPin, Target,
  MousePointerClick, Megaphone, MonitorPlay, Linkedin, Users, RefreshCw, LineChart,
  ArrowRight
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

const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  const isClickable = !!service.link;
  const CardWrapper = isClickable ? Link : 'div';
  
  return (
    <CardWrapper
      {...(isClickable ? { to: service.link } : {})}
      className={`group relative rounded-3xl p-5 md:p-8 bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-6 transition-all duration-300 ${
        isClickable ? 'hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer' : ''
      }`}
    >
      {/* Icon */}
      <div className="shrink-0 w-14 h-14 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-100 group-hover:scale-105 transition-all duration-300">
        <Icon size={24} strokeWidth={2} />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-start text-left">
        <h3 className="font-bold text-[15px] md:text-xl text-gray-900 mb-1 md:mb-3">{service.title}</h3>
        <p className="text-gray-500 leading-snug md:leading-relaxed text-[13px] md:text-sm line-clamp-2 md:line-clamp-none">{service.desc}</p>
        
        {/* Desktop Learn More */}
        {isClickable && (
          <div className="hidden md:flex mt-6 items-center gap-2 text-blue-600 text-sm font-bold group-hover:gap-3 transition-all">
            Learn More <ArrowRight size={16} />
          </div>
        )}
      </div>

      {/* Mobile Chevron */}
      {isClickable && (
        <div className="shrink-0 text-gray-400 md:hidden flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </div>
      )}
    </CardWrapper>
  )
}

/* ─── Decorative SVG Components ─── */
const DotGrid = ({ className = '', color = 'rgba(124,58,237,0.12)' }) => (
  <svg className={className} width="60" height="60" viewBox="0 0 60 60">
    {[...Array(5)].map((_, r) =>
      [...Array(5)].map((_, c) => (
        <circle key={`${r}-${c}`} cx={6 + c * 12} cy={6 + r * 12} r="1.5" fill={color} />
      ))
    )}
  </svg>
)

export default function Services() {
  const [ref, isInView] = useInView({ threshold: 0.05 })
  const [activeTab, setActiveTab] = useState('tech')
  const sliderRef = useRef(null)

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let intervalId;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        // Only run auto-scroll on mobile views
        if (window.innerWidth >= 768) return;

        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 20) {
          // Reached end, reset to start
          slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll one card right
          slider.scrollBy({ left: window.innerWidth * 0.85, behavior: 'smooth' });
        }
      }, 3000); // Slide every 3 seconds
    };

    startAutoScroll();

    // Pause auto-scroll when user interacts
    const handleTouchStart = () => clearInterval(intervalId);
    const handleTouchEnd = () => {
      clearInterval(intervalId);
      startAutoScroll();
    };

    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchend', handleTouchEnd);

    return () => {
      clearInterval(intervalId);
      if (slider) {
        slider.removeEventListener('touchstart', handleTouchStart);
        slider.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, []); // Run once on mount for the single mobile slider

  return (
    <section id="services" className="relative overflow-hidden services-light-bg pt-12 pb-24">
      {/* Background decorative glows */}
      <div className="absolute top-[-10%] left-[-8%] w-[600px] h-[600px] bg-violet-200/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-8%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[120px] pointer-events-none" />

      {/* Dot grid background */}
      <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99,102,241,0.05) 1px, transparent 0)', backgroundSize: '48px 48px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>

        {/* ═══ Section Header ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100/80 backdrop-blur-sm mb-6 shadow-sm border border-blue-200">
            <span className="text-blue-700 text-[11px] md:text-xs font-bold uppercase tracking-[0.15em]">Our Services</span>
          </div>

          <h2 className="font-black text-[32px] sm:text-5xl lg:text-6xl text-gray-900 leading-tight mb-4 md:mb-6">
            Comprehensive <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600">
              Digital Solutions
            </span>
          </h2>

          <p className="text-gray-600 text-[15px] sm:text-xl max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
            Everything your business needs to scale online, under one roof. From high-converting websites to highly-targeted ad campaigns.
          </p>
        </motion.div>

        {/* ═══ Category Tabs ═══ */}
        <div className="flex flex-wrap justify-center gap-2.5 md:gap-4 mb-8 md:mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`relative px-4 py-2 md:px-6 md:py-3 rounded-full font-bold text-[13px] md:text-base transition-all duration-300 border ${
                activeTab === cat.id 
                  ? 'text-white bg-blue-600 border-blue-600 shadow-md shadow-blue-500/20' 
                  : 'text-gray-600 bg-white border-gray-100 hover:border-gray-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ═══ Service Cards ═══ */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
            >
              {servicesData[activeTab].map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
