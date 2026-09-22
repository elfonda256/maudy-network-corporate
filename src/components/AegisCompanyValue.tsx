import React, { useState } from 'react';
import { Database, Cpu, Brain, Activity, TrendingUp, CheckCircle2 } from 'lucide-react';
import type { Language } from '../i18n/translations';
import { AEGIS_UI_TEXTS, AEGIS_VALUE_CHAIN_I18N } from '../i18n/aegisTranslations';

interface Props {
  lang?: Language;
}

export const AegisCompanyValue: React.FC<Props> = ({ lang = 'id' }) => {
  const [selectedStage, setSelectedStage] = useState<number>(0);
  const stageIcons = [Database, Cpu, Brain, Activity, TrendingUp];

  const t = AEGIS_UI_TEXTS[lang]?.companyValue || AEGIS_UI_TEXTS.id.companyValue;
  const chainList = AEGIS_VALUE_CHAIN_I18N[lang] || AEGIS_VALUE_CHAIN_I18N.id;

  const executionNotes: Record<Language, { bold: string; text: string }> = {
    id: {
      bold: 'Eksekusi Tanpa Kompromi: ',
      text: 'Setiap model yang kami bangun memiliki keterkaitan langsung dengan proses bisnis nyata di lapangan—menjamin dampak operasional yang terukur dan keandalan tinggi.'
    },
    en: {
      bold: 'Uncompromising Execution: ',
      text: 'Every model we deploy is anchored to real-world physical workflows—guaranteeing measurable operational return and extreme reliability.'
    },
    ja: {
      bold: '妥協なき現場実装: ',
      text: '私たちが構築するすべてのAIモデルは、現場の実業務と直結しており、測定可能な事業成果と最高水準の信頼性を担保します。'
    },
    ar: {
      bold: 'تنفيذ لا يقبل المساومة: ',
      text: 'كل نموذج ذكاء اصطناعي نبنيه يرتبط ارتباطاً وثيقاً بمسارات العمل الميدانية الفعلية، مما يضمن أثراً تشغيلياً مقيساً وموثوقية بالغة.'
    }
  };

  const note = executionNotes[lang] || executionNotes.id;

  return (
    <section id="solusi" className="relative py-24 bg-transparent border-t border-white/[0.06] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#86868B] text-xs font-mono">
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight font-sans">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] leading-relaxed max-w-2xl mx-auto font-sans">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Apple Bento Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {t.cards.map((item: any, idx: number) => (
            <div 
              key={idx} 
              className="apple-card p-6 rounded-3xl bg-[#0F0F12]/70 border border-white/[0.08] text-left flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-[#2997FF] block mb-2">{item.tag}</span>
                <h3 className="text-lg font-semibold text-white font-sans">{item.title}</h3>
                <p className="text-xs text-[#86868B] mt-2 leading-relaxed font-sans">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Apple Style Interactive Value Chain */}
        <div className="apple-card p-6 sm:p-10 rounded-3xl bg-[#0A0A0E]/80 border border-white/[0.08] text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.06] gap-2">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#86868B] block">
                {t.valueChainTitle}
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mt-0.5">
                {t.valueChainSubtitle}
              </h3>
            </div>
            <span className="text-xs font-mono text-[#2997FF]">
              {t.valueChainBadge}
            </span>
          </div>

          {/* 5 Stage Horizontal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mt-6">
            {chainList.map((item, index) => {
              const Icon = stageIcons[index] || Database;
              const isSelected = selectedStage === index;
              return (
                <div
                  key={index}
                  onClick={() => setSelectedStage(index)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white/[0.08] border-[#2997FF]/60 shadow-[0_0_20px_rgba(41,151,255,0.15)]'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.06] text-[#86868B]">
                        0{index + 1}
                      </span>
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-[#2997FF]' : 'text-[#6E6E73]'}`} />
                    </div>
                    <div className="text-xs font-bold text-white font-mono tracking-wider">
                      {item.stage}
                    </div>
                    <div className="text-xs text-[#2997FF] font-medium mt-0.5">
                      {item.label}
                    </div>
                    <p className="text-[11px] text-[#86868B] mt-2 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Clarification Callout */}
          <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-start space-x-3 text-xs text-[#86868B] font-sans leading-relaxed">
            <CheckCircle2 className="w-4 h-4 text-[#2997FF] shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">{note.bold}</strong>
              {note.text}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
