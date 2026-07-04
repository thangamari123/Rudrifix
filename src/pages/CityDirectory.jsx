import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import locationMetadata from '../data/locationMetadata';
import BreadcrumbNav from '../components/AEO/BreadcrumbNav';

const localServices = [
  // Tech & Dev
  { name: 'Web Development', slug: 'web-development' },
  { name: 'App Development', slug: 'app-development' },
  { name: 'UI/UX Design', slug: 'ui-ux-design' },
  { name: 'Custom SaaS CRM', slug: 'custom-saas-crm' },
  { name: 'Automation Tools', slug: 'automation-tools' },
  
  // Creative & Design
  { name: 'Creative Design', slug: 'creative-design' },
  { name: 'Branding', slug: 'branding' },
  { name: 'Video Editing', slug: 'video-editing' },
  { name: 'Photography', slug: 'photography' },
  { name: 'Reels & Shorts', slug: 'reels-shorts' },
  
  // Organic Marketing
  { name: 'SEO Services', slug: 'seo-services' },
  { name: 'Local SEO', slug: 'local-seo' },
  { name: 'Social Media', slug: 'social-media-marketing' },
  { name: 'Content Marketing', slug: 'content-marketing' },
  { name: 'Content Strategy', slug: 'content-strategy' },
  
  // Paid Marketing
  { name: 'Google Ads', slug: 'google-ads-management' },
  { name: 'Meta Ads', slug: 'meta-ads-management' },
  { name: 'LinkedIn Ads', slug: 'linkedin-ads' },
  { name: 'YouTube Ads', slug: 'youtube-ads' },
  { name: 'Lead Gen', slug: 'lead-gen' },
  { name: 'E-commerce Solutions', slug: 'ecommerce-solutions' }
];

export default function CityDirectory() {
  const { citySlug } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [citySlug]);

  const formatCity = citySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const metadata = locationMetadata[citySlug] || {};

  const crumbs = [
    { label: 'Locations Directory', href: '/locations-directory' },
    { label: formatCity, href: `/location/${citySlug}` }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-32 pb-20">
      <SEO 
        title={`Digital Marketing & Web Development Services in ${formatCity} | Rudrifix`}
        description={`Explore the complete list of digital marketing, SEO, and web development services offered by Rudrifix in ${formatCity}.`}
        canonicalUrl={`/location/${citySlug}`}
      />
      
      <div className="max-w-6xl mx-auto px-4">
        <BreadcrumbNav crumbs={crumbs} />
        
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Digital Services in <span className="text-blue-600">{formatCity}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Directory of all specialized services and solutions provided by Rudrifix for businesses in and around {formatCity}.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localServices.map((service) => {
            const url = `/${service.slug}-in-${citySlug}`;
            return (
              <Link 
                key={url} 
                to={url}
                className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 hover:-translate-y-1 transition-all group"
              >
                <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  {service.name} in {formatCity}
                </h2>
                <p className="text-sm text-gray-500">
                  Click to view our specific offerings for {service.name.toLowerCase()} tailored to {formatCity}.
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
