import React from 'react';
import { 
  ChevronRight, 
  Lock
} from 'lucide-react';
import type { Language } from '../i18n/translations';
import { TRANSLATIONS, getLangText } from '../i18n/translations';

interface Props {
  lang?: Language;
  onOpenDemo: () => void;
  onExploreSolutions: () => void;
  onOpenBrochure?: () => void;
}

export const AegisHero: React.FC<Props> = ({ 
  lang = 'id', 
  onOpenDemo, 
  onExploreSolutions, 
  onOpenBrochure 
}) => {
  return (
    <section id="beranda" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-transparent pt-16 sm:pt-24 pb-20 text-center">
      {/* Apple Subtle Diffused Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-gradient-to-b from-[#0071E3]/20 via-[#2997FF]/10 to-transparent blur-[140px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-medium text-[#A1A1A6] mb-6 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2997FF] animate-pulse"></span>
          <span>{getLangText(TRANSLATIONS.hero.aegis.eyebrow, lang)}</span>
        </div>

        {/* Large Confident Apple Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.12] font-sans max-w-4xl mx-auto">
          {getLangText(TRANSLATIONS.hero.aegis.headline, lang)}
        </h1>

        {/* Humanist Subheadline */}
        <p className="text-sm sm:text-lg text-[#A1A1A6] leading-relaxed max-w-3xl mx-auto font-normal mt-5 font-sans">
          {getLangText(TRANSLATIONS.hero.aegis.subheadline, lang)}
        </p>

        {/* Apple Style Clean Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
          <button
            onClick={onOpenDemo}
            className="apple-pill-btn px-7 py-3 text-sm font-medium text-white bg-[#0071E3] hover:bg-[#0077ED] active:scale-95 transition-all shadow-lg hover:shadow-[#0071E3]/25 cursor-pointer"
          >
            {getLangText(TRANSLATIONS.hero.aegis.scheduleDemo, lang)}
          </button>

          {onOpenBrochure && (
            <button
              onClick={onOpenBrochure}
              className="apple-pill-btn px-6 py-3 text-sm font-medium text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.15] active:scale-95 transition-all cursor-pointer shadow-md flex items-center space-x-2"
            >
              <span>{getLangText(TRANSLATIONS.hero.aegis.catalogBtn, lang)}</span>
            </button>
          )}

          <button
            onClick={onExploreSolutions}
            className="inline-flex items-center text-sm font-medium text-[#2997FF] hover:text-white transition-colors cursor-pointer px-4 py-3 group"
          >
            <span>{getLangText(TRANSLATIONS.hero.aegis.exploreSolutions, lang)}</span>
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform text-[#2997FF]" />
          </button>
        </div>

        {/* Minimalist Executive Key Metrics Strip */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0F0F14]/70 border border-white/[0.08] backdrop-blur-2xl shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
              <div className="pt-2 md:pt-0">
                <div className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">
                  {lang === 'ja' ? '12ソリューション' : lang === 'ar' ? '12 منتجاً' : lang === 'en' ? '12 Products' : '12 Solusi'}
                </div>
                <div className="text-xs text-[#86868B] mt-1 font-sans">Enterprise AI Suite</div>
              </div>
              <div className="pt-2 md:pt-0 md:pl-6">
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#2997FF] tracking-tight">Air-Gapped</div>
                <div className="text-xs text-[#86868B] mt-1 font-sans">
                  {lang === 'ja' ? '完全隔離・外部流出ゼロ' : lang === 'ar' ? 'عزل تام وسيادة للبيانات' : lang === 'en' ? 'Zero Data Egress' : 'Kedaulatan Data Total'}
                </div>
              </div>
              <div className="pt-2 md:pt-0 md:pl-6">
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 tracking-tight">99.98%</div>
                <div className="text-xs text-[#86868B] mt-1 font-sans">
                  {lang === 'ja' ? 'ミッションクリティカル SLA' : lang === 'ar' ? 'ضمان الخدمة المعتمد' : 'High-Availability SLA'}
                </div>
              </div>
              <div className="pt-2 md:pt-0 md:pl-6">
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#F5F5F7] tracking-tight">&lt; 15m</div>
                <div className="text-xs text-[#86868B] mt-1 font-sans">
                  {lang === 'ja' ? '24/7 緊急初動対応' : lang === 'ar' ? 'زمن الاستجابة للطوارئ' : '24/7 NOC Incident MTTR'}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
