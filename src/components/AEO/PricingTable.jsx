import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PricingTable({ tiers }) {
  return (
    <div className="grid md:grid-cols-3 gap-8 my-12">
      {tiers.map((tier, idx) => (
        <div 
          key={idx} 
          className={`relative bg-white rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
            tier.isPopular ? 'border-blue-500 shadow-blue-500/20 shadow-xl' : 'border-gray-200 shadow-sm'
          }`}
        >
          {tier.isPopular && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Most Popular
            </div>
          )}
          
          <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
          <p className="text-gray-500 text-sm mb-6 h-10">{tier.description}</p>
          
          <div className="mb-6">
            <span className="text-4xl font-black text-gray-900">{tier.price}</span>
            {tier.interval && <span className="text-gray-500">/{tier.interval}</span>}
          </div>
          
          <Link 
            to={tier.ctaLink || '/#contact'}
            className={`block w-full py-3 rounded-xl text-center font-bold transition-colors mb-8 ${
              tier.isPopular 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}
          >
            {tier.ctaText || 'Get Started'}
          </Link>
          
          <ul className="space-y-4">
            {tier.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600 leading-snug">{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
