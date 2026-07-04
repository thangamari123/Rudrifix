import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { industries } from '../data/industries';
import SEO from '../components/SEO';
import BreadcrumbNav from '../components/AEO/BreadcrumbNav';
import { ArrowRight } from 'lucide-react';

export default function IndustriesCatalog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const crumbs = [{ label: 'Industries', href: '/industries' }];
  const industryKeys = Object.keys(industries);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-900 pt-32 pb-20">
      <SEO 
        title="Industries We Serve | Rudrifix"
        description="Discover how Rudrifix provides customized digital marketing and software development solutions across various industries."
        canonicalUrl="/industries"
      />
      <div className="max-w-6xl mx-auto px-4">
        <BreadcrumbNav crumbs={crumbs} />
        <h1 className="text-4xl font-black mb-4">Industries We Serve</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          We engineer high-performance software and marketing infrastructure tailored to the specific needs of your sector.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industryKeys.map((key) => {
            const data = industries[key];
            const formatName = key.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
            return (
              <Link key={key} to={`/industries/${key}`} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group">
                <h2 className="text-2xl font-bold mb-3">{formatName}</h2>
                <p className="text-gray-500 mb-6 line-clamp-3">{data.description}</p>
                <div className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                  View Solutions <ArrowRight size={18} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
