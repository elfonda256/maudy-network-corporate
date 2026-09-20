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
      {/* Signature Corporate Red - Blue Top Border Stripe */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#DC2626] via-[#0050AE] to-[#DC2626] shadow-xs"></div>

      {/* Top Utility Micro-Bar (Mandiri Style) */}
      <div className="bg-white dark:bg-[#06101B] border-b border-slate-200 dark:border-slate-800/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between text-xs">
          {/* Left: Language Switcher */}
          <div className="flex items-center space-x-2 font-bold">
            <button
              onClick={() => setLang('id')}
              className={`transition-colors ${
                lang === 'id'
                  ? 'text-[#0050AE] dark:text-[#00C6FF] font-black'
                  : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
              }`}
            >
              ID
            </button>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <button
              onClick={() => setLang('en')}
              className={`transition-colors ${
                lang === 'en'
                  ? 'text-[#0050AE] dark:text-[#00C6FF] font-black'
                  : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
              }`}
            >
              EN
            </button>
          </div>

          {/* Center: Search Box (Mandiri Style with Live Dropdown) */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-6 relative">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'en' ? 'Type to search services, VSAT, XTUR, CCTV...' : 'Cari layanan, VSAT, XTUR, CCTV, SPK...'}
                className="w-full pl-9 pr-8 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-xs text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#0050AE] dark:focus:border-cyan-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Live Search Results Dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl bg-white dark:bg-[#071322] border border-slate-200 dark:border-cyan-500/40 shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-3.5 py-2 bg-slate-50 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 text-[10px] font-tech text-slate-500 dark:text-cyan-400 flex items-center justify-between">
                  <span>{lang === 'en' ? 'SEARCH RESULTS' : 'HASIL PENCARIAN SISTEM'}</span>
                  <span>{searchResults.length} {lang === 'en' ? 'MATCHES' : 'DITEMUKAN'}</span>
                </div>
                <div className="divide-y divide-slate-100 dark:divide-slate-800/60 max-h-72 overflow-y-auto">
                  {searchResults.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={item.action}
                      className="w-full p-2.5 hover:bg-red-50/50 dark:hover:bg-slate-800/80 text-left transition-colors flex items-center justify-between group"
                    >
                      <div className="flex-1 pr-2">
                        <div className="flex items-center space-x-2">
                          <span className={`px-1.5 py-0.2 rounded text-[9px] font-tech font-bold ${
                            item.category === 'Product' ? 'bg-red-500/10 text-red-600 dark:text-red-400' :
                            item.category === 'Service' ? 'bg-blue-500/10 text-[#0050AE] dark:text-cyan-300' :
                            item.category === 'Project' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' :
                            'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                          }`}>
                            {item.category}
                          </span>
                          <span className="text-xs font-bold text-[#002D62] dark:text-white group-hover:text-red-600 dark:group-hover:text-cyan-300">
                            {item.title}
                          </span>
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 truncate pl-1">
                          {item.subtitle}
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-500 transition-colors flex-shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Quick Utilities & Consultation Action */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Quick Utility Icons */}
            <div className="hidden sm:flex items-center space-x-3 text-slate-600 dark:text-slate-300">
              <a
                href="#products"
                title="Molinar.id & Apps"
                className="p-1 hover:text-[#0050AE] dark:hover:text-cyan-400 transition-colors"
              >
                <Smartphone className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                title="Semarang HQ Office"
                className="p-1 hover:text-[#0050AE] dark:hover:text-cyan-400 transition-colors"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a
                href="tel:+6285727487507"
                title="24/7 Technical Support"
                className="p-1 hover:text-[#0050AE] dark:hover:text-cyan-400 transition-colors"
              >
                <Headphones className="w-4 h-4" />
              </a>
            </div>

            {/* Verified Docs Quick Link */}
            <button
              onClick={onOpenCredentials}
              className="hidden lg:flex items-center space-x-1 text-[11px] font-semibold text-[#0050AE] dark:text-cyan-400 hover:underline"
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Contracts & SPK' : 'Kontrak & SPK'}</span>
            </button>

            {/* Official PDF Download Quick Trigger */}
            <button
              onClick={onOpenCredentials}
              className="hidden sm:flex items-center space-x-1 text-[11px] font-bold text-red-600 dark:text-red-400 hover:underline"
              title="Unduh Company Profile & Brosur XTUR PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PDF</span>
            </button>

            {/* In-Browser CMS Admin Button */}
            <button
              onClick={onOpenAdmin}
              className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 text-[11px] font-bold text-[#0050AE] dark:text-cyan-400 hover:bg-blue-100 dark:hover:bg-slate-700 transition-colors shadow-2xs group"
              title="Open In-Browser CMS (CRUD for Projects, Services, Clients/Logos, Inquiries)"
            >
              <Sliders className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
              <span>CMS Admin</span>
              {newInquiriesCount > 0 && (
                <span className="px-1.5 py-0.2 text-[10px] font-black rounded-full bg-red-500 text-white animate-pulse">
                  {newInquiriesCount}
                </span>
              )}
            </button>

            {/* Light / Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              title={isDarkMode ? 'Switch to Clean Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5 text-slate-600" />}
            </button>

            {/* Enterprise Red-Blue Brand Gradient CTA Button */}
            <button
              onClick={onOpenConsultation}
              className="flex items-center space-x-1.5 px-4 py-1.5 rounded-lg bg-gradient-brand hover:opacity-95 text-white font-bold text-xs shadow-md shadow-red-500/20 transition-all duration-200 group"
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
        className={`bg-white/95 dark:bg-[#081522]/90 backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'shadow-md py-2.5 border-b border-slate-200 dark:border-cyan-500/20' : 'py-3.5 border-b border-slate-100 dark:border-slate-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="px-2.5 py-1 rounded-xl bg-white/95 dark:bg-white shadow-xs border border-slate-200/60 dark:border-white/40 flex items-center transition-transform group-hover:scale-105">
              <img
                src="/logo-mnk.png"
                alt="Maudy Network Komunikasi"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-[#0050AE] dark:hover:text-cyan-400 hover:bg-blue-50 dark:hover:bg-cyan-500/10 rounded-lg transition-all"
              >
                {link.label[lang]}
              </a>
            ))}

            {/* Direct Link Quick Chips */}
            <div className="flex items-center space-x-1.5 pl-2 border-l border-slate-200 dark:border-slate-800">
              <a
                href="#xtur"
                title="Direct link to XTUR AI Vision"
                className="px-2.5 py-1 rounded-md text-[11px] font-tech font-bold bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 border border-red-500/20 hover:scale-105 transition-all flex items-center"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-1 animate-ping"></span>
                XTUR AI
              </a>
              <a
                href="#aegis"
                title="Direct link to Aegis Maritime Suite"
                className="px-2.5 py-1 rounded-md text-[11px] font-tech font-bold bg-cyan-500/10 hover:bg-cyan-500/20 text-[#0050AE] dark:text-cyan-300 border border-cyan-500/20 hover:scale-105 transition-all flex items-center"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-1"></span>
                Aegis
              </a>
            </div>

            {onSwitchToAegis && (
              <button
                onClick={onSwitchToAegis}
                className="ml-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-[#0050AE] via-[#0071E3] to-[#2997FF] text-white hover:brightness-110 shadow-md shadow-blue-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
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
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#081522] border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-[#0050AE] dark:hover:text-cyan-400"
            >
              {link.label[lang]}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
            {onSwitchToAegis && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSwitchToAegis();
                }}
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#0050AE] to-[#2997FF] text-white font-bold text-xs shadow-md flex items-center justify-center gap-2"
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
              className="w-full py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-cyan-300"
            >
              {lang === 'en' ? 'Verified Contracts & SPK' : 'Dokumen Kontrak & SPK Resmi'}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="w-full py-2.5 rounded-lg bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 text-xs font-bold text-[#0050AE] dark:text-cyan-400 flex items-center justify-center space-x-2"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'In-Browser CMS Admin' : 'Kelola Konten (CMS Admin)'}</span>
              {newInquiriesCount > 0 && (
                <span className="px-1.5 py-0.2 text-[10px] font-black rounded-full bg-red-500 text-white">
                  {newInquiriesCount}
                </span>
              )}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 rounded-lg bg-gradient-brand text-white font-bold text-sm shadow-md"
            >
              {lang === 'en' ? 'Get Technical Consultation' : 'Mulai Konsultasi'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
