import React, { useState } from 'react';
import { EXPERTISE_PILLARS } from '../data/presentationData';
import { Radio, Satellite, Layers, ShieldCheck, Check, ArrowRight, Zap, Cpu, Clock, Activity, Terminal } from 'lucide-react';

export const OruArchitectureSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'oru' | 'pillars'>('oru');

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#2563EB]" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-[#2563EB]" />;
      case 'CheckCircle2':
        return <ShieldCheck className="w-5 h-5 text-[#059669]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#2563EB]" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#D97706]" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-[#1A1A1A]" />;
      default:
        return <Layers className="w-5 h-5 text-[#2563EB]" />;
    }
  };

  const architectureLayers = [
    {
      name: 'eCPRI & Timing Layer',
      description: 'O-RAN C/U/S/M Plane parsing with sub-nanosecond IEEE 1588v2 Precision Time Protocol.',
      protocol: 'Split 7.2x Fronthaul'
    },
    {
      name: 'Digital Beamforming & FFT',
      description: 'Spatial filtering and multi-beam weights calculation for up to 64T64R massive MIMO antenna arrays.',
      protocol: 'Cat A & Cat B O-RU'
    },
    {
      name: 'CFR & DPD Acceleration',
      description: 'Embedded Crest Factor Reduction and Digital Pre-Distortion to maximize Power Amplifier efficiency.',
      protocol: 'Hardware Accelerated'
    },
    {
      name: 'Multi-Band RF Transceiver',
      description: 'Direct RF sampling and conversion across sub-6 GHz and satellite NTN L/S/C frequencies.',
      protocol: 'Wideband 30MHz - 6GHz'
    }
  ];

  return (
    <section id="architecture" className="py-16 sm:py-24 border-b border-[#E5E7EB] bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="space-y-2 mb-3">
            <span className="text-[#3B82F6] text-xs font-bold uppercase tracking-[0.25em]">
              SLIDES 08–12 • TECHNICAL ARCHITECTURE
            </span>
            <div className="h-[2px] w-10 bg-[#1A1A1A] mx-auto"></div>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight uppercase">
            5G O-RU & Deep Physical Layer Expertise
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6B7280]">
            Carrier-grade O-RAN Split 7.2x physical layer DSP, massive MIMO beamforming up to 64T64R, and extreme Doppler compensation.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center gap-2 p-1.5 rounded-sm bg-[#F3F4F6] border border-[#E5E7EB] max-w-md mx-auto mb-12">
          <button
            onClick={() => setActiveTab('oru')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'oru'
                ? 'bg-[#1A1A1A] text-white shadow-sm'
                : 'text-[#6B7280] hover:text-[#1A1A1A]'
            }`}
          >
            <Radio className="w-4 h-4" />
            <span>5G O-RU Architecture</span>
          </button>

          <button
            onClick={() => setActiveTab('pillars')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'pillars'
                ? 'bg-[#1A1A1A] text-white shadow-sm'
                : 'text-[#6B7280] hover:text-[#1A1A1A]'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>6 Core R&D Pillars</span>
          </button>
        </div>

        {/* Content Panel */}
        {activeTab === 'oru' ? (
          <div className="space-y-12">
            {/* O-RU 4-Layer Architecture Pipeline */}
            <div className="rounded-sm bg-[#F8F9FA] border border-[#E5E7EB] p-8 shadow-xl">
              <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] uppercase tracking-tight">
                    O-RAN Option 7.2x Low-PHY Pipeline
                  </h3>
                  <p className="text-xs text-[#6B7280] font-mono mt-0.5">
                    Carrier-grade hardware acceleration from eCPRI fronthaul to RF transceivers
                  </p>
                </div>
                <span className="hidden sm:inline-block px-3 py-1 bg-white border border-[#E5E7EB] rounded-sm text-xs font-mono text-[#1A1A1A] font-bold">
                  Split 7.2x
                </span>
              </div>

              {/* 4 Pipeline Stages in Geometric Flow */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {architectureLayers.map((layer, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-sm bg-white border border-[#E5E7EB] flex flex-col justify-between shadow-sm relative group hover:border-[#1A1A1A] transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-sm bg-[#F3F4F6] text-[#1A1A1A] border border-[#E5E7EB]">
                          STAGE 0{idx + 1}
                        </span>
                        <div className="w-2 h-2 bg-[#3B82F6] transform rotate-45" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1A1A1A] tracking-tight">{layer.name}</h4>
                      <p className="text-xs text-[#6B7280] mt-2 leading-relaxed">{layer.description}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#E5E7EB] text-[11px] font-mono text-[#2563EB] font-bold">
                      {layer.protocol}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights Box */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
              <div className="p-5 rounded-sm bg-[#F8F9FA] border border-[#E5E7EB]">
                <span className="text-[#6B7280] block text-[10px] uppercase font-bold">MIMO Capacity:</span>
                <span className="text-[#1A1A1A] font-bold text-sm mt-1 block">Up to 64T64R Antenna Arrays</span>
                <p className="text-[#6B7280] text-xs font-sans mt-2">Zero packet drop across full wire-speed 100MHz NR carriers.</p>
              </div>

              <div className="p-5 rounded-sm bg-[#F8F9FA] border border-[#E5E7EB]">
                <span className="text-[#6B7280] block text-[10px] uppercase font-bold">Synchronization:</span>
                <span className="text-[#2563EB] font-bold text-sm mt-1 block">IEEE 1588v2 Telecom Profile</span>
                <p className="text-[#6B7280] text-xs font-sans mt-2">Sub-nanosecond phase alignment conforming to G.8275.1 standards.</p>
              </div>

              <div className="p-5 rounded-sm bg-[#F8F9FA] border border-[#E5E7EB]">
                <span className="text-[#6B7280] block text-[10px] uppercase font-bold">Efficiency:</span>
                <span className="text-[#059669] font-bold text-sm mt-1 block">FPGA Crest Factor Reduction</span>
                <p className="text-[#6B7280] text-xs font-sans mt-2">Maximizes PA power added efficiency (PAE) with adaptive DPD.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERTISE_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-sm bg-[#F8F9FA] border border-[#E5E7EB] shadow-md flex flex-col justify-between hover:border-[#1A1A1A] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-sm bg-white border border-[#E5E7EB]">
                      {getPillarIcon(pillar.icon)}
                    </div>
                    <span className="text-[10px] font-mono text-[#9CA3AF] font-bold uppercase">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[#1A1A1A] uppercase tracking-tight">{pillar.title}</h4>
                  <div className="h-[1px] w-8 bg-[#1A1A1A] my-3"></div>
                  <p className="text-xs text-[#4B5563] leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
