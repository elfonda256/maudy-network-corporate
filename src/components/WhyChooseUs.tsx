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
    <section className="py-24 bg-slate-50/60 dark:bg-[#06101B]/60 backdrop-blur-md border-t border-slate-200/70 dark:border-slate-800/70 transition-colors relative overflow-hidden">
      {/* Top Animated Beam Sweep Divider */}
      <div className="beam-divider opacity-60 mb-12"></div>

      {/* Decorative High-Tech Background Watermark */}
      <div className="absolute top-10 right-8 text-[11px] font-tech text-slate-400/30 dark:text-cyan-500/10 select-none pointer-events-none tracking-widest hidden md:block">
        [SYS_CORE: RELIABILITY_ARCH // MOAT_08]
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gradient-pill text-red-600 dark:text-red-400 text-xs font-tech font-bold tracking-wider mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-cyan-400 animate-ping mr-1"></span>
            <span>{lang === 'en' ? 'OUR COMPETITIVE ADVANTAGE' : 'KEUNGGULAN STRATEGIS MNK'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002D62] dark:text-white tracking-tight">
            {lang === 'en' ? (
              <>
                Why Global Enterprises & Government Trust <span className="text-gradient-brand">MNK</span>
              </>
            ) : (
              <>
                Mengapa Institusi Pemerintah & Korporasi Memilih <span className="text-gradient-brand">MNK</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
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
                className="interactive-card bg-white/80 dark:bg-[#0B1F3A]/75 backdrop-blur-md p-6 rounded-2xl flex flex-col justify-between border border-slate-200/80 dark:border-slate-800 hover:border-red-500/50 dark:hover:border-cyan-400/50 gradient-border-top shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                {/* Tech Corner Accent */}
                <div className="absolute top-2 right-2 text-[9px] font-tech text-slate-300 dark:text-slate-600 group-hover:text-red-500/60 dark:group-hover:text-cyan-400/60 transition-colors">
                  0{idx + 1}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-slate-50/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 ${feat.iconColor} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-xs`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-tech font-bold px-2 py-0.5 rounded-full bg-gradient-pill text-red-600 dark:text-red-400 border border-red-500/20 shadow-xs">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#002D62] dark:text-white mb-2 group-hover:text-gradient-brand transition-colors">
                    {feat.title[lang]}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {feat.desc[lang]}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center space-x-1.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="font-tech text-[10px] tracking-wide uppercase">{lang === 'en' ? 'ENTERPRISE READY // SLA VERIFIED' : 'STANDAR KORPORASI // TERUJI'}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
