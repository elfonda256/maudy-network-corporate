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
    <section id="services" className="py-24 bg-white dark:bg-[#081522] border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gradient-pill text-[#0050AE] dark:text-cyan-300 text-xs font-bold tracking-wider mb-3">
            <span>{lang === 'en' ? 'COMPREHENSIVE CAPABILITIES' : 'LAYANAN TERPADU MNK'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#002D62] dark:text-white tracking-tight">
            {lang === 'en' ? (
              <>
                Mission-Critical <span className="text-gradient-ocean dark:text-gradient-creative">Technology Services</span>
              </>
            ) : (
              <>
                Layanan Teknologi <span className="text-gradient-ocean dark:text-gradient-creative">Infrastruktur Strategis</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {lang === 'en'
              ? 'From carrier-grade routing and deep-ocean VSAT telemetry to Fortinet NSE 7 cybersecurity and custom ministerial software engines.'
              : 'Mulai dari arsitektur jaringan carrier-grade, satelit laut lepas, keamanan siber Fortinet NSE 7, hingga rekayasa piranti lunak kementerian.'}
          </p>
        </div>

        {/* Category Filters (Mandiri Pill Style) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-brand text-white shadow-md shadow-blue-500/20'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-[#0050AE] dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat.label[lang]}
            </button>
          ))}
        </div>

        {/* 12 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.iconName] || Network;
            return (
              <div
                key={service.id}
                className="bg-white dark:bg-[#0B1F3A]/70 p-6 rounded-2xl flex flex-col justify-between border border-slate-200 dark:border-slate-800 hover:border-[#0050AE] dark:hover:border-cyan-500/40 gradient-border-top shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-blue-50 dark:bg-[#0B1F3A] border border-blue-100 dark:border-cyan-500/20 text-[#0050AE] dark:text-cyan-400 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-gradient-pill text-[#0050AE] dark:text-cyan-300 border border-blue-200 dark:border-blue-700/40 uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#002D62] dark:text-white mb-2.5 group-hover:text-gradient-ocean dark:group-hover:text-gradient-creative transition-colors">
                    {service.title[lang]}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-4">
                    {service.description[lang]}
                  </p>

                  {/* Key Benefits List */}
                  <div className="space-y-2 mb-5">
                    <div className="text-[11px] text-[#0050AE] dark:text-cyan-400 uppercase tracking-wider font-bold">
                      {lang === 'en' ? 'Key Deliverables & Benefits:' : 'Keunggulan & Manfaat:'}
                    </div>
                    {service.benefits[lang].map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start space-x-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0050AE] dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges & Consultation Link */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-50 dark:bg-[#081522] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onOpenConsultation}
                    className="w-full flex items-center justify-between py-2 text-xs font-bold text-[#0050AE] dark:text-cyan-400 hover:underline transition-colors"
                  >
                    <span>{lang === 'en' ? 'Inquire Technical Scope' : 'Konsultasikan Layanan Ini'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
