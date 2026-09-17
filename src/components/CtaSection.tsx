import React from 'react';
import { ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';

interface CtaSectionProps {
  lang: 'en' | 'id';
  onOpenConsultation: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  lang,
  onOpenConsultation,
}) => {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-[36px] bg-gradient-to-r from-[#002D62] via-[#0050AE] to-[#D62828] text-white p-8 sm:p-14 overflow-hidden shadow-2xl text-center border border-white/20">
          {/* Cyber Dot Matrix Pattern */}
          <div className="absolute inset-0 tech-grid-pattern opacity-20 pointer-events-none"></div>

          {/* Floating Radiant Aura Glows */}
          <div className="absolute -top-16 -right-16 w-60 h-60 rounded-full bg-cyan-400/30 blur-3xl pointer-events-none animate-float-slow"></div>
          <div className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full bg-[#D62828]/50 blur-3xl pointer-events-none animate-pulse-aura"></div>

          {/* High Tech Watermark Accent */}
          <div className="absolute top-4 right-6 text-[10px] font-tech text-white/40 tracking-widest pointer-events-none select-none hidden sm:block">
            [SYS_SIGNAL: DISPATCH_ACTIVE // 24/7]
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-tech font-bold backdrop-blur-md mb-2 border border-white/20 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-300" />
              <span>{lang === 'en' ? 'ENTERPRISE STRATEGIC CONSULTATION' : 'KONSULTASI INFRASTRUKTUR STRATEGIS'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {lang === 'en' ? (
                <>
                  Let’s Build Your Next <span className="text-cyan-300">Digital Infrastructure</span>
                </>
              ) : (
                <>
                  Wujudkan Keandalan <span className="text-cyan-300">Infrastruktur Digital</span> Anda
                </>
              )}
            </h2>

            <p className="text-blue-100 text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto">
              {lang === 'en'
                ? 'Whether you require offshore marine satellite optimization, Fortinet NSE 7 zero-trust security, 24/7 proactive NOC surveillance, or custom ministerial ERP systems.'
                : 'Mulai dari optimasi satelit armada laut lepas, pengamanan siber Fortinet NSE 7, pemantauan proaktif NOC 24/7, hingga sistem ERP kementerian.'}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#002D62] font-bold text-sm shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 group"
              >
                <span>{lang === 'en' ? 'Schedule Consultation' : 'Jadwalkan Konsultasi Teknis'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0050AE]" />
              </button>

              <a
                href="https://wa.me/6285727487507?text=Halo%20Maudy%20Network%20Komunikasi,%20saya%20ingin%20berkonsultasi%20mengenai%20solusi%20infrastruktur%20IT."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-black/30 hover:bg-black/40 border border-white/30 text-white font-semibold text-xs sm:text-sm transition-all hover:scale-105 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <PhoneCall className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: +62 857-2748-7507</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
