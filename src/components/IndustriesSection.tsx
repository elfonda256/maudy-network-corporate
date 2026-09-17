import React, { useState } from 'react';
import {
  Flame,
  Ship,
  Landmark,
  Zap,
  Sprout,
  Building,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

interface IndustriesProps {
  lang: 'en' | 'id';
  onExploreProjects: () => void;
}

export const IndustriesSection: React.FC<IndustriesProps> = ({ lang, onExploreProjects }) => {
  const industries = [
    {
      id: 'oil-gas',
      icon: Flame,
      name: { en: 'Oil & Gas Resources', id: 'Minyak & Gas Bumi' },
      tagline: { en: 'Hazardous zone perimeter telemetry & secure pipeline networks', id: 'Telemetri area berisiko tinggi & pengawasan aset kilang' },
      delivered: {
        en: 'Perimeter asset monitoring, fiber trenching, and grounding protection for Pertamina strategic installations.',
        id: 'Pemantauan lahan aset strategis, penggalian fiber optik, dan proteksi grounding elektrikal PT Pertamina.',
      },
      keyFeatures: [
        { en: 'Explosion-proof & weatherproof enclosures', id: 'Enclosure tahan cuaca & sertifikasi proteksi' },
        { en: 'Grounding systems against lightning hazards', id: 'Sistem batang grounding penangkal petir' },
        { en: 'Dual-ISP high-availability telemetry', id: 'Telemetri berkeandalan tinggi dual-ISP' },
      ],
      clientRef: 'PT Pertamina (Persero)',
    },
    {
      id: 'maritime-shipping',
      icon: Ship,
      name: { en: 'Maritime & Fleet Logistics', id: 'Kemaritiman & Armada Niaga' },
      tagline: { en: 'Oceanic satellite communications & crew welfare management', id: 'Internet satelit kapal tanker & tata kelola bandwidth' },
      delivered: {
        en: 'Integrated VSAT satellite communications, 512Kbps bandwidth prioritization, and cloud monitoring for Pertamina International Shipping vessels.',
        id: 'Instalasi ekosistem VSAT, manajemen alokasi kuota 512Kbps untuk 30 kru, dan audit koneksi armada laut.',
      },
      keyFeatures: [
        { en: 'Strict 512 Kbps QoS shaping & voucher login', id: 'Manajemen kuota cerdas & portal voucher kapal' },
        { en: 'Cloud-based vessel tracking and latency audits', id: 'Pelacakan latensi armada dari darat via cloud' },
        { en: 'Hytera PoC cellular dispatch for 30 port offices', id: 'Radio PoC Hytera untuk koordinasi pelabuhan' },
      ],
      clientRef: 'Pertamina International Shipping',
    },
    {
      id: 'government-public',
      icon: Landmark,
      name: { en: 'Government Ministries & SOEs', id: 'Kementerian & Lembaga Negara' },
      tagline: { en: 'High-security surveillance maintenance & regulatory compliance', id: 'Pemeliharaan keamanan gedung kementerian & kepatuhan tata kelola' },
      delivered: {
        en: '24/7 surveillance maintenance covering 180 Honeywell CCTV cameras across 22 floors of Kementerian BUMN Tower.',
        id: 'Pemeliharaan sistem CCTV 180 titik kamera dan 14 NVR pada 22 lantai Menara Kementerian BUMN.',
      },
      keyFeatures: [
        { en: 'Check-and-recheck audits of 14 enterprise NVRs', id: 'Audit berkala kesehatan rekaman 14 NVR' },
        { en: 'Video wall synchronization for security NOC', id: 'Sinkronisasi video wall ruang komando' },
        { en: 'Formal contract & SLA compliance', id: 'Kepatuhan tata kelola SPK & SLA resmi' },
      ],
      clientRef: 'Kementerian BUMN RI',
    },
    {
      id: 'energy-utilities',
      icon: Zap,
      name: { en: 'Power, Energy & Renewables', id: 'Ketenagalistrikan & Energi Bersih' },
      tagline: { en: 'High-voltage grid simulation & renewable solar analytics', id: 'Pemodelan kestabilan jaringan & analitik energi surya' },
      delivered: {
        en: 'DIgSILENT PowerFactory software suite deployment, OPF calculations, and Solargis resource licenses for Pertamina Power Indonesia.',
        id: 'Penyediaan software pemodelan transmisi kelistrikan PowerFactory dan lisensi radiasi surya Solargis.',
      },
      keyFeatures: [
        { en: 'Voltage sag & harmonic distortion studies', id: 'Kajian tegangan kedip & kualitas daya listrik' },
        { en: 'Optimal Power Flow (OPF) generator dispatch', id: 'Optimasi aliran daya & penjadwalan pembangkit' },
        { en: 'Solar farm feasibility & PV yield prediction', id: 'Prediksi produksi listrik PLTS terbarukan' },
      ],
      clientRef: 'PT Pertamina Power Indonesia',
    },
    {
      id: 'agriculture-water',
      icon: Sprout,
      name: { en: 'Agriculture & Water Resources', id: 'Ketahanan Pangan & Sumber Daya Air' },
      tagline: { en: 'Geospatial dam telemetry & meteorological decision support', id: 'Sistem GIS pemantauan bendungan & analitik musim tanam' },
      delivered: {
        en: 'Rentang Irrigation Modernization Project: Web GIS & Decision Support System (DSS) integrating BMKG forecasts and 3 major dams for Kementerian PUPR.',
        id: 'Pengembangan Web GIS & DSS Irigasi Rentang mencakup integrasi bendungan Jatigede, Karedok, dan Rentang dengan API cuaca BMKG.',
      },
      keyFeatures: [
        { en: 'Real-time hydrological sensor telemetry', id: 'Telemetri ketinggian air bendungan terpusat' },
        { en: 'Automated BMKG meteorological synchronization', id: 'Sinkronisasi perkiraan cuaca BMKG otomatis' },
        { en: 'Crop growing stage predictive models', id: 'Analitik kebutuhan air fase tanam petani' },
      ],
      clientRef: 'Kementerian PUPR RI',
    },
    {
      id: 'corporate-enterprise',
      icon: Building,
      name: { en: 'Commercial Enterprise & Campuses', id: 'Kampus & Korporasi Swasta' },
      tagline: { en: 'Multi-building fiber backbones, custom ERP & high-profile events', id: 'Modernisasi jaringan kampus, ERP kustom & perhelatan VIP' },
      delivered: {
        en: 'Network topology redesign for Universitas Pertamina (Simprug & KP), custom AP Portal ERP for PT Airkon Pratama, and event IT for summits.',
        id: 'Audit dan redesain topologi jaringan Universitas Pertamina, ERP AP Portal, serta jaringan High Availability KTT Pertamina.',
      },
      keyFeatures: [
        { en: 'Legacy cable tracing & fiber optic certification', id: 'Penelusuran kabel lama & sertifikasi Fluke' },
        { en: 'Custom ERP ticketing processing 900+ work orders', id: 'Aplikasi ERP tiket menangani 900+ servis' },
        { en: 'Zero-drop dual-ISP failover for live broadcasts', id: 'Dual-ISP failover tanpa putus untuk live streaming' },
      ],
      clientRef: 'Univ. Pertamina & Airkon Pratama',
    },
  ];

  const [activeIdx, setActiveIdx] = useState<number>(0);
  const selectedIndustry = industries[activeIdx];
  const ActiveIcon = selectedIndustry.icon;

  return (
    <section id="industries" className="py-24 bg-slate-50/60 dark:bg-[#06101B]/60 backdrop-blur-md border-t border-slate-200/70 dark:border-slate-800/70 transition-colors relative overflow-hidden">
      {/* Top Animated Beam Sweep Divider */}
      <div className="beam-divider opacity-60 mb-12"></div>

      {/* Decorative High-Tech Background Watermark */}
      <div className="absolute top-12 right-8 text-[11px] font-tech text-slate-400/30 dark:text-cyan-500/10 select-none pointer-events-none tracking-widest hidden md:block">
        [SECTOR_MATRIX // CRITICAL_INFRASTRUCTURE_V2]
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gradient-pill text-red-600 dark:text-red-400 text-xs font-tech font-bold tracking-wider mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-cyan-400 animate-ping mr-1"></span>
            <span>{lang === 'en' ? 'STRATEGIC SECTORS SERVED' : 'SEKTOR INDUSTRI STRATEGIS'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002D62] dark:text-white tracking-tight">
            {lang === 'en' ? (
              <>
                Engineered for <span className="text-gradient-brand">Critical Industries</span>
              </>
            ) : (
              <>
                Solusi Khusus untuk <span className="text-gradient-brand">Sektor Berisiko Tinggi</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'Our field-proven architectures meet the rigorous demands of national infrastructure, offshore exploration, and ministerial governance.'
              : 'Arsitektur kami dirancang khusus menjawab standar ketat infrastruktur nasional, pelayaran lepas pantai, dan kementerian negara.'}
          </p>
        </div>

        {/* Interactive Industry Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Tab list */}
          <div className="lg:col-span-5 space-y-2.5">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              const isSelected = activeIdx === idx;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                    isSelected
                      ? 'bg-gradient-brand text-white border-transparent shadow-lg shadow-red-500/15 scale-[1.02]'
                      : 'bg-white/80 dark:bg-[#0B1F3A]/60 backdrop-blur-sm border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-red-400/50 dark:hover:border-slate-700 shadow-xs hover:translate-x-1'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div
                      className={`p-2.5 rounded-xl ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 dark:bg-slate-900 text-red-600 dark:text-cyan-400'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">
                        {ind.name[lang]}
                      </div>
                      <div className={`text-[11px] line-clamp-1 ${isSelected ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>
                        {ind.tagline[lang]}
                      </div>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-white translate-x-1' : 'text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Card */}
          <div className="lg:col-span-7">
            <div className="interactive-card bg-white/85 dark:bg-[#0B1F3A]/85 backdrop-blur-xl p-8 rounded-3xl border border-slate-200/80 dark:border-cyan-500/30 gradient-border-top shadow-xl relative overflow-hidden animate-fadeIn">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center space-x-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-blue-900/30 text-red-600 dark:text-cyan-400 border border-slate-200 dark:border-blue-800">
                    <ActiveIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#002D62] dark:text-white">
                      {selectedIndustry.name[lang]}
                    </h3>
                    <span className="text-xs font-bold text-red-600 dark:text-cyan-400 font-tech">
                      {lang === 'en' ? 'VERIFIED CLIENT ENGAGEMENT: ' : 'KLIEN STRATEGIS TERBUKTI: '}
                      <strong className="text-[#002D62] dark:text-white font-sans">{selectedIndustry.clientRef}</strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* Delivery Scope */}
              <div className="mb-6">
                <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 font-tech font-bold">
                  {lang === 'en' ? 'Field-Delivered Scope:' : 'Cakupan Pekerjaan Terlaksana:'}
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-normal bg-slate-50/80 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                  {selectedIndustry.delivered[lang]}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <div className="text-xs text-[#0050AE] dark:text-cyan-400 uppercase tracking-wider mb-3 font-tech font-bold">
                  {lang === 'en' ? 'Architectural Highlights & Moats:' : 'Spesifikasi & Keunggulan Desain:'}
                </div>
                <div className="space-y-2.5">
                  {selectedIndustry.keyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-cyan-400 flex-shrink-0" />
                      <span>{feat[lang]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {lang === 'en' ? 'Official Documentation & Contracts Available' : 'Dokumen Kontrak & SPK Resmi Terlampir'}
                </span>
                <button
                  onClick={onExploreProjects}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-blue-600/30 text-[#0050AE] dark:text-cyan-300 text-xs font-bold transition-all hover:scale-105"
                >
                  <span>{lang === 'en' ? 'View Case Studies' : 'Lihat Portofolio Sektor'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
