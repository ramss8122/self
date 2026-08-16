import React, { useState } from 'react'
import { Eye, EyeOff, User, Lock, Mail, Check } from 'lucide-react'

export default function Auth({ dir }) {
  const isRtl = dir === 'rtl'
  const [activeTab, setActiveTab] = useState('login')
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [agree, setAgree] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
    }, 5000)
  }

  // Password strength check
  const hasMinLen = password.length >= 8
  const hasNum = /[0-9]/.test(password)
  const hasUpper = /[A-Z]/.test(password)

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-md w-full glass-panel p-8 bg-white dark:bg-slate-900 border border-cream-200 dark:border-slate-800 shadow-2xl space-y-6">
        
        {/* Toggle tabs */}
        <div className="flex border-b border-cream-100 dark:border-slate-800 pb-2">
          <button
            onClick={() => { setActiveTab('login'); setSuccess(false); }}
            className={`w-1/2 text-center pb-2.5 text-sm font-bold transition border-b-2 ${
              activeTab === 'login'
                ? 'border-bakery-600 text-bakery-600 dark:border-bakery-500 dark:text-bakery-500'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            {isRtl ? 'تسجيل الدخول' : 'Sign In'}
          </button>
          <button
            onClick={() => { setActiveTab('register'); setSuccess(false); }}
            className={`w-1/2 text-center pb-2.5 text-sm font-bold transition border-b-2 ${
              activeTab === 'register'
                ? 'border-bakery-600 text-bakery-600 dark:border-bakery-500 dark:text-bakery-500'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            {isRtl ? 'حساب جديد' : 'Register'}
          </button>
        </div>

        {/* Headline */}
        <div className="text-center space-y-1">
          <h2 className="font-serif text-2xl font-bold text-slate-800 dark:text-white">
            {activeTab === 'login'
              ? (isRtl ? 'مرحباً بعودتكم!' : 'Welcome Back!')
              : (isRtl ? 'انضم إلى عائلة بهجة الحلوى' : 'Join Sweet Delight Family')}
          </h2>
          <p className="text-xs text-slate-400">
            {activeTab === 'login'
              ? (isRtl ? 'سجل دخولك لتتبع طلبات الكعك المخصصة' : 'Sign in to track your custom cake orders')
              : (isRtl ? 'افتح حساباً لكسب نقاط الهدايا والحلويات المجانية' : 'Open account to earn dessert points & rewards')}
          </p>
        </div>

        {/* Success alert */}
        {success && (
          <div className="rounded-2xl bg-emerald-50 p-4 text-center text-xs font-semibold text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-400 border border-emerald-200">
            🎉 {activeTab === 'login'
              ? (isRtl ? 'تم تسجيل الدخول بنجاح!' : 'Logged in successfully!')
              : (isRtl ? 'تم إنشاء الحساب بنجاح! يرجى مراجعة بريدك الإلكتروني.' : 'Account created successfully! Please check email.')}
          </div>
        )}

        {/* Auth form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Register-only fields */}
          {activeTab === 'register' && (
            <div>
              <label htmlFor="fullname" className="mb-1.5 block text-xs font-semibold text-slate-500">
                {isRtl ? 'الاسم الكامل' : 'Full Name'}
              </label>
              <div className="relative">
                <User className={`absolute ${isRtl ? 'right-3.5' : 'left-3.5'} top-3 h-4.5 w-4.5 text-slate-400`} />
                <input
                  id="fullname"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="glass-input text-xs"
                  style={{ paddingLeft: isRtl ? '1rem' : '2.5rem', paddingRight: isRtl ? '2.5rem' : '1rem' }}
                />
              </div>
            </div>
          )}

          {/* Email input */}
          <div>
            <label htmlFor="auth-email" className="mb-1.5 block text-xs font-semibold text-slate-500">
              {isRtl ? 'البريد الإلكتروني' : 'Email Address'}
            </label>
            <div className="relative">
              <Mail className={`absolute ${isRtl ? 'right-3.5' : 'left-3.5'} top-3 h-4.5 w-4.5 text-slate-400`} />
              <input
                id="auth-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="glass-input text-xs"
                style={{ paddingLeft: isRtl ? '1rem' : '2.5rem', paddingRight: isRtl ? '2.5rem' : '1rem' }}
              />
            </div>
          </div>

          {/* Password input */}
          <div>
            <label htmlFor="auth-pass" className="mb-1.5 block text-xs font-semibold text-slate-500">
              {isRtl ? 'كلمة المرور' : 'Password'}
            </label>
            <div className="relative">
              <Lock className={`absolute ${isRtl ? 'right-3.5' : 'left-3.5'} top-3 h-4.5 w-4.5 text-slate-400`} />
              <input
                id="auth-pass"
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="glass-input text-xs"
                style={{ paddingLeft: isRtl ? '2.5rem' : '2.5rem', paddingRight: isRtl ? '2.5rem' : '2.5rem' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute ${isRtl ? 'left-3.5' : 'right-3.5'} top-3 text-slate-400 hover:text-bakery-600`}
              >
                {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
              </button>
            </div>
          </div>

          {/* Password strength details for register */}
          {activeTab === 'register' && password.length > 0 && (
            <div className="rounded-xl bg-cream-50/50 dark:bg-slate-950/40 p-3.5 border border-cream-100 dark:border-slate-800 space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                {isRtl ? 'مؤشر أمان كلمة المرور' : 'Password strength checklist'}
              </span>
              <div className="space-y-1 text-[10px]">
                <div className={`flex items-center gap-1.5 ${hasMinLen ? 'text-emerald-600 font-semibold' : 'text-slate-400'}`}>
                  <Check className="h-3 w-3 shrink-0" />
                  <span>{isRtl ? '8 خانات على الأقل' : 'At least 8 characters'}</span>
                </div>
                <div className={`flex items-center gap-1.5 ${hasNum ? 'text-emerald-600 font-semibold' : 'text-slate-400'}`}>
                  <Check className="h-3 w-3 shrink-0" />
                  <span>{isRtl ? 'رقم واحد على الأقل (0-9)' : 'At least one number (0-9)'}</span>
                </div>
                <div className={`flex items-center gap-1.5 ${hasUpper ? 'text-emerald-600 font-semibold' : 'text-slate-400'}`}>
                  <Check className="h-3 w-3 shrink-0" />
                  <span>{isRtl ? 'حرف كبير واحد على الأقل (A-Z)' : 'At least one uppercase letter (A-Z)'}</span>
                </div>
              </div>
            </div>
          )}

          {/* Agreement Checkbox / Reset Link */}
          {activeTab === 'login' ? (
            <div className="flex justify-between items-center text-[10px] text-slate-400">
              <div className="flex items-center gap-1.5 cursor-pointer">
                <input id="remember" type="checkbox" className="rounded text-bakery-600 focus:ring-bakery-500 cursor-pointer" />
                <label htmlFor="remember" className="cursor-pointer">{isRtl ? 'تذكرني على هذا الجهاز' : 'Remember me'}</label>
              </div>
              <a href="#reset" className="hover:text-bakery-600 font-semibold">{isRtl ? 'نسيت كلمة المرور؟' : 'Forgot Password?'}</a>
            </div>
          ) : (
            <div className="flex items-start gap-2 text-[10px] text-slate-400">
              <input
                id="agree"
                type="checkbox"
                required
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mt-0.5 rounded text-bakery-600 focus:ring-bakery-500 cursor-pointer"
              />
              <label htmlFor="agree" className="cursor-pointer leading-normal">
                {isRtl 
                  ? 'أوافق على شروط الخدمة وسياسة الخصوصية الخاصة بالمخبز' 
                  : 'I agree to the Terms of Service & Privacy Policy of Sweet Delight'}
              </label>
            </div>
          )}

          <button
            type="submit"
            className="w-full btn-primary py-2.5 text-xs"
          >
            {activeTab === 'login'
              ? (isRtl ? 'دخول الحساب' : 'Sign In')
              : (isRtl ? 'تسجيل الحساب الجديد' : 'Register Now')}
          </button>
        </form>
      </div>
    </div>
  )
}
