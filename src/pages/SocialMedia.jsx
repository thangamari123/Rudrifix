import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { ArrowRight, CheckCircle2, Heart, Users, ChevronDown, Rocket, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "Which social media platforms should my business be on?",
    a: "It depends entirely on your target audience. For B2B companies, LinkedIn is crucial. For lifestyle brands, Instagram and TikTok are highly effective. We will help you identify the best platforms during our initial audit."
  },
  {
    q: "How often will you post on my accounts?",
    a: "Posting frequency varies based on the package you choose and the specific platform. However, consistency is key, and we typically recommend posting at least 3-5 times a week on primary channels to maintain strong engagement."
  },
  {
    q: "Can you handle customer complaints on social media?",
    a: "Yes, our community management services include monitoring for negative feedback or complaints. We will work with you to establish a protocol for addressing these issues promptly and professionally online."
  }
];

const processes = [
  { step: '01', title: 'Comprehensive Social Audit', desc: "We evaluate your current social media presence, analyze your competitors, and determine which platforms are most effective for your business goals." },
  { step: '02', title: 'Content Strategy & Planning', desc: "We develop a customized content calendar that balances educational, entertaining, and promotional content while keeping your brand voice consistent." },
  { step: '03', title: 'High-Quality Content Creation', desc: "Our creative team designs eye-catching graphics, produces engaging short-form videos, and writes compelling captions." },
  { step: '04', title: 'Community Management', desc: "We actively monitor your accounts, respond to comments, answer direct messages, and engage with your community to foster brand loyalty." }
];

export default function SocialMedia() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#E0F1FB] text-gray-900 selection:bg-blue-500/30">
      <SEO 
        canonicalUrl="/social-media-marketing"
        title="Social Media Marketing Agency in Chennai | Rudrifix"
        description="Build brand awareness and engage with your community through expert Social Media Marketing. We manage your presence across all major platforms."
        keywords="Social Media Marketing Agency Chennai, Social Media Marketing Agency Coimbatore, Social Media Marketing Agency Madurai, Social Media Marketing Agency Tiruchirappalli, Social Media Marketing Agency Salem, Social Media Marketing Agency Tiruppur, Social Media Marketing Agency Erode, Social Media Marketing Agency Tirunelveli, Social Media Marketing Agency Thoothukudi, Social Media Marketing Agency Tuticorin"
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
            <span className="text-sm font-bold text-blue-800 tracking-wide uppercase">Community & Brand Building</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight mb-8 leading-[1.1]"
          >
            Engaging <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              Social Media Marketing
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Build a loyal community, increase brand awareness, and turn followers into paying customers with our comprehensive social media management services.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/#contact" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20 hover:-translate-y-1">
              Talk to an Expert <ArrowRight size={20} />
            </Link>
            <a href="#process" className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-gray-800 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
              View Process
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
              <Users className="text-blue-600 mb-6 relative z-10" size={40} />
              <h3 className="text-3xl font-bold text-gray-900 mb-4 relative z-10">Why Social Media Matters</h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-xl relative z-10">
                Your customers are spending hours every day on social media platforms. If your brand isn't consistently present and engaging, you are leaving money on the table. Social media is a critical touchpoint for customer service, brand building, and sales.
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
              <Heart className="text-violet-600 mb-6 relative z-10" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Real Relationships</h3>
              <p className="text-gray-600 relative z-10">Vanity metrics like follower count don't pay the bills. We focus on building an engaged community of followers who actually care about your brand.</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-white/50 border-y border-blue-100 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Our Management Process</h2>
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
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">Dominating Tamil Nadu with Expert Social Media Marketing Agency</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            We provide top-tier social media marketing agency across all major cities in Tamil Nadu. Connect with our local experts today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tiruppur", "Erode", "Tirunelveli", "Thoothukudi", "Tuticorin"].map((city) => (
              <div key={city} className="px-6 py-3 bg-white border border-blue-100 rounded-2xl shadow-sm text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 transition-all hover:-translate-y-1 cursor-default flex items-center gap-2">
                <span className="text-blue-500">📍</span> Social Media Marketing Agency {city}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-2 sm:py-6 md:py-24 relative overflow-hidden z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-blue-600 border border-blue-500 rounded-[2rem] md:rounded-[3rem] p-8 sm:p-10 md:p-20 relative overflow-hidden shadow-2xl shadow-blue-600/30">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
          <MessageCircle className="absolute top-0 right-0 text-white/10 w-64 h-64 -translate-y-1/2 translate-x-1/4 -rotate-12" />
          
          <h2 className="text-[28px] leading-tight sm:text-4xl md:text-5xl font-black text-white mb-4 md:mb-6 relative z-10">Ready to scale your business?</h2>
          <p className="text-[15px] sm:text-base md:text-xl text-blue-100 mb-8 md:mb-10 leading-snug md:leading-relaxed max-w-2xl mx-auto relative z-10">Partner with Rudrifix and let our experts handle the heavy lifting while you focus on what you do best.</p>
          <Link to="/#contact" className="inline-flex items-center gap-2 px-5 py-3 md:px-8 md:py-4 bg-white text-blue-700 rounded-xl font-bold hover:bg-gray-50 transition-colors relative z-10 text-base md:text-lg shadow-xl shadow-black/10 hover:scale-105 transform duration-300">
            Talk to an Expert <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
