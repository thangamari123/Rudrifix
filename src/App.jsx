import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

/* ── Critical path — loaded immediately ── */
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Preloader from './components/Preloader'

/* ── Below-fold — lazy loaded after hero renders ── */
const Services = lazy(() => import('./components/Services'))
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'))
const Process = lazy(() => import('./components/Process'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const BusinessAudit = lazy(() => import('./components/BusinessAudit'))
const BudgetPlanner = lazy(() => import('./components/BudgetPlanner'))
const Contact = lazy(() => import('./components/Contact'))
const CallToAction = lazy(() => import('./components/CallToAction'))
const Footer = lazy(() => import('./components/Footer'))
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'))
const FloatingContactBar = lazy(() => import('./components/FloatingContactBar'))

/* ── Legal pages — only loaded on demand ── */
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'))
const HtmlSitemap = lazy(() => import('./pages/HtmlSitemap'))

/* ── Work / Projects Page ── */
const Projects = lazy(() => import('./pages/Projects'))

/* ── Contact Page ── */
const ContactPage = lazy(() => import('./pages/ContactPage'))

/* ── Location Service Page ── */
const LocationService = lazy(() => import('./pages/LocationService'))

/* ── Service pages ── */
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const SeoServices = lazy(() => import('./pages/SeoServices'))
const GoogleAds = lazy(() => import('./pages/GoogleAds'))
const MetaAds = lazy(() => import('./pages/MetaAds'))
const SocialMedia = lazy(() => import('./pages/SocialMedia'))
const WebDevelopment = lazy(() => import('./pages/WebDevelopment'))

// 18 New Service Pages
const EcommerceSolutions = lazy(() => import('./pages/EcommerceSolutions'))
const CustomSaaS = lazy(() => import('./pages/CustomSaaS'))
const CustomSaaSCrm = lazy(() => import('./pages/CustomSaaSCrm'))
const AppDevelopment = lazy(() => import('./pages/AppDevelopment'))
const AutomationTools = lazy(() => import('./pages/AutomationTools'))
const UiUxDesign = lazy(() => import('./pages/UiUxDesign'))
const CreativeDesign = lazy(() => import('./pages/CreativeDesign'))

// New Dynamic Templates
const ComparisonTemplate = lazy(() => import('./pages/ComparisonTemplate'))
const TechStackTemplate = lazy(() => import('./pages/TechStackTemplate'))
const IndustryTemplate = lazy(() => import('./pages/IndustryTemplate'))

// New Catalogs
const CompareCatalog = lazy(() => import('./pages/CompareCatalog'))
const TechnologiesCatalog = lazy(() => import('./pages/TechnologiesCatalog'))
const IndustriesCatalog = lazy(() => import('./pages/IndustriesCatalog'))

// Hidden SEO Directories
const LocalSeoIndex = lazy(() => import('./pages/LocalSeoIndex'))
const CityDirectory = lazy(() => import('./pages/CityDirectory'))

const VideoEditing = lazy(() => import('./pages/VideoEditing'))
const Photography = lazy(() => import('./pages/Photography'))
const ReelsShorts = lazy(() => import('./pages/ReelsShorts'))
const Branding = lazy(() => import('./pages/Branding'))
const ContentMarketing = lazy(() => import('./pages/ContentMarketing'))
const LocalSeo = lazy(() => import('./pages/LocalSeo'))
const ContentStrategy = lazy(() => import('./pages/ContentStrategy'))
const YouTubeAds = lazy(() => import('./pages/YouTubeAds'))
const LinkedInAds = lazy(() => import('./pages/LinkedInAds'))
const LeadGen = lazy(() => import('./pages/LeadGen'))
const Remarketing = lazy(() => import('./pages/Remarketing'))
const PerformanceAnalytics = lazy(() => import('./pages/PerformanceAnalytics'))

/* ── Minimal section skeleton while lazy chunks load ── */
function SectionFallback() {
  return (
    <div
      aria-hidden="true"
      style={{
        width: '100%',
        height: 120,
        background: 'linear-gradient(90deg,#f1f5f9 25%,#e2e8f0 50%,#f1f5f9 75%)',
        backgroundSize: '400% 100%',
        animation: 'shimmer 1.4s ease infinite',
      }}
    />
  )
}

function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<SectionFallback />}><BusinessAudit /></Suspense>
      <Suspense fallback={<SectionFallback />}><Services /></Suspense>
      <Suspense fallback={<SectionFallback />}><WhyChooseUs /></Suspense>
      <Suspense fallback={<SectionFallback />}><Portfolio /></Suspense>
      <Suspense fallback={<SectionFallback />}><Process /></Suspense>
      <Suspense fallback={<SectionFallback />}><BudgetPlanner /></Suspense>
      <Suspense fallback={<SectionFallback />}><Contact /></Suspense>
      <Suspense fallback={<SectionFallback />}><CallToAction /></Suspense>
    </>
  )
}

function App() {
  return (
    <div className="relative min-h-screen">
      <Preloader />
      <Navbar />

      <main>
        <Suspense fallback={<SectionFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Static Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/sitemap" element={<HtmlSitemap />} />
            <Route path="/locations-directory" element={<LocalSeoIndex />} />
            <Route path="/location/:citySlug" element={<CityDirectory />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            
            {/* Catalog Hub Pages */}
            <Route path="/compare" element={<CompareCatalog />} />
            <Route path="/technologies" element={<TechnologiesCatalog />} />
            <Route path="/industries" element={<IndustriesCatalog />} />

            {/* Dynamic Templates */}
            <Route path="/compare/:compareSlug" element={<ComparisonTemplate />} />
            <Route path="/technologies/:techSlug" element={<TechStackTemplate />} />
            <Route path="/industries/:industrySlug" element={<IndustryTemplate />} />
            
            {/* Existing Service Pages */}
            <Route path="/seo-services" element={<SeoServices />} />
            <Route path="/google-ads-management" element={<GoogleAds />} />
            <Route path="/meta-ads-management" element={<MetaAds />} />
            <Route path="/social-media-marketing" element={<SocialMedia />} />
            <Route path="/web-development" element={<WebDevelopment />} />

            {/* New Service Pages */}
            <Route path="/ecommerce-solutions" element={<EcommerceSolutions />} />
            <Route path="/custom-saas" element={<CustomSaaS />} />
            <Route path="/custom-saas-crm" element={<CustomSaaSCrm />} />
            <Route path="/app-development" element={<AppDevelopment />} />
            <Route path="/automation-tools" element={<AutomationTools />} />
            <Route path="/ui-ux-design" element={<UiUxDesign />} />
            <Route path="/creative-design" element={<CreativeDesign />} />
            <Route path="/video-editing" element={<VideoEditing />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/reels-shorts" element={<ReelsShorts />} />
            <Route path="/branding" element={<Branding />} />
            <Route path="/content-marketing" element={<ContentMarketing />} />
            <Route path="/local-seo" element={<LocalSeo />} />
            <Route path="/content-strategy" element={<ContentStrategy />} />
            <Route path="/youtube-ads" element={<YouTubeAds />} />
            <Route path="/linkedin-ads" element={<LinkedInAds />} />
            <Route path="/lead-gen" element={<LeadGen />} />
            <Route path="/remarketing" element={<Remarketing />} />
            <Route path="/performance-analytics" element={<PerformanceAnalytics />} />

            {/* Dynamic Location Service Route (Catch-all for localized pages) */}
            <Route path="/:localSlug" element={<LocationService />} />
          </Routes>
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
        <WhatsAppButton />
        <FloatingContactBar />
      </Suspense>
    </div>
  )
}

export default App
