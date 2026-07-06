import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';
import { 
  buildOrganizationSchema, 
  buildPersonSchema, 
  buildAboutPageSchema, 
  buildFAQSchema, 
  buildBreadcrumbSchema, 
  buildWebPageSchema, 
  buildServiceSchema,
  buildImageObjectSchema
} from '../utils/schemaBuilders';
import SummaryBlock from '../components/AEO/SummaryBlock';
import FAQSection from '../components/AEO/FAQSection';
import { ArrowRight, Code2, Rocket, Zap, Globe2, BarChart3, Users, Target, ShieldCheck, Cpu, Building2, ShoppingCart, TrendingUp, Presentation, Megaphone, Server, Quote, CheckCircle2, CloudCog, Award, Star, GraduationCap, Briefcase, Lightbulb, Eye, User, Layers, HeartPulse, Smile, Hospital, Wifi, Phone, Building, Factory, Home, HardHat, Bed, Utensils, Scissors, Gem, Car, Landmark, Search, PenTool, ClipboardCheck, Layout, Terminal, Bug, CloudUpload } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const faqs = [
  { q: "Who is Rudrifix?", shortAnswer: "Rudrifix is a premium Software Development and Digital Marketing Agency.", a: "Rudrifix is a forward-thinking technology company that engineers high-performance web applications, custom software solutions, and powerful digital marketing strategies. We bridge the gap between creative branding and highly technical software architecture to help businesses dominate their market." },
  { q: "Who founded Rudrifix?", shortAnswer: "Rudrifix was founded by Thanga Mari.", a: "Rudrifix was founded by Thanga Mari, a highly skilled Founder & Software Developer dedicated to building modern digital solutions that scale businesses." },
  { q: "Who is the founder of Rudrifix?", shortAnswer: "Thanga Mari is the founder of Rudrifix.", a: "Thanga Mari is the founder of Rudrifix. As an experienced Software Developer, he leads the technical and strategic vision of the company, ensuring every solution built is fast, secure, and conversion-optimized." },
  { q: "Who owns Rudrifix?", shortAnswer: "Rudrifix is owned by Thanga Mari.", a: "Rudrifix is fully owned by its founder, Thanga Mari, who actively oversees both the software engineering and digital marketing wings of the agency." },
  { q: "What does Rudrifix do?", shortAnswer: "Rudrifix provides software development and digital marketing services.", a: "Rudrifix engineers custom software (like CRM, ERP, and SaaS products), develops high-performance websites and e-commerce platforms, and executes data-driven digital marketing campaigns (SEO, Google Ads, Meta Ads) to scale businesses." },
  { q: "Does Rudrifix build websites?", shortAnswer: "Yes, Rudrifix builds lightning-fast, custom websites.", a: "Absolutely. We specialize in building custom, high-performance websites using modern technologies like React and Next.js. Our websites are built with SEO baked into the code for maximum search engine visibility." },
  { q: "Does Rudrifix build ecommerce websites?", shortAnswer: "Yes, we build scalable ecommerce platforms.", a: "Yes, we engineer robust, highly-converting ecommerce websites. From seamless checkout flows to advanced inventory management integrations, our ecommerce solutions are designed to maximize revenue and handle high traffic." },
  { q: "Does Rudrifix develop CRM software?", shortAnswer: "Yes, we develop custom CRM software.", a: "Yes, we build custom Customer Relationship Management (CRM) software tailored to your specific business workflows, eliminating the bloat of off-the-shelf solutions and giving you complete control over your customer data." },
  { q: "Does Rudrifix develop ERP software?", shortAnswer: "Yes, we build custom ERP systems.", a: "Yes, we develop custom Enterprise Resource Planning (ERP) systems. We help businesses automate operations, manage supply chains, and unify data across multiple departments into a single, lightning-fast dashboard." },
  { q: "Does Rudrifix build SaaS products?", shortAnswer: "Yes, we architect and develop custom SaaS platforms.", a: "Yes, we specialize in SaaS (Software as a Service) development. We take your idea from wireframe to a fully functional, multi-tenant cloud application with subscription billing, secure authentication, and a scalable database architecture." },
  { q: "Does Rudrifix provide AI Automation?", shortAnswer: "Yes, we integrate AI automation into business workflows.", a: "Yes, we leverage the latest AI models and APIs to automate repetitive business tasks, build intelligent chatbots, and create smart data processing pipelines that save hundreds of hours of manual labor." },
  { q: "Which industries does Rudrifix serve?", shortAnswer: "We serve Healthcare, Education, Retail, Real Estate, and more.", a: "Rudrifix partners with a wide variety of industries including Healthcare (Hospitals, Dental Clinics), Real Estate, Education, Retail, Manufacturing, Telecom (ISPs), Hospitality (Hotels, Restaurants), Finance, and Insurance." },
  { q: "How can I contact Rudrifix?", shortAnswer: "You can contact us via our website, email, or phone.", a: "You can reach out to us through the Contact page on our website, click the WhatsApp button for instant support, or email us directly. We are always ready to discuss your next big project." },
  { q: "Why choose Rudrifix?", shortAnswer: "We offer technical excellence, zero bloat, and actual results.", a: "You should choose Rudrifix because we don't rely on slow templates. We engineer custom code, focus heavily on technical SEO, utilize sub-second load times, and merge software engineering with hardcore marketing analytics to guarantee ROI." },
  { q: "What technologies does Rudrifix use?", shortAnswer: "We use modern stacks like React, Next.js, Node.js, and AWS.", a: "We build on modern, enterprise-grade technology stacks. Our frontend stack includes React, Next.js, and Tailwind CSS. Our backend leverages Node.js, PHP, Laravel, and Python, paired with robust databases like PostgreSQL and MongoDB, all hosted on scalable cloud infrastructure like AWS and Vercel." }
];

const seoSchemas = [
  buildOrganizationSchema(),
  buildPersonSchema("Thanga Mari", "Founder & Software Developer", "https://rudrifix.com/about", "https://rudrifix.com/rudrifix%20logo.webp"),
  buildAboutPageSchema(
    "About Rudrifix | Software Development & Digital Marketing Agency",
    "Rudrifix, founded by Thanga Mari, is a premium Software Development and Digital Marketing Agency specializing in custom Web Dev, CRM, ERP, SaaS, and AI automation.",
    "https://rudrifix.com/about"
  ),
  buildFAQSchema(faqs),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://rudrifix.com" },
    { name: "About Us", url: "https://rudrifix.com/about" }
  ]),
  buildWebPageSchema(
    "About Rudrifix | Software Development Company",
    "Learn about Rudrifix, our mission, vision, and the founder Thanga Mari.",
    "https://rudrifix.com/about"
  ),
  {
    "@context": "https://schema.org",
    "@type": "SearchAction",
    "target": "https://rudrifix.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
];

const pageAEO = {
  summary: "Rudrifix is a premier Software Development Company and Digital Marketing Agency founded by Thanga Mari. We specialize in engineering high-performance Web Applications, custom SaaS, CRM, and ERP software, alongside executing data-driven digital marketing and SEO campaigns. Our mission is to bridge the gap between abstract creativity and high-precision technical execution for explosive brand growth.",
  takeaways: [
    "Founded by Thanga Mari, a Senior Software Developer.",
    "Specializes in custom Software (CRM, ERP, SaaS) and Web Development.",
    "Provides full-suite Digital Marketing (SEO, Google Ads, Meta Ads).",
    "Serves multiple industries including Healthcare, Real Estate, and Retail.",
    "Utilizes modern tech stacks like React, Next.js, Node.js, and AI automation."
  ]
};

const processes = [
  { 
    step: '01', 
    title: 'Discovery & Planning', 
    desc: 'We dive deep into your business requirements, analyzing your goals, target audience, and technical needs to map out a strategic blueprint.',
    icon: Search,
    graphicIcon: ClipboardCheck,
    colorHex: '#3B82F6',
    textClass: 'text-blue-600',
    bgClass: 'bg-blue-50',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-700'
  },
  { 
    step: '02', 
    title: 'UI/UX Design', 
    desc: 'Our creative team crafts stunning, intuitive interfaces that prioritize user experience and conversion optimization.',
    icon: PenTool,
    graphicIcon: Layout,
    colorHex: '#A855F7',
    textClass: 'text-purple-600',
    bgClass: 'bg-purple-50',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-700'
  },
  { 
    step: '03', 
    title: 'Custom Development', 
    desc: 'We engineer custom code without bloat, utilizing modern frameworks to ensure sub-second performance and robust security.',
    icon: Code2,
    graphicIcon: Terminal,
    colorHex: '#10B981',
    textClass: 'text-emerald-600',
    bgClass: 'bg-emerald-50',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-700'
  },
  { 
    step: '04', 
    title: 'Testing & QA', 
    desc: 'Rigorous multi-device and cross-browser testing is conducted to ensure zero bugs and flawless execution before launch.',
    icon: ShieldCheck,
    graphicIcon: Bug,
    colorHex: '#F97316',
    textClass: 'text-orange-600',
    bgClass: 'bg-orange-50',
    badgeBg: 'bg-orange-100',
    badgeText: 'text-orange-700'
  },
  { 
    step: '05', 
    title: 'Deployment & Support', 
    desc: 'We handle the complete cloud deployment and provide ongoing, proactive support to keep your infrastructure scaling smoothly.',
    icon: Rocket,
    graphicIcon: CloudUpload,
    colorHex: '#0EA5E9',
    textClass: 'text-sky-600',
    bgClass: 'bg-sky-50',
    badgeBg: 'bg-sky-100',
    badgeText: 'text-sky-700'
  }
];

const skills = [
  { name: "Laravel", icon: Code2, color: "text-orange-500", bg: "bg-orange-50" },
  { name: "CRM Development", icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
  { name: "ERP Development", icon: Building2, color: "text-purple-500", bg: "bg-purple-50" },
  { name: "SaaS Development", icon: CloudCog, color: "text-emerald-500", bg: "bg-emerald-50" },
  { name: "AI Automation", icon: Cpu, color: "text-violet-500", bg: "bg-violet-50" },
  { name: "Cloud Applications", icon: CloudCog, color: "text-blue-600", bg: "bg-blue-50" },
  { name: "Digital Marketing", icon: Megaphone, color: "text-blue-500", bg: "bg-blue-50" },
  { name: "SEO", icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-50" },
  { name: "Google Ads", icon: Target, color: "text-blue-500", bg: "bg-blue-50" },
  { name: "Meta Ads", icon: Target, color: "text-blue-600", bg: "bg-blue-50" },
  { name: "Website Development", icon: Globe2, color: "text-orange-500", bg: "bg-orange-50" },
  { name: "Software Development", icon: Code2, color: "text-pink-500", bg: "bg-pink-50" }
];

const technologies = [
  { name: "React", logo: <span className="text-[#00D8FF] font-black text-xl leading-none">⚛</span> },
  { name: "Next.js", logo: <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center font-bold text-[11px]">N</div> },
  { name: "TypeScript", logo: <div className="w-[18px] h-[18px] bg-[#3178C6] text-white flex items-center justify-center font-bold text-[9px] rounded-[3px]">TS</div> },
  { name: "Node.js", logo: <span className="text-[#5FA04E] font-black text-[13px] tracking-tighter border border-[#5FA04E] px-1 rounded-sm leading-none flex items-center h-4">JS</span> },
  { name: "Express", logo: <span className="text-gray-800 font-medium text-[15px]">ex</span> },
  { name: "PHP", logo: <div className="px-[5px] py-[1px] rounded-full bg-[#777BB4] text-white font-bold text-[9px] leading-tight">php</div> },
  { name: "Laravel", logo: <Code2 className="text-[#F55247] w-[18px] h-[18px]" /> },
  { name: "Python", logo: <span className="text-[#3776AB] font-bold text-sm tracking-tighter">Py</span> },
  { name: "Firebase", logo: <span className="text-[#FFCA28] font-black text-base leading-none">🔥</span> },
  { name: "Supabase", logo: <div className="w-[16px] h-[16px] rounded-full bg-[#3ECF8E]" /> },
  { name: "MongoDB", logo: <span className="text-[#47A248] font-bold text-base leading-none">🍃</span> },
  { name: "PostgreSQL", logo: <span className="text-[#336791] font-bold text-base leading-none">🐘</span> },
  { name: "MySQL", logo: <span className="text-[#4479A1] font-bold text-base leading-none">🐬</span> },
  { name: "Cloudflare", logo: <span className="text-[#F38020] font-bold text-lg leading-none">☁</span> },
  { name: "Vercel", logo: <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[12px] border-b-black" /> },
  { name: "AWS", logo: <span className="text-[#FF9900] font-bold text-[13px] tracking-tight">aws</span> }
];

const industries = [
  { name: "Healthcare", icon: HeartPulse },
  { name: "Dental Clinics", icon: Smile },
  { name: "Hospitals", icon: Hospital },
  { name: "ISP", icon: Wifi },
  { name: "Telecom", icon: Phone },
  { name: "Education", icon: GraduationCap },
  { name: "Schools", icon: Building },
  { name: "Retail", icon: ShoppingCart },
  { name: "Manufacturing", icon: Factory },
  { name: "Real Estate", icon: Home },
  { name: "Construction", icon: HardHat },
  { name: "Hotels", icon: Bed },
  { name: "Restaurants", icon: Utensils },
  { name: "Salons", icon: Scissors },
  { name: "Jewellery", icon: Gem },
  { name: "Automobile", icon: Car },
  { name: "Finance", icon: Landmark },
  { name: "Insurance", icon: ShieldCheck }
];

const whatWeDo = [
  { title: "Website Development", icon: Globe2, desc: "Lightning-fast, SEO-optimized custom websites.", color: "bg-blue-600" },
  { title: "Ecommerce Development", icon: ShoppingCart, desc: "Scalable online stores engineered for high conversions.", color: "bg-emerald-500" },
  { title: "CRM Development", icon: Users, desc: "Custom Customer Relationship Management systems.", color: "bg-orange-500" },
  { title: "ERP Development", icon: Building2, desc: "Enterprise Resource Planning for complete operational control.", color: "bg-purple-600" },
  { title: "SaaS Development", icon: CloudCog, desc: "End-to-end architecture for cloud-based software products.", color: "bg-teal-500" },
  { title: "AI Solutions", icon: Cpu, desc: "Intelligent automation and workflow optimization.", color: "bg-blue-600" },
  { title: "Business Automation", icon: Zap, desc: "Replacing manual tasks with powerful software scripts.", color: "bg-yellow-500" },
  { title: "Digital Marketing", icon: BarChart3, desc: "Data-driven campaigns across all major digital platforms.", color: "bg-pink-500" },
  { title: "SEO", icon: Target, desc: "Technical and Content SEO to dominate search rankings.", color: "bg-emerald-500" },
  { title: "Performance Marketing", icon: TrendingUp, desc: "High-ROI advertising via Google and Meta.", color: "bg-teal-500" },
  { title: "Branding", icon: Award, desc: "Premium brand identities that establish immediate trust.", color: "bg-yellow-500" },
  { title: "UI/UX Design", icon: Presentation, desc: "Stunning, user-centric interface design.", color: "bg-purple-600" }
];

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#E0F1FB] text-gray-900 selection:bg-blue-500/30">
      <SEO 
        title="About Rudrifix | Software Development & Digital Marketing Agency"
        description="Learn about Rudrifix and founder Thanga Mari. We are a premier Software Development Company and Digital Marketing Agency building custom CRM, ERP, and SaaS."
        keywords="About Rudrifix, Thanga Mari, Software Development Company, Digital Marketing Agency, Web Development"
        canonicalUrl="/about"
        schemas={seoSchemas}
      />

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-400/20 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-blue-200 backdrop-blur-md mb-8 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-sm font-bold text-blue-800 tracking-wide uppercase">About Rudrifix</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight mb-8 leading-[1.1]"
          >
            Engineering Digital <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              Excellence
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We are a premium Software Development Company and Digital Marketing Agency. We don't just build websites; we engineer high-performance business infrastructures designed for explosive growth.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20 hover:-translate-y-1">
              Start Your Project <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Custom AI Quick Summary Block */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8FAFC] rounded-[32px] overflow-visible shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col lg:flex-row relative">
            
            {/* Center Logo */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] bg-white rounded-full shadow-2xl z-20 items-center justify-center border-4 border-white">
              <img src="/rudrifix logo.webp" alt="Rudrifix Logo" className="w-[100px] h-[100px] object-contain" />
            </div>

            {/* Left Column (Dark Blue) */}
            <div className="w-full lg:w-1/2 bg-[#0A162B] lg:rounded-l-[32px] rounded-t-[32px] lg:rounded-tr-none p-8 lg:p-14 relative overflow-hidden flex flex-col justify-center">
              {/* Background waves/decorations */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[80px]" />
              <div className="absolute top-10 right-10 w-2 h-2 bg-white/40 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              <div className="absolute top-20 left-10 w-1.5 h-1.5 bg-white/30 rounded-full" />
              <div className="absolute bottom-20 right-20 w-3 h-3 bg-blue-400/30 rounded-full" />
              {/* Stars */}
              <Star className="absolute top-12 left-12 w-4 h-4 text-white/50 fill-white/50" />
              <Star className="absolute top-24 right-24 w-3 h-3 text-white/30 fill-white/30" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                    <Zap className="w-5 h-5 fill-current" />
                  </div>
                  <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">AI Quick Summary</span>
                </div>
                
                <h2 className="text-3xl md:text-[40px] font-bold text-white mb-6 leading-tight">
                  Who We Are
                </h2>
                
                <div className="w-10 h-1 bg-blue-500 mb-8" />
                
                <p className="text-[14px] lg:text-[15px] text-gray-300 leading-relaxed mb-6">
                  Rudrifix is a premier Software Development Company and Digital Marketing Agency founded by Thanga Mari. We specialize in engineering high-performance Web Applications, custom SaaS, CRM, and ERP software, alongside executing data-driven digital marketing and SEO campaigns.
                </p>
                <p className="text-[14px] lg:text-[15px] text-gray-300 leading-relaxed">
                  Our mission is to bridge the gap between abstract creativity and high-precision technical execution for explosive brand growth.
                </p>
              </div>
            </div>

            {/* Right Column (Takeaways) */}
            <div className="w-full lg:w-1/2 p-8 lg:p-14 bg-[#F8FAFC] lg:rounded-r-[32px] rounded-b-[32px] lg:rounded-bl-none relative z-10">
              {/* Dot grid decoration */}
              <div className="absolute top-10 right-10 grid grid-cols-3 gap-2 opacity-30">
                {[...Array(9)].map((_, i) => (
                   <div key={i} className="w-1 h-1 bg-gray-400 rounded-full" />
                ))}
              </div>

              <h2 className="text-2xl font-bold text-[#0B152A] mb-4">Key Takeaways</h2>
              <div className="w-12 h-1 bg-blue-100 rounded-full mb-8 relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-blue-500" />
              </div>

              <div className="space-y-4">
                {/* Item 1 */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-5 hover:border-blue-100 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-600/20">
                    <User className="w-5 h-5" />
                  </div>
                  <p className="text-[14px] text-gray-700 leading-snug">
                    Founded by <span className="font-bold text-blue-900">Thanga Mari</span>, a Senior Software Developer.
                  </p>
                </div>
                {/* Item 2 */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-5 hover:border-emerald-100 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-emerald-500/20">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <p className="text-[14px] text-gray-700 leading-snug">
                    Specializes in custom Software (CRM, ERP, SaaS) and Web Development.
                  </p>
                </div>
                {/* Item 3 */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-5 hover:border-purple-100 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-purple-500/20">
                    <Megaphone className="w-5 h-5" />
                  </div>
                  <p className="text-[14px] text-gray-700 leading-snug">
                    Provides full-suite Digital Marketing (SEO, Google Ads, Meta Ads).
                  </p>
                </div>
                {/* Item 4 */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-5 hover:border-orange-100 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-orange-500/20">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <p className="text-[14px] text-gray-700 leading-snug">
                    Serves multiple industries including Healthcare, Real Estate, and Retail.
                  </p>
                </div>
                {/* Item 5 */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-5 hover:border-blue-100 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/20">
                    <Layers className="w-5 h-5" />
                  </div>
                  <p className="text-[14px] text-gray-700 leading-snug">
                    Utilizes modern tech stacks like React, Next.js, Node.js, and AI automation.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Logo for small screens */}
            <div className="lg:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full shadow-2xl z-20 flex items-center justify-center border-4 border-white hidden">
              {/* Hiding it on mobile looks cleaner as the columns stack without an awkward overlapping element breaking the flow */}
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. Company Story, Mission, Vision */}
      <section className="py-24 bg-[#F8FAFC] relative z-10">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col lg:flex-row">
            
            {/* Left Column - Dark Blue & Image */}
            <div className="w-full lg:w-[55%] flex flex-col border-r border-gray-100">
              <div className="relative flex-1 p-8 lg:p-12 overflow-hidden bg-[#0B152A]">
                 {/* Background Image full width */}
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center" />
                 {/* Dark Blue Overlay with diagonal cut */}
                 <div className="absolute inset-0 bg-[#0B152A]" style={{ clipPath: 'polygon(0 0, 95% 0, 65% 100%, 0% 100%)' }} />
                 
                 <div className="relative z-10 text-white lg:pr-16">
                   <div className="text-blue-500 font-bold text-[11px] tracking-widest uppercase mb-4">Our Story</div>
                   <h2 className="text-3xl md:text-[36px] font-black mb-6 leading-tight">
                     Building Digital <br/> Excellence,<br/>
                     <span className="text-blue-500">Delivering Results.</span>
                   </h2>
                   
                   {/* Blue line separator */}
                   <div className="w-12 h-1 bg-blue-500 mb-6" />

                   <p className="text-[13px] text-gray-300 leading-relaxed mb-4">
                     Rudrifix was started with a singular focus: to eliminate the friction between businesses and their digital potential. In an era where off-the-shelf templates and generic marketing strategies fail to deliver ROI, we stepped in to provide bespoke, engineered solutions.
                   </p>
                   <p className="text-[13px] text-gray-300 leading-relaxed mb-8">
                     We recognized that a beautiful design is useless without blazing-fast code, and robust code is invisible without elite marketing. Rudrifix was born to unify software development and digital marketing under one roof of excellence.
                   </p>

                   {/* Stats bar */}
                   <div className="bg-[#121E36]/90 backdrop-blur-md rounded-xl border border-white/5 p-4 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 mt-auto">
                      <div className="flex items-center gap-3">
                         <Rocket className="w-5 h-5 text-blue-500" />
                         <div>
                           <div className="text-white font-bold text-[15px] leading-tight">100+</div>
                           <div className="text-[10px] text-gray-400">Projects Delivered</div>
                         </div>
                      </div>
                      <div className="w-px h-8 bg-white/10 hidden sm:block" />
                      <div className="flex items-center gap-3">
                         <Users className="w-5 h-5 text-blue-500" />
                         <div>
                           <div className="text-white font-bold text-[15px] leading-tight">50+</div>
                           <div className="text-[10px] text-gray-400">Happy Clients</div>
                         </div>
                      </div>
                      <div className="w-px h-8 bg-white/10 hidden sm:block" />
                      <div className="flex items-center gap-3">
                         <Target className="w-5 h-5 text-blue-500" />
                         <div>
                           <div className="text-white font-bold text-[15px] leading-tight">100%</div>
                           <div className="text-[10px] text-gray-400">Commitment</div>
                         </div>
                      </div>
                   </div>
                 </div>
              </div>
              
              {/* Bottom White Quote */}
              <div className="bg-white p-6 lg:p-8 flex items-center justify-between z-20 relative">
                 <div className="flex items-center gap-4 lg:gap-6">
                   <Quote className="w-10 h-10 lg:w-12 lg:h-12 text-blue-400/50 fill-blue-400/50 rotate-180 shrink-0" />
                   <div>
                     <p className="text-[13px] lg:text-[15px] text-gray-600 leading-tight mb-1">We don't just build websites.</p>
                     <p className="text-[13px] lg:text-[15px] font-bold text-blue-700 leading-tight">We build digital growth engines.</p>
                   </div>
                 </div>
                 <div className="text-3xl text-blue-500 -rotate-3" style={{ fontFamily: "'Caveat', 'Dancing Script', 'Brush Script MT', cursive" }}>
                   Rudrifix
                 </div>
                 {/* Blue underline for Rudrifix */}
                 <div className="absolute bottom-5 lg:bottom-6 right-6 lg:right-8 w-14 lg:w-16 h-0.5 bg-blue-500 rotate-[-3deg]" />
              </div>
            </div>

            {/* Right Column - White/Off-White Cards */}
            <div className="w-full lg:w-[45%] bg-[#F8FAFC] p-6 lg:p-10 flex flex-col justify-center gap-6 relative">
              {/* Mission Card */}
              <div className="bg-white rounded-[16px] p-6 lg:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex gap-5 lg:gap-6 relative overflow-hidden z-10">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500 rounded-l-[16px]" />
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 relative">
                  <Target className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />
                  <div className="absolute -right-3.5 lg:-right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full" />
                </div>
                <div>
                  <h3 className="text-[18px] lg:text-xl font-black text-[#0B152A] mb-2">Mission</h3>
                  <p className="text-[12px] lg:text-[13px] text-gray-600 leading-relaxed">
                    To build the ultimate digital infrastructure for brands, providing them with the technological and marketing leverage needed to dominate their respective markets.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="bg-white rounded-[16px] p-6 lg:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex gap-5 lg:gap-6 relative overflow-hidden z-10">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-purple-500 rounded-l-[16px]" />
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-purple-50 flex items-center justify-center shrink-0 border border-purple-100 relative">
                  <Eye className="w-5 h-5 lg:w-6 lg:h-6 text-purple-500" />
                  <div className="absolute -right-3.5 lg:-right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-purple-500 rounded-full" />
                </div>
                <div>
                  <h3 className="text-[18px] lg:text-xl font-black text-[#0B152A] mb-2">Vision</h3>
                  <p className="text-[12px] lg:text-[13px] text-gray-600 leading-relaxed">
                    To be the globally recognized benchmark for technical excellence, pushing the boundaries of what is possible in web applications and AI-driven performance marketing.
                  </p>
                </div>
              </div>

              {/* Business Philosophy Card */}
              <div className="bg-white rounded-[16px] p-6 lg:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex gap-5 lg:gap-6 relative overflow-hidden z-10">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500 rounded-l-[16px]" />
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100 relative">
                  <ShieldCheck className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-500" />
                  <div className="absolute -right-3.5 lg:-right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                </div>
                <div>
                  <h3 className="text-[18px] lg:text-xl font-black text-[#0B152A] mb-2">Business Philosophy</h3>
                  <p className="text-[12px] lg:text-[13px] text-gray-600 leading-relaxed">
                    We believe in data-driven execution, zero code bloat, complete transparency, and building long-term partnerships rooted in actual, measurable business growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Meet Our Founder & 4. Founder Quote */}
      <section className="py-24 bg-[#F8FAFC] relative z-10">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-[40px] md:text-[48px] font-black text-[#0B152A] mb-3 tracking-tight">Meet Our Founder</h2>
            <div className="w-12 h-1.5 bg-blue-500 rounded-full mb-4 relative">
              <div className="absolute -right-3 top-0 w-1.5 h-1.5 bg-blue-500 rounded-full" />
            </div>
            <p className="text-[17px] text-gray-600">The engineering mind behind Rudrifix's technical and creative supremacy.</p>
          </div>
          
          {/* Main Card */}
          <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col lg:flex-row">
            
            {/* Left Column - Dark Blue */}
            <div className="bg-[#0B152A] w-full lg:w-[380px] shrink-0 p-6 md:p-10 flex flex-col items-center relative overflow-hidden">
               {/* Profile Image with rings */}
               <div className="relative mb-8 md:mb-10 w-48 h-48 md:w-[240px] md:h-[240px]">
                 {/* Blue swoop decoration */}
                 <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 via-transparent to-transparent rounded-full opacity-80 rotate-[-15deg]" />
                 <div className="absolute inset-0 bg-white rounded-full p-2">
                   <div className="w-full h-full rounded-full overflow-hidden bg-gray-200">
                     <img 
                       src="/thangamari.webp" 
                       alt="Thanga Mari - Founder & Software Developer" 
                       className="w-full h-full object-cover"
                     />
                   </div>
                 </div>
                 {/* Rocket Badge */}
                 <div className="absolute -bottom-2 -right-2 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full p-1.5 shadow-xl">
                   <div className="w-full h-full bg-blue-50 rounded-full flex items-center justify-center">
                     <Rocket className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                   </div>
                 </div>
               </div>

               {/* Mini Features */}
               <div className="grid grid-cols-3 w-full gap-2 sm:gap-4 mb-8 md:mb-10 relative z-10">
                 <div className="flex flex-col items-center text-center">
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-2 md:mb-3">
                     <Code2 className="text-white w-4 h-4 md:w-5 md:h-5" />
                   </div>
                   <span className="text-white font-bold text-[11px] md:text-[13px] mb-0.5">Developer</span>
                   <span className="text-blue-200/70 text-[9px] md:text-[11px]">Full Stack</span>
                 </div>
                 <div className="flex flex-col items-center text-center relative">
                   <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-10 md:h-12 bg-white/10" />
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-2 md:mb-3">
                     <Lightbulb className="text-white w-4 h-4 md:w-5 md:h-5" />
                   </div>
                   <span className="text-white font-bold text-[11px] md:text-[13px] mb-0.5">Innovator</span>
                   <span className="text-blue-200/70 text-[9px] md:text-[11px]">Problem Solver</span>
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-10 md:h-12 bg-white/10" />
                 </div>
                 <div className="flex flex-col items-center text-center">
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-2 md:mb-3">
                     <Target className="text-white w-4 h-4 md:w-5 md:h-5" />
                   </div>
                   <span className="text-white font-bold text-[11px] md:text-[13px] mb-0.5">Entrepreneur</span>
                   <span className="text-blue-200/70 text-[9px] md:text-[11px]">Vision Builder</span>
                 </div>
               </div>

               {/* Passionate About Box */}
               <div className="w-full bg-[#121E36] rounded-[20px] p-5 md:p-6 text-center border border-white/5 relative z-10">
                 <p className="text-blue-400 font-bold text-[12px] md:text-[13px] mb-3 md:mb-4"><span className="text-blue-500">Passionate</span> About</p>
                 <div className="flex flex-wrap justify-center gap-x-2 gap-y-1.5 md:gap-x-3 md:gap-y-2 text-[11px] md:text-[12px] text-gray-300">
                   <span>Clean Code</span>
                   <span className="text-white/20">|</span>
                   <span>Automation</span>
                   <span className="text-white/20">|</span>
                   <span>Growth Marketing</span>
                   <span>Scalable Systems</span>
                   <span className="text-white/20">|</span>
                   <span>User Experience</span>
                 </div>
               </div>
            </div>

            {/* Right Column - White */}
            <div className="p-6 sm:p-10 lg:p-14 flex-1 relative bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-blend-overlay">
              {/* Dot pattern background right side */}
              <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
              
              <div className="relative z-10">
                <div className="inline-flex px-3 py-1.5 md:px-4 md:py-2 bg-[#F0F7FF] text-blue-600 border border-blue-100 rounded-full text-[12px] md:text-[13px] font-bold mb-4 md:mb-6">Founder & Software Developer</div>
                
                <div className="flex flex-col md:flex-row items-start md:items-baseline gap-2 md:gap-4 mb-4 md:mb-6">
                  <h3 className="text-3xl md:text-[40px] font-black text-[#0B152A] leading-none">Thanga Mari S</h3>
                </div>
                {/* Blue underline */}
                <div className="w-12 h-0.5 bg-blue-500 mb-8" />

                <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
                  Thanga Mari is the Founder of Rudrifix and a Software Developer specializing in modern web development, custom software, e-commerce platforms, CRM, ERP, SaaS applications, AI automation, and digital marketing solutions.
                </p>
                <p className="text-[15px] text-gray-600 leading-relaxed mb-10">
                  He holds a Bachelor of Technology (B.Tech) in Information Technology from Jayaraj Annapackiam CSI College of Engineering, Nazareth, affiliated with Anna University. Through Rudrifix, he focuses on helping businesses build reliable, scalable, and user-focused digital solutions.
                </p>
                
                {/* Stats Row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50/50">
                    <div className="w-10 h-10 rounded-lg bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm">
                      <GraduationCap className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-gray-900 leading-tight">B.Tech (IT)</div>
                      <div className="text-[10px] text-gray-500 mt-0.5">Anna University</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50/50">
                    <div className="w-10 h-10 rounded-lg bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm">
                      <Briefcase className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-gray-900 leading-tight">15+</div>
                      <div className="text-[10px] text-gray-500 mt-0.5">Projects Delivered</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50/50">
                    <div className="w-10 h-10 rounded-lg bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-gray-900 leading-tight">Happy</div>
                      <div className="text-[10px] text-gray-500 mt-0.5">Clients Served</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50/50">
                    <div className="w-10 h-10 rounded-lg bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm">
                      <Rocket className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-gray-900 leading-tight">Growth</div>
                      <div className="text-[10px] text-gray-500 mt-0.5">Driven Mindset</div>
                    </div>
                  </div>
                </div>

                {/* Founder Quote */}
                <div className="p-6 bg-[#F8FAFC] rounded-r-2xl rounded-bl-2xl border-l-4 border-blue-500 flex gap-4">
                   <Quote className="w-8 h-8 text-blue-500 shrink-0 fill-blue-500 rotate-180 opacity-80" />
                   <p className="text-[15px] text-gray-700 italic font-medium leading-relaxed pt-1">
                    "True digital growth happens only when flawless engineering meets aggressive, data-driven marketing. We don't build software just to exist; we build it to dominate."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Skills */}
      <section className="py-24 relative z-10 bg-[#F8FAFC]">
        {/* Soft glow at the top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-blue-100 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-blue-200" />
            <span className="text-blue-600 font-bold text-[11px] tracking-widest uppercase">Our Expertise</span>
            <div className="w-12 h-px bg-blue-200" />
          </div>
          <h2 className="text-[36px] md:text-[44px] font-black text-[#0B152A] mb-4">Core Competencies & Skills</h2>
          <p className="text-[15px] text-gray-500 max-w-2xl mx-auto">A blend of technology, creativity, and strategy to deliver powerful digital solutions.</p>
          
          {/* Top right icon button from design (absolute positioned on desktop) */}
          <div className="hidden lg:flex absolute right-0 top-0 w-14 h-14 bg-white rounded-2xl shadow-xl shadow-blue-900/5 items-center justify-center border border-blue-50 text-blue-600 hover:scale-105 transition-transform cursor-default">
            <Target className="w-6 h-6" />
          </div>
        </div>
        
        <div className="relative flex w-full overflow-hidden whitespace-nowrap py-6">
          <div className="absolute left-0 top-0 w-20 md:w-40 h-full bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 md:w-40 h-full bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex gap-4 px-2 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          >
            {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
              <span key={`${skill.name}-${index}`} className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-white border border-gray-100/80 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-100 transition-all cursor-default whitespace-nowrap">
                <div className={`w-10 h-10 rounded-full ${skill.bg} flex items-center justify-center`}>
                  <skill.icon className={`w-5 h-5 ${skill.color}`} />
                </div>
                <span className="text-[14px] font-bold text-[#0B152A]">{skill.name}</span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. What We Do */}
      <section className="py-24 bg-[#0A162B] relative z-10 overflow-hidden">
        {/* Dark Blue Background with dots & gradients */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#101D38] to-transparent opacity-50" />
        <div className="absolute -left-32 top-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
        <div className="absolute -right-32 bottom-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" />
        
        {/* Dot grids */}
        <div className="absolute top-20 left-10 grid grid-cols-4 gap-2 opacity-20">
          {[...Array(16)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-blue-300 rounded-full" />)}
        </div>
        <div className="absolute top-40 right-10 grid grid-cols-4 gap-2 opacity-20">
          {[...Array(16)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-blue-300 rounded-full" />)}
        </div>

        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-blue-600 text-white rounded-full text-[11px] font-bold tracking-widest uppercase mb-6 shadow-lg shadow-blue-600/30">
              Our Services
            </div>
            <h2 className="text-[36px] md:text-[44px] font-black text-white mb-6">What We Do</h2>
            <p className="text-[15px] text-blue-200/70 max-w-2xl mx-auto">A comprehensive suite of technical and creative services engineered to scale your business.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDo.map((item, idx) => (
              <div key={idx} className="bg-[#121E36]/80 backdrop-blur-sm border border-white/5 rounded-[20px] p-8 hover:bg-[#162440] transition-colors flex flex-col items-center text-center group cursor-default shadow-lg shadow-black/10">
                <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="text-white" size={28} strokeWidth={2.5} />
                </div>
                <h3 className="text-[17px] font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[13px] text-gray-400 leading-relaxed mb-8 flex-1">{item.desc}</p>
                
                {/* Colored underline matching the icon color */}
                <div className={`w-10 h-1 rounded-full ${item.color} opacity-80`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Technologies & 7. Industries */}
      <section className="py-24 relative z-10 bg-[#F8FAFC]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Technologies Card */}
            <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden flex flex-col h-full group">
              {/* Dot Grid Top Right */}
              <div className="absolute top-8 right-8 grid grid-cols-3 gap-1.5 opacity-30">
                {[...Array(9)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-violet-400 rounded-full" />)}
              </div>
              
              {/* Wavy Background Bottom */}
              <div className="absolute bottom-0 left-0 w-full h-32 opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-500" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1440 320%22%3E%3Cpath fill=%22none%22 stroke=%22%238b5cf6%22 stroke-width=%222%22 d=%22M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128%22/%3E%3Cpath fill=%22none%22 stroke=%22%238b5cf6%22 stroke-width=%222%22 d=%22M0,256L48,261.3C96,267,192,277,288,272C384,267,480,245,576,234.7C672,224,768,224,864,229.3C960,235,1056,245,1152,229.3C1248,213,1344,171,1392,149.3L1440,128%22/%3E%3C/svg%3E')", backgroundSize: 'cover', backgroundPosition: 'bottom' }} />

              <div className="flex items-center gap-5 mb-4 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#5B21B6] shadow-lg shadow-[#5B21B6]/30 flex items-center justify-center shrink-0">
                  <Code2 className="text-white w-8 h-8" />
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className="text-[26px] sm:text-[28px] font-black text-[#0B152A]">Technologies We Use</h3>
                  <div className="w-12 sm:w-16 h-px bg-gray-200" />
                </div>
              </div>
              <p className="text-[14px] text-gray-500 leading-relaxed mb-10 max-w-sm pl-0 sm:pl-[84px] relative z-10">
                We leverage modern, scalable and secure technologies to build high-performance digital solutions.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 relative z-10 mt-auto">
                {technologies.map(tech => (
                  <div key={tech.name} className="flex items-center gap-2 sm:gap-3 px-3 py-3 sm:px-4 bg-white border border-gray-100 rounded-[14px] shadow-sm hover:shadow-md hover:border-violet-200 hover:-translate-y-0.5 transition-all cursor-default">
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                      {tech.logo}
                    </div>
                    <span className="text-[12px] sm:text-[13px] font-bold text-gray-800">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Industries Card */}
            <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden flex flex-col h-full group">
              {/* Dot Grid Top Right */}
              <div className="absolute top-8 right-8 grid grid-cols-3 gap-1.5 opacity-40">
                {[...Array(9)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />)}
              </div>
              
              {/* Wavy Background Bottom */}
              <div className="absolute bottom-0 left-0 w-full h-32 opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-500" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1440 320%22%3E%3Cpath fill=%22none%22 stroke=%22%2310b981%22 stroke-width=%222%22 d=%22M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128%22/%3E%3Cpath fill=%22none%22 stroke=%22%2310b981%22 stroke-width=%222%22 d=%22M0,256L48,261.3C96,267,192,277,288,272C384,267,480,245,576,234.7C672,224,768,224,864,229.3C960,235,1056,245,1152,229.3C1248,213,1344,171,1392,149.3L1440,128%22/%3E%3C/svg%3E')", backgroundSize: 'cover', backgroundPosition: 'bottom' }} />

              <div className="flex items-center gap-5 mb-4 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#10B981] shadow-lg shadow-[#10B981]/30 flex items-center justify-center shrink-0">
                  <Building2 className="text-white w-8 h-8" />
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className="text-[26px] sm:text-[28px] font-black text-[#0B152A]">Industries We Serve</h3>
                  <div className="w-12 sm:w-16 h-px bg-gray-200" />
                </div>
              </div>
              <p className="text-[14px] text-gray-500 leading-relaxed mb-10 max-w-sm pl-0 sm:pl-[84px] relative z-10">
                Empowering businesses across diverse industries with tailored digital solutions.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 relative z-10 mt-auto">
                {industries.map(ind => (
                  <div key={ind.name} className="flex items-center gap-2 sm:gap-3 px-3 py-3 sm:px-4 bg-white border border-gray-100 rounded-[14px] shadow-sm hover:shadow-md hover:border-emerald-200 hover:-translate-y-0.5 transition-all cursor-default">
                    <div className="w-5 h-5 flex items-center justify-center shrink-0">
                      <ind.icon className="text-[#10B981] w-4 h-4" />
                    </div>
                    <span className="text-[12px] sm:text-[13px] font-bold text-gray-800">{ind.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Development Process */}
      <section className="py-24 bg-[#F8FAFC] border-y border-blue-100 relative z-10 overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="w-10 h-px bg-blue-300" />
              <span className="text-blue-600 font-bold text-[11px] tracking-widest uppercase">Our Engineering Process</span>
              <div className="w-10 h-px bg-blue-300" />
            </div>
            <h2 className="text-[36px] md:text-[44px] font-black text-[#0B152A] mb-4">
              Built on <span className="text-blue-600">Process.</span> Driven by <span className="text-purple-600">Results.</span>
            </h2>
            <p className="text-[15px] text-gray-500 max-w-2xl mx-auto">A transparent, structured process designed to deliver your project on time and beyond expectations.</p>
          </div>

          <div className="relative">
            {/* Main vertical dashed timeline */}
            <div className="absolute left-[28px] top-4 bottom-4 w-px border-l-2 border-dashed border-gray-300 hidden md:block" />

            <div className="space-y-6 md:space-y-8">
              {processes.map((proc, idx) => (
                <motion.div 
                  key={proc.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col md:flex-row items-center gap-6 md:gap-8 relative"
                >
                  {/* Step Number Badge */}
                  <div className={`w-14 h-14 rounded-full ${proc.badgeBg} ${proc.badgeText} flex items-center justify-center font-black text-xl shrink-0 z-10 shadow-sm border-[3px] border-white mx-auto md:mx-0 relative`}>
                    {proc.step}
                  </div>

                  {/* Main Card */}
                  <div className="relative flex-1 bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-center group w-full" style={{ borderRightWidth: '6px', borderRightColor: proc.colorHex }}>
                    {/* CSS Triangle (Speech bubble pointer) hidden on mobile, shown on md+ */}
                    <div className="absolute -left-[9px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-r-[10px] border-r-white hidden md:block" style={{ filter: 'drop-shadow(-2px 0px 1px rgba(0,0,0,0.03))' }} />
                    
                    {/* Left Icon inside card */}
                    <div className={`w-16 h-16 rounded-[20px] ${proc.bgClass} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                      <proc.icon className={`w-7 h-7 ${proc.textClass}`} strokeWidth={2.5} />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-[20px] font-black text-[#0B152A] mb-2">{proc.title}</h3>
                      <p className="text-[14px] text-gray-500 leading-relaxed max-w-md mx-auto sm:mx-0">{proc.desc}</p>
                    </div>

                    {/* Right Decorative Graphic (hidden on small screens) */}
                    <div className={`w-36 h-24 rounded-2xl ${proc.bgClass}/40 flex items-center justify-center shrink-0 hidden lg:flex relative overflow-hidden group-hover:-translate-y-1 transition-transform duration-300 border border-white`}>
                       {/* Decorative background blobs */}
                       <div className={`absolute -right-4 -top-4 w-12 h-12 rounded-full ${proc.bgClass} opacity-60`} />
                       <div className={`absolute -left-2 -bottom-2 w-8 h-8 rounded-full ${proc.bgClass} opacity-60`} />
                       <div className="absolute right-4 bottom-4 flex gap-1">
                         <div className={`w-1.5 h-1.5 rounded-full ${proc.bgClass}`} />
                         <div className={`w-1.5 h-1.5 rounded-full ${proc.bgClass}`} />
                         <div className={`w-1.5 h-1.5 rounded-full ${proc.bgClass}`} />
                       </div>
                       <proc.graphicIcon className={`w-12 h-12 ${proc.textClass} opacity-80 relative z-10`} strokeWidth={1.5} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Why Choose Rudrifix */}
      <section className="py-24 bg-[#F8FAFC] relative z-10 overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-blue-400" />
              <span className="text-blue-600 font-bold text-[11px] tracking-widest uppercase">Why Choose Rudrifix?</span>
              <div className="w-8 h-px bg-blue-400" />
            </div>
            <h2 className="text-[36px] md:text-[44px] font-black text-[#0B152A] mb-4">
              More Than a Vendor. <span className="text-blue-600">Your Growth Partner.</span>
            </h2>
            <p className="text-[15px] text-gray-500 max-w-2xl mx-auto">We are not just a vendor; we are your dedicated technical growth partner.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Card 1: Purple */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col sm:flex-row gap-8 items-start group relative overflow-hidden" style={{ borderBottomWidth: '4px', borderBottomColor: '#A855F7' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full blur-3xl opacity-50 pointer-events-none group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-50 rounded-full blur-3xl opacity-50 pointer-events-none group-hover:scale-150 transition-transform duration-700" />
              
              <div className="w-24 h-24 shrink-0 rounded-full border border-dashed border-purple-200 flex items-center justify-center relative group-hover:rotate-12 transition-transform duration-500">
                <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center">
                  <Code2 className="text-purple-600 w-7 h-7" strokeWidth={2} />
                </div>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-black text-purple-600">01</span>
                  <div className="w-8 h-px bg-purple-400" />
                </div>
                <h3 className="text-[20px] font-bold text-[#0B152A] mb-4">Zero Code Bloat</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">We don't use slow, off-the-shelf templates. Every line of code is custom engineered for maximum performance and security.</p>
              </div>
            </div>

            {/* Card 2: Green */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col sm:flex-row gap-8 items-start group relative overflow-hidden" style={{ borderBottomWidth: '4px', borderBottomColor: '#10B981' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl opacity-50 pointer-events-none group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl opacity-50 pointer-events-none group-hover:scale-150 transition-transform duration-700" />
              
              <div className="w-24 h-24 shrink-0 rounded-full border border-dashed border-emerald-200 flex items-center justify-center relative group-hover:rotate-12 transition-transform duration-500">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
                  <TrendingUp className="text-emerald-600 w-7 h-7" strokeWidth={2} />
                </div>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-black text-emerald-600">02</span>
                  <div className="w-8 h-px bg-emerald-400" />
                </div>
                <h3 className="text-[20px] font-bold text-[#0B152A] mb-4">EEAT & Technical SEO Focus</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">Search engines demand technical perfection. Our software architecture natively satisfies Google's deepest requirements for ranking.</p>
              </div>
            </div>

            {/* Card 3: Blue */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col sm:flex-row gap-8 items-start group relative overflow-hidden" style={{ borderBottomWidth: '4px', borderBottomColor: '#3B82F6' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none group-hover:scale-150 transition-transform duration-700" />
              
              <div className="w-24 h-24 shrink-0 rounded-full border border-dashed border-blue-200 flex items-center justify-center relative group-hover:rotate-12 transition-transform duration-500">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                  <Users className="text-blue-600 w-7 h-7" strokeWidth={2} />
                </div>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-black text-blue-600">03</span>
                  <div className="w-8 h-px bg-blue-400" />
                </div>
                <h3 className="text-[20px] font-bold text-[#0B152A] mb-4">Led by Engineers</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">You work directly with highly skilled software developers and digital marketers who understand the entire pipeline of business growth.</p>
              </div>
            </div>

            {/* Card 4: Orange */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col sm:flex-row gap-8 items-start group relative overflow-hidden" style={{ borderBottomWidth: '4px', borderBottomColor: '#F97316' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full blur-3xl opacity-50 pointer-events-none group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-50 rounded-full blur-3xl opacity-50 pointer-events-none group-hover:scale-150 transition-transform duration-700" />
              
              <div className="w-24 h-24 shrink-0 rounded-full border border-dashed border-orange-200 flex items-center justify-center relative group-hover:rotate-12 transition-transform duration-500">
                <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center">
                  <BarChart3 className="text-orange-600 w-7 h-7" strokeWidth={2} />
                </div>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-black text-orange-600">04</span>
                  <div className="w-8 h-px bg-orange-400" />
                </div>
                <h3 className="text-[20px] font-bold text-[#0B152A] mb-4">Data-Driven Execution</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">No guesswork. Every decision, from UI design to ad spend, is dictated by hard analytics and deep-funnel tracking.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 11. FAQ Section */}
      <FAQSection faqs={faqs} />
      
      {/* CTA Section */}
      <section className="py-12 sm:py-24 relative overflow-hidden z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-blue-600 border border-blue-500 rounded-[2rem] md:rounded-[3rem] p-8 sm:p-10 md:p-20 relative overflow-hidden shadow-2xl shadow-blue-600/30">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
          <Rocket className="absolute top-0 right-0 text-white/10 w-64 h-64 -translate-y-1/2 translate-x-1/4 -rotate-12" />
          
          <h2 className="text-[28px] leading-tight sm:text-4xl md:text-5xl font-black text-white mb-4 md:mb-6 relative z-10">Ready to engineer your growth?</h2>
          <p className="text-[15px] sm:text-base md:text-xl text-blue-100 mb-8 md:mb-10 leading-snug md:leading-relaxed max-w-2xl mx-auto relative z-10">Partner with Thanga Mari and the Rudrifix team to build software and marketing systems that dominate your industry.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 md:px-8 md:py-4 bg-white text-blue-700 rounded-xl font-bold hover:bg-gray-50 transition-colors relative z-10 text-base md:text-lg shadow-xl shadow-black/10 hover:scale-105 transform duration-300">
            Contact Us Today <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </div>
  );
}
