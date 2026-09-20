import React from 'react';
import { Shield, Sparkles } from 'lucide-react';

export const AegisCompanySection: React.FC = () => {
  return (
    <section id="tentang-kami" className="relative py-28 bg-[#020204] border-t border-white/[0.06] overflow-hidden text-left">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#86868B] text-xs font-mono">
            <span>TENTANG KAMI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight font-sans">
            Membangun Kecerdasan untuk Masa Depan.
          </h2>
          <p className="text-base sm:text-xl text-[#F5F5F7] leading-relaxed max-w-2xl mx-auto font-light font-sans pt-2">
            &quot;Kami membangun solusi teknologi yang menggabungkan Artificial Intelligence, Automation, Data Intelligence dan Private Infrastructure untuk membantu organisasi menghadapi kompleksitas dunia bisnis modern.&quot;
          </p>
        </div>

        {/* 3 Apple Style Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="apple-card p-6 sm:p-7 rounded-3xl bg-[#0F0F12]/70 border border-white/[0.08] space-y-3">
            <span className="text-[11px] font-mono text-[#2997FF] block">Prinsip 01</span>
            <h3 className="text-lg font-semibold text-white font-sans">Kedaulatan & Kontrol Data</h3>
            <p className="text-xs text-[#86868B] leading-relaxed font-sans">
              Kami meyakini bahwa data strategis adalah keunggulan kompetitif terbesar korporasi. Seluruh arsitektur kami dirancang untuk memberi kontrol mutlak kepada pemilik data.
            </p>
          </div>

          <div className="apple-card p-6 sm:p-7 rounded-3xl bg-[#0F0F12]/70 border border-white/[0.08] space-y-3">
            <span className="text-[11px] font-mono text-[#2997FF] block">Prinsip 02</span>
            <h3 className="text-lg font-semibold text-white font-sans">Rekayasa Lapangan Nyata</h3>
            <p className="text-xs text-[#86868B] leading-relaxed font-sans">
              Solusi kami tidak hanya bekerja di lingkungan ideal laboratorium, melainkan teruji di laut lepas, lantai pabrik bersuhu tinggi, dan lokasi proyek infrastruktur terpencil.
            </p>
          </div>

          <div className="apple-card p-6 sm:p-7 rounded-3xl bg-[#0F0F12]/70 border border-white/[0.08] space-y-3">
            <span className="text-[11px] font-mono text-[#2997FF] block">Prinsip 03</span>
            <h3 className="text-lg font-semibold text-white font-sans">Transparansi & Akurasi</h3>
            <p className="text-xs text-[#86868B] leading-relaxed font-sans">
              Kami memprioritaskan pemodelan yang dapat diaudit secara forensik, menghadirkan sitasi dokumen sumber yang valid, dan menghindari klaim performa tanpa pembuktian data nyata.
            </p>
          </div>
        </div>

        {/* Entity Card */}
        <div className="apple-card p-6 sm:p-8 rounded-3xl bg-[#0A0A0D]/80 border border-white/[0.08]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#6E6E73] uppercase block">Entitas Resmi</span>
              <span className="text-sm font-semibold text-white font-sans">Maudy Network Komunikasi (MNK)</span>
              <div className="text-[11px] text-[#2997FF] font-sans">Divisi Solusi Aegis Technology</div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#6E6E73] uppercase block">Kategori Solusi</span>
              <span className="text-sm font-semibold text-white font-sans">B2B Enterprise AI & Automation</span>
              <div className="text-[11px] text-[#86868B] font-sans">Private Infrastructure & IoT</div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#6E6E73] uppercase block">Jangkauan Penerapan</span>
              <span className="text-sm font-semibold text-white font-sans">Nasional & Regional Maritim</span>
              <div className="text-[11px] text-[#86868B] font-sans">On-Premise & Cloud Privat</div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#6E6E73] uppercase block">Tata Kelola & Keamanan</span>
              <span className="text-sm font-semibold text-white font-sans">Zero Trust & ISO 27001 Ready</span>
              <div className="text-[11px] text-emerald-400 font-sans">Kepatuhan UU PDP Indonesia</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
