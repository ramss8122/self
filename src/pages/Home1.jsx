import React from 'react'
import { CheckCircle, Users, Award, Star, ArrowRight, Utensils, Shield, Heart } from 'lucide-react'

export default function Home1({ dir, setCurrentPage }) {
  const isRtl = dir === 'rtl'

  const features = [
    {
      icon: <Utensils className="h-6 w-6 text-bakery-600 dark:text-bakery-500" />,
      title: isRtl ? 'خدمات ضيافة كاملة' : 'Full-Service Catering',
      desc: isRtl 
        ? 'نوفر طاولات حلويات كاملة للمناسبات وحفلات الزفاف والمؤتمرات الكبيرة.' 
        : 'Full desert tables, coffee catering, and live serving staff for grand events.'
    },
    {
      icon: <Shield className="h-6 w-6 text-bakery-600 dark:text-bakery-500" />,
      title: isRtl ? 'جودة مضمونة 100%' : '100% Quality Assurance',
      desc: isRtl 
        ? 'نستخدم مكونات عضوية خالية من الإضافات ومصنوعة يدوياً بالكامل.' 
        : 'Organically sourced ingredients, handcrafted from scratch with zero preservatives.'
    },
    {
      icon: <Heart className="h-6 w-6 text-bakery-600 dark:text-bakery-500" />,
      title: isRtl ? 'وصفات خاصة وشغف' : 'Passion & Special Recipes',
      desc: isRtl 
        ? 'كل وصفة هي نتيجة سنوات من التعديل لتقديم نكهة متوازنة ومميزة.' 
        : 'Every recipe is refined through years of testing to deliver the perfect flavour balance.'
    }
  ]

  const stats = [
    { val: '10K+', label: isRtl ? 'كعكة مخصصة' : 'Custom Cakes Baked' },
    { val: '450+', label: isRtl ? 'حفلة زفاف مجهزة' : 'Weddings Catered' },
    { val: '15+', label: isRtl ? 'سنوات خبرة' : 'Years of Excellence' },
    { val: '99.8%', label: isRtl ? 'نسبة سعادة العملاء' : 'Customer Satisfaction' }
  ]

  const testimonials = [
    {
      name: isRtl ? 'ياسمين أحمد' : 'Yasmin Ahmad',
      role: isRtl ? 'منظمة حفلات زفاف' : 'Wedding Organizer',
      text: isRtl
        ? 'كانت كعكة الزفاف التي صممتها Sweet Delight تحفة فنية حقيقية! لقد كانت النجمة اللامعة في القاعة.'
        : 'The wedding cake created by Sweet Delight was an absolute masterpiece! It was the star of the night.'
    },
    {
      name: isRtl ? 'كريم خالد' : 'Karim Khaled',
      role: isRtl ? 'مدير شركة إيفنت كورب' : 'Director, EventCorp',
      text: isRtl
        ? 'ضيافة الحلويات التي قدموها لحدثنا السنوي نالت إعجاب جميع الحضور والمستثمرين. احترافية عالية جداً.'
        : 'Their corporate dessert table was highly praised by our investors and staff. Extremely professional service.'
    }
  ]

  return (
    <div className="space-y-16 py-8 md:py-16">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-bakery-100 px-4 py-1.5 text-xs font-semibold text-bakery-800 dark:bg-bakery-950/40 dark:text-bakery-400">
              ✨ {isRtl ? 'خدمات ضيافة وحلويات فاخرة' : 'Premium Catering & Dessert Services'}
            </span>
            <h1 className="font-serif text-4xl font-extrabold leading-tight text-slate-800 dark:text-white sm:text-5xl lg:text-6xl">
              {isRtl ? 'نحول مناسباتكم إلى' : 'Turning Celebrations Into'}
              <span className="block text-bakery-600 dark:text-bakery-500">
                {isRtl ? 'لوحات فنية لذيذة' : 'Delicious Masterpieces'}
              </span>
            </h1>
            <p className="max-w-xl text-lg text-slate-600 dark:text-slate-300">
              {isRtl 
                ? 'سواء كان حفلاً خاصاً، زفافاً أسطورياً أو حدثاً للشركات، نحن نقدم قوائم مخصصة من الكعك والحلويات الفرنسية الفاخرة.' 
                : 'Whether it is an intimate wedding or a corporate gala, we create customized menus of high-end pastries, cakes, and treats that amaze.'}
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setCurrentPage('custom-order')}
                className="btn-primary"
              >
                {isRtl ? 'اطلب ضيافتك الآن' : 'Book Catering'}
                <ArrowRight className={`ml-2 h-5 w-5 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
              <button 
                onClick={() => setCurrentPage('services')}
                className="btn-secondary"
              >
                {isRtl ? 'عرض باقات الخدمات' : 'Explore Services'}
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 rounded-[2rem] bg-bakery-500/10 blur-3xl dark:bg-bakery-500/5" />
            <img 
              src="https://images.unsplash.com/photo-1535141192574-5d4897c13636?auto=format&fit=crop&w=800&q=80" 
              alt="Luxury wedding cake catering setup" 
              className="relative h-[450px] w-full max-w-lg rounded-[2.5rem] object-cover shadow-2xl transition hover:scale-[1.01]"
            />
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="bg-cream-100/50 py-16 dark:bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
              {isRtl ? 'لماذا تختار خدمات Sweet Delight؟' : 'Why Choose Sweet Delight Services?'}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500 dark:text-slate-400">
              {isRtl ? 'نهتم بأدق التفاصيل لنضمن تجربة فريدة ترضي ذوقك وذوق ضيوفك.' : 'We pay attention to every detail to ensure a stunning, gourmet experience.'}
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feat, idx) => (
              <div key={idx} className="glass-panel hover:border-bakery-400 hover:shadow-glow">
                <div className="mb-4 inline-flex rounded-2xl bg-bakery-50 p-4 dark:bg-slate-800">
                  {feat.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-800 dark:text-white">{feat.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-bakery-600 px-6 py-12 text-white shadow-xl dark:bg-bakery-800/80 sm:px-12 sm:py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="font-serif text-3xl font-extrabold sm:text-5xl">{stat.val}</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-bakery-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
            {isRtl ? 'آراء شركائنا وعملائنا' : 'What Our Catering Clients Say'}
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {testimonials.map((test, idx) => (
            <div key={idx} className="glass-panel relative flex flex-col justify-between p-8">
              <div className="mb-6 flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="font-serif text-lg italic text-slate-600 dark:text-slate-300">
                "{test.text}"
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-bakery-200 flex items-center justify-center font-bold text-bakery-800">
                  {test.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white">{test.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form Teaser */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="glass-panel text-center p-8 md:p-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white md:text-3xl">
            {isRtl ? 'هل تخطط لمناسبة قادمة؟' : 'Planning a Grand Occasion?'}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-400">
            {isRtl 
              ? 'احجز موعداً للاستشارة المجانية وتذوق الكعك لمناقشة تصميم كعكة أحلامك أو ضيافة حفل زفافك.' 
              : 'Book a free cake tasting session and consultation with our lead pastry chef to design your dream dessert menu.'}
          </p>
          <div className="mt-8 flex justify-center">
            <button 
              onClick={() => setCurrentPage('contact')}
              className="btn-primary"
            >
              {isRtl ? 'تواصل معنا لتحديد موعد' : 'Get Free Consultation'}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
