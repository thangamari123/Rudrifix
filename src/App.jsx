import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import BusinessAudit from './components/BusinessAudit'
import BudgetPlanner from './components/BudgetPlanner'
import Contact from './components/Contact'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

import FloatingContactBar from './components/FloatingContactBar'
import Preloader from './components/Preloader'

import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'

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
            <Services />
            <WhyChooseUs />
            <Process />
            <Portfolio />
            <BusinessAudit />
            <BudgetPlanner />
            <Contact />
            <CallToAction />
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
        {renderContent()}
      </main>

      <Footer
        onPrivacyClick={() => setCurrentPage('privacy')}
        onTermsClick={() => setCurrentPage('terms')}
      />

      <WhatsAppButton />
      <FloatingContactBar />
    </div>
  )
}





export default App
