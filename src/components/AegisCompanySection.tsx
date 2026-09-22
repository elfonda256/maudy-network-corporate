import React from 'react';
import type { Language } from '../i18n/translations';
import { AEGIS_UI_TEXTS } from '../i18n/aegisTranslations';

interface Props {
  lang?: Language;
}

export const AegisCompanySection: React.FC<Props> = ({ lang = 'id' }) => {
  const t = AEGIS_UI_TEXTS[lang]?.company || AEGIS_UI_TEXTS.id.company;

  const entityLabels = {
    id: {
      entity: 'Entitas Resmi',
      company: 'Maudy Network Komunikasi (MNK)',
      sub1: 'Divisi Solusi Aegis Technology',
      cat: 'Kategori Solusi',
      catVal: 'B2B Enterprise AI & Automation',
      sub2: 'Private Infrastructure & IoT',
      scope: 'Jangkauan Penerapan',
      scopeVal: 'Nasional & Regional Maritim',
      sub3: 'On-Premise & Cloud Privat',
      gov: 'Tata Kelola & Keamanan',
      govVal: 'Zero Trust & ISO 27001 Ready',
      sub4: 'Kepatuhan UU PDP Indonesia'
    },
    en: {
      entity: 'Official Entity',
      company: 'PT Maudy Network Komunikasi',
      sub1: 'Aegis Technology Solutions Division',
      cat: 'Solution Category',
      catVal: 'B2B Enterprise AI & Automation',
      sub2: 'Private Infrastructure & IoT',
      scope: 'Deployment Reach',
      scopeVal: 'National & Maritime Regional',
      sub3: 'On-Premise & Sovereign Cloud',
      gov: 'Governance & Security',
      govVal: 'Zero Trust & ISO 27001 Ready',
      sub4: 'Strict Privacy & Data Act Compliance'
    },
    ja: {
      entity: '公式運営法人',
      company: 'PT Maudy Network Komunikasi',
      sub1: 'Aegis Technology ソリューション事業部',
      cat: '事業カテゴリ',
      catVal: 'エンタープライズAI＆自動化',
      sub2: 'プライベートインフラ＆IoT',
      scope: '対応地域・規模',
      scopeVal: 'インドネシア全域＆海洋国際水域',
      sub3: 'オンプレミス＆専用クラウド',
      gov: 'ガバナンス・セキュリティ',
      govVal: 'ゼロトラスト＆ISO 27001適合',
      sub4: '個人情報保護法規完全準拠'
    },
    ar: {
      entity: 'الكيان الرسمي',
      company: 'شركة ماودي نتورك للاتصالات (MNK)',
      sub1: 'قطاع حلول تقنيات إيجيس (Aegis Technology)',
      cat: 'تصنيف الحلول',
      catVal: 'الذكاء الاصطناعي المؤسسي والأتمتة',
      sub2: 'البنية التحتية الخاصة وإنترنت الأشياء',
      scope: 'نطاق التطبيق',
      scopeVal: 'وطني وإقليمي بحري دولي',
      sub3: 'محلي (On-Premise) وسحابي سيادي',
      gov: 'الحوكمة والأمن',
      govVal: 'نموذج الثقة الصفرية ومعيار ISO 27001',
      sub4: 'مطابق لقوانين حماية وسرية البيانات'
    }
  }[lang] || {
    entity: 'Entitas Resmi',
    company: 'Maudy Network Komunikasi (MNK)',
    sub1: 'Divisi Solusi Aegis Technology',
    cat: 'Kategori Solusi',
    catVal: 'B2B Enterprise AI & Automation',
    sub2: 'Private Infrastructure & IoT',
    scope: 'Jangkauan Penerapan',
    scopeVal: 'Nasional & Regional Maritim',
    sub3: 'On-Premise & Cloud Privat',
    gov: 'Tata Kelola & Keamanan',
    govVal: 'Zero Trust & ISO 27001 Ready',
    sub4: 'Kepatuhan UU PDP Indonesia'
  };

  const principleBadge = {
    id: ['Prinsip 01', 'Prinsip 02', 'Prinsip 03'],
    en: ['Principle 01', 'Principle 02', 'Principle 03'],
    ja: ['設計原則 01', '設計原則 02', '設計原則 03'],
    ar: ['المبدأ 01', 'المبدأ 02', 'المبدأ 03']
  }[lang] || ['Prinsip 01', 'Prinsip 02', 'Prinsip 03'];

  return (
    <section id="tentang-kami" className="relative py-28 bg-[#020204] border-t border-white/[0.06] overflow-hidden text-left">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#86868B] text-xs font-mono">
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight font-sans">
            {t.title}
          </h2>
          <p className="text-base sm:text-xl text-[#F5F5F7] leading-relaxed max-w-2xl mx-auto font-light font-sans pt-2">
            {t.quote}
          </p>
        </div>

        {/* 3 Apple Style Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="apple-card p-6 sm:p-7 rounded-3xl bg-[#0F0F12]/70 border border-white/[0.08] space-y-3">
            <span className="text-[11px] font-mono text-[#2997FF] block">{principleBadge[0]}</span>
            <h3 className="text-lg font-semibold text-white font-sans">{t.p1Title}</h3>
            <p className="text-xs text-[#86868B] leading-relaxed font-sans">
              {t.p1Desc}
            </p>
          </div>

          <div className="apple-card p-6 sm:p-7 rounded-3xl bg-[#0F0F12]/70 border border-white/[0.08] space-y-3">
            <span className="text-[11px] font-mono text-[#2997FF] block">{principleBadge[1]}</span>
            <h3 className="text-lg font-semibold text-white font-sans">{t.p2Title}</h3>
            <p className="text-xs text-[#86868B] leading-relaxed font-sans">
              {t.p2Desc}
            </p>
          </div>

          <div className="apple-card p-6 sm:p-7 rounded-3xl bg-[#0F0F12]/70 border border-white/[0.08] space-y-3">
            <span className="text-[11px] font-mono text-[#2997FF] block">{principleBadge[2]}</span>
            <h3 className="text-lg font-semibold text-white font-sans">{t.p3Title}</h3>
            <p className="text-xs text-[#86868B] leading-relaxed font-sans">
              {t.p3Desc}
            </p>
          </div>
        </div>

        {/* Entity Card */}
        <div className="apple-card p-6 sm:p-8 rounded-3xl bg-[#0A0A0D]/80 border border-white/[0.08]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#6E6E73] uppercase block">{entityLabels.entity}</span>
              <span className="text-sm font-semibold text-white font-sans">{entityLabels.company}</span>
              <div className="text-[11px] text-[#2997FF] font-sans">{entityLabels.sub1}</div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#6E6E73] uppercase block">{entityLabels.cat}</span>
              <span className="text-sm font-semibold text-white font-sans">{entityLabels.catVal}</span>
              <div className="text-[11px] text-[#86868B] font-sans">{entityLabels.sub2}</div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#6E6E73] uppercase block">{entityLabels.scope}</span>
              <span className="text-sm font-semibold text-white font-sans">{entityLabels.scopeVal}</span>
              <div className="text-[11px] text-[#86868B] font-sans">{entityLabels.sub3}</div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#6E6E73] uppercase block">{entityLabels.gov}</span>
              <span className="text-sm font-semibold text-white font-sans">{entityLabels.govVal}</span>
              <div className="text-[11px] text-emerald-400 font-sans">{entityLabels.sub4}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
