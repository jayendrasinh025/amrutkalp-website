import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { ShoppingBag, ArrowRight, Star, ShieldCheck, Sparkles, Leaf } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (slug: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct }) => {
  const { addToCart, instantBuyNow } = useCart();
  const hasGenuinePhoto = Boolean(product.primaryImage);

  return (
    <div className="group flex flex-col bg-white rounded-xl border border-stone-200/90 overflow-hidden hover:border-stone-400/80 hover:shadow-lg transition-all duration-200">
      
      {/* Product Visual Area */}
      <div 
        onClick={() => onSelectProduct(product.slug)}
        className="relative aspect-4/3 w-full overflow-hidden cursor-pointer flex items-center justify-center"
      >
        {hasGenuinePhoto ? (
          /* Authentic Shilajeet Studio Photograph */
          <div className="w-full h-full bg-[#f4f2ec] p-4 flex items-center justify-center">
            <img
              src={product.primaryImage}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ) : (
          /* Pure Typographic Editorial Formulation Plate (No AI boxes, no mock screenshots) */
          <div className="w-full h-full bg-gradient-to-br from-[#131d18] via-[#0d1612] to-[#16231d] p-6 text-white flex flex-col justify-between border-b border-stone-800 relative overflow-hidden group-hover:from-[#17251f] transition-colors">
            
            {/* Top Formulation Badge */}
            <div className="flex items-center justify-between text-[11px] text-amber-200/90">
              <span className="font-mono tracking-widest uppercase text-[10px] text-stone-400">
                FORMULATION {product.category === 'bundle' ? 'KIT-01' : 'TAB-30'}
              </span>
              <span className="font-serif italic text-amber-300">
                Classical Shastriya Vidhi
              </span>
            </div>

            {/* Center Sanskrit & Botanical Typography */}
            <div className="my-auto py-2 text-center space-y-1.5">
              {product.sanskritName && (
                <div className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-amber-100">
                  {product.sanskritName}
                </div>
              )}
              {product.campaignKicker && (
                <p className="text-xs text-amber-300/90 font-medium tracking-wide">
                  "{product.campaignKicker}"
                </p>
              )}
              <div className="text-[11px] text-stone-400 max-w-xs mx-auto line-clamp-1 pt-1 border-t border-stone-800/80">
                {product.ingredients.map(i => i.name.split(' ')[0]).slice(0, 3).join(' · ')}
              </div>
            </div>

            {/* Bottom Apothecary Seal */}
            <div className="flex items-center justify-between text-[10px] text-stone-400 pt-2 border-t border-stone-800">
              <span className="uppercase tracking-wider">Surat Dispensary</span>
              <span className="text-amber-400 font-semibold">{product.weightOrQuantity}</span>
            </div>
          </div>
        )}

        {/* Minimalist Authentic Tag */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 text-[11px] font-semibold text-stone-900 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded shadow-xs border border-stone-200/60">
          <ShieldCheck className="w-3.5 h-3.5 text-[#c99a45]" />
          <span>100% Authentic</span>
        </div>

        {product.discountPercent > 0 && (
          <div className="absolute top-3 right-3 text-[11px] font-bold text-amber-950 bg-amber-100/90 px-2 py-0.5 rounded border border-amber-300/60 tabular-nums">
            {product.discountPercent}% OFF
          </div>
        )}
      </div>

      {/* Card Content & Metadata */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div>
          {/* Metadata line with typographic separator */}
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <span className="uppercase tracking-wider text-[11px] font-semibold text-amber-900/80">
              {product.categoryLabel}
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>{product.weightOrQuantity}</span>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onSelectProduct(product.slug)}
            className="font-serif text-lg md:text-xl font-bold text-stone-900 group-hover:text-amber-900 transition-colors mt-1.5 cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Short description */}
          <p className="text-xs text-stone-600 line-clamp-2 mt-1.5 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Rating indicator */}
          <div className="flex items-center gap-1.5 mt-2.5 text-xs text-stone-600">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>
            <span className="font-semibold text-stone-900 tabular-nums">{product.rating}</span>
            <span className="text-stone-400">({product.reviewCount} verified customers)</span>
          </div>
        </div>

        {/* Pricing and Action Buttons */}
        <div className="pt-3 border-t border-stone-100 space-y-3">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-stone-950 tabular-nums">
                ₹{product.price}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs text-stone-400 line-through tabular-nums">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
            <span className="text-[11px] text-emerald-700 font-medium">
              In Stock
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => addToCart(product, 1)}
              className="w-full py-2.5 px-3 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-stone-600" />
              <span>Add to Bag</span>
            </button>
            <button
              onClick={() => instantBuyNow(product, 1)}
              className="w-full py-2.5 px-3 text-xs font-semibold text-amber-50 bg-[#111915] hover:bg-stone-800 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer shadow-xs"
            >
              <span>Buy Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
