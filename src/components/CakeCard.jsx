import React from 'react'
import { Heart, ShoppingCart, Star } from 'lucide-react'

export default function CakeCard({ 
  image, 
  title, 
  description, 
  price, 
  rating = 4.5, 
  reviews = 120,
  tag = null,
  onOrderClick = () => {},
  variant = 'default'
}) {
  const [isLiked, setIsLiked] = React.useState(false)

  const cardClasses = {
    default: 'card-premium-blue',
    pink: 'card-premium-pink',
    premium: 'card-premium',
  }

  return (
    <div className={`${cardClasses[variant]} animate-fade-in hover-lift`}>
      {/* Image Container */}
      <div className="relative overflow-hidden h-64 md:h-72 bg-gradient-to-br from-primary-100 to-accent-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <button
            onClick={onOrderClick}
            className="w-full btn-primary py-2 text-sm flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Order Now
          </button>
        </div>

        {/* Tag Badge */}
        {tag && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
            {tag}
          </div>
        )}

        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 left-3 p-2.5 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all hover:scale-110"
        >
          <Heart
            className={`w-5 h-5 transition-all ${isLiked ? 'fill-accent-500 text-accent-500' : 'text-slate-400'}`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 space-y-3">
        <div>
          <h3 className="text-lg md:text-xl font-serif font-semibold text-slate-800 dark:text-white line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mt-1">
            {description}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-slate-300 dark:text-slate-600'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-slate-600 dark:text-slate-400">
            ({reviews} reviews)
          </span>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-2 border-t border-primary-100/40 dark:border-slate-700/40">
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Starting at</p>
            <p className="text-2xl font-serif font-bold gradient-text-mixed">
              {price}
            </p>
          </div>
          <button
            onClick={onOrderClick}
            className="p-2.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-soft-lg transition-all hover:scale-110"
            title="Add to cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
