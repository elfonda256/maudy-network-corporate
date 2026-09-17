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
    <section className="py-20 bg-white dark:bg-[#081522] transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[36px] bg-gradient-to-r from-[#0050AE] via-[#004294] to-[#002D62] text-white p-8 sm:p-14 overflow-hidden shadow-2xl text-center">
          {/* Dot Matrix Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 dot-pattern opacity-30 pointer-events-none"></div>
          {/* Gold Accent Glow */}
          <div className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full bg-[#FFB800] blur-2xl opacity-40 pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-sm mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FFB800]" />
              <span>{lang === 'en' ? 'ENTERPRISE STRATEGIC CONSULTATION' : 'KONSULTASI INFRASTRUKTUR STRATEGIS'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              {lang === 'en' ? (
                <>
                  Let’s Build Your Next <span className="text-gradient-gold">Digital Infrastructure</span>
                </>
              ) : (
                <>
                  Wujudkan Keandalan <span className="text-gradient-gold">Infrastruktur Digital</span> Anda
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
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FFB800] hover:bg-[#F59E0B] text-[#002D62] font-bold text-sm shadow-md transition-all duration-200 flex items-center justify-center space-x-2 group"
              >
                <span>{lang === 'en' ? 'Schedule Consultation' : 'Jadwalkan Konsultasi Teknis'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/6285727487507?text=Halo%20Maudy%20Network%20Komunikasi,%20saya%20ingin%20berkonsultasi%20mengenai%20solusi%20infrastruktur%20IT."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center space-x-2"
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
