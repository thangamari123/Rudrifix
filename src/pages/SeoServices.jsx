import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';
import { buildWebPageSchema, buildServiceSchema, buildOrganizationSchema } from '../utils/schemaBuilders';
import SummaryBlock from '../components/AEO/SummaryBlock';
import FAQSection from '../components/AEO/FAQSection';
import ContentSection from '../components/AEO/ContentSection';
import RelatedServices from '../components/AEO/RelatedServices';
import RelatedKeywords from '../components/AEO/RelatedKeywords';
import { ArrowRight, CheckCircle2, Search, TrendingUp, ChevronDown, Rocket, PiggyBank } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "How long does it take to see results from SEO?",
    shortAnswer: "Typically, it takes 3 to 6 months to see significant SEO results.",
    a: "SEO is a long-term strategy. While technical fixes can yield quick wins within weeks, ranking for competitive keywords usually takes 3-6 months as search engines need time to crawl, evaluate, and trust your content and backlinks."
  },
  {
    q: "Do you guarantee first page rankings?",
    shortAnswer: "No reputable agency can guarantee #1 rankings.",
    a: "Google explicitly warns against agencies that guarantee rankings. We guarantee that we will implement the industry's best practices, improve your site's health, and significantly increase your organic visibility and traffic over time."
  },
  {
    q: "What is the difference between On-page and Off-page SEO?",
    shortAnswer: "On-page is what you do on your site; Off-page is what happens elsewhere.",
    a: "On-page SEO involves optimizing content, HTML, and site speed on your website. Off-page SEO involves building authority through backlinks, social signals, and external mentions across the web."
  },
  {
    q: "Is SEO better than Google Ads?",
    shortAnswer: "SEO offers long-term ROI, while Ads offer instant traffic.",
    a: "They serve different purposes. Ads give you instant visibility as long as you pay. SEO takes longer to build but provides sustainable, free traffic and higher trust in the long run. The best strategy often combines both."
  },
  {
    q: "Do I need a new website for SEO?",
    shortAnswer: "Not always, but sometimes a rebuild is cheaper than fixing a broken site.",
    a: "If your current website is incredibly slow, built on an outdated platform, or has a terrible user experience, we may recommend a rebuild. However, in most cases, we can optimize your existing website."
  },
  {
    q: "What is Local SEO?",
    shortAnswer: "Local SEO helps you rank for location-based searches.",
    a: "Local SEO focuses on optimizing your Google Business Profile and website so you appear in the 'Local Pack' (the map results) when people search for services near them, like 'SEO agency near me'."
  },
  {
    q: "How do you track SEO success?",
    shortAnswer: "We track organic traffic, keyword rankings, and conversions.",
    a: "We use tools like Google Analytics 4 (GA4), Google Search Console, and Ahrefs to track metrics that matter: not just traffic, but actual leads, sales, and ROI generated from organic search."
  },
  {
    q: "Are backlinks still important?",
    shortAnswer: "Yes, high-quality backlinks are a major ranking factor.",
    a: "Backlinks act as 'votes of confidence' from other websites. However, quality matters more than quantity. Spammy links will penalize your site, whereas a few high-authority links can skyrocket your rankings."
  },
  {
    q: "How much do your SEO services cost?",
    shortAnswer: "Our monthly SEO retainers start at $1,000.",
    a: "Pricing depends on the competitiveness of your industry, the current state of your website, and your growth goals. We offer custom strategies, not one-size-fits-all packages."
  },
  {
    q: "Will you provide monthly reports?",
    shortAnswer: "Yes, we provide transparent monthly reporting.",
    a: "Every month you will receive a detailed report showing your traffic growth, keyword movements, work completed, and the strategy for the upcoming month."
  }
];

const seoSchemas = [
  buildOrganizationSchema(),
  buildWebPageSchema(
    "Best SEO Company in Tamil Nadu | Rank #1 on Google | Rudrifix",
    "Stop losing customers to your competitors. Our data-driven SEO strategies guarantee higher rankings, more organic traffic, and actual business growth.",
    "https://rudrifix.com/seo-services"
  ),
  buildServiceSchema(
    "Search Engine Optimization (SEO)",
    "Data-driven SEO strategies, technical SEO, content marketing, and link building services.",
    "Rudrifix",
    "https://rudrifix.com/seo-services"
  )
];

const pageAEO = {
  summary: "Rudrifix is a premier SEO agency specializing in technical SEO, local search, and content strategy. We help businesses dominate search engine rankings, drive high-intent organic traffic, and increase conversions through sustainable, white-hat SEO practices.",
  takeaways: [
    "Data-driven strategies targeting high-intent keywords.",
    "Comprehensive technical SEO audits and Core Web Vitals optimization.",
    "High-authority backlink building and digital PR.",
    "Transparent monthly reporting on ROI and traffic growth."
  ],
  pricing: "Starting at ₹25,000/mo",
  timeline: "Ongoing (3-6 months for initial results)",
  industries: ["B2B SaaS", "E-commerce", "Local Businesses", "Healthcare", "Real Estate"],
  useCases: [
    { title: "Organic Growth", desc: "Reduce reliance on paid ads by building sustainable traffic." },
    { title: "Local Dominance", desc: "Capture the 'near me' searches in your city." },
    { title: "E-commerce SEO", desc: "Rank product pages to increase direct sales." }
  ],
  prosCons: {
    pros: ["Highest long-term ROI", "Builds brand authority and trust", "Traffic continues even if budget pauses"],
    cons: ["Takes 3-6 months to see significant results", "Requires ongoing content creation"]
  },
  comparisonTable: [
    { feature: "Technical SEO Audits", others: false },
    { feature: "White-hat Link Building", others: false },
    { feature: "Transparent Reporting", others: false },
    { feature: "Keyword Research", others: true }
  ]
};

const relatedServices = [
  { name: "Content Marketing", desc: "Engaging content that ranks and converts.", path: "/content-marketing" },
  { name: "Web Development", desc: "Lightning-fast, SEO-friendly websites.", path: "/web-development" },
  { name: "Google Ads", desc: "Instant traffic while your SEO builds.", path: "/google-ads-management" },
  { name: "Local SEO", desc: "Dominate the Google Map Pack.", path: "/local-seo" }
];

const processes = [
  { step: '01', title: 'Comprehensive SEO Audit', desc: "Before making any changes, we conduct a deep-dive technical and content audit of your website to identify crawling errors, page speed bottlenecks, and content gaps." },
  { step: '02', title: 'Keyword Research & Strategy', desc: "We target high-intent keywords for on-page and off-page SEO, identifying the exact phrases your ideal customers are searching for across all districts and states." },
  { step: '03', title: 'On-Page & Off-Page SEO', desc: "We optimize your meta tags, headers, and internal linking structure for on-page SEO, and build authoritative backlinks for off-page SEO to ensure high rankings on Google nationwide." },
  { step: '04', title: 'Local & National Ranking', desc: "Whether you're targeting a specific city or looking to rank in all districts and states on Google, we dominate search results through optimized Google Business Profiles and localized content." }
];

export default function SeoServices() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#E0F1FB] text-gray-900 selection:bg-blue-500/30">
      <SEO 
        title="Best SEO Company in Tamil Nadu | Rank #1 on Google | Rudrifix"
        description="Stop losing customers to your competitors. Our data-driven SEO strategies guarantee higher rankings, more organic traffic, and actual business growth."
        keywords="SEO Company Chennai, SEO Company Coimbatore, SEO Company Madurai, Search Engine Optimization Tamil Nadu, best SEO agency"
        canonicalUrl="/seo-services"
        schemas={seoSchemas}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Gradients */}
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
            <span className="text-sm font-bold text-blue-800 tracking-wide uppercase">Organic Growth Services</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight mb-8 leading-[1.1]"
          >
            Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">SEO Services</span> <br className="hidden md:block" />
            That Drive Real Results
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Struggling to get found on Google? Our comprehensive On-Page and Off-Page SEO strategies are designed to increase your visibility, drive high-quality organic traffic, and secure top rankings across all districts and states.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/#contact" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20 hover:-translate-y-1">
              Get a Free Quote <ArrowRight size={20} />
            </Link>
            <a href="#process" className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-gray-800 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
              View Strategy
            </a>
          </motion.div>
        </div>
      </section>

      {/* Core Features Bento Grid */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Large Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-white border border-blue-100 rounded-3xl p-8 relative overflow-hidden group shadow-xl shadow-gray-200/50"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl group-hover:bg-blue-100 transition-colors" />
              <TrendingUp className="text-blue-600 mb-6 relative z-10" size={40} />
              <h3 className="text-3xl font-bold text-gray-900 mb-4 relative z-10">Why Your Business Needs SEO</h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-xl relative z-10">
                In today's highly competitive digital landscape, simply having a website is not enough. If your business isn't appearing on the first page of Google, you are losing potential customers to your competitors. Our SEO methodology focuses on a holistic approach that improves your website's technical health, user experience, and content authority for sustainable, long-term growth.
              </p>
            </motion.div>

            {/* Small Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-blue-100 rounded-3xl p-8 relative overflow-hidden group shadow-xl shadow-gray-200/50"
            >
               <div className="absolute bottom-0 right-0 w-32 h-32 bg-violet-50 rounded-full blur-2xl group-hover:bg-violet-100 transition-colors" />
              <PiggyBank className="text-violet-600 mb-6 relative z-10" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">The True ROI</h3>
              <p className="text-gray-600 relative z-10">Unlike paid advertising where traffic stops the moment you stop paying, SEO generates free, high-quality organic traffic for years to come.</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-white/50 border-y border-blue-100 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Our Comprehensive SEO Strategy</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A transparent, structured process designed to deliver long-term organic growth and dominate search engine results.</p>
          </div>

          <div className="space-y-6">
            {processes.map((proc, idx) => (
              <motion.div 
                key={proc.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col md:flex-row gap-6 items-start md:items-center p-6 md:p-8 rounded-3xl bg-white border border-blue-100 hover:border-blue-300 transition-colors shadow-lg shadow-gray-200/30 group"
              >
                <div className="text-5xl font-black text-blue-100 group-hover:text-blue-200 transition-colors">
                  {proc.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                    {proc.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{proc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AEO Summary & Key Takeaways */}
      <SummaryBlock summary={pageAEO.summary} takeaways={pageAEO.takeaways} />

      {/* GEO Content Section (Pricing, Timeline, Pros/Cons, Comparison) */}
      <ContentSection 
        pricing={pageAEO.pricing}
        timeline={pageAEO.timeline}
        industries={pageAEO.industries}
        useCases={pageAEO.useCases}
        prosCons={pageAEO.prosCons}
        comparisonTable={pageAEO.comparisonTable}
      />

      {/* FAQs */}
      {/* Related Keywords & Service Areas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RelatedKeywords serviceSlug="seo-services" serviceName="SEO Services" />
      </div>

      <FAQSection faqs={faqs} />

      {/* CTA Section */}
      <section className="py-2 sm:py-6 md:py-24 relative overflow-hidden z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-blue-600 border border-blue-500 rounded-[2rem] md:rounded-[3rem] p-8 sm:p-10 md:p-20 relative overflow-hidden shadow-2xl shadow-blue-600/30">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
          <Rocket className="absolute top-0 right-0 text-white/10 w-64 h-64 -translate-y-1/2 translate-x-1/4 -rotate-12" />
          
          <h2 className="text-[28px] leading-tight sm:text-4xl md:text-5xl font-black text-white mb-4 md:mb-6 relative z-10">Ready to rank higher?</h2>
          <p className="text-[15px] sm:text-base md:text-xl text-blue-100 mb-8 md:mb-10 leading-snug md:leading-relaxed max-w-2xl mx-auto relative z-10">Partner with Rudrifix and let our experts handle the heavy lifting while you focus on what you do best.</p>
          <Link to="/#contact" className="inline-flex items-center gap-2 px-5 py-3 md:px-8 md:py-4 bg-white text-blue-700 rounded-xl font-bold hover:bg-gray-50 transition-colors relative z-10 text-base md:text-lg shadow-xl shadow-black/10 hover:scale-105 transform duration-300">
            Get Your Free Audit <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Internal Linking / Related Services */}
      <RelatedServices services={relatedServices} />
    </div>
  );
}
