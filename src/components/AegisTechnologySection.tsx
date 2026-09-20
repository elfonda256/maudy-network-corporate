import React, { useState } from 'react';
import { 
  Cpu, FileSearch, Eye, Network, TrendingUp, Layers, 
  Bot, Wifi, Box, Code2, Workflow, Database, CheckCircle2
} from 'lucide-react';
import { TECH_MODULES, type TechModule } from '../data/aegisData';

export const AegisTechnologySection: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechModule>(TECH_MODULES[0]);

  const iconMap: Record<string, React.ElementType> = {
    'LLM': Cpu,
    'RAG': FileSearch,
    'OCR': Eye,
    'CV': Eye,
    'ML': Network,
    'PdM': TrendingUp,
    'Agents': Bot,
    'IoT': Wifi,
    'Twin': Box,
    'API': Code2,
    'IPA': Workflow,
    'Data Platform': Database,
  };

  return (
    <section id="teknologi" className="relative py-28 bg-[#020204] border-t border-white/[0.06] overflow-hidden text-left">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#86868B] text-xs font-mono">
            <span>FONDASI TEKNOLOGI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight font-sans">
            Technology Behind the Intelligence.
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] leading-relaxed font-sans">
            Arsitektur teruji yang mengintegrasikan penalaran kognitif tingkat lanjut, visi komputer, pemrosesan dokumen masif, serta telemetri IoT industri dalam satu tumpukan teknologi modern.
          </p>
        </div>

        {/* 12 Core Tech Bento Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
          {TECH_MODULES.map((tech) => {
            const Icon = iconMap[tech.acronym] || Cpu;
            const isSelected = selectedTech.acronym === tech.acronym;
            return (
              <div
                key={tech.acronym}
                onClick={() => setSelectedTech(tech)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white/[0.08] border-[#2997FF]/60 shadow-lg scale-[1.01]'
                    : 'bg-[#0A0A0D]/70 border-white/[0.06] hover:bg-white/[0.04]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-xl bg-white/[0.06] flex items-center justify-center text-[#2997FF]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[10px] text-[#86868B] px-2 py-0.5 rounded-full bg-white/[0.04]">
                      {tech.acronym}
                    </span>
                  </div>
                  <div className={`text-sm font-semibold font-sans ${isSelected ? 'text-white' : 'text-[#D2D2D7]'}`}>
                    {tech.name}
                  </div>
                  <div className="text-[10px] text-[#86868B] font-mono mt-0.5 truncate">
                    {tech.category}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Technology Details Bento */}
        <div className="apple-card p-6 sm:p-10 rounded-3xl bg-[#0F0F12]/80 border border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-mono text-[#2997FF] block">
                {selectedTech.category} • {selectedTech.acronym}
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white font-sans">
                {selectedTech.name}
              </h3>
              <p className="text-sm text-[#A1A1A6] leading-relaxed font-sans">
                {selectedTech.description}
              </p>
            </div>

            <div className="lg:col-span-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <div className="text-[11px] font-sans font-semibold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2997FF]" /> Nilai Tambah Enterprise:
              </div>
              <div className="text-xs text-[#86868B] leading-relaxed font-sans">
                {selectedTech.enterpriseBenefit}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
