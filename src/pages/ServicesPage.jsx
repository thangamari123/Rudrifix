import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { buildWebPageSchema } from '../utils/schemaBuilders';
import Services from '../components/Services';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle = "Our Services | Rudrifix Digital Marketing Agency";
  const pageDescription = "Explore our comprehensive digital solutions including Web Development, SEO, Performance Marketing, UI/UX Design, and Automation tools.";
  
  const schemas = [
    buildWebPageSchema(pageTitle, pageDescription, "https://rudrifix.com/services")
  ];

  return (
    <div className="pt-20 bg-[#F8FAFC] min-h-screen">
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords="web development, SEO, digital marketing, UI/UX design, performance marketing, automation tools"
        canonicalUrl="/services"
        schemas={schemas}
      />
      <Services />
    </div>
  );
}
