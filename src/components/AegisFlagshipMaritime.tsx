import React, { useState } from 'react';
import { 
  Ship, Shield, Compass, FileText, Wrench, Radio, 
  ChevronRight, Terminal, Sparkles
} from 'lucide-react';

interface Props {
  onOpenDemo: (prefilledProduct?: string) => void;
  onOpenProductDetail: (productId: string) => void;
}

export const AegisFlagshipMaritime: React.FC<Props> = ({ onOpenDemo, onOpenProductDetail }) => {
  const [activeModule, setActiveModule] = useState<number>(0);
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  const maritimeModules = [
    { name: 'Aegis Vessel AI', desc: 'Digital twin telemetri mesin, temperatur silinder, RPM, dan efisiensi konsumsi bahan bakar bunker kapal.', icon: Ship },
    { name: 'Document Intelligence', desc: 'Pengarsipan dan temu balik cerdas sertifikat statutoria (IOPP, ISM Code, Class, Flag State).', icon: FileText },
    { name: 'Maintenance AI', desc: 'Planned Maintenance System (PMS) dengan panduan langkah perbaikan teknis offline di laut lepas.', icon: Wrench },
    { name: 'Fleet Intelligence', desc: 'Pemantauan rute global AIS, kalkulasi cuaca laut, dan estimasi waktu sandar pelabuhan.', icon: Radio },
    { name: 'Compliance Intelligence', desc: 'Validasi otomatis kesiapan audit inspeksi SIRE 2.0, SOLAS, MARPOL, dan MLC 2006.', icon: Shield },
    { name: 'Maritime Assistant', desc: 'Asisten AI onboard yang mampu merespons pertanyaan nakhoda dan chief engineer tanpa koneksi internet.', icon: Compass },
  ];

  const sampleQuestions = [
    {
      q: 'Berapa histori kerusakan auxiliary engine kapal MV Samudera 08?',
      a: 'Catatan 6 bulan terakhir: 1 insiden kebocoran seal injector (12 Mei). Tindakan perbaikan selesai dalam 4 jam kerja. Vibrasi normal 2.1 mm/s.'
    },
    {
      q: 'Dokumen dan sertifikat kapal apa yang akan expired dalam 60 hari?',
      a: 'Ditemukan 2 sertifikat: International Oil Pollution Prevention (IOPP) berakhir 14 November 2026 dan Sertifikat Safety Radio berakhir 28 November 2026.'
    },
    {
      q: 'Maintenance apa yang harus dilakukan sebelum docking terjadwal?',
      a: 'Rekomendasi PMS: Inspeksi ketebalan pelat lambung (Ultrasonic Gauging), servis overhauling sea chest valve, dan kalibrasi sensor gas detektor kargo.'
    }
  ];

  return (
    <section className="relative py-28 bg-[#020204] border-t border-white/[0.06] overflow-hidden text-left">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Apple Pro Style Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/[0.06]">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#2997FF] text-xs font-mono mb-3">
              <span>FLAGSHIP SOLUTION</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-semibold text-white tracking-tight font-sans">
              Aegis Maritime.
            </h2>
            <p className="text-xl text-[#86868B] font-sans font-light mt-1">
              Maritime Intelligence. Powered by Private AI.
            </p>
          </div>
          <div className="max-w-xl text-[#86868B] text-sm leading-relaxed font-sans">
            Platform Private AI terintegrasi khusus untuk industri maritim, perkapalan, dan armada lepas pantai. Mampu beroperasi secara mandiri di server lokal kapal (100% offline) dan tersinkronisasi via satelit Marine VSAT hemat bandwidth.
          </div>
        </div>

        {/* Hero Cinematic Frame */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Cinematic Vessel Asset in Apple-style Glass Frame */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.12] shadow-2xl bg-black">
              <img 
                src="/assets/generated/maritime_hero.jpg" 
                alt="Aegis Maritime Vessel Telemetry Fleet" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

              {/* Apple-style floating frosted pills */}
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/[0.15] backdrop-blur-xl font-mono text-[11px] text-white flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>MV Samudera 08 • Selat Malaka</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/75 border border-white/[0.12] backdrop-blur-2xl flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-white">
                <div>
                  <span className="text-[#86868B] text-[10px] uppercase font-mono block">Status Operasi</span>
                  <span className="font-semibold text-white">100% Edge Offline Ready</span>
                </div>
                <div>
                  <span className="text-[#86868B] text-[10px] uppercase font-mono block">Kecepatan Ideal</span>
                  <span className="font-semibold text-[#2997FF]">14.8 Knots (Eco-Speed)</span>
                </div>
                <div>
                  <span className="text-[#86868B] text-[10px] uppercase font-mono block">Sinkronisasi VSAT</span>
                  <span className="font-semibold text-emerald-400">Micro-Packets (42 KB)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 6 Modules Bento List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#86868B] mb-2 flex justify-between">
              <span>6 Modul Terintegrasi:</span>
              <span className="text-[#2997FF]">Aegis Maritime Suite</span>
            </div>

            <div className="space-y-2">
              {maritimeModules.map((mod, idx) => {
                const Icon = mod.icon;
                const isSelected = activeModule === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveModule(idx)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white/[0.08] border-[#2997FF]/60 shadow-lg'
                        : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-xl ${isSelected ? 'bg-[#0071E3] text-white' : 'bg-white/[0.06] text-[#86868B]'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className={`text-sm font-semibold font-sans ${isSelected ? 'text-white' : 'text-[#D2D2D7]'}`}>
                          {mod.name}
                        </div>
                        <div className="text-xs text-[#86868B] line-clamp-1 mt-0.5 font-sans">
                          {mod.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Apple Style CTAs */}
            <div className="pt-4 flex items-center space-x-3">
              <button
                onClick={() => onOpenDemo('AEGIS MARITIME')}
                className="apple-pill-btn flex-1 py-3 px-5 text-xs font-medium text-white bg-[#0071E3] hover:bg-[#0077ED] transition-all text-center cursor-pointer shadow-sm"
              >
                Jadwalkan Demo Maritim
              </button>
              <button
                onClick={() => onOpenProductDetail('aegis-maritime')}
                className="apple-pill-btn py-3 px-5 text-xs font-medium text-[#F5F5F7] bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] transition-all cursor-pointer"
              >
                Spesifikasi Detail
              </button>
            </div>
          </div>

        </div>

        {/* Offline Assistant Simulation Card */}
        <div className="mt-12 apple-card p-6 sm:p-8 rounded-3xl bg-[#0F0F12]/70 border border-white/[0.08]">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-4">
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-[#2997FF]" />
              <h3 className="text-sm font-semibold text-white font-sans">
                Simulasi Asisten AI Maritim Onboard (100% Offline)
              </h3>
            </div>
            <span className="text-[10px] font-mono text-[#86868B]">
              Klik pertanyaan untuk menguji respon
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {sampleQuestions.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveQuestion(activeQuestion === item.q ? null : item.q)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer text-left ${
                  activeQuestion === item.q
                    ? 'bg-white/[0.08] border-[#2997FF]/60 shadow-md'
                    : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                }`}
              >
                <div className="text-[10px] font-mono text-[#86868B] uppercase mb-1">
                  Pertanyaan Nakhoda:
                </div>
                <div className="text-xs font-medium text-[#F5F5F7]">
                  &quot;{item.q}&quot;
                </div>
                <div className="mt-3 pt-3 border-t border-white/[0.06] text-xs text-[#A1A1A6] leading-relaxed font-sans">
                  <span className="text-[#2997FF] font-semibold block text-[10px] font-mono uppercase mb-0.5">
                    Respon Aegis Maritime AI:
                  </span>
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
