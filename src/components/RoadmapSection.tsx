import React, { useState } from 'react';
import { ROADMAP_ITEMS } from '../data/presentationData';
import { Calendar, CheckCircle2, ArrowRight, ShieldCheck, Radio, Cpu, Sparkles } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  return (
    <section id="roadmap" className="py-16 sm:py-24 border-b border-[#E5E7EB] bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="space-y-2 mb-3">
            <span className="text-[#3B82F6] text-xs font-bold uppercase tracking-[0.25em]">
              SLIDES 06 & 07 • STRATEGIC HORIZON
            </span>
            <div className="h-[2px] w-10 bg-[#1A1A1A] mx-auto"></div>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight uppercase">
            2026–2027 Strategic Roadmap
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6B7280]">
            From active operator trials and field validations to next-generation integrated DU+RU SoC platforms and indigenous satellite modems.
          </p>
        </div>

        {/* Horizontal Timeline Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {ROADMAP_ITEMS.map((item, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className={`p-6 rounded-sm border text-left flex flex-col justify-between transition-all relative ${
                  isSelected
                    ? 'bg-white border-[#1A1A1A] shadow-xl ring-1 ring-[#1A1A1A]'
                    : 'bg-[#F8F9FA] border-[#E5E7EB] hover:border-[#9CA3AF] text-[#4B5563]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#2563EB]">
                      {item.year}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-sm uppercase ${
                        idx === 0
                          ? 'bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]'
                          : idx === 1
                          ? 'bg-[#EFF6FF] text-[#1E40AF] border border-[#BFDBFE]'
                          : 'bg-[#F3F4F6] text-[#374151] border border-[#E5E7EB]'
                      }`}
                    >
                      {item.statusBadge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#1A1A1A] tracking-tight mt-1">
                    {item.target}
                  </h3>
                  <span className="text-xs text-[#6B7280] font-mono mt-1 block">
                    Domain: {item.vertical}
                  </span>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5E7EB] text-[11px] font-mono text-[#1A1A1A] font-semibold flex items-center justify-between">
                  <span>{item.items.length} Key Deliverables</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-[#1A1A1A]' : 'text-[#9CA3AF]'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Phase Detail Focus Card */}
        {(() => {
          const activeItem = ROADMAP_ITEMS[selectedIdx] || ROADMAP_ITEMS[0];
          return (
            <div className="p-8 sm:p-10 rounded-sm bg-[#F8F9FA] border border-[#E5E7EB] shadow-2xl relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E7EB] pb-6 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-sm bg-white text-[#2563EB] border border-[#E5E7EB]">
                      {activeItem.year}
                    </span>
                    <span className="text-xs font-mono uppercase text-[#6B7280]">
                      Status: <strong className="text-[#1A1A1A]">{activeItem.statusBadge}</strong>
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-[#1A1A1A]">
                    {activeItem.target}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B7280] mt-1 max-w-2xl font-mono">
                    Focus Vertical: {activeItem.vertical}
                  </p>
                </div>
              </div>

              {/* Milestones Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeItem.items.map((deliv, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-sm bg-white border border-[#E5E7EB] shadow-sm flex items-start gap-3 hover:border-[#1A1A1A] transition-colors"
                  >
                    <div className="w-5 h-5 rounded-sm bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#1A1A1A] tracking-tight">{deliv}</h4>
                      <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[#F9FAFB] text-[#2563EB] border border-[#E5E7EB]">
                        {activeItem.year} Target
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};
