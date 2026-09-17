import React from 'react';
import { CERTIFICATIONS_LIST } from '../data/companyData';
import { Award, Shield } from 'lucide-react';

interface CertificationsProps {
  lang: 'en' | 'id';
}

export const CertificationsSection: React.FC<CertificationsProps> = ({ lang }) => {
  return (
    <section id="certifications" className="py-24 bg-transparent relative overflow-hidden transition-colors">
      {/* Top Animated Beam Sweep Divider */}
      <div className="beam-divider opacity-60 mb-12"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gradient-pill text-red-600 dark:text-red-400 text-xs font-tech font-bold tracking-wider mb-3 shadow-xs">
            <Shield className="w-3.5 h-3.5 mr-1 text-red-600 dark:text-cyan-400" />
            <span>{lang === 'en' ? 'WORLD-CLASS CREDENTIALS' : 'SERTIFIKASI INTERNASIONAL RESMI'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002D62] dark:text-white tracking-tight">
            {lang === 'en' ? (
              <>
                Certified Engineering <span className="text-gradient-brand">Accreditations</span>
              </>
            ) : (
              <>
                Sertifikasi Kompetensi & <span className="text-gradient-brand">Akreditasi Global</span>
              </>
            )}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'Our infrastructure designs are led by verified architects certified by Cisco, Fortinet, MikroTik, Ruijie, and the National Professional Certification Board (BNSP).'
              : 'Seluruh arsitektur jaringan dirancang dan dieksekusi oleh tenaga ahli pemegang sertifikasi resmi Cisco, Fortinet, MikroTik, Ruijie, dan BNSP.'}
          </p>
        </div>

        {/* Global Certifications Grid with authentic badges */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold text-[#002D62] dark:text-white flex items-center justify-center space-x-2">
              <Award className="w-5 h-5 text-red-600 dark:text-cyan-400" />
              <span>{lang === 'en' ? 'Elite Engineering Accreditations' : 'Daftar Sertifikasi Kompetensi Insinyur'}</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {CERTIFICATIONS_LIST.map((cert, idx) => (
              <div
                key={idx}
                className="interactive-card bg-white/80 dark:bg-[#0B1F3A]/75 backdrop-blur-md p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 hover:border-red-500/50 dark:hover:border-cyan-400/50 gradient-border-top transition-all text-center flex flex-col justify-between shadow-xs hover:shadow-xl hover:scale-105 group"
              >
                <div>
                  {cert.image ? (
                    <div className="h-14 w-full mb-3 rounded-xl overflow-hidden bg-white border border-slate-200 dark:border-slate-700/60 p-2 flex items-center justify-center shadow-xs">
                      <img
                        src={cert.image}
                        alt={cert.code}
                        className="max-h-9 max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="h-16 w-full mb-3 rounded-xl bg-slate-100/90 dark:bg-blue-950/40 border border-slate-200 dark:border-blue-500/20 flex items-center justify-center text-[#0050AE] dark:text-cyan-400 font-bold text-xs font-tech">
                      {cert.code}
                    </div>
                  )}

                  <div className="text-xs font-bold text-[#002D62] dark:text-white mb-1 group-hover:text-gradient-brand transition-colors">
                    {cert.code}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                    {cert.issuer}
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-200/80 dark:border-slate-800 text-[10px] font-semibold text-red-600 dark:text-cyan-400 truncate font-tech">
                  {cert.level}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
