import React from 'react';
import { COMPANY_INFO } from '../data/presentationData';
import { ArrowUp, Mail, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenDeck: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDeck }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E5E7EB] bg-white text-[#4B5563] text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & Address */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#1A1A1A] flex items-center justify-center rounded-sm">
                <div className="w-4 h-4 border-2 border-white transform rotate-45"></div>
              </div>
              <span className="text-base font-bold text-[#1A1A1A] tracking-tight uppercase">
                BigCat <span className="font-light text-[#2563EB]">Wireless</span>
              </span>
            </div>
            <p className="text-[#6B7280] text-xs leading-relaxed max-w-md font-sans">
              Pioneers in carrier-grade 5G Open RAN Radio Units (O-RU Split 7.2x), Non-Terrestrial Network (NTN) Doppler-resilient baseband algorithms, and tactical defense SDRs.
            </p>
            <div className="text-[11px] text-[#9CA3AF] space-y-0.5 pt-2">
              <p className="text-[#4B5563] font-bold">{COMPANY_INFO.location.address}</p>
              <p>{COMPANY_INFO.location.street}, {COMPANY_INFO.location.city}</p>
            </div>
          </div>

          {/* Quick Technology Links */}
          <div className="space-y-2 font-sans">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#1A1A1A]">
              Technology Domains
            </h4>
            <ul className="space-y-2 text-xs text-[#6B7280]">
              <li>
                <a href="#vertical-5g-oru" className="hover:text-[#1A1A1A] transition-colors">
                  5G O-RU & Massive MIMO
                </a>
              </li>
              <li>
                <a href="#vertical-5g-test" className="hover:text-[#1A1A1A] transition-colors">
                  Fronthaul 100G Test Equipment
                </a>
              </li>
              <li>
                <a href="#vertical-defense" className="hover:text-[#1A1A1A] transition-colors">
                  V/UHF SDR Tactical MANET
                </a>
              </li>
              <li>
                <a href="#simulators" className="hover:text-[#1A1A1A] transition-colors">
                  WiCatEye Real-Time IQ Lab
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-[#1A1A1A] transition-colors">
                  2027 Strategic Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Presentation & Contact */}
          <div className="space-y-2 font-sans">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#1A1A1A]">
              Documentation & Inquiries
            </h4>
            <div className="space-y-2 text-xs">
              <button
                onClick={onOpenDeck}
                className="text-[#2563EB] hover:underline flex items-center gap-1.5 font-mono"
              >
                <span>Launch 19-Slide Deck Viewer</span>
                <ExternalLink className="w-3 h-3" />
              </button>
              <p className="text-[#6B7280] font-mono text-[11px]">
                Direct R&D Contact:<br />
                <a href={`mailto:${COMPANY_INFO.contacts.general}`} className="text-[#1A1A1A] hover:text-[#2563EB] font-bold">
                  {COMPANY_INFO.contacts.general}
                </a>
              </p>
              <p className="text-[#9CA3AF] font-mono text-[10px]">
                Doc Version {COMPANY_INFO.version} ({COMPANY_INFO.date})
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6B7280]">
          <div className="flex items-center gap-3">
            <span>{COMPANY_INFO.confidentiality}</span>
            <span>•</span>
            <span className="text-[#1A1A1A] font-semibold">Design in India • Make in India</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#6B7280] hover:text-[#1A1A1A] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
