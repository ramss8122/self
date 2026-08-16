import React, { useState } from 'react'
import { ArrowRight, CheckCircle, Quote, Clock, MapPin, Truck, Star } from 'lucide-react'
import CakeCard from '../components/CakeCard'

export default function Home2({ dir, setCurrentPage, currentService, setCurrentService }) {
  const [email, setEmail] = useState('')
  const [showNewsletter, setShowNewsletter] = useState(false)

  const handleOrderClick = () => {
    setCurrentPage('custom-order')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCakesClick = () => {
    setCurrentPage('gallery')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Featured Cakes
  const featuredCakes = [
    {
      title: 'Midnight Velvet Cake',
      description: 'Rich, decadent chocolate cake with silky ganache and fresh berries',
      price: '$45.00',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80',
      tag: 'Popular',
      rating: 4.8,
      reviews: 324
    },
    {
      title: 'Strawberry Dream',
      description: 'Light vanilla sponge with fresh strawberries and whipped cream',
      price: '$38.00',
      image: 'https://images.unsplash.com/photo-1586985289688-ca9cf49d3ad7?auto=format&fit=crop&w=500&q=80',
      tag: 'New',
      rating: 4.7,
      reviews: 156
    },
    {
      title: 'Golden Caramel Drip',
      description: 'Buttery cake with salted caramel drip and candied pecans',
      price: '$52.00',
      image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?auto=format&fit=crop&w=500&q=80',
      tag: 'Signature',
      rating: 4.9,
      reviews: 412
    },
    {
      title: 'Lavender Dream',
      description: 'Delicate lavender cake with cream cheese frosting and edible flowers',
      price: '$48.00',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80',
      rating: 4.6,
      reviews: 89
    },
  ]

  // Why Choose Us
  const reasons = [
    {
      icon: '🎨',
      title: 'Artistic Designs',
      description: 'Custom creations tailored to your vision with expert bakers'
    },
    {
      icon: '🥛',
      title: 'Premium Ingredients',
      description: 'Only the finest, freshest ingredients from trusted suppliers'
    },
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'Same-day delivery available within our service area'
    },
    {
      icon: '👨‍🍳',
      title: 'Expert Bakers',
      description: 'Award-winning pastry chefs with 20+ years of experience'
    },
  ]

  // Testimonials
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Wedding Bride',
      content: 'Our wedding cake was absolutely stunning! The taste was even better than it looked. Every guest was raving about it!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Birthday Party Organizer',
      content: 'Best cake I\'ve ever tasted! The customization options are incredible, and the team was super helpful with design ideas.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
      rating: 5
    },
    {
      name: 'Emma Davis',
      role: 'Corporate Event Manager',
      content: 'Sweet Haven catered our company event with beautiful cupcake towers. Professional, delicious, and delivered on time!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
      rating: 5
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-premium">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1600&q=80"
            alt="Delicious cakes"
            className="w-full h-full object-cover"
          />
          <div className="gradient-overlay-blue absolute inset-0"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-slide-up">
              <div className="space-y-2">
                <p className="text-accent-500 font-semibold text-lg">Welcome to Sweet Haven</p>
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                  Handcrafted Cakes That Taste Like Dreams
                </h1>
              </div>
              
              <p className="text-lg text-white/90 leading-relaxed max-w-lg">
                Experience the perfect blend of taste, creativity, and tradition. Our master bakers create extraordinary cakes and pastries for every celebration.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={handleOrderClick}
                  className="btn-primary px-8 py-4 text-lg flex items-center justify-center gap-2 hover:shadow-soft-lg"
                >
                  Order Your Cake <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={handleCakesClick}
                  className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-all"
                >
                  View Our Cakes
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 text-white">
                <div>
                  <p className="text-2xl md:text-3xl font-bold">500+</p>
                  <p className="text-sm text-white/80">Happy Customers</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold">15+</p>
                  <p className="text-sm text-white/80">Years of Excellence</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold">4.9★</p>
                  <p className="text-sm text-white/80">Average Rating</p>
                </div>
              </div>
            </div>

            {/* Right Floating Card */}
            <div className="relative h-full min-h-[400px] md:min-h-[500px] flex items-center justify-center animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-400/20 to-primary-400/20 blur-3xl rounded-full"></div>
              <div className="relative glass-panel-pink p-8 max-w-sm w-full">
                <div className="text-6xl mb-4">🎂</div>
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-3">
                  Limited Time Offer
                </h3>
                <p className="text-slate-600 mb-4">
                  Order any custom cake and get 15% off your first purchase!
                </p>
                <div className="bg-gradient-to-r from-accent-500 to-primary-500 text-white px-4 py-3 rounded-xl font-bold text-center mb-4">
                  Code: SWEET15
                </div>
                <p className="text-xs text-slate-500">Valid for first-time orders only</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CAKES SECTION */}
      <section className="section-py bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <p className="text-primary-600 font-semibold text-lg mb-2">OUR SPECIALTIES</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 dark:text-white mb-4">
              Featured Cake Masterpieces
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Discover our most beloved creations, handcrafted with passion and premium ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 stagger-children">
            {featuredCakes.map((cake, idx) => (
              <CakeCard
                key={idx}
                {...cake}
                onOrderClick={handleOrderClick}
                variant={idx % 3 === 0 ? 'blue' : idx % 3 === 1 ? 'pink' : 'default'}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={handleCakesClick}
              className="btn-primary px-8 py-3 flex items-center justify-center gap-2 mx-auto"
            >
              View All Cakes <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="section-py bg-gradient-to-br from-primary-50 to-accent-50 dark:from-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 dark:text-white mb-4">
              Why Choose Sweet Haven?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              We're not just a bakery—we're creators of memories and moments of pure joy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {reasons.map((reason, idx) => (
              <div key={idx} className="card-premium-blue p-8 text-center animate-slide-up stagger-children" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="text-5xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-serif font-bold text-slate-800 dark:text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL OFFERS SECTION */}
      <section className="section-py bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 dark:text-white mb-12 text-center animate-fade-in">
            Special Offers This Month
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Offer 1 */}
            <div className="glass-panel-pink p-8 md:p-10 space-y-4 animate-slide-up">
              <div className="inline-block bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 py-2 rounded-full font-bold text-sm">
                🎂 Buy 2, Get 1 Free
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-800 dark:text-white">
                Cupcake Combo Deal
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Purchase any two cupcake boxes and receive a third box absolutely free. Perfect for parties!
              </p>
              <div className="pt-2">
                <p className="text-sm text-slate-500 mb-2">Valid till: December 31, 2024</p>
                <button className="btn-accent px-6 py-2 text-sm">
                  Claim Offer
                </button>
              </div>
            </div>

            {/* Offer 2 */}
            <div className="glass-panel-blue p-8 md:p-10 space-y-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="inline-block bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full font-bold text-sm">
                💝 15% Discount
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-800 dark:text-white">
                Group Orders
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Order 5 or more custom cakes and receive 15% off your entire order. Perfect for corporate events.
              </p>
              <div className="pt-2">
                <p className="text-sm text-slate-500 mb-2">Valid till: December 31, 2024</p>
                <button className="btn-primary px-6 py-2 text-sm">
                  Claim Offer
                </button>
              </div>
            </div>

            {/* Offer 3 */}
            <div className="glass-panel p-8 md:p-10 space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="inline-block bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 text-white px-4 py-2 rounded-full font-bold text-sm">
                🎁 Free Gift Box
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-800 dark:text-white">
                Wedding Package
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Book our wedding cake service and get a complimentary elegant gift box for cake cutting tools included.
              </p>
              <div className="pt-2">
                <p className="text-sm text-slate-500 mb-2">Valid till: December 31, 2024</p>
                <button className="btn-primary px-6 py-2 text-sm">
                  Claim Offer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="section-py bg-gradient-to-br from-primary-50 to-accent-50 dark:from-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <p className="text-primary-600 font-semibold text-lg mb-2">TESTIMONIALS</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 dark:text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Join thousands of satisfied customers who trust us with their special moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="glass-panel-pink p-8 md:p-10 space-y-4 animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex gap-3 items-start">
                  <Quote className="w-8 h-8 text-accent-300 flex-shrink-0 mt-1" />
                </div>
                
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Stars */}
                <div className="flex gap-1 pt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-accent-100/40 dark:border-slate-700/40">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="section-py bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-700 dark:to-accent-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>

        <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 animate-fade-in">
            Stay Updated with Sweet Haven
          </h2>
          <p className="text-lg text-white/90 mb-8 animate-slide-up">
            Subscribe to our newsletter and get exclusive offers, baking tips, and early access to new creations!
          </p>

          <form onSubmit={(e) => { e.preventDefault(); setShowNewsletter(true); setEmail(''); setTimeout(() => setShowNewsletter(false), 3000); }} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto animate-scale-in">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 rounded-full text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-white text-primary-600 font-bold hover:bg-primary-50 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          {showNewsletter && (
            <p className="text-white mt-4 animate-fade-in">✓ Thank you for subscribing!</p>
          )}
        </div>
      </section>
    </div>
  )
}
