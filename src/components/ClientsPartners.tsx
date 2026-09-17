import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Building2, 
  Cpu, 
  CheckCircle2, 
  Image as ImageIcon, 
  X, 
  ExternalLink, 
  FileCheck, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { useCms } from '../context/CmsContext';
import type { ClientItem } from '../context/CmsContext';

interface ClientsPartnersProps {
  lang: 'en' | 'id';
}

export const ClientsPartners: React.FC<ClientsPartnersProps> = ({ lang }) => {
  const { clients } = useCms();
  const [activeTab, setActiveTab] = useState<'clients' | 'tech'>('clients');
  const [selectedClient, setSelectedClient] = useState<ClientItem | null>(null);

  const clientInstitutions = clients.filter((c) => c.type === 'client');
  const techPartners = clients.filter((c) => c.type === 'partner');
  const currentList = activeTab === 'clients' ? clientInstitutions : techPartners;

  // Duplicate for smooth seamless infinite marquee loop
  const marqueeList = [...clients, ...clients];

  return (
    <section className="relative py-20 bg-slate-50/80 dark:bg-[#06101B]/80 backdrop-blur-md border-y border-slate-200/80 dark:border-slate-800/80 transition-colors overflow-hidden">
      {/* Decorative High-Tech Corner Crosshairs */}
      <div className="absolute top-4 left-6 text-slate-400/40 dark:text-cyan-400/20 text-[10px] font-mono select-none">
        ┌ CLIENT_REGISTRY: BUMN_TIER_1 ┐
      </div>
      <div className="absolute top-4 right-6 text-slate-400/40 dark:text-cyan-400/20 text-[10px] font-mono select-none">
        ┌ STATUS: VERIFIED_ENGAGEMENTS ┐
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gradient-pill text-red-600 dark:text-red-400 text-xs font-tech font-bold tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-red-600 dark:text-cyan-400" />
            <span>
              {lang === 'en'
                ? 'VERIFIED CLIENT ENGAGEMENTS & OEM PARTNERS'
                : 'DAFTAR KLIEN STRATEGIS & MITRA PRINSIPAL'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002D62] dark:text-white tracking-tight">
            {lang === 'en' ? (
              <>
                Companies & Institutions That <span className="text-gradient-brand">Trust Maudy</span>
              </>
            ) : (
              <>
                Daftar Perusahaan & Instansi Yang <span className="text-gradient-brand">Mempercayai Maudy</span>
              </>
            )}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {lang === 'en'
              ? 'Click on any institution card below to inspect verified engagement scopes, BAST deliverables, and contract details.'
              : 'Klik kartu instansi di bawah untuk melihat detail ruang lingkup pekerjaan, status BAST terverifikasi, dan studi kasus proyek.'}
          </p>
        </div>

        {/* 1. Interactive Infinite 3D Animated Logo Marquee Ribbon */}
        <div className="relative mb-12 overflow-hidden py-3">
          {/* Gradient Masks for edges */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-slate-50 dark:from-[#06101B] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-slate-50 dark:from-[#06101B] to-transparent z-10 pointer-events-none"></div>

          <div className="animate-marquee-left flex items-center space-x-4">
            {marqueeList.map((item, mIdx) => (
              <div
                key={mIdx}
                onClick={() => setSelectedClient(item)}
                className="flex-shrink-0 px-4 py-2.5 rounded-2xl bg-white/95 dark:bg-[#0B1F3A]/90 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-red-500/50 cursor-pointer transition-all flex items-center space-x-3 group"
              >
                {item.logoFile && (item.logoFile.startsWith('data:image') || item.logoFile.startsWith('http') || item.logoFile.includes('.')) ? (
                  <div className="w-8 h-8 rounded-lg bg-white p-0.5 flex items-center justify-center overflow-hidden border border-slate-100 flex-shrink-0">
                    <img
                      src={item.logoFile.startsWith('data:image') || item.logoFile.startsWith('http') || item.logoFile.startsWith('/') ? item.logoFile : `/logos/${item.logoFile}`}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                ) : (
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center font-bold font-tech text-[10px] text-white flex-shrink-0"
                    style={{ backgroundColor: item.brandColor }}
                  >
                    {item.initials}
                  </div>
                )}
                <span className="text-xs font-bold text-[#002D62] dark:text-white group-hover:text-red-600 dark:group-hover:text-cyan-300 transition-colors whitespace-nowrap">
                  {item.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-sm text-xs font-semibold">
            <button
              onClick={() => setActiveTab('clients')}
              className={`px-4 py-2 rounded-lg transition-all flex items-center space-x-2 ${
                activeTab === 'clients'
                  ? 'bg-gradient-brand text-white shadow-md shadow-red-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-red-600'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Client Institutions (BUMN & Government)' : 'Klien Strategis (BUMN & Kementerian)'}</span>
            </button>
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-4 py-2 rounded-lg transition-all flex items-center space-x-2 ${
                activeTab === 'tech'
                  ? 'bg-gradient-brand text-white shadow-md shadow-red-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-red-600'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Technology OEM Partners' : 'Mitra Prinsipal Teknologi'}</span>
            </button>
          </div>
        </div>

        {/* 2. Directory Grid with 3D Tilt & Pop-Up Trigger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentList.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedClient(item)}
              className="card-3d-tilt bg-white/95 dark:bg-[#0B1F3A]/85 backdrop-blur-sm p-6 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-red-500/60 dark:hover:border-cyan-500/50 gradient-border-top shadow-md cursor-pointer transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  {/* Standardized Logo / Initials Badge */}
                  <div className="flex items-center space-x-3.5">
                    {item.logoFile && (item.logoFile.startsWith('data:image') || item.logoFile.startsWith('http') || item.logoFile.includes('.')) ? (
                      <div className="w-13 h-13 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-1.5 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                        <img
                          src={item.logoFile.startsWith('data:image') || item.logoFile.startsWith('http') || item.logoFile.startsWith('/') ? item.logoFile : `/logos/${item.logoFile}`}
                          alt={item.name}
                          className="max-h-full max-w-full object-contain"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      </div>
                    ) : (
                      <div
                        className="w-13 h-13 rounded-2xl flex items-center justify-center font-bold font-tech text-sm text-white shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: item.brandColor }}
                      >
                        {item.initials}
                      </div>
                    )}
                    <div>
                      <h4 className="text-sm font-bold text-[#002D62] dark:text-white leading-snug group-hover:text-red-600 dark:group-hover:text-cyan-300 transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                        {item.category[lang]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Scope of Work */}
                <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="text-[10px] uppercase font-tech font-semibold text-slate-400 mb-1 flex items-center">
                    <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-500" />
                    <span>{lang === 'en' ? 'Verified Scope' : 'Ruang Lingkup Pekerjaan'}</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 font-normal leading-relaxed">
                    {item.scope[lang]}
                  </p>
                </div>
              </div>

              {/* Bottom Quick Trigger Bar */}
              <div className="mt-4 pt-3 border-t border-dashed border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] font-tech">
                <span className="text-slate-400 group-hover:text-red-500 dark:group-hover:text-cyan-400 transition-colors flex items-center">
                  <span>Lihat Detail Kemitraan</span>
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold text-[10px]">
                  VERIFIED
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Interactive Pop-Up Modal for Client Details */}
      {selectedClient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="animate-pop-up bg-white dark:bg-[#071322] border border-slate-200 dark:border-cyan-500/40 rounded-3xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedClient(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-red-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center space-x-4 mb-6">
              {selectedClient.logoFile && (selectedClient.logoFile.startsWith('data:image') || selectedClient.logoFile.startsWith('http') || selectedClient.logoFile.includes('.')) ? (
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-2 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-md">
                  <img
                    src={selectedClient.logoFile.startsWith('data:image') || selectedClient.logoFile.startsWith('http') || selectedClient.logoFile.startsWith('/') ? selectedClient.logoFile : `/logos/${selectedClient.logoFile}`}
                    alt={selectedClient.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ) : (
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center font-bold font-tech text-base text-white shadow-md flex-shrink-0"
                  style={{ backgroundColor: selectedClient.brandColor }}
                >
                  {selectedClient.initials}
                </div>
              )}
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-tech font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    VERIFIED ENGAGEMENT
                  </span>
                </div>
                <h3 className="text-lg font-black text-[#002D62] dark:text-white mt-1">
                  {selectedClient.name}
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {selectedClient.category[lang]}
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="text-[10px] font-tech text-red-600 dark:text-cyan-400 uppercase tracking-wider font-bold">
                  Ruang Lingkup Pengadaan & Layanan Terpasang
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-normal text-xs">
                  {selectedClient.scope[lang]}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 font-tech text-[11px] space-y-1 text-slate-600 dark:text-slate-400">
                <div className="flex justify-between">
                  <span>Klasifikasi Kemitraan:</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                    {selectedClient.type === 'client' ? 'End-User Strategic BUMN' : 'Global OEM Technology Partner'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Status SLA:</span>
                  <span className="text-cyan-600 dark:text-cyan-300 font-bold">99.98% Active Compliance</span>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <button
                onClick={() => setSelectedClient(null)}
                className="px-4 py-2 rounded-lg text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white"
              >
                Tutup
              </button>

              <a
                href="#projects"
                onClick={() => setSelectedClient(null)}
                className="px-5 py-2 rounded-xl bg-gradient-brand text-white text-xs font-bold shadow-md hover:scale-105 transition-all flex items-center space-x-1.5"
              >
                <span>Lihat Kasus Proyek Terkait</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
