import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { buildWebPageSchema } from '../utils/schemaBuilders';
import BreadcrumbNav from '../components/AEO/BreadcrumbNav';
import SummaryBlock from '../components/AEO/SummaryBlock';
import FAQSection from '../components/AEO/FAQSection';
import { industries } from '../data/industries';
import { CheckCircle2 } from 'lucide-react';

export default function IndustryTemplate() {
  const { industrySlug } = useParams();
  const data = industries[industrySlug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [industrySlug]);

  if (!data) return <div className="min-h-screen flex items-center justify-center text-2xl font-bold">Industry Not Found</div>;

  const url = `https://rudrifix.com/industries/${industrySlug}`;
  const schemas = [buildWebPageSchema(data.title, data.description, url)];

  const formatName = industrySlug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
  const crumbs = [
    { label: 'Industries', href: '/industries' },
    { label: formatName, href: `/industries/${industrySlug}` }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-900 pt-32 pb-20">
      <SEO 
        title={data.title}
        description={data.description}
        keywords={data.keywords}
        canonicalUrl={`/industries/${industrySlug}`}
        schemas={schemas}
      />

      <div className="max-w-4xl mx-auto px-4">
        <BreadcrumbNav crumbs={crumbs} />

        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
          {data.title}
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          {data.description}
        </p>

        <SummaryBlock 
          summary={data.aeoSummary}
          takeaways={data.benefits || []}
        />

        {data.benefits && (
          <div className="my-12 p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Key Benefits for {formatName}</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {data.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {data.faqs && <FAQSection faqs={data.faqs} title={`${formatName} Digital Solutions FAQs`} />}
      </div>
    </div>
  );
}
