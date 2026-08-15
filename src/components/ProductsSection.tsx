import React, { useState } from 'react';
import { PRODUCTS } from '../data/presentationData';
import { ProductItem } from '../types';
import { Radio, Cpu, ShieldCheck, Satellite, Calendar, Filter, ChevronRight } from 'lucide-react';

interface ProductsSectionProps {
  onOpenProductModal: (product: ProductItem) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenProductModal }) => {
  const [filter, setFilter] = useState<'all' | '5g-oru' | '5g-test' | 'defense' | 'satcom'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesFilter = filter === 'all' || product.vertical === filter;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.highlights.some((h) => h.toLowerCase().includes(searchTerm.toLowerCase())) ||
      product.specs.some((s) => s.label.toLowerCase().includes(searchTerm.toLowerCase()) || s.value.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const getStatusBadge = (status: ProductItem['status'], releaseDate?: string) => {
    switch (status) {
      case 'In Production':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm text-[11px] font-mono font-bold bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#059669]"></span>
            PRODUCTION
          </span>
        );
      case 'TRL 6 Field Proven':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm text-[11px] font-mono font-bold bg-[#EFF6FF] text-[#1E40AF] border border-[#BFDBFE]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
            TRL-6 PROVEN
          </span>
        );
      case '2027 Release':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm text-[11px] font-mono font-bold bg-[#FFFBEB] text-[#92400E] border border-[#FDE68A]">
            <Calendar className="w-3 h-3 text-[#D97706]" />
            {releaseDate ? releaseDate.toUpperCase() : '2027 RELEASE'}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm text-[11px] font-mono font-bold bg-[#F3F4F6] text-[#374151] border border-[#E5E7EB]">
            {status.toUpperCase()}
          </span>
        );
    }
  };

  const getVerticalIcon = (vertical: ProductItem['vertical']) => {
    switch (vertical) {
      case '5g-oru':
        return <Radio className="w-4 h-4 text-[#2563EB]" />;
      case '5g-test':
        return <Cpu className="w-4 h-4 text-[#2563EB]" />;
      case 'defense':
        return <ShieldCheck className="w-4 h-4 text-[#10B981]" />;
      case 'satcom':
        return <Satellite className="w-4 h-4 text-[#D97706]" />;
    }
  };

  return (
    <section id="products" className="py-16 sm:py-24 border-b border-[#E5E7EB] bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="space-y-2 mb-3">
              <span className="text-[#3B82F6] text-xs font-bold uppercase tracking-[0.25em]">
                SLIDES 06, 07, 13–18 • PORTFOLIO
              </span>
              <div className="h-[2px] w-10 bg-[#1A1A1A]"></div>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight uppercase">
              Hardware Platforms & SDR Systems
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#6B7280] max-w-2xl">
              Tactical cellular base stations, fast-hopping SDR transceivers, SatCom modems, and wire-speed test instrumentation.
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-80">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search specs (e.g. 100GbE, 10,000 hops)..."
              className="w-full px-4 py-2.5 text-xs rounded-sm bg-white border border-[#E5E7EB] text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#1A1A1A] font-mono transition-colors shadow-sm"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <span className="text-xs text-[#6B7280] font-mono uppercase tracking-wider flex items-center gap-1.5 mr-2 font-bold">
            <Filter className="w-3.5 h-3.5" /> Domain:
          </span>
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
              filter === 'all'
                ? 'bg-[#1A1A1A] text-white shadow-sm'
                : 'bg-white text-[#4B5563] hover:text-[#1A1A1A] border border-[#E5E7EB]'
            }`}
          >
            All Systems ({PRODUCTS.length})
          </button>
          <button
            onClick={() => setFilter('defense')}
            className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
              filter === 'defense'
                ? 'bg-[#1A1A1A] text-white shadow-sm'
                : 'bg-white text-[#4B5563] hover:text-[#1A1A1A] border border-[#E5E7EB]'
            }`}
          >
            Defense & Tactical
          </button>
          <button
            onClick={() => setFilter('satcom')}
            className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
              filter === 'satcom'
                ? 'bg-[#1A1A1A] text-white shadow-sm'
                : 'bg-white text-[#4B5563] hover:text-[#1A1A1A] border border-[#E5E7EB]'
            }`}
          >
            SatCom Modems
          </button>
          <button
            onClick={() => setFilter('5g-test')}
            className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
              filter === '5g-test'
                ? 'bg-[#1A1A1A] text-white shadow-sm'
                : 'bg-white text-[#4B5563] hover:text-[#1A1A1A] border border-[#E5E7EB]'
            }`}
          >
            5G Test Equipment
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col justify-between rounded-sm bg-white border border-[#E5E7EB] hover:border-[#1A1A1A] transition-all shadow-xl hover:shadow-2xl group relative overflow-hidden"
            >
              {/* Card Header & Status */}
              <div className="p-7">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280] font-mono uppercase tracking-wider font-semibold">
                    {getVerticalIcon(product.vertical)}
                    <span>{product.verticalLabel}</span>
                  </div>
                  {getStatusBadge(product.status, product.releaseDate)}
                </div>

                <h3 className="text-xl font-bold text-[#1A1A1A] tracking-tight group-hover:text-[#2563EB] transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-[#6B7280] font-mono mt-1">{product.subtitle}</p>

                <div className="h-[1px] w-8 bg-[#1A1A1A] my-4"></div>

                <p className="text-xs text-[#4B5563] leading-relaxed">
                  {product.tagline}
                </p>

                {/* Key Spec Highlights Box */}
                <div className="mt-6 p-4 rounded-sm bg-[#F9FAFB] border border-[#E5E7EB] space-y-2.5">
                  <div className="text-[10px] uppercase font-mono tracking-widest text-[#9CA3AF] font-bold">
                    Parametric Highlights
                  </div>
                  {product.specs.slice(0, 4).map((spec, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#6B7280] truncate max-w-[150px]">{spec.label}:</span>
                      <span className={spec.highlight ? 'text-[#1A1A1A] font-bold' : 'text-[#374151]'}>
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Form Factors Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {product.formFactors.map((form, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-sm text-[10px] font-mono bg-white text-[#4B5563] border border-[#E5E7EB]"
                    >
                      {form}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-5 bg-[#F9FAFB] border-t border-[#E5E7EB] flex items-center justify-between">
                <button
                  onClick={() => onOpenProductModal(product)}
                  className="w-full py-2.5 px-4 rounded-sm bg-[#1A1A1A] hover:bg-black text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <span>View Technical Datasheet</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-sm border border-[#E5E7EB]">
            <p className="text-sm text-[#6B7280]">No hardware systems matched your search criteria.</p>
            <button
              onClick={() => {
                setFilter('all');
                setSearchTerm('');
              }}
              className="mt-3 text-xs font-bold uppercase tracking-wider text-[#2563EB] hover:underline"
            >
              Clear filters and search
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
