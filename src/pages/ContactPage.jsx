import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { buildWebPageSchema } from '../utils/schemaBuilders';
import Contact from '../components/Contact';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle = "Contact Us | Rudrifix Digital Agency";
  const pageDescription = "Get in touch with Rudrifix Digital Agency. We're ready to help you grow your business with custom web development and digital marketing solutions.";
  
  const schemas = [
    buildWebPageSchema(pageTitle, pageDescription, "https://rudrifix.com/contact")
  ];

  return (
    <div className="min-h-screen bg-[#F0F9FF] text-gray-900 pt-20">
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords="contact rudrifix, digital marketing agency contact, hire web developers, seo services contact"
        canonicalUrl="/contact"
        schemas={schemas}
      />
      
      {/* Reusing the beautifully designed Contact component */}
      <Contact />
    </div>
  );
}
