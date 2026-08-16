import React, { useState } from 'react'
import { Truck, MapPin, CheckCircle, Clock, ShieldAlert } from 'lucide-react'

export default function Delivery({ dir }) {
  const isRtl = dir === 'rtl'
  const [postcode, setPostcode] = useState('')
  const [coverageMsg, setCoverageMsg] = useState(null)

  const checkPostcode = (e) => {
    e.preventDefault()
    const cleaned = postcode.trim().toLowerCase()
    if (!cleaned) return
    const covered = ['100', '200', '300', '400', '500', 'sweet', 'center', 'central', '90210']
    const isCovered = covered.some(zip => cleaned.includes(zip))

    if (isCovered) {
      setCoverageMsg({
        status: 'success',
        text: isRtl 
          ? 'نعم! منطقتك تقع ضمن تغطية التوصيل المبرد لدينا. التوصيل مجاني للطلبات فوق $30!' 
          : 'Great news! Your zone is covered by our temperature-controlled vans. Free delivery on orders over $30!'
      })
    } else {
      setCoverageMsg({
        status: 'error',
        text: isRtl 
          ? 'نعتذر، منطقتك تقع خارج نطاق التوصيل السريع لسياراتنا. يرجى التواصل معنا للاستلام من المعرض.' 
          : 'We currently do not offer standard delivery to this zip. Pick-up option is available at checkout.'
      })
    }
  }

  const zones = [
    { name: isRtl ? 'المنطقة الأولى (الوسطى)' : 'Zone 1 (Central City)', limit: isRtl ? 'حتى 10 كم من المخبز' : 'Up to 10km from bakery', fee: isRtl ? 'مجاني للطلبات فوق $30' : 'Free for orders over $30', standardFee: '$5.00' },
    { name: isRtl ? 'المنطقة الثانية (الضواحي)' : 'Zone 2 (Suburbs)', limit: isRtl ? 'من 10 كم إلى 25 كم' : '10km to 25km distance', fee: isRtl ? 'توصيل مبرد خلال 48 ساعة' : 'Chilled delivery in 48 hours', standardFee: '$12.00' },
    { name: isRtl ? 'المنطقة الثالثة (الخارجية)' : 'Zone 3 (Outer Ring)', limit: isRtl ? 'فوق 25 كم' : 'Above 25km distance', fee: isRtl ? 'يرجى التنسيق المسبق مع الإدارة' : 'Requires custom courier quote', standardFee: '$25.00+' }
  ]

  return (
    <div className="space-y-12 py-8 md:py-16 animate-fade-in">
      {/* Title */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-bakery-600 dark:text-bakery-400">
          {isRtl ? 'خيارات التوصيل والشحن' : 'Delivery coverage'}
        </span>
        <h1 className="mt-2 font-serif text-4xl font-black text-slate-800 dark:text-white sm:text-5xl">
          {isRtl ? 'توصيل مبرد آمن لكعكاتكم' : 'Safe Chilled Transport to Your Door'}
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-slate-600 dark:text-slate-400 text-sm">
          {isRtl 
            ? 'نحن نشحن الكعك والحلويات بواسطة أسطول من السيارات المكيفة لضمان ثبات الكريمة وتوصيل الكعكة بشكل مثالي.' 
            : 'We transport all customized cakes in temperature-controlled reefers to prevent melting.'}
        </p>
      </section>

      {/* Postcode checker widget */}
      <section className="mx-auto max-w-md px-4 text-center">
        <div className="glass-panel p-6 bg-white dark:bg-slate-900 border border-cream-100 dark:border-slate-800">
          <MapPin className="h-8 w-8 text-bakery-600 mx-auto mb-2" />
          <h3 className="font-serif text-lg font-bold text-slate-800 dark:text-white">
            {isRtl ? 'افحص منطقتك الآن' : 'Interactive Postcode Checker'}
          </h3>
          <form onSubmit={checkPostcode} className="mt-4 flex gap-2">
            <input 
              type="text" 
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              placeholder={isRtl ? 'الرمز البريدي...' : 'Postcode...'} 
              className="glass-input text-xs py-2"
              required
            />
            <button 
              type="submit" 
              className="rounded-2xl bg-bakery-600 px-4 text-xs font-semibold text-white hover:bg-bakery-700"
            >
              {isRtl ? 'تحقق' : 'Verify'}
            </button>
          </form>
          {coverageMsg && (
            <div className={`mt-4 rounded-xl p-3 text-xs font-semibold ${
              coverageMsg.status === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'
            }`}>
              {coverageMsg.text}
            </div>
          )}
        </div>
      </section>

      {/* Zones Grid */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            {isRtl ? 'مناطق التوصيل والأسعار' : 'Delivery Zones & Pricing'}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {zones.map((zone, idx) => (
            <div key={idx} className="glass-panel p-6 bg-white dark:bg-slate-900 text-center hover:border-bakery-300">
              <span className="text-2xl">🚚</span>
              <h3 className="font-serif text-lg font-bold text-slate-800 dark:text-white mt-2">{zone.name}</h3>
              <p className="text-xs text-slate-400 mt-1">{zone.limit}</p>
              <div className="my-4 border-t border-cream-50 dark:border-slate-800" />
              <div className="text-xl font-serif font-bold text-bakery-600 dark:text-bakery-400">
                {zone.standardFee}
              </div>
              <p className="text-[10px] text-slate-500 mt-1">{zone.fee}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cake Care Guide */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="glass-panel p-8 bg-white dark:bg-slate-900">
          <div className="flex items-center gap-2 text-bakery-600 mb-4">
            <ShieldAlert className="h-5 w-5" />
            <h3 className="font-serif text-xl font-bold text-slate-800 dark:text-white">
              {isRtl ? 'دليل المحافظة على سلامة الكعكة' : 'Cake Transport & Storage Guide'}
            </h3>
          </div>
          <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
            <li className="flex gap-2">
              <CheckCircle className="h-4.5 w-4.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                {isRtl 
                  ? 'عند استلام الكعكة بالسيارة، ضعها على أرضية السيارة المسطحة والمكيفة، وتجنب وضعها على مقاعد السيارة المنحنية.' 
                  : 'Always place the cake box flat on the car floor rather than passenger seats which are curved and slanted.'}
              </span>
            </li>
            <li className="flex gap-2">
              <CheckCircle className="h-4.5 w-4.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                {isRtl 
                  ? 'يرجى حفظ الكعكة في الثلاجة فور وصولها، وإخراجها قبل ساعة واحدة من التقديم لتصبح الكريمة ناعمة ولذيذة.' 
                  : 'Refrigerate the cake immediately upon arrival. Take it out 1-2 hours before serving to let frosting soften.'}
              </span>
            </li>
            <li className="flex gap-2">
              <CheckCircle className="h-4.5 w-4.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                {isRtl 
                  ? 'لا تعرض الكعكة لأشعة الشمس المباشرة أو درجات الحرارة المرتفعة نهائياً لتجنب ذوبان كريمة الزبدة.' 
                  : 'Keep the cake out of direct sunlight and high room temperatures to prevent buttercream sliding.'}
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
