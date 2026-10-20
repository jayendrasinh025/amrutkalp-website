import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { BRAND } from '../data/brand';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Check, 
  Phone, 
  ChevronDown, 
  ChevronUp, 
  MapPin, 
  Award,
  Zap,
  Activity,
  Droplets,
  Flame,
  Info
} from 'lucide-react';

interface HomePageProps {
  setCurrentTab: (tab: string) => void;
  onSelectProduct: (slug: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentTab, onSelectProduct }) => {
  const { instantBuyNow } = useCart();
  const featuredProducts = PRODUCTS;
  const sanjivaniProduct = PRODUCTS[0];
  const amrutvatiProduct = PRODUCTS[1];

  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is the ₹5,51,000 Authenticity Challenge?',
      a: 'We publicly guarantee that Amrutkalp Sanjivani is 100% genuine Himalayan Shilajit resin free from synthetic additives, charcoal ash, chemical stimulants, or steroid contamination. If any NABL-accredited laboratory proves that our resin is adulterated or fake, we will immediately pay the claimant ₹5,51,000.'
    },
    {
      q: 'How do I take Amrutkalp Shilajit for best results?',
      a: 'Using the included brass spoon, measure a pea-sized portion (300–500 mg). Stir it into a cup of lukewarm water, warm milk, or green tea until fully dissolved into a clear golden-amber liquid. Drink every morning on an empty stomach for 6 to 8 weeks.'
    },
    {
      q: 'Does Amrutvati contain any synthetic painkillers or steroids?',
      a: 'Absolutely not. Amrutvati is a 100% Shastriya Ayurvedic botanical formulation containing Shallaki (Boswellia), Shuddha Guggulu, Rasna, and Ashwagandha. It relieves pain by soothing aggravated Vata and clearing inflammatory Ama, without damaging your stomach lining or kidneys.'
    },
    {
      q: 'Can I visit the Amrutkalp store in person in Surat?',
      a: 'Yes! We welcome all visitors to our registered dispensary at 108, Biz Hub Shopping, near 99 Shopping, Amroli Cross Road, Amroli, Surat, Gujarat 394107. You can inspect physical batches and consult our team directly.'
    },
    {
      q: 'What are the delivery charges and Cash on Delivery terms?',
      a: 'Delivery is 100% FREE on all orders of ₹699 and above. For smaller orders, a nominal ₹70 shipping charge applies. We offer Cash on Delivery across India where you can inspect your parcel before paying.'
    }
  ];

  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      
      {/* 1. HERO SECTION: Art-Directed Split Showcase with Authentic Product Asset */}
      <section className="relative overflow-hidden pt-8 md:pt-14 pb-12 border-b border-stone-200/90 bg-radial from-amber-50/40 via-[#fbfaf7] to-[#fbfaf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Quiet Kicker with separator */}
              <div className="flex items-center gap-2 text-xs text-stone-600 font-semibold tracking-wide">
                <span className="text-[#b3832f] uppercase tracking-wider">Shastriya Ayurveda</span>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <span>Himalayan Altitude 16,000+ Ft</span>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <span className="text-stone-800">Surat, Gujarat</span>
              </div>

              {/* Display Headline */}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-stone-950 tracking-tight leading-[1.1] text-balance">
                Pure Power. <br className="hidden sm:inline" />
                <span className="italic font-normal text-stone-800">Pure Himalayan</span> Shilajit.
              </h1>

              {/* Subtitle / Value proposition */}
              <p className="text-sm sm:text-base md:text-lg text-stone-600 leading-relaxed max-w-2xl">
                Unadulterated Grade A+ mineral resin wild-harvested from high-altitude Himalayan cliffs, rich in &gt;60% bioactive Fulvic Acid and 84+ trace minerals. Backed by our open <strong className="text-stone-900 font-semibold">₹5,51,000 Purity Challenge</strong>.
              </p>

              {/* Key Trust Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-stone-700 font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>100% classical water-purified resin (Surya Tapi)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>Zero fillers, artificial gums, or steroids</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>₹5.51L cash reward if proven adulterated</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>Free brass dosage spoon included</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => instantBuyNow(sanjivaniProduct, 1)}
                  className="py-3.5 px-6 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 text-sm shadow-md cursor-pointer"
                >
                  <span>Order Sanjivani Shilajit (₹799)</span>
                  <ArrowRight className="w-4 h-4 text-[#c99a45]" />
                </button>

                <button
                  onClick={() => setCurrentTab('shop')}
                  className="py-3.5 px-6 bg-white border border-stone-300 text-stone-900 font-semibold rounded-lg hover:bg-stone-100 transition-colors text-sm cursor-pointer"
                >
                  View All Formulations
                </button>
              </div>

              {/* Public Challenge Callout */}
              <div className="p-3.5 bg-amber-50/80 border border-amber-200/80 rounded-xl text-xs text-amber-950 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#c99a45] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block text-amber-900">
                    {BRAND.guarantee.headlineGujarati}
                  </strong>
                  <span className="text-stone-600 text-[11px] block mt-0.5">
                    {BRAND.guarantee.headlineEnglish}
                  </span>
                </div>
              </div>

            </div>

            {/* Right Product Image Column (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden bg-gradient-to-b from-[#17221d] to-[#0c1410] p-6 text-white shadow-2xl border border-stone-800">
                
                {/* Genuine Product Photograph */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-stone-900/60 flex items-center justify-center border border-stone-700/60 p-2">
                  <img
                    src="/assets/products/sanjivani-shilajit-pure.jpg"
                    alt="AMRUTKALP SANJIVANI Pure Himalayan Shilajit 20 GM Glass Jar"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-3 left-3 bg-stone-950/85 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-mono text-amber-200 border border-stone-700">
                    SANJIVANI · 20 GM
                  </div>
                </div>

                {/* Micro Product Brief Below Image */}
                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-serif text-lg font-bold text-white">
                        Sanjivani Shilajit Resin
                      </h2>
                      <span className="text-xs text-stone-400">
                        Batch Q4-2026 · Surya Tapi Shodhana
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-amber-300 tabular-nums">₹799</span>
                      <span className="block text-xs text-stone-400 line-through tabular-nums">₹2,000</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-800 text-[11px] text-stone-300">
                    <div>
                      <span className="text-stone-400 block">Fulvic Acid</span>
                      <strong className="text-white font-mono">&gt; 60% w/w</strong>
                    </div>
                    <div>
                      <span className="text-stone-400 block">Delivery</span>
                      <strong className="text-emerald-400">Free Express (Surat)</strong>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectProduct('sanjivani-shilajit')}
                    className="w-full py-2.5 text-center text-xs font-semibold text-stone-200 hover:text-white bg-stone-800/80 hover:bg-stone-700 rounded-lg transition-colors cursor-pointer border border-stone-700"
                  >
                    Explore Lab Sourcing & Full Details →
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. VALUE METRICS STRIP: Clean unboxed stats with tabular numerals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-stone-200 text-stone-800">
          <div>
            <span className="font-mono text-2xl md:text-3xl font-bold tabular-nums text-stone-950">
              16,000+
            </span>
            <span className="block text-xs font-medium text-stone-500 mt-1">
              Feet Elevation Himalayan Harvest
            </span>
          </div>
          <div>
            <span className="font-mono text-2xl md:text-3xl font-bold tabular-nums text-stone-950">
              ₹5.51L
            </span>
            <span className="block text-xs font-medium text-stone-500 mt-1">
              Public Purity Challenge Guarantee
            </span>
          </div>
          <div>
            <span className="font-mono text-2xl md:text-3xl font-bold tabular-nums text-stone-950">
              84+
            </span>
            <span className="block text-xs font-medium text-stone-500 mt-1">
              Ionic Trace Minerals & Fulvic Acid
            </span>
          </div>
          <div>
            <span className="font-mono text-2xl md:text-3xl font-bold tabular-nums text-stone-950">
              24–48h
            </span>
            <span className="block text-xs font-medium text-stone-500 mt-1">
              Dispatch from Surat, Gujarat
            </span>
          </div>
        </div>
      </section>

      {/* 3. FEATURED REMEDIES COLLECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#b3832f] font-semibold">
              Classical Shastriya Formulations
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-950 mt-1">
              Verified Ayurvedic Remedies
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1.5 max-w-xl">
              Authentic Ayurvedic preparations crafted with zero synthetic adulterants. Each package is individually batch-inspected.
            </p>
          </div>
          <button
            onClick={() => setCurrentTab('shop')}
            className="text-xs font-semibold text-stone-900 hover:text-amber-900 flex items-center gap-1 cursor-pointer whitespace-nowrap self-start md:self-auto"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3-column product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      </section>

      {/* 4. THE ₹5,51,000 AUTHENTICITY CHALLENGE SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#111915] text-stone-100 overflow-hidden border border-stone-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            
            {/* Left Challenge Details (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-950/80 border border-amber-600/50 text-amber-300 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#c99a45]" />
                <span>Open Public Challenge</span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                  {BRAND.guarantee.headlineGujarati}
                </h3>
                <p className="font-serif text-xl sm:text-2xl font-medium text-amber-200 mt-2">
                  Prove it Fake in Any Certified Lab and Win ₹5,51,000
                </p>
              </div>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {BRAND.guarantee.description} We harvest raw resin from remote Himalayan screes, filter it in pure spring water, and dry it under natural sunlight (Surya Tapi). No corn syrup, no synthetic binders, and no heavy metal toxins.
              </p>

              {/* 3 Key Purity Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 bg-stone-900/90 rounded-xl border border-stone-800">
                  <Flame className="w-5 h-5 text-amber-400 mb-2" />
                  <h4 className="text-xs font-bold text-white">Flame Purity</h4>
                  <p className="text-[11px] text-stone-400 mt-1">
                    Expands into pure mineral ash without flammable synthetic flames.
                  </p>
                </div>

                <div className="p-3.5 bg-stone-900/90 rounded-xl border border-stone-800">
                  <Droplets className="w-5 h-5 text-amber-400 mb-2" />
                  <h4 className="text-xs font-bold text-white">Clean Dissolution</h4>
                  <p className="text-[11px] text-stone-400 mt-1">
                    Diffuses in water into golden amber ribbons without sand residue.
                  </p>
                </div>

                <div className="p-3.5 bg-stone-900/90 rounded-xl border border-stone-800">
                  <Award className="w-5 h-5 text-amber-400 mb-2" />
                  <h4 className="text-xs font-bold text-white">NABL Tested</h4>
                  <p className="text-[11px] text-stone-400 mt-1">
                    Screened for lead, arsenic, mercury, and microbiological purity.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setCurrentTab('authenticity')}
                  className="py-3 px-5 bg-[#c99a45] text-stone-950 font-semibold rounded-lg hover:bg-amber-400 transition-colors text-xs cursor-pointer shadow-xs"
                >
                  Read Full Challenge Protocol & Rules
                </button>
                <a
                  href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent('Hello Amrutkalp, I want to learn more about the 5.51 Lakh purity challenge.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-stone-300 hover:text-white flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call / WhatsApp Quality Desk: {BRAND.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Typographic Certificate Plate (5 cols) - No screenshots, pure editorial authority */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-amber-500/40 bg-gradient-to-b from-[#18261f] via-[#101b15] to-[#0c1410] p-7 text-stone-100 shadow-2xl relative overflow-hidden space-y-5">
                
                {/* Certificate Header */}
                <div className="text-center pb-4 border-b border-stone-800 space-y-1">
                  <div className="text-[10px] uppercase font-mono tracking-widest text-[#c99a45]">
                    Official Declaration & Warranty
                  </div>
                  <div className="font-serif text-2xl font-bold text-amber-200">
                    ₹5,51,000
                  </div>
                  <div className="text-xs text-stone-300 font-medium">
                    Open Laboratory Authenticity Bounty
                  </div>
                </div>

                {/* Original Gujarati Slogan in Bold Typography */}
                <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-600/30 text-center space-y-1">
                  <div className="font-serif text-base sm:text-lg font-bold text-amber-100 leading-snug">
                    "ડુપ્લીકેટ સાબિત કરીને બતાવો તો મળશે ₹5,51,000 ઈનામ*"
                  </div>
                  <div className="text-[11px] text-stone-400">
                    "डुप्लीकेट साबित करके दिखाओ तो मिलेगा ₹5,51,000 का इनाम*"
                  </div>
                </div>

                {/* Certified Testing Criteria */}
                <div className="space-y-2 text-xs">
                  <div className="text-[11px] uppercase font-bold tracking-wider text-stone-400">
                    Testing Criteria & Standards:
                  </div>
                  <div className="space-y-1.5 text-[11px] text-stone-300">
                    <div className="flex items-center justify-between py-1 border-b border-stone-800">
                      <span>Artificial Fillers / Sugar Syrup</span>
                      <strong className="text-emerald-400 font-mono">0.0% (Zero)</strong>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-stone-800">
                      <span>Bioactive Fulvic Acid Content</span>
                      <strong className="text-amber-300 font-mono">&gt; 60% w/w</strong>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-stone-800">
                      <span>Heavy Metals (Lead, Mercury, Arsenic)</span>
                      <strong className="text-emerald-400 font-mono">Passes NABL Limits</strong>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-stone-800">
                      <span>Synthetic Stimulants or Steroids</span>
                      <strong className="text-emerald-400 font-mono">100% Absent</strong>
                    </div>
                  </div>
                </div>

                {/* Signature Block */}
                <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-[10px] text-stone-400 font-mono">
                  <span>Amrutkalp Quality Cell</span>
                  <span className="text-amber-400">Surat, Gujarat</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. AMRUTVATI MORNING BACK PAIN FEATURE: #आराम होगा तो काम होगा */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            
            {/* Visual Formulation Plate (5 cols) - Pure typography & classical apothecary layout */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-stone-800 bg-gradient-to-b from-[#131d18] via-[#0e1713] to-[#15231c] p-7 text-white shadow-xl space-y-5">
                
                <div className="flex items-center justify-between border-b border-stone-800 pb-3 text-[11px]">
                  <span className="font-mono text-amber-300/80 uppercase tracking-widest text-[10px]">
                    Ayurvedic Pain Formulation
                  </span>
                  <span className="font-serif italic text-stone-300">
                    30 Tablets
                  </span>
                </div>

                <div className="text-center py-3 space-y-1">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-amber-100">
                    अमृतकल्प अमृतवटी
                  </div>
                  <div className="text-xs text-amber-300/90 font-medium">
                    वातशामक व दर्द निवारक गुटिका
                  </div>
                  <div className="text-[11px] text-stone-400 font-mono pt-1">
                    #आराम होगा तो काम होगा
                  </div>
                </div>

                <div className="p-4 bg-stone-900/80 rounded-xl border border-stone-800 space-y-2 text-xs">
                  <div className="text-[11px] text-stone-400 uppercase font-semibold">Active Botanicals:</div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-stone-300">
                    <div>• Shallaki (65% Boswellic)</div>
                    <div>• Shuddha Guggulu</div>
                    <div>• Rasna Rhizome</div>
                    <div>• Nagori Ashwagandha</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] text-stone-400 font-mono border-t border-stone-800 pt-3">
                  <span>Zero Synthetic Analgesics</span>
                  <span className="text-emerald-400 font-semibold">Surat Dispensary</span>
                </div>

              </div>
            </div>

            {/* Educational Content (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider">
                <span>#आराम होगा तो काम होगा</span>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <span>30 Herbal Tablets</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-950 tracking-tight leading-tight">
                सुबह उठकर कमर में दर्द? <br />
                <span className="italic font-normal text-stone-700">यह है वो दर्द निवारक जो आपको चाहिए</span>
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Do you wake up feeling like your lower spine is rigid and stiff? Morning lumbar pain and neck stiffness ruin productivity before your day even begins. <strong>Amrutkalp Amrutvati</strong> targets the aggravated Vata dosha and deep-seated synovial inflammation using classical Shallaki (65% Boswellic acids), Shuddha Guggulu, Rasna, and Ashwagandha.
              </p>

              {/* Verified Relief Points */}
              <div className="grid grid-cols-2 gap-3 text-xs text-stone-800">
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                  <strong className="block text-stone-900 font-semibold">कमर दर्द (Lower Back)</strong>
                  <span className="text-[11px] text-stone-500">Relieves lumbar disc & muscular stiffness</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                  <strong className="block text-stone-900 font-semibold">गर्दन व कंधे (Neck & Shoulders)</strong>
                  <span className="text-[11px] text-stone-500">Relaxes cervical and postural tightness</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                  <strong className="block text-stone-900 font-semibold">जोड़ों का दर्द (Joint Mobility)</strong>
                  <span className="text-[11px] text-stone-500">Supports synovial fluid lubrication</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                  <strong className="block text-stone-900 font-semibold">साइटिका (Sciatica Relief)</strong>
                  <span className="text-[11px] text-stone-500">Soothes radiating nerve sensitivity</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => instantBuyNow(amrutvatiProduct, 1)}
                  className="w-full sm:w-auto py-3 px-6 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors text-xs flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Order Amrutvati (₹599)</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c99a45]" />
                </button>

                <button
                  onClick={() => onSelectProduct('amrutvati-pain-relief')}
                  className="w-full sm:w-auto py-3 px-5 bg-stone-100 hover:bg-stone-200 text-stone-900 font-semibold rounded-lg transition-colors text-xs cursor-pointer"
                >
                  View Dosage & Herbs Breakdown
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 6. HOW TO CONSUME SHILAJIT: Classical 4-Step Shastriya Protocol */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#b3832f] font-semibold">
            Daily Vidhi & Anupana
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950 mt-1">
            How to Consume Pure Shilajit
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1.5">
            Follow this verified traditional method to achieve maximum cellular bioavailability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-5 bg-white rounded-xl border border-stone-200 space-y-3">
            <div className="w-8 h-8 rounded-full bg-stone-900 text-amber-200 font-mono text-xs font-bold flex items-center justify-center">
              01
            </div>
            <h3 className="font-serif text-base font-bold text-stone-900">
              Measure Pea-Sized Portion
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Use the included brass dosage spoon to scoop approximately 300 mg to 500 mg of resin (about the size of an Indian chickpea).
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-stone-200 space-y-3">
            <div className="w-8 h-8 rounded-full bg-stone-900 text-amber-200 font-mono text-xs font-bold flex items-center justify-center">
              02
            </div>
            <h3 className="font-serif text-base font-bold text-stone-900">
              Lukewarm Liquid Vehicle
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Pour 150ml of lukewarm water, warm A2 cow milk, or green tea. Never use boiling liquid to avoid denaturing living enzymes.
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-stone-200 space-y-3">
            <div className="w-8 h-8 rounded-full bg-stone-900 text-amber-200 font-mono text-xs font-bold flex items-center justify-center">
              03
            </div>
            <h3 className="font-serif text-base font-bold text-stone-900">
              Stir into Amber Ribbon
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Stir gently for 15 seconds. Observe the resin dissolving completely into a rich golden-amber to mahogany elixir without grittiness.
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-stone-200 space-y-3">
            <div className="w-8 h-8 rounded-full bg-stone-900 text-amber-200 font-mono text-xs font-bold flex items-center justify-center">
              04
            </div>
            <h3 className="font-serif text-base font-bold text-stone-900">
              Morning Empty Stomach
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Drink warm 20–30 minutes before breakfast. Repeat consistently for 6 to 8 weeks to replenish deeper Dhatus and stamina.
            </p>
          </div>
        </div>
      </section>

      {/* 7. REAL SURAT DISPENSARY & FOUNDER COMMUNITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#f4f2ec] border border-stone-200/90 p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Typographic Dispensary Plaque (4 cols) - Pure editorial authority */}
            <div className="lg:col-span-4">
              <div className="rounded-xl border border-stone-300 shadow-md bg-[#111915] text-stone-100 p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                  <span className="font-mono text-[10px] text-amber-300 tracking-widest uppercase">DISPENSARY REGISTER</span>
                  <span className="text-[10px] text-stone-400">SURAT · GUJARAT</span>
                </div>
                
                <div className="space-y-1">
                  <div className="font-serif text-xl font-bold text-white">AMRUTKALP</div>
                  <div className="text-xs text-amber-200/90 font-medium">Pure Ayurvedic Herbals</div>
                </div>

                <div className="p-3 bg-stone-900 rounded-lg border border-stone-800 space-y-1.5 text-xs">
                  <div className="text-stone-400 text-[10px] uppercase font-semibold">Physical Center:</div>
                  <p className="text-stone-300 text-[11px] leading-relaxed">
                    108, Biz Hub Shopping, near 99 Shopping, Amroli Cross Road, Surat - 394107
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
                  <span>Community: @pure_ayurvedic_herbal</span>
                  <span className="text-emerald-400">Verified</span>
                </div>
              </div>
            </div>

            {/* Store Information (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#b3832f] font-semibold">
                Transparent Gujarati Roots
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950">
                Direct from Our Surat Dispensary to Your Home
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Unlike faceless online brands that re-label generic contract manufacturing, Amrutkalp operates from our dedicated registered center in Surat, Gujarat. We personally oversee every batch extraction, purity verification, and customer delivery.
              </p>

              <div className="p-4 bg-white rounded-xl border border-stone-200 text-xs space-y-2">
                <div className="flex items-start gap-2 text-stone-800">
                  <MapPin className="w-4 h-4 text-[#c99a45] shrink-0 mt-0.5" />
                  <span>
                    <strong>Visit Us In Person:</strong> {BRAND.address.full}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-stone-800">
                  <Phone className="w-4 h-4 text-[#c99a45] shrink-0" />
                  <span>
                    <strong>Direct Hotline:</strong> {BRAND.phoneFormatted} (Call & WhatsApp consultation)
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent('Hello Amrutkalp, I want to book an Ayurvedic consultation.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors text-xs flex items-center gap-1.5 shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Consult an Ayurvedic Specialist via WhatsApp</span>
                </a>
                <button
                  onClick={() => setCurrentTab('about')}
                  className="text-xs font-semibold text-stone-800 hover:text-stone-950 underline underline-offset-4 cursor-pointer"
                >
                  Read Our Full Story & Mission →
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 8. VERIFIED FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-widest text-[#b3832f] font-semibold">
            Clear Answers
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950 mt-1">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Honest answers without marketing exaggeration.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = expandedFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-stone-200/90 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-stone-50/70 transition-colors cursor-pointer"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-stone-900">
                    {faq.q}
                  </span>
                  <div className="p-1 rounded-full bg-stone-100 text-stone-600 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
