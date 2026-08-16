import React, { useState } from 'react'
import { Search, ArrowRight, Calendar, User } from 'lucide-react'

export default function Blog({ dir, setCurrentPage, setCurrentPost }) {
  const isRtl = dir === 'rtl'
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('All')

  const posts = [
    {
      id: 1,
      title: isRtl ? 'أهم 5 صيحات لكعكات الزفاف لعام 2026' : 'Top 5 Wedding Cake Trends for 2026',
      excerpt: isRtl 
        ? 'اكتشف الصيحات الجديدة من الكعك المطلي يدوياً بالذهب والزهور الطبيعية الصالحة للأكل إلى النكهات الاستوائية الفريدة.' 
        : 'Explore gold-foiled designs, textured buttercream structures, and exotic citrus flavor infusions.',
      category: 'Trends',
      image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?auto=format&fit=crop&w=400&q=80',
      date: '2026-08-10',
      author: isRtl ? 'ميّادة محمد' : 'Mayada M.',
      content: 'Detailed post content...'
    },
    {
      id: 2,
      title: isRtl ? 'السر وراء الكرواسون الفرنسي الهش واللذيذ' : 'The Secret to Flaky French Croissants',
      excerpt: isRtl 
        ? 'تعلم أسرار توريق العجين ودرجات الحرارة الصحيحة للزبدة للحصول على كرواسون مقرمش وخفيف من الداخل.' 
        : 'Understand butter lamination, dough resting steps, and oven proofing rules for airy pastry success.',
      category: 'Recipes',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80',
      date: '2026-08-04',
      author: isRtl ? 'الشيف فرانسوا' : 'Chef François',
      content: 'Detailed post content...'
    },
    {
      id: 3,
      title: isRtl ? 'دليلك للخبز المنزلي للمبتدئين: خطوة بخطوة' : 'Home Baking Guide for Beginners',
      excerpt: isRtl 
        ? 'هل تبدأ رحلتك في الخبز؟ إليك 5 أخطاء شائعة يجب تجنبها وكيف تقيس المكونات بالدقة المطلوبة.' 
        : 'Starting your baking journey? Here are 5 common mistakes to avoid and how to measure flour correctly.',
      category: 'Baking Tips',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80',
      date: '2026-07-28',
      author: isRtl ? 'سارة خالد' : 'Sara K.',
      content: 'Detailed post content...'
    },
    {
      id: 4,
      title: isRtl ? 'افتتاح فرعنا الجديد في وسط المدينة' : 'Grand Opening of Our Downtown Branch',
      excerpt: isRtl 
        ? 'يسعدنا أن نرحب بكم في موقعنا الجديد! تذوقوا باقة حلوياتنا المجانية خلال يوم الافتتاح القادم.' 
        : 'Celebrate with us! Free pastry boxes and coffee pairings during our new branch opening event.',
      category: 'News',
      image: 'https://images.unsplash.com/photo-1464305795204-6f5bfee7481a?auto=format&fit=crop&w=400&q=80',
      date: '2026-07-15',
      author: isRtl ? 'فريق المبيعات' : 'Sales Team',
      content: 'Detailed post content...'
    }
  ]

  const categories = [
    { label: isRtl ? 'الكل' : 'All', value: 'All' },
    { label: isRtl ? 'وصفات خفيفة' : 'Recipes', value: 'Recipes' },
    { label: isRtl ? 'صيحات الديكور' : 'Trends', value: 'Trends' },
    { label: isRtl ? 'نصائح الخبز' : 'Baking Tips', value: 'Baking Tips' },
    { label: isRtl ? 'أخبار المخبز' : 'News', value: 'News' }
  ]

  const handlePostClick = (post) => {
    setCurrentPost(post)
    setCurrentPage('blog-details')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Filter posts
  const filteredPosts = posts.filter(post => {
    const matchesTab = activeTab === 'All' || post.category === activeTab
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTab && matchesSearch
  })

  return (
    <div className="space-y-12 py-8 md:py-16">
      {/* Title */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-bakery-600 dark:text-bakery-400">
          {isRtl ? 'أسرار ووصفات مطبخنا' : 'Our Baking Blog'}
        </span>
        <h1 className="mt-2 font-serif text-4xl font-black text-slate-800 dark:text-white sm:text-5xl">
          {isRtl ? 'المدونة وأخبار الطهي' : 'Stories, Tips & Sweet Recipes'}
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-slate-600 dark:text-slate-400">
          {isRtl ? 'تابع آخر نصائح طهاتنا المهرة وأهم صيحات تزيين الكعك والأخبار الحصرية لمخبزنا.' : 'Read our weekly articles about dessert styling, home baking recipes, and events.'}
        </p>
      </section>

      {/* Filter and Search controls */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveTab(cat.value)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                  activeTab === cat.value
                    ? 'bg-bakery-600 text-white'
                    : 'bg-cream-100/60 text-slate-600 hover:bg-cream-200/50 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative max-w-xs w-full">
            <Search className={`absolute ${isRtl ? 'left-3' : 'right-3'} top-3 h-4.5 w-4.5 text-slate-400`} />
            <input
              type="text"
              placeholder={isRtl ? 'ابحث في المقالات...' : 'Search articles...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="glass-input py-2 text-sm focus:ring-bakery-500/20"
              style={{ paddingLeft: isRtl ? '2.5rem' : '1rem', paddingRight: isRtl ? '1rem' : '2.5rem' }}
            />
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 text-slate-400">
            {isRtl ? 'لم نجد أي مقال يطابق بحثك.' : 'No articles match your query.'}
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article 
                key={post.id} 
                className="glass-panel group flex flex-col justify-between p-0 overflow-hidden hover:border-bakery-400 hover:shadow-glow"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-103"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-0.5 text-[10px] font-bold text-bakery-700 dark:bg-slate-950/90 dark:text-bakery-400">
                      {post.category}
                    </span>
                  </div>
                  
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5" />
                        {post.author}
                      </span>
                    </div>
                    
                    <h3 className="font-serif text-xl font-bold text-slate-800 dark:text-white leading-tight group-hover:text-bakery-600 dark:group-hover:text-bakery-400 transition">
                      {post.title}
                    </h3>
                    
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => handlePostClick(post)}
                    className="flex items-center gap-1 text-xs font-semibold text-bakery-600 hover:text-bakery-700 dark:text-bakery-400"
                  >
                    {isRtl ? 'اقرأ المقال الكامل' : 'Read Full Article'}
                    <ArrowRight className={`h-3.5 w-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
