import React, { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { BRAND } from '../data/brand';
import { 
  ShieldCheck, 
  ShoppingBag, 
  ArrowRight, 
  MessageCircle, 
  Star, 
  Truck, 
  Check, 
  AlertTriangle, 
  Clock, 
  RotateCcw,
  Sparkles,
  HelpCircle,
  FileText,
  ChevronLeft,
  Info
} from 'lucide-react';

interface ProductDetailPageProps {
  product: Product;
  onBackToShop: () => void;
  onSelectProduct: (slug: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onBackToShop
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'benefits' | 'ingredients' | 'howToUse' | 'purity' | 'safety' | 'transparency'>('benefits');

  const { addToCart, instantBuyNow } = useCart();

  const handleWhatsAppProductInquiry = () => {
    const text = `Hello Amrutkalp team, I have a question about ${product.name} (${product.weightOrQuantity}) priced at ₹${product.price}. Please provide more details on usage and delivery.`;
    window.open(`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Back link */}
      <div>
        <button
          onClick={onBackToShop}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to All Formulations</span>
        </button>
      </div>

      {/* Main PDP Grid (Contiguous purchase module per Section 2.A) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Image Gallery (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Active Visual Plate */}
          <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden border border-stone-200/90 flex items-center justify-center">
            {product.primaryImage ? (
              <div className="w-full h-full bg-[#f4f2ec] p-6 flex items-center justify-center">
                <img
                  src={product.primaryImage}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#131d18] via-[#0d1612] to-[#15231c] p-8 text-white flex flex-col justify-between border border-stone-800">
                <div className="flex items-center justify-between text-xs text-amber-200/90 border-b border-stone-800 pb-3">
                  <span className="font-mono tracking-widest uppercase text-[11px] text-stone-400">
                    DISPENSARY ARCHIVE · SURAT
                  </span>
                  <span className="font-serif italic text-amber-300">
                    Classical Shastriya Formula
                  </span>
                </div>

                <div className="text-center py-4 space-y-2">
                  <div className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-amber-100">
                    {product.sanskritName || product.name}
                  </div>
                  {product.campaignSlogan && (
                    <p className="text-xs sm:text-sm text-amber-200/90 italic font-serif max-w-md mx-auto">
                      "{product.campaignSlogan}"
                    </p>
                  )}
                  <div className="pt-3 flex flex-wrap justify-center gap-2 text-[11px] text-stone-400">
                    {product.ingredients.map((ing, i) => (
                      <span key={i} className="px-2.5 py-1 bg-stone-900/80 rounded border border-stone-800">
                        {ing.name.split('(')[0].trim()}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-stone-400 pt-3 border-t border-stone-800 font-mono">
                  <span>Zero Synthetics / Zero Steroids</span>
                  <span className="text-amber-400 font-semibold">{product.weightOrQuantity}</span>
                </div>
              </div>
            )}

            {/* Purity Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-stone-200 text-xs font-semibold text-stone-900 flex items-center gap-1.5 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#c99a45]" />
              <span>₹5.51L Purity Guarantee</span>
            </div>

            {product.discountPercent > 0 && (
              <div className="absolute top-4 right-4 bg-amber-100 text-amber-950 font-bold px-2.5 py-1 rounded text-xs border border-amber-300 tabular-nums">
                SAVE {product.discountPercent}%
              </div>
            )}
          </div>

          {/* Sourcing & Testing Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs">
              <span className="text-stone-500 block text-[11px]">Sourcing Altitude</span>
              <strong className="text-stone-900 font-semibold">16,000+ Ft Himalayas</strong>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs">
              <span className="text-stone-500 block text-[11px]">Classical Shodhana</span>
              <strong className="text-stone-900 font-semibold">Surya Tapi Sun-Dried</strong>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs">
              <span className="text-stone-500 block text-[11px]">Formulation Origin</span>
              <strong className="text-stone-900 font-semibold">Surat, Gujarat</strong>
            </div>
          </div>

        </div>

        {/* Right Column: Contiguous Purchase Module (5 cols) */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/90 shadow-xs space-y-6 lg:sticky lg:top-24">
          
          <div>
            {/* Category and weight metadata with typographic separator */}
            <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
              <span className="uppercase tracking-wider font-semibold text-amber-900">
                {product.categoryLabel}
              </span>
              <span aria-hidden="true">·</span>
              <span>{product.weightOrQuantity}</span>
              <span aria-hidden="true">·</span>
              <span>{product.servingCount}</span>
            </div>

            {/* Product Name */}
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950 mt-1 leading-tight">
              {product.name}
            </h1>

            {product.sanskritName && (
              <p className="text-xs text-stone-500 font-serif italic mt-0.5">
                {product.sanskritName}
              </p>
            )}

            {/* Reviews */}
            <div className="flex items-center gap-2 mt-3 text-xs">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-stone-900 tabular-nums">{product.rating}</span>
              <span className="text-stone-400">·</span>
              <span className="text-stone-600">{product.reviewCount} Verified Customer Inquiries</span>
            </div>
          </div>

          {/* Pricing Module */}
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-stone-950 tabular-nums">
                ₹{product.price}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-sm text-stone-400 line-through tabular-nums">
                  ₹{product.originalPrice}
                </span>
              )}
              <span className="text-xs text-emerald-800 font-semibold">
                (Save ₹{product.originalPrice - product.price})
              </span>
            </div>
            <p className="text-[11px] text-stone-500">
              Inclusive of all taxes · Free express delivery included on this item
            </p>
          </div>

          {/* Campaign Slogan Callout */}
          {product.campaignSlogan && (
            <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs text-amber-950">
              <strong className="block font-semibold text-amber-900">
                {product.campaignKicker || 'Ayurvedic Slogan'}
              </strong>
              <span className="text-stone-700 text-[11px]">
                {product.campaignSlogan}
              </span>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-stone-700">
              Select Quantity:
            </label>
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-stone-300 rounded-lg bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-stone-600 hover:bg-stone-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="px-4 text-xs font-bold text-stone-900 tabular-nums">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-stone-600 hover:bg-stone-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <span className="text-xs text-stone-500">
                Total: <strong className="text-stone-900 tabular-nums">₹{product.price * quantity}</strong>
              </span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="space-y-2.5 pt-2">
            <button
              onClick={() => instantBuyNow(product, quantity)}
              className="w-full py-3.5 px-4 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 text-sm shadow-md cursor-pointer"
            >
              <span>Instant Buy Now (₹{product.price * quantity})</span>
              <ArrowRight className="w-4 h-4 text-[#c99a45]" />
            </button>

            <button
              onClick={() => addToCart(product, quantity)}
              className="w-full py-3 px-4 bg-stone-100 hover:bg-stone-200 text-stone-900 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 text-xs cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-stone-600" />
              <span>Add to Remedy Bag</span>
            </button>

            <button
              onClick={handleWhatsAppProductInquiry}
              className="w-full py-2.5 px-4 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 text-xs cursor-pointer shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Quick Order via WhatsApp (+91 {BRAND.phone})</span>
            </button>
          </div>

          {/* Trust points list */}
          <div className="pt-3 border-t border-stone-200 space-y-2 text-xs text-stone-600">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#c99a45] shrink-0" />
              <span>Cash on Delivery (COD) supported across India</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#c99a45] shrink-0" />
              <span>₹5,51,000 public lab challenge protection</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-[#c99a45] shrink-0" />
              <span>7-Day transit damage & broken seal replacement</span>
            </div>
          </div>

        </div>

      </div>

      {/* Structured Educational Tabs (The Most Critical Requirement) */}
      <div className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs">
        
        {/* Tab navigation */}
        <div className="flex overflow-x-auto border-b border-stone-200 bg-stone-50/70 p-2 gap-1">
          <button
            onClick={() => setActiveTab('benefits')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'benefits'
                ? 'bg-white text-stone-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Verified Benefits & Uses
          </button>
          <button
            onClick={() => setActiveTab('ingredients')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'ingredients'
                ? 'bg-white text-stone-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Ingredients & Botanical Role
          </button>
          <button
            onClick={() => setActiveTab('howToUse')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'howToUse'
                ? 'bg-white text-stone-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            How to Use & Dosage
          </button>
          <button
            onClick={() => setActiveTab('purity')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'purity'
                ? 'bg-white text-stone-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Authenticity & Lab Tests
          </button>
          <button
            onClick={() => setActiveTab('safety')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'safety'
                ? 'bg-white text-stone-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Precautions & Safety
          </button>
          <button
            onClick={() => setActiveTab('transparency')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'transparency'
                ? 'bg-white text-stone-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Transparency Disclosure
          </button>
        </div>

        {/* Tab Content Panes */}
        <div className="p-6 sm:p-8">
          
          {/* 1. Benefits Tab */}
          {activeTab === 'benefits' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  What is {product.name}?
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-3">
                  Verified Traditional Actions & Modern Evidence
                </h4>
                <div className="space-y-2.5">
                  {product.verifiedBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 2. Ingredients Tab */}
          {activeTab === 'ingredients' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Botanical & Mineral Composition
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  100% active compounds. No chalk, talc, artificial coloring, or preservatives.
                </p>
              </div>

              <div className="divide-y divide-stone-200 border border-stone-200 rounded-xl overflow-hidden">
                {product.ingredients.map((ing, idx) => (
                  <div key={idx} className="p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <div>
                      <strong className="text-stone-900 block font-semibold text-sm">
                        {ing.name}
                      </strong>
                      {ing.botanicalName && (
                        <span className="italic text-stone-500 text-[11px]">
                          {ing.botanicalName}
                        </span>
                      )}
                      <p className="text-stone-600 text-xs mt-0.5">
                        {ing.role}
                      </p>
                    </div>
                    <div className="text-left sm:text-right shrink-0">
                      {ing.percentage && (
                        <span className="font-mono text-stone-900 font-bold block text-xs">
                          {ing.percentage}
                        </span>
                      )}
                      {ing.source && (
                        <span className="text-stone-400 text-[10px] block">
                          Source: {ing.source}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. How to Use Tab */}
          {activeTab === 'howToUse' && (
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Dosage, Timing & Classical Vehicle (Anupana)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs">
                  <span className="text-stone-500 block text-[11px]">Optimal Timing</span>
                  <strong className="text-stone-900 font-semibold">{product.howToUse.timing}</strong>
                </div>
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs">
                  <span className="text-stone-500 block text-[11px]">Measured Dosage</span>
                  <strong className="text-stone-900 font-semibold">{product.howToUse.dosage}</strong>
                </div>
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs">
                  <span className="text-stone-500 block text-[11px]">Recommended Vehicle</span>
                  <strong className="text-stone-900 font-semibold">{product.howToUse.liquidVehicle}</strong>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-3">
                  Step-by-Step Instructions
                </h4>
                <div className="space-y-2">
                  {product.howToUse.instructions.map((step, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-stone-200 text-xs sm:text-sm text-stone-700">
                      <span className="font-mono font-bold text-stone-900 text-xs shrink-0">
                        0{i + 1}.
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 4. Authenticity & Purity Tests Tab */}
          {activeTab === 'purity' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Verification Protocols & The ₹5.51 Lakh Reward
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  You can verify every physical jar at home using classical physical tests.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {product.authenticityTests.map((t, i) => (
                  <div key={i} className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                    <strong className="font-serif text-sm font-bold text-stone-900 block">
                      {t.title}
                    </strong>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {t.description}
                    </p>
                    <div className="pt-2 border-t border-stone-200 text-[11px] font-semibold text-emerald-800">
                      Standard: {t.result}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. Safety Tab */}
          {activeTab === 'safety' && (
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Important Precautions & Contraindications
              </h3>
              <p className="text-xs text-stone-600">
                Ayurvedic herbs are potent bioactive compounds. Please observe the following guidance:
              </p>

              <div className="space-y-2.5">
                {product.safetyPrecautions.map((precaution, i) => (
                  <div key={i} className="p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-xl flex items-start gap-3 text-xs sm:text-sm text-amber-950">
                    <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>{precaution}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-stone-100 rounded-xl border border-stone-200 text-xs text-stone-600">
                <strong className="text-stone-900 block font-semibold mb-1">
                  Medical Consultation Disclaimer
                </strong>
                Always consult an Ayurvedic physician or qualified medical doctor if you are pregnant, nursing, taking blood-thinning pharmaceuticals, or managing chronic kidney disease before starting new herbal regimens.
              </div>
            </div>
          )}

          {/* 6. Transparency Disclosure Tab (Addressing Requirement 5: What is known vs unavailable) */}
          {activeTab === 'transparency' && (
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Verified Facts vs Information Under Laboratory Documentation
              </h3>
              <p className="text-xs text-stone-600">
                In compliance with strict consumer transparency standards, we disclose exactly what is verified on file and what documentation is available on demand:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-emerald-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                    <Check className="w-4 h-4" />
                    <span>Verified Physical & Chemical Characteristics</span>
                  </div>
                  <ul className="text-xs text-stone-600 space-y-1.5 list-disc pl-4">
                    <li>High-altitude Himalayan origin ({product.transparencyStatus.originLocation})</li>
                    <li>Surya Tapi water purification method verified</li>
                    <li>Tested for absence of synthetic polymers & steroids</li>
                    <li>Direct dispensary packaging in Surat, Gujarat</li>
                  </ul>
                </div>

                <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-stone-800">
                    <Info className="w-4 h-4 text-[#c99a45]" />
                    <span>On-Demand Batch Documentation</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {product.transparencyStatus.pendingLaboratoryReports}
                  </p>
                  <a
                    href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(`Hello Amrutkalp, please share the batch COA lab report for ${product.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-700 font-semibold hover:underline"
                  >
                    <span>Request Batch COA PDF via WhatsApp →</span>
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
