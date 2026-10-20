import React from 'react';
import { BRAND } from '../data/brand';
import { ShieldCheck, Flame, Droplets, Thermometer, Award, AlertCircle, Phone, ArrowRight } from 'lucide-react';

interface AuthenticityPageProps {
  onGoToShop: () => void;
}

export const AuthenticityPage: React.FC<AuthenticityPageProps> = ({ onGoToShop }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-950 text-xs font-semibold">
          <ShieldCheck className="w-4 h-4 text-[#c99a45]" />
          <span>The Amrutkalp Purity Guarantee</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-950 tracking-tight leading-tight">
          {BRAND.guarantee.headlineGujarati}
        </h1>

        <p className="font-serif text-xl sm:text-2xl text-stone-800 font-medium">
          {BRAND.guarantee.headlineEnglish}
        </p>

        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
          We stake our company's reputation, our Surat dispensary, and ₹5,51,000 in cold cash on the uncompromised purity of our Grade A+ Himalayan Shilajit resin.
        </p>
      </div>

      {/* Campaign Poster & Manifesto Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#111915] text-stone-100 rounded-2xl p-6 sm:p-10 border border-stone-800 shadow-xl">
        
        {/* Left Manifesto (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#c99a45] font-semibold">
            Why We Created This Challenge
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            The Dark Truth Behind Cheap Shilajit in India
          </h2>

          <div className="space-y-3 text-xs sm:text-sm text-stone-300 leading-relaxed">
            <p>
              Genuine high-altitude Himalayan Shilajit takes centuries of geological pressure and alpine botanical fermentation to produce. It cannot be grown in a greenhouse or synthesized in a vat.
            </p>
            <p>
              Because raw Shilajit is scarce, more than 80% of what is sold online consists of industrial sugar syrup, charcoal powder, asphalt bitumen pitch, and cheap gums. Worse, several disreputable brands spike their pastes with synthetic chemical stimulants to mimic an immediate "kick."
            </p>
            <p className="text-amber-200">
              Amrutkalp was founded in Surat, Gujarat to dismantle this deception. We harvest raw pitch exclusively above 16,000 feet, purify it strictly with pure mountain water and sun-drying (Surya Tapi), and test every batch for heavy metals and pesticide residues.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <button
              onClick={onGoToShop}
              className="py-3 px-5 bg-[#c99a45] text-stone-950 font-semibold rounded-lg hover:bg-amber-400 transition-colors text-xs cursor-pointer shadow-xs"
            >
              Order 100% Tested Shilajit (₹799)
            </button>
            <a
              href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent('Hello Amrutkalp, I want to verify batch lab reports for Shilajit.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-stone-300 hover:text-white flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Contact Quality Desk: {BRAND.phone}</span>
            </a>
          </div>
        </div>

        {/* Right Typographic Warrant Certificate (5 cols) */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-amber-500/40 bg-gradient-to-b from-[#18261f] via-[#101b15] to-[#0c1410] p-7 text-stone-100 shadow-2xl space-y-4">
            
            <div className="text-center pb-3 border-b border-stone-800 space-y-1">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#c99a45]">
                LEGAL PURITY UNDERTAKING
              </span>
              <div className="font-serif text-2xl font-bold text-amber-200">
                ₹5,51,000 BOUNTY
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-600/30 text-center space-y-1.5">
              <div className="font-serif text-base font-bold text-amber-100 leading-snug">
                {BRAND.guarantee.headlineGujarati}
              </div>
              <div className="text-[11px] text-stone-400">
                {BRAND.guarantee.headlineHindi}
              </div>
            </div>

            <div className="space-y-2 text-[11px] text-stone-300">
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span>Testing Lab Recognition</span>
                <strong className="text-emerald-400">Any NABL Accredited Lab</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span>Acceptable Adulterants</span>
                <strong className="text-emerald-400 font-mono">0.00% (Strict Zero)</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span>Batch Traceability</span>
                <strong className="text-amber-300 font-mono">Laser Batch Seal</strong>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-800 text-[10px] text-stone-400 font-mono flex justify-between items-center">
              <span>Amrutkalp QA Division</span>
              <span className="text-amber-400">Surat, Gujarat</span>
            </div>

          </div>
        </div>

      </div>

      {/* The 4 Home Testing Methods */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#b3832f] font-semibold">
            Laboratory at Home
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950 mt-1">
            4 Physical Tests You Can Perform Yourself
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Test any jar of Amrutkalp in your kitchen before consuming a single drop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Test 1 */}
          <div className="p-6 bg-white rounded-2xl border border-stone-200/90 space-y-3 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#b3832f] flex items-center justify-center shrink-0">
                <Droplets className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400">Test 01</span>
                <h3 className="font-serif text-lg font-bold text-stone-900">The Water Solubility & Amber Ribbon Test</h3>
              </div>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Place a pea-sized drop into a clear glass of warm water. Pure Shilajit will not float or sink as a gummy lump. It immediately disperses in descending golden-amber ribbons, dissolving completely in 2 minutes without leaving grit, oily scum, or black residue.
            </p>
            <div className="p-3 bg-stone-50 rounded-lg text-[11px] text-stone-700">
              <strong className="text-emerald-800">Pass Standard:</strong> Clear, deep mahogany or amber solution with smooth earthy aroma.
            </div>
          </div>

          {/* Test 2 */}
          <div className="p-6 bg-white rounded-2xl border border-stone-200/90 space-y-3 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#b3832f] flex items-center justify-center shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400">Test 02</span>
                <h3 className="font-serif text-lg font-bold text-stone-900">The Flame & Ash Test</h3>
              </div>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Hold a flame beneath a metal spatula with a small dab of resin. Genuine Shilajit will bubble, expand like volcanic lava, and calcify into pale ash. It will NEVER catch fire or emit black petrochemical fumes.
            </p>
            <div className="p-3 bg-stone-50 rounded-lg text-[11px] text-stone-700">
              <strong className="text-emerald-800">Pass Standard:</strong> Non-combustible mineral calcification without chemical smoke.
            </div>
          </div>

          {/* Test 3 */}
          <div className="p-6 bg-white rounded-2xl border border-stone-200/90 space-y-3 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#b3832f] flex items-center justify-center shrink-0">
                <Thermometer className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400">Test 03</span>
                <h3 className="font-serif text-lg font-bold text-stone-900">Thermal Flexibility (Rheology)</h3>
              </div>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Place the jar in your refrigerator for 2 hours. Authentic Shilajit turns brittle and glass-like, snapping crisply. When held between your warm fingers, it immediately softens into a pliable, sticky, resinous texture.
            </p>
            <div className="p-3 bg-stone-50 rounded-lg text-[11px] text-stone-700">
              <strong className="text-emerald-800">Pass Standard:</strong> Dynamic temperature-sensitive rheology, proving absence of synthetic plasticizers.
            </div>
          </div>

          {/* Test 4 */}
          <div className="p-6 bg-white rounded-2xl border border-stone-200/90 space-y-3 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#b3832f] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400">Test 04</span>
                <h3 className="font-serif text-lg font-bold text-stone-900">Alcohol Insoluble Screen</h3>
              </div>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Drop resin into pure rubbing alcohol (surgical spirit or 99% isopropyl). Pure Shilajit will NOT dissolve and will remain intact at the bottom. Adulterated pastes formulated with artificial dyes or fillers dissolve readily in alcohol.
            </p>
            <div className="p-3 bg-stone-50 rounded-lg text-[11px] text-stone-700">
              <strong className="text-emerald-800">Pass Standard:</strong> Intact insoluble resin precipitate, proving absence of synthetic organic dyes.
            </div>
          </div>

        </div>
      </div>

      {/* Official Challenge Claim Terms */}
      <div className="p-6 sm:p-8 bg-stone-100 rounded-2xl border border-stone-300 space-y-4">
        <h3 className="font-serif text-xl font-bold text-stone-900">
          Official Terms & Procedure for the ₹5,51,000 Purity Reward
        </h3>
        
        <ol className="list-decimal pl-5 text-xs text-stone-700 space-y-2 leading-relaxed">
          <li>
            <strong>Procurement:</strong> The product sample must be an unopened, factory-sealed container of Amrutkalp Sanjivani Shilajit with tamper-evident seal intact.
          </li>
          <li>
            <strong>Testing Facility:</strong> Testing must be performed at an Indian government-recognized NABL-accredited chemical testing laboratory with certified Gas Chromatography (GC-MS) or Inductively Coupled Plasma Mass Spectrometry (ICP-MS) capabilities.
          </li>
          <li>
            <strong>Parameters for Payout:</strong> If the laboratory report demonstrates that the resin contains synthetic polymer thickeners, added artificial sugars, heavy metal concentrations exceeding Indian Pharmacopoeia limits (Lead &gt; 10 ppm, Arsenic &gt; 3 ppm, Mercury &gt; 1 ppm), or adulterant coal-tar derivatives, Amrutkalp will honor the ₹5,51,000 cash reward.
          </li>
          <li>
            <strong>Claim Submission:</strong> Submit the original testing report, invoice, and retained seal directly to Amrutkalp Head Dispensary, 108 Biz Hub Shopping, Amroli, Surat, Gujarat 394107.
          </li>
        </ol>
      </div>

    </div>
  );
};
