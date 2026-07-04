import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { buildWebPageSchema } from '../utils/schemaBuilders';
import BreadcrumbNav from '../components/AEO/BreadcrumbNav';
import SummaryBlock from '../components/AEO/SummaryBlock';
import StepByStep from '../components/AEO/StepByStep';
import FAQSection from '../components/AEO/FAQSection';
import { technologies } from '../data/technologies';

export default function TechStackTemplate() {
  const { techSlug } = useParams();
  const data = technologies[techSlug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [techSlug]);

  if (!data) return <div className="min-h-screen flex items-center justify-center text-2xl font-bold">Technology Not Found</div>;

  const url = `https://rudrifix.com/technologies/${techSlug}`;
  const schemas = [buildWebPageSchema(data.title, data.description, url)];

  const formatName = techSlug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
  const crumbs = [
    { label: 'Technologies', href: '/technologies' },
    { label: formatName, href: `/technologies/${techSlug}` }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-900 pt-32 pb-20">
      <SEO 
        title={data.title}
        description={data.description}
        keywords={data.keywords}
        canonicalUrl={`/technologies/${techSlug}`}
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
          takeaways={data.steps ? data.steps.map(s => s.title) : []}
        />

        {data.steps && (
          <StepByStep 
            title={`Our ${formatName} Development Process`}
            description={`Discover how Rudrifix approaches ${formatName} to ensure scalable and reliable software solutions.`}
            steps={data.steps}
          />
        )}

        {data.faqs && <FAQSection faqs={data.faqs} title={`${formatName} Development FAQs`} />}
      </div>
    </div>
  );
}
