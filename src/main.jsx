import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import App from './App'
import './index.css'
import ErrorBoundary from './ErrorBoundary'
import ReactGA from "react-ga4"

ReactGA.initialize("G-V98DBZ9NRG")

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <HelmetProvider>
          <Helmet>
            <title>Digital Marketing Agency in Chennai | Rudrifix</title>
            <meta name="description" content="Rudrifix helps businesses grow with SEO, Google Ads, Meta Ads and branding solutions." />
          </Helmet>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
)
