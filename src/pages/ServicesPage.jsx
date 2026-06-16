import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Services from '../components/Services';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Services | Rudrifix Digital Marketing Agency</title>
        <meta
          name="description"
          content="Explore our comprehensive digital solutions including Web Development, SEO, Performance Marketing, UI/UX Design, and Automation tools."
        />
      </Helmet>

      {/* Wrapper to account for fixed navbar */}
      <div className="pt-20 bg-gray-50 min-h-screen">
        <Services />
      </div>
    </>
  );
}
