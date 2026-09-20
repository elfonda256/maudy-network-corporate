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
        <div className="relative rounded-[36px] bg-[#000000] text-white p-8 sm:p-14 overflow-hidden shadow-2xl text-center border border-white/[0.1]">
          {/* Subtle Ambient Light Glows */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#0071E3]/20 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-red-600/15 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] text-[#2997FF] text-xs font-mono font-medium border border-white/[0.12] shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'ENTERPRISE STRATEGIC CONSULTATION' : 'KONSULTASI INFRASTRUKTUR STRATEGIS'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.12]">
              {lang === 'en' ? (
                <>
                  Let’s Build Your Next <span className="text-[#2997FF]">Digital Infrastructure</span>
                </>
              ) : (
                <>
                  Wujudkan Keandalan <span className="text-[#2997FF]">Infrastruktur Digital</span> Anda
                </>
              )}
            </h2>

            <p className="text-[#A1A1A6] text-base leading-relaxed font-normal max-w-2xl mx-auto">
              {lang === 'en'
                ? 'Whether you require offshore marine satellite optimization, Fortinet NSE 7 zero-trust security, 24/7 proactive NOC surveillance, or custom ministerial ERP systems.'
                : 'Mulai dari optimasi satelit armada laut lepas, pengamanan siber Fortinet NSE 7, pemantauan proaktif NOC 24/7, hingga sistem ERP kementerian.'}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium text-sm shadow-none hover:shadow-sm transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>{lang === 'en' ? 'Schedule Consultation' : 'Jadwalkan Konsultasi Teknis'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/6285727487507?text=Halo%20Maudy%20Network%20Komunikasi,%20saya%20ingin%20berkonsultasi%20mengenai%20solusi%20infrastruktur%20IT."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.15] text-white font-medium text-sm transition-all flex items-center justify-center space-x-2 backdrop-blur-sm cursor-pointer"
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
