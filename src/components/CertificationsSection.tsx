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
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] text-[#0071E3] dark:text-[#2997FF] text-xs font-mono font-medium tracking-wider mb-4 shadow-xs">
            <Shield className="w-3.5 h-3.5 mr-1" />
            <span>{lang === 'en' ? 'WORLD-CLASS CREDENTIALS' : 'SERTIFIKASI INTERNASIONAL RESMI'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1D1D1F] dark:text-white tracking-tight leading-[1.12]">
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
          <p className="mt-4 text-[#6E6E73] dark:text-[#A1A1A6] text-base leading-relaxed">
            {lang === 'en'
              ? 'Our infrastructure designs are led by verified architects certified by Cisco, Fortinet, MikroTik, Ruijie, and the National Professional Certification Board (BNSP).'
              : 'Seluruh arsitektur jaringan dirancang dan dieksekusi oleh tenaga ahli pemegang sertifikasi resmi Cisco, Fortinet, MikroTik, Ruijie, dan BNSP.'}
          </p>
        </div>

        {/* Global Certifications Grid with authentic badges */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-[#1D1D1F] dark:text-white flex items-center justify-center space-x-2">
              <Award className="w-5 h-5 text-[#0071E3] dark:text-[#2997FF]" />
              <span>{lang === 'en' ? 'Elite Engineering Accreditations' : 'Daftar Sertifikasi Kompetensi Insinyur'}</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {CERTIFICATIONS_LIST.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#161617] p-5 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] transition-all text-center flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1 group"
              >
                <div>
                  {cert.image ? (
                    <div className="h-14 w-full mb-3 rounded-2xl overflow-hidden bg-white border border-black/[0.06] dark:border-white/[0.08] p-2 flex items-center justify-center shadow-2xs">
                      <img
                        src={cert.image}
                        alt={cert.code}
                        className="max-h-9 max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="h-14 w-full mb-3 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center text-[#0071E3] dark:text-[#2997FF] font-semibold text-xs font-mono">
                      {cert.code}
                    </div>
                  )}

                  <div className="text-xs font-semibold text-[#1D1D1F] dark:text-white mb-1">
                    {cert.code}
                  </div>
                  <div className="text-[10px] text-[#6E6E73] dark:text-[#A1A1A6] font-normal">
                    {cert.issuer}
                  </div>
                </div>

                <div className="mt-4 pt-2.5 border-t border-black/[0.06] dark:border-white/[0.08] text-[10px] font-medium text-[#0071E3] dark:text-[#2997FF] truncate font-mono">
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
