import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { buildFAQSchema } from '../../utils/schemaBuilders';

export default function FAQSection({ faqs, title = "Frequently Asked Questions" }) {
  const [openFaq, setOpenFaq] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  const faqSchema = buildFAQSchema(faqs);

  return (
    <section className="py-24 relative z-10 bg-white/50 border-t border-blue-50">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-6">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our services, process, and pricing.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              key={i} 
              className="border border-blue-100 rounded-2xl bg-white shadow-sm overflow-hidden hover:border-blue-300 transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-lg text-gray-900 pr-8">{faq.q}</span>
                <ChevronDown className={`text-blue-500 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-blue-50 prose prose-blue max-w-none">
                      {/* Short Answer (optional bold text) */}
                      {faq.shortAnswer && <p className="font-semibold text-gray-800 mb-2">{faq.shortAnswer}</p>}
                      {/* Detailed Answer */}
                      <p>{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
