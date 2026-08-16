import React from 'react'
import { ArrowLeft, Search, AlertCircle } from 'lucide-react'

export default function NotFound({ dir, setCurrentPage }) {
  const isRtl = dir === 'rtl'

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 text-center animate-fade-in max-w-md mx-auto space-y-6">
      
      {/* Visual illustration icon */}
      <div className="relative">
        <span className="text-8xl select-none">🍪</span>
        <span className="absolute -bottom-2 -right-2 text-3xl animate-bounce">😢</span>
      </div>

      {/* 404 text */}
      <div className="space-y-2">
        <div className="font-serif text-6xl font-black text-bakery-600 dark:text-bakery-500">404</div>
        <h2 className="font-serif text-2xl font-bold text-slate-800 dark:text-white">
          {isRtl ? 'عذراً، تفتت هذه الصفحة!' : 'Oops! This Page Has Crumbled'}
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          {isRtl 
            ? 'يبدو أن الرابط الذي سلكته معطل أو أن الصفحة تم حذفها بالكامل من الفرن. هل ترغب بالبحث أو العودة؟' 
            : 'It looks like the link you followed is broken, or this page has been completely eaten by our bakers.'}
        </p>
      </div>

      {/* Search Input */}
      <form onSubmit={(e) => { e.preventDefault(); setCurrentPage('home2') }} className="relative w-full max-w-sm">
        <Search className={`absolute ${isRtl ? 'left-3' : 'right-3'} top-3 h-4.5 w-4.5 text-slate-400`} />
        <input
          type="text"
          placeholder={isRtl ? 'ابحث عن كعكة أو حلوى...' : 'Search for cakes or pastries...'}
          className="glass-input text-xs py-2 focus:ring-bakery-500/20"
          style={{ paddingLeft: isRtl ? '2.5rem' : '1rem', paddingRight: isRtl ? '1rem' : '2.5rem' }}
        />
      </form>

      {/* Back button */}
      <button
        onClick={() => { setCurrentPage('home2'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        className="btn-primary flex items-center justify-center gap-1.5 py-2 px-6 text-xs w-full sm:w-auto"
      >
        <ArrowLeft className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
        {isRtl ? 'العودة للصفحة الرئيسية' : 'Return to Sweet Home'}
      </button>

    </div>
  )
}
