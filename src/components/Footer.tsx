import React from 'react';
import { BRAND } from '../data/brand';
import { MapPin, Phone, Instagram, Facebook, ShieldCheck, Truck, RefreshCw, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
  onSelectProduct?: (slug: string) => void;
  onOpenSourceModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab, onSelectProduct, onOpenSourceModal }) => {
  const handleNav = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProduct = (slug: string) => {
    if (onSelectProduct) {
      onSelectProduct(slug);
    } else {
      setCurrentTab('shop');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111915] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges Strip (Authentic commitments) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 border-b border-stone-800/80">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0 text-[#c99a45]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-100">₹5.51 Lakh Purity Challenge</h4>
              <p className="text-xs text-stone-400 mt-1">
                Open testing challenge on 100% genuine Himalayan Shilajit resin.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0 text-[#c99a45]">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-100">India-Wide Fast Dispatch</h4>
              <p className="text-xs text-stone-400 mt-1">
                Shipped within 24–48 hours from Surat, Gujarat with real-time tracking.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0 text-[#c99a45]">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-100">Cash on Delivery Available</h4>
              <p className="text-xs text-stone-400 mt-1">
                Inspect package on arrival before cash or UPI payment at doorstep.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0 text-[#c99a45]">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-100">7-Day Transit Replacement</h4>
              <p className="text-xs text-stone-400 mt-1">
                Direct replacement guarantee for any transit breakage or seal tampering.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Company Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-stone-800/80">
          
          {/* Brand & Address Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-amber-900/60 text-amber-200 flex items-center justify-center font-serif font-bold text-sm border border-amber-600/40">
                AK
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                AMRUTKALP
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Classical Shastriya Ayurvedic purity sourced from high-altitude Himalayan ranges and formulated in accordance with authentic Charaka and Sushruta Samhita principles.
            </p>

            <div className="pt-2 space-y-2 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c99a45] shrink-0 mt-0.5" />
                <span>{BRAND.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c99a45] shrink-0" />
                <a href={`tel:${BRAND.phone}`} className="hover:text-white transition-colors">
                  {BRAND.phoneFormatted} (Call & WhatsApp)
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-white hover:border-amber-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-white hover:border-amber-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <span className="text-xs text-stone-400">
                {BRAND.social.instagramHandle}
              </span>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="space-y-3">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Formulations
            </h5>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => handleProduct('sanjivani-shilajit')}
                  className="hover:text-stone-200 transition-colors cursor-pointer text-left"
                >
                  Sanjivani Shilajit 20g
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleProduct('amrutvati-pain-relief')}
                  className="hover:text-stone-200 transition-colors cursor-pointer text-left"
                >
                  Amrutvati Pain Relief (30 Pcs)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleProduct('vitality-mobility-bundle')}
                  className="hover:text-stone-200 transition-colors cursor-pointer text-left"
                >
                  Complete Vitality Bundle
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('shop')}
                  className="hover:text-stone-200 transition-colors cursor-pointer text-left font-medium text-[#c99a45]"
                >
                  Browse Full Catalog →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Transparency & Science */}
          <div className="space-y-3">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Transparency
            </h5>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => handleNav('authenticity')}
                  className="hover:text-stone-200 transition-colors cursor-pointer text-left"
                >
                  ₹5.51 Lakh Challenge
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('ingredients')}
                  className="hover:text-stone-200 transition-colors cursor-pointer text-left"
                >
                  Fulvic Acid & Minerals
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('journal')}
                  className="hover:text-stone-200 transition-colors cursor-pointer text-left"
                >
                  Home Purity Tests
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('journal')}
                  className="hover:text-stone-200 transition-colors cursor-pointer text-left"
                >
                  Morning Back Pain Protocol
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Customer Care & Policies */}
          <div className="space-y-3">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Customer Care
            </h5>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-stone-200 transition-colors cursor-pointer text-left"
                >
                  Store Location & Timings
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('policies')}
                  className="hover:text-stone-200 transition-colors cursor-pointer text-left"
                >
                  Shipping & COD Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('policies')}
                  className="hover:text-stone-200 transition-colors cursor-pointer text-left"
                >
                  Return & Replacement Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('policies')}
                  className="hover:text-stone-200 transition-colors cursor-pointer text-left"
                >
                  Statutory Medical Disclaimer
                </button>
              </li>
              <li className="pt-2 border-t border-stone-800 space-y-2">
                {onOpenSourceModal && (
                  <button
                    onClick={onOpenSourceModal}
                    className="text-[#c99a45] hover:text-amber-300 font-semibold transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                  >
                    <span>Browse & Copy All Code Files</span>
                    <span>→</span>
                  </button>
                )}
                <a
                  href="/amrutkalp-website-source.zip"
                  download="amrutkalp-website-source.zip"
                  className="text-stone-400 hover:text-stone-200 text-[11px] transition-colors flex items-center gap-1.5"
                >
                  <span>Direct Zip Package</span>
                  <span>↓</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Statutory Ayurvedic Disclaimer */}
        <div className="py-6 border-b border-stone-800 text-[11px] text-stone-400 leading-relaxed">
          <p>
            <strong className="text-stone-300">Statutory Ayurvedic Notice:</strong> The formulations and traditional claims presented on this website are based on traditional Shastriya Ayurvedic literature, empirical observation, and customer feedback. These products are not intended to diagnose, treat, cure, or prevent any medical disease in place of prescription medicines. Individuals with chronic renal dysfunction, severe cardiovascular conditions, pregnant women, or nursing mothers should consult their physician or an Ayurvedic Vaidya before initiating any wellness regimen.
          </p>
        </div>

        {/* Bottom Copyright & Location */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} AMRUTKALP (Pure Ayurvedic Herbals). All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Surat, Gujarat, India</span>
            <span>·</span>
            <span>NABL Lab Tested Sourcing</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
