import React, { useState } from 'react';
import { BRAND } from '../data/brand';
import { Truck, RotateCcw, ShieldAlert, Lock, CheckCircle2, Phone } from 'lucide-react';

export const PoliciesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'shipping' | 'returns' | 'medical' | 'privacy'>('shipping');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#b3832f] font-semibold">
          Customer Commitments & Terms
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950 tracking-tight">
          Policies & Transparency
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-xl mx-auto">
          Clear, honest business policies governing shipping, returns, Ayurvedic medical disclosures, and customer privacy.
        </p>
      </div>

      {/* Policy Tabs */}
      <div className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs">
        
        {/* Tab Bar */}
        <div className="flex overflow-x-auto border-b border-stone-200 bg-stone-50/70 p-2 gap-1">
          <button
            onClick={() => setActiveTab('shipping')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'shipping'
                ? 'bg-white text-stone-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Truck className="w-3.5 h-3.5 text-[#c99a45]" />
            <span>Shipping & COD</span>
          </button>

          <button
            onClick={() => setActiveTab('returns')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'returns'
                ? 'bg-white text-stone-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#c99a45]" />
            <span>Returns & Replacement</span>
          </button>

          <button
            onClick={() => setActiveTab('medical')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'medical'
                ? 'bg-white text-stone-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5 text-[#c99a45]" />
            <span>Medical Disclaimer</span>
          </button>

          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'privacy'
                ? 'bg-white text-stone-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Lock className="w-3.5 h-3.5 text-[#c99a45]" />
            <span>Privacy & Terms</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 sm:p-8 space-y-6 text-stone-700 text-xs sm:text-sm leading-relaxed">
          
          {/* 1. Shipping */}
          {activeTab === 'shipping' && (
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Shipping & Cash on Delivery Policy
              </h2>
              
              <div className="space-y-3">
                <p>
                  All Amrutkalp orders are inspected, batch-sealed, and dispatched directly from our registered dispensary at <strong>108, Biz Hub Shopping, Amroli, Surat, Gujarat 394107</strong>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
                  <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="block text-stone-900 text-sm font-semibold mb-1">
                      Dispatch Timelines
                    </strong>
                    <p className="text-stone-600 text-xs">
                      Orders placed before 2:00 PM are dispatched on the same business day. All other orders dispatch within 24 to 48 hours (excluding Sundays & national holidays).
                    </p>
                  </div>

                  <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="block text-stone-900 text-sm font-semibold mb-1">
                      Free Express Delivery Threshold
                    </strong>
                    <p className="text-stone-600 text-xs">
                      Orders of ₹{BRAND.shippingThreshold} and above enjoy 100% Free Express Shipping. A flat fee of ₹70 applies to orders below this amount.
                    </p>
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-stone-900 pt-2">
                  Estimated Delivery Times by Region
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-xs text-stone-600">
                  <li><strong>Gujarat & Western India:</strong> 1 to 3 business days</li>
                  <li><strong>Metros (Mumbai, Delhi NCR, Bengaluru, Hyderabad, Kolkata):</strong> 2 to 4 business days</li>
                  <li><strong>Rest of India:</strong> 3 to 6 business days</li>
                  <li><strong>Remote / Northeast / Island Regions:</strong> 5 to 8 business days via Speed Post</li>
                </ul>

                <h3 className="font-serif text-lg font-bold text-stone-900 pt-2">
                  Cash on Delivery (COD) Procedure
                </h3>
                <p className="text-xs text-stone-600">
                  We offer Cash on Delivery across most serviceable Indian pincodes. You may inspect the outer package for seal integrity before handing cash or scanning the courier agent's UPI QR code.
                </p>
              </div>
            </div>
          )}

          {/* 2. Returns */}
          {activeTab === 'returns' && (
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                7-Day Replacement Guarantee
              </h2>

              <p>
                Due to the ingestible nature of Ayurvedic herbal preparations and hygiene regulations, opened jars and pouches cannot be returned for resale. However, we offer an unconditional <strong>7-Day Transit Replacement Guarantee</strong>.
              </p>

              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 space-y-2">
                <strong className="font-semibold block">When are you eligible for an immediate free replacement?</strong>
                <ul className="list-disc pl-5 space-y-1 text-emerald-900">
                  <li>If the product arrives broken, cracked, or leaking in transit.</li>
                  <li>If the outer security seal or pouch barrier has been tampered with prior to delivery.</li>
                  <li>If you received an incorrect variant or incomplete quantity.</li>
                </ul>
              </div>

              <h3 className="font-serif text-lg font-bold text-stone-900 pt-2">
                How to Request a Replacement in 3 Simple Steps:
              </h3>
              <ol className="list-decimal pl-5 space-y-2 text-xs text-stone-600">
                <li>
                  Take a photo or brief 5-second video of the damaged box or broken seal within 7 days of receiving the package.
                </li>
                <li>
                  Send the photo along with your Order Number (e.g. AK-XXXXXX) directly to our official WhatsApp care desk at <strong>+91 {BRAND.phone}</strong>.
                </li>
                <li>
                  Our dispatch supervisor in Surat will immediately ship a brand-new replacement unit at zero cost to you with expedited tracking.
                </li>
              </ol>
            </div>
          )}

          {/* 3. Medical Disclaimer */}
          {activeTab === 'medical' && (
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Statutory Ayurvedic Medical Disclaimer
              </h2>

              <div className="p-4 bg-amber-50/80 border border-amber-300 rounded-xl space-y-2 text-xs text-amber-950">
                <strong className="block font-semibold">Important Health Notice:</strong>
                <p className="leading-relaxed">
                  The statements, articles, and product information published on this website have not been evaluated by the FDA or conventional pharmaceutical regulatory bodies. Amrutkalp products are classical Ayurvedic preparations formulated according to traditional Indian texts (Charaka Samhita, Sushruta Samhita, and the Ayurvedic Pharmacopoeia of India).
                </p>
              </div>

              <div className="space-y-3 text-xs text-stone-600 leading-relaxed">
                <p>
                  Amrutkalp formulations are intended to support natural vitality, metabolic equilibrium, and musculoskeletal joint mobility. They are <strong>not designed to diagnose, treat, cure, or prevent any severe medical disease</strong> in place of supervised medical therapeutics.
                </p>
                <p>
                  <strong>Specific Contraindications:</strong>
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Individuals with chronic renal insufficiency, severe gout (hyperuricemia), or iron-overload conditions (hemochromatosis) should not consume Shilajit without specialized medical supervision.</li>
                  <li>Pregnant and breastfeeding mothers should not take Amrutvati or Shilajit without explicit authorization from an Ayurvedic Vaidya or obstetrician.</li>
                  <li>If you are currently taking prescription blood thinners or cardiac medications, please maintain a 2-hour window between pharmaceutical doses and herbal remedies.</li>
                </ul>
              </div>
            </div>
          )}

          {/* 4. Privacy */}
          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Customer Privacy & Data Protection
              </h2>

              <p className="text-xs text-stone-600">
                At Amrutkalp, we respect your privacy. We collect only the information necessary to fulfill your order and provide direct Ayurvedic consultation.
              </p>

              <div className="space-y-2 text-xs text-stone-600">
                <strong className="text-stone-900 block font-semibold">Our Privacy Commitments:</strong>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>We never sell, rent, or lease your phone number, email, or physical address to third-party telemarketers or ad brokers.</li>
                  <li>Your phone number is utilized strictly to provide order dispatch SMS updates and direct WhatsApp consultation if requested by you.</li>
                  <li>All payment transactions and order records are handled through encrypted channels.</li>
                </ul>
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Direct Contact Banner */}
      <div className="p-6 bg-stone-100 rounded-2xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-lg font-bold text-stone-900">
            Have questions about our terms or a recent order?
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            Our Surat care desk is available Monday through Saturday.
          </p>
        </div>
        <a
          href={`tel:${BRAND.phone}`}
          className="py-2.5 px-4 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors text-xs flex items-center gap-1.5 whitespace-nowrap cursor-pointer shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 text-[#c99a45]" />
          <span>Call Quality Care (+91 {BRAND.phone})</span>
        </a>
      </div>

    </div>
  );
};
