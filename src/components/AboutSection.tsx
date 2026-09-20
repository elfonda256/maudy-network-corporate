import React, { useState } from 'react';
import { Target, CheckCircle2, ArrowUpRight, Building2, Waves, Cpu, Shield } from 'lucide-react';

interface AboutProps {
  lang: 'en' | 'id';
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutProps> = ({ lang, onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission' | 'values'>('vision');

  const milestones = [
    {
      year: '2020',
      title: { en: 'Maritime & Enterprise Breakthrough', id: 'Ekspansi Jaringan Maritim & BUMN' },
      desc: {
        en: 'Awarded core network contracts for Pertamina International Shipping vessels and enterprise telemetry automation.',
        id: 'Meraih kepercayaan pengadaan Core Network HA kapal tanker dan sistem otomatisasi telemetri monitoring Pertamina.',
      },
    },
    {
      year: '2022',
      title: { en: 'National Academic & Energy Expansion', id: 'Modernisasi Kampus & Pemodelan Energi' },
      desc: {
        en: 'Completed campus-wide network assessment for Universitas Pertamina and DIgSILENT PowerFactory simulation for Pertamina Power Indonesia.',
        id: 'Audit kelaikan sistem IT Universitas Pertamina dan penyediaan software simulasi kelistrikan transmisi PowerFactory.',
      },
    },
    {
      year: '2023',
      title: { en: 'Strategic Government & Public Works', id: 'Transformasi Digital Irigasi PUPR' },
      desc: {
        en: 'Architected the Rentang Irrigation Modernization Web GIS & DSS for Kementerian PUPR and delivered 30 Hytera PoC units across Indonesia.',
        id: 'Rancang bangun DSS Irigasi berbasis geospasial Kementerian PUPR dan penggelaran 30 radio digital Hytera PoC nasional.',
      },
    },
    {
      year: '2024',
      title: { en: 'High-Rise Security & In-House IoT', id: 'Pemeliharaan Menara BUMN & Molinar.id' },
      desc: {
        en: 'Undertook ongoing surveillance maintenance for 180 Honeywell cameras across 22 floors of Kementerian BUMN Tower and expanded Molinar.id.',
        id: 'Pemeliharaan berkala 180 titik CCTV Menara Kementerian BUMN dan komersialisasi ekosistem telekontrol IoT Molinar.id.',
      },
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-transparent transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] text-[#0071E3] dark:text-[#2997FF] text-xs font-mono font-medium tracking-wider mb-4 shadow-xs">
            <span>{lang === 'en' ? 'ABOUT MAUDY NETWORK KOMUNIKASI' : 'TENTANG MAUDY NETWORK'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1D1D1F] dark:text-white tracking-tight leading-[1.12]">
            {lang === 'en' ? (
              <>
                Engineered for <span className="text-gradient-brand">Reliability</span>, Secured by{' '}
                <span className="text-gradient-brand">Global Expertise</span>
              </>
            ) : (
              <>
                Dirancang untuk <span className="text-gradient-brand">Keandalan</span>, Dilindungi oleh{' '}
                <span className="text-gradient-brand">Keahlian Global</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-[#6E6E73] dark:text-[#A1A1A6] text-base leading-relaxed">
            {lang === 'en'
              ? 'Headquartered in Semarang, Central Java, Maudy Network Komunikasi (MNK) has grown into a premier integrated Information & Telecommunications solutions provider focused on nationwide strategic infrastructure across land and sea.'
              : 'Berpusat di Semarang, Jawa Tengah, Maudy Network Komunikasi (MNK) tumbuh menjadi penyedia solusi Teknologi Informasi dan Telekomunikasi terintegrasi yang berfokus pada infrastruktur strategis berskala nasional lintas darat dan laut.'}
          </p>
        </div>

        {/* Two-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          {/* Left: Official Maudy Network Brand Identity Showcase Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#161617] p-8 sm:p-10 shadow-sm group flex flex-col justify-between min-h-[400px]">
              {/* Subtle ambient light corner glow */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-red-500/5 dark:bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>

              {/* Card Header Tag */}
              <div className="flex items-center justify-between z-10 border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[11px] font-mono font-medium text-[#6E6E73] dark:text-[#A1A1A6] uppercase tracking-wider">
                    OPERATIONAL INTEGRATOR HQ
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-black/[0.04] dark:bg-white/[0.08] text-[#1D1D1F] dark:text-white">
                  EST. 2020
                </span>
              </div>

              {/* Center: High-Res Official Logo with subtle elevation */}
              <div className="my-auto py-8 flex flex-col items-center justify-center text-center z-10">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-black/[0.08] shadow-sm transition-transform group-hover:scale-105 duration-300 mb-5 max-w-[280px] sm:max-w-[320px]">
                  <img
                    src="/logo-mnk.png"
                    alt="Maudy Network Komunikasi"
                    className="max-h-16 sm:max-h-20 w-auto object-contain mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#1D1D1F] dark:text-white tracking-tight mb-1">
                  PT Maudy Network Komunikasi
                </h3>
                <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] font-mono font-medium">
                  Enterprise ICT • Maritime VSAT • IoT Smart Infrastructure
                </p>
              </div>

              {/* Card Footer: Verified Credentials Pills */}
              <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08] z-10">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-center text-[10px] font-mono">
                  <div className="p-2.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08]">
                    <span className="block text-[#86868B]">Kantor Pusat</span>
                    <span className="font-semibold text-[#1D1D1F] dark:text-white text-xs">Semarang, Jateng</span>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08]">
                    <span className="block text-[#86868B]">Legalitas Usaha</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400 text-xs">NIB 1284000320491</span>
                  </div>
                  <div className="col-span-2 sm:col-span-1 p-2.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08]">
                    <span className="block text-[#86868B]">Status Pajak</span>
                    <span className="font-semibold text-[#0071E3] dark:text-[#2997FF] text-xs">PKP Terdaftar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Vision, Mission & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono font-semibold text-[#0071E3] dark:text-[#2997FF] uppercase tracking-wider">
              {lang === 'en' ? 'Beyond Conventional IT Integration' : 'Bukan Sekadar Integrator Konvensional'}
            </div>
            <p className="text-[#1D1D1F] dark:text-slate-200 text-base leading-relaxed font-normal">
              {lang === 'en'
                ? 'We bridge the gap between industrial harsh-environment hardware and executive business decision-making. By combining enterprise network architecture, Fortinet NSE 7 cybersecurity rigor, and proprietary software innovation (Molinar.id & Big Data Analytics), we guarantee our clients uninterrupted operations across demanding terrains.'
                : 'Kami bukan sekadar integrator sistem IT konvensional. MNK memadukan keandalan arsitektur jaringan (Enterprise & Marine Network), ketangguhan keamanan siber, dan inovasi perangkat lunak cerdas (IoT & Big Data Analytics). Memastikan operasional klien kami berjalan tanpa henti di berbagai medan kritis.'}
            </p>

            {/* Vision / Mission / Values Segmented Tab */}
            <div className="bg-white dark:bg-[#161617] rounded-3xl p-6 border border-black/[0.08] dark:border-white/[0.08] shadow-xs">
              <div className="inline-flex p-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] mb-5 text-xs font-medium">
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                    activeTab === 'vision'
                      ? 'bg-[#0071E3] text-white shadow-xs'
                      : 'text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white'
                  }`}
                >
                  {lang === 'en' ? 'Our Vision' : 'Visi Kami'}
                </button>
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                    activeTab === 'mission'
                      ? 'bg-[#0071E3] text-white shadow-xs'
                      : 'text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white'
                  }`}
                >
                  {lang === 'en' ? 'Our Mission' : 'Misi Kami'}
                </button>
                <button
                  onClick={() => setActiveTab('values')}
                  className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                    activeTab === 'values'
                      ? 'bg-[#0071E3] text-white shadow-xs'
                      : 'text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white'
                  }`}
                >
                  {lang === 'en' ? 'Core Values' : 'Nilai Utama'}
                </button>
              </div>

              {activeTab === 'vision' && (
                <div className="animate-fadeIn">
                  <div className="flex items-start space-x-3.5">
                    <div className="w-8 h-8 rounded-full bg-[#0071E3]/10 text-[#0071E3] flex items-center justify-center shrink-0 mt-0.5">
                      <Target className="w-4 h-4" />
                    </div>
                    <p className="text-sm text-[#1D1D1F] dark:text-slate-200 leading-relaxed font-normal">
                      "
                      {lang === 'en'
                        ? 'To be the foremost strategic partner in Indonesia for providing network infrastructure and intelligent technology solutions that are sustainable, secure, reliable, and innovative.'
                        : 'Menjadi mitra strategis terdepan di Indonesia dalam penyediaan infrastruktur jaringan dan solusi teknologi cerdas yang aman, andal, dan inovatif secara berkelanjutan.'}
                      "
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'mission' && (
                <ul className="space-y-3 text-xs sm:text-sm text-[#1D1D1F] dark:text-slate-300 animate-fadeIn">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0071E3] dark:text-[#2997FF] mt-0.5 flex-shrink-0" />
                    <span>
                      {lang === 'en'
                        ? 'Deliver end-to-end network architecture adhering to international reliability standards.'
                        : 'Memberikan solusi arsitektur jaringan end-to-end dengan standar reliabilitas internasional.'}
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0071E3] dark:text-[#2997FF] mt-0.5 flex-shrink-0" />
                    <span>
                      {lang === 'en'
                        ? 'Integrate hardware, software, and predictive data analytics for maximum operational efficiency.'
                        : 'Mengintegrasikan hardware, software, dan analitik data untuk efisiensi operasional menyeluruh.'}
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0071E3] dark:text-[#2997FF] mt-0.5 flex-shrink-0" />
                    <span>
                      {lang === 'en'
                        ? 'Ensure uninterrupted service uptime through proactive 24/7 Network Operation Center (NOC) surveillance.'
                        : 'Memastikan ketersediaan layanan tanpa jeda melalui sistem pemantauan (NOC) yang proaktif.'}
                    </span>
                  </li>
                </ul>
              )}

              {activeTab === 'values' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 animate-fadeIn">
                  <div className="bg-black/[0.02] dark:bg-white/[0.04] p-4 rounded-2xl border border-black/[0.06] dark:border-white/[0.08]">
                    <div className="text-xs font-semibold text-[#0071E3] dark:text-[#2997FF] mb-1">Reliability</div>
                    <div className="text-xs text-[#6E6E73] dark:text-[#A1A1A6]">
                      {lang === 'en' ? '99.9% uptime SLA for critical operations' : 'Ketersediaan jaringan 99.9% tanpa henti'}
                    </div>
                  </div>
                  <div className="bg-black/[0.02] dark:bg-white/[0.04] p-4 rounded-2xl border border-black/[0.06] dark:border-white/[0.08]">
                    <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">Security</div>
                    <div className="text-xs text-[#6E6E73] dark:text-[#A1A1A6]">
                      {lang === 'en' ? 'Fortinet NSE 7 zero-trust cybersecurity' : 'Protokol keamanan siber tingkat tinggi'}
                    </div>
                  </div>
                  <div className="bg-black/[0.02] dark:bg-white/[0.04] p-4 rounded-2xl border border-black/[0.06] dark:border-white/[0.08]">
                    <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-1">Agility</div>
                    <div className="text-xs text-[#6E6E73] dark:text-[#A1A1A6]">
                      {lang === 'en' ? 'Adaptive from land data centers to offshore' : 'Adaptif dari darat hingga lepas pantai'}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center space-x-1.5 text-sm font-semibold text-[#0071E3] dark:text-[#2997FF] hover:underline cursor-pointer"
            >
              <span>{lang === 'en' ? 'Consult with our Chief Architect' : 'Konsultasikan Kebutuhan Anda'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="pt-12 border-t border-black/[0.06] dark:border-white/[0.08]">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold text-[#1D1D1F] dark:text-white tracking-tight">
              {lang === 'en' ? 'Track Record of Proven Execution' : 'Rekam Jejak Keberhasilan Strategis'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#161617] p-6 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-default"
              >
                <div className="text-2xl font-bold font-mono text-[#0071E3] dark:text-[#2997FF] mb-2 group-hover:scale-105 transition-transform origin-left">
                  {m.year}
                </div>
                <h4 className="text-sm font-semibold text-[#1D1D1F] dark:text-white mb-2 leading-snug">
                  {m.title[lang]}
                </h4>
                <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed font-normal">
                  {m.desc[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
