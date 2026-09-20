import React, { useState, useEffect, useMemo } from 'react';
import {
  Search,
  Smartphone,
  MapPin,
  Headphones,
  Lock,
  ChevronDown,
  Sun,
  Moon,
  Menu,
  X,
  FileCheck,
  Sliders,
  Download,
  ArrowRight,
} from 'lucide-react';
import { PRODUCTS_LIST, SERVICES_LIST, PROJECTS_LIST, CERTIFICATIONS_LIST } from '../data/companyData';
import { useCms } from '../context/CmsContext';

interface NavbarProps {
  lang: 'en' | 'id';
  setLang: (lang: 'en' | 'id') => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  onOpenConsultation: () => void;
  onOpenCredentials: () => void;
  onOpenAdmin: () => void;
  onSwitchToAegis?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  isDarkMode,
  setIsDarkMode,
  onOpenConsultation,
  onOpenCredentials,
  onOpenAdmin,
  onSwitchToAegis,
}) => {
  const { inquiries } = useCms();
  const newInquiriesCount = inquiries.filter((i) => i.status === 'new').length;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: { en: 'Enterprise Solutions', id: 'Solusi Korporasi' } },
    { href: '#industries', label: { en: 'Maritime & Sector', id: 'Maritim & Sektor' } },
    { href: '#projects', label: { en: 'Project Showcase', id: 'Portofolio Proyek' } },
    { href: '#products', label: { en: 'Proprietary Tech', id: 'Inovasi Produk' } },
    { href: '#about', label: { en: 'About MNK', id: 'Tentang MNK' } },
    { href: '#contact', label: { en: 'Support & NOC', id: 'Bantuan & NOC' } },
  ];

  // Live search filtering across Products, Services, Projects, and Certifications
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (q.length < 2) return [];

    const results: Array<{
      category: 'Product' | 'Service' | 'Project' | 'Certification';
      title: string;
      subtitle: string;
      action: () => void;
    }> = [];

    // Products
    PRODUCTS_LIST.forEach((prod) => {
      const nameMatch = prod.name.toLowerCase().includes(q);
      const taglineMatch = prod.tagline.toLowerCase().includes(q);
      const descMatch = prod.description[lang].toLowerCase().includes(q);
      if (nameMatch || taglineMatch || descMatch) {
        results.push({
          category: 'Product',
          title: prod.name,
          subtitle: prod.tagline,
          action: () => {
            const alias = (prod as any).hashAlias?.[0] || prod.id;
            window.location.hash = alias;
            const el = document.getElementById('products');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            setSearchQuery('');
          },
        });
      }
    });

    // Services
    SERVICES_LIST.forEach((srv: any) => {
      const titleMatch = srv.title[lang].toLowerCase().includes(q);
      const descMatch = srv.description[lang].toLowerCase().includes(q);
      if (titleMatch || descMatch) {
        results.push({
          category: 'Service',
          title: srv.title[lang],
          subtitle: srv.category,
          action: () => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            setSearchQuery('');
          },
        });
      }
    });

    // Projects
    PROJECTS_LIST.forEach((proj: any) => {
      const titleMatch = proj.title.toLowerCase().includes(q);
      const clientMatch = proj.client.toLowerCase().includes(q);
      if (titleMatch || clientMatch) {
        results.push({
          category: 'Project',
          title: proj.title,
          subtitle: proj.client,
          action: () => {
            const el = document.getElementById('projects');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            setSearchQuery('');
          },
        });
      }
    });

    // Certifications
    CERTIFICATIONS_LIST.forEach((cert: any) => {
      const nameMatch = cert.name.toLowerCase().includes(q) || cert.code.toLowerCase().includes(q);
      if (nameMatch) {
        results.push({
          category: 'Certification',
          title: `${cert.code} - ${cert.name}`,
          subtitle: cert.issuer,
          action: () => {
            onOpenCredentials();
            setSearchQuery('');
          },
        });
      }
    });

    return results.slice(0, 8);
  }, [searchQuery, lang, onOpenCredentials]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Signature Minimalist Top Line */}
      <div className="h-[2px] w-full bg-[#0071E3]"></div>

      {/* Top Utility Micro-Bar */}
      <div className="bg-[#FBFBFD]/90 dark:bg-[#161617]/90 backdrop-blur-xl border-b border-black/[0.06] dark:border-white/[0.08] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between text-xs">
          {/* Left: Language Switcher */}
          <div className="flex items-center space-x-2 font-medium">
            <button
              onClick={() => setLang('id')}
              className={`transition-colors cursor-pointer ${
                lang === 'id'
                  ? 'text-[#0071E3] dark:text-[#2997FF] font-semibold'
                  : 'text-[#6E6E73] hover:text-[#1D1D1F] dark:hover:text-white'
              }`}
            >
              ID
            </button>
            <span className="text-black/15 dark:text-white/20">|</span>
            <button
              onClick={() => setLang('en')}
              className={`transition-colors cursor-pointer ${
                lang === 'en'
                  ? 'text-[#0071E3] dark:text-[#2997FF] font-semibold'
                  : 'text-[#6E6E73] hover:text-[#1D1D1F] dark:hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Center: Search Box (Apple Pill Style with Live Dropdown) */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-6 relative">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6E6E73]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'en' ? 'Search solutions, VSAT, XTUR, CCTV, SPK...' : 'Cari layanan, VSAT, XTUR, CCTV, SPK...'}
                className="w-full pl-9 pr-8 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.08] border border-black/[0.08] dark:border-white/[0.12] text-xs text-[#1D1D1F] dark:text-white placeholder-[#6E6E73] focus:outline-none focus:border-[#0071E3] dark:focus:border-[#2997FF]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6E6E73] hover:text-[#1D1D1F] dark:hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Live Search Results Dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl bg-white dark:bg-[#161617] border border-black/[0.08] dark:border-white/[0.12] shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-3.5 py-2 bg-black/[0.02] dark:bg-white/[0.02] border-b border-black/[0.06] dark:border-white/[0.08] text-[10px] font-mono text-[#6E6E73] dark:text-[#A1A1A6] flex items-center justify-between">
                  <span>{lang === 'en' ? 'SEARCH RESULTS' : 'HASIL PENCARIAN SISTEM'}</span>
                  <span>{searchResults.length} {lang === 'en' ? 'MATCHES' : 'DITEMUKAN'}</span>
                </div>
                <div className="divide-y divide-black/[0.04] dark:divide-white/[0.06] max-h-72 overflow-y-auto">
                  {searchResults.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={item.action}
                      className="w-full p-2.5 hover:bg-black/[0.03] dark:hover:bg-white/[0.05] text-left transition-colors flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex-1 pr-2">
                        <div className="flex items-center space-x-2">
                          <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-mono font-medium ${
                            item.category === 'Product' ? 'bg-red-500/10 text-red-600 dark:text-red-400' :
                            item.category === 'Service' ? 'bg-blue-500/10 text-[#0071E3] dark:text-[#2997FF]' :
                            item.category === 'Project' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' :
                            'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                          }`}>
                            {item.category}
                          </span>
                          <span className="text-xs font-semibold text-[#1D1D1F] dark:text-white group-hover:text-[#0071E3] dark:group-hover:text-[#2997FF]">
                            {item.title}
                          </span>
                        </div>
                        <div className="text-[10px] text-[#6E6E73] dark:text-[#A1A1A6] mt-0.5 truncate pl-1">
                          {item.subtitle}
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[#6E6E73] group-hover:text-[#0071E3] transition-colors flex-shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Quick Utilities & Consultation Action */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Quick Utility Icons */}
            <div className="hidden sm:flex items-center space-x-3 text-[#6E6E73] dark:text-[#A1A1A6]">
              <a
                href="#products"
                title="Molinar.id & Apps"
                className="p-1 hover:text-[#0071E3] dark:hover:text-[#2997FF] transition-colors"
              >
                <Smartphone className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                title="Semarang HQ Office"
                className="p-1 hover:text-[#0071E3] dark:hover:text-[#2997FF] transition-colors"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a
                href="tel:+6285727487507"
                title="24/7 Technical Support"
                className="p-1 hover:text-[#0071E3] dark:hover:text-[#2997FF] transition-colors"
              >
                <Headphones className="w-4 h-4" />
              </a>
            </div>

            {/* Verified Docs Quick Link */}
            <button
              onClick={onOpenCredentials}
              className="hidden lg:flex items-center space-x-1 text-[11px] font-medium text-[#0071E3] dark:text-[#2997FF] hover:underline cursor-pointer"
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Contracts & SPK' : 'Kontrak & SPK'}</span>
            </button>

            {/* Official PDF Download Quick Trigger */}
            <button
              onClick={onOpenCredentials}
              className="hidden sm:flex items-center space-x-1 text-[11px] font-medium text-[#0071E3] dark:text-[#2997FF] hover:underline cursor-pointer"
              title="Unduh Company Profile & Brosur XTUR PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PDF</span>
            </button>

            {/* In-Browser CMS Admin Button */}
            <button
              onClick={onOpenAdmin}
              className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.08] hover:bg-black/[0.08] dark:hover:bg-white/[0.12] border border-black/[0.08] dark:border-white/[0.12] text-[11px] font-medium text-[#1D1D1F] dark:text-white transition-colors shadow-2xs group cursor-pointer"
              title="Open In-Browser CMS (CRUD for Projects, Services, Clients/Logos, Inquiries)"
            >
              <Sliders className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform text-[#0071E3] dark:text-[#2997FF]" />
              <span>CMS Admin</span>
              {newInquiriesCount > 0 && (
                <span className="px-1.5 py-0.2 text-[10px] font-bold rounded-full bg-[#0071E3] text-white">
                  {newInquiriesCount}
                </span>
              )}
            </button>

            {/* Light / Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.08] hover:bg-black/[0.08] dark:hover:bg-white/[0.12] text-[#1D1D1F] dark:text-[#F5F5F7] transition-colors cursor-pointer"
              title={isDarkMode ? 'Switch to Clean Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-[#1D1D1F]" />}
            </button>

            {/* Apple Blue Pill CTA Button */}
            <button
              onClick={onOpenConsultation}
              className="flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium text-xs shadow-xs transition-all duration-200 group cursor-pointer"
            >
              <Lock className="w-3 h-3 text-white/90" />
              <span>{lang === 'en' ? 'Consultation' : 'Konsultasi'}</span>
              <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`bg-[#FBFBFD]/80 dark:bg-[#161617]/80 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? 'shadow-xs py-2 border-b border-black/[0.08] dark:border-white/[0.08]' : 'py-3 border-b border-black/[0.06] dark:border-white/[0.06]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="px-2.5 py-1 rounded-2xl bg-white shadow-2xs border border-black/[0.08] flex items-center transition-transform group-hover:scale-105">
              <img
                src="/logo-mnk.png"
                alt="Maudy Network Komunikasi"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7] hover:text-[#0071E3] dark:hover:text-[#2997FF] hover:bg-black/[0.04] dark:hover:bg-white/[0.06] rounded-full transition-all"
              >
                {link.label[lang]}
              </a>
            ))}

            {/* Direct Link Quick Chips */}
            <div className="flex items-center space-x-1.5 pl-2 border-l border-black/[0.08] dark:border-white/[0.1]">
              <a
                href="#xtur"
                title="Direct link to XTUR AI Vision"
                className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-black/[0.04] dark:bg-white/[0.08] hover:bg-[#0071E3] hover:text-white text-[#1D1D1F] dark:text-white border border-black/[0.06] dark:border-white/[0.08] transition-all flex items-center"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3] mr-1.5"></span>
                XTUR AI
              </a>
              <a
                href="#aegis"
                title="Direct link to Aegis Maritime Suite"
                className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-black/[0.04] dark:bg-white/[0.08] hover:bg-[#0071E3] hover:text-white text-[#1D1D1F] dark:text-white border border-black/[0.06] dark:border-white/[0.08] transition-all flex items-center"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#2997FF] mr-1.5"></span>
                Aegis
              </a>
            </div>

            {onSwitchToAegis && (
              <button
                onClick={onSwitchToAegis}
                className="ml-2 px-4 py-1.5 rounded-full text-xs font-medium bg-[#0071E3] hover:bg-[#0077ED] text-white shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
                title="Buka Platform Solusi Enterprise AI Aegis (12 Solusi)"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Aegis Enterprise AI</span>
              </button>
            )}
          </nav>

          {/* Mobile hamburger menu toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-[#1D1D1F] dark:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.08] cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBFBFD] dark:bg-[#161617] border-b border-black/[0.08] dark:border-white/[0.08] px-4 pt-3 pb-6 space-y-1.5 shadow-xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-2xl text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7] hover:text-[#0071E3] dark:hover:text-[#2997FF] hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
            >
              {link.label[lang]}
            </a>
          ))}
          <div className="pt-3 border-t border-black/[0.08] dark:border-white/[0.08] space-y-2">
            {onSwitchToAegis && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSwitchToAegis();
                }}
                className="w-full py-3 rounded-full bg-[#0071E3] text-white font-medium text-xs shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>⚡ Buka Platform Aegis Enterprise AI (12 Solusi)</span>
              </button>
            )}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCredentials();
              }}
              className="w-full py-2.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] text-xs font-medium text-[#1D1D1F] dark:text-white cursor-pointer"
            >
              {lang === 'en' ? 'Verified Contracts & SPK' : 'Dokumen Kontrak & SPK Resmi'}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="w-full py-2.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] text-xs font-medium text-[#1D1D1F] dark:text-white flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Sliders className="w-3.5 h-3.5 text-[#0071E3]" />
              <span>{lang === 'en' ? 'In-Browser CMS Admin' : 'Kelola Konten (CMS Admin)'}</span>
              {newInquiriesCount > 0 && (
                <span className="px-1.5 py-0.2 text-[10px] font-bold rounded-full bg-[#0071E3] text-white">
                  {newInquiriesCount}
                </span>
              )}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium text-sm shadow-xs cursor-pointer"
            >
              {lang === 'en' ? 'Get Technical Consultation' : 'Mulai Konsultasi'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
