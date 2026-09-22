import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import type { Language } from '../i18n/translations';
import { LANGUAGES, TRANSLATIONS, getLangText } from '../i18n/translations';

interface Props {
  lang?: Language;
  setLang?: (lang: Language) => void;
  onOpenDemo: (prefilledProduct?: string) => void;
  onSwitchToCorporate?: () => void;
  onOpenBrochure?: () => void;
}

export const AegisNavbar: React.FC<Props> = ({ 
  lang = 'id',
  setLang,
  onOpenDemo, 
  onSwitchToCorporate, 
  onOpenBrochure 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        'beranda', 'solusi', 'produk', 'industri', 'teknologi', 
        'private-ai', 'security', 'cara-kerja', 'tentang-kami', 'kontak'
      ];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'beranda', label: TRANSLATIONS.nav.aegis.overview },
    { id: 'solusi', label: TRANSLATIONS.nav.aegis.solutions },
    { id: 'produk', label: TRANSLATIONS.nav.aegis.products },
    { id: 'industri', label: TRANSLATIONS.nav.aegis.industries },
    { id: 'private-ai', label: TRANSLATIONS.nav.aegis.privateAi },
    { id: 'cara-kerja', label: TRANSLATIONS.nav.aegis.architecture },
    { id: 'kontak', label: TRANSLATIONS.nav.aegis.contact },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#07090E]/85 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl py-2' 
        : 'bg-[#07090E]/70 backdrop-blur-xl border-b border-white/[0.04] py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Apple-style Minimal Brand */}
          <div className="flex items-center space-x-3">
            <div 
              onClick={() => scrollTo('beranda')}
              className="flex items-center space-x-2.5 cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-full bg-white/[0.08] border border-white/[0.12] flex items-center justify-center text-white group-hover:bg-white/[0.15] transition-all">
                <Shield className="w-4 h-4 text-[#2997FF]" />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-semibold tracking-tight text-[#F5F5F7]">Aegis</span>
                  <span className="text-sm font-light text-[#86868B]">Technology</span>
                </div>
                <span className="text-[9px] font-mono text-[#6E6E73] -mt-0.5 tracking-wider uppercase">
                  Maudy Network
                </span>
              </div>
            </div>

            {onSwitchToCorporate && (
              <button
                onClick={onSwitchToCorporate}
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium text-slate-300 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] transition-all cursor-pointer"
                title="Beralih ke Profil Korporat PT Maudy Network Nusantara"
              >
                <span>{getLangText(TRANSLATIONS.nav.aegis.switchToCorporate, lang)}</span>
              </button>
            )}
          </div>

          {/* Desktop Nav Items (Apple.com style small, crisp typography) */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-5 text-[12px] font-normal tracking-tight">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`transition-colors cursor-pointer py-1 ${
                  activeSection === link.id
                    ? 'text-white font-medium border-b border-[#2997FF]'
                    : 'text-[#86868B] hover:text-[#F5F5F7]'
                }`}
              >
                {getLangText(link.label, lang)}
              </button>
            ))}
          </nav>

          {/* Right Action: Language Switcher, Telemetry, E-Catalog & Demo Button */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            {/* Apple 4-Language Pill */}
            {setLang && (
              <div className="flex items-center p-0.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-[11px] font-medium shrink-0">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    title={l.nativeName}
                    className={`px-2 py-0.5 rounded-full transition-all cursor-pointer flex items-center gap-1 text-[11px] ${
                      lang === l.code
                        ? 'bg-[#0071E3] text-white shadow-xs font-semibold'
                        : 'text-white/60 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}

            <div className="hidden xl:flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] text-[#86868B]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[10px] font-mono">{getLangText(TRANSLATIONS.nav.aegis.privateAiActive, lang)}</span>
            </div>

            {onOpenBrochure && (
              <button
                onClick={onOpenBrochure}
                className="hidden md:inline-flex items-center space-x-1 px-3 py-1.5 rounded-full text-[11px] font-medium text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] transition-all cursor-pointer shadow-xs"
                title="Buka E-Katalog & Lembar Spesifikasi PDF"
              >
                <span>{getLangText(TRANSLATIONS.nav.aegis.catalogPdf, lang)}</span>
              </button>
            )}

            <button
              onClick={() => onOpenDemo()}
              className="apple-pill-btn inline-flex items-center justify-center px-4 py-1.5 text-[12px] font-medium text-white bg-[#0071E3] hover:bg-[#0077ED] active:scale-95 transition-all shadow-sm cursor-pointer"
            >
              <span>{getLangText(TRANSLATIONS.nav.aegis.scheduleDemo, lang)}</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg text-[#86868B] hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/[0.08] bg-[#0A0A0C]/95 backdrop-blur-2xl rounded-2xl p-4 space-y-2 shadow-2xl animate-fadeIn text-left">
            {/* Mobile Language Switcher Pill */}
            {setLang && (
              <div className="flex items-center justify-center p-1 rounded-2xl bg-white/[0.06] border border-white/[0.08] text-xs font-medium mb-3">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`flex-1 py-1.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1 text-xs ${
                      lang === l.code
                        ? 'bg-[#0071E3] text-white font-semibold shadow-xs'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}

            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-colors flex items-center justify-between ${
                  activeSection === link.id
                    ? 'text-white bg-white/[0.08] font-semibold'
                    : 'text-[#86868B] hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span>{getLangText(link.label, lang)}</span>
                <ChevronRight className="w-4 h-4 text-[#6E6E73]" />
              </button>
            ))}

            {onSwitchToCorporate && (
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onSwitchToCorporate();
                  }}
                  className="w-full py-2.5 px-4 text-center text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.1] rounded-full transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>{getLangText(TRANSLATIONS.nav.aegis.switchToCorporate, lang)}</span>
                </button>
              </div>
            )}

            {onOpenBrochure && (
              <div className="pt-1">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBrochure();
                  }}
                  className="w-full py-2.5 text-center text-xs font-medium text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] rounded-full transition-all flex items-center justify-center space-x-1.5"
                >
                  <span>{getLangText(TRANSLATIONS.nav.aegis.catalogPdf, lang)}</span>
                </button>
              </div>
            )}

            <div className="pt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full py-2.5 text-center text-xs font-medium text-white bg-[#0071E3] hover:bg-[#0077ED] rounded-full transition-all"
              >
                {getLangText(TRANSLATIONS.nav.aegis.scheduleDemo, lang)}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
