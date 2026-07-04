import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { technologies } from '../data/technologies';
import SEO from '../components/SEO';
import BreadcrumbNav from '../components/AEO/BreadcrumbNav';
import { ArrowRight } from 'lucide-react';

export default function TechnologiesCatalog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const crumbs = [{ label: 'Technologies', href: '/technologies' }];
  const techKeys = Object.keys(technologies);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-900 pt-32 pb-20">
      <SEO 
        title="Our Tech Stack & Technologies | Rudrifix"
        description="Explore the advanced technologies, frameworks, and tools Rudrifix uses to build scalable digital solutions."
        canonicalUrl="/technologies"
      />
      <div className="max-w-6xl mx-auto px-4">
        <BreadcrumbNav crumbs={crumbs} />
        <h1 className="text-4xl font-black mb-4">Technologies We Use</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          We leverage the best modern frameworks and tools to build lightning-fast, scalable, and secure digital platforms.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techKeys.map((key) => {
            const data = technologies[key];
            const formatName = key.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
            return (
              <Link key={key} to={`/technologies/${key}`} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group">
                <h2 className="text-2xl font-bold mb-3">{formatName}</h2>
                <p className="text-gray-500 mb-6 line-clamp-3">{data.description}</p>
                <div className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <ArrowRight size={18} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
