import React from 'react';
import { CAPABILITIES_MATRIX } from '../data/presentationData';
import { Cpu, FileCode2, Layers, Briefcase, CheckCircle2 } from 'lucide-react';

export const MatrixSection: React.FC = () => {
  const quadrants = [
    {
      id: 'products',
      title: 'Products (Slide 19)',
      description: 'Carrier-grade physical cellular stations, high-bandwidth test instruments, and deployable tactical units.',
      targetAudience: 'Turnkey Hardware Systems & Subsystems',
      items: CAPABILITIES_MATRIX.products.map(p => `${p.title}: ${p.desc}`)
    },
    {
      id: 'ips',
      title: 'Intellectual Property (IP)',
      description: 'Silicon-proven RTL IP cores, FPGA bitstreams, and licensed physical layer algorithms.',
      targetAudience: 'Semiconductor OEMs & Defense System Integrators',
      items: CAPABILITIES_MATRIX.ips.map(p => `${p.title}: ${p.desc}`)
    },
    {
      id: 'solutions',
      title: 'Solutions & Turnkey Systems',
      description: 'Full-stack customized communications bubbles, waveform development, and electronic counter-countermeasures.',
      targetAudience: 'Telecom Operators (BSNL) & Defense Forces',
      items: CAPABILITIES_MATRIX.solutions.map(p => `${p.title}: ${p.desc}`)
    },
    {
      id: 'consultancy',
      title: 'R&D Consultancy & Testing',
      description: 'Expert RF architecture design, IEEE 1588v2 PTP timing audits, 3GPP conformance, and board bring-up.',
      targetAudience: 'Global Research Institutes & Telecom Tier-1s',
      items: CAPABILITIES_MATRIX.consultancy.map(p => `${p.title}: ${p.desc}`)
    }
  ];

  const getQuadrantIcon = (id: string) => {
    switch (id) {
      case 'products':
        return <Cpu className="w-5 h-5 text-[#2563EB]" />;
      case 'ips':
        return <FileCode2 className="w-5 h-5 text-[#2563EB]" />;
      case 'solutions':
        return <Layers className="w-5 h-5 text-[#059669]" />;
      case 'consultancy':
        return <Briefcase className="w-5 h-5 text-[#D97706]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#2563EB]" />;
    }
  };

  return (
    <section id="matrix" className="py-16 sm:py-24 border-b border-[#E5E7EB] bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="space-y-2 mb-3">
            <span className="text-[#3B82F6] text-xs font-bold uppercase tracking-[0.25em]">
              SLIDE 19 • 4-QUADRANT ENGAGEMENT
            </span>
            <div className="h-[2px] w-10 bg-[#1A1A1A] mx-auto"></div>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight uppercase">
            Comprehensive Capabilities Matrix
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6B7280]">
            Four commercial engagement models tailored for defense prime contractors, tier-1 telecom operators, and specialized test labs.
          </p>
        </div>

        {/* 4 Quadrants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quadrants.map((quadrant) => (
            <div
              key={quadrant.id}
              className="p-8 rounded-sm bg-white border border-[#E5E7EB] hover:border-[#1A1A1A] transition-all shadow-xl hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-sm bg-[#F9FAFB] border border-[#E5E7EB]">
                      {getQuadrantIcon(quadrant.id)}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#9CA3AF] uppercase tracking-widest block font-bold">
                        QUADRANT {quadrant.id.toUpperCase()}
                      </span>
                      <h3 className="text-xl font-bold text-[#1A1A1A] tracking-tight">
                        {quadrant.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="h-[1px] w-12 bg-[#1A1A1A] my-4"></div>

                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6">
                  {quadrant.description}
                </p>

                {/* Items List */}
                <div className="space-y-2.5">
                  {quadrant.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-sm bg-[#F9FAFB] border border-[#E5E7EB] text-xs text-[#1A1A1A]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Engagement Footer */}
              <div className="mt-8 pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-mono">
                <span className="text-[#6B7280]">Engagement Model:</span>
                <span className="text-[#1A1A1A] font-bold uppercase">{quadrant.targetAudience}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
