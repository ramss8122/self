import React from 'react'
import { Award, Users, ShieldAlert, Sparkles, Heart } from 'lucide-react'

export default function About({ dir }) {
  const isRtl = dir === 'rtl'

  const stats = [
    { label: isRtl ? 'خبازين مهرة' : 'Artisan Bakers', val: '6' },
    { label: isRtl ? 'سنة من الحب والخبز' : 'Years of Baking', val: '14+' },
    { label: isRtl ? 'نكهات كعك مبتكرة' : 'Unique Flavors', val: '24' },
    { label: isRtl ? 'تقييم خمس نجوم' : 'Five-Star Reviews', val: '2K+' }
  ]

  const bakers = [
    {
      name: isRtl ? 'الشيف فرانسوا لوران' : 'Chef François Laurent',
      role: isRtl ? 'رئيس طهاة المعجنات' : 'Head Pastry Chef',
      bio: isRtl 
        ? 'تم تدريبه في باريس، ويملك خبرة 15 عاماً في ابتكار الكرواسون المصفح وتارت الفواكه الفرنسي التقليدي.' 
        : 'Classically trained in Paris, Francois brings 15 years of fine laminating and French patisserie expertise.',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: isRtl ? 'ميّادة محمد' : 'Mayada Mohammad',
      role: isRtl ? 'مصممة الكعك المخصص' : 'Lead Cake Architect',
      bio: isRtl 
        ? 'تتخصص في نحت الكعك ثلاثي الأبعاد والزخارف المعقدة المصنوعة من عجينة السكر لتبدو كعكتك مبهرة.' 
        : 'Specialist in 3D sugar sculpting and structural tiers that make cakes look like modern art sculptures.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=400&q=80'
    }
  ]

  const milestones = [
    { year: '2012', title: isRtl ? 'التأسيس الأول' : 'Our Humble Beginning', desc: isRtl ? 'بدأنا بفرن واحد صغير في زاوية الشارع، نبيع الخبز الطازج للجيران.' : 'Opened a tiny street-corner shop with one single oven serving neighbors.' },
    { year: '2016', title: isRtl ? 'التوسع وطلب الكعك' : 'Custom Cakes Launch', desc: isRtl ? 'بدأنا في تصميم كعك الزفاف المخصص الذي سرعان ما نال شهرة واسعة.' : 'Introduced bespoke multi-tier cakes which quickly gained regional acclaim.' },
    { year: '2021', title: isRtl ? 'مطبخ التوصيل الذكي' : 'Expanded Kitchen & Delivery', desc: isRtl ? 'انتقلنا لمطبخ حديث مجهز بالكامل لخدمة كافة أنحاء المدينة مع سيارات مبردة.' : 'Moved into a state-of-the-art kitchen, launching temperature-controlled delivery vans.' }
  ]

  return (
    <div className="space-y-16 py-8 md:py-16">
      {/* Hero Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-bakery-600 dark:text-bakery-400">
          {isRtl ? 'قصة Sweet Delight' : 'The Sweet Delight Story'}
        </span>
        <h1 className="mt-2 font-serif text-4xl font-black text-slate-800 dark:text-white sm:text-5xl">
          {isRtl ? 'نصنع السعادة واللذة بكل قطعة مخبوزة' : 'Baking Happiness Into Every Bite'}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
          {isRtl 
            ? 'نحن نؤمن بأن الحلويات ليست مجرد طعام، بل هي وسيلة للتعبير عن المشاعر ومشاركة اللحظات السعيدة مع من تحب.' 
            : 'We believe that pastries are more than just food—they are sweet moments of connection, crafted with care and dedication.'}
        </p>
      </section>

      {/* Grid: Intro Image & Mission */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80" 
              alt="Bakery kitchen prep" 
              className="rounded-3xl shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
              {isRtl ? 'مهمتنا ورؤيتنا للخبز والحلويات' : 'Our Baking Mission & Philosophy'}
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              {isRtl 
                ? 'في Sweet Delight، نستخدم التقنيات الفرنسية الكلاسيكية مع لمسات عصرية ومكونات طبيعية بالكامل. نحن فخورون بعدم استخدام أي نكهات صناعية أو مواد حافظة لضمان الطعم والنضارة الحقيقية.' 
                : 'At Sweet Delight, we fuse classic French patisserie techniques with modern, localized flavor profiles. We take pride in sourcing local organic flours, real grass-fed butter, and seasonal fruits.'}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex gap-3">
                <Heart className="h-6 w-6 shrink-0 text-bakery-600 dark:text-bakery-500" />
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white">{isRtl ? 'شغف بالتفاصيل' : 'Crafted with Passion'}</h4>
                  <p className="text-xs text-slate-500">{isRtl ? 'نصنع التفاصيل الدقيقة يدوياً.' : 'Every detail is hand-carved.'}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Sparkles className="h-6 w-6 shrink-0 text-bakery-600 dark:text-bakery-500" />
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white">{isRtl ? 'ابتكار مستمر' : 'Flavor Innovation'}</h4>
                  <p className="text-xs text-slate-500">{isRtl ? 'قوائم موسمية متجددة.' : 'Seasonal rotating collections.'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-cream-100/50 py-12 dark:bg-slate-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((st, idx) => (
              <div key={idx} className="text-center">
                <div className="font-serif text-4xl font-bold text-bakery-600 dark:text-bakery-500">{st.val}</div>
                <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Bakers / Chefs */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
            {isRtl ? 'تعرف على الخبازين المهرة' : 'Meet Our Master Artisans'}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
            {isRtl ? 'الأيدي الشغوفة والمبدعة التي تقف وراء طعم الكعك والمخبوزات الفريدة.' : 'The passionate hands and minds crafting your daily specials and grand occasion showstoppers.'}
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
          {bakers.map((bk, idx) => (
            <div key={idx} className="glass-panel text-center hover:border-bakery-300">
              <img 
                src={bk.image} 
                alt={bk.name} 
                className="mx-auto h-40 w-40 rounded-full object-cover shadow-md"
              />
              <h3 className="mt-4 text-xl font-bold text-slate-800 dark:text-white">{bk.name}</h3>
              <p className="text-xs font-semibold text-bakery-600 dark:text-bakery-400">{bk.role}</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{bk.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* History Timeline */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
            {isRtl ? 'رحلتنا عبر السنين' : 'Our Timeline Journey'}
          </h2>
        </div>

        <div className="relative border-l border-cream-200 dark:border-slate-800 ml-4 md:ml-0 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:h-full md:before:w-0.5 md:before:bg-cream-200 md:before:dark:bg-slate-800">
          {milestones.map((ms, idx) => (
            <div key={idx} className={`relative mb-8 md:flex md:justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Timeline marker */}
              <div className="absolute -left-6 top-1.5 flex h-12 w-12 items-center justify-center rounded-full bg-bakery-600 font-serif text-sm font-bold text-white md:left-1/2 md:-ml-6">
                {ms.year}
              </div>

              {/* Box */}
              <div className={`ml-10 md:ml-0 md:w-[45%] ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className="glass-panel hover:border-bakery-300">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white">{ms.title}</h3>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">{ms.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
