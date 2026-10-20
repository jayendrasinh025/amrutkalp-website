import React from 'react';
import { useCart } from '../context/CartContext';
import { BRAND } from '../data/brand';
import { X, Trash2, Plus, Minus, ArrowRight, MessageCircle, ShieldCheck, Truck } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartDrawerOpen,
    setIsCartDrawerOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    shippingFee,
    grandTotal,
    freeShippingThreshold,
    amountNeededForFreeShipping,
    setIsCheckoutModalOpen,
    generateWhatsAppOrderUrl
  } = useCart();

  if (!isCartDrawerOpen) return null;

  const handleCheckoutClick = () => {
    setIsCartDrawerOpen(false);
    setIsCheckoutModalOpen(true);
  };

  const handleWhatsAppOrder = () => {
    const url = generateWhatsAppOrderUrl();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dimmed backdrop */}
      <div
        onClick={() => setIsCartDrawerOpen(false)}
        className="absolute inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#fbfaf7] shadow-2xl flex flex-col border-l border-stone-200">
          
          {/* Drawer Header */}
          <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <h2 className="font-serif text-xl font-bold text-stone-900">
                Your Ayurvedic Remedy Bag
              </h2>
              <span className="text-xs text-stone-500 font-medium tabular-nums">
                ({cart.reduce((sum, i) => sum + i.quantity, 0)} items)
              </span>
            </div>
            <button
              onClick={() => setIsCartDrawerOpen(false)}
              className="p-1.5 text-stone-400 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress bar */}
          <div className="px-5 py-3 bg-stone-50 border-b border-stone-200">
            {amountNeededForFreeShipping > 0 ? (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-stone-700">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Truck className="w-4 h-4 text-[#c99a45]" />
                    Add ₹{amountNeededForFreeShipping} more for Free Express Delivery
                  </span>
                  <span className="font-bold tabular-nums">₹{subtotal} / ₹{freeShippingThreshold}</span>
                </div>
                <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#c99a45] h-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>You unlocked Free Express Shipping across India!</span>
              </div>
            )}
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mb-4">
                  <Truck className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-800">Your bag is empty</h3>
                <p className="text-xs text-stone-500 mt-1.5 max-w-xs">
                  Discover authentic Himalayan Shilajit resin and classical joint relief remedies.
                </p>
                <button
                  onClick={() => setIsCartDrawerOpen(false)}
                  className="mt-5 px-5 py-2.5 bg-[#111915] text-amber-100 text-xs font-semibold rounded-lg hover:bg-stone-800 transition-colors"
                >
                  Explore Remedies
                </button>
              </div>
            ) : (
              cart.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-3 bg-white rounded-xl border border-stone-200/80 shadow-2xs"
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 flex items-center justify-center p-1.5">
                    {product.primaryImage ? (
                      <img
                        src={product.primaryImage}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#111915] text-amber-200 rounded flex flex-col items-center justify-center text-center p-1 font-serif">
                        <span className="font-bold text-xs tracking-wider">AK</span>
                        <span className="text-[9px] text-stone-400 font-sans">{product.category === 'bundle' ? 'BUNDLE' : 'TABLETS'}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-bold text-stone-900 leading-snug">
                          {product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="text-stone-400 hover:text-red-600 p-1 transition-colors"
                          aria-label={`Remove ${product.name}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-[11px] text-stone-500 mt-0.5">
                        {product.weightOrQuantity}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-100">
                      <div className="flex items-center border border-stone-200 rounded-md bg-stone-50">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="p-1 hover:bg-stone-200 text-stone-600 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-semibold text-stone-800 tabular-nums">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="p-1 hover:bg-stone-200 text-stone-600 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-bold text-stone-900 tabular-nums">
                          ₹{product.price * quantity}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="block text-[10px] text-stone-400 line-through tabular-nums">
                            ₹{product.originalPrice * quantity}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer & Actions */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-stone-200 bg-white space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>Remedies Subtotal</span>
                  <span className="font-semibold text-stone-900 tabular-nums">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Express Insured Shipping</span>
                  <span className="font-semibold text-stone-900 tabular-nums">
                    {shippingFee === 0 ? <span className="text-emerald-700">FREE</span> : `₹${shippingFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-stone-950 pt-2 border-t border-stone-100">
                  <span>Total Amount</span>
                  <span className="text-base tabular-nums">₹{grandTotal}</span>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  onClick={handleCheckoutClick}
                  className="w-full py-3 px-4 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 text-sm shadow-xs cursor-pointer"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full py-2.5 px-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 text-xs cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order Directly on WhatsApp (+91 {BRAND.phone})</span>
                </button>
              </div>

              <div className="text-center pt-1">
                <span className="text-[11px] text-stone-500">
                  Cash on Delivery & Instant UPI Available at Doorstep
                </span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
