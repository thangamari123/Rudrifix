export const buildOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Rudrifix",
  "url": "https://rudrifix.com",
  "logo": "https://rudrifix.com/rudrifix%20logo.webp",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9003333333", // Replace with real phone number later
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["en", "Tamil"]
  },
  "sameAs": [
    "https://www.facebook.com/rudrifix",
    "https://www.instagram.com/rudrifix",
    "https://www.linkedin.com/company/rudrifix"
  ]
});

export const buildWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Rudrifix",
  "url": "https://rudrifix.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://rudrifix.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const buildWebPageSchema = (title, description, url) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": title,
  "description": description,
  "url": url,
  "publisher": {
    "@type": "Organization",
    "name": "Rudrifix"
  }
});

export const buildServiceSchema = (serviceName, description, providerName, url) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": providerName
  },
  "url": url
});

export const buildFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
});

export const buildBreadcrumbSchema = (crumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

export const buildAggregateRatingSchema = (ratingValue, ratingCount, itemName) => {
  return {
    "@context": "https://schema.org/",
    "@type": "Product", // Or Service/Organization depending on use case, typically attached to the main entity
    "name": itemName,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "ratingCount": ratingCount,
      "bestRating": "5",
      "worstRating": "1"
    }
  };
};

export const buildReviewSchema = (reviewerName, reviewBody, ratingValue, itemName) => {
  return {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "name": itemName
    },
    "author": {
      "@type": "Person",
      "name": reviewerName
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": ratingValue,
      "bestRating": "5"
    },
    "reviewBody": reviewBody
  };
};

export const buildPersonSchema = (name, jobTitle, url, imageUrl) => {
  return {
    "@context": "https://schema.org/",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    "url": url,
    "image": imageUrl,
    "worksFor": {
      "@type": "Organization",
      "name": "Rudrifix"
    }
  };
};

export const buildImageObjectSchema = (url, caption) => {
  return {
    "@context": "https://schema.org/",
    "@type": "ImageObject",
    "contentUrl": url,
    "caption": caption
  };
};

export const buildVideoObjectSchema = (name, description, thumbnailUrl, uploadDate, contentUrl) => {
  return {
    "@context": "https://schema.org/",
    "@type": "VideoObject",
    "name": name,
    "description": description,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": uploadDate,
    "contentUrl": contentUrl
  };
};

export const buildLocalBusinessSchema = (locationName, description, url) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": `Rudrifix - ${locationName}`,
  "image": "https://rudrifix.com/rudrifix%20logo.webp",
  "url": url,
  "telephone": "+91-9003333333", // Replace with real number
  "description": description,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": locationName,
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  },
  "areaServed": {
    "@type": "City",
    "name": locationName
  }
});


