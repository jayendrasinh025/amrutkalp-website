import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Search, ShieldCheck, Filter, ArrowUpDown } from 'lucide-react';

interface ShopPageProps {
  onSelectProduct: (slug: string) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({ onSelectProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const categories = [
    { id: 'all', label: 'All Formulations' },
    { id: 'vitality', label: 'Vitality & Shilajit' },
    { id: 'pain-relief', label: 'Joint Health & Pain Relief' },
    { id: 'bundle', label: 'Value Packs & Combos' }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.sanskritName && p.sanskritName.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Page Header */}
      <div className="border-b border-stone-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#b3832f] font-semibold">
            The Amrutkalp Dispensary
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950 mt-1">
            Shop Authentic Ayurvedic Remedies
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
            Each formulation is laboratory batch-inspected and backed by our open ₹5,51,000 purity challenge. Fast express dispatch across India.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-stone-600 font-medium bg-stone-100 px-3 py-2 rounded-lg self-start md:self-auto">
          <ShieldCheck className="w-4 h-4 text-[#c99a45]" />
          <span>All packages sealed at our Surat dispensary</span>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        
        {/* Interactive Segmented Filter Controls (allowed functional buttons per constitution) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-lg">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-white text-stone-950 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-950'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search & Sort */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search Shilajit, Amrutvati..."
              className="pl-9 pr-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 w-full sm:w-56 bg-white"
            />
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-3.5 h-3.5 text-stone-500" />
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 bg-white text-stone-700 cursor-pointer"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

        </div>

      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-xl border border-stone-200">
          <p className="font-serif text-lg text-stone-700">No matching remedies found.</p>
          <p className="text-xs text-stone-500 mt-1">Try resetting your search or filter options.</p>
          <button
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
            className="mt-4 px-4 py-2 bg-stone-900 text-white text-xs font-semibold rounded-lg"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      )}

      {/* Purity Assurance Banner */}
      <div className="p-6 bg-stone-100 rounded-2xl border border-stone-200/90 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="font-serif text-lg font-bold text-stone-900">
            Unsure which formulation matches your body constitution?
          </h3>
          <p className="text-xs text-stone-600">
            Our Ayurvedic team in Surat provides free dosage and regimen guidance via WhatsApp or phone.
          </p>
        </div>
        <a
          href="https://wa.me/918141323395?text=Hello%20Amrutkalp%20team%2C%20I%20need%20assistance%20choosing%20the%20right%20remedy."
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-5 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors text-xs shrink-0 shadow-xs"
        >
          Speak with Ayurvedic Advisor
        </a>
      </div>

    </div>
  );
};
