import React from 'react';
import { BRAND } from '../data/brand';
import { MapPin, Phone, Instagram, ShieldCheck, Heart, Users, Sparkles, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onGoToShop: () => void;
  onGoToContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onGoToShop, onGoToContact }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#b3832f] font-semibold">
          Founded in Surat, Gujarat
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-950 tracking-tight leading-tight">
          The Amrutkalp Heritage
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
          We founded Amrutkalp to rescue classical Ayurveda from mass-market adulteration. Real healing requires real herbs, unhurried time, and uncompromising honesty.
        </p>
      </div>

      {/* Origin Story Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-10 rounded-2xl border border-stone-200/90 shadow-2xs">
        
        {/* Left text (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          <span className="text-xs uppercase tracking-widest text-[#b3832f] font-semibold">
            Our Mission & Philosophy
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
            Restoring Faith in Shastriya Ayurveda
          </h2>

          <div className="space-y-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <p>
              In recent years, the wellness industry has turned ancient Ayurvedic wisdom into an assembly line of synthetic capsules and quick-fix pain suppressants. Shilajit, revered in Charaka Samhita as the master restorative resin (Rasayana), was reduced to black coal-tar pastes mixed with sugar and chemical additives.
            </p>
            <p>
              At Amrutkalp, we established our dispensary at <strong>Biz Hub Shopping, Amroli, Surat</strong> with a singular mandate: supply people with the exact, uncompromised formulations described in ancient texts.
            </p>
            <p>
              When we extract Himalayan Shilajit, we harvest only from pristine altitudes above 16,000 feet where no human contamination exists. When we craft Amrutvati for morning back and joint pain, we use genuine wild Shallaki resin and Shuddha Guggulu, rather than masking joint friction with synthetic steroids.
            </p>
          </div>

          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-800 space-y-1">
            <strong className="text-stone-950 font-semibold block">
              The Surat Dispensary Pledge:
            </strong>
            <p className="text-stone-600 leading-relaxed text-[11px]">
              Every customer can walk into our Amroli center, inspect physical batch containers, witness solubility tests firsthand, and consult directly with our staff.
            </p>
          </div>
        </div>

        {/* Right Typographic Heritage Plate (5 cols) */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-stone-800 bg-[#111915] text-stone-100 p-7 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-stone-800 pb-2 text-[10px] font-mono">
              <span className="text-amber-300">ESTABLISHED IN SURAT</span>
              <span className="text-stone-400">GUJARAT, INDIA</span>
            </div>

            <div className="space-y-1">
              <div className="font-serif text-2xl font-bold text-white">AMRUTKALP</div>
              <div className="text-xs text-amber-200/90 font-serif italic">Pure Ayurvedic Herbals</div>
            </div>

            <div className="p-3.5 bg-stone-900 rounded-xl border border-stone-800 space-y-2 text-xs">
              <div className="text-[10px] uppercase font-mono text-stone-400">Dispensary Premises:</div>
              <p className="text-stone-300 text-xs leading-relaxed">
                108, Biz Hub Shopping, near 99 Shopping, Amroli Cross Road, Amroli, Surat, Gujarat 394107
              </p>
              <div className="text-[11px] text-amber-300 pt-1 border-t border-stone-800/80">
                Direct Consultation: +91 81413 23395
              </div>
            </div>

            <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400 font-mono">
              <span>Ayurvedic Tradition</span>
              <span className="text-emerald-400">100% Shastriya</span>
            </div>
          </div>
        </div>

      </div>

      {/* 3 Core Commitments */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-2xl border border-stone-200/90 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#b3832f] flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg font-bold text-stone-900">
            Zero Synthetic Adulteration
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            We reject synthetic thickeners, preservatives, artificial sweeteners, and pharmaceutical analgesics. What is on our label is 100% active botanical or mineral resin.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-stone-200/90 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#b3832f] flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg font-bold text-stone-900">
            Human-to-Human Transparency
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            No robotic chatbots or outsourced phone trees. When you message or call +91 {BRAND.phone}, you speak directly with individuals who know our batches and formulation history.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-stone-200/90 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#b3832f] flex items-center justify-center">
            <Heart className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg font-bold text-stone-900">
            Classical Surya Tapi Processing
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            We dry our purified resin under natural Gujarati sunlight over 60 days rather than flash-boiling in kettles, protecting delicate active enzymes and Fulvic acid.
          </p>
        </div>
      </div>

      {/* Location and Store Info Box */}
      <div className="p-8 bg-[#111915] text-stone-100 rounded-2xl border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-amber-300 text-xs font-semibold">
            <MapPin className="w-4 h-4 text-[#c99a45]" />
            <span>Surat Showroom & Consultation Center</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-white">
            {BRAND.address.shop}, Amroli, Surat
          </h3>
          <p className="text-xs text-stone-400 max-w-md">
            {BRAND.address.landmark}, Surat, Gujarat 394107 · Open Mon–Sat 9:30 AM to 8:00 PM
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <button
            onClick={onGoToContact}
            className="py-3 px-5 bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold rounded-lg transition-colors text-xs cursor-pointer border border-stone-700"
          >
            Store Hours & Map
          </button>
          <button
            onClick={onGoToShop}
            className="py-3 px-5 bg-[#c99a45] text-stone-950 font-semibold rounded-lg hover:bg-amber-400 transition-colors text-xs cursor-pointer shadow-xs"
          >
            Explore Remedies
          </button>
        </div>
      </div>

    </div>
  );
};
