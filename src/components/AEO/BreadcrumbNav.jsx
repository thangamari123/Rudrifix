import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { buildBreadcrumbSchema } from '../../utils/schemaBuilders';
import { Helmet } from 'react-helmet-async';

export default function BreadcrumbNav({ crumbs }) {
  if (!crumbs || crumbs.length === 0) return null;

  const schema = buildBreadcrumbSchema(crumbs.map(c => ({ name: c.label, url: `https://rudrifix.com${c.href}` })));

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <nav aria-label="Breadcrumb" className="mb-6 overflow-x-auto whitespace-nowrap">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link to="/" className="hover:text-blue-600 flex items-center transition-colors">
              <Home size={14} className="mr-1" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {crumbs.map((crumb, index) => (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight size={14} className="text-gray-400" />
              {index === crumbs.length - 1 ? (
                <span className="text-gray-900 font-semibold" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link to={crumb.href} className="hover:text-blue-600 transition-colors">
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
