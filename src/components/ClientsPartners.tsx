import React, { useState } from 'react';
import { ShieldCheck, Building2, Cpu, CheckCircle2, Image as ImageIcon } from 'lucide-react';
import { useCms } from '../context/CmsContext';

interface ClientsPartnersProps {
  lang: 'en' | 'id';
}

export const ClientsPartners: React.FC<ClientsPartnersProps> = ({ lang }) => {
  const { clients } = useCms();
  const [activeTab, setActiveTab] = useState<'clients' | 'tech'>('clients');

  const clientInstitutions = clients.filter((c) => c.type === 'client');
  const techPartners = clients.filter((c) => c.type === 'partner');
  const currentList = activeTab === 'clients' ? clientInstitutions : techPartners;

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#06101B] border-y border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-[#0050AE] dark:text-cyan-300 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>
              {lang === 'en'
                ? 'VERIFIED CLIENT ENGAGEMENTS & OEM PARTNERS'
                : 'DAFTAR KLIEN STRATEGIS & MITRA PRINSIPAL'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#002D62] dark:text-white tracking-tight">
            {lang === 'en' ? (
              <>
                Companies & Institutions That <span className="text-gradient-ocean dark:text-gradient-creative">Trust Maudy</span>
              </>
            ) : (
              <>
                Daftar Perusahaan & Instansi Yang <span className="text-gradient-ocean dark:text-gradient-creative">Mempercayai Maudy</span>
              </>
            )}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {lang === 'en'
              ? 'Below is the directory of our strategic partners. You can drop your preferred PNG/SVG logos into public/logos/'
              : 'Daftar terstruktur institusi dan prinsipal resmi. Anda dapat langsung menambahkan logo PNG/SVG ke dalam folder public/logos/'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs text-xs font-semibold">
            <button
              onClick={() => setActiveTab('clients')}
              className={`px-4 py-2 rounded-lg transition-all flex items-center space-x-2 ${
                activeTab === 'clients'
                  ? 'bg-[#0050AE] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-[#0050AE]'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Client Institutions (BUMN & Government)' : 'Klien Strategis (BUMN & Kementerian)'}</span>
            </button>
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-4 py-2 rounded-lg transition-all flex items-center space-x-2 ${
                activeTab === 'tech'
                  ? 'bg-[#0050AE] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-[#0050AE]'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Technology OEM Partners' : 'Mitra Prinsipal Teknologi'}</span>
            </button>
          </div>
        </div>

        {/* Clean Corporate Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentList.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0B1F3A]/70 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-cyan-500/40 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  {/* Standardized Logo / Initials Badge */}
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xs text-white shadow-xs flex-shrink-0"
                      style={{ backgroundColor: item.brandColor }}
                    >
                      {item.initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#002D62] dark:text-white leading-snug">
                        {item.name}
                      </h4>
                      <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                        {item.category[lang]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Scope of Work */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="text-[10px] uppercase font-semibold text-slate-400 mb-1 flex items-center">
                    <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-500" />
                    <span>{lang === 'en' ? 'Verified Engagement Scope' : 'Ruang Lingkup Pekerjaan'}</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 font-normal leading-relaxed">
                    {item.scope[lang]}
                  </p>
                </div>
              </div>

              {/* Logo Asset Path Helper for User */}
              <div className="mt-3 pt-2.5 border-t border-dashed border-slate-200 dark:border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="flex items-center space-x-1">
                  <ImageIcon className="w-3 h-3 text-slate-400" />
                  <span>Logo: public/logos/{item.logoFile}</span>
                </span>
                <span className="text-[#0050AE] dark:text-cyan-400 font-semibold">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
