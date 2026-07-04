import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Link as LinkIcon } from 'lucide-react';

export default function RelatedServices({ services }) {
  if (!services || services.length === 0) return null;

  return (
    <section className="py-16 relative z-10 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-blue-100 rounded-lg">
            <LinkIcon className="text-blue-600" size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Explore Related Services</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link 
                to={svc.path} 
                className="group block bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {svc.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {svc.desc}
                </p>
                <div className="text-blue-600 font-medium text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Learn more <ArrowRight size={16} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
