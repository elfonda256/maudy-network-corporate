import React, { useState, useEffect, useMemo } from 'react';
import {
  Search,
  Smartphone,
  MapPin,
  Headphones,
  Lock,
  ChevronDown,
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
  onOpenConsultation: () => void;
  onOpenCredentials: () => void;
  onOpenAdmin: () => void;
  onSwitchToAegis?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
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
    { href: '#services', label: { en: 'Solutions', id: 'Solusi Korporasi' } },
    { href: '#industries', label: { en: 'Maritime & VSAT', id: 'Maritim & VSAT' } },
    { href: '#projects', label: { en: 'Portfolio', id: 'Portofolio' } },
    { href: '#products', label: { en: 'XTUR & Tech', id: 'Inovasi & XTUR' } },
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
      <div className="bg-[#07090E]/95 backdrop-blur-2xl border-b border-white/[0.08] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between text-xs gap-3">
          {/* Left: Language Capsule */}
          <div className="flex items-center p-0.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-[11px] font-medium shrink-0">
            <button
              onClick={() => setLang('id')}
              className={`px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
                lang === 'id'
                  ? 'bg-[#0071E3] text-white shadow-xs font-semibold'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
                lang === 'en'
                  ? 'bg-[#0071E3] text-white shadow-xs font-semibold'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Center: Search Box (Apple Pill Style with Live Dropdown) */}
          <div className="hidden md:flex items-center flex-1 max-w-sm lg:max-w-md relative">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#86868B]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'en' ? 'Search solutions, VSAT maritim, XTUR AI, SPK...' : 'Cari solusi, VSAT maritim, XTUR AI, SPK...'}
                className="w-full pl-9 pr-8 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.09] border border-white/[0.1] text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#2997FF] focus:bg-black/60 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Live Search Results Dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl bg-[#121622] border border-white/[0.15] shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-3.5 py-2 bg-white/[0.03] border-b border-white/[0.08] text-[10px] font-mono text-white/60 flex items-center justify-between">
                  <span>{lang === 'en' ? 'SEARCH RESULTS' : 'HASIL PENCARIAN SISTEM'}</span>
                  <span className="text-[#2997FF] font-semibold">{searchResults.length} {lang === 'en' ? 'MATCHES' : 'DITEMUKAN'}</span>
                </div>
                <div className="divide-y divide-white/[0.06] max-h-72 overflow-y-auto">
                  {searchResults.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={item.action}
                      className="w-full p-2.5 hover:bg-white/[0.06] text-left transition-colors flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex-1 pr-2">
                        <div className="flex items-center space-x-2">
                          <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-mono font-medium ${
                            item.category === 'Product' ? 'bg-red-500/20 text-red-300' :
                            item.category === 'Service' ? 'bg-blue-500/20 text-[#2997FF]' :
                            item.category === 'Project' ? 'bg-emerald-500/20 text-emerald-300' :
                            'bg-purple-500/20 text-purple-300'
                          }`}>
                            {item.category}
                          </span>
                          <span className="text-xs font-semibold text-white group-hover:text-[#2997FF]">
                            {item.title}
                          </span>
                        </div>
                        <div className="text-[10px] text-white/60 mt-0.5 truncate pl-1">
                          {item.subtitle}
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#2997FF] transition-colors flex-shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Streamlined Utilities */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            {/* 24/7 Hotline Badge */}
            <a
              href="tel:+6285727487507"
              className="hidden lg:flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all"
              title="Hotline NOC 24/7 & Technical Support"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>NOC: +62 857-2748-7507</span>
            </a>

            {/* Official PDF & SPK Quick Trigger */}
            <button
              onClick={onOpenCredentials}
              className="hidden sm:flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium text-white/80 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition-all cursor-pointer"
              title="Unduh Company Profile & Katalog Spesifikasi PDF"
            >
              <Download className="w-3.5 h-3.5 text-[#2997FF]" />
              <span>{lang === 'en' ? 'Legal & PDFs' : 'Legal & PDF'}</span>
            </button>

            {/* In-Browser CMS Admin Button */}
            <button
              onClick={onOpenAdmin}
              className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-[11px] font-medium text-white transition-colors shadow-2xs group cursor-pointer"
              title="Buka In-Browser CMS Admin"
            >
              <Sliders className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform text-[#2997FF]" />
              <span>CMS</span>
              {newInquiriesCount > 0 && (
                <span className="px-1.5 py-0.2 text-[9px] font-bold rounded-full bg-[#0071E3] text-white">
                  {newInquiriesCount}
                </span>
              )}
            </button>

            {/* Apple Blue Pill Consultation Button */}
            <button
              onClick={onOpenConsultation}
              className="flex items-center space-x-1 px-3.5 py-1 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium text-xs shadow-xs transition-all duration-200 group cursor-pointer"
            >
              <Lock className="w-3 h-3 text-white/90" />
              <span>{lang === 'en' ? 'Consultation' : 'Konsultasi'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`bg-[#07090E]/90 backdrop-blur-2xl transition-all duration-300 ${
          scrolled ? 'shadow-lg py-2 border-b border-white/[0.08]' : 'py-2.5 border-b border-white/[0.06]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group shrink-0">
            <div className="px-2.5 py-1 rounded-2xl bg-white shadow-2xs border border-black/[0.08] flex items-center transition-transform group-hover:scale-105">
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
                className="px-3 py-1.5 text-xs font-medium text-white/80 hover:text-white hover:bg-white/[0.08] rounded-full transition-all"
              >
                {link.label[lang]}
              </a>
            ))}

            {onSwitchToAegis && (
              <button
                onClick={onSwitchToAegis}
                className="ml-3 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#0071E3] to-[#2997FF] hover:brightness-110 text-white shadow-sm transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
                title="Buka Platform Solusi Enterprise AI Aegis (12 Solusi)"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
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
