import React from 'react';
import { ShieldCheck, Radio, Cpu, ChevronRight, Terminal, Activity, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/presentationData';

interface HeroSectionProps {
  onExploreProducts: () => void;
  onOpenDeck: () => void;
  onOpenSimulator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProducts,
  onOpenDeck,
  onOpenSimulator
}) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-[#E5E7EB] bg-[#F8F9FA]">
      {/* Background Geometric Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F3F4F6] -mr-32 -mt-32 rounded-full border border-[#E5E7EB] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Geometric Metadata Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E5E7EB] rounded-sm text-[#4B5563] text-xs font-mono">
            <div className="w-2 h-2 bg-[#3B82F6] transform rotate-45" />
            <span className="font-semibold uppercase tracking-wider">Deep Tech R&D • {COMPANY_INFO.location.address.split(',')[0]}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E5E7EB] rounded-sm text-[#1A1A1A] text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]" />
            <span className="uppercase tracking-wider">Design in India • Make in India</span>
          </div>

          <div className="inline-flex items-center px-3 py-1 bg-white border border-[#E5E7EB] rounded-sm text-[#6B7280] text-xs font-mono">
            <span>DOC V{COMPANY_INFO.version} ({COMPANY_INFO.date})</span>
          </div>
        </div>

        {/* Main Headline & Geometric Balance Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <span className="text-[#3B82F6] text-xs font-bold uppercase tracking-[0.25em] block">
                01. Sovereign Wireless Infrastructure
              </span>
              <div className="h-[2px] w-12 bg-[#1A1A1A]"></div>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#1A1A1A] leading-[1.15] tracking-tight">
              Sovereign innovation in{' '}
              <span className="font-extrabold text-[#1A1A1A]">5G O-RU, Test Systems</span>{' '}
              <span className="italic font-normal text-[#4B5563]">& Tactical Defense SDR</span>
            </h1>
            
            <p className="text-base sm:text-lg text-[#4B5563] max-w-3xl leading-relaxed">
              BigCat Wireless designs, engineers, and delivers carrier-grade <strong className="text-[#1A1A1A] font-semibold">Open RAN Radio Units (Option 7.2x)</strong>, 
              wire-speed <strong className="text-[#1A1A1A] font-semibold">100G Fronthaul Test Instrumentation</strong>, and battle-proven <strong className="text-[#1A1A1A] font-semibold">Tactical MANET & SatCom Modems</strong>.
            </p>

            {/* Action CTAs in Geometric Style */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center gap-3 px-7 h-12 bg-[#1A1A1A] hover:bg-black text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-md"
              >
                <span>Explore Portfolio</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenSimulator}
                className="inline-flex items-center gap-2 px-6 h-12 bg-white hover:bg-[#F9FAFB] border border-[#E5E7EB] text-[#1A1A1A] text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-sm"
              >
                <Activity className="w-4 h-4 text-[#3B82F6]" />
                <span>RF Lab Simulators</span>
              </button>

              <button
                onClick={onOpenDeck}
                className="inline-flex items-center gap-2 px-5 h-12 bg-transparent hover:bg-white text-[#4B5563] hover:text-[#1A1A1A] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all"
              >
                <span>Slide Deck (19)</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Metrics & System Specs Card */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-sm bg-white border border-[#E5E7EB] shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-[#1A1A1A] transform rotate-45" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#1A1A1A] font-bold">Engineering Telemetry</span>
                </div>
                <span className="px-2 py-0.5 rounded-sm text-[10px] font-mono bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE] font-bold">
                  ACTIVE
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-sm bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-between">
                  <span className="text-[#6B7280]">SDR Hopping:</span>
                  <span className="text-[#1A1A1A] font-bold">10,000 hops / s</span>
                </div>

                <div className="p-3 rounded-sm bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-between">
                  <span className="text-[#6B7280]">Fronthaul Split:</span>
                  <span className="text-[#2563EB] font-bold">O-RAN Split 7.2x</span>
                </div>

                <div className="p-3 rounded-sm bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-between">
                  <span className="text-[#6B7280]">MIMO Baseband:</span>
                  <span className="text-[#1A1A1A] font-bold">4T4R → 64T64R</span>
                </div>

                <div className="p-3 rounded-sm bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-between">
                  <span className="text-[#6B7280]">IQ Storage:</span>
                  <span className="text-[#1A1A1A] font-bold">6.4 TB NVMe SSD</span>
                </div>

                <div className="p-3 rounded-sm bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-between">
                  <span className="text-[#6B7280]">Timing Protocol:</span>
                  <span className="text-[#2563EB] font-bold">IEEE 1588v2 (PTP)</span>
                </div>
              </div>

              {/* Progress Line */}
              <div className="mt-5 pt-3 border-t border-[#E5E7EB] flex items-center justify-between text-[11px] font-mono text-[#6B7280]">
                <span>IIT Madras Research Park</span>
                <span className="text-[#1A1A1A] font-semibold">Block E, 8th Floor</span>
              </div>
              <div className="h-1.5 w-full bg-[#E5E7EB] flex mt-3">
                <div className="w-2/5 h-full bg-[#3B82F6]"></div>
                <div className="w-1/5 h-full bg-[#1A1A1A]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillar Quick Navigation Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="#vertical-5g-oru"
            className="group p-6 rounded-sm bg-white hover:bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#1A1A1A] transition-all shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 bg-[#F3F4F6] border border-[#E5E7EB] flex items-center justify-center rounded-sm text-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors">
                  <Radio className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-[#9CA3AF] uppercase tracking-widest">VERTICAL 01</span>
              </div>
              <h2 className="text-base font-bold text-[#1A1A1A] uppercase tracking-tight">
                5G O-RU & NTN PHY
              </h2>
              <p className="text-xs text-[#6B7280] mt-2 leading-relaxed">Massive MIMO up to 64T64R & Non-Terrestrial Satellite Networks</p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
              <span>Explore Domain</span>
              <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </a>

          <a
            href="#vertical-5g-test"
            className="group p-6 rounded-sm bg-white hover:bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#1A1A1A] transition-all shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 bg-[#F3F4F6] border border-[#E5E7EB] flex items-center justify-center rounded-sm text-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors">
                  <Cpu className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-[#9CA3AF] uppercase tracking-widest">VERTICAL 02</span>
              </div>
              <h2 className="text-base font-bold text-[#1A1A1A] uppercase tracking-tight">
                5G Test Equipment
              </h2>
              <p className="text-xs text-[#6B7280] mt-2 leading-relaxed">2x100GbE Fronthaul Testers, UE & gNB Emulators with CatNet-WCE</p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
              <span>Explore Domain</span>
              <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </a>

          <a
            href="#vertical-defense"
            className="group p-6 rounded-sm bg-white hover:bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#1A1A1A] transition-all shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 bg-[#F3F4F6] border border-[#E5E7EB] flex items-center justify-center rounded-sm text-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-[#9CA3AF] uppercase tracking-widest">VERTICAL 03</span>
              </div>
              <h2 className="text-base font-bold text-[#1A1A1A] uppercase tracking-tight">
                Defense Tactical Solutions
              </h2>
              <p className="text-xs text-[#6B7280] mt-2 leading-relaxed">TRL 6 SDR Manpack, SatCom Modems & 4G Network in a Box</p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
              <span>Explore Domain</span>
              <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
