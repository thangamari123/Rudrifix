import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import locationMetadata from '../data/locationMetadata';

export default function LocalSeoIndex() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cities = Object.keys(locationMetadata).sort();

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-32 pb-20">
      <SEO 
        title="Local Service Areas Directory | Rudrifix"
        description="Directory of all local service areas covered by Rudrifix Digital Agency across Tamil Nadu."
        canonicalUrl="/locations-directory"
      />
      
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-black mb-4">Locations Directory</h1>
          <p className="text-gray-600">
            Select a city below to view all digital marketing and web development services available in that location.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities.map((city) => {
            const formatCity = city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            return (
              <Link 
                key={city} 
                to={`/location/${city}`}
                className="flex items-center justify-between p-4 bg-gray-50 border border-gray-100 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all group"
              >
                <span className="font-bold text-gray-800 group-hover:text-blue-700">{formatCity}</span>
                <span className="text-gray-400 group-hover:text-blue-500 transition-colors">→</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
