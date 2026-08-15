import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VerticalsSection } from './components/VerticalsSection';
import { ProductsSection } from './components/ProductsSection';
import { OruArchitectureSection } from './components/OruArchitectureSection';
import { InteractiveSpectrumAnalyzer } from './components/InteractiveSpectrumAnalyzer';
import { InteractiveManetVisualizer } from './components/InteractiveManetVisualizer';
import { RoadmapSection } from './components/RoadmapSection';
import { MatrixSection } from './components/MatrixSection';
import { LocationContactSection } from './components/LocationContactSection';
import { SlideDeckViewer } from './components/SlideDeckViewer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { QuickSearchModal } from './components/QuickSearchModal';
import { Footer } from './components/Footer';
import { PRODUCTS } from './data/presentationData';
import { ProductItem } from './types';
import { Radio, ShieldCheck, Activity, Cpu, Sparkles } from 'lucide-react';

export default function App() {
  const [viewMode, setViewMode] = useState<'portal' | 'presentation'>('portal');
  const [targetSlide, setTargetSlide] = useState<number>(1);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [activeSimulatorTab, setActiveSimulatorTab] = useState<'spectrum' | 'manet'>('spectrum');

  // Handle opening product modal by id or object
  const handleSelectProductById = (productId: string) => {
    const found = PRODUCTS.find((p) => p.id === productId);
    if (found) {
      setSelectedProduct(found);
    }
  };

  const handleOpenSlideInDeck = (slideNumber: number) => {
    setTargetSlide(slideNumber);
    setViewMode('presentation');
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (viewMode === 'presentation') {
    return (
      <SlideDeckViewer
        initialSlide={targetSlide}
        onExitPresentation={() => setViewMode('portal')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] flex flex-col font-sans selection:bg-blue-500/20 selection:text-blue-700">
      {/* Sticky Navigation */}
      <Navbar
        activeView={viewMode}
        onViewChange={setViewMode}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenContact={() => handleScrollToSection('contact')}
      />

      {/* Main Interactive Website Body */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection
          onExploreProducts={() => handleScrollToSection('products')}
          onOpenDeck={() => setViewMode('presentation')}
          onOpenSimulator={() => handleScrollToSection('simulators')}
        />

        {/* 2. Solution Spaces & 3 Verticals */}
        <VerticalsSection onSelectProduct={handleSelectProductById} />

        {/* 3. Product Portfolio Catalog */}
        <ProductsSection onOpenProductModal={(p) => setSelectedProduct(p)} />

        {/* 4. 5G O-RU & NTN Satellite Architecture & Deep Expertise */}
        <OruArchitectureSection />

        {/* 5. Interactive RF Lab & Tactical Simulators Section */}
        <section id="simulators" className="py-16 sm:py-24 border-b border-[#E5E7EB] bg-[#F3F4F6] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Simulator Header */}
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="space-y-2 mb-3">
                <span className="text-[#3B82F6] text-xs font-bold uppercase tracking-[0.25em]">
                  INTERACTIVE HARDWARE SIMULATION LAB
                </span>
                <div className="h-[2px] w-10 bg-[#1A1A1A] mx-auto"></div>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight uppercase">
                Live RF Spectrum & Tactical Mesh Simulators
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#6B7280]">
                Experience real-time interactive models of BigCat WiCatEye spectrum instrumentation and the 10,000 hops/sec tactical SDR MANET network.
              </p>
            </div>

            {/* Simulator Tabs in Geometric Style */}
            <div className="flex justify-center gap-2 p-1.5 rounded-sm bg-white border border-[#E5E7EB] max-w-xl mx-auto mb-8 shadow-sm">
              <button
                onClick={() => setActiveSimulatorTab('spectrum')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
                  activeSimulatorTab === 'spectrum'
                    ? 'bg-[#1A1A1A] text-white shadow-sm'
                    : 'text-[#6B7280] hover:text-[#1A1A1A]'
                }`}
              >
                <Activity className="w-4 h-4" />
                <span>WiCatEye RF Spectrum</span>
              </button>

              <button
                onClick={() => setActiveSimulatorTab('manet')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
                  activeSimulatorTab === 'manet'
                    ? 'bg-[#1A1A1A] text-white shadow-sm'
                    : 'text-[#6B7280] hover:text-[#1A1A1A]'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Tactical MANET Mesh</span>
              </button>
            </div>

            {/* Active Simulator Component */}
            {activeSimulatorTab === 'spectrum' ? (
              <InteractiveSpectrumAnalyzer />
            ) : (
              <InteractiveManetVisualizer />
            )}
          </div>
        </section>

        {/* 6. Strategic Roadmap (2026-2027 & Beyond) */}
        <RoadmapSection />

        {/* 7. Comprehensive Capabilities Matrix (Slide 19) */}
        <MatrixSection />

        {/* 8. Headquarters Location & R&D Inquiry Form (Slide 3 & 19) */}
        <LocationContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenDeck={() => setViewMode('presentation')} />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Quick Search Modal */}
      <QuickSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onSelectSlide={handleOpenSlideInDeck}
      />
    </div>
  );
}
