import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap } from 'lucide-react';

export default function SummaryBlock({ summary, takeaways }) {
  if (!summary && (!takeaways || takeaways.length === 0)) return null;

  return (
    <section className="py-12 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-blue-100 rounded-3xl p-8 md:p-10 shadow-xl shadow-gray-200/50 flex flex-col md:flex-row gap-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl pointer-events-none" />
          
          {summary && (
            <div className="flex-1 relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="text-blue-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">AI Quick Summary</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg font-medium">
                {summary}
              </p>
            </div>
          )}

          {takeaways && takeaways.length > 0 && (
            <div className="flex-1 relative z-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Takeaways</h3>
              <ul className="space-y-3">
                {takeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
