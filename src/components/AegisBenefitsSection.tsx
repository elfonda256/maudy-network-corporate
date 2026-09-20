import React from 'react';
import { 
  CheckCircle2, Clock, Eye, Brain, Layers, 
  Workflow, ShieldCheck 
} from 'lucide-react';
import { QUALITATIVE_BENEFITS } from '../data/aegisData';

export const AegisBenefitsSection: React.FC = () => {
  const benefitIcons = [
    Clock, Eye, Brain, Layers, Workflow, ShieldCheck, CheckCircle2
  ];

  return (
    <section className="relative py-28 bg-[#020204] border-t border-white/[0.06] overflow-hidden text-left">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#86868B] text-xs font-mono">
            <span>DAMPAK OPERASIONAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight font-sans">
            Dampak Nyata yang Dapat Dirasakan.
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] leading-relaxed font-sans">
            Fokus kami adalah transformasi cara kerja tim Anda: membebaskan para ahli dari pekerjaan repetitif, mempertajam akurasi keputusan, dan menjaga integritas aset intelektual organisasi.
          </p>
        </div>

        {/* 7 Qualitative Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {QUALITATIVE_BENEFITS.map((item, idx) => {
            const Icon = benefitIcons[idx] || CheckCircle2;
            return (
              <div 
                key={idx}
                className="apple-card p-6 sm:p-7 rounded-3xl bg-[#0F0F12]/70 border border-white/[0.08] flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/[0.06] flex items-center justify-center text-[#2997FF]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white font-sans">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#86868B] leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.04] text-[10px] font-mono text-[#6E6E73]">
                  Nilai Kualitatif Teruji
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
