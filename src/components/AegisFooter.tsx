import React from 'react';
import { Shield, ArrowUp } from 'lucide-react';
import { PRODUCTS, INDUSTRIES } from '../data/aegisData';
import type { Language } from '../i18n/translations';
import { AEGIS_UI_TEXTS, getAegisProductLocalized } from '../i18n/aegisTranslations';

interface AegisFooterProps {
  lang?: Language;
  onOpenBrochure?: () => void;
}

export const AegisFooter: React.FC<AegisFooterProps> = ({ lang = 'id', onOpenBrochure }) => {
  const t = AEGIS_UI_TEXTS[lang]?.footer || AEGIS_UI_TEXTS.id.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const backToTopText = {
    id: 'Kembali ke atas',
    en: 'Back to top',
    ja: 'ページ先頭へ',
    ar: 'العودة للأعلى'
  }[lang] || 'Kembali ke atas';

  const quickNavTitle = {
    id: 'Navigasi Cepat',
    en: 'Quick Navigation',
    ja: 'クイックナビ',
    ar: 'روابط سريعة'
  }[lang] || 'Navigasi Cepat';

  const moreProductsText = {
    id: '+ 5 Produk Lainnya ›',
    en: '+ 5 More Products ›',
    ja: '+ 他5製品を表示 ›',
    ar: '+ 5 منتجات إضافية ›'
  }[lang] || '+ 5 Produk Lainnya ›';

  const moreIndustriesText = {
    id: '+ 5 Sektor Lainnya ›',
    en: '+ 5 More Sectors ›',
    ja: '+ 他5業種を表示 ›',
    ar: '+ 5 قطاعات أخرى ›'
  }[lang] || '+ 5 Sektor Lainnya ›';

  return (
    <footer className="relative bg-[#07090E] border-t border-white/[0.08] text-[#86868B] font-sans text-xs text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-white/[0.06]">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-white/[0.08] border border-white/[0.12] flex items-center justify-center text-white">
                <Shield className="w-4 h-4 text-[#2997FF]" />
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-sm font-semibold text-white">Aegis</span>
                <span className="text-sm font-light text-[#86868B]">Technology</span>
              </div>
            </div>

            <p className="text-xs text-[#86868B] leading-relaxed max-w-sm font-sans">
              {t.desc}
            </p>

            <div className="text-[11px] text-[#6E6E73] space-y-0.5">
              <div>{t.sovereignty}</div>
              <div>{t.architecture}</div>
            </div>
          </div>

          {/* Solutions & Products Columns */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider font-sans">
              {t.productsCol}
            </div>
            <ul className="space-y-1.5 text-[12px] font-sans">
              {PRODUCTS.slice(0, 7).map((p) => {
                const lp = getAegisProductLocalized(p.id, lang);
                const pName = lp?.name || p.name;
                return (
                  <li key={p.id}>
                    <button 
                      onClick={() => scrollTo('produk')}
                      className="hover:text-white transition-colors cursor-pointer text-left"
                    >
                      {pName}
                    </button>
                  </li>
                );
              })}
              <li>
                <button 
                  onClick={() => scrollTo('produk')}
                  className="text-[#2997FF] hover:underline cursor-pointer"
                >
                  {moreProductsText}
                </button>
              </li>
            </ul>
          </div>

          {/* Industries Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider font-sans">
              {t.industriesCol}
            </div>
            <ul className="space-y-1.5 text-[12px] font-sans">
              {INDUSTRIES.slice(0, 7).map((ind) => (
                <li key={ind.id}>
                  <button 
                    onClick={() => scrollTo('industri')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {ind.name}
                  </button>
                </li>
              ))}
              <li>
                <button 
                  onClick={() => scrollTo('industri')}
                  className="text-[#2997FF] hover:underline cursor-pointer"
                >
                  {moreIndustriesText}
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider font-sans">
              {quickNavTitle}
            </div>
            <ul className="space-y-1.5 text-[12px] font-sans">
              <li><button onClick={() => scrollTo('beranda')} className="hover:text-white cursor-pointer">Overview</button></li>
              <li><button onClick={() => scrollTo('solusi')} className="hover:text-white cursor-pointer">{lang === 'ja' ? '戦略価値' : lang === 'ar' ? 'القيمة الاستراتيجية' : 'Solutions'}</button></li>
              <li><button onClick={() => scrollTo('teknologi')} className="hover:text-white cursor-pointer">{lang === 'ja' ? 'テクノロジー' : lang === 'ar' ? 'التكنولوجيا' : 'Technology'}</button></li>
              <li><button onClick={() => scrollTo('private-ai')} className="hover:text-white cursor-pointer">Private AI</button></li>
              <li><button onClick={() => scrollTo('security')} className="hover:text-white cursor-pointer">{lang === 'ja' ? 'セキュリティ' : lang === 'ar' ? 'الأمان' : 'Security'}</button></li>
              <li><button onClick={() => scrollTo('tentang-kami')} className="hover:text-white cursor-pointer">{lang === 'ja' ? '会社情報' : lang === 'ar' ? 'عن الشركة' : 'About'}</button></li>
              {onOpenBrochure && (
                <li><button onClick={onOpenBrochure} className="text-[#2997FF] hover:underline font-medium cursor-pointer">📑 E-Catalog &amp; PDF</button></li>
              )}
              <li><button onClick={() => scrollTo('kontak')} className="hover:text-white text-[#2997FF] cursor-pointer">{lang === 'ja' ? 'デモ予約' : lang === 'ar' ? 'طلب عرض' : 'Request Demo'}</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6E6E73] font-sans">
          <div>
            Copyright © 2026 <strong>Aegis Technology</strong> • PT Maudy Network Komunikasi. {t.rights}
          </div>

          <div className="flex items-center space-x-4">
            <span>Enterprise Multi-lingual</span>
            <span>•</span>
            <span>Zero Trust &amp; Privacy First</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="apple-pill-btn px-2.5 py-1 bg-white/[0.04] hover:bg-white/[0.08] text-[#86868B] hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              <ArrowUp className="w-3 h-3" />
              <span>{backToTopText}</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
