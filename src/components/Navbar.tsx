import React from 'react';
import { Presentation, LayoutGrid, Search, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/presentationData';

interface NavbarProps {
  activeView: 'portal' | 'presentation';
  onViewChange: (view: 'portal' | 'presentation') => void;
  onOpenSearch: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onViewChange,
  onOpenSearch,
  onOpenContact
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E5E7EB] bg-white/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Geometric Brand Logo & Title */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onViewChange('portal')}
              className="flex items-center gap-3.5 group text-left focus:outline-none"
            >
              <div className="w-9 h-9 bg-[#1A1A1A] flex items-center justify-center rounded-sm transition-transform group-hover:scale-105">
                <div className="w-4 h-4 border-2 border-white transform rotate-45"></div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold tracking-tight text-[#1A1A1A] uppercase">
                    BigCat <span className="font-light text-[#3B82F6]">Wireless</span>
                  </span>
                  <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded-sm text-[10px] font-mono font-bold bg-[#F3F4F6] text-[#4B5563] border border-[#E5E7EB]">
                    V1.0
                  </span>
                </div>
                <p className="hidden md:block text-[11px] text-[#6B7280] font-mono tracking-wider uppercase">
                  IIT Madras Research Park • Chennai
                </p>
              </div>
            </button>
          </div>

          {/* Navigation Links with Geometric Tracking */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
            <a href="#verticals" className="hover:text-[#1A1A1A] transition-colors py-1 hover:border-b-2 hover:border-[#1A1A1A]">
              Solutions
            </a>
            <a href="#products" className="hover:text-[#1A1A1A] transition-colors py-1 hover:border-b-2 hover:border-[#1A1A1A]">
              Portfolio
            </a>
            <a href="#architecture" className="hover:text-[#1A1A1A] transition-colors py-1 hover:border-b-2 hover:border-[#1A1A1A]">
              5G & NTN
            </a>
            <a href="#simulators" className="hover:text-[#1A1A1A] transition-colors py-1 hover:border-b-2 hover:border-[#1A1A1A] flex items-center gap-1.5">
              <span className="w-2 h-2 bg-[#3B82F6] transform rotate-45"></span>
              RF Lab
            </a>
            <a href="#roadmap" className="hover:text-[#1A1A1A] transition-colors py-1 hover:border-b-2 hover:border-[#1A1A1A]">
              2027 Roadmap
            </a>
            <a href="#matrix" className="hover:text-[#1A1A1A] transition-colors py-1 hover:border-b-2 hover:border-[#1A1A1A]">
              Matrix
            </a>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Quick Search */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 rounded-sm bg-[#F9FAFB] border border-[#E5E7EB] text-[#4B5563] hover:text-[#1A1A1A] hover:bg-white text-xs transition-colors"
              title="Search specifications (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline font-mono uppercase tracking-wider text-[11px]">Search</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-mono bg-[#E5E7EB] rounded text-[#4B5563]">
                /
              </kbd>
            </button>

            {/* View Switcher: Interactive Portal vs Slide Deck */}
            <div className="flex items-center p-0.5 rounded-sm bg-[#F3F4F6] border border-[#E5E7EB]">
              <button
                onClick={() => onViewChange('portal')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeView === 'portal'
                    ? 'bg-white text-[#1A1A1A] shadow-sm border border-[#E5E7EB]'
                    : 'text-[#6B7280] hover:text-[#1A1A1A]'
                }`}
                title="Continuous Interactive Portal"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Portal</span>
              </button>
              <button
                onClick={() => onViewChange('presentation')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeView === 'presentation'
                    ? 'bg-white text-[#1A1A1A] shadow-sm border border-[#E5E7EB]'
                    : 'text-[#6B7280] hover:text-[#1A1A1A]'
                }`}
                title="19-Slide Presentation Deck"
              >
                <Presentation className="w-3.5 h-3.5" />
                <span>Deck (19)</span>
              </button>
            </div>

            {/* Contact Button */}
            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 bg-[#1A1A1A] hover:bg-black text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-colors shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact R&D</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

