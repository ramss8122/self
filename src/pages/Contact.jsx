import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, AlertTriangle } from 'lucide-react'

export default function Contact({ dir }) {
  const isRtl = dir === 'rtl'
  const [submitted, setSubmitted] = useState(false)
  const [isSameDay, setIsSameDay] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

  return (
    <div className="space-y-12 py-8 md:py-16 animate-fade-in">
      {/* Title */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-bakery-600 dark:text-bakery-400">
          {isRtl ? 'يسعدنا تواصلكم' : 'Get In Touch'}
        </span>
        <h1 className="mt-2 font-serif text-4xl font-black text-slate-800 dark:text-white sm:text-5xl">
          {isRtl ? 'اتصل بنا أو أرسل استفسارك' : 'Contact Us & Special Enquiries'}
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-slate-600 dark:text-slate-400 font-sans text-sm">
          {isRtl 
            ? 'هل لديك طلب كبير أو ترغب في الاستفسار عن كعكة لنفس اليوم؟ املأ النموذج وسيتصل بك الشيف مباشرة.' 
            : 'Have a generic question or an urgent same-day order request? Complete the form below.'}
        </p>
      </section>

      {/* Main Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Details & Hours */}
          <div className="space-y-6 lg:col-span-2">
            <div className="glass-panel p-6 space-y-6">
              <h3 className="font-serif text-xl font-bold text-slate-800 dark:text-white">
                {isRtl ? 'معلومات التواصل المباشر' : 'Direct Channels'}
              </h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="rounded-xl bg-bakery-50 p-3 text-bakery-600 dark:bg-slate-800 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{isRtl ? 'رقم الهاتف' : 'Phone'}</h4>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">+966 50 123 4567</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-xl bg-bakery-50 p-3 text-bakery-600 dark:bg-slate-800 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{isRtl ? 'البريد الإلكتروني' : 'Email'}</h4>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">chef@sweetdelight.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-xl bg-bakery-50 p-3 text-bakery-600 dark:bg-slate-800 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{isRtl ? 'الموقع' : 'Location'}</h4>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">123 شارع المعجنات، الرياض، المملكة العربية السعودية</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-xl bg-bakery-50 p-3 text-bakery-600 dark:bg-slate-800 shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{isRtl ? 'أوقات العمل' : 'Opening Hours'}</h4>
                    <p className="text-xs text-slate-700 dark:text-slate-200">
                      {isRtl ? 'يومياً: 7:00 صباحاً - 9:00 مساءً' : 'Daily: 7:00 AM - 9:00 PM'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Styled Mock SVG Map Pointer */}
            <div className="glass-panel p-0 overflow-hidden h-60 relative border border-cream-100 dark:border-slate-800">
              <div className="absolute inset-0 bg-slate-200 dark:bg-slate-900 flex items-center justify-center">
                {/* SVG mock map background */}
                <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,50 Q100,60 200,40 T400,60 T600,30 T800,50 L800,200 L0,200 Z" fill="#b28461" />
                  <path d="M0,120 Q150,100 300,130 T600,110 T800,130" fill="none" stroke="#e59d72" strokeWidth="4" />
                  <circle cx="280" cy="115" r="30" fill="#e59d72" fillOpacity="0.2" />
                  <line x1="300" y1="0" x2="300" y2="240" stroke="#ccc" strokeDasharray="5,5" />
                  <line x1="0" y1="120" x2="600" y2="120" stroke="#ccc" strokeDasharray="5,5" />
                </svg>
                {/* Visual Pointer Card */}
                <div className="absolute flex flex-col items-center">
                  <div className="animate-bounce rounded-full bg-bakery-600 p-2 text-white shadow-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="mt-2 rounded-xl bg-white px-3 py-1.5 text-xs font-bold text-slate-800 shadow-md dark:bg-slate-950 dark:text-white border border-cream-200">
                    Sweet Delight Bakery 🍰
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-panel p-8 space-y-5 bg-white dark:bg-slate-900">
              <h3 className="font-serif text-2xl font-bold text-slate-800 dark:text-white">
                {isRtl ? 'نموذج الاستفسار السريع' : 'Enquiry Enquiry Form'}
              </h3>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-slate-500">
                    {isRtl ? 'الاسم الكامل' : 'Full Name'}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder={isRtl ? 'الاسم الأول والأخير' : 'John Doe'}
                    className="glass-input text-xs"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-slate-500">
                    {isRtl ? 'البريد الإلكتروني' : 'Email Address'}
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="glass-input text-xs"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-slate-500">
                  {isRtl ? 'رقم الجوال' : 'Phone Number'}
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="+966 50..."
                  className="glass-input text-xs"
                />
              </div>

              {/* Same Day Enquiry Toggle */}
              <div className="rounded-2xl bg-amber-50 p-4 border border-amber-200 dark:bg-amber-950/20 dark:border-amber-900/50">
                <div className="flex items-start gap-3">
                  <input
                    id="sameday"
                    type="checkbox"
                    checked={isSameDay}
                    onChange={(e) => setIsSameDay(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-amber-300 text-bakery-600 focus:ring-bakery-500 cursor-pointer"
                  />
                  <div className="space-y-1">
                    <label htmlFor="sameday" className="text-xs font-bold text-amber-800 dark:text-amber-400 cursor-pointer">
                      ⚠️ {isRtl ? 'طلب عاجل لنفس اليوم؟' : 'Is this an urgent same-day order enquiry?'}
                    </label>
                    <p className="text-[10px] text-amber-700 dark:text-amber-500 leading-normal">
                      {isRtl 
                        ? 'تنبيه: الطلبات العاجلة تتطلب موافقة سريعة من المطبخ للتحقق من المخزون المتوفر في المعرض قبل تأكيد الفاتورة.' 
                        : 'Urgent same-day enquiries will trigger high-priority alerts to our pastry chefs, matching available showroom items.'}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-slate-500">
                  {isRtl ? 'تفاصيل الاستفسار أو الطلب' : 'Message / Details'}
                </label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  placeholder={isRtl ? 'اكتب ما ترغب في طلبه أو تفاصيل استفسارك هنا...' : 'Describe what you wish to order or ask...'}
                  className="glass-input text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-1.5"
              >
                <Send className="h-4 w-4" />
                {isRtl ? 'إرسال الاستفسار' : 'Send Enquiry'}
              </button>

              {submitted && (
                <div className="rounded-2xl bg-emerald-50 p-4 text-center text-xs font-semibold text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-400 border border-emerald-200">
                  🎉 {isRtl 
                    ? 'شكراً لك! تم إرسال استفسارك بنجاح. سيقوم الشيف بالتواصل معك خلال 30 دقيقة.' 
                    : 'Success! Your enquiry has been received. Our team will contact you shortly.'}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
