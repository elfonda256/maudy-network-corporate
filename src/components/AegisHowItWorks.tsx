import React, { useState } from 'react';
import { Database, Network, Cpu, Brain, Workflow, CheckCircle, ChevronRight } from 'lucide-react';
import type { Language } from '../i18n/translations';
import { AEGIS_UI_TEXTS, AEGIS_PIPELINE_STEPS_I18N } from '../i18n/aegisTranslations';

interface Props {
  lang?: Language;
}

export const AegisHowItWorks: React.FC<Props> = ({ lang = 'id' }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const stepIcons = [Database, Network, Cpu, Brain, Workflow, CheckCircle];

  const t = AEGIS_UI_TEXTS[lang]?.howItWorks || AEGIS_UI_TEXTS.id.howItWorks;
  const steps = AEGIS_PIPELINE_STEPS_I18N[lang] || AEGIS_PIPELINE_STEPS_I18N.id;

  const stagePrefix = {
    id: 'Tahap',
    en: 'Stage',
    ja: 'ステージ',
    ar: 'المرحلة'
  }[lang] || 'Tahap';

  const activeLabel = {
    id: 'Tahap Aktif',
    en: 'Active Stage',
    ja: '選択中ステージ',
    ar: 'المرحلة النشطة'
  }[lang] || 'Tahap Aktif';

  const selectLabel = {
    id: 'Pilih untuk melihat',
    en: 'Select to view',
    ja: '詳細を確認',
    ar: 'اضغط للعرض'
  }[lang] || 'Pilih untuk melihat';

  const pipelineTitle = {
    id: 'Aliran Data:',
    en: 'Data Pipeline:',
    ja: 'データ処理フロー:',
    ar: 'مسار تدفق البيانات:'
  }[lang] || 'Aliran Data:';

  return (
    <section id="cara-kerja" className="relative py-24 bg-transparent border-t border-white/[0.06] overflow-hidden text-left">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#86868B] text-xs font-mono">
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight font-sans">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] leading-relaxed font-sans">
            {t.subtitle}
          </p>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = stepIcons[idx] || Database;
            const isSelected = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`apple-card p-6 sm:p-7 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white/[0.08] border-[#2997FF]/60 shadow-xl scale-[1.01]'
                    : 'bg-[#0F0F12]/70 border-white/[0.08] hover:bg-white/[0.04]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-white/[0.06] text-[#86868B]">
                      {stagePrefix} {step.step}
                    </span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#2997FF]' : 'text-[#6E6E73]'}`} />
                  </div>

                  <div className="text-[11px] font-mono text-[#2997FF] uppercase tracking-wider">
                    {step.name}
                  </div>
                  <h3 className="text-lg font-semibold text-white font-sans mt-0.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#86868B] leading-relaxed mt-2 font-sans">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-sans text-[#6E6E73]">
                  <span>{isSelected ? activeLabel : selectLabel}</span>
                  <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-[#2997FF]' : 'text-[#6E6E73]'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Apple Style Linear Summary Pill */}
        <div className="mt-12 p-4 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-[#A1A1A6] flex flex-wrap items-center justify-center gap-3">
          <span className="text-white font-semibold">{pipelineTitle}</span>
          <span>1. Ingestion</span>
          <span className="text-[#6E6E73]">→</span>
          <span>2. Integration</span>
          <span className="text-[#6E6E73]">→</span>
          <span>3. AI Processing</span>
          <span className="text-[#6E6E73]">→</span>
          <span>4. Intelligence</span>
          <span className="text-[#6E6E73]">→</span>
          <span>5. Automation</span>
          <span className="text-[#6E6E73]">→</span>
          <span className="text-[#2997FF] font-semibold">6. Business Action</span>
        </div>

      </div>
    </section>
  );
};
