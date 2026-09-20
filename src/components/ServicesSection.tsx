import React, { useState } from 'react';
import {
  Network,
  Ship,
  ShieldCheck,
  Cpu,
  Camera,
  Code2,
  MapPin,
  Zap,
  LayoutGrid,
  Activity,
  Radio,
  Wifi,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import type { Service } from '../data/companyData';
import { useCms } from '../context/CmsContext';

interface ServicesProps {
  lang: 'en' | 'id';
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesProps> = ({ lang, onOpenConsultation }) => {
  const { services } = useCms();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const iconMap: Record<string, React.ElementType> = {
    Network,
    Ship,
    ShieldCheck,
    Cpu,
    Camera,
    Code2,
    MapPin,
    Zap,
    LayoutGrid,
    Activity,
    Radio,
    Wifi,
  };

  const categories = [
    { id: 'all', label: { en: 'All Services', id: 'Semua Layanan' } },
    { id: 'Infrastructure', label: { en: 'Core Infrastructure', id: 'Infrastruktur Inti' } },
    { id: 'Maritime', label: { en: 'Marine & VSAT', id: 'Maritim & VSAT' } },
    { id: 'Security', label: { en: 'Cyber Security', id: 'Keamanan Siber' } },
    { id: 'Software', label: { en: 'Software & GIS', id: 'Software & GIS' } },
    { id: 'IoT', label: { en: 'Smart IoT', id: 'Smart IoT' } },
    { id: 'Surveillance', label: { en: 'AI Surveillance', id: 'CCTV & Pengawasan' } },
  ];

  const filteredServices =
    selectedCategory === 'all'
      ? services
      : services.filter(
          (s) => s.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <section id="services" className="py-24 bg-transparent relative overflow-hidden transition-colors">
      {/* Top Animated Beam Sweep Divider */}
      <div className="beam-divider opacity-60 mb-12"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] text-[#0071E3] dark:text-[#2997FF] text-xs font-mono font-medium tracking-wider mb-4 shadow-xs">
            <span>{lang === 'en' ? 'COMPREHENSIVE CAPABILITIES' : 'LAYANAN TERPADU MNK'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1D1D1F] dark:text-white tracking-tight leading-[1.12]">
            {lang === 'en' ? (
              <>
                Mission-Critical <span className="text-gradient-brand">Technology Services</span>
              </>
            ) : (
              <>
                Layanan Teknologi <span className="text-gradient-brand">Infrastruktur Strategis</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-[#6E6E73] dark:text-[#A1A1A6] text-base leading-relaxed">
            {lang === 'en'
              ? 'From carrier-grade routing and deep-ocean VSAT telemetry to Fortinet NSE 7 cybersecurity and custom ministerial software engines.'
              : 'Mulai dari arsitektur jaringan carrier-grade, satelit laut lepas, keamanan siber Fortinet NSE 7, hingga rekayasa piranti lunak kementerian.'}
          </p>
        </div>

        {/* Category Filters (Apple Pill Style) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#0071E3] text-white shadow-xs scale-105'
                  : 'bg-black/[0.04] dark:bg-white/[0.06] text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white border border-black/[0.06] dark:border-white/[0.08]'
              }`}
            >
              {cat.label[lang]}
            </button>
          ))}
        </div>

        {/* 12 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Network;
            return (
              <div
                key={service.id}
                className="bg-white dark:bg-[#161617] p-7 rounded-3xl flex flex-col justify-between border border-black/[0.08] dark:border-white/[0.08] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Tech Badge */}
                <div className="absolute top-4 right-4 text-[10px] font-mono text-[#86868B] group-hover:text-[#0071E3] transition-colors">
                  [SRV_0{idx + 1}]
                </div>

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-black/[0.03] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center text-[#0071E3] dark:text-[#2997FF] group-hover:scale-105 transition-transform duration-300 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-black/[0.04] dark:bg-white/[0.08] text-[#1D1D1F] dark:text-white border border-black/[0.06] dark:border-white/[0.08] uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-[#1D1D1F] dark:text-white mb-2 leading-snug">
                    {service.title[lang]}
                  </h3>

                  <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed font-normal mb-5">
                    {service.description[lang]}
                  </p>

                  {/* Key Benefits List */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] text-[#1D1D1F] dark:text-white uppercase font-mono tracking-wider font-semibold">
                      {lang === 'en' ? 'Key Deliverables & Benefits:' : 'Keunggulan & Manfaat:'}
                    </div>
                    {service.benefits[lang].map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start space-x-2 text-xs text-[#1D1D1F] dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#2997FF] mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges & Consultation Link */}
                <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-black/[0.03] dark:bg-white/[0.06] text-[#6E6E73] dark:text-[#A1A1A6]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onOpenConsultation}
                    className="w-full flex items-center justify-between py-1.5 text-xs font-semibold text-[#0071E3] dark:text-[#2997FF] hover:underline transition-colors group/btn cursor-pointer"
                  >
                    <span>{lang === 'en' ? 'Inquire Technical Scope' : 'Konsultasikan Layanan Ini'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
