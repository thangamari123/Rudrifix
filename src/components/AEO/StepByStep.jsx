import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function StepByStep({ title, description, steps }) {
  // Generate HowTo Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "description": description || title,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": step.description
    }))
  };

  return (
    <div className="my-12">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      
      {title && <h3 className="text-2xl font-black mb-2 text-gray-900">{title}</h3>}
      {description && <p className="text-gray-600 mb-8">{description}</p>}
      
      <div className="space-y-6">
        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-black text-xl">
              {idx + 1}
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
