import React, { useState } from 'react';
import { VERTICALS } from '../data/presentationData';
import { Radio, Cpu, ShieldCheck, Check, ArrowRight, Layers, Zap } from 'lucide-react';

interface VerticalsSectionProps {
  onSelectProduct: (productId: string) => void;
}

export const VerticalsSection: React.FC<VerticalsSectionProps> = ({ onSelectProduct }) => {
  const [activeTab, setActiveTab] = useState<'5g-oru' | '5g-test' | 'defense'>('5g-oru');

  const activeVertical = VERTICALS.find((v) => v.id === activeTab) || VERTICALS[0];

  const getVerticalIcon = (id: string) => {
    switch (id) {
      case '5g-oru':
        return <Radio className="w-4 h-4" />;
      case '5g-test':
        return <Cpu className="w-4 h-4" />;
      case 'defense':
        return <ShieldCheck className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  const getRelatedProductId = (verticalId: string) => {
    switch (verticalId) {
      case '5g-oru':
        return 'network-in-a-box';
      case '5g-test':
        return 'fronthaul-tester';
      case 'defense':
        return 'sdr-vhf-manpack';
      default:
        return 'network-in-a-box';
    }
  };

  return (
    <section id="verticals" className="py-16 sm:py-24 border-b border-[#E5E7EB] bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="space-y-2 mb-3">
            <span className="text-[#3B82F6] text-xs font-bold uppercase tracking-[0.25em]">
              SLIDES 04 & 05 • THREE VERTICALS
            </span>
            <div className="h-[2px] w-10 bg-[#1A1A1A] mx-auto"></div>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight uppercase">
            Core Strategic Solution Spaces
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6B7280]">
            From silicon-level physical layer algorithms to complete electronic warfare transceivers and wire-speed test instrumentation.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 p-1.5 rounded-sm bg-[#F3F4F6] border border-[#E5E7EB] max-w-2xl mx-auto mb-12">
          {VERTICALS.map((vertical) => {
            const isActive = activeTab === vertical.id;
            return (
              <button
                key={vertical.id}
                id={`vertical-${vertical.id}`}
                onClick={() => setActiveTab(vertical.id)}
                className={`flex-1 min-w-[150px] flex items-center justify-center gap-2.5 py-3 px-4 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
                  isActive
                    ? 'bg-[#1A1A1A] text-white shadow-sm'
                    : 'text-[#6B7280] hover:text-[#1A1A1A] hover:bg-white'
                }`}
              >
                {getVerticalIcon(vertical.id)}
                <span>{vertical.title.split(' ')[0]} {vertical.title.split(' ')[1]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Vertical Content Card */}
        <div className="rounded-sm bg-white border border-[#E5E7EB] shadow-2xl overflow-hidden relative">
          <div className="p-8 sm:p-12 lg:p-14">
            {/* Top Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <span className="text-[#3B82F6] text-xs font-mono font-bold uppercase tracking-widest block mb-2">
                    {activeVertical.tagline}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] tracking-tight">
                    {activeVertical.title}
                  </h3>
                </div>

                <div className="h-[1px] w-16 bg-[#1A1A1A]"></div>

                <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                  {activeVertical.description}
                </p>

                {/* Key Features List */}
                <div className="pt-4 space-y-3">
                  <h4 className="text-xs uppercase font-mono tracking-widest text-[#1A1A1A] font-bold">
                    Core Technical Specifications & Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeVertical.keyFeatures.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-sm bg-[#F9FAFB] border border-[#E5E7EB] text-xs text-[#1A1A1A]"
                      >
                        <div className="w-4 h-4 rounded-sm bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#2563EB]" />
                        </div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sub-capability Cards */}
              <div className="lg:col-span-4 space-y-3">
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#1A1A1A] font-bold mb-2">
                  Sub-System Architecture
                </h4>
                {activeVertical.subCapabilities.map((sub, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-sm bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#1A1A1A] transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wide">{sub.title}</h5>
                      <span className="px-2 py-0.5 rounded-sm text-[10px] font-mono bg-white text-[#2563EB] border border-[#E5E7EB] font-bold">
                        {sub.metrics}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-[#6B7280] leading-relaxed">
                      {sub.description}
                    </p>
                  </div>
                ))}

                <button
                  onClick={() => onSelectProduct(getRelatedProductId(activeVertical.id))}
                  className="w-full mt-4 py-3 px-4 bg-[#1A1A1A] hover:bg-black text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 rounded-sm transition-all shadow-sm"
                >
                  <span>View Product Datasheet</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Geometric Balance Divider */}
          <div className="h-2 w-full bg-[#E5E7EB] flex">
            <div className="w-1/3 h-full bg-[#3B82F6]"></div>
            <div className="w-1/4 h-full bg-[#1A1A1A]"></div>
          </div>

          {/* Bottom Confidential Badge */}
          <div className="px-8 py-3 bg-[#F9FAFB] border-t border-[#E5E7EB] flex items-center justify-between text-[11px] font-mono text-[#6B7280]">
            <span>DOMAIN: {activeVertical.title.toUpperCase()}</span>
            <span>BigCat Wireless Confidential, V1.0</span>
          </div>
        </div>
      </div>
    </section>
  );
};
