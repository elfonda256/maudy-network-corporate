import React from 'react';
import { Clock, Server, CheckCircle2, Award } from 'lucide-react';

interface StatsBarProps {
  lang: 'en' | 'id';
}

export const StatsBar: React.FC<StatsBarProps> = ({ lang }) => {
  const stats = [
    {
      value: '99.9%',
      label: { en: 'Operational Availability SLA', id: 'Jaminan Ketersediaan SLA' },
      detail: { en: 'Zero-tolerance uptime for critical operations', id: 'Keandalan infrastruktur tanpa jeda' },
      icon: Server,
      color: 'text-[#0050AE] dark:text-cyan-400',
    },
    {
      value: '180+',
      label: { en: 'Surveillance Nodes Audited', id: 'Kamera CCTV Dikelola' },
      detail: { en: '22 floors of Kementerian BUMN Tower', id: '22 lantai Menara Kementerian BUMN' },
      icon: CheckCircle2,
      color: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      value: '512K',
      label: { en: 'Vessel Bandwidth Optimization', id: 'Optimasi Bandwidth Satelit' },
      detail: { en: 'Empowering 30+ crew on oceanic tankers', id: 'Dikelola efisien untuk 30 awak kapal' },
      icon: Clock,
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      value: '10+',
      label: { en: 'Global Tier-1 Certifications', id: 'Sertifikasi Global Tingkat Elit' },
      detail: { en: 'Cisco CCNP, Fortinet NSE 7, MikroTik MTCINE', id: 'Cisco CCNP, Fortinet NSE 7, MTCINE' },
      icon: Award,
      color: 'text-red-600 dark:text-red-400',
    },
  ];

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white/95 dark:bg-[#161617]/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-xl border border-black/[0.06] dark:border-white/[0.08] transition-all">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-black/[0.06] dark:divide-white/[0.08]">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`pt-4 sm:pt-0 ${idx > 0 ? 'sm:pl-6 lg:pl-8' : ''} flex flex-col justify-between group cursor-default transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl sm:text-4xl font-semibold font-mono tracking-tight text-[#1D1D1F] dark:text-white group-hover:scale-105 transition-transform origin-left">
                    {stat.value}
                  </span>
                  <div className="p-2.5 rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] group-hover:border-[#0071E3]/40 group-hover:scale-110 transition-all duration-300">
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight">
                    {stat.label[lang]}
                  </h3>
                  <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] mt-1 font-normal leading-relaxed">
                    {stat.detail[lang]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
