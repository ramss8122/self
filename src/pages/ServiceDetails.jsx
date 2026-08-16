import React, { useState } from 'react'
import { Check, Shield, HelpCircle, ChevronDown, Calendar, Phone } from 'lucide-react'

export default function ServiceDetails({ dir, serviceName = 'Custom Cake Design', setCurrentPage }) {
  const isRtl = dir === 'rtl'
  const [activeFaq, setActiveFaq] = useState(null)

  // Map service names to details
  const getServiceDetails = (name) => {
    const key = name.toLowerCase()
    
    if (key.includes('catering') || key.includes('حفلات')) {
      return {
        title: isRtl ? 'ضيافة الحفلات والمناسبات الفاخرة' : 'Premium Wedding & Party Catering',
        tagline: isRtl ? 'نصنع محطة حلويات مذهلة تليق بيومكم الكبير' : 'Stunning, gourmet dessert tables styled to perfection.',
        heroImg: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?auto=format&fit=crop&w=800&q=80',
        desc: isRtl
          ? 'نوفر خدمات ضيافة حلويات ومعجنات متكاملة تشمل التصميم، التوصيل، الإعداد والتنسيق، وفريق تقديم محترف. نحن نضمن إبهار ضيوفك بتشكيلة من الماكرون الفرنسي الملون، كب كيك مخصص، وتارت الفاكهة الطازجة، وتشكيلة من موس الشوكولاتة الفاخر.'
          : 'Our full-service dessert catering provides an unforgettable gourmet experience for your guests. We handle design styling, transportation, setups, and optional waitstaff. Menus include customized macarons, cupcakes, tarts, and shooters matching your wedding theme.',
        pricing: [
          { name: isRtl ? 'باقة الضيافة الأساسية' : 'Silver Setup', price: '$299', desc: isRtl ? 'مناسبة لـ 30-50 ضيفاً' : 'Best for 30-50 guests', features: isRtl ? ['4 أصناف حلويات متنوعة', 'كب كيك وماكرون ملون', 'توصيل وإعداد على طاولاتكم'] : ['4 dessert varieties', 'Assorted cupcakes & macarons', 'Delivery & basic setup'] },
          { name: isRtl ? 'الباقة الذهبية المميزة' : 'Gold Premium', price: '$599', desc: isRtl ? 'مناسبة لـ 60-100 ضيف' : 'Best for 60-100 guests', features: isRtl ? ['6 أصناف حلويات متنوعة', 'كب كيك وماكرون وتارت فواكه', 'تنسيق الطاولات مع أزهار متوافقة', 'حوامل وأواني فاخرة مستعارة'] : ['6 dessert varieties', 'Cupcakes, macarons, fruit tarts', 'Themed styling with floral accents', 'Premium cake stands & platters'] },
          { name: isRtl ? 'باقة الأوركيد البلاتينية' : 'Platinum Royal', price: '$999', desc: isRtl ? 'مناسبة لـ 120-200 ضيف' : 'Best for 120-200 guests', features: isRtl ? ['8 أصناف حلويات متنوعة', 'تشمل كعكة زفاف صغيرة بطبقتين', 'تنسيق طاولة فاخر بالكامل', 'طاهي حلويات في الموقع لخدمة الضيوف'] : ['8 dessert varieties', 'Includes mini 2-tier wedding cake', 'Complete bespoke tablescape styling', 'On-site pastry chef for live service'] }
        ],
        faqs: [
          { q: isRtl ? 'قبل كم من الوقت يجب حجز الخدمة؟' : 'How far in advance should we book?', a: isRtl ? 'نوصي بالحجز قبل 4 إلى 6 أسابيع على الأقل لحفلات الزفاف والمناسبات الكبيرة.' : 'We recommend booking 4 to 6 weeks in advance to secure availability and allow time for design consulting.' },
          { q: isRtl ? 'هل توفرون خيارات مناسبة للحميات الغذائية؟' : 'Can you accommodate dietary restrictions?', a: isRtl ? 'نعم، يمكننا توفير أطباق خالية من الغلوتين، نباتية بالكامل، أو بدون سكر مضاف بناء على طلبكم.' : 'Yes! We offer delicious gluten-free, eggless, dairy-free, and vegan options. Please notify us during tasting.' }
        ]
      }
    }
    
    if (key.includes('class') || key.includes('work') || key.includes('دروس')) {
      return {
        title: isRtl ? 'ورش عمل ودروس الخبز العملية' : 'Pastry Workshops & Masterclasses',
        tagline: isRtl ? 'تعلم أسرار المعجنات الفرنسية الكلاسيكية' : 'Master the art of dough, laminating, and piping with our chefs.',
        heroImg: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
        desc: isRtl
          ? 'انضم إلينا في مطبخنا الاحترافي لتعلم خبز الكرواسون الهش، إعداد الماكرون الفرنسي بدقة، وتزيين الكعك ذو الطبقات مثل المحترفين. فئاتنا مصممة لتكون ممتعة ومفيدة وتفاعلية بالكامل.'
          : 'Step into our professional kitchen and learn the exact techniques behind flaky croissants, delicate macarons, and flawless frosting techniques. Classes are hands-on, interactive, and led by Chef Francois himself.',
        pricing: [
          { name: isRtl ? 'تذكرة ورشة عمل فردية' : 'Single Seat', price: '$85', desc: isRtl ? 'ورشة عمل لمدة 3 ساعات' : '3-hour interactive session', features: isRtl ? ['مكونات الخبز متوفرة بالكامل', 'صندوق معجنات لتأخذها للمنزل', 'كتيب الوصفات المطبوع'] : ['All raw baking ingredients', 'Pastry box to take home', 'Printed recipe book'] },
          { name: isRtl ? 'باقة الثنائي (شخصين)' : 'Baking Duo (2 Seats)', price: '$150', desc: isRtl ? 'رائعة للأزواج أو الأصدقاء' : 'Perfect for couples/friends', features: isRtl ? ['مقعدين محجوزين معاً', 'مكونات وهدايا إضافية', 'خصم 10% على أدوات الخبز في المتجر'] : ['2 reserved adjacent stations', 'Extra raw baking ingredients', '10% discount on in-store tools'] },
          { name: isRtl ? 'درس خاص للمجموعات' : 'Private Masterclass', price: '$500', desc: isRtl ? 'حتى 8 أشخاص' : 'Private group up to 8 guests', features: isRtl ? ['مطبخ محجوز بالكامل لكم', 'تخصيص موضوع الدرس بالكامل', 'مشروبات ومقبلات مجانية خلال الدرس'] : ['Exclusive kitchen buyout', 'Choose your own baking theme', 'Complementary drinks & snacks'] }
        ],
        faqs: [
          { q: isRtl ? 'هل أحتاج لإحضار أي أدوات معي؟' : 'Do I need to bring any equipment?', a: isRtl ? 'لا، نحن نوفر المآزر، المكونات، وجميع أدوات الخبز الاحترافية. فقط أحضر شغفك بالتعلم!' : 'No! We provide professional aprons, baking tools, recipes, and ingredients. Just bring your culinary curiosity!' },
          { q: isRtl ? 'هل توجد فئات عمرية محددة؟' : 'What is the minimum age?', a: isRtl ? 'ورش العمل العامة للبالغين واليافعين من سن 12 فما فوق. لدينا فئات خاصة للأطفال خلال الإجازات.' : 'Standard classes are for ages 12 and above. We host special family baking classes during holidays.' }
        ]
      }
    }

    if (key.includes('gift') || key.includes('wholesale') || key.includes('هدية')) {
      return {
        title: isRtl ? 'باقات الهدايا الفاخرة للشركات' : 'Corporate Gifting & Custom Branded Boxes',
        tagline: isRtl ? 'اهدي عملائك وموظفيك طعماً لا ينسى' : 'Elevate your brand relations with custom sweet gift boxes.',
        heroImg: 'https://images.unsplash.com/photo-1581333100576-b73bbe79c955?auto=format&fit=crop&w=800&q=80',
        desc: isRtl
          ? 'نصنع علب هدايا فاخرة تحتوي على تشكيلات من الماكرون الفرنسي، كوكيز الشوكولاتة الداكنة، والكب كيك الفاخر. العلب والشرائط مخصصة بشعار وألوان شركتك كهدية فاخرة تترك انطباعاً مذهلاً.'
          : 'Impress your VIP clients and reward your hardworking team with our bespoke corporate gift collections. Boxes are custom-branded with your logo and containing assortments of gourmet macarons, cookies, and chocolate truffles.',
        pricing: [
          { name: isRtl ? 'علبة الهدايا الكلاسيكية' : 'Classic Box', price: '$20', desc: isRtl ? 'الحد الأدنى 20 علبة' : 'Min. order of 20 boxes', features: isRtl ? ['6 قطع ماكرون متنوعة', 'بطاقة تهنئة مطبوعة بشعارك', 'تغليف أنيق بشريطة ناعمة'] : ['6 premium assorted macarons', 'Custom message card with logo', 'Elegant branded ribbon wrap'] },
          { name: isRtl ? 'العلبة الذهبية الفاخرة' : 'Premium Sweet Box', price: '$38', desc: isRtl ? 'الحد الأدنى 15 علبة' : 'Min. order of 15 boxes', features: isRtl ? ['8 ماكرون + 4 كوكيز بلجيكي', 'شعار الشركة منقوش بالذهب على العلبة', 'شحن مجاني لمكتب الشركة الرئيسي'] : ['8 macarons & 4 giant cookies', 'Gold-foiled custom logo box', 'Free bulk delivery to HQ'] },
          { name: isRtl ? 'صندوق هدايا كبار الشخصيات' : 'VIP Executive Hamper', price: '$75', desc: isRtl ? 'الحد الأدنى 5 صناديق' : 'Min. order of 5 hampers', features: isRtl ? ['تشكيلة ضخمة من الماكرون، التارت، والكوكيز', 'لوح شوكولاتة مخصص يدوياً', 'صندوق خشبي مبطن فاخر قابل لإعادة الاستخدام'] : ['Macarons, tarts, cookies & truffles', 'Handmade customized chocolate bar', 'Luxury reusable wooden hamper chest'] }
        ],
        faqs: [
          { q: isRtl ? 'هل نوفر شحن لعدة عناوين مختلفة؟' : 'Can you ship to multiple addresses?', a: isRtl ? 'نعم، يمكننا ترتيب تسليم الهدايا لمكاتب موظفيك أو منازل عملائك مباشرة في نفس اليوم.' : 'Yes! We can arrange individual courier shipping to a list of different addresses for remote teams.' },
          { q: isRtl ? 'هل تتوفر أسعار مخفضة للكميات الكبيرة؟' : 'Do you offer bulk discounts?', a: isRtl ? 'نعم، نوفر خصومات تبدأ من 10% للطلبات التي تتجاوز قيمتها 1000 دولار.' : 'Yes! We offer tier-based volume discounts starting at 10% for orders over $1,000.' }
        ]
      }
    }

    // Default: Custom Cake Design
    return {
      title: isRtl ? 'تصميم الكعك المخصص والمبتكر' : 'Bespoke Custom Cake Design',
      tagline: isRtl ? 'نحول كعكة خيالك إلى حقيقة لذيذة' : 'Custom double-tier showstoppers crafted by master artisans.',
      heroImg: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
      desc: isRtl
        ? 'ابدأ تصميم كعكتك الخاصة لحدثك المميز. نحن نقدم كعكاً مخصصاً بالكامل، من الحجم والطبقات، إلى النكهات مثل الفانيليا المخملية، شوكولاتة الفدج الغنية، وتوت العليق المنعش. نقوم بصياغة زهور السكر والتماثيل يدوياً وبدقة فائقة.'
        : 'Order the cake you have always dreamed of! Specify the tiers, flavors (e.g. Vanilla Bean, Belgian Chocolate, Lemon Zest), filling options, and frostings. Our team hand-paints designs and sculpts sugar flowers to match your event theme perfectly.',
      pricing: [
        { name: isRtl ? 'كعكة الحفل البسيطة' : 'Standard Celebration', price: '$80', desc: isRtl ? 'كعكة طبقة واحدة، تكفي 10-15 شخصاً' : '1-tier cake, serves 10-15 guests', features: isRtl ? ['كتابة نصية مخصصة مجانية', 'اختيار من 3 نكهات أساسية', 'تغليف بصندوق آمن'] : ['Free custom lettering', 'Select from 3 classic flavors', 'Secure cardboard box casing'] },
        { name: isRtl ? 'كعكة المناسبات بطبقتين' : 'Double Tier Designer', price: '$180', desc: isRtl ? 'كعكة من طبقتين، تكفي 25-35 شخصاً' : '2-tier cake, serves 25-35 guests', features: isRtl ? ['تزيين يدوي بالكريمة المخفوقة أو الفوندان', 'اختيار نكهات وحشوات مختلفة لكل طبقة', 'حوامل خشبية للدعم والرفع'] : ['Bespoke buttercream styling', 'Mix-match flavours per tier', 'Internal structural support dowels'] },
        { name: isRtl ? 'كعكة الأعراس الكبرى' : 'Royal Tier Masterpiece', price: '$450', desc: isRtl ? 'كعكة 3 طبقات فأكثر، تكفي 60+ شخص' : '3+ tiers, serves 60+ guests', features: isRtl ? ['زهور سكر مصنوعة يدوياً بالكامل', 'استشارة وتذوق نكهات مجانية', 'توصيل مبرد وإعداد في صالة الزفاف'] : ['Hand-sculpted sugar florals', 'Complementary tasting consultation', 'Temperature-controlled venue delivery'] }
      ],
      faqs: [
        { q: isRtl ? 'قبل كم من الوقت يجب طلب كعكة مخصصة؟' : 'How early should I order my custom cake?', a: isRtl ? 'نطلب الحجز قبل 3 أيام على الأقل للطلبات العادية، وقبل أسبوعين للكعكات الفاخرة ذات الطبقات المتعددة.' : 'Standard custom cakes require 3 days notice. Elaborate multi-tiered cakes require at least 1-2 weeks.' },
        { q: isRtl ? 'هل توجد حشوات أو نكهات مخصصة للأطفال؟' : 'Are children friendly flavors available?', a: isRtl ? 'نعم! نكهات الفانيليا الملونة، شوكولاتة النوتيلا، وحلوى المارشميلو مفضلة جداً للأطفال وخالية من أي كحول.' : 'Absolutely! Our Funfetti vanilla and Milk Chocolate Nutella fillings are highly popular kids favorites.' }
      ]
    }
  }

  const details = getServiceDetails(serviceName)

  return (
    <div className="space-y-16 py-8 md:py-16 animate-fade-in">
      {/* Hero section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="font-serif text-3xl font-black text-slate-800 dark:text-white sm:text-4xl md:text-5xl">
              {details.title}
            </h1>
            <p className="text-md font-semibold text-bakery-600 dark:text-bakery-400">
              {details.tagline}
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
              {details.desc}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => setCurrentPage('custom-order')}
                className="btn-primary flex items-center gap-1.5"
              >
                <Calendar className="h-4.5 w-4.5" />
                {isRtl ? 'احجز طلبك الآن' : 'Order / Booking Enquiry'}
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="btn-secondary flex items-center gap-1.5"
              >
                <Phone className="h-4.5 w-4.5" />
                {isRtl ? 'اتصل للتفاصيل' : 'Speak with Chef'}
              </button>
            </div>
          </div>
          <div>
            <img 
              src={details.heroImg} 
              alt={details.title} 
              className="w-full h-80 md:h-[400px] object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Pricing Packages Table */}
      <section className="bg-cream-100/50 py-16 dark:bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
              {isRtl ? 'باقات الأسعار المقترحة للخدمة' : 'Service Pricing Packages'}
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              {isRtl ? 'اختر الباقة المناسبة لميزانيتك واحتياجات مناسبتك.' : 'Choose the pricing package that fits your event scale.'}
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {details.pricing.map((tier, idx) => (
              <div 
                key={idx} 
                className={`glass-panel flex flex-col justify-between p-8 bg-white dark:bg-slate-900 ${
                  idx === 1 ? 'border-2 border-bakery-500 scale-[1.02] shadow-xl' : 'hover:border-bakery-200'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="font-serif text-lg font-bold text-slate-800 dark:text-white">{tier.name}</h3>
                    {idx === 1 && (
                      <span className="rounded-full bg-bakery-100 px-2.5 py-0.5 text-[10px] font-bold text-bakery-700 dark:bg-bakery-950 dark:text-bakery-400">
                        {isRtl ? 'موصى به' : 'Recommended'}
                      </span>
                    )}
                  </div>
                  <div className="mt-4 font-serif text-3xl font-bold text-bakery-600 dark:text-bakery-400">
                    {tier.price}
                  </div>
                  <p className="mt-1 text-xs text-slate-400">{tier.desc}</p>
                  
                  <div className="my-6 border-t border-cream-100 dark:border-slate-800" />
                  
                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                    {tier.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-bakery-600" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => setCurrentPage('custom-order')}
                  className={`mt-8 w-full rounded-2xl py-2.5 text-center text-xs font-semibold transition ${
                    idx === 1 
                      ? 'bg-bakery-600 text-white hover:bg-bakery-700' 
                      : 'border border-cream-200 text-slate-700 hover:border-bakery-400 hover:text-bakery-700 dark:border-slate-800 dark:text-slate-300 dark:hover:border-bakery-400'
                  }`}
                >
                  {isRtl ? 'اختر الباقة واطلب' : 'Choose Package'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <HelpCircle className="h-8 w-8 text-bakery-600 mx-auto" />
          <h2 className="mt-2 text-2xl font-bold text-slate-800 dark:text-white">
            {isRtl ? 'الأسئلة المتكررة حول الخدمة' : 'Frequently Asked Questions'}
          </h2>
        </div>

        <div className="space-y-4">
          {details.faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx
            return (
              <div 
                key={idx} 
                className="glass-panel p-0 overflow-hidden bg-white dark:bg-slate-900 border border-cream-100 dark:border-slate-800"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold text-slate-800 dark:text-slate-200"
                  style={{ textAlign: isRtl ? 'right' : 'left' }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-slate-500 dark:text-slate-400 border-t border-cream-50 dark:border-slate-800/50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
