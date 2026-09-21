import React from 'react';
import { 
  ChevronRight, 
  Lock
} from 'lucide-react';

interface Props {
  onOpenDemo: () => void;
  onExploreSolutions: () => void;
  onOpenBrochure?: () => void;
}

export const AegisHero: React.FC<Props> = ({ onOpenDemo, onExploreSolutions, onOpenBrochure }) => {

  return (
    <section id="beranda" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-transparent pt-16 sm:pt-24 pb-20 text-center">
      {/* Apple Subtle Diffused Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-gradient-to-b from-[#0071E3]/20 via-[#2997FF]/10 to-transparent blur-[140px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-medium text-[#A1A1A6] mb-6 backdrop-blur-md">
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
              <span>📑 Katalog &amp; Brosur PDF</span>
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

        {/* Minimalist Executive Key Metrics Strip */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0F0F14]/70 border border-white/[0.08] backdrop-blur-2xl shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
              <div className="pt-2 md:pt-0">
                <div className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">12 Solusi</div>
                <div className="text-xs text-[#86868B] mt-1 font-sans">Enterprise AI Suite</div>
              </div>
              <div className="pt-2 md:pt-0 md:pl-6">
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#2997FF] tracking-tight">Air-Gapped</div>
                <div className="text-xs text-[#86868B] mt-1 font-sans">Zero Data Egress</div>
              </div>
              <div className="pt-2 md:pt-0 md:pl-6">
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 tracking-tight">&lt; 4.2ms</div>
                <div className="text-xs text-[#86868B] mt-1 font-sans">Inferensi Edge AI</div>
              </div>
              <div className="pt-2 md:pt-0 md:pl-6">
                <div className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">99.98%</div>
                <div className="text-xs text-[#86868B] mt-1 font-sans">SLA NOC 24/7</div>
              </div>
            </div>

            <div className="mt-4 pt-3.5 border-t border-white/[0.05] flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] text-[#86868B] font-mono">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Lock className="w-3.5 h-3.5 text-[#2997FF]" />
                Kedaulatan Data Terjamin 100% On-Premise
              </span>
              <span className="text-white/20 hidden sm:inline">&bull;</span>
              <span>ISO 9001:2015 &bull; ISO 27001:2022</span>
              <span className="text-white/20 hidden sm:inline">&bull;</span>
              <span>Izin Jastel Kominfo RI</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
