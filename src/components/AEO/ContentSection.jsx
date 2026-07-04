import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Building2, Wallet, Clock, Users } from 'lucide-react';

export default function ContentSection({ 
  pricing, 
  timeline, 
  prosCons, 
  comparisonTable, 
  industries,
  useCases
}) {
  return (
    <section className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Pros & Cons / Comparison */}
        {(prosCons || comparisonTable) && (
          <div className="grid md:grid-cols-2 gap-8">
            {prosCons && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-blue-100 rounded-3xl p-8 shadow-lg shadow-gray-200/50"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Pros & Cons</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-emerald-600 mb-3 flex items-center gap-2"><Check size={20}/> Advantages</h4>
                    <ul className="space-y-2">
                      {prosCons.pros.map((pro, i) => (
                        <li key={i} className="text-gray-700 flex items-start gap-2 text-sm md:text-base">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" /> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-500 mb-3 flex items-center gap-2"><X size={20}/> Disadvantages</h4>
                    <ul className="space-y-2">
                      {prosCons.cons.map((con, i) => (
                        <li key={i} className="text-gray-700 flex items-start gap-2 text-sm md:text-base">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2" /> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {comparisonTable && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-blue-100 rounded-3xl p-8 shadow-lg shadow-gray-200/50 overflow-x-auto"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Comparison</h3>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-blue-100">
                      <th className="py-3 px-4 font-bold text-gray-900">Feature</th>
                      <th className="py-3 px-4 font-bold text-blue-600">Rudrifix</th>
                      <th className="py-3 px-4 font-bold text-gray-500">Others</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonTable.map((row, i) => (
                      <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-700 font-medium">{row.feature}</td>
                        <td className="py-3 px-4 text-emerald-600"><Check size={20}/></td>
                        <td className="py-3 px-4 text-gray-400">{row.others ? <Check size={20}/> : <X size={20}/>}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}
          </div>
        )}

        {/* Pricing, Timeline & Metrics */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {pricing && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white border border-blue-100 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow"
            >
              <Wallet className="w-10 h-10 mx-auto text-blue-500 mb-4" />
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide">Investment</h4>
              <p className="text-xl font-black text-gray-900 mt-2">{pricing}</p>
            </motion.div>
          )}
          {timeline && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-blue-100 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow"
            >
              <Clock className="w-10 h-10 mx-auto text-blue-500 mb-4" />
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide">Timeline</h4>
              <p className="text-xl font-black text-gray-900 mt-2">{timeline}</p>
            </motion.div>
          )}
          {industries && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-blue-100 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow md:col-span-2"
            >
              <Building2 className="w-10 h-10 mx-auto text-blue-500 mb-4" />
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide">Industries Served</h4>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {industries.map((ind, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    {ind}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Use Cases */}
        {useCases && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-violet-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3"><Users size={32}/> Who Is This For?</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
              {useCases.map((useCase, i) => (
                <div key={i} className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <h4 className="text-lg font-bold mb-2">{useCase.title}</h4>
                  <p className="text-blue-100 text-sm">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
        
      </div>
    </section>
  );
}
