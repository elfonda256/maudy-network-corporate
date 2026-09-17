import React from 'react';
import { CERTIFICATIONS_LIST, TEAM_MEMBERS } from '../data/companyData';
import { Award, Shield, Users } from 'lucide-react';

interface CertificationsProps {
  lang: 'en' | 'id';
}

export const CertificationsSection: React.FC<CertificationsProps> = ({ lang }) => {
  return (
    <section id="certifications" className="py-24 bg-transparent relative overflow-hidden transition-colors">
      {/* Top Animated Beam Sweep Divider */}
      <div className="beam-divider opacity-60 mb-12"></div>

      {/* Decorative High-Tech Background Watermark */}
      <div className="absolute top-12 left-8 text-[11px] font-tech text-slate-400/30 dark:text-cyan-500/10 select-none pointer-events-none tracking-widest hidden md:block">
        [CREDENTIALS: GLOBAL_ENGINEERING_ACCREDITATIONS // TIER_1]
      </div>

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
        <div className="mb-20">
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
                    <div className="h-16 w-full mb-3 rounded-xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/60 p-1 flex items-center justify-center shadow-inner">
                      <img
                        src={cert.image}
                        alt={cert.code}
                        className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
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

        {/* Team Members Detailed Showcase Cards */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold text-[#002D62] dark:text-white font-mono flex items-center justify-center space-x-2">
              <Users className="w-5 h-5 text-[#0050AE] dark:text-cyan-400" />
              <span>{lang === 'en' ? 'Core Technical Leadership Profiles' : 'Profil Tenaga Ahli Utama'}</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="interactive-card bg-white/80 dark:bg-[#0B1F3A]/75 backdrop-blur-md p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 hover:border-red-500/50 dark:hover:border-cyan-400/50 gradient-border-top flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                {/* Tech Badge */}
                <div className="absolute top-2.5 right-3 text-[9px] font-tech text-slate-300 dark:text-slate-600 group-hover:text-red-500/60 dark:group-hover:text-cyan-400/60 transition-colors">
                  [ENG_0{idx + 1}]
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-slate-100 to-slate-200 dark:from-[#0B1F3A] dark:to-slate-800 border border-slate-200 dark:border-cyan-500/40 flex items-center justify-center text-sm font-bold font-tech text-red-600 dark:text-cyan-300 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-xs">
                      {member.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                    </div>
                    <span className="text-[10px] font-tech font-bold px-2 py-0.5 rounded-full bg-gradient-pill text-red-600 dark:text-red-400 border border-red-500/20 shadow-xs">
                      MNK LEAD
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#002D62] dark:text-white group-hover:text-gradient-brand transition-colors">
                    {member.name}
                  </h4>
                  <div className="text-xs font-semibold text-[#0050AE] dark:text-cyan-400 mb-3">
                    {member.role[lang]}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-4">
                    {member.bio[lang]}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="text-[10px] font-tech text-slate-400 mb-1.5 uppercase font-semibold">
                    {lang === 'en' ? 'Certifications & Accreditations:' : 'Kualifikasi & Sertifikasi:'}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {member.certifications.map((cert, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[10px] font-tech font-semibold px-2 py-0.5 rounded bg-slate-50/80 dark:bg-slate-900/80 text-red-600 dark:text-cyan-300 border border-slate-200 dark:border-cyan-500/20"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
