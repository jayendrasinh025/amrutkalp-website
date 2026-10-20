import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { BRAND } from '../data/brand';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onSelectProduct?: (slug: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, setCurrentTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const { totalItems, setIsCartDrawerOpen } = useCart();

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fbfaf7]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      {/* Slim Top Announcement Banner */}
      {bannerVisible && (
        <div className="bg-[#111915] text-[#e6ded2] text-xs py-2 px-4 flex items-center justify-between border-b border-stone-800">
          <div className="mx-auto flex items-center gap-2 text-center text-[11px] sm:text-xs tracking-wide">
            <span className="inline-block text-[#c99a45] font-semibold">AUTHENTICITY GUARANTEE:</span>
            <span>{BRAND.guarantee.headlineEnglish}</span>
            <span className="hidden md:inline text-stone-400">·</span>
            <span className="hidden md:inline">Free Express Delivery on orders ₹699+</span>
          </div>
          <button
            onClick={() => setBannerVisible(false)}
            aria-label="Dismiss banner"
            className="text-stone-400 hover:text-white text-xs p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Top Bar Contract: 3 zones separated by gap-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4 md:gap-8">
        
        {/* Zone 1: Single Brand Wordmark Element */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group flex items-center gap-3 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-[#111915] text-amber-100 flex items-center justify-center font-serif text-lg font-bold border border-amber-500/30 shadow-xs">
              AK
            </div>
            <div>
              <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-stone-900 group-hover:text-amber-900 transition-colors whitespace-nowrap">
                AMRUTKALP
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-stone-500 font-medium">
                Pure Ayurvedic Herbals
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: 4-5 Clean Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
          <button
            onClick={() => handleNavClick('home')}
            className={`cursor-pointer whitespace-nowrap transition-colors hover:text-stone-950 py-1 border-b-2 ${
              currentTab === 'home' ? 'border-[#111915] text-stone-950 font-semibold' : 'border-transparent text-stone-600'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('shop')}
            className={`cursor-pointer whitespace-nowrap transition-colors hover:text-stone-950 py-1 border-b-2 ${
              currentTab === 'shop' ? 'border-[#111915] text-stone-950 font-semibold' : 'border-transparent text-stone-600'
            }`}
          >
            Shop Remedies
          </button>
          <button
            onClick={() => handleNavClick('authenticity')}
            className={`cursor-pointer whitespace-nowrap transition-colors hover:text-stone-950 py-1 border-b-2 flex items-center gap-1.5 ${
              currentTab === 'authenticity' ? 'border-[#111915] text-stone-950 font-semibold' : 'border-transparent text-stone-600'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-[#c99a45]" />
            <span>₹5.51L Challenge</span>
          </button>
          <button
            onClick={() => handleNavClick('ingredients')}
            className={`cursor-pointer whitespace-nowrap transition-colors hover:text-stone-950 py-1 border-b-2 ${
              currentTab === 'ingredients' ? 'border-[#111915] text-stone-950 font-semibold' : 'border-transparent text-stone-600'
            }`}
          >
            Ingredients & Science
          </button>
          <button
            onClick={() => handleNavClick('journal')}
            className={`cursor-pointer whitespace-nowrap transition-colors hover:text-stone-950 py-1 border-b-2 ${
              currentTab === 'journal' ? 'border-[#111915] text-stone-950 font-semibold' : 'border-transparent text-stone-600'
            }`}
          >
            Ayurvedic Journal
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`cursor-pointer whitespace-nowrap transition-colors hover:text-stone-950 py-1 border-b-2 ${
              currentTab === 'about' ? 'border-[#111915] text-stone-950 font-semibold' : 'border-transparent text-stone-600'
            }`}
          >
            Our Story
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`cursor-pointer whitespace-nowrap transition-colors hover:text-stone-950 py-1 border-b-2 ${
              currentTab === 'contact' ? 'border-[#111915] text-stone-950 font-semibold' : 'border-transparent text-stone-600'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action + Quick Cart */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent('Hello Amrutkalp, I would like to consult about Shilajit & Amrutvati.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-700" />
            <span>Ayurvedic Helpline</span>
          </a>

          <button
            onClick={() => setIsCartDrawerOpen(true)}
            aria-label="View Shopping Cart"
            className="relative p-2.5 rounded-lg bg-stone-900 text-stone-100 hover:bg-stone-800 transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <ShoppingBag className="w-5 h-5 text-amber-200" />
            <span className="hidden sm:inline text-xs font-semibold tracking-wide">Cart</span>
            {totalItems > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#c99a45] text-stone-950 text-[11px] font-bold flex items-center justify-center tabular-nums">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 text-stone-700 hover:text-stone-950 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fbfaf7] border-b border-stone-200 px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-3 text-base font-medium text-stone-800">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left py-2 border-b border-stone-100 hover:text-amber-900"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('shop')}
              className="text-left py-2 border-b border-stone-100 hover:text-amber-900 flex items-center justify-between"
            >
              <span>Shop All Remedies</span>
              <span className="text-xs text-amber-800 font-semibold">Featured</span>
            </button>
            <button
              onClick={() => handleNavClick('authenticity')}
              className="text-left py-2 border-b border-stone-100 hover:text-amber-900 flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#c99a45]" />
              <span>₹5,51,000 Purity Challenge</span>
            </button>
            <button
              onClick={() => handleNavClick('ingredients')}
              className="text-left py-2 border-b border-stone-100 hover:text-amber-900"
            >
              Ingredients & Lab Sourcing
            </button>
            <button
              onClick={() => handleNavClick('journal')}
              className="text-left py-2 border-b border-stone-100 hover:text-amber-900"
            >
              Wellness Journal & Guides
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left py-2 border-b border-stone-100 hover:text-amber-900"
            >
              About Amrutkalp (Surat Store)
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left py-2 border-b border-stone-100 hover:text-amber-900"
            >
              Contact & Store Location
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent('Hello Amrutkalp, I would like to order or consult.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 bg-[#111915] text-amber-100 font-semibold rounded-lg text-sm flex items-center justify-center gap-2 shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#c99a45]" />
              <span>Order via WhatsApp (+91 {BRAND.phone})</span>
            </a>
            <p className="text-[11px] text-stone-500 text-center">
              Amroli Cross Road, Surat, Gujarat · Mon-Sat 9:30 AM - 8:00 PM
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
