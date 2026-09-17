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
      <div className="bg-white/85 dark:bg-[#0B1F3A]/85 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200/90 dark:border-blue-500/20 gradient-border-top transition-all">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-slate-800">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`pt-4 sm:pt-0 ${idx > 0 ? 'sm:pl-6 lg:pl-8' : ''} flex flex-col justify-between group cursor-default transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl sm:text-4xl font-extrabold font-tech tracking-tight text-gradient-brand group-hover:scale-105 transition-transform origin-left">
                    {stat.value}
                  </span>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/50 group-hover:border-red-500/50 group-hover:scale-110 transition-all duration-300">
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#002D62] dark:text-white tracking-wide">
                    {stat.label[lang]}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-normal">
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
