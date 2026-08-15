import React from 'react';
import { ProductItem } from '../types';
import { X, CheckCircle2, Download, ShieldCheck, Radio, Cpu, Satellite, Calendar, Sparkles, Layers } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const handleDownloadDatasheet = () => {
    const content = `BIGCAT WIRELESS - TECHNICAL SPECIFICATION SHEET\n` +
      `Product: ${product.name}\n` +
      `Subtitle: ${product.subtitle}\n` +
      `Status: ${product.status} ${product.releaseDate ? '(' + product.releaseDate + ')' : ''}\n` +
      `Domain: ${product.verticalLabel}\n\n` +
      `SUMMARY:\n${product.summary}\n\n` +
      `KEY HIGHLIGHTS:\n` +
      product.highlights.map((h) => `- ${h}`).join('\n') +
      `\n\nSPECIFICATIONS:\n` +
      product.specs.map((s) => `${s.label}: ${s.value}`).join('\n') +
      `\n\nFORM FACTORS:\n` +
      product.formFactors.map((f) => `- ${f}`).join('\n') +
      `\nSTANDARDS COMPLIANCE:\n` +
      product.standards.map((st) => `- ${st}`).join('\n') +
      `\nBigCat Wireless Private Limited, IIT Madras Research Park, Chennai, India\n` +
      `Contact: bigcat@bigcatwireless.com / kannan@bigcatwireless.com\n`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${product.id}_technical_datasheet.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-sm bg-white border border-[#E5E7EB] shadow-2xl overflow-hidden my-8">
        {/* Modal Top Bar */}
        <div className="p-6 sm:p-8 bg-[#F8F9FA] border-b border-[#E5E7EB] flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-sm text-[11px] font-mono font-bold bg-white text-[#2563EB] border border-[#E5E7EB]">
                {product.verticalLabel}
              </span>
              <span className="px-2.5 py-0.5 rounded-sm text-[11px] font-mono font-bold bg-[#F3F4F6] text-[#374151] border border-[#E5E7EB]">
                {product.status} {product.releaseDate && `• ${product.releaseDate}`}
              </span>
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#1A1A1A]">{product.name}</h2>
            <p className="text-xs sm:text-sm font-mono text-[#2563EB] mt-1 font-semibold">{product.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-sm bg-white hover:bg-[#F3F4F6] text-[#6B7280] hover:text-[#1A1A1A] border border-[#E5E7EB] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[70vh] overflow-y-auto">
          {/* Summary & Tagline */}
          <div className="p-5 rounded-sm bg-[#F9FAFB] border border-[#E5E7EB]">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A] font-bold mb-2">
              System Overview & Architecture
            </h3>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">{product.summary}</p>
          </div>

          {/* Key Highlights */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A] font-bold mb-3">
              Key Engineering Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-sm bg-[#F9FAFB] border border-[#E5E7EB] text-xs text-[#1A1A1A]"
                >
                  <div className="w-4 h-4 rounded-sm bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-[#2563EB]" />
                  </div>
                  <span className="font-medium">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications Table */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A] font-bold mb-3">
              Full Parametric Specifications
            </h3>
            <div className="rounded-sm border border-[#E5E7EB] overflow-hidden bg-white">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-[#F3F4F6] border-b border-[#E5E7EB] text-[#1A1A1A]">
                  <tr>
                    <th className="p-3 font-bold uppercase">Parameter</th>
                    <th className="p-3 font-bold uppercase">Specification / Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E7EB] text-[#4B5563]">
                  {product.specs.map((spec, idx) => (
                    <tr key={idx} className="hover:bg-[#F9FAFB]">
                      <td className="p-3 text-[#6B7280] font-semibold">{spec.label}</td>
                      <td
                        className={`p-3 font-bold ${
                          spec.highlight ? 'text-[#1A1A1A]' : 'text-[#374151]'
                        }`}
                      >
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Form Factors & Standards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-5 rounded-sm bg-[#F9FAFB] border border-[#E5E7EB]">
              <h4 className="text-xs font-mono uppercase text-[#1A1A1A] font-bold mb-3">
                Available Form Factors
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.formFactors.map((form, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-sm text-xs font-mono bg-white text-[#4B5563] border border-[#E5E7EB]"
                  >
                    {form}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-sm bg-[#F9FAFB] border border-[#E5E7EB]">
              <h4 className="text-xs font-mono uppercase text-[#1A1A1A] font-bold mb-3">
                Standards & Compliance
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.standards.map((std, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-sm text-xs font-mono bg-white text-[#2563EB] border border-[#E5E7EB] font-bold"
                  >
                    {std}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-[#F8F9FA] border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-[#6B7280]">
            IIT Madras Research Park • BigCat Wireless Confidential V1.0
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleDownloadDatasheet}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm bg-white hover:bg-[#F3F4F6] text-[#1A1A1A] text-xs font-bold uppercase tracking-wider transition-colors border border-[#E5E7EB]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Datasheet</span>
            </button>

            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-sm bg-[#1A1A1A] hover:bg-black text-white text-xs font-bold uppercase tracking-widest transition-colors shadow-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
