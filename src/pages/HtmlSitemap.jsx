import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Globe, Layout, Megaphone } from 'lucide-react';

const sitemapData = [
  {
    category: 'Main Pages',
    icon: <Globe className="text-blue-500 mb-4" size={32} />,
    links: [
      { name: 'Home', href: '/' },
      { name: 'All Services', href: '/services' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms & Conditions', href: '/terms-and-conditions' }
    ]
  },
  {
    category: 'Tech & Dev Services',
    icon: <Layout className="text-violet-500 mb-4" size={32} />,
    links: [
      { name: 'Website Development', href: '/web-development' },
      { name: 'E-Commerce Solutions', href: '/ecommerce-solutions' },
      { name: 'Custom SaaS & CRM', href: '/custom-saas-crm' },
      { name: 'App Development', href: '/app-development' },
      { name: 'Automation Tools', href: '/automation-tools' }
    ]
  },
  {
    category: 'Creative & Design',
    icon: <Layout className="text-pink-500 mb-4" size={32} />,
    links: [
      { name: 'UI/UX Design', href: '/ui-ux-design' },
      { name: 'Creative Design', href: '/creative-design' },
      { name: 'Video Editing & Motion Graphics', href: '/video-editing' },
      { name: 'Photography & Videography', href: '/photography' },
      { name: 'Reels & Short-Form Content', href: '/reels-shorts' },
      { name: 'Branding & Visual Identity', href: '/branding' }
    ]
  },
  {
    category: 'Organic Marketing',
    icon: <Megaphone className="text-emerald-500 mb-4" size={32} />,
    links: [
      { name: 'Search Engine Optimization', href: '/seo-services' },
      { name: 'Content Marketing', href: '/content-marketing' },
      { name: 'Social Media Management', href: '/social-media-marketing' },
      { name: 'Local SEO & Profiles', href: '/local-seo' },
      { name: 'Content Strategy & Planning', href: '/content-strategy' }
    ]
  },
  {
    category: 'Paid Marketing',
    icon: <Megaphone className="text-orange-500 mb-4" size={32} />,
    links: [
      { name: 'Google Ads', href: '/google-ads-management' },
      { name: 'Meta Ads', href: '/meta-ads-management' },
      { name: 'YouTube Advertising', href: '/youtube-ads' },
      { name: 'LinkedIn Advertising', href: '/linkedin-ads' },
      { name: 'Lead Gen Campaigns', href: '/lead-gen' },
      { name: 'Remarketing & Retargeting', href: '/remarketing' },
      { name: 'Performance Analytics', href: '/performance-analytics' }
    ]
  },
  {
    category: 'Service Areas (Tamil Nadu)',
    icon: <MapPin className="text-red-500 mb-4" size={32} />,
    links: [
      { name: 'Chennai', href: '/#contact' },
      { name: 'Coimbatore', href: '/#contact' },
      { name: 'Madurai', href: '/#contact' },
      { name: 'Tiruchirappalli', href: '/#contact' },
      { name: 'Salem', href: '/#contact' },
      { name: 'Tiruppur', href: '/#contact' },
      { name: 'Erode', href: '/#contact' },
      { name: 'Tirunelveli', href: '/#contact' },
      { name: 'Thoothukudi (Tuticorin)', href: '/#contact' }
    ]
  }
];

export default function HTMLSitemap() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#E0F1FB] text-gray-900 pt-32 pb-24">
      <Helmet>
        <title>HTML Sitemap | Rudrifix Digital Agency</title>
        <meta name="description" content="Navigate the complete Rudrifix website. Find our core pages, comprehensive digital marketing services, and specific service areas across Tamil Nadu." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-gray-900 mb-6">Website Sitemap</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A complete directory of all our digital marketing, web development, and creative services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapData.map((section, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-blue-100 shadow-xl shadow-gray-200/50 hover:border-blue-300 transition-colors">
              {section.icon}
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.category}</h2>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link 
                      to={link.href}
                      className="text-gray-600 hover:text-blue-600 font-medium transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
