import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, Code2, Smartphone, Zap, Search, ChevronDown, Rocket, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "How long does it take to build a custom website?",
    a: "A typical custom website project takes between 4 to 8 weeks from initial discovery to final launch. E-commerce platforms or highly complex web applications may take longer. We provide a detailed timeline before the project begins."
  },
  {
    q: "Will I be able to update the website myself?",
    a: "Yes! We can integrate a user-friendly Headless CMS (Content Management System) that allows you to easily update text, change images, and publish blog posts without needing to write any code."
  },
  {
    q: "Do you provide web hosting?",
    a: "Yes, we offer high-performance, secure cloud hosting solutions as part of our maintenance packages to ensure your website is always fast and online."
  }
];

const processes = [
  { step: '01', title: 'Discovery & Strategy', desc: 'We map out the ideal user journey and understand your business goals to ensure the website is structured logically.' },
  { step: '02', title: 'UI/UX Design', desc: 'Our team creates custom, modern interfaces. We provide high-fidelity mockups so you know exactly what the site will look like.' },
  { step: '03', title: 'Custom Development', desc: 'We build using modern tech stacks (React, Next.js, Tailwind) to ensure blazing-fast speeds and seamless responsiveness.' },
  { step: '04', title: 'SEO & Tech Setup', desc: 'We build SEO best practices directly into the code—clean HTML, schema markup, and optimized Core Web Vitals.' },
  { step: '05', title: 'Testing & Launch', desc: 'Rigorous testing across all devices. We handle deployment and domain migration smoothly with zero downtime.' }
];

export default function WebDevelopment() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#E0F1FB] text-gray-900 selection:bg-blue-500/30">
      <Helmet>
        <title>Web Development Company in Chennai | Custom Websites | Rudrifix</title>
        <meta name="description" content="We build lightning-fast, SEO-optimized, and conversion-focused websites that elevate your brand and drive actual business results." />
        <meta name="keywords" content="Web Development Company Chennai, Web Development Company Coimbatore, Web Development Company Madurai, Web Development Company Tiruchirappalli, Web Development Company Salem, Web Development Company Tiruppur, Web Development Company Erode, Web Development Company Tirunelveli, Web Development Company Thoothukudi, Web Development Company Tuticorin" />
      </Helmet>

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
            <span className="text-sm font-bold text-blue-800 tracking-wide uppercase">Premium Web Engineering</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight mb-8 leading-[1.1]"
          >
            Websites Built To <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              Dominate & Convert
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Your website is your 24/7 salesperson. We engineer lightning-fast, highly-optimized digital experiences that turn visitors into loyal customers.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/#contact" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20 hover:-translate-y-1">
              Start Your Project <ArrowRight size={20} />
            </Link>
            <a href="#process" className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-gray-800 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
              View Our Process
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
              <Zap className="text-blue-600 mb-6 relative z-10" size={40} />
              <h3 className="text-3xl font-bold text-gray-900 mb-4 relative z-10">Lightning Fast Performance</h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-xl relative z-10">
                Slow websites kill conversions. We utilize modern frameworks like React and Next.js to deliver sub-second load times. A faster site means better user experience, higher SEO rankings, and drastically lower bounce rates.
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
               <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-50 rounded-full blur-2xl group-hover:bg-pink-100 transition-colors" />
              <Smartphone className="text-pink-600 mb-6 relative z-10" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Mobile First</h3>
              <p className="text-gray-600 relative z-10">Over 60% of traffic is mobile. We design for the small screen first, ensuring flawless responsiveness.</p>
            </motion.div>

            {/* Small Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-blue-100 rounded-3xl p-8 relative overflow-hidden group shadow-xl shadow-gray-200/50"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-50 rounded-full blur-2xl group-hover:bg-emerald-100 transition-colors" />
              <Search className="text-emerald-600 mb-6 relative z-10" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">SEO Baked In</h3>
              <p className="text-gray-600 relative z-10">Clean HTML, auto-sitemaps, and strict adherence to Google's Core Web Vitals.</p>
            </motion.div>

            {/* Medium Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 bg-white border border-blue-100 rounded-3xl p-8 relative overflow-hidden group flex flex-col md:flex-row items-center gap-8 shadow-xl shadow-gray-200/50"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="flex-1 relative z-10">
                <Code2 className="text-violet-600 mb-6" size={40} />
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Custom Code, No Bloat</h3>
                <p className="text-gray-600 text-lg">
                  We don't rely on bloated templates. Every line of code is written specifically for your business, ensuring unparalleled security, scalability, and design freedom.
                </p>
               </div>
               <div className="w-full md:w-auto flex flex-wrap gap-3 relative z-10">
                 {['React', 'Next.js', 'Tailwind CSS', 'Node.js'].map(tech => (
                   <span key={tech} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 shadow-sm">
                     {tech}
                   </span>
                 ))}
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-white/50 border-y border-blue-100 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">How We Build</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A transparent, structured process designed to deliver your project on time and beyond expectations.</p>
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

      {/* FAQs */}
      <section className="py-24 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="border border-blue-200 rounded-2xl bg-white shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-lg text-gray-900">{faq.q}</span>
                  <ChevronDown className={`text-blue-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-blue-50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Service Areas */}
      <section className="hidden py-24 relative z-10 bg-white/50 border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-sm font-bold text-blue-800 tracking-wide uppercase">Locations We Serve</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">Dominating Tamil Nadu with Expert Web Development Company</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            We provide top-tier web development company across all major cities in Tamil Nadu. Connect with our local experts today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tiruppur", "Erode", "Tirunelveli", "Thoothukudi", "Tuticorin"].map((city) => (
              <div key={city} className="px-6 py-3 bg-white border border-blue-100 rounded-2xl shadow-sm text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 transition-all hover:-translate-y-1 cursor-default flex items-center gap-2">
                <span className="text-blue-500">📍</span> Web Development Company {city}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-2 sm:py-6 md:py-24 relative overflow-hidden z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-blue-600 border border-blue-500 rounded-[2rem] md:rounded-[3rem] p-8 sm:p-10 md:p-20 relative overflow-hidden shadow-2xl shadow-blue-600/30">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
          <Rocket className="absolute top-0 right-0 text-white/10 w-64 h-64 -translate-y-1/2 translate-x-1/4 -rotate-12" />
          
          <h2 className="text-[28px] leading-tight sm:text-4xl md:text-5xl font-black text-white mb-4 md:mb-6 relative z-10">Ready to build your digital home?</h2>
          <p className="text-[15px] sm:text-base md:text-xl text-blue-100 mb-8 md:mb-10 leading-snug md:leading-relaxed max-w-2xl mx-auto relative z-10">Stop losing customers to outdated design and slow load times. Let's build a website that truly represents your brand.</p>
          <Link to="/#contact" className="inline-flex items-center gap-2 px-5 py-3 md:px-8 md:py-4 bg-white text-blue-700 rounded-xl font-bold hover:bg-gray-50 transition-colors relative z-10 text-base md:text-lg shadow-xl shadow-black/10 hover:scale-105 transform duration-300">
            Get a Free Proposal <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
