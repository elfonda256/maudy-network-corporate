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
import type { Language } from '../i18n/translations';
import { getLangText } from '../i18n/translations';

interface IndustriesProps {
  lang: Language;
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
    <section id="industries" className="py-24 bg-transparent border-t border-black/[0.06] dark:border-white/[0.08] transition-colors relative overflow-hidden">
      {/* Top Animated Beam Sweep Divider */}
      <div className="beam-divider opacity-60 mb-12"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] text-[#0071E3] dark:text-[#2997FF] text-xs font-mono font-medium tracking-wider mb-4 shadow-xs">
            <span>
              {lang === 'ja'
                ? '対象産業セクター・事業領域'
                : lang === 'ar'
                ? 'القطاعات الصناعية الاستراتيجية'
                : lang === 'en'
                ? 'STRATEGIC SECTORS SERVED'
                : 'SEKTOR INDUSTRI STRATEGIS'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1D1D1F] dark:text-white tracking-tight leading-[1.12]">
            {lang === 'ja' ? (
              <>
                ミッションクリティカル産業に特化した <span className="text-gradient-brand">エンジニアリング</span>
              </>
            ) : lang === 'ar' ? (
              <>
                حلول هندسية مخصصة <span className="text-gradient-brand">للقطاعات الحيوية</span>
              </>
            ) : lang === 'en' ? (
              <>
                Engineered for <span className="text-gradient-brand">Critical Industries</span>
              </>
            ) : (
              <>
                Solusi Khusus untuk <span className="text-gradient-brand">Sektor Berisiko Tinggi</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-[#6E6E73] dark:text-[#A1A1A6] text-base leading-relaxed">
            {lang === 'ja'
              ? '国家インフラ、海洋・オフショア探査、中央省庁の極めて厳格な要件に応える実証済みアーキテクチャ。'
              : lang === 'ar'
              ? 'تلبي تصاميمنا الهندسية المثبتة ميدانياً أدق متطلبات البنية التحتية الوطنية، التنقيب البحري، والحوكمة الحكومية.'
              : lang === 'en'
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
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                    isSelected
                      ? 'bg-[#0071E3] text-white border-transparent shadow-md scale-[1.01]'
                      : 'bg-white dark:bg-[#161617] border-black/[0.08] dark:border-white/[0.08] text-[#1D1D1F] dark:text-white hover:border-[#0071E3]/40 shadow-xs'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-black/[0.03] dark:bg-white/[0.06] text-[#0071E3] dark:text-[#2997FF]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">
                        {getLangText(ind.name, lang)}
                      </div>
                      <div className={`text-[11px] line-clamp-1 ${isSelected ? 'text-blue-100' : 'text-[#6E6E73] dark:text-[#A1A1A6]'}`}>
                        {getLangText(ind.tagline, lang)}
                      </div>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-white translate-x-0.5' : 'text-[#86868B]'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Card */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#161617] p-8 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] shadow-sm relative overflow-hidden animate-fadeIn">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/[0.06] dark:border-white/[0.08]">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-black/[0.03] dark:bg-white/[0.06] text-[#0071E3] dark:text-[#2997FF] flex items-center justify-center border border-black/[0.06] dark:border-white/[0.08]">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#1D1D1F] dark:text-white">
                      {getLangText(selectedIndustry.name, lang)}
                    </h3>
                    <span className="text-xs font-mono font-medium text-[#0071E3] dark:text-[#2997FF]">
                      {lang === 'ja'
                        ? '主要クライアント導入実績: '
                        : lang === 'ar'
                        ? 'العميل الاستراتيجي المعتمد: '
                        : lang === 'en'
                        ? 'VERIFIED CLIENT ENGAGEMENT: '
                        : 'KLIEN STRATEGIS TERBUKTI: '}
                      <strong className="text-[#1D1D1F] dark:text-white font-sans">{selectedIndustry.clientRef}</strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* Delivery Scope */}
              <div className="mb-6">
                <div className="text-xs text-[#86868B] uppercase tracking-wider mb-2 font-mono font-medium">
                  {lang === 'ja'
                    ? '現場導入実績・提供スコープ:'
                    : lang === 'ar'
                    ? 'نطاق العمل المنفذ ميدانياً:'
                    : lang === 'en'
                    ? 'Field-Delivered Scope:'
                    : 'Cakupan Pekerjaan Terlaksana:'}
                </div>
                <p className="text-sm text-[#1D1D1F] dark:text-slate-200 leading-relaxed font-normal bg-black/[0.02] dark:bg-white/[0.04] p-4 rounded-2xl border border-black/[0.06] dark:border-white/[0.08]">
                  {getLangText(selectedIndustry.delivered, lang)}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <div className="text-xs text-[#1D1D1F] dark:text-white uppercase tracking-wider mb-3 font-mono font-semibold">
                  {lang === 'ja'
                    ? 'アーキテクチャの強み・主要仕様:'
                    : lang === 'ar'
                    ? 'أبرز المواصفات الهندسية:'
                    : lang === 'en'
                    ? 'Architectural Highlights & Moats:'
                    : 'Spesifikasi & Keunggulan Desain:'}
                </div>
                <div className="space-y-2.5">
                  {selectedIndustry.keyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-3 text-xs sm:text-sm text-[#1D1D1F] dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-[#0071E3] dark:text-[#2997FF] flex-shrink-0" />
                      <span>{getLangText(feat as any, lang)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
                <span className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] font-normal">
                  {lang === 'ja'
                    ? '公式契約書・作業発注書（SPK）照会可能'
                    : lang === 'ar'
                    ? 'العقود والوثائق الرسمية للمشاريع متاحة'
                    : lang === 'en'
                    ? 'Official Documentation & Contracts Available'
                    : 'Dokumen Kontrak & SPK Resmi Terlampir'}
                </span>
                <button
                  onClick={onExploreProjects}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-medium transition-all shadow-xs cursor-pointer"
                >
                  <span>
                    {lang === 'ja'
                      ? 'このセクターの事例を見る'
                      : lang === 'ar'
                      ? 'عرض مشاريع هذا القطاع'
                      : lang === 'en'
                      ? 'View Case Studies'
                      : 'Lihat Portofolio Sektor'}
                  </span>
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
