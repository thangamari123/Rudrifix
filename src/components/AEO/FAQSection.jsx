import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, User, Users, UserCheck, Shield, Briefcase, Globe, ShoppingCart, LayoutTemplate, Database, Box, Bot, Building2, Phone, Star, Code2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { buildFAQSchema } from '../../utils/schemaBuilders';

const iconStyles = [
  { bg: 'bg-blue-50', text: 'text-blue-500', Icon: User },
  { bg: 'bg-purple-50', text: 'text-purple-500', Icon: Users },
  { bg: 'bg-emerald-50', text: 'text-emerald-500', Icon: UserCheck },
  { bg: 'bg-orange-50', text: 'text-orange-500', Icon: Shield },
  { bg: 'bg-pink-50', text: 'text-pink-500', Icon: Briefcase },
  { bg: 'bg-blue-50', text: 'text-blue-500', Icon: Globe },
  { bg: 'bg-purple-50', text: 'text-purple-500', Icon: ShoppingCart },
  { bg: 'bg-emerald-50', text: 'text-emerald-500', Icon: LayoutTemplate },
  { bg: 'bg-orange-50', text: 'text-orange-500', Icon: Database },
  { bg: 'bg-pink-50', text: 'text-pink-500', Icon: Box },
  { bg: 'bg-blue-50', text: 'text-blue-500', Icon: Bot },
  { bg: 'bg-emerald-50', text: 'text-emerald-500', Icon: Building2 },
  { bg: 'bg-orange-50', text: 'text-orange-500', Icon: Phone },
  { bg: 'bg-purple-50', text: 'text-purple-500', Icon: Star },
  { bg: 'bg-blue-50', text: 'text-blue-500', Icon: Code2 },
];

export default function FAQSection({ faqs, title = "Frequently Asked Questions" }) {
  const [openFaq, setOpenFaq] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  const faqSchema = buildFAQSchema(faqs);

  return (
    <section className="py-12 md:py-10 md:py-16 relative z-10 bg-[#F8FAFC]">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      
      {/* Background Dots Left */}
      <div className="absolute top-20 left-10 grid grid-cols-3 gap-3 opacity-20 pointer-events-none hidden lg:grid">
        {[...Array(15)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-blue-400 rounded-full" />)}
      </div>
      {/* Background Dots Right */}
      <div className="absolute bottom-20 right-10 grid grid-cols-3 gap-3 opacity-20 pointer-events-none hidden lg:grid">
        {[...Array(15)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-blue-400 rounded-full" />)}
      </div>

      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-blue-300" />
            <MessageCircle className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-bold text-[13px] tracking-widest uppercase">FAQ</span>
            <div className="w-6 h-px bg-blue-300" />
          </div>
          <h2 className="text-[36px] md:text-[44px] font-black text-[#0B152A] mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-[15px] text-gray-500 max-w-2xl mx-auto">
            Everything you need to know about our services, process, and pricing.
          </p>
        </div>
        
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const style = iconStyles[i % iconStyles.length];
            const Icon = style.Icon;
            const isOpen = openFaq === i;

            return (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                key={i} 
                className="bg-white rounded-[20px] shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-gray-100/50 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left group"
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className={`w-12 h-12 rounded-[16px] ${style.bg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className={`w-5 h-5 ${style.text}`} strokeWidth={2.5} />
                    </div>
                    <span className="font-bold text-[15px] sm:text-[16px] text-[#0B152A] pr-4 group-hover:text-blue-600 transition-colors">{faq.q}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <ChevronDown className={`w-4 h-4 text-blue-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} strokeWidth={3} />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-6 pt-1 ml-[64px] sm:ml-[72px] text-[14px] text-gray-500 leading-relaxed max-w-2xl">
                        {faq.shortAnswer && <p className="font-bold text-gray-700 mb-2">{faq.shortAnswer}</p>}
                        <p>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
