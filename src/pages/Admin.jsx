import React, { useState } from 'react'
import { ShoppingCart, MessageSquare, DollarSign, Users, RefreshCw, Check, Trash2, ArrowUpRight } from 'lucide-react'

export default function Admin({ dir }) {
  const isRtl = dir === 'rtl'

  const [orders, setOrders] = useState([
    { id: '#1024', name: isRtl ? 'أمل الحربي' : 'Amal Al-Harbi', item: isRtl ? 'كعكة زفاف 3 طبقات' : '3-Tier Wedding Cake', date: '2026-08-14', status: 'Pending', price: '$450.00' },
    { id: '#1023', name: isRtl ? 'جون دو' : 'John Doe', item: isRtl ? 'علبة كرواسون دبل' : 'Double Croissant Box', date: '2026-08-14', status: 'Baking', price: '$15.00' },
    { id: '#1022', name: isRtl ? 'خالد الفهد' : 'Khaled Al-Fahad', item: isRtl ? 'كعكة ميلاد ريد فيلفيت' : 'Red Velvet Birthday Cake', date: '2026-08-13', status: 'Out for Delivery', price: '$48.00' },
    { id: '#1021', name: isRtl ? 'سارة سمير' : 'Sara Samir', item: isRtl ? 'علبة ماكرون فرنسي' : '12pc Macaron Box', date: '2026-08-12', status: 'Completed', price: '$24.00' }
  ])

  const [messages, setMessages] = useState([
    { id: 1, name: isRtl ? 'يوسف سعيد' : 'Youssef Said', email: 'youssef@example.com', msg: isRtl ? 'هل توجد عينات تذوق لكعكة الكراميل قبل الطلب؟' : 'Are there salted caramel tasting samples?', date: '10:15 AM' },
    { id: 2, name: isRtl ? 'هند الغامدي' : 'Hind Al-Ghamdi', email: 'hind@example.com', msg: isRtl ? 'هل تشحنون الكعكات بطبقات متعددة إلى خارج الرياض؟' : 'Do you deliver multi-tier cakes to Dammam?', date: 'Yesterday' }
  ])

  const toggleOrderStatus = (id) => {
    setOrders(orders.map(order => {
      if (order.id === id) {
        let newStatus = 'Pending'
        if (order.status === 'Pending') newStatus = 'Baking'
        else if (order.status === 'Baking') newStatus = 'Out for Delivery'
        else if (order.status === 'Out for Delivery') newStatus = 'Completed'
        else newStatus = 'Pending'
        return { ...order, status: newStatus }
      }
      return order
    }))
  }

  const deleteMessage = (id) => {
    setMessages(messages.filter(msg => msg.id !== id))
  }

  const stats = [
    { label: isRtl ? 'إجمالي الطلبات اليوم' : 'Total Orders Today', val: '42', icon: <ShoppingCart className="h-6 w-6 text-bakery-600" />, rate: '+12.5%' },
    { label: isRtl ? 'إيرادات اليوم' : 'Daily Sales Revenue', val: '$1,240.00', icon: <DollarSign className="h-6 w-6 text-bakery-600" />, rate: '+8.3%' },
    { label: isRtl ? 'رسائل واستفسارات' : 'Active Enquiries', val: messages.length.toString(), icon: <MessageSquare className="h-6 w-6 text-bakery-600" />, rate: '-2.1%' },
    { label: isRtl ? 'المستخدمين النشطين' : 'Active Users Online', val: '184', icon: <Users className="h-6 w-6 text-bakery-600" />, rate: '+15.4%' }
  ]

  return (
    <div className="space-y-12 py-8 md:py-16 animate-fade-in">
      {/* Title */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-bakery-600 dark:text-bakery-400">
              {isRtl ? 'إدارة المخبز' : 'Administrative Board'}
            </span>
            <h1 className="mt-1 font-serif text-4xl font-black text-slate-800 dark:text-white">
              {isRtl ? 'لوحة تحكم المسؤول' : 'Admin Panel & Analytics'}
            </h1>
          </div>
          <div className="text-xs text-slate-400 dark:text-slate-500 font-semibold bg-cream-100/50 dark:bg-slate-900 px-4 py-2 rounded-2xl border border-cream-200 dark:border-slate-800 self-start">
            ⏰ {isRtl ? 'تحديث تلقائي: نشط' : 'Auto-Sync: Live Data'}
          </div>
        </div>
      </section>

      {/* Stats Cards grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((st, idx) => (
            <div key={idx} className="glass-panel p-6 bg-white dark:bg-slate-900 border border-cream-100 dark:border-slate-800 shadow-sm flex items-center justify-between">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-400 block">{st.label}</span>
                <span className="font-serif text-2xl font-bold text-slate-800 dark:text-white block">{st.val}</span>
                <span className={`text-[10px] font-bold ${st.rate.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {st.rate} {isRtl ? 'مقارنة بالأمس' : 'vs yesterday'}
                </span>
              </div>
              <div className="rounded-2xl bg-bakery-50 p-3.5 dark:bg-slate-800/80">
                {st.icon}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Charts Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* SVG Sales Trend Chart */}
          <div className="glass-panel p-6 bg-white dark:bg-slate-900 lg:col-span-2 space-y-4">
            <h3 className="font-serif text-lg font-bold text-slate-800 dark:text-white">
              {isRtl ? 'منحنى المبيعات الأسبوعي' : 'Weekly Sales Trend'}
            </h3>
            
            {/* SVG graph mockup */}
            <div className="relative h-60 w-full border border-cream-50 dark:border-slate-800 rounded-2xl overflow-hidden bg-cream-50/20 dark:bg-slate-950/20 p-4">
              <svg className="w-full h-full" viewBox="0 0 600 200">
                {/* Grid Lines */}
                <line x1="0" y1="50" x2="600" y2="50" stroke="#eee" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="0" y1="100" x2="600" y2="100" stroke="#eee" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="0" y1="150" x2="600" y2="150" stroke="#eee" strokeWidth="1" strokeDasharray="5,5" />
                
                {/* Sales Line Chart Path */}
                <path
                  d="M 50 160 L 130 140 L 210 110 L 290 120 L 370 80 L 450 90 L 550 40"
                  fill="none"
                  stroke="#dc7b45"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                
                {/* Highlight circles */}
                <circle cx="50" cy="160" r="4" fill="#dc7b45" />
                <circle cx="130" cy="140" r="4" fill="#dc7b45" />
                <circle cx="210" cy="110" r="4" fill="#dc7b45" />
                <circle cx="290" cy="120" r="4" fill="#dc7b45" />
                <circle cx="370" cy="80" r="4" fill="#dc7b45" />
                <circle cx="450" cy="90" r="4" fill="#dc7b45" />
                <circle cx="550" cy="40" r="6" fill="#70331d" />

                {/* X labels */}
                <text x="45" y="190" fontSize="10" fill="#999">Mon</text>
                <text x="125" y="190" fontSize="10" fill="#999">Tue</text>
                <text x="205" y="190" fontSize="10" fill="#999">Wed</text>
                <text x="285" y="190" fontSize="10" fill="#999">Thu</text>
                <text x="365" y="190" fontSize="10" fill="#999">Fri</text>
                <text x="445" y="190" fontSize="10" fill="#999">Sat</text>
                <text x="545" y="190" fontSize="10" fill="#999">Sun</text>
              </svg>
            </div>
          </div>

          {/* SVG Pie Chart Category popularity */}
          <div className="glass-panel p-6 bg-white dark:bg-slate-900 space-y-4">
            <h3 className="font-serif text-lg font-bold text-slate-800 dark:text-white">
              {isRtl ? 'الأصناف الأكثر طلباً' : 'Popular Categories'}
            </h3>
            
            <div className="flex flex-col items-center justify-center h-60 space-y-4">
              <svg className="w-40 h-40" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="15.915" fill="none" stroke="#f2ece3" strokeWidth="3" />
                {/* 45% Custom Cakes */}
                <circle cx="18" cy="18" r="15.915" fill="none" stroke="#dc7b45" strokeWidth="4" strokeDasharray="45 55" strokeDashoffset="25" />
                {/* 30% Cupcakes */}
                <circle cx="18" cy="18" r="15.915" fill="none" stroke="#e59d72" strokeWidth="4" strokeDasharray="30 70" strokeDashoffset="80" />
                {/* 25% Breads/Croissants */}
                <circle cx="18" cy="18" r="15.915" fill="none" stroke="#70331d" strokeWidth="4" strokeDasharray="25 75" strokeDashoffset="110" />
              </svg>
              
              <div className="flex gap-4 text-[10px] font-bold text-slate-500">
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-bakery-500" /> {isRtl ? 'كعك مخصص (45%)' : 'Cakes (45%)'}</span>
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-bakery-300" /> {isRtl ? 'كب كيك (30%)' : 'Cupcakes (30%)'}</span>
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-bakery-900" /> {isRtl ? 'كرواسون (25%)' : 'Pastry (25%)'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orders Table & Messages inbox */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3 animate-fade-in">
          {/* Orders list */}
          <div className="glass-panel p-6 bg-white dark:bg-slate-900 lg:col-span-2 space-y-4">
            <h3 className="font-serif text-lg font-bold text-slate-800 dark:text-white">
              {isRtl ? 'الطلبات النشطة الأخيرة' : 'Recent Active Orders'}
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-cream-50 text-slate-400 font-bold uppercase dark:bg-slate-950/40">
                  <tr>
                    <th className="p-3" style={{ textAlign: isRtl ? 'right' : 'left' }}>{isRtl ? 'رقم الطلب' : 'ID'}</th>
                    <th className="p-3" style={{ textAlign: isRtl ? 'right' : 'left' }}>{isRtl ? 'اسم العميل' : 'Client'}</th>
                    <th className="p-3" style={{ textAlign: isRtl ? 'right' : 'left' }}>{isRtl ? 'الصنف' : 'Item'}</th>
                    <th className="p-3" style={{ textAlign: isRtl ? 'right' : 'left' }}>{isRtl ? 'السعر' : 'Price'}</th>
                    <th className="p-3 text-center">{isRtl ? 'الحالة' : 'Status'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cream-100 dark:divide-slate-800">
                  {orders.map((ord) => (
                    <tr key={ord.id} className="hover:bg-cream-50/20 dark:hover:bg-slate-950/20">
                      <td className="p-3 font-semibold">{ord.id}</td>
                      <td className="p-3 font-medium">{ord.name}</td>
                      <td className="p-3 text-slate-500">{ord.item}</td>
                      <td className="p-3 font-serif font-bold">{ord.price}</td>
                      <td className="p-3 text-center">
                        <button
                          onClick={() => toggleOrderStatus(ord.id)}
                          className={`rounded-full px-3 py-1 font-bold text-[10px] transition cursor-pointer flex items-center gap-1 mx-auto ${
                            ord.status === 'Pending' ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-400' :
                            ord.status === 'Baking' ? 'bg-sky-100 text-sky-800 dark:bg-sky-950/40 dark:text-sky-400' :
                            ord.status === 'Out for Delivery' ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-400' :
                            'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400'
                          }`}
                        >
                          <RefreshCw className="h-3 w-3 animate-spin-slow shrink-0" />
                          <span>{ord.status}</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Messages list */}
          <div className="glass-panel p-6 bg-white dark:bg-slate-900 space-y-4">
            <h3 className="font-serif text-lg font-bold text-slate-800 dark:text-white">
              {isRtl ? 'صندوق الوارد (الرسائل)' : 'Messages Inbox'}
            </h3>

            {messages.length === 0 ? (
              <div className="text-center py-12 text-xs text-slate-400">
                🎉 {isRtl ? 'لا توجد رسائل جديدة غير مقروءة.' : 'Inbox is empty!'}
              </div>
            ) : (
              <div className="space-y-4 max-h-72 overflow-y-auto">
                {messages.map((msg) => (
                  <div key={msg.id} className="p-3.5 bg-cream-50/50 dark:bg-slate-950/40 rounded-2xl border border-cream-100 dark:border-slate-800 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300">{msg.name}</h4>
                        <span className="text-[10px] text-slate-400">{msg.email}</span>
                      </div>
                      <button 
                        onClick={() => deleteMessage(msg.id)}
                        className="text-slate-400 hover:text-rose-600 p-1 rounded-full hover:bg-cream-100 dark:hover:bg-slate-800"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-normal italic">
                      "{msg.msg}"
                    </p>
                    <span className="text-[9px] text-slate-400 block text-right">{msg.date}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
