import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { buildWebPageSchema } from '../utils/schemaBuilders';
import BreadcrumbNav from '../components/AEO/BreadcrumbNav';
import SummaryBlock from '../components/AEO/SummaryBlock';
import ComparisonTable from '../components/AEO/ComparisonTable';
import FAQSection from '../components/AEO/FAQSection';
import { comparisons } from '../data/comparisons';

export default function ComparisonTemplate() {
  const { compareSlug } = useParams();
  const data = comparisons[compareSlug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [compareSlug]);

  if (!data) return <div className="min-h-screen flex items-center justify-center text-2xl font-bold">Comparison Not Found</div>;

  const url = `https://rudrifix.com/compare/${compareSlug}`;
  const schemas = [buildWebPageSchema(data.title, data.description, url)];

  const crumbs = [
    { label: 'Compare', href: '/compare' },
    { label: data.title.split(':')[0], href: `/compare/${compareSlug}` }
  ];

  const entities = compareSlug.split('-vs-').map(s => s.charAt(0).toUpperCase() + s.slice(1));

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-900 pt-32 pb-20">
      <SEO 
        title={data.title}
        description={data.description}
        keywords={data.keywords}
        canonicalUrl={`/compare/${compareSlug}`}
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
          takeaways={data.features ? data.features.map(f => `${f.name}: ${f.valueA} vs ${f.valueB}`) : []}
        />

        {data.features && (
          <ComparisonTable 
            title={`Detailed Feature Comparison: ${entities[0]} vs ${entities[1]}`}
            entityA={entities[0]}
            entityB={entities[1]}
            features={data.features}
          />
        )}

        {data.faqs && <FAQSection faqs={data.faqs} title="Frequently Asked Questions" />}
      </div>
    </div>
  );
}
