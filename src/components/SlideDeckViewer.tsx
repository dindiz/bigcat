import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES_DATA, COMPANY_INFO } from '../data/presentationData';
import { SlideData } from '../types';
import { ChevronLeft, ChevronRight, Maximize, Minimize, LayoutGrid, CheckCircle2, Radio, Sparkles, MapPin, Building, ShieldCheck, Cpu, Satellite } from 'lucide-react';

interface SlideDeckViewerProps {
  initialSlide?: number;
  onExitPresentation: () => void;
}

export const SlideDeckViewer: React.FC<SlideDeckViewerProps> = ({
  initialSlide = 1,
  onExitPresentation
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(initialSlide - 1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showThumbnails, setShowThumbnails] = useState<boolean>(true);

  const currentSlide: SlideData = SLIDES_DATA[currentSlideIndex] || SLIDES_DATA[0];

  const handlePrev = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev < SLIDES_DATA.length - 1 ? prev + 1 : prev));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, isFullscreen]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const progressPercent = ((currentSlideIndex + 1) / SLIDES_DATA.length) * 100;

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] flex flex-col justify-between select-none">
      {/* Top Header Controls */}
      <header className="h-20 border-b border-[#E5E7EB] bg-white px-6 sm:px-10 flex items-center justify-between z-30 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-[#1A1A1A] flex items-center justify-center rounded-sm">
            <div className="w-4 h-4 border-2 border-white transform rotate-45"></div>
          </div>
          <div>
            <span className="font-bold tracking-tight text-lg uppercase text-[#1A1A1A]">BigCat Wireless</span>
            <span className="hidden sm:inline-block ml-3 text-xs font-mono text-[#6B7280]">Keynote Presentation</span>
          </div>
        </div>

        {/* Navigation Categories */}
        <div className="hidden lg:flex items-center gap-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
          <span className="text-[#1A1A1A] border-b-2 border-[#1A1A1A] pb-1">
            {currentSlide.category}
          </span>
        </div>

        {/* Slide Counter & Action Buttons */}
        <div className="flex items-center gap-3">
          <div className="text-xs sm:text-sm font-mono text-[#4B5563] font-bold">
            SLIDE {(currentSlideIndex + 1).toString().padStart(2, '0')} / {SLIDES_DATA.length.toString().padStart(2, '0')}
          </div>

          <button
            onClick={onExitPresentation}
            className="px-4 py-2 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-black transition-colors"
          >
            Portal View
          </button>

          <button
            onClick={() => setShowThumbnails(!showThumbnails)}
            className="p-2 border border-[#E5E7EB] hover:bg-[#F9FAFB] text-[#1A1A1A] rounded-sm text-xs font-mono hidden sm:block"
            title="Toggle Thumbnails"
          >
            {showThumbnails ? 'Hide Drawer' : 'Show Drawer'}
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-2 border border-[#E5E7EB] hover:bg-[#F9FAFB] text-[#1A1A1A] rounded-sm transition-colors"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Main Slide Area */}
      <main className="flex-1 flex flex-col justify-center items-center p-4 sm:p-8 lg:p-10 bg-[#F3F4F6] relative overflow-hidden bg-grid-pattern">
        {/* Decorative Geometric Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F8F9FA] -mr-32 -mt-32 rounded-full border border-[#E5E7EB] pointer-events-none" />

        {/* Main Slide White Card */}
        <section className="w-full max-w-5xl aspect-[16/9] min-h-[500px] rounded-sm bg-white border border-[#E5E7EB] shadow-2xl flex flex-col justify-between relative overflow-hidden z-10">
          <div className="p-8 sm:p-12 lg:p-14 flex-1 flex flex-col justify-between">
            {/* Slide Eyebrow & Top Bar */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#3B82F6] text-xs font-bold uppercase tracking-[0.25em]">
                  {currentSlide.slideNumber.toString().padStart(2, '0')}. {currentSlide.category}
                </span>
                <span className="text-xs font-mono text-[#6B7280]">
                  IIT Madras Research Park
                </span>
              </div>

              {/* Title & Geometric Line */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-[#1A1A1A] leading-tight tracking-tight">
                {currentSlide.title}
              </h2>

              {currentSlide.subtitle && (
                <p className="mt-2 text-xs sm:text-sm font-mono text-[#2563EB] font-bold">
                  {currentSlide.subtitle}
                </p>
              )}

              <div className="h-[2px] w-12 bg-[#1A1A1A] my-6"></div>

              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed max-w-3xl">
                {currentSlide.summaryText}
              </p>
            </div>

            {/* Slide Body: Bullets or Table */}
            <div className="my-auto py-4">
              {currentSlide.bulletPoints && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentSlide.bulletPoints.map((bullet, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-sm bg-[#F9FAFB] border border-[#E5E7EB] flex items-start gap-3 text-xs text-[#1A1A1A]"
                    >
                      <div className="w-4 h-4 rounded-sm bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-[#2563EB]" />
                      </div>
                      <span className="font-medium leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Table Data */}
              {currentSlide.tableData && (
                <div className="rounded-sm border border-[#E5E7EB] overflow-hidden bg-white">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-[#F3F4F6] border-b border-[#E5E7EB] text-[#1A1A1A]">
                      <tr>
                        {currentSlide.tableData.headers.map((header, idx) => (
                          <th key={idx} className="p-3 font-bold uppercase">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E7EB] text-[#4B5563]">
                      {currentSlide.tableData.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-[#F9FAFB]">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="p-3 font-medium">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Key Highlights */}
              {currentSlide.keyHighlights && (
                <div className="flex flex-wrap gap-3 mt-4">
                  {currentSlide.keyHighlights.map((hl, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-sm bg-[#F9FAFB] border border-[#E5E7EB] text-xs font-mono"
                    >
                      <span className="text-[#6B7280] block text-[10px] uppercase font-bold">{hl.label}</span>
                      <span className="text-[#1A1A1A] font-bold">{hl.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Confidential Footer */}
            <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-4 text-[11px] font-mono text-[#6B7280]">
              <span>{currentSlide.confidentialFooter}</span>
              <span>BigCat Wireless Private Limited</span>
            </div>
          </div>

          {/* Geometric Balance Bottom Progress Line */}
          <div className="h-2 w-full bg-[#E5E7EB] flex">
            <div
              className="h-full bg-[#3B82F6] transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </section>

        {/* Floating Geometric Bottom Navigation Controls */}
        <div className="mt-6 flex items-center gap-4 z-20">
          <button
            onClick={handlePrev}
            disabled={currentSlideIndex === 0}
            className="w-12 h-12 flex items-center justify-center border border-[#E5E7EB] bg-white hover:bg-[#F9FAFB] disabled:opacity-30 text-[#1A1A1A] rounded-sm transition-all shadow-sm"
            title="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="px-4 py-2 rounded-sm bg-white border border-[#E5E7EB] text-xs font-mono text-[#1A1A1A] font-bold shadow-sm">
            {currentSlideIndex + 1} of {SLIDES_DATA.length}
          </div>

          <button
            onClick={handleNext}
            disabled={currentSlideIndex === SLIDES_DATA.length - 1}
            className="w-12 h-12 flex items-center justify-center border border-[#E5E7EB] bg-white hover:bg-[#F9FAFB] disabled:opacity-30 text-[#1A1A1A] rounded-sm transition-all shadow-sm"
            title="Next Slide (Space / Right Arrow)"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </main>

      {/* Thumbnails Bottom Drawer */}
      {showThumbnails && (
        <footer className="h-28 border-t border-[#E5E7EB] bg-white px-6 py-3 flex items-center gap-3 overflow-x-auto shadow-inner">
          {SLIDES_DATA.map((slide, idx) => {
            const isCurrent = currentSlideIndex === idx;
            return (
              <button
                key={slide.slideNumber}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`flex-shrink-0 w-36 h-20 p-2.5 rounded-sm border text-left flex flex-col justify-between transition-all ${
                  isCurrent
                    ? 'bg-[#F9FAFB] border-[#1A1A1A] shadow-md ring-1 ring-[#1A1A1A]'
                    : 'bg-white border-[#E5E7EB] text-[#6B7280] hover:border-[#9CA3AF] hover:text-[#1A1A1A]'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className={isCurrent ? 'text-[#2563EB] font-bold' : 'text-[#9CA3AF]'}>
                    #{slide.slideNumber.toString().padStart(2, '0')}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider truncate max-w-[65px]">{slide.category}</span>
                </div>
                <span className="text-[11px] font-bold text-[#1A1A1A] truncate block leading-tight">
                  {slide.title}
                </span>
              </button>
            );
          })}
        </footer>
      )}
    </div>
  );
};
