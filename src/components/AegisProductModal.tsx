import React, { useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Layers, Building2 } from 'lucide-react';
import type { ProductItem } from '../data/aegisData';
import { DashboardMockupRenderer } from './DashboardMockupRenderer';
import { ProductVisualIllustration } from './ProductVisualIllustration';

interface Props {
  product: ProductItem | null;
  onClose: () => void;
  onOpenDemo: (productName: string) => void;
}

export const AegisProductModal: React.FC<Props> = ({ product, onClose, onOpenDemo }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-3xl animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-[#0F0F12] border border-white/[0.12] rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-[#141418]/90 border-b border-white/[0.06] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <span className="w-2 h-2 rounded-full bg-[#2997FF]"></span>
            <span className="font-mono text-xs text-[#86868B] uppercase tracking-wider">
              {product.category.toUpperCase()} • SPESIFIKASI PRODUK
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center text-[#86868B] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          
          {/* Header Title Section */}
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white font-sans">
              {product.name}
            </h2>
            <div className="text-base text-[#2997FF] font-sans font-light">
              {product.tagline}
            </div>
            <p className="text-sm text-[#A1A1A6] leading-relaxed font-sans pt-1">
              {product.description}
            </p>
          </div>

          {/* Visual Artwork Showcase (Tailored Photo / Vector Asset) */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#86868B] mb-2">
              Visual Architecture Showcase:
            </div>
            <ProductVisualIllustration product={product} className="h-56 sm:h-64" />
          </div>

          {/* Interactive Software Dashboard Mockup */}
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-[#86868B] flex items-center justify-between">
              <span>Interactive Telemetry Preview</span>
              <span className="text-[#2997FF]">Demo Environment</span>
            </div>
            <DashboardMockupRenderer product={product} interactive={true} />
          </div>

          {/* Enterprise Metrics Highlight */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {product.metrics.map((metric, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left">
                <div className="text-[10px] font-mono text-[#86868B] uppercase">{metric.label}</div>
                <div className="text-base font-semibold text-white font-mono mt-0.5">{metric.value}</div>
                <div className="text-[11px] text-[#86868B] mt-1 font-sans">{metric.desc}</div>
              </div>
            ))}
          </div>

          {/* Key Features Complete List */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white font-sans flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#2997FF]" />
              Fitur Lengkap Enterprise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#D2D2D7] font-sans">
              {product.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start space-x-2 bg-white/[0.02] p-3 rounded-xl border border-white/[0.04]">
                  <CheckCircle2 className="w-4 h-4 text-[#2997FF] shrink-0 mt-0.5" />
                  <span className="leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Industries & Use Cases */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-white font-sans flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#2997FF]" /> Target Sektor:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {product.targetIndustries.map((ind, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-full text-xs font-sans bg-white/[0.04] text-[#A1A1A6] border border-white/[0.06]">
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-white font-sans flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Contoh Kasus Penggunaan:
              </h4>
              <ul className="space-y-1.5 text-xs text-[#86868B] font-sans">
                {product.useCases.map((uc, idx) => (
                  <li key={idx} className="flex items-start space-x-1.5">
                    <span className="text-[#2997FF] font-bold">•</span>
                    <span>{uc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Bottom CTA Bar */}
        <div className="bg-[#141418]/90 border-t border-white/[0.06] px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-[#86868B] font-mono">
            Deployment: On-Premise • Private Cloud • Hybrid Edge
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="apple-pill-btn px-4 py-2 text-xs font-medium text-[#86868B] hover:text-white transition-colors cursor-pointer"
            >
              Tutup
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenDemo(product.name);
              }}
              className="apple-pill-btn px-5 py-2.5 text-xs font-medium text-white bg-[#0071E3] hover:bg-[#0077ED] shadow-sm transition-all cursor-pointer"
            >
              Jadwalkan Demo {product.name}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
