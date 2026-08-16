import React from 'react'
import { Calendar, User, ArrowLeft, Mail, ChevronRight } from 'lucide-react'

export default function BlogDetails({ dir, post, setCurrentPage }) {
  const isRtl = dir === 'rtl'

  // Default fallback post if none is selected
  const defaultPost = {
    title: isRtl ? 'السر وراء الكرواسون الفرنسي الهش واللذيذ' : 'The Secret to Flaky French Croissants',
    category: 'Recipes',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    date: '2026-08-04',
    author: isRtl ? 'الشيف فرانسوا' : 'Chef François',
  }

  const activePost = post || defaultPost

  const recentPosts = [
    { title: isRtl ? 'أهم 5 صيحات لكعكات الزفاف لعام 2026' : 'Top 5 Wedding Cake Trends for 2026', date: 'Aug 10, 2026' },
    { title: isRtl ? 'دليلك للخبز المنزلي للمبتدئين' : 'Home Baking Guide for Beginners', date: 'Jul 28, 2026' }
  ]

  const categories = [
    { name: isRtl ? 'وصفات المعجنات' : 'Baking Recipes', count: 12 },
    { name: isRtl ? 'صيحات تزيين الكعك' : 'Cake Design Trends', count: 8 },
    { name: isRtl ? 'نصائح وحيل المطبخ' : 'Kitchen Tips & Hacks', count: 15 },
    { name: isRtl ? 'أخبار وافتتاحات' : 'News & Announcements', count: 4 }
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16 animate-fade-in">
      {/* Back Button */}
      <button
        onClick={() => setCurrentPage('blog')}
        className="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-bakery-600 dark:text-slate-400 dark:hover:text-bakery-500"
      >
        <ArrowLeft className={`h-4.5 w-4.5 ${isRtl ? 'rotate-180' : ''}`} />
        {isRtl ? 'العودة للمدونة' : 'Back to Blog'}
      </button>

      {/* Main Grid */}
      <div className="grid gap-12 lg:grid-cols-3">
        {/* Post Content */}
        <article className="space-y-6 lg:col-span-2">
          {/* Header */}
          <div className="space-y-4">
            <span className="rounded-full bg-bakery-100 px-3 py-1 text-xs font-semibold text-bakery-700 dark:bg-bakery-950/40 dark:text-bakery-400">
              {activePost.category}
            </span>
            <h1 className="font-serif text-3xl font-black text-slate-800 dark:text-white sm:text-4xl md:text-5xl leading-tight">
              {activePost.title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {activePost.date}
              </span>
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {activePost.author}
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <img
            src={activePost.image}
            alt={activePost.title}
            className="w-full h-80 sm:h-96 md:h-[420px] object-cover rounded-3xl shadow-md"
          />

          {/* Rich Content Mockup */}
          <div className="prose prose-slate max-w-none dark:prose-invert space-y-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            <p>
              {isRtl 
                ? 'لطالما كانت المعجنات الفرنسية رمزاً للذوق الرفيع والدقة العالية في الطهي. في هذا المقال، نشارككم الخطوات الأساسية والأسرار المخفية التي يعتمدها طهاتنا كل صباح لإعداد عجينة مورقة وهشة تذوب في الفم.'
                : 'For centuries, French pastries have symbolized culinary refinement and perfection. In this guide, our master bakers reveal the essential steps and secret lamination rules to bake that perfect pastry right in your kitchen.'}
            </p>
            <blockquote className="border-l-4 border-bakery-500 pl-4 py-1.5 font-serif italic text-lg text-slate-800 dark:text-white">
              {isRtl 
                ? '"السر الحقيقي يكمن في جودة الزبدة الطبيعية والمحافظة على درجة حرارة باردة للمطبخ أثناء ثني العجين."' 
                : '"The real secret is in using high-fat organic butter and maintaining a cool kitchen temperature during the folding cycles."'}
            </blockquote>
            <h3 className="font-serif text-xl font-bold text-slate-800 dark:text-white pt-2">
              {isRtl ? '1. اختيار المكونات بعناية فائقة' : '1. Sourcing Premium Ingredients'}
            </h3>
            <p>
              {isRtl 
                ? 'لا يمكن للزبدة العادية أو الدقيق الرخيص أن يعطي المذاق المطلوب. نوصي باستخدام دقيق غني بالجلوتين وزبدة طبيعية بنسبة دهون لا تقل عن 82%.'
                : 'Cheap butter or low-protein flour will always fail to laminate. We highly recommend unbleached flour and organic grass-fed butter containing at least 82% fat content.'}
            </p>
            <h3 className="font-serif text-xl font-bold text-slate-800 dark:text-white pt-2">
              {isRtl ? '2. فترات الراحة والتبريد' : '2. Dough Resting & Cooling Cycles'}
            </h3>
            <p>
              {isRtl 
                ? 'تستعجل الكثير من ربات البيوت هذه الخطوة. يجب أن ترتاح العجينة في الثلاجة لمدة ساعة على الأقل بين كل جولة ثني للتأكد من عدم ذوبان طبقات الزبدة وتداخلها.'
                : 'Do not rush the refrigeration stages. The laminated sheets must chill for at least 45 minutes between each single and double fold to ensure layers remain separated.'}
            </p>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Search/Newsletter widget */}
          <div className="glass-panel p-6 bg-white dark:bg-slate-900 border border-cream-100 dark:border-slate-800">
            <Mail className="h-8 w-8 text-bakery-600 mb-3" />
            <h3 className="font-serif text-lg font-bold text-slate-800 dark:text-white">
              {isRtl ? 'اشترك في نشرتنا البريدية' : 'Subscribe to Newsletter'}
            </h3>
            <p className="mt-2 text-xs text-slate-500">
              {isRtl ? 'احصل على وصفات شهرية مجانية وخصم 10% على طلبيتك القادمة.' : 'Get gourmet chef recipes and 10% off your next custom cake order.'}
            </p>
            <form className="mt-4 space-y-2" onSubmit={(e) => { e.preventDefault(); alert(isRtl ? 'شكراً لاشتراكك!' : 'Thanks for subscribing!') }}>
              <input
                type="email"
                placeholder={isRtl ? 'البريد الإلكتروني' : 'you@example.com'}
                className="glass-input text-xs py-2"
                required
              />
              <button
                type="submit"
                className="w-full btn-primary py-2 text-xs"
              >
                {isRtl ? 'اشترك الآن' : 'Subscribe'}
              </button>
            </form>
          </div>

          {/* Categories */}
          <div className="glass-panel p-6 bg-white dark:bg-slate-900">
            <h3 className="mb-4 font-serif text-lg font-bold text-slate-800 dark:text-white border-b border-cream-50 pb-2">
              {isRtl ? 'أقسام المدونة' : 'Categories'}
            </h3>
            <ul className="space-y-3 text-xs">
              {categories.map((cat, i) => (
                <li key={i} className="flex justify-between items-center text-slate-500 hover:text-bakery-600 cursor-pointer">
                  <span>{cat.name}</span>
                  <span className="rounded-full bg-cream-100 px-2 py-0.5 text-[10px] dark:bg-slate-800">{cat.count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent posts */}
          <div className="glass-panel p-6 bg-white dark:bg-slate-900">
            <h3 className="mb-4 font-serif text-lg font-bold text-slate-800 dark:text-white border-b border-cream-50 pb-2">
              {isRtl ? 'مقالات حديثة' : 'Recent Articles'}
            </h3>
            <div className="space-y-4">
              {recentPosts.map((rp, i) => (
                <div key={i} className="group cursor-pointer">
                  <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-bakery-600 transition line-clamp-2">
                    {rp.title}
                  </h4>
                  <span className="text-[10px] text-slate-400 mt-1 block">{rp.date}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
