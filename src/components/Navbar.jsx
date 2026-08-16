import React, { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar({ 
  theme, 
  setTheme, 
  dir, 
  setDir, 
  currentPage, 
  setCurrentPage 
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [serviceDropdown, setServiceDropdown] = useState(false)

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  const navItems = [
    { label: 'Home', page: 'home2' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services', hasDropdown: true },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Contact', page: 'contact' },
  ]

  const handleNavClick = (page) => {
    setCurrentPage(page)
    setIsOpen(false)
    setServiceDropdown(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-b from-white/95 to-white/85 border-b border-primary-100/40 shadow-soft">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home2')} 
            className="flex items-center gap-2 focus:outline-none group"
          >
            <div className="relative">
              <div className="text-4xl">🧁</div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold gradient-text-mixed">
                Sweet Haven
              </span>
              <span className="text-xs text-primary-600 font-medium">Artisan Bakery</span>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.page} className="relative group">
                <button
                  onClick={() => {
                    if (!item.hasDropdown) {
                      handleNavClick(item.page)
                    }
                  }}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 relative flex items-center gap-1 ${
                    currentPage === item.page 
                      ? 'text-primary-600 bg-primary-50/60' 
                      : 'text-slate-700 hover:text-primary-600 hover:bg-primary-50/40'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  )}
                  {currentPage === item.page && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-t-full"></div>
                  )}
                </button>

                {/* Service Dropdown */}
                {item.hasDropdown && (
                  <div className="absolute left-0 mt-0 w-48 rounded-2xl bg-white/95 backdrop-blur-lg border border-primary-100/40 shadow-soft-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <button
                      onClick={() => handleNavClick('pricing')}
                      className={`w-full text-left px-4 py-2.5 rounded-xl transition-colors font-medium ${
                        currentPage === 'pricing'
                          ? 'bg-primary-50 text-primary-600'
                          : 'text-slate-700 hover:bg-primary-50 hover:text-primary-600'
                      }`}
                    >
                      Pricing Guide
                    </button>
                    <button
                      onClick={() => handleNavClick('services')}
                      className={`w-full text-left px-4 py-2.5 rounded-xl transition-colors font-medium ${
                        currentPage === 'services'
                          ? 'bg-primary-50 text-primary-600'
                          : 'text-slate-700 hover:bg-primary-50 hover:text-primary-600'
                      }`}
                    >
                      Our Services
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={() => handleNavClick('custom-order')}
              className="hidden sm:inline-flex btn-primary px-6 py-2 text-sm md:text-base"
            >
              Order Now
            </button>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-primary-50 transition-colors text-slate-700 hover:text-primary-600"
              title="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full hover:bg-primary-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-slate-700" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-slide-down">
            {navItems.map((item) => (
              <div key={item.page}>
                <button
                  onClick={() => {
                    if (!item.hasDropdown) {
                      handleNavClick(item.page)
                    } else {
                      setServiceDropdown(!serviceDropdown)
                    }
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all flex items-center justify-between ${
                    currentPage === item.page 
                      ? 'bg-primary-50 text-primary-600' 
                      : 'text-slate-700 hover:bg-primary-50'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform ${serviceDropdown ? 'rotate-180' : ''}`} />
                  )}
                </button>

                {/* Mobile Service Dropdown */}
                {item.hasDropdown && serviceDropdown && (
                  <div className="ml-4 mt-2 space-y-2 animate-slide-down">
                    <button
                      onClick={() => handleNavClick('pricing')}
                      className="w-full text-left px-4 py-2 rounded-lg text-sm text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                    >
                      Pricing Guide
                    </button>
                    <button
                      onClick={() => handleNavClick('services')}
                      className="w-full text-left px-4 py-2 rounded-lg text-sm text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                    >
                      Our Services
                    </button>
                  </div>
                )}
              </div>
            ))}
            
            <button
              onClick={() => handleNavClick('custom-order')}
              className="w-full btn-primary mt-4 py-3"
            >
              Order Now
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
                  ? 'text-bakery-600 dark:text-bakery-500'
                  : 'text-slate-600 hover:text-bakery-600 dark:text-slate-300 dark:hover:text-bakery-500'
              }`}
            >
              {isRtl ? item.label.rtl : item.label.ltr}
            </button>
          ))}

          {/* Admin link */}
          <button
            onClick={() => handleNavClick('admin')}
            className={`flex items-center gap-1.5 text-sm font-medium transition ${
              currentPage === 'admin'
                ? 'text-bakery-600 dark:text-bakery-500'
                : 'text-slate-600 hover:text-bakery-600 dark:text-slate-300 dark:hover:text-bakery-500'
            }`}
          >
            <LayoutDashboard className="h-4 w-4" />
            {isRtl ? 'لوحة التحكم' : 'Admin'}
          </button>
        </div>

        {/* Global Controls & CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-full p-2.5 text-slate-500 hover:bg-cream-100 hover:text-bakery-600 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-bakery-500"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* RTL Toggle */}
          <button
            onClick={toggleDir}
            className="flex items-center gap-1 rounded-full border border-cream-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:border-bakery-400 hover:text-bakery-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-bakery-500 dark:hover:text-bakery-500"
          >
            <Globe className="h-3.5 w-3.5" />
            {isRtl ? 'English' : 'العربية'}
          </button>

          {/* Login / Register */}
          <button
            onClick={() => handleNavClick('auth')}
            className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-bakery-600 dark:text-slate-300 dark:hover:text-bakery-500"
          >
            <User className="h-4.5 w-4.5" />
            {isRtl ? 'تسجيل دخول' : 'Login'}
          </button>

          {/* Custom Cake CTA */}
          <button
            onClick={() => handleNavClick('custom-order')}
            className="rounded-full bg-bakery-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-bakery-700 dark:bg-bakery-500 dark:hover:bg-bakery-600"
          >
            {isRtl ? 'طلب كعكة مخصصة' : 'Custom Cake'}
          </button>
        </div>

        {/* Mobile menu button & Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 text-slate-500 hover:bg-cream-100 hover:text-bakery-600 dark:text-slate-400 dark:hover:bg-slate-900"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <button
            onClick={toggleDir}
            className="flex items-center gap-1 rounded-full border border-cream-200 px-2 py-1 text-xs font-semibold text-slate-600 dark:border-slate-800 dark:text-slate-400"
          >
            {isRtl ? 'EN' : 'AR'}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full p-2 text-slate-700 hover:bg-cream-100 dark:text-slate-300 dark:hover:bg-slate-900"
            aria-label="Toggle main menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="border-t border-cream-100 bg-white py-4 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <div className="flex flex-col gap-2 px-4">
            <div className="pb-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              {isRtl ? 'الصفحات الرئيسية' : 'Home Options'}
            </div>
            
            <button
              onClick={() => handleNavClick('home1')}
              className={`rounded-xl px-4 py-2 text-left text-sm font-medium transition ${
                currentPage === 'home1' 
                  ? 'bg-bakery-50 text-bakery-700 dark:bg-bakery-950/30 dark:text-bakery-400' 
                  : 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
              style={{ textAlign: isRtl ? 'right' : 'left' }}
            >
              {isRtl ? '1. واجهة الخدمات العامة' : '1. General Services Landing'}
            </button>
            <button
              onClick={() => handleNavClick('home2')}
              className={`rounded-xl px-4 py-2 text-left text-sm font-medium transition ${
                currentPage === 'home2' 
                  ? 'bg-bakery-50 text-bakery-700 dark:bg-bakery-950/30 dark:text-bakery-400' 
                  : 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
              style={{ textAlign: isRtl ? 'right' : 'left' }}
            >
              {isRtl ? '2. مخبز ومتجر كعك (متخصص)' : '2. Bakery & Cake Shop'}
            </button>

            <div className="my-2 border-t border-cream-100 dark:border-slate-800" />
            <div className="pb-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              {isRtl ? 'تصفح الموقع' : 'Navigation'}
            </div>

            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`rounded-xl px-4 py-2 text-left text-sm font-medium transition ${
                  currentPage === item.page
                    ? 'bg-bakery-50 text-bakery-700 dark:bg-bakery-950/30 dark:text-bakery-400'
                    : 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
                }`}
                style={{ textAlign: isRtl ? 'right' : 'left' }}
              >
                {isRtl ? item.label.rtl : item.label.ltr}
              </button>
            ))}

            <button
              onClick={() => handleNavClick('admin')}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-left text-sm font-medium transition ${
                currentPage === 'admin'
                  ? 'bg-bakery-50 text-bakery-700 dark:bg-bakery-950/30 dark:text-bakery-400'
                  : 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
              style={{ textAlign: isRtl ? 'right' : 'left' }}
            >
              <LayoutDashboard className="h-4 w-4" />
              {isRtl ? 'لوحة التحكم للمسؤول' : 'Admin Dashboard'}
            </button>

            <div className="my-2 border-t border-cream-100 dark:border-slate-800" />

            {/* CTA buttons in mobile */}
            <button
              onClick={() => handleNavClick('auth')}
              className="flex justify-center gap-1.5 rounded-xl border border-cream-200 py-2.5 text-center text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <User className="h-4.5 w-4.5" />
              {isRtl ? 'تسجيل الدخول / الاشتراك' : 'Login / Register'}
            </button>

            <button
              onClick={() => handleNavClick('custom-order')}
              className="rounded-xl bg-bakery-600 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-bakery-700 dark:bg-bakery-500 dark:hover:bg-bakery-600"
            >
              {isRtl ? 'طلب كعكة مخصصة' : 'Custom Cake Order'}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
