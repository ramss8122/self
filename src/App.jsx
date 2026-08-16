import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home2 from './pages/Home2.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'
import CustomOrder from './pages/CustomOrder.jsx'
import Pricing from './pages/Pricing.jsx'

export default function App() {
  const [theme, setTheme] = useState('light')
  const [currentPage, setCurrentPage] = useState('home2')

  // Manage Dark Mode Class
  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  const renderPage = () => {
    switch (currentPage) {
      case 'home2':
        return <Home2 dir="ltr" setCurrentPage={setCurrentPage} />
      case 'about':
        return <About dir="ltr" setCurrentPage={setCurrentPage} />
      case 'services':
        return <Services dir="ltr" setCurrentPage={setCurrentPage} />
      case 'gallery':
        return <Gallery dir="ltr" setCurrentPage={setCurrentPage} />
      case 'contact':
        return <Contact dir="ltr" setCurrentPage={setCurrentPage} />
      case 'custom-order':
        return <CustomOrder dir="ltr" setCurrentPage={setCurrentPage} />
      case 'pricing':
        return <Pricing dir="ltr" setCurrentPage={setCurrentPage} />
      default:
        return <Home2 dir="ltr" setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-premium text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      {/* Navigation header */}
      <Navbar 
        theme={theme} 
        setTheme={setTheme} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Global Footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}
