import React, { useState, useEffect } from 'react';
import { SLIDES_DATA, PRODUCTS, VERTICALS } from '../data/presentationData';
import { ProductItem, SlideData } from '../types';
import { Search, X, ChevronRight, FileText, Cpu, Radio, ShieldCheck, Sparkles } from 'lucide-react';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: ProductItem) => void;
  onSelectSlide: (slideNumber: number) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectSlide
}) => {
  const [query, setQuery] = useState('');

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProducts = PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      p.highlights.some((h) => h.toLowerCase().includes(query.toLowerCase())) ||
      p.specs.some((s) => s.label.toLowerCase().includes(query.toLowerCase()) || s.value.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredSlides = SLIDES_DATA.filter(
    (s) =>
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.summaryText.toLowerCase().includes(query.toLowerCase()) ||
      s.bulletPoints?.some((b) => b.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-[#1A1A1A]/60 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl rounded-sm bg-white border border-[#E5E7EB] shadow-2xl overflow-hidden">
        {/* Search Bar Input */}
        <div className="p-4 border-b border-[#E5E7EB] flex items-center gap-3 bg-[#F8F9FA]">
          <Search className="w-5 h-5 text-[#2563EB] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search specs, slides, frequencies (e.g., 100GbE, 10,000 hops, Band 28)..."
            className="w-full bg-transparent text-sm text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none font-mono"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-sm bg-white hover:bg-[#E5E7EB] text-[#6B7280] hover:text-[#1A1A1A] border border-[#E5E7EB]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Container */}
        <div className="p-5 max-h-96 overflow-y-auto space-y-6">
          {/* Quick Suggestions if empty */}
          {!query && (
            <div className="space-y-3">
              <div className="text-[11px] font-mono uppercase text-[#6B7280] font-bold">
                Popular Quick Searches
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  '10,000 hops/sec',
                  'Split 7.2x',
                  'BSNL Trials',
                  '6.4 TB IQ Storage',
                  '100 GbE',
                  'Band 28 LTE',
                  'TRL 6 Manpack',
                  'IIT Madras',
                  'CatLink SatCom'
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-2.5 py-1 rounded-sm text-xs font-mono bg-[#F9FAFB] hover:bg-[#EFF6FF] text-[#4B5563] hover:text-[#2563EB] border border-[#E5E7EB] hover:border-[#BFDBFE] transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched Products */}
          {filteredProducts.length > 0 && (
            <div className="space-y-2">
              <div className="text-[11px] font-mono uppercase text-[#1A1A1A] font-bold flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Hardware Systems & SDRs ({filteredProducts.length})</span>
              </div>
              <div className="space-y-1.5">
                {filteredProducts.map((prod) => (
                  <button
                    key={prod.id}
                    onClick={() => {
                      onSelectProduct(prod);
                      onClose();
                    }}
                    className="w-full p-3 rounded-sm bg-[#F9FAFB] hover:bg-white border border-[#E5E7EB] hover:border-[#1A1A1A] flex items-center justify-between text-left transition-all group shadow-sm"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-[#1A1A1A] group-hover:text-[#2563EB]">
                        {prod.name}
                      </h4>
                      <p className="text-[11px] text-[#6B7280] font-mono">{prod.subtitle}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#1A1A1A]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched Presentation Slides */}
          {filteredSlides.length > 0 && (
            <div className="space-y-2">
              <div className="text-[11px] font-mono uppercase text-[#1A1A1A] font-bold flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Presentation Slides ({filteredSlides.length})</span>
              </div>
              <div className="space-y-1.5">
                {filteredSlides.map((slide) => (
                  <button
                    key={slide.slideNumber}
                    onClick={() => {
                      onSelectSlide(slide.slideNumber);
                      onClose();
                    }}
                    className="w-full p-3 rounded-sm bg-[#F9FAFB] hover:bg-white border border-[#E5E7EB] hover:border-[#1A1A1A] flex items-center justify-between text-left transition-all group shadow-sm"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-[#2563EB] font-bold">
                          Slide {slide.slideNumber}
                        </span>
                        <h4 className="text-xs font-bold text-[#1A1A1A] group-hover:text-[#2563EB]">
                          {slide.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-[#6B7280] line-clamp-1 mt-0.5 font-mono">
                        {slide.summaryText}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#1A1A1A]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && filteredProducts.length === 0 && filteredSlides.length === 0 && (
            <div className="text-center py-8 text-xs text-[#6B7280] font-mono">
              No matching specifications found for &quot;{query}&quot;.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#F8F9FA] border-t border-[#E5E7EB] flex items-center justify-between text-[11px] font-mono text-[#6B7280]">
          <span>Select to jump to product or slide</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};
