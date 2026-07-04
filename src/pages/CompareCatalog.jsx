import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { comparisons } from '../data/comparisons';
import SEO from '../components/SEO';
import BreadcrumbNav from '../components/AEO/BreadcrumbNav';
import { ArrowRight } from 'lucide-react';

export default function CompareCatalog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const crumbs = [{ label: 'Compare', href: '/compare' }];
  const compareKeys = Object.keys(comparisons);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-900 pt-32 pb-20">
      <SEO 
        title="Compare Technologies & Services | Rudrifix"
        description="Read comprehensive technical and business comparisons between different platforms, tech stacks, and digital marketing strategies."
        canonicalUrl="/compare"
      />
      <div className="max-w-6xl mx-auto px-4">
        <BreadcrumbNav crumbs={crumbs} />
        <h1 className="text-4xl font-black mb-4">Comparisons & Buying Guides</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          Not sure which stack or strategy is right for your business? Read our detailed, unbiased comparisons.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {compareKeys.map((key) => {
            const data = comparisons[key];
            const entities = key.split('-vs-').map(s => s.charAt(0).toUpperCase() + s.slice(1));
            const formatName = `${entities[0]} vs ${entities[1]}`;
            
            return (
              <Link key={key} to={`/compare/${key}`} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group">
                <h2 className="text-2xl font-bold mb-3">{formatName}</h2>
                <p className="text-gray-500 mb-6 line-clamp-3">{data.description}</p>
                <div className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Read Comparison <ArrowRight size={18} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
