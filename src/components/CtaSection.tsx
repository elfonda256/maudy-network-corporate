import React from 'react';
import { ArrowRight, ShieldCheck, PhoneCall, Mail } from 'lucide-react';

interface CtaSectionProps {
  lang: 'en' | 'id';
  onOpenConsultation: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  lang,
  onOpenConsultation,
}) => {
  return (
    <section className="py-20 relative bg-gradient-to-b from-[#081522] via-[#0B1F3A] to-[#081522] overflow-hidden border-t border-slate-800">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/20 to-cyan-400/20 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
          <span>{lang === 'en' ? 'ENTERPRISE STRATEGIC CONSULTATION' : 'KONSULTASI INFRASTRUKTUR STRATEGIS'}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {lang === 'en' ? (
            <>
              Let’s Build Your Next <span className="text-gradient">Digital Infrastructure</span>
            </>
          ) : (
            <>
              Wujudkan Keandalan <span className="text-gradient">Infrastruktur Digital</span> Anda
            </>
          )}
        </h2>

        <p className="mt-6 text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          {lang === 'en'
            ? 'Whether you require offshore marine satellite optimization, Fortinet NSE 7 zero-trust security, 24/7 proactive NOC surveillance, or custom ministerial ERP systems.'
            : 'Mulai dari optimasi satelit armada laut lepas, pengamanan siber Fortinet NSE 7, pemantauan proaktif NOC 24/7, hingga sistem ERP kementerian.'}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#1E5EFF] via-[#00C6FF] to-blue-500 hover:from-blue-600 hover:to-cyan-400 text-white font-semibold text-sm shadow-glow-md hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
          >
            <span>{lang === 'en' ? 'Schedule Consultation' : 'Jadwalkan Konsultasi Teknis'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="https://wa.me/6285727487507?text=Halo%20Maudy%20Network%20Komunikasi,%20saya%20ingin%20berkonsultasi%20mengenai%20solusi%20infrastruktur%20IT."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-medium text-sm transition-colors flex items-center justify-center space-x-2"
          >
            <PhoneCall className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Direct: +62 857-2748-7507</span>
          </a>
        </div>
      </div>
    </section>
  );
};
