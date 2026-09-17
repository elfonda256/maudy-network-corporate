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
    <section id="about" className="py-24 bg-white dark:bg-[#081522] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-[#0050AE] dark:text-cyan-300 text-xs font-mono font-bold mb-3">
            <span>{lang === 'en' ? 'ABOUT MAUDY NETWORK KOMUNIKASI' : 'TENTANG MNK'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#002D62] dark:text-white tracking-tight">
            {lang === 'en' ? (
              <>
                Engineered for <span className="text-[#0050AE] dark:text-cyan-400">Reliability</span>, Secured by{' '}
                <span className="text-[#FFB800] dark:text-blue-400">Global Expertise</span>
              </>
            ) : (
              <>
                Dirancang untuk <span className="text-[#0050AE] dark:text-cyan-400">Keandalan</span>, Dilindungi oleh{' '}
                <span className="text-[#FFB800] dark:text-blue-400">Keahlian Global</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'Headquartered in Semarang, Central Java, Maudy Network Komunikasi (MNK) has grown into a premier integrated Information & Telecommunications solutions provider focused on nationwide strategic infrastructure across land and sea.'
              : 'Berpusat di Semarang, Jawa Tengah, Maudy Network Komunikasi (MNK) tumbuh menjadi penyedia solusi Teknologi Informasi dan Telekomunikasi terintegrasi yang berfokus pada infrastruktur strategis berskala nasional lintas darat dan laut.'}
          </p>
        </div>

        {/* Two-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left: Authentic Datacenter / Engineering Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-cyan-500/30 shadow-xl group">
              <img
                src="/extracted/img_001.jpg"
                alt="MNK Enterprise Data Center Engineering"
                className="w-full h-[380px] sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              {/* Floating Live Telemetry Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-[#0B1F3A]/90 p-4 rounded-2xl border border-slate-200 dark:border-cyan-500/30 backdrop-blur-md shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                    <div>
                      <div className="text-xs font-mono font-bold text-[#002D62] dark:text-white">
                        {lang === 'en' ? 'Critical Systems Online' : 'Sistem Kritis Aktif'}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-300">
                        {lang === 'en' ? 'Semarang HQ • Nationwide Nodes' : 'Kantor Pusat Semarang • Titik Operasi Nasional'}
                      </div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#0050AE] text-white text-xs font-mono font-bold shadow-xs">
                    SLA 99.9%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Vision, Mission & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono font-bold text-[#0050AE] dark:text-cyan-400 uppercase tracking-wider">
              {lang === 'en' ? 'Beyond Conventional IT Integration' : 'Bukan Sekadar Integrator Konvensional'}
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              {lang === 'en'
                ? 'We bridge the gap between industrial harsh-environment hardware and executive business decision-making. By combining enterprise network architecture, Fortinet NSE 7 cybersecurity rigor, and proprietary software innovation (Molinar.id & Big Data Analytics), we guarantee our clients uninterrupted operations across demanding terrains.'
                : 'Kami bukan sekadar integrator sistem IT konvensional. MNK memadukan keandalan arsitektur jaringan (Enterprise & Marine Network), ketangguhan keamanan siber, dan inovasi perangkat lunak cerdas (IoT & Big Data Analytics). Memastikan operasional klien kami berjalan tanpa henti di berbagai medan kritis.'}
            </p>

            {/* Vision / Mission / Values Switcher */}
            <div className="bg-slate-50 dark:bg-[#0B1F3A]/70 rounded-2xl p-5 border border-slate-200 dark:border-slate-800">
              <div className="flex border-b border-slate-200 dark:border-slate-700 pb-3 mb-4 space-x-4 text-xs font-bold">
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`pb-1 transition-all ${
                    activeTab === 'vision'
                      ? 'text-[#0050AE] dark:text-cyan-400 border-b-2 border-[#0050AE] dark:border-cyan-400 font-extrabold'
                      : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                  }`}
                >
                  {lang === 'en' ? 'Our Vision' : 'Visi Kami'}
                </button>
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`pb-1 transition-all ${
                    activeTab === 'mission'
                      ? 'text-[#0050AE] dark:text-cyan-400 border-b-2 border-[#0050AE] dark:border-cyan-400 font-extrabold'
                      : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                  }`}
                >
                  {lang === 'en' ? 'Our Mission' : 'Misi Kami'}
                </button>
                <button
                  onClick={() => setActiveTab('values')}
                  className={`pb-1 transition-all ${
                    activeTab === 'values'
                      ? 'text-[#0050AE] dark:text-cyan-400 border-b-2 border-[#0050AE] dark:border-cyan-400 font-extrabold'
                      : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                  }`}
                >
                  {lang === 'en' ? 'Core Values' : 'Nilai Utama'}
                </button>
              </div>

              {activeTab === 'vision' && (
                <div className="animate-fadeIn">
                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-[#0050AE] dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-slate-700 dark:text-slate-200 italic font-medium">
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
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 animate-fadeIn">
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0050AE] dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>
                      {lang === 'en'
                        ? 'Deliver end-to-end network architecture adhering to international reliability standards.'
                        : 'Memberikan solusi arsitektur jaringan end-to-end dengan standar reliabilitas internasional.'}
                    </span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0050AE] dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>
                      {lang === 'en'
                        ? 'Integrate hardware, software, and predictive data analytics for maximum operational efficiency.'
                        : 'Mengintegrasikan hardware, software, dan analitik data untuk efisiensi operasional menyeluruh.'}
                    </span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0050AE] dark:text-cyan-400 mt-0.5 flex-shrink-0" />
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
                  <div className="bg-white dark:bg-[#081522]/90 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                    <div className="text-xs font-bold text-[#0050AE] dark:text-cyan-400 mb-1">Reliability</div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-300">
                      {lang === 'en' ? '99.9% uptime SLA for critical operations' : 'Ketersediaan jaringan 99.9% tanpa henti'}
                    </div>
                  </div>
                  <div className="bg-white dark:bg-[#081522]/90 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                    <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-1">Security</div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-300">
                      {lang === 'en' ? 'Fortinet NSE 7 zero-trust cybersecurity' : 'Protokol keamanan siber tingkat tinggi'}
                    </div>
                  </div>
                  <div className="bg-white dark:bg-[#081522]/90 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                    <div className="text-xs font-bold text-[#FFB800] dark:text-blue-400 mb-1">Agility</div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-300">
                      {lang === 'en' ? 'Adaptive from land data centers to offshore' : 'Adaptif dari darat hingga lepas pantai'}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center space-x-2 text-xs font-bold text-[#0050AE] dark:text-cyan-400 hover:underline"
            >
              <span>{lang === 'en' ? 'Consult with our Chief Architect' : 'Konsultasikan Kebutuhan Anda'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="pt-12 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-[#002D62] dark:text-white">
              {lang === 'en' ? 'Track Record of Proven Execution' : 'Rekam Jejak Keberhasilan Strategis'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-[#0B1F3A]/70 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-[#0050AE] dark:hover:border-cyan-500/40 transition-all shadow-xs hover:shadow-md"
              >
                <div className="text-2xl font-mono font-black text-[#0050AE] dark:text-cyan-400 mb-2">
                  {m.year}
                </div>
                <h4 className="text-sm font-bold text-[#002D62] dark:text-white mb-2">
                  {m.title[lang]}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
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
