import React from 'react'
import { Check, ArrowRight, Star, Cake, Coffee, Gift, BookOpen } from 'lucide-react'

export default function Services({ dir, setCurrentPage, setCurrentService }) {
  const isRtl = dir === 'rtl'

  const services = [
    {
      title: isRtl ? 'تصميم الكعك المخصص' : 'Custom Cake Design',
      icon: <Cake className="h-8 w-8 text-bakery-600 dark:text-bakery-500" />,
      desc: isRtl 
        ? 'كعك زفاف وميلاد مصمم خصيصاً بنكهات غنية وتصميمات فنية مذهلة تناسب أحلامك.' 
        : 'Stunning customized double-tier cakes with intricate details matching your theme.',
      bullets: isRtl 
        ? ['تذوق عينات مجانية مسبقاً', 'رسم ثلاثي الأبعاد للتصميم', 'توصيل مبرد شامل في الصناديق'] 
        : ['Free pre-tasting consultation', '3D design sketches provided', 'Safe temperature-controlled transport']
    },
    {
      title: isRtl ? 'ضيافة الحفلات والمناسبات' : 'Wedding & Party Catering',
      icon: <Coffee className="h-8 w-8 text-bakery-600 dark:text-bakery-500" />,
      desc: isRtl 
        ? 'باقات حلوى ومعجنات ومشروبات متكاملة مصممة خصيصاً لإبهار ضيوف حفلتك.' 
        : 'Elegant dessert tables, mini pastries, and gourmet coffee bar setups for events.',
      bullets: isRtl 
        ? ['خيارات نباتية وخالية من الغلوتين', 'إعداد وتزيين الطاولات بلمسة راقية', 'فريق خدمة محترف طوال الحفل'] 
        : ['Vegan & Gluten-free dessert options', 'Styling matching your theme decor', 'Professional on-site serving staff']
    },
    {
      title: isRtl ? 'ورش عمل ودروس خبز' : 'Pastry Workshops & Classes',
      icon: <BookOpen className="h-8 w-8 text-bakery-600 dark:text-bakery-500" />,
      desc: isRtl 
        ? 'تعلم أسرار المعجنات الفرنسية وإعداد الماكرون والكرواسون في ورش عمل عملية.' 
        : 'Hands-on training in French pastry, laminating dough, and cake decorating basics.',
      bullets: isRtl 
        ? ['دروس للمبتدئين والمحترفين', 'أدوات ومكونات مجهزة بالكامل', 'شهادات حضور مع وصفات حصرية'] 
        : ['Classes for beginners and intermediate bakers', 'All baking raw ingredients included', 'Recipe book and chef certification']
    },
    {
      title: isRtl ? 'الهدايا وباقات الشركات' : 'Wholesale & Corporate Gifting',
      icon: <Gift className="h-8 w-8 text-bakery-600 dark:text-bakery-500" />,
      desc: isRtl 
        ? 'صناديق هدايا فاخرة من الكوكيز والماكرون مخصصة بشعار شركتك للمناسبات العامة.' 
        : 'Premium custom-branded gift boxes filled with assorted macarons, cupcakes, and cookies.',
      bullets: isRtl 
        ? ['خصومات كبيرة للطلبيات الضخمة', 'إمكانية إرفاق بطاقات التهنئة المطبوعة', 'شحن لعدة عناوين في نفس اليوم'] 
        : ['Volume wholesale pricing discounts', 'Branded packaging & message cards', 'Multi-address shipping logistics']
    }
  ]

  const handleSelectService = (title) => {
    setCurrentService(title)
    setCurrentPage('service-details')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="space-y-12 py-8 md:py-16">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-bakery-600 dark:text-bakery-400">
          {isRtl ? 'ماذا نقدم لكم' : 'Baking Services'}
        </span>
        <h1 className="mt-2 font-serif text-4xl font-black text-slate-800 dark:text-white sm:text-5xl">
          {isRtl ? 'باقات خدماتنا المتخصصة' : 'Our Professional Bakery Services'}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-400">
          {isRtl 
            ? 'نقدم أفضل خدمات المخبوزات والحلويات المصممة بدقة لتلبية كل احتياجاتكم ومناسباتكم الخاصة.' 
            : 'Whether you want a showstopper cake, party desserts, or wholesale business treats, we deliver gourmet perfection.'}
        </p>
      </section>

      {/* Grid of Services */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((srv, idx) => (
            <div key={idx} className="glass-panel flex flex-col justify-between hover:border-bakery-400 hover:shadow-glow">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-bakery-50 p-3.5 dark:bg-slate-800">
                    {srv.icon}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-slate-800 dark:text-white">{srv.title}</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{srv.desc}</p>
                <div className="space-y-2">
                  {srv.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-500" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-cream-100 dark:border-slate-800">
                <button 
                  onClick={() => handleSelectService(srv.title)}
                  className="flex items-center gap-1 text-sm font-semibold text-bakery-600 hover:text-bakery-700 dark:text-bakery-400 dark:hover:text-bakery-300"
                >
                  {isRtl ? 'عرض تفاصيل الخدمة والأسعار' : 'View Service Details & Pricing'}
                  <ArrowRight className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
