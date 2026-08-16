import React, { useState } from 'react'
import CakeCard from '../components/CakeCard'

export default function Gallery({ dir, setCurrentPage }) {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Cakes' },
    { id: 'wedding', label: 'Wedding' },
    { id: 'birthday', label: 'Birthday' },
    { id: 'custom', label: 'Custom Design' },
    { id: 'cupcakes', label: 'Cupcakes' },
  ]

  const galleryItems = [
    {
      title: 'Midnight Velvet Cake',
      description: 'Rich, decadent chocolate cake with silky ganache and fresh berries',
      price: '$45.00',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80',
      tag: 'Popular',
      rating: 4.8,
      reviews: 324,
      category: 'birthday'
    },
    {
      title: 'Strawberry Dream',
      description: 'Light vanilla sponge with fresh strawberries and whipped cream',
      price: '$38.00',
      image: 'https://images.unsplash.com/photo-1586985289688-ca9cf49d3ad7?auto=format&fit=crop&w=500&q=80',
      tag: 'New',
      rating: 4.7,
      reviews: 156,
      category: 'birthday'
    },
    {
      title: 'Golden Caramel Drip',
      description: 'Buttery cake with salted caramel drip and candied pecans',
      price: '$52.00',
      image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?auto=format&fit=crop&w=500&q=80',
      tag: 'Signature',
      rating: 4.9,
      reviews: 412,
      category: 'custom'
    },
    {
      title: 'Grand Peony Wedding',
      description: '3-tier classic wedding cake with hand-crafted sugar flowers',
      price: '$180.00',
      image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=500&q=80',
      tag: 'Luxury',
      rating: 5.0,
      reviews: 89,
      category: 'wedding'
    },
    {
      title: 'Lavender Dream',
      description: 'Delicate lavender cake with cream cheese frosting and edible flowers',
      price: '$48.00',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80',
      rating: 4.6,
      reviews: 89,
      category: 'custom'
    },
    {
      title: 'Assorted Gourmet Cupcakes',
      description: 'Box of 6 handcrafted artisanal cupcakes in assorted flavors',
      price: '$24.00',
      image: 'https://images.unsplash.com/photo-1569864321398-35749f78eb7d?auto=format&fit=crop&w=500&q=80',
      rating: 4.9,
      reviews: 210,
      category: 'cupcakes'
    }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-premium">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=1600&q=80"
            alt="Cake gallery"
            className="w-full h-full object-cover"
          />
          <div className="gradient-overlay-blue absolute inset-0"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 animate-slide-up">
            Our Cake Gallery
          </h1>
          <p className="text-xl text-white/90 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            A showcase of our handcrafted sweet creations
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="section-py bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'btn-primary'
                    : 'bg-primary-50 text-slate-700 hover:bg-primary-100 dark:bg-slate-800 dark:text-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <CakeCard
                key={idx}
                {...item}
                onOrderClick={() => {
                  setCurrentPage('custom-order')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                variant={idx % 3 === 0 ? 'blue' : idx % 3 === 1 ? 'pink' : 'default'}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
