import React, { lazy, Suspense } from 'react'

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

function App() {
  const [currentPage, setCurrentPage] = React.useState('home')

  const renderContent = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPolicy onBack={() => setCurrentPage('home')} />
      case 'terms':
        return <TermsAndConditions onBack={() => setCurrentPage('home')} />
      default:
        return (
          <>
            <Hero />
            
            <Suspense fallback={<SectionFallback />}>
              <BusinessAudit />
            </Suspense>

            <Suspense fallback={<SectionFallback />}>
              <Services />
            </Suspense>

            <Suspense fallback={<SectionFallback />}>
              <WhyChooseUs />
            </Suspense>

            <Suspense fallback={<SectionFallback />}>
              <Portfolio />
            </Suspense>

            <Suspense fallback={<SectionFallback />}>
              <Process />
            </Suspense>

            <Suspense fallback={<SectionFallback />}>
              <BudgetPlanner />
            </Suspense>

            <Suspense fallback={<SectionFallback />}>
              <Contact />
            </Suspense>

            <Suspense fallback={<SectionFallback />}>
              <CallToAction />
            </Suspense>
          </>
        )
    }
  }

  return (
    <div className="relative min-h-screen">
      <Preloader />
      <Navbar
        onPrivacyClick={() => setCurrentPage('privacy')}
        onTermsClick={() => setCurrentPage('terms')}
        setCurrentPage={setCurrentPage}
      />

      <main>
        <Suspense fallback={<SectionFallback />}>
          {renderContent()}
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer
          onPrivacyClick={() => setCurrentPage('privacy')}
          onTermsClick={() => setCurrentPage('terms')}
        />
        <WhatsAppButton />
        <FloatingContactBar />
      </Suspense>
    </div>
  )
}

export default App
