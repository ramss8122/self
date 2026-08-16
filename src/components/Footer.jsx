import React from 'react'

export default function Footer({ dir, setCurrentPage }) {
  const isRtl = dir === 'rtl'

  const handleNavClick = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-cream-200 bg-white py-12 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo & Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-bakery-600 dark:text-bakery-500">
              🍰 {isRtl ? 'بهجة الحلوى' : 'Sweet Delight'}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {isRtl 
                ? 'نصنع ذكريات حلوة ولذيذة للمناسبات الخاصة بك منذ عام 2012. معجنات طازجة ومكونات فاخرة وتصاميم مذهلة.' 
                : 'Crafting delicious memories since 2012. Artisan baking using premium, locally-sourced organic ingredients.'}
            </p>
            <div className="text-xs text-slate-400 dark:text-slate-500">
              {isRtl ? 'بواسطة مطور البرمجيات' : '© 2026 Sweet Delight. All rights reserved.'}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
              {isRtl ? 'تصفح الصفحات' : 'Explore'}
            </h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              {[
                { label: isRtl ? 'الرئيسية 1 (الخدمات)' : 'Home 1 (Catering)', page: 'home1' },
                { label: isRtl ? 'الرئيسية 2 (المخبز)' : 'Home 2 (Bakery)', page: 'home2' },
                { label: isRtl ? 'من نحن' : 'About Us', page: 'about' },
                { label: isRtl ? 'خدماتنا' : 'Our Services', page: 'services' },
                { label: isRtl ? 'الأسعار' : 'Pricing Plan', page: 'pricing' },
              ].map((link) => (
                <li key={link.page}>
                  <button 
                    onClick={() => handleNavClick(link.page)} 
                    className="hover:text-bakery-600 dark:hover:text-bakery-500"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Order & Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
              {isRtl ? 'الطلبات والمعلومات' : 'Custom Orders'}
            </h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              {[
                { label: isRtl ? 'طلب كعكة مخصصة' : 'Cake Designer', page: 'custom-order' },
                { label: isRtl ? 'التغطية والشحن' : 'Delivery Coverage', page: 'delivery' },
                { label: isRtl ? 'المدونة والأخبار' : 'Bakery Blog', page: 'blog' },
                { label: isRtl ? 'اتصل بنا' : 'Contact Support', page: 'contact' },
              ].map((link) => (
                <li key={link.page}>
                  <button 
                    onClick={() => handleNavClick(link.page)} 
                    className="hover:text-bakery-600 dark:hover:text-bakery-500"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Store Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
              {isRtl ? 'موقعنا وأوقات العمل' : 'Bakery Location'}
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {isRtl ? '123 شارع المعجنات، المدينة الحلوة' : '123 Pastry Lane, Sweet City'}
            </p>
            <div className="space-y-1 text-xs text-slate-500 dark:text-slate-400">
              <div><strong>{isRtl ? 'الاثنين - الجمعة:' : 'Mon - Fri:'}</strong> 7:00 AM - 7:00 PM</div>
              <div><strong>{isRtl ? 'السبت - الأحد:' : 'Sat - Sun:'}</strong> 8:00 AM - 6:00 PM</div>
            </div>
            <div className="flex gap-4 pt-2">
              <span className="text-slate-400 hover:text-bakery-600 cursor-pointer text-lg">𝕏</span>
              <span className="text-slate-400 hover:text-bakery-600 cursor-pointer text-lg">📷</span>
              <span className="text-slate-400 hover:text-bakery-600 cursor-pointer text-lg">📘</span>
              <span className="text-slate-400 hover:text-bakery-600 cursor-pointer text-lg">🧁</span>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-cream-100 pt-6 text-center text-xs text-slate-400 dark:border-slate-800 dark:text-slate-600">
          {isRtl 
            ? '© 2026 بهجة الحلوى. جميع الحقوق محفوظة. صمم بكل حب ولذة.' 
            : '© 2026 Sweet Delight Bakery. All rights reserved. Designed with love and sugar.'}
        </div>
      </div>
    </footer>
  )
}
