import React, { useState } from 'react';
import { 
  ArrowRight, ShieldCheck, Cpu, Database, Activity, 
  ChevronRight, Sparkles, Lock, Layers
} from 'lucide-react';

interface Props {
  onOpenDemo: () => void;
  onExploreSolutions: () => void;
  onOpenBrochure?: () => void;
}

export const AegisHero: React.FC<Props> = ({ onOpenDemo, onExploreSolutions, onOpenBrochure }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    { title: 'Private AI Core', tag: 'Self-Hosted', desc: 'Model bahasa dan penalaran terisolasi di server internal Anda.', metric: 'Zero Data Outbound' },
    { title: 'Automated Workflows', tag: 'Smart Routing', desc: 'Otomasi persetujuan bertingkat, penawaran harga, dan laporan harian.', metric: '85% Lebih Cepat' },
    { title: 'Industry Telemetry', tag: 'IoT & Sensors', desc: 'Monitoring getaran mesin kapal, lini produksi pabrik, dan armada.', metric: '< 100ms Latensi' },
    { title: 'Document Intelligence', tag: 'Semantic RAG', desc: 'Membaca ribuan halaman kontrak dan blueprint teknik dalam hitungan detik.', metric: '99.4% Akurasi OCR' },
  ];

  return (
    <section id="beranda" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-transparent pt-12 pb-20 text-center">
      {/* Apple Subtle Diffused Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-gradient-to-b from-[#0071E3]/20 via-[#2997FF]/10 to-transparent blur-[140px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-medium text-[#A1A1A6] mb-6 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2997FF] animate-pulse"></span>
          <span>Aegis Enterprise Intelligence Platform</span>
          <span className="text-[#6E6E73]">•</span>
          <span className="text-[#F5F5F7]">Bahasa Indonesia</span>
        </div>

        {/* Large Confident Apple Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.08] font-sans max-w-4xl mx-auto">
          Teknologi AI untuk Dunia Bisnis yang Lebih Cerdas.
        </h1>

        {/* Humanist Subheadline */}
        <p className="text-base sm:text-xl text-[#A1A1A6] leading-relaxed max-w-3xl mx-auto font-normal mt-6 font-sans">
          Kami membangun solusi Artificial Intelligence, Automation, Data Intelligence dan Private AI untuk membantu organisasi meningkatkan efisiensi, keamanan dan kualitas pengambilan keputusan.
        </p>

        {/* Apple Style Clean Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
          <button
            onClick={onOpenDemo}
            className="apple-pill-btn px-7 py-3 text-sm font-medium text-white bg-[#0071E3] hover:bg-[#0077ED] active:scale-95 transition-all shadow-lg hover:shadow-[#0071E3]/25 cursor-pointer"
          >
            Jadwalkan Demo
          </button>

          {onOpenBrochure && (
            <button
              onClick={onOpenBrochure}
              className="apple-pill-btn px-6 py-3 text-sm font-medium text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.15] active:scale-95 transition-all cursor-pointer shadow-md flex items-center space-x-2"
            >
              <span>📑 Buka E-Katalog & Brosur PDF</span>
            </button>
          )}

          <button
            onClick={onExploreSolutions}
            className="inline-flex items-center text-sm font-medium text-[#2997FF] hover:text-white transition-colors cursor-pointer px-4 py-3 group"
          >
            <span>Jelajahi Solusi</span>
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform text-[#2997FF]" />
          </button>
        </div>

        {/* Apple Keynote Style Bento Showcase Component */}
        <div className="mt-16 text-left">
          <div className="apple-card p-6 sm:p-8 rounded-3xl bg-[#0F0F12]/80 border border-white/[0.08] shadow-2xl relative overflow-hidden backdrop-blur-2xl">
            
            {/* Top Bar of Bento Frame */}
            <div className="flex flex-wrap items-center justify-between pb-6 border-b border-white/[0.06] gap-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-[#2997FF] animate-pulse"></div>
                <div>
                  <div className="text-xs font-semibold text-white font-sans">Aegis Enterprise Architecture</div>
                  <div className="text-[11px] text-[#86868B] font-mono">Status: Private Clusters Synchronized</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-white/[0.06] text-[#A1A1A6] border border-white/[0.08]">
                  Air-Gapped Ready
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#0071E3]/15 text-[#2997FF] border border-[#0071E3]/30">
                  AES-256
                </span>
              </div>
            </div>

            {/* Interactive 4 Bento Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-6">
              {pillars.map((item, idx) => {
                const isSelected = activeTab === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-white/[0.08] border-[#2997FF]/60 shadow-[0_0_20px_rgba(41,151,255,0.15)]'
                        : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.12]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-[#86868B] uppercase">{item.tag}</span>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#2997FF]"></span>}
                      </div>
                      <h3 className={`text-sm font-semibold ${isSelected ? 'text-white' : 'text-[#D2D2D7]'}`}>
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#86868B] mt-1.5 leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-2.5 border-t border-white/[0.04] text-[11px] font-mono text-[#2997FF]">
                      {item.metric}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Humanist Bottom Reassurance */}
            <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-[#86868B] gap-2">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#2997FF]" />
                Kedaulatan data dan kepatuhan regulasi terjamin di bawah infrastruktur organisasi Anda.
              </span>
              <span className="text-[11px] font-mono text-[#6E6E73]">
                12 Solusi Industri Terintegrasi
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
