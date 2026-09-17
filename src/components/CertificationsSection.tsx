import React from 'react';
import { CERTIFICATIONS_LIST, TEAM_MEMBERS } from '../data/companyData';
import { Award, Shield, CheckCircle, Users, ExternalLink, Network, ChevronDown } from 'lucide-react';

interface CertificationsProps {
  lang: 'en' | 'id';
}

export const CertificationsSection: React.FC<CertificationsProps> = ({ lang }) => {
  return (
    <section id="certifications" className="py-24 relative bg-[#081522] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300 mb-3">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>{lang === 'en' ? 'WORLD-CLASS CREDENTIALS' : 'SERTIFIKASI INTERNASIONAL & ORGANISASI'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'en' ? (
              <>
                Certified Engineering <span className="text-gradient">Organization</span>
              </>
            ) : (
              <>
                Struktur Organisasi & <span className="text-gradient">Sertifikasi Global</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            {lang === 'en'
              ? 'Our infrastructure designs are led by verified architects certified by Cisco, Fortinet, MikroTik, Ruijie, and the National Professional Certification Board (BNSP).'
              : 'Seluruh arsitektur jaringan dirancang dan dieksekusi oleh tenaga ahli pemegang sertifikasi resmi Cisco, Fortinet, MikroTik, Ruijie, dan BNSP.'}
          </p>
        </div>

        {/* Global Certifications Grid with authentic badges */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold text-white font-mono flex items-center justify-center space-x-2">
              <Award className="w-5 h-5 text-cyan-400" />
              <span>{lang === 'en' ? 'Elite Engineering Accreditations' : 'Daftar Sertifikasi Kompetensi Insinyur'}</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {CERTIFICATIONS_LIST.map((cert, idx) => (
              <div
                key={idx}
                className="glass-card p-4 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-all text-center flex flex-col justify-between group"
              >
                <div>
                  {cert.image ? (
                    <div className="h-16 w-full mb-3 rounded overflow-hidden bg-slate-900 border border-slate-700/60 p-1 flex items-center justify-center">
                      <img
                        src={cert.image}
                        alt={cert.code}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                  ) : (
                    <div className="h-16 w-full mb-3 rounded bg-blue-950/40 border border-blue-500/20 flex items-center justify-center text-cyan-400 font-mono font-bold text-xs">
                      {cert.code}
                    </div>
                  )}

                  <div className="text-xs font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {cert.code}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    {cert.issuer}
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800 text-[9px] font-mono text-cyan-400 truncate">
                  {cert.level}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Organization Tree / Hierarchy */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-lg font-bold text-white font-mono flex items-center justify-center space-x-2">
              <Network className="w-5 h-5 text-blue-400" />
              <span>{lang === 'en' ? 'Technical Organization Structure' : 'Bagan Struktur Organisasi Teknis'}</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {lang === 'en'
                ? 'Direct executive oversight connecting operational managers with specialized field divisions'
                : 'Struktur komando terpadu dari direktur hingga spesialis lapangan'}
            </p>
          </div>

          {/* Org Chart Visualization */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Level 1: Director */}
            <div className="flex justify-center">
              <div className="glass-card p-4 rounded-xl border border-cyan-500/50 bg-[#0B1F3A] text-center w-64 shadow-glow-sm">
                <div className="text-xs font-mono text-cyan-400 font-bold uppercase">Executive Leadership</div>
                <div className="text-base font-bold text-white mt-0.5">Yahya Hidayatullah</div>
                <div className="text-xs text-slate-300">Director & CEO</div>
              </div>
            </div>

            {/* Connecting Vertical Line */}
            <div className="w-0.5 h-6 bg-cyan-500/50 mx-auto"></div>

            {/* Level 2: Two Managers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto relative">
              {/* Branch 1: Operations */}
              <div className="glass-card p-4 rounded-xl border border-slate-700 bg-slate-900/90 text-center">
                <div className="text-[10px] font-mono text-amber-400 font-bold uppercase">Operations Division</div>
                <div className="text-sm font-bold text-white mt-0.5">Muhammad Yusuf Choirullah</div>
                <div className="text-xs text-slate-300">Operations Manager</div>
                <div className="text-[10px] text-slate-400 font-mono mt-1">BNSP Electrical Inspector</div>
              </div>

              {/* Branch 2: Engineering */}
              <div className="glass-card p-4 rounded-xl border border-slate-700 bg-slate-900/90 text-center">
                <div className="text-[10px] font-mono text-cyan-400 font-bold uppercase">Engineering Division</div>
                <div className="text-sm font-bold text-white mt-0.5">Ikhwanul Kurnia Rahman</div>
                <div className="text-xs text-slate-300">Technical & Engineering Manager</div>
                <div className="text-[10px] text-cyan-400 font-mono mt-1">CCNP • NSE 7 • MTCINE</div>
              </div>
            </div>

            {/* Connecting Vertical Line */}
            <div className="w-0.5 h-6 bg-cyan-500/50 mx-auto"></div>

            {/* Level 3: Specialized Technical Team Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-[#0B1F3A]/70 p-3 rounded-lg border border-slate-800 text-center">
                <div className="text-xs font-bold text-white">Irfan Ardian</div>
                <div className="text-[10px] text-slate-300">Software & Web Dev</div>
                <div className="text-[9px] font-mono text-purple-400 mt-1">BNSP WebDev</div>
              </div>

              <div className="bg-[#0B1F3A]/70 p-3 rounded-lg border border-slate-800 text-center">
                <div className="text-xs font-bold text-white">Bagus M Rizqiandaru</div>
                <div className="text-[10px] text-slate-300">NOC & Support Analyst</div>
                <div className="text-[9px] font-mono text-cyan-400 mt-1">24/7 Telemetry Lead</div>
              </div>

              <div className="bg-[#0B1F3A]/70 p-3 rounded-lg border border-slate-800 text-center">
                <div className="text-xs font-bold text-white">Elfano Sultan S.</div>
                <div className="text-[10px] text-slate-300">Infrastructure Engineer</div>
                <div className="text-[9px] font-mono text-blue-400 mt-1">Fiber & Grounding</div>
              </div>

              <div className="bg-[#0B1F3A]/70 p-3 rounded-lg border border-slate-800 text-center">
                <div className="text-xs font-bold text-white">Tomi Saputra</div>
                <div className="text-[10px] text-slate-300">Network & Security</div>
                <div className="text-[9px] font-mono text-emerald-400 mt-1">Ruijie Specialist</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Detailed Showcase Cards */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold text-white font-mono flex items-center justify-center space-x-2">
              <Users className="w-5 h-5 text-cyan-400" />
              <span>{lang === 'en' ? 'Core Technical Leadership Profiles' : 'Profil Tenaga Ahli Utama'}</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-[2px] flex items-center justify-center">
                      <div className="w-full h-full bg-[#0B1F3A] rounded-full flex items-center justify-center text-sm font-bold font-mono text-cyan-300">
                        {member.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                      MNK Engineer
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {member.name}
                  </h4>
                  <div className="text-xs font-medium text-cyan-400 mb-3">
                    {member.role[lang]}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-light mb-4">
                    {member.bio[lang]}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <div className="text-[10px] font-mono text-slate-400 mb-1.5 uppercase">
                    {lang === 'en' ? 'Certifications & Accreditations:' : 'Kualifikasi & Sertifikasi:'}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {member.certifications.map((cert, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/90 text-cyan-300 border border-cyan-500/20"
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
