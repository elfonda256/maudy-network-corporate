import React, { useState } from 'react';
import { 
  Ship, HardHat, Factory, ShoppingCart, Truck, Building2, 
  ShieldCheck, Activity, Zap, Layers, Recycle, Briefcase, 
  ChevronRight, ArrowRight, CheckCircle2, AlertCircle
} from 'lucide-react';
import { INDUSTRIES, type IndustryItem } from '../data/aegisData';

interface Props {
  onSelectProduct: (productId: string) => void;
  onOpenDemo: (prefilled?: string) => void;
}

export const AegisIndustrySection: React.FC<Props> = ({ onSelectProduct, onOpenDemo }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem>(INDUSTRIES[0]);

  const industryIcons: Record<string, React.ElementType> = {
    'maritime': Ship,
    'construction': HardHat,
    'manufacturing': Factory,
    'procurement': ShoppingCart,
    'logistics': Truck,
    'government': Building2,
    'finance': ShieldCheck,
    'healthcare': Activity,
    'energy': Zap,
    'industrial-estate': Layers,
    'waste-management': Recycle,
    'enterprise-corporate': Briefcase,
  };

  return (
    <section id="industri" className="relative py-28 bg-[#020204] border-t border-white/[0.06] overflow-hidden text-left">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#86868B] text-xs font-mono">
            <span>SEKTOR INDUSTRI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight font-sans">
            AI untuk Berbagai Industri.
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] leading-relaxed font-sans">
            Setiap industri memiliki tantangan operasional dan regulasi yang unik. Kami membangun arsitektur AI yang disesuaikan secara presisi dengan alur kerja spesifik bidang usaha Anda.
          </p>
        </div>

        {/* 12 Industry Bento Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
          {INDUSTRIES.map((ind) => {
            const Icon = industryIcons[ind.id] || Building2;
            const isSelected = selectedIndustry.id === ind.id;
            return (
              <div
                key={ind.id}
                onClick={() => setSelectedIndustry(ind)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white/[0.08] border-[#2997FF]/60 shadow-lg scale-[1.01]'
                    : 'bg-[#0A0A0D]/70 border-white/[0.06] hover:bg-white/[0.04]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-[#86868B] px-1.5 py-0.5 rounded bg-white/[0.04]">
                      {ind.code}
                    </span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#2997FF]' : 'text-[#6E6E73]'}`} />
                  </div>
                  <h3 className={`text-sm font-semibold font-sans ${isSelected ? 'text-white' : 'text-[#D2D2D7]'}`}>
                    {ind.name}
                  </h3>
                  <div className="text-[10px] text-[#86868B] mt-0.5 truncate font-sans">
                    {ind.metricDemo}
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-white/[0.04] flex items-center justify-between text-[10px]">
                  <span className={isSelected ? 'text-[#2997FF] font-medium' : 'text-[#6E6E73]'}>
                    {isSelected ? 'Dipilih' : 'Detail'}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-[#2997FF]' : 'text-[#6E6E73]'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Industry Details Bento */}
        <div className="apple-card p-6 sm:p-10 rounded-3xl bg-[#0F0F12]/80 border border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
            <div>
              <span className="text-xs font-mono text-[#2997FF] block">
                {selectedIndustry.code} • {selectedIndustry.tagline}
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white font-sans mt-0.5">
                {selectedIndustry.name}
              </h3>
            </div>

            <button
              onClick={() => onOpenDemo(`Solusi Industri: ${selectedIndustry.name}`)}
              className="apple-pill-btn inline-flex items-center px-5 py-2.5 bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-medium transition-all cursor-pointer shadow-sm self-start sm:self-auto"
            >
              <span>Konsultasi Sektor Ini</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <p className="text-sm text-[#A1A1A6] leading-relaxed mt-4 font-sans">
            {selectedIndustry.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
              <div className="text-xs font-sans font-semibold text-[#FFBD2E] flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" /> Tantangan Utama Sektor:
              </div>
              <ul className="space-y-2 text-xs text-[#86868B] font-sans">
                {selectedIndustry.challenges.map((c, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-[#FFBD2E] font-bold">•</span>
                    <span className="leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
              <div className="text-xs font-sans font-semibold text-[#2997FF] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Pendekatan Solusi Aegis AI:
              </div>
              <ul className="space-y-2 text-xs text-[#D2D2D7] font-sans">
                {selectedIndustry.solutions.map((s, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-[#2997FF] font-bold">•</span>
                    <span className="leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-[#86868B] font-sans">
              Solusi yang Direkomendasikan:
            </span>
            <div className="flex flex-wrap gap-2">
              {selectedIndustry.matchingProducts.map((pId) => (
                <button
                  key={pId}
                  onClick={() => onSelectProduct(pId)}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-[#2997FF] border border-white/[0.08] hover:bg-white/[0.08] transition-colors cursor-pointer"
                >
                  {pId.toUpperCase()} ›
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
