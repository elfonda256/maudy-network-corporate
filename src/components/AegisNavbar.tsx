import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, ChevronRight, Sparkles } from 'lucide-react';

interface Props {
  onOpenDemo: (prefilledProduct?: string) => void;
}

export const AegisNavbar: React.FC<Props> = ({ onOpenDemo }) => {
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

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#000000]/85 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl py-2.5' 
        : 'bg-[#000000]/70 backdrop-blur-xl border-b border-white/[0.04] py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Apple-style Minimal Brand */}
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

          {/* Desktop Nav Items (Apple.com style small, crisp typography) */}
          <nav className="hidden lg:flex items-center space-x-6 text-[12px] font-normal tracking-tight">
            {[
              { id: 'beranda', label: 'Overview' },
              { id: 'solusi', label: 'Solusi' },
              { id: 'produk', label: 'Produk (12)' },
              { id: 'industri', label: 'Industri' },
              { id: 'teknologi', label: 'Teknologi' },
              { id: 'private-ai', label: 'Private AI' },
              { id: 'security', label: 'Keamanan' },
              { id: 'cara-kerja', label: 'Arsitektur' },
              { id: 'tentang-kami', label: 'Tentang Kami' },
              { id: 'kontak', label: 'Kontak' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`transition-colors cursor-pointer py-1 ${
                  activeSection === link.id
                    ? 'text-white font-medium border-b border-[#2997FF]'
                    : 'text-[#86868B] hover:text-[#F5F5F7]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action: Telemetry indicator & Apple Blue Pill Button */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] text-[#86868B]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[10px] font-mono">Private AI Active</span>
            </div>

            <button
              onClick={() => onOpenDemo()}
              className="apple-pill-btn inline-flex items-center justify-center px-4 py-1.5 text-[12px] font-medium text-white bg-[#0071E3] hover:bg-[#0077ED] active:scale-95 transition-all shadow-sm cursor-pointer"
            >
              <span>Jadwalkan Demo</span>
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
          <div className="lg:hidden mt-3 pt-3 border-t border-white/[0.08] bg-[#0A0A0C]/95 backdrop-blur-2xl rounded-2xl p-4 space-y-1 shadow-2xl animate-fadeIn text-left">
            {[
              { id: 'beranda', label: 'Overview' },
              { id: 'solusi', label: 'Solusi Bisnis' },
              { id: 'produk', label: 'Portfolio Produk (12 Solusi)' },
              { id: 'industri', label: 'Sektor Industri' },
              { id: 'teknologi', label: 'Teknologi & Model' },
              { id: 'private-ai', label: 'Private AI & Kedaulatan' },
              { id: 'security', label: 'Standar Keamanan' },
              { id: 'cara-kerja', label: 'Cara Kerja Pipeline' },
              { id: 'tentang-kami', label: 'Tentang Kami' },
              { id: 'kontak', label: 'Jadwalkan Presentasi' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-colors flex items-center justify-between ${
                  activeSection === link.id
                    ? 'text-white bg-white/[0.08] font-semibold'
                    : 'text-[#86868B] hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-[#6E6E73]" />
              </button>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full py-2.5 text-center text-xs font-medium text-white bg-[#0071E3] hover:bg-[#0077ED] rounded-full transition-all"
              >
                Jadwalkan Demo Sekarang
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
