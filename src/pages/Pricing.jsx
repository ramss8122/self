import React from 'react'
import { DollarSign, Check, Info } from 'lucide-react'

export default function Pricing({ dir }) {
  const isRtl = dir === 'rtl'

  const priceGroups = [
    {
      category: isRtl ? 'الكعك والحلويات الكلاسيكية' : 'Standard Round Cakes',
      items: [
        { name: isRtl ? 'كعكة الفانيليا البسيطة (6 بوصة)' : 'Vanilla Bean Round (6")', price: '$35.00', desc: isRtl ? 'تكفي 8-10 أشخاص' : 'Serves 8-10 guests' },
        { name: isRtl ? 'كعكة الشوكولاته البلجيكية (8 بوصة)' : 'Chocolate Fudge Round (8")', price: '$45.00', desc: isRtl ? 'تكفي 12-16 شخصاً' : 'Serves 12-16 guests' },
        { name: isRtl ? 'كعكة المخمل الأحمر الكلاسيكية (10 بوصة)' : 'Red Velvet Round (10")', price: '$60.00', desc: isRtl ? 'تكفي 20-25 شخصاً' : 'Serves 20-25 guests' }
      ]
    },
    {
      category: isRtl ? 'كب كيك ومعجنات يومية' : 'Cupcakes & Daily Pastries',
      items: [
        { name: isRtl ? 'نصف درزن كب كيك مخصص (6 قطع)' : 'Custom Cupcakes (Half Dozen)', price: '$18.00', desc: isRtl ? 'كريمة مخفوقة ونكهات متنوعة' : 'Assorted designs & buttercream frosting' },
        { name: isRtl ? 'علبة ماكرون فرنسي فاخرة (12 قطعة)' : 'French Macaron Box (12 pcs)', price: '$24.00', desc: isRtl ? 'تشكيلة من النكهات الموسمية الطازجة' : 'Gourmet seasonal chocolate & fruit fillings' },
        { name: isRtl ? 'علبة معجنات الصباح المشكلة (6 قطع)' : 'Breakfast Pastry Box (6 pcs)', price: '$15.00', desc: isRtl ? 'تشمل الكرواسون ودانيش القرفة' : 'Includes croissants, danishes & rolls' }
      ]
    }
  ]

  const upgrades = [
    { name: isRtl ? 'طبقة حشو إضافية فاخرة' : 'Premium Fruit/Nut Filling Layer', cost: '+$5.00' },
    { name: isRtl ? 'تغليف الكعكة بالفوندان الاحترافي' : 'Premium Fondant Styling wrap', cost: '+$20.00' },
    { name: isRtl ? 'علب هدايا فاخرة مخصصة بالأسماء' : 'Individual custom name tag boxes', cost: '+$2.50 / box' },
    { name: isRtl ? 'مجسمات كرتونية أو ورود فوندان يدوية' : 'Handcrafted sugar flower accents / toppers', cost: '+$15.00+' }
  ]

  return (
    <div className="space-y-12 py-8 md:py-16 animate-fade-in">
      {/* Title */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-bakery-600 dark:text-bakery-400">
          {isRtl ? 'أسعارنا الواضحة' : 'Pricing Guide'}
        </span>
        <h1 className="mt-2 font-serif text-4xl font-black text-slate-800 dark:text-white sm:text-5xl">
          {isRtl ? 'دليل أسعار الحلويات والمخبوزات' : 'Bakery & Cake Price Catalog'}
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-slate-600 dark:text-slate-400 text-sm">
          {isRtl 
            ? 'تصفح قائمة أسعار كعكاتنا الأساسية والمعجنات اليومية وتكلفة الإضافات الخاصة.' 
            : 'Explore standard pricing configurations for round cakes, pastries, cupcakes and customize options.'}
        </p>
      </section>

      {/* Pricing Tables */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {priceGroups.map((group, idx) => (
            <div key={idx} className="glass-panel p-8 bg-white dark:bg-slate-900 border border-cream-100 dark:border-slate-800">
              <h3 className="mb-6 font-serif text-xl font-bold text-bakery-600 dark:text-bakery-400 border-b border-cream-50 pb-2">
                {group.category}
              </h3>
              
              <div className="space-y-6">
                {group.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-white text-sm">{item.name}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                    <span className="font-serif font-bold text-slate-800 dark:text-white text-sm whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upgrades & Customization additions */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="glass-panel p-8 bg-white dark:bg-slate-900">
          <h3 className="mb-6 font-serif text-xl font-bold text-slate-800 dark:text-white">
            {isRtl ? 'تكلفة التخصيص والإضافات' : 'Custom Upgrades & Add-on Costs'}
          </h3>

          <div className="space-y-4">
            {upgrades.map((upg, idx) => (
              <div key={idx} className="flex justify-between items-center text-xs border-b border-cream-50 dark:border-slate-800 pb-2.5">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span className="text-slate-600 dark:text-slate-300">{upg.name}</span>
                </div>
                <span className="font-serif font-bold text-bakery-600 dark:text-bakery-400">{upg.cost}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 rounded-2xl bg-amber-50 p-4 border border-amber-200 dark:bg-amber-950/20 dark:border-amber-900/50 flex gap-3">
            <Info className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800 dark:text-amber-400 leading-normal">
              {isRtl 
                ? 'ملاحظة: الأسعار أعلاه تقريبية وتعتمد على مدى تعقيد التصميم وساعات العمل الفنية المطلوبة. تفضل بملء نموذج الكعك المخصص للحصول على عرض سعر دقيق.' 
                : 'Note: Design complexity (detailed sculpting, tiered configurations) may impact final cost. Request custom quotes for accurate details.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
