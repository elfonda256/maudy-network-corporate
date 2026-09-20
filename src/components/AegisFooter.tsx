import React from 'react';
import { Shield, ArrowUp } from 'lucide-react';
import { PRODUCTS, INDUSTRIES } from '../data/aegisData';

export const AegisFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#07090E] border-t border-white/[0.08] text-[#86868B] font-sans text-xs text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-white/[0.06]">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-white/[0.08] border border-white/[0.12] flex items-center justify-center text-white">
                <Shield className="w-4 h-4 text-[#2997FF]" />
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-sm font-semibold text-white">Aegis</span>
                <span className="text-sm font-light text-[#86868B]">Technology</span>
              </div>
            </div>

            <p className="text-xs text-[#86868B] leading-relaxed max-w-sm font-sans">
              Solusi Artificial Intelligence, Private AI, Automation, Data Intelligence dan Industry Technology untuk korporasi, maritim, manufaktur, dan instansi pemerintahan.
            </p>

            <div className="text-[11px] text-[#6E6E73] space-y-0.5">
              <div>Kedaulatan: <span className="text-[#A1A1A6]">On-Premise & Air-Gapped Ready</span></div>
              <div>Arsitektur: <span className="text-[#A1A1A6]">Zero Trust Enterprise Model</span></div>
            </div>
          </div>

          {/* Solutions & Products Columns */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider font-sans">
              12 Produk Portfolio
            </div>
            <ul className="space-y-1.5 text-[12px] font-sans">
              {PRODUCTS.slice(0, 7).map((p) => (
                <li key={p.id}>
                  <button 
                    onClick={() => scrollTo('produk')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {p.name}
                  </button>
                </li>
              ))}
              <li>
                <button 
                  onClick={() => scrollTo('produk')}
                  className="text-[#2997FF] hover:underline cursor-pointer"
                >
                  + 5 Produk Lainnya ›
                </button>
              </li>
            </ul>
          </div>

          {/* Industries Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider font-sans">
              Sektor Industri
            </div>
            <ul className="space-y-1.5 text-[12px] font-sans">
              {INDUSTRIES.slice(0, 7).map((ind) => (
                <li key={ind.id}>
                  <button 
                    onClick={() => scrollTo('industri')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {ind.name}
                  </button>
                </li>
              ))}
              <li>
                <button 
                  onClick={() => scrollTo('industri')}
                  className="text-[#2997FF] hover:underline cursor-pointer"
                >
                  + 5 Sektor Lainnya ›
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider font-sans">
              Navigasi Cepat
            </div>
            <ul className="space-y-1.5 text-[12px] font-sans">
              <li><button onClick={() => scrollTo('beranda')} className="hover:text-white">Overview</button></li>
              <li><button onClick={() => scrollTo('solusi')} className="hover:text-white">Nilai Strategis</button></li>
              <li><button onClick={() => scrollTo('teknologi')} className="hover:text-white">Teknologi</button></li>
              <li><button onClick={() => scrollTo('private-ai')} className="hover:text-white">Private AI</button></li>
              <li><button onClick={() => scrollTo('security')} className="hover:text-white">Keamanan</button></li>
              <li><button onClick={() => scrollTo('tentang-kami')} className="hover:text-white">Tentang Kami</button></li>
              <li><button onClick={() => scrollTo('kontak')} className="hover:text-white text-[#2997FF]">Jadwalkan Demo</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance (Apple.com style) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6E6E73] font-sans">
          <div>
            Copyright © 2026 <strong>Aegis Technology</strong> • PT Maudy Network Komunikasi. All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            <span>Indonesia (Bahasa)</span>
            <span>•</span>
            <span>Kebijakan Privasi UU PDP</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="apple-pill-btn px-2.5 py-1 bg-white/[0.04] hover:bg-white/[0.08] text-[#86868B] hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              <ArrowUp className="w-3 h-3" />
              <span>Kembali ke atas</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
