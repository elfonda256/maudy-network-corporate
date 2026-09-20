import React, { useState } from 'react';
import { 
  FileText, ShoppingCart, Wrench, Truck, ShieldCheck, 
  BarChart2, CheckCircle2
} from 'lucide-react';
import { REAL_USE_CASES } from '../data/aegisData';

export const AegisUseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const icons = [FileText, ShoppingCart, Wrench, Truck, ShieldCheck, BarChart2];

  return (
    <section className="relative py-28 bg-[#000000] border-t border-white/[0.06] overflow-hidden text-left">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#86868B] text-xs font-mono">
            <span>SKENARIO LAPANGAN</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight font-sans">
            Skenario Implementasi Riil.
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] leading-relaxed font-sans">
            Contoh nyata bagaimana platform Aegis AI diimplementasikan untuk memecahkan tantangan operasional kritis di berbagai bidang bisnis.
          </p>
        </div>

        {/* 6 Apple Style Pill Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {REAL_USE_CASES.map((item, idx) => {
            const Icon = icons[idx];
            const isSelected = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`apple-pill-btn px-4 py-2 text-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-white text-black font-semibold shadow-md'
                    : 'bg-white/[0.04] text-[#86868B] hover:text-white border border-white/[0.06]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-black' : 'text-[#6E6E73]'}`} />
                <span>{item.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Use Case Spotlight Card */}
        {(() => {
          const current = REAL_USE_CASES[activeTab];
          const Icon = icons[activeTab];
          return (
            <div className="apple-card p-6 sm:p-10 rounded-3xl bg-[#0F0F12]/80 border border-white/[0.08] shadow-2xl animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
                <div className="flex items-center space-x-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.06] flex items-center justify-center text-[#2997FF]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#2997FF] uppercase tracking-wider block">
                      SEKTOR: {current.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white font-sans mt-0.5">
                      {current.title}
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-[#86868B] border border-white/[0.06] shrink-0 self-start sm:self-auto">
                  Kasus Nyata
                </span>
              </div>

              {/* 3 Columns: Challenge, Solution, Impact */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04] space-y-2">
                  <div className="text-[10px] font-mono uppercase text-[#FFBD2E] font-semibold">
                    Tantangan Lapangan:
                  </div>
                  <p className="text-xs text-[#86868B] leading-relaxed font-sans">
                    {current.scenario}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04] space-y-2">
                  <div className="text-[10px] font-mono uppercase text-[#2997FF] font-semibold">
                    Solusi Aegis AI:
                  </div>
                  <p className="text-xs text-[#D2D2D7] leading-relaxed font-sans">
                    {current.solution}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04] space-y-2">
                  <div className="text-[10px] font-mono uppercase text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Hasil & Dampak:
                  </div>
                  <p className="text-xs text-emerald-300 leading-relaxed font-sans">
                    {current.result}
                  </p>
                </div>
              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
};
