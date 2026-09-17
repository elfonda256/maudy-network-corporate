import React from 'react';
import { CLIENT_LOGOS, TECH_PARTNERS } from '../data/companyData';
import { ShieldCheck, Award } from 'lucide-react';

interface ClientsPartnersProps {
  lang: 'en' | 'id';
}

export const ClientsPartners: React.FC<ClientsPartnersProps> = ({ lang }) => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-[#06101B] border-y border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Companies that Trust MNK */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-[#0050AE] dark:text-cyan-400 text-xs font-bold font-mono uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>
              {lang === 'en'
                ? 'PROVEN TRUSTED PARTNERSHIPS'
                : 'INSTITUSI & KORPORASI YANG MEMPERCAYAI MAUDY'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002D62] dark:text-white tracking-tight">
            {lang === 'en' ? (
              <>
                Strategic Clients <span className="text-[#0050AE] dark:text-cyan-400">& Institutions</span>
              </>
            ) : (
              <>
                Klien Strategis & <span className="text-[#0050AE] dark:text-cyan-400">Instansi Pemerintah</span>
              </>
            )}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal">
            {lang === 'en'
              ? 'Delivering zero-tolerance reliability across national energy assets, ministerial complexes, maritime fleets, and universities.'
              : 'Menjaga keandalan operasional tanpa jeda pada aset energi nasional, gedung kementerian, armada pelayaran, dan institusi pendidikan.'}
          </p>
        </div>

        {/* Client Logos Grid with Real Authentic Brand Graphics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {CLIENT_LOGOS.map((client, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0B1F3A]/70 border border-slate-200 dark:border-slate-800 hover:border-[#0050AE] dark:hover:border-cyan-500/50 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-center items-center h-28 group"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="text-center">
                  <div className="text-sm font-bold text-[#002D62] dark:text-white">
                    {client.name}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase mt-0.5">
                    {client.category}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Technology Ecosystem & OEM Partners Wall */}
        <div className="pt-12 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-[#0050AE] dark:text-cyan-400" />
              <span>
                {lang === 'en'
                  ? 'GLOBAL TIER-1 TECHNOLOGY & HARDWARE ECOSYSTEM'
                  : 'MITRA PRINSIPAL & TEKNOLOGI PERANGKAT KERAS'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
            {TECH_PARTNERS.map((partner, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#0B1F3A]/50 border border-slate-200 dark:border-slate-800 hover:border-[#0050AE] dark:hover:border-cyan-500/40 p-4 rounded-xl flex flex-col items-center justify-center h-20 shadow-xs hover:shadow-sm transition-all group"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-8 max-w-[80%] object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
