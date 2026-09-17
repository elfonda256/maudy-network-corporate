import React, { useState, useEffect } from 'react';
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
} from 'lucide-react';
import { useCms } from '../context/CmsContext';

interface NavbarProps {
  lang: 'en' | 'id';
  setLang: (lang: 'en' | 'id') => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  onOpenConsultation: () => void;
  onOpenCredentials: () => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  isDarkMode,
  setIsDarkMode,
  onOpenConsultation,
  onOpenCredentials,
  onOpenAdmin,
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
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

          {/* Center: Search Box (Mandiri Style) */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'en' ? 'Type to search services, VSAT, CCTV...' : 'Ketik untuk mencari layanan, VSAT, CCTV...'}
                className="w-full pl-9 pr-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-xs text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#0050AE] dark:focus:border-cyan-400"
              />
            </div>
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
              <span>{lang === 'en' ? 'Contracts & BAST' : 'Kontrak & BAST'}</span>
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
            <img
              src="/logo-mnk.svg"
              alt="Maudy Network Komunikasi"
              className="h-9 sm:h-11 w-auto transition-transform group-hover:scale-105"
            />
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
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCredentials();
              }}
              className="w-full py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-cyan-300"
            >
              {lang === 'en' ? 'Verified Contracts & BAST' : 'Lihat Berita Acara & Kontrak'}
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
