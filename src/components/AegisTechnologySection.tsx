import React, { useState } from 'react';
import { 
  Cpu, FileSearch, Eye, Network, TrendingUp,
  Bot, Wifi, Box, Code2, Workflow, Database, CheckCircle2
} from 'lucide-react';
import { TECH_MODULES, type TechModule } from '../data/aegisData';
import type { Language } from '../i18n/translations';
import { AEGIS_UI_TEXTS } from '../i18n/aegisTranslations';

interface Props {
  lang?: Language;
}

export const AegisTechnologySection: React.FC<Props> = ({ lang = 'id' }) => {
  const [selectedTech, setSelectedTech] = useState<TechModule>(TECH_MODULES[0]);

  const t = AEGIS_UI_TEXTS[lang]?.technology || AEGIS_UI_TEXTS.id.technology;

  const iconMap: Record<string, React.ElementType> = {
    'LLM': Cpu,
    'RAG': FileSearch,
    'OCR': Eye,
    'CV': Eye,
    'ML': Network,
    'PdM': TrendingUp,
    'Agents': Bot,
    'IoT': Wifi,
    'Twin': Box,
    'API': Code2,
    'IPA': Workflow,
    'Data Platform': Database,
  };

  const localizedTech: Record<string, Record<Language, {
    name: string;
    category: string;
    description: string;
    enterpriseBenefit: string;
  }>> = {
    'LLM': {
      id: {
        name: 'Large Language Models (LLM)',
        category: 'Bahasa & Penalaran',
        description: 'Model fondasi cerdas untuk penalaran teks mendalam, sintesis dokumen hukum dan bisnis, serta pemahaman konteks bahasa Indonesia.',
        enterpriseBenefit: 'Penalaran kompleks setara pakar tanpa ketergantungan API cloud pihak ketiga.'
      },
      en: {
        name: 'Large Language Models (LLM)',
        category: 'Language & Cognitive Reasoning',
        description: 'Hardened foundation models for multi-lingual legal reasoning, document synthesis, and nuanced business context extraction.',
        enterpriseBenefit: 'Expert-grade contextual reasoning without any public cloud API dependencies.'
      },
      ja: {
        name: '大規模言語モデル (LLM)',
        category: '言語・推論基盤',
        description: '高度な法的推論、大量文書要約、業界特有の専門文脈を正確に解釈するファインチューニング済み基底モデル。',
        enterpriseBenefit: '外部パブリッククラウドに依存せず、専門家水準の自社専用推論をオンプレミスで実現。'
      },
      ar: {
        name: 'نماذج اللغة الكبيرة (LLM)',
        category: 'اللغة والاستدلال المعرفي',
        description: 'نماذج تأسيسية مدربة على الاستدلال القانوني وتلخيص العقود وفهم سياق الأعمال المعقد بلغات متعددة.',
        enterpriseBenefit: 'استدلال مؤسسي فائق الدقة يعادل الخبراء دون أي اعتماد على واجهات سحابية خارجية.'
      }
    },
    'RAG': {
      id: {
        name: 'Retrieval-Augmented Generation (RAG)',
        category: 'Knowledge Grounding',
        description: 'Arsitektur pencarian semantik berdensitas tinggi yang menghubungkan AI langsung ke repositori dokumen resmi internal organisasi.',
        enterpriseBenefit: 'Menghilangkan halusinasi dengan sitasi langsung ke dokumen sumber valid.'
      },
      en: {
        name: 'Retrieval-Augmented Generation (RAG)',
        category: 'Knowledge Grounding',
        description: 'High-density semantic vector search linking AI directly to authoritative internal enterprise document repositories.',
        enterpriseBenefit: 'Eliminates model hallucination via verifiable citation links to source documents.'
      },
      ja: {
        name: '検索拡張生成 (RAG)',
        category: 'ナレッジ照合基盤',
        description: '高密度ベクトル検索により、社内の公式文書や規程データベースとAIを直接紐付けるアーキテクチャ。',
        enterpriseBenefit: '根拠となる公式文書へのリンクを明示することで、AIのハルシネーション（誤回答）を徹底排除。'
      },
      ar: {
        name: 'الاسترجاع المعزز بالتوليد (RAG)',
        category: 'تأصيل المعرفة المؤسسية',
        description: 'بحث دلالي متقدم بالمتجهات يربط نماذج الذكاء الاصطناعي مباشرة بأرشيف المستندات والسياسات الرسمية للمؤسسة.',
        enterpriseBenefit: 'القضاء التام على الهلوسة بتقديم مراجع واستشهادات موثقة من المستندات الأصلية.'
      }
    }
  };

  const currentLoc = localizedTech[selectedTech.acronym]?.[lang];
  const techName = currentLoc?.name || selectedTech.name;
  const techCategory = currentLoc?.category || selectedTech.category;
  const techDesc = currentLoc?.description || selectedTech.description;
  const techBenefit = currentLoc?.enterpriseBenefit || selectedTech.enterpriseBenefit;

  return (
    <section id="teknologi" className="relative py-28 bg-[#020204] border-t border-white/[0.06] overflow-hidden text-left">
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

        {/* 12 Core Tech Bento Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
          {TECH_MODULES.map((tech) => {
            const Icon = iconMap[tech.acronym] || Cpu;
            const isSelected = selectedTech.acronym === tech.acronym;
            const loc = localizedTech[tech.acronym]?.[lang];
            const displayName = loc?.name || tech.name;
            const displayCat = loc?.category || tech.category;

            return (
              <div
                key={tech.acronym}
                onClick={() => setSelectedTech(tech)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white/[0.08] border-[#2997FF]/60 shadow-lg scale-[1.01]'
                    : 'bg-[#0A0A0D]/70 border-white/[0.06] hover:bg-white/[0.04]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-xl bg-white/[0.06] flex items-center justify-center text-[#2997FF]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[10px] text-[#86868B] px-2 py-0.5 rounded-full bg-white/[0.04]">
                      {tech.acronym}
                    </span>
                  </div>
                  <div className={`text-sm font-semibold font-sans ${isSelected ? 'text-white' : 'text-[#D2D2D7]'}`}>
                    {displayName}
                  </div>
                  <div className="text-[10px] text-[#86868B] font-mono mt-0.5 truncate">
                    {displayCat}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Technology Details Bento */}
        <div className="apple-card p-6 sm:p-10 rounded-3xl bg-[#0F0F12]/80 border border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-mono text-[#2997FF] block">
                {techCategory} • {selectedTech.acronym}
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white font-sans">
                {techName}
              </h3>
              <p className="text-sm text-[#A1A1A6] leading-relaxed font-sans">
                {techDesc}
              </p>
            </div>

            <div className="lg:col-span-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <div className="text-[11px] font-sans font-semibold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2997FF]" /> {t.benefitLabel}
              </div>
              <div className="text-xs text-[#86868B] leading-relaxed font-sans">
                {techBenefit}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
