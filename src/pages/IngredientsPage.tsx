import React from 'react';
import { Leaf, Droplets, Sun, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

interface IngredientsPageProps {
  onGoToShop: () => void;
}

export const IngredientsPage: React.FC<IngredientsPageProps> = ({ onGoToShop }) => {
  const botanicals = [
    {
      name: 'Pure Himalayan Shilajit',
      sanskrit: 'Shuddha Shilajatu (शुद्ध शिलाजीत)',
      botanical: 'Asphaltum punjabianum / Alpine Mineral Pitch',
      origin: 'High-Altitude Western Himalayan Rock Faces (16,000+ ft)',
      activePrinciple: '>60% Fulvic Acid, Humic Complexes, 84+ Ionic Minerals',
      description: 'Shilajit is a natural mineral-herbal resin formed through the gradual microbial decomposition of alpine flora (including Euphorbia and Trifolium species) under immense rock pressure over centuries. When the summer sun warms the Himalayan cliff faces, the dark resin exudes from fissures. It acts as a premier "Rasayana" (rejuvenator), delivering bioavailable minerals directly through cell walls via low-molecular-weight Fulvic acid.'
    },
    {
      name: 'Kunduru / Shallaki',
      sanskrit: 'Shallaki (शल्लकी)',
      botanical: 'Boswellia serrata (Tapped Resin Extract)',
      origin: 'Dry Deciduous Mountain Forests of Central India',
      activePrinciple: '65% Boswellic Acids (specifically AKBA: 3-O-acetyl-11-keto-beta-boswellic acid)',
      description: 'Shallaki is Ayurveda’s primary botanical intervention for chronic musculoskeletal inflammation. Unlike non-steroidal painkillers that damage gastric mucosa, Boswellic acids selectively inhibit 5-lipoxygenase (5-LOX), shutting down the synthesis of leukotrienes that cause swelling and synovial pain in the lumbar spine, knees, and neck.'
    },
    {
      name: 'Shuddha Guggulu',
      sanskrit: 'Guggulu (गुग्गुलु)',
      botanical: 'Commiphora mukul (Purified Gum Resin)',
      origin: 'Semi-Arid Regions of Gujarat and Rajasthan',
      activePrinciple: 'Guggulsterones (E- and Z-stereoisomers)',
      description: 'Classical texts describe Guggulu as having "Lekhana" (scraping) and "Vata-hara" (vata-pacifying) qualities. It clears stagnant metabolic debris (Ama) accumulated inside deep cartilage and micro-capillaries around vertebrae, restoring natural joint fluid circulation and freedom of movement.'
    },
    {
      name: 'Rasna',
      sanskrit: 'Rasna (रास्ना)',
      botanical: 'Pluchea lanceolata',
      origin: 'Sun-drenched River Valleys of Northwestern India',
      activePrinciple: 'Quercetin, Pluchine, and Terpenoids',
      description: 'Rasna is classical Ayurveda’s foremost single herb for "Amavata" and sciatic pain radiating down the lower limbs. It desensitizes irritated nerve endings, relieves deep muscular spasms in the pelvic girdle, and accelerates the restoration of comfortable mobility upon waking.'
    },
    {
      name: 'Nagori Ashwagandha',
      sanskrit: 'Ashwagandha (अश्वगंधा)',
      botanical: 'Withania somnifera (Dry Root Extract)',
      origin: 'Nagaur Organic Sourcing',
      activePrinciple: 'Withanolides, Withaferin A, and Alkaloids',
      description: 'Known as "Indian Ginseng," Ashwagandha strengthens the musculoskeletal framework (Mamsa and Asthi Dhatu) while mitigating the stress-induced cortisol spikes that cause chronic postural tension in desk-bound and active workers alike.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#b3832f] font-semibold">
          Shastriya Pharmacopoeia & Modern Phytochemistry
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-950 tracking-tight leading-tight">
          Pure Botanical & Mineral Science
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
          Every Amrutkalp formulation contains 100% active compounds. We reject chemical extracts standardized with maltodextrin, artificial colorants, synthetic binders, and synthetic analgesics.
        </p>
      </div>

      {/* Surya Tapi Sun-Purification Feature */}
      <div className="p-8 bg-[#111915] text-stone-100 rounded-2xl border border-stone-800 shadow-xl space-y-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-wider">
          <Sun className="w-4 h-4 text-[#c99a45]" />
          <span>The Traditional Purification Standard</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
              Why Surya Tapi (Sun-Drying) Matters Over Industrial Boiling
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Industrial mass-market brands use commercial boilers at temperatures above 100°C to rapidly evaporate water from raw Shilajit pitch. This brutal heat caramelizes sugars, burns the volatile organic acids, and kills delicate bio-enzymes.
            </p>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              At Amrutkalp, we practice authentic <strong>Surya Tapi Shodhana</strong>. Raw rock pitch is soaked in pure Himalayan spring water, filtered through multi-tier cotton screens to eliminate all insoluble grit, and left in shallow glass trays under natural sunlight for 45 to 60 days. The gentle solar heat evaporates moisture without compromising the organic matrix.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-stone-900/90 rounded-xl border border-stone-800 space-y-2">
              <span className="text-xs font-mono font-bold text-amber-300 block">Surya Tapi (Amrutkalp)</span>
              <p className="text-xs text-stone-300">
                Evaporated at ambient 35°C–40°C under sunlight. Retains 100% Fulvic Acid and ionic mineral bioavailability.
              </p>
            </div>
            <div className="p-4 bg-stone-900/90 rounded-xl border border-stone-800 space-y-2">
              <span className="text-xs font-mono font-bold text-red-400 block">Boiler Dried (Cheap Brands)</span>
              <p className="text-xs text-stone-400">
                Boiled at &gt;100°C in industrial kettles. Destroys organic acids and results in burnt, bitter black tar.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Botanical Monographs */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#b3832f] font-semibold">
            Single Herb Monographs
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950 mt-1">
            Active Ingredients Decoded
          </h2>
        </div>

        <div className="space-y-6">
          {botanicals.map((botanical, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-white rounded-2xl border border-stone-200/90 space-y-4 shadow-2xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-stone-100 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-[#c99a45]" />
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                      {botanical.name}
                    </h3>
                  </div>
                  <span className="text-xs text-stone-500 font-serif italic block mt-0.5">
                    {botanical.sanskrit} · {botanical.botanical}
                  </span>
                </div>

                <div className="text-left sm:text-right shrink-0">
                  <span className="text-[11px] font-bold text-stone-900 uppercase block tracking-wider">
                    Key Active
                  </span>
                  <span className="text-xs text-emerald-800 font-semibold font-mono">
                    {botanical.activePrinciple}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-8 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {botanical.description}
                </div>
                <div className="md:col-span-4 p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-2">
                  <div>
                    <span className="text-stone-400 text-[10px] uppercase font-bold block">Geographic Origin</span>
                    <strong className="text-stone-800">{botanical.origin}</strong>
                  </div>
                  <div>
                    <span className="text-stone-400 text-[10px] uppercase font-bold block">Classical Action</span>
                    <span className="text-stone-700">Rasayana, Balya & Vata-Shamaka</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center p-8 bg-stone-100 rounded-2xl border border-stone-200 space-y-4">
        <h3 className="font-serif text-2xl font-bold text-stone-900">
          Experience the Difference of Unadulterated Herbal Extraction
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto">
          Explore our complete collection of pure Himalayan Shilajit and targeted joint formulations.
        </p>
        <button
          onClick={onGoToShop}
          className="py-3 px-6 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors text-xs inline-flex items-center gap-2 cursor-pointer shadow-xs"
        >
          <span>Shop Amrutkalp Formulations</span>
          <ArrowRight className="w-4 h-4 text-[#c99a45]" />
        </button>
      </div>

    </div>
  );
};
