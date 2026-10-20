import React from 'react';
import { BRAND } from '../data/brand';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent('Hello Amrutkalp team, I would like to inquire about Shilajit and Ayurvedic pain relief remedies.')}`;

  return (
    <div className="fixed bottom-5 right-5 z-30">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Consultation with Amrutkalp Vaidya"
        className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white pl-3.5 pr-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-emerald-500/50"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full border-2 border-emerald-600" />
        </div>
        <div className="text-left hidden sm:block">
          <span className="block text-[11px] font-bold leading-tight tracking-wide">
            Chat on WhatsApp
          </span>
          <span className="block text-[9px] text-emerald-100 font-medium leading-none">
            Direct Helpline: {BRAND.phone}
          </span>
        </div>
      </a>
    </div>
  );
};
