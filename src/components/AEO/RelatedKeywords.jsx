import React from 'react';
import { Link } from 'react-router-dom';
import locationMetadata from '../../data/locationMetadata';

export default function RelatedKeywords({ serviceSlug, serviceName }) {
  const cities = Object.keys(locationMetadata).sort();

  return (
    <div className="my-16 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Related Keywords & Service Areas</h3>
      <p className="text-gray-600 mb-8">
        Looking for localized {serviceName} solutions? Explore our dedicated service areas across Tamil Nadu:
      </p>
      <div className="flex flex-wrap gap-3">
        {cities.map((city) => {
          const formatCity = city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
          const url = `/${serviceSlug}-in-${city}`;
          const keyword = `${serviceName} in ${formatCity}`;
          
          return (
            <Link 
              key={url} 
              to={url}
              className="inline-block px-4 py-2 bg-gray-50 text-sm text-gray-700 rounded-full hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 border border-transparent transition-all"
            >
              {keyword}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
