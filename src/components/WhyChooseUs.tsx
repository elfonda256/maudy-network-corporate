import React from 'react';
import {
  Award,
  Globe2,
  Anchor,
  Cpu,
  ShieldCheck,
  Headphones,
  Server,
  Building,
  CheckCircle,
} from 'lucide-react';

interface WhyChooseProps {
  lang: 'en' | 'id';
}

export const WhyChooseUs: React.FC<WhyChooseProps> = ({ lang }) => {
  const features = [
    {
      icon: Award,
      title: { en: 'Certified Global Expertise', id: 'Arsitek Bersertifikasi Global' },
      badge: 'Cisco CCNP • Fortinet NSE 7',
      desc: {
        en: 'Led by elite certified engineers (CCNP, NSE 7 Architect, MTCINE, Ruijie Specialist). We design enterprise networks with world-class security baselines.',
        id: 'Dipimpin langsung arsitek jaringan elite dunia: Cisco CCNP, Fortinet NSE 7 Architect, MikroTik MTCINE, dan Ruijie Specialist.',
      },
      iconColor: 'text-[#0050AE] dark:text-cyan-400',
    },
    {
      icon: Globe2,
      title: { en: 'Proven in High-Stakes Arenas', id: 'Teruji pada Medan Berisiko Tinggi' },
      badge: 'Zero-Tolerance Downtime',
      desc: {
        en: 'Deep track record managing critical operations: Pertamina International Shipping vessels, Kementerian BUMN 22-floor CCTV, to national PUPR irrigation.',
        id: 'Rekam jejak panjang menangani proyek strategis: instalasi VSAT kapal Pertamina, CCTV Kementerian BUMN, hingga Modernisasi Irigasi PUPR.',
      },
      iconColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      icon: Anchor,
      title: { en: 'Marine Network Specialist', id: 'Spesialis Jaringan Maritim & Lepas Pantai' },
      badge: 'Oceanic VSAT & QoS Shaping',
      desc: {
        en: 'Engineering satellite connectivity that operates reliably in mid-ocean, optimizing restricted 512Kbps bandwidth for 30+ crew and navigation telemetry.',
        id: 'Menghadirkan komunikasi satelit yang stabil di tengah laut lepas, mengoptimalkan bandwidth terbatas 512Kbps untuk navigasi dan 30+ awak kapal.',
      },
      iconColor: 'text-indigo-600 dark:text-indigo-400',
    },
    {
      icon: Cpu,
      title: { en: 'In-House Proprietary Innovation', id: 'Inovasi Teknologi Mandiri' },
      badge: 'Molinar.id • AP Portal ERP',
      desc: {
        en: 'We engineer our own proprietary technologies such as Molinar.id (industrial IoT & telemetry), AP Portal ERP, and automated PIS_BOT alert systems.',
        id: 'MNK secara mandiri mengembangkan platform buatan sendiri: Molinar.id (Sistem Telemetri & IoT) dan AP Portal ERP berstandar korporasi.',
      },
      iconColor: 'text-purple-600 dark:text-purple-400',
    },
    {
      icon: ShieldCheck,
      title: { en: 'Fortinet NSE 7 Cyber Security', id: 'Keamanan Siber Tingkat Lanjut' },
      badge: 'Zero-Trust Architecture',
      desc: {
        en: 'Comprehensive perimeter defense, next-generation firewall configurations, deep intrusion prevention, and micro-segmentation against persistent threats.',
        id: 'Pertahanan perimeter komprehensif, konfigurasi firewall generasi baru, pencegahan intrusi mendalam, dan segmentasi aman dari serangan siber.',
      },
      iconColor: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      icon: Headphones,
      title: { en: '24/7 Proactive NOC Support', id: 'Dukungan Teknis NOC 24/7' },
      badge: 'Instant Bot Alerting',
      desc: {
        en: 'End-to-end management from physical survey and deployment to round-the-clock surveillance, sub-minute anomaly alerts, and SLA monthly audits.',
        id: 'Layanan terpadu mulai dari assessment, deployment fisik, hingga after-sales berupa pemantauan 24/7 (NOC) dan SLA berkala setiap bulan.',
      },
      iconColor: 'text-[#FFB800] dark:text-amber-400',
    },
    {
      icon: Server,
      title: { en: 'Dual-Provider High Availability', id: 'Infrastruktur Redundan & HA' },
      badge: '99.9% Uptime SLA',
      desc: {
        en: 'Master and backup failover architecture designed to eliminate single points of failure across critical servers, corporate events, and data centers.',
        id: 'Arsitektur failover master & backup aktif untuk mengeliminasi titik kegagalan tunggal pada server kritis, siaran KTT, dan pusat data.',
      },
      iconColor: 'text-rose-600 dark:text-rose-400',
    },
    {
      icon: Building,
      title: { en: 'Trusted by Government & SOEs', id: 'Dipercaya BUMN & Kementerian' },
      badge: 'Audited & Compliant',
      desc: {
        en: 'Official procurement compliance with rigorous HSE standards, validated BAST deliverables, and sustained relationships with Pertamina & Ministries.',
        id: 'Kepatuhan tata kelola pengadaan resmi BUMN, kepatuhan K3/HSE, serta penerimaan dokumen BAST resmi dari institusi pemerintah.',
      },
      iconColor: 'text-teal-600 dark:text-teal-400',
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#06101B] border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-[#0050AE] dark:text-cyan-300 text-xs font-mono font-bold mb-3">
            <span>{lang === 'en' ? 'OUR COMPETITIVE ADVANTAGE' : 'KEUNGGULAN STRATEGIS MNK'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#002D62] dark:text-white tracking-tight">
            {lang === 'en' ? (
              <>
                Why Global Enterprises & Government Trust <span className="text-[#0050AE] dark:text-cyan-400">MNK</span>
              </>
            ) : (
              <>
                Mengapa Institusi Pemerintah & Korporasi Memilih <span className="text-[#0050AE] dark:text-cyan-400">MNK</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            {lang === 'en'
              ? 'We combine elite tier certifications, in-house software patents, and real-world resilience across high-stakes national infrastructure.'
              : 'Memadukan sertifikasi insinyur tingkat dunia, inovasi piranti lunak mandiri, dan ketangguhan di berbagai medan infrastruktur nasional.'}
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#0B1F3A]/70 p-6 rounded-2xl flex flex-col justify-between border border-slate-200 dark:border-slate-800 hover:border-[#0050AE] dark:hover:border-cyan-500/40 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 ${feat.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/30 text-[#0050AE] dark:text-cyan-300 border border-blue-200 dark:border-blue-700/40">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#002D62] dark:text-white mb-2 group-hover:text-[#0050AE] dark:group-hover:text-cyan-300 transition-colors">
                    {feat.title[lang]}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {feat.desc[lang]}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center space-x-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-cyan-400" />
                  <span>{lang === 'en' ? 'Enterprise Ready' : 'Standar Korporasi'}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
