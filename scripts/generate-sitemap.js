import fs from 'fs';
import path from 'path';
import locationMetadata from '../src/data/locationMetadata.js';

const SITE_URL = 'https://rudrifix.com';

const routes = [
  '/',
  '/projects',
  '/contact',
  '/services',
  '/privacy-policy',
  '/terms-and-conditions',
  '/locations-directory',
  '/seo-services',
  '/google-ads-management',
  '/meta-ads-management',
  '/social-media-marketing',
  '/web-development',
  '/ecommerce-solutions',
  '/custom-saas',
  '/custom-saas-crm',
  '/app-development',
  '/automation-tools',
  '/ui-ux-design',
  '/creative-design',
  '/video-editing',
  '/photography',
  '/reels-shorts',
  '/branding',
  '/content-marketing',
  '/local-seo',
  '/content-strategy',
  '/youtube-ads',
  '/linkedin-ads',
  '/lead-gen',
  '/remarketing',
  '/performance-analytics'
];

const locations = Object.keys(locationMetadata);
const localServices = [
  "web-development",
  "app-development",
  "ui-ux-design",
  "custom-saas-crm",
  "automation-tools",
  "creative-design",
  "branding",
  "video-editing",
  "photography",
  "reels-shorts",
  "seo-services",
  "local-seo",
  "social-media-marketing",
  "content-marketing",
  "content-strategy",
  "google-ads-management",
  "meta-ads-management",
  "linkedin-ads",
  "youtube-ads",
  "lead-gen",
  "ecommerce-solutions"
];

const date = new Date().toISOString();

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Add static routes
routes.forEach(route => {
  xml += `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>\n`;
});

// Add City Hub Pages
locations.forEach(location => {
  xml += `  <url>
    <loc>${SITE_URL}/location/${location}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
});

// Add dynamic location pages
localServices.forEach(service => {
  locations.forEach(location => {
    xml += `  <url>
    <loc>${SITE_URL}/${service}-in-${location}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
  });
});

xml += `</urlset>`;

const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);
console.log('✅ Sitemap generated successfully.');

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
console.log('✅ Robots.txt generated successfully.');
