import React, { useState } from 'react';
import { Shield, Lock, CheckCircle2, ChevronRight } from 'lucide-react';

interface Props {
  onOpenDemo: (prefilled?: string) => void;
}

export const AegisPrivateAiSection: React.FC<Props> = ({ onOpenDemo }) => {
  const [activeDeployment, setActiveDeployment] = useState<'onprem' | 'privatecloud' | 'hybrid'>('onprem');

  const deployments = [
    {
      id: 'onprem',
      title: 'On-Premise',
      badge: 'Air-Gapped Ready',
      desc: 'Model AI dan infrastruktur komputasi dipasang langsung di pusat data fisik organisasi Anda. Dirancang untuk memberikan kontrol penuh terhadap data tanpa ketergantungan pada koneksi internet publik.',
      idealFor: 'Pemerintahan, Pertahanan, Fasilitas Migas & Energi, Perbankan'
    },
    {
      id: 'privatecloud',
      title: 'Private Cloud',
      badge: 'Virtual Private VPC',
      desc: 'Infrastruktur cloud privat terisolasi (single-tenant) dengan enkripsi menyeluruh at-rest dan in-transit. Memberikan fleksibilitas komputasi dengan perimeter keamanan jaringan yang terpisah secara mutlak.',
      idealFor: 'Konglomerasi, BUMN Korporat, Finansial Modern'
    },
    {
      id: 'hybrid',
      title: 'Hybrid Edge',
      badge: 'Edge Synchronization',
      desc: 'Model ringan berjalan pada perangkat edge lokal (seperti kapal laut atau site proyek) untuk respon instan tanpa internet, dengan sinkronisasi terkompresi secara berkala ke pusat data.',
      idealFor: 'Armada Maritim Lepas Pantai, Pabrik Terdistribusi, Konstruksi Jauh'
    }
  ];

  return (
    <section id="private-ai" className="relative py-24 bg-transparent border-t border-white/[0.06] overflow-hidden text-left">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#86868B] text-xs font-mono">
            <Lock className="w-3.5 h-3.5 text-[#2997FF]" />
            <span>KONTROL & KEDAULATAN DATA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight font-sans">
            Ketika Data Adalah Aset Strategis.
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] leading-relaxed font-sans">
            Dalam era kecerdasan buatan, menyerahkan data rahasia dan strategi bisnis ke cloud publik membawa risiko eksposur yang tidak perlu. Solusi kami 
            <strong className="text-white font-medium"> dirancang untuk memberikan kontrol lebih besar terhadap data dan infrastruktur</strong> organisasi Anda.
          </p>
        </div>

        {/* Apple Keynote Showcase Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Photorealistic Datacenter in Apple Frame */}
          <div className="lg:col-span-6 relative group">
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.12] shadow-2xl bg-black">
              <img 
                src="/assets/generated/private_ai.jpg" 
                alt="Aegis Private AI Datacenter Infrastructure" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

              {/* Floating Reassurance Tag */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/75 border border-white/[0.12] backdrop-blur-2xl flex items-center justify-between text-xs font-sans text-white">
                <div>
                  <span className="text-[#86868B] text-[10px] uppercase font-mono block">Perimeter Sistem</span>
                  <span className="font-semibold text-white flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-emerald-400" /> Terisolasi Mandiri
                  </span>
                </div>
                <div>
                  <span className="text-[#86868B] text-[10px] uppercase font-mono block">Enkripsi</span>
                  <span className="font-semibold text-[#2997FF]">AES-256 / TLS 1.3</span>
                </div>
                <div>
                  <span className="text-[#86868B] text-[10px] uppercase font-mono block">Outbound Publik</span>
                  <span className="font-semibold text-white">0 Byte Keluar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Architecture Flow & Deployment Options */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 5-Step Linear Clean Architecture */}
            <div className="apple-card p-6 rounded-3xl bg-[#0F0F12]/80 border border-white/[0.08] space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#86868B] pb-2 border-b border-white/[0.06] flex justify-between">
                <span>Alur Pemrosesan Terisolasi</span>
                <span className="text-[#2997FF]">Strict Boundary</span>
              </div>

              <div className="space-y-2 font-sans text-xs">
                {[
                  { step: '01', title: 'Data Organisasi', desc: 'Arsip internal, dokumen tender, database SQL, telemetri sensor' },
                  { step: '02', title: 'Infrastruktur Privat', desc: 'Server on-premise atau private VPC khusus organisasi Anda' },
                  { step: '03', title: 'Self-Hosted LLM', desc: 'Model bahasa terkuantisasi yang berjalan mandiri tanpa API publik' },
                  { step: '04', title: 'Enterprise RAG', desc: 'Pencarian semantik berdensitas tinggi dengan sitasi dokumen valid' },
                  { step: '05', title: 'Aksi & Keputusan', desc: 'Otomasi workflow, antarmuka keputusan, dan peringatan dini' },
                ].map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center space-x-3">
                    <span className="w-5 h-5 rounded-full bg-white/[0.06] text-[#86868B] flex items-center justify-center text-[10px] font-mono shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <span className="font-semibold text-white block">{item.title}</span>
                      <span className="text-[11px] text-[#86868B] font-light">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Deployment Option Selector */}
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2">
                {deployments.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setActiveDeployment(d.id as any)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      activeDeployment === d.id
                        ? 'bg-white text-black font-semibold shadow-md'
                        : 'bg-[#0F0F12] border-white/[0.06] text-[#86868B] hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-sans truncate">{d.title}</div>
                    <div className={`text-[9px] font-mono mt-0.5 ${activeDeployment === d.id ? 'text-blue-600' : 'text-[#6E6E73]'}`}>
                      {d.badge}
                    </div>
                  </button>
                ))}
              </div>

              {(() => {
                const current = deployments.find(d => d.id === activeDeployment)!;
                return (
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-xs space-y-2 animate-fadeIn">
                    <p className="text-[#D2D2D7] leading-relaxed font-sans">
                      {current.desc}
                    </p>
                    <div className="text-[11px] text-[#86868B] pt-2 border-t border-white/[0.04]">
                      Sesuai untuk: <span className="text-white">{current.idealFor}</span>
                    </div>
                  </div>
                );
              })()}
            </div>

            <button
              onClick={() => onOpenDemo('Arsitektur Private AI')}
              className="apple-pill-btn w-full py-3 px-5 bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-medium transition-all cursor-pointer shadow-sm text-center"
            >
              Konsultasikan Arsitektur Private AI
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
