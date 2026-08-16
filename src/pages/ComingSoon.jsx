import React, { useState, useEffect } from 'react'
import { Calendar, Mail, AlertTriangle, ArrowRight } from 'lucide-react'

export default function ComingSoon({ dir }) {
  const isRtl = dir === 'rtl'
  const [subscribed, setSubscribed] = useState(false)
  
  // Mock countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 8,
    minutes: 45,
    seconds: 30
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        } else {
          clearInterval(timer)
          return prev
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 text-center animate-fade-in max-w-3xl mx-auto space-y-8">
      
      {/* Alert Header */}
      <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-4 py-1.5 text-xs font-semibold text-amber-800 dark:bg-amber-950/20 dark:text-amber-400 border border-amber-200 dark:border-amber-900/40">
        <AlertTriangle className="h-4 w-4" />
        {isRtl ? 'الموقع يخضع للتحديثات وأعمال الصيانة حالياً' : 'System is currently undergoing scheduled maintenance'}
      </div>

      {/* Main Headline */}
      <div className="space-y-4">
        <span className="text-4xl">🚧</span>
        <h1 className="font-serif text-4xl font-black text-slate-800 dark:text-white sm:text-5xl">
          {isRtl ? 'قريباً: تجربة الطلب الجديدة' : 'Coming Soon: The New Sweet Experience'}
        </h1>
        <p className="max-w-xl mx-auto text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          {isRtl 
            ? 'نعمل حالياً على تحديث متجرنا الإلكتروني لتسهيل تصميم وطلب الكعك المخصص والدفع الإلكتروني الآمن. سنفتتح بعد:' 
            : 'We are baking a brand-new digital storefront to make custom cake design and express shipping seamless. Opening in:'}
        </p>
      </div>

      {/* Countdown Timers */}
      <div className="grid grid-cols-4 gap-4 max-w-md w-full">
        {[
          { label: isRtl ? 'يوم' : 'Days', val: timeLeft.days },
          { label: isRtl ? 'ساعة' : 'Hours', val: timeLeft.hours },
          { label: isRtl ? 'دقيقة' : 'Mins', val: timeLeft.minutes },
          { label: isRtl ? 'ثانية' : 'Secs', val: timeLeft.seconds }
        ].map((timer, idx) => (
          <div key={idx} className="glass-panel p-4 bg-white dark:bg-slate-900 border border-cream-100 dark:border-slate-800">
            <div className="font-serif text-2xl sm:text-3xl font-extrabold text-bakery-600 dark:text-bakery-500">
              {timer.val.toString().padStart(2, '0')}
            </div>
            <div className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">{timer.label}</div>
          </div>
        ))}
      </div>

      {/* Subscription Notify form */}
      <div className="max-w-md w-full glass-panel p-6 bg-white dark:bg-slate-900">
        <h3 className="font-serif text-lg font-bold text-slate-800 dark:text-white mb-2">
          {isRtl ? 'تلقى إشعاراً عند الافتتاح!' : 'Get Notified On Launch!'}
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          {isRtl ? 'أدخل بريدك الإلكتروني وسنرسل لك رمز خصم 15% ليوم الافتتاح.' : 'Enter your email and get a 15% discount voucher for opening day.'}
        </p>
        
        <form 
          className="flex gap-2" 
          onSubmit={(e) => { e.preventDefault(); setSubscribed(true); setTimeout(() => setSubscribed(false), 5000) }}
        >
          <input
            type="email"
            required
            placeholder={isRtl ? 'بريدك الإلكتروني...' : 'your@email.com'}
            className="glass-input text-xs py-2"
          />
          <button
            type="submit"
            className="rounded-2xl bg-bakery-600 px-4 text-xs font-semibold text-white hover:bg-bakery-700 shrink-0"
          >
            {isRtl ? 'أعلمني' : 'Notify'}
          </button>
        </form>

        {subscribed && (
          <div className="mt-3 rounded-xl bg-emerald-50 p-2.5 text-center text-[10px] font-semibold text-emerald-800 border border-emerald-100">
            🎉 {isRtl ? 'شكراً لك! سنرسل لك الإشعار ورمز الخصم فور الافتتاح.' : 'Awesome! We will email you with your coupon code on launch day.'}
          </div>
        )}
      </div>
    </div>
  )
}
