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

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Process />
        <Portfolio />
        <BusinessAudit />
        <BudgetPlanner />
        <Contact />
        <CallToAction />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
