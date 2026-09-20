import React, { useState } from 'react';
import { Cpu, FileText, Activity, Database, Shield, Layers, ChevronDown } from 'lucide-react';

export const AegisProductEcosystem: React.FC = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const pillars = [
    { id: 'doc', name: 'DOCUMENT AI', sub: 'OCR & Semantic RAG', icon: FileText, desc: 'Pengolahan puluhan ribu lembar kontrak & arsip' },
    { id: 'workflow', name: 'WORKFLOW AI', sub: 'Otomasi & Approval', icon: Activity, desc: 'Pemicu alur kerja & Purchase Order bertingkat' },
    { id: 'data', name: 'DATA & BI', sub: 'Natural Language BI', icon: Database, desc: 'Tanya jawab analitik penjualan & arus kas' },
    { id: 'industry', name: 'INDUSTRY IOT', sub: 'Digital Twin & Sensors', icon: Layers, desc: 'Telemetri mesin kapal, armada & pabrik' },
    { id: 'security', name: 'CYBER GUARD', sub: 'Deteksi Anomali SOC', icon: Shield, desc: 'Pertahanan identitas & mitigasi siber otonom' },
  ];

  const industries = [
    'Maritim & Pelayaran', 'Konstruksi & Proyek', 'Pengadaan & Vendor', 'Manufaktur & Pabrik',
    'Armada & Logistik', 'Compliance & Regulasi', 'Kawasan Industri', 'Enterprise Korporat'
  ];

  return (
    <section className="relative py-28 bg-[#000000] border-t border-white/[0.06] overflow-hidden text-center">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#86868B] text-xs font-mono">
            <span>ARSITEKTUR TERPADU</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight font-sans">
            Aegis AI Unified Ecosystem.
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] leading-relaxed font-sans">
            Satu fondasi Private AI Engine yang mengorkestrasikan kecerdasan dokumen, otomasi workflow, data analitik, dan telemetri IoT lintas seluruh sektor industri.
          </p>
        </div>

        {/* Apple Style Hierarchy Frame */}
        <div className="apple-card max-w-5xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#0F0F12]/70 border border-white/[0.08] shadow-2xl">
          
          {/* Top Level: AEGIS AI ECOSYSTEM */}
          <div className="inline-block relative z-10">
            <div className="apple-pill-btn px-8 py-3 bg-white text-black font-semibold tracking-wider text-xs shadow-lg">
              AEGIS AI ECOSYSTEM
            </div>
          </div>

          {/* Line Down */}
          <div className="w-px h-8 bg-white/[0.15] mx-auto"></div>

          {/* Level 2: PRIVATE AI ENGINE */}
          <div className="inline-block relative z-10">
            <div className="p-5 px-8 rounded-3xl bg-white/[0.04] border border-white/[0.1] text-white">
              <div className="flex items-center space-x-2.5 justify-center">
                <Cpu className="w-5 h-5 text-[#2997FF]" />
                <span className="font-semibold text-base font-sans text-white">
                  Private AI Engine (Core Orchestrator)
                </span>
              </div>
              <div className="text-[11px] font-sans text-[#86868B] mt-1 font-light">
                Self-Hosted LLMs • Vector RAG • Air-Gapped GPU Clusters • Multi-Tenant RBAC
              </div>
            </div>
          </div>

          {/* Lines to Pillars */}
          <div className="w-px h-8 bg-white/[0.15] mx-auto"></div>
          <div className="hidden md:block w-4/5 h-px bg-white/[0.12] mx-auto"></div>

          {/* Level 3: 5 Capability Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-4 text-left">
            {pillars.map((p) => {
              const Icon = p.icon;
              const isHovered = hoveredNode === p.id;
              return (
                <div
                  key={p.id}
                  onMouseEnter={() => setHoveredNode(p.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`p-4 rounded-2xl border transition-all ${
                    isHovered
                      ? 'bg-white/[0.08] border-[#2997FF]/60 shadow-lg'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="p-1.5 rounded-xl bg-white/[0.06] text-[#2997FF]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-white font-sans">{p.name}</span>
                  </div>
                  <div className="text-[10px] font-mono text-[#2997FF]">{p.sub}</div>
                  <div className="text-[11px] text-[#86868B] mt-1 font-sans leading-snug">{p.desc}</div>
                </div>
              );
            })}
          </div>

          {/* Line to Industries */}
          <div className="w-px h-8 bg-white/[0.15] mx-auto mt-4"></div>
          <div className="hidden md:block w-11/12 h-px bg-white/[0.12] mx-auto"></div>

          {/* Level 4: Industry Applications */}
          <div className="mt-5 pt-2">
            <div className="text-[11px] font-mono text-[#86868B] uppercase tracking-wider mb-3">
              Penerapan Sektor Industri Nyata:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {industries.map((ind, idx) => (
                <div 
                  key={idx}
                  className="py-2 px-3 rounded-full bg-white/[0.03] border border-white/[0.06] text-[#D2D2D7] font-sans text-xs font-normal"
                >
                  {ind}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
