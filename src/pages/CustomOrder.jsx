import React, { useState } from 'react'
import { Sparkles, CheckCircle, Info, Calendar, FileText } from 'lucide-react'

export default function CustomOrder({ dir }) {
  const isRtl = dir === 'rtl'
  const [submitted, setSubmitted] = useState(false)
  const [flavor, setFlavor] = useState('Vanilla Bean')
  const [filling, setFilling] = useState('Strawberry Jam')
  const [size, setSize] = useState('6" Round (Serves 10)')
  const [date, setDate] = useState('')
  const [details, setDetails] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleCloseModal = () => {
    setSubmitted(false)
    // Clear form
    setDetails('')
    setName('')
    setPhone('')
    setDate('')
  }

  const sizes = [
    { value: '6" Round (Serves 10)', label: isRtl ? 'دائري 6 بوصة (يكفي 10)' : '6" Round (Serves 10)' },
    { value: '8" Round (Serves 18)', label: isRtl ? 'دائري 8 بوصة (يكفي 18)' : '8" Round (Serves 18)' },
    { value: '10" Round (Serves 28)', label: isRtl ? 'دائري 10 بوصة (يكفي 28)' : '10" Round (Serves 28)' },
    { value: 'Double Tier 6" + 8" (Serves 30)', label: isRtl ? 'طبقتين 6 + 8 بوصة (يكفي 30)' : 'Double Tier 6" + 8" (Serves 30)' },
    { value: 'Triple Tier 6" + 8" + 10" (Serves 65)', label: isRtl ? 'ثلاث طبقات 6+8+10 بوصة (يكفي 65)' : 'Triple Tier 6" + 8" + 10" (Serves 65)' }
  ]

  const flavors = [
    { value: 'Vanilla Bean', label: isRtl ? 'الفانيليا الفاخرة' : 'Classic Vanilla Bean' },
    { value: 'Belgian Chocolate Fudge', label: isRtl ? 'شوكولاتة الفدج البلجيكية' : 'Belgian Chocolate Fudge' },
    { value: 'Red Velvet sponge', label: isRtl ? 'المخمل الأحمر (ريد فيلفيت)' : 'Red Velvet Sponge' },
    { value: 'Zesty Lemon Zest', label: isRtl ? 'الليمون المنعش' : 'Zesty Lemon Sponge' },
    { value: 'Carrot & Pecan', label: isRtl ? 'الجزر والجوز المحمص' : 'Carrot & Pecan' }
  ]

  const fillings = [
    { value: 'Strawberry Jam & Cream', label: isRtl ? 'مربى الفراولة والكريمة المخفوقة' : 'Strawberry Jam & Cream' },
    { value: 'Chocolate Ganache', label: isRtl ? 'جناش الشوكولاتة الغني' : 'Rich Chocolate Ganache' },
    { value: 'Salted Caramel buttercream', label: isRtl ? 'كريمة الكراميل المملح' : 'Salted Caramel Buttercream' },
    { value: 'Cream Cheese frosting', label: isRtl ? 'جبنة الكريمة الناعمة' : 'Silky Cream Cheese Frosting' }
  ]

  return (
    <div className="space-y-12 py-8 md:py-16 animate-fade-in">
      {/* Title */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-bakery-600 dark:text-bakery-400">
          {isRtl ? 'صمم كعكة أحلامك' : 'Custom Cake Designer'}
        </span>
        <h1 className="mt-2 font-serif text-4xl font-black text-slate-800 dark:text-white sm:text-5xl">
          {isRtl ? 'اطلب تصميم كعكتك الخاصة' : 'Describe Your Dream Cake'}
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-slate-600 dark:text-slate-400 text-sm">
          {isRtl 
            ? 'حدد الحجم، النكهة، والحشوة التي ترغب بها، وقم بوصف تفاصيل التصميم وسيقوم خبازنا بالتواصل معك لتأكيد السعر.' 
            : 'Fill out your cake preferences and upload design inspirations. We will review and provide a free quotation.'}
        </p>
      </section>

      {/* Main Designer Form */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="glass-panel p-8 space-y-6 bg-white dark:bg-slate-900 border border-cream-100 dark:border-slate-800 shadow-xl">
          <div className="flex items-center gap-2 text-bakery-600">
            <Sparkles className="h-5 w-5" />
            <h3 className="font-serif text-xl font-bold text-slate-800 dark:text-white">
              {isRtl ? 'خيارات الكعكة الأساسية' : 'Base Configuration'}
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* Size Dropdown */}
            <div>
              <label htmlFor="size" className="mb-1.5 block text-xs font-semibold text-slate-500">
                {isRtl ? 'حجم الكعكة والطبقات' : 'Cake Size & Serving'}
              </label>
              <select
                id="size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="glass-input text-xs cursor-pointer focus:ring-bakery-500/20"
              >
                {sizes.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>

            {/* Date Picker */}
            <div>
              <label htmlFor="date" className="mb-1.5 block text-xs font-semibold text-slate-500">
                {isRtl ? 'تاريخ الاستلام أو التوصيل' : 'Delivery / Pickup Date'}
              </label>
              <div className="relative">
                <input
                  id="date"
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="glass-input text-xs cursor-pointer focus:ring-bakery-500/20"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* Flavor Sponge */}
            <div>
              <label htmlFor="flavor" className="mb-1.5 block text-xs font-semibold text-slate-500">
                {isRtl ? 'نكهة الكعكة (الطبقة الإسفنجية)' : 'Sponge Cake Flavor'}
              </label>
              <select
                id="flavor"
                value={flavor}
                onChange={(e) => setFlavor(e.target.value)}
                className="glass-input text-xs cursor-pointer focus:ring-bakery-500/20"
              >
                {flavors.map((f) => (
                  <option key={f.value} value={f.value}>{f.label}</option>
                ))}
              </select>
            </div>

            {/* Filling */}
            <div>
              <label htmlFor="filling" className="mb-1.5 block text-xs font-semibold text-slate-500">
                {isRtl ? 'نكهة الحشوة والطبقات' : 'Cake Filling Flavor'}
              </label>
              <select
                id="filling"
                value={filling}
                onChange={(e) => setFilling(e.target.value)}
                className="glass-input text-xs cursor-pointer focus:ring-bakery-500/20"
              >
                {fillings.map((fi) => (
                  <option key={fi.value} value={fi.value}>{fi.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Design Details description */}
          <div>
            <label htmlFor="details" className="mb-1.5 block text-xs font-semibold text-slate-500">
              {isRtl ? 'وصف تفاصيل التصميم والزينة' : 'Describe Design, Lettering & Frosting'}
            </label>
            <textarea
              id="details"
              rows="4"
              required
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder={isRtl 
                ? 'اكتب التفاصيل مثل: ألوان الكريمة، النص المراد كتابته على اللوحة، الثيم (مثال: بحري، كلاسيكي، ورود)...' 
                : 'Write details like: color scheme, custom lettering text, frosting style (smooth or textured), event theme...'}
              className="glass-input text-xs"
            />
          </div>

          {/* Contact Details */}
          <div className="border-t border-cream-100 pt-6 space-y-4 dark:border-slate-800">
            <h4 className="font-serif text-lg font-bold text-slate-800 dark:text-white">
              {isRtl ? 'معلومات الاتصال بالعميل' : 'Contact Information'}
            </h4>
            
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="client-name" className="mb-1.5 block text-xs font-semibold text-slate-500">
                  {isRtl ? 'الاسم الكامل' : 'Your Name'}
                </label>
                <input
                  id="client-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="glass-input text-xs"
                />
              </div>
              <div>
                <label htmlFor="client-phone" className="mb-1.5 block text-xs font-semibold text-slate-500">
                  {isRtl ? 'رقم الهاتف للتأكيد' : 'Phone Number'}
                </label>
                <input
                  id="client-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+966 5..."
                  className="glass-input text-xs"
                />
              </div>
            </div>
          </div>

          {/* Notice Alert */}
          <div className="rounded-2xl bg-sky-50 p-4 border border-sky-200 dark:bg-sky-950/20 dark:border-sky-900/50">
            <div className="flex gap-3">
              <Info className="h-5 w-5 text-sky-600 shrink-0 mt-0.5" />
              <div className="text-xs text-sky-800 dark:text-sky-400 leading-normal">
                {isRtl 
                  ? 'يرجى العلم أن هذا طلب عرض أسعار مبدئي. سنقوم بالتواصل معك عبر الهاتف أو الواتساب خلال 24 ساعة لتأكيد تفاصيل التصميم والتكلفة النهائية.' 
                  : 'Please note this is an initial quotation request. Our cake designers will call/text you within 24 hours to confirm pricing and finalize payment details.'}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full btn-primary py-3"
          >
            {isRtl ? 'إرسال طلب الكعكة وتلقي السعر' : 'Submit Quotation Request'}
          </button>
        </form>
      </section>

      {/* Submission Success Modal */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="glass-panel max-w-md w-full bg-white p-8 dark:bg-slate-900 border border-cream-200 text-center shadow-2xl space-y-5">
            <CheckCircle className="h-16 w-16 text-emerald-600 mx-auto" />
            <h3 className="font-serif text-2xl font-bold text-slate-800 dark:text-white">
              {isRtl ? 'تم إرسال طلبك بنجاح!' : 'Quotation Request Sent!'}
            </h3>
            <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
              <p>
                {isRtl 
                  ? `شكراً لك يا ${name}. لقد استلمنا تفاصيل الكعكة المخصصة الخاصة بك.` 
                  : `Thank you, ${name}. We have received your custom cake specifications.`}
              </p>
              <div className="rounded-xl bg-cream-50 p-3.5 text-xs text-left space-y-1.5 dark:bg-slate-950/40 border border-cream-100">
                <div><strong>{isRtl ? 'الحجم:' : 'Size:'}</strong> {size}</div>
                <div><strong>{isRtl ? 'النكهة:' : 'Flavor:'}</strong> {flavor}</div>
                <div><strong>{isRtl ? 'الحشوة:' : 'Filling:'}</strong> {filling}</div>
                <div><strong>{isRtl ? 'تاريخ التوصيل:' : 'Delivery:'}</strong> {date}</div>
              </div>
            </div>
            <button
              onClick={handleCloseModal}
              className="w-full btn-primary py-2.5 text-xs"
            >
              {isRtl ? 'إغلاق ومتابعة التصفح' : 'Close & Return'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
