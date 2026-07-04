import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { buildLocalBusinessSchema, buildWebPageSchema } from '../utils/schemaBuilders';
import SummaryBlock from '../components/AEO/SummaryBlock';
import FAQSection from '../components/AEO/FAQSection';
import { ArrowRight, MapPin, Building2, Phone } from 'lucide-react';
import locationMetadata from '../data/locationMetadata';

// Format slugs like "web-development" to "Web Development"
const formatSlug = (slug) => {
  if (!slug) return '';
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

export default function LocationService() {
  const { localSlug } = useParams();
  
  if (!localSlug || !localSlug.includes('-in-')) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center pt-32">
        <h1 className="text-3xl font-bold text-gray-400">Page Not Found</h1>
      </div>
    );
  }

  const [serviceSlug, locationSlug] = localSlug.split('-in-');
  
  const serviceName = formatSlug(serviceSlug);
  const locationName = formatSlug(locationSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceSlug, locationSlug]);

  if (!serviceName || !locationName || !locationMetadata[locationSlug?.toLowerCase()]) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center pt-32">
        <h1 className="text-3xl font-bold text-gray-400">Location Not Found</h1>
      </div>
    );
  }

  const customData = locationMetadata[locationSlug?.toLowerCase()] || {};
  const serviceSpecificData = customData.services?.[serviceSlug] || {};

  const pageTitle = serviceSpecificData.title || (customData.title 
    ? `${serviceName} | ${customData.title}`
    : `Best ${serviceName} Company in ${locationName} | Rudrifix`);
    
  const pageDescription = serviceSpecificData.description || (customData.description
    ? `Looking for ${serviceName} in ${locationName}? ${customData.description}`
    : `Looking for top-tier ${serviceName} in ${locationName}? Rudrifix offers data-driven, results-oriented digital solutions for businesses in ${locationName}.`);

  const pageKeywords = serviceSpecificData.keywords || (customData.keywords 
    ? `${serviceName} ${locationName}, ${customData.keywords}`
    : `${serviceName} ${locationName}, Best ${serviceName} agency in ${locationName}`);

  const summaryText = serviceSpecificData.aeoSummary || (customData.aeoSummary
    ? `Offering expert ${serviceName}, ${customData.aeoSummary}`
    : `Rudrifix brings world-class ${serviceName} expertise right to ${locationName}. We understand the local market dynamics and tailor our strategies to help you outperform competitors in your area.`);

  const url = `/${serviceSlug}-in-${locationSlug}`;

  const schemas = [
    buildLocalBusinessSchema(locationName, pageDescription, `https://rudrifix.com${url}`),
    buildWebPageSchema(pageTitle, pageDescription, `https://rudrifix.com${url}`)
  ];

  const faqs = [
    {
      q: `Do you provide ${serviceName} services in ${locationName}?`,
      a: `Yes, Rudrifix provides comprehensive ${serviceName} services specifically tailored for businesses located in and around ${locationName}.`
    },
    {
      q: `How can ${serviceName} help my business in ${locationName}?`,
      a: `By leveraging local market insights and industry best practices, our ${serviceName} strategies are designed to help you capture local market share and grow your business in ${locationName}.`
    },
    {
      q: "How do we get started?",
      a: "Simply reach out to us via our contact form or call us directly. We will provide a free audit and consultation tailored to your specific business needs."
    }
  ];

  return (
    <div className="min-h-screen bg-[#E0F1FB] text-gray-900">
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonicalUrl={url}
        schemas={schemas}
      />

      <section className="relative pt-32 pb-20 overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-blue-200 backdrop-blur-md mb-8">
            <MapPin className="text-blue-600" size={16} />
            <span className="text-sm font-bold text-blue-800 uppercase">Serving {locationName}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Top <span className="text-blue-600">{serviceName}</span> <br/> Agency in {locationName}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            {pageDescription} We help local businesses dominate their market.
          </p>

          <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg">
            Get a Free Proposal <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <SummaryBlock 
        summary={summaryText} 
        takeaways={[
          `Localized ${serviceName} strategies.`,
          `Dedicated support for ${locationName} businesses.`,
          "Data-driven approaches that guarantee ROI."
        ]}
      />

      {/* NAP & Maps Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-xl grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Our Local Team</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-700">
                  <Building2 className="text-blue-500" /> Rudrifix Digital Agency
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <MapPin className="text-blue-500" /> Serving {locationName}, Tamil Nadu
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <Phone className="text-blue-500 mt-1" /> 
                  <div>
                    <a href="tel:+918300227525" className="block hover:text-blue-600 transition-colors">+91 83002 27525</a>
                    <a href="tel:+919487816005" className="block hover:text-blue-600 transition-colors mt-1">+91 94878 16005</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="h-64 bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 relative">
               {/* Embed Google Maps dynamically based on location */}
               <iframe
                title={`Map of ${locationName}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${locationName},+Tamil+Nadu`}
              ></iframe>
              <div className="absolute inset-0 bg-gray-200/50 flex items-center justify-center text-gray-500 text-sm font-medium backdrop-blur-sm">
                [Map Embed: Requires API Key]
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title={`FAQs about ${serviceName} in ${locationName}`} />
    </div>
  );
}
