import React, { useState, useEffect } from 'react';

// ==========================================
// 1. PT Maudy Network Corporate Components
// ==========================================
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServicesSection } from './components/ServicesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProductsSection } from './components/ProductsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ClientsPartners } from './components/ClientsPartners';
import { ProcessWorkflow } from './components/ProcessWorkflow';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { GovernanceDrawer } from './components/GovernanceDrawer';
import { FloatingActions } from './components/FloatingActions';
import { AdminPanel } from './components/AdminPanel';
import { AtmosphericBackground } from './components/AtmosphericBackground';
import { InteractiveEstimator } from './components/InteractiveEstimator';
import { CmsProvider } from './context/CmsContext';

// ==========================================
// 2. Aegis Technology (Enterprise AI) Components
// ==========================================
import { AegisNavbar } from './components/AegisNavbar';
import { AppleAtmosphericBackground } from './components/AppleAtmosphericBackground';
import { AegisHero } from './components/AegisHero';
import { AegisCompanyValue } from './components/AegisCompanyValue';
import { AegisProductEcosystem } from './components/AegisProductEcosystem';
import { AegisFlagshipMaritime } from './components/AegisFlagshipMaritime';
import { AegisProductPortfolio } from './components/AegisProductPortfolio';
import { AegisIndustrySection } from './components/AegisIndustrySection';
import { AegisTechnologySection } from './components/AegisTechnologySection';
import { AegisPrivateAiSection } from './components/AegisPrivateAiSection';
import { AegisSecuritySection } from './components/AegisSecuritySection';
import { AegisHowItWorks } from './components/AegisHowItWorks';
import { AegisBenefitsSection } from './components/AegisBenefitsSection';
import { AegisUseCases } from './components/AegisUseCases';
import { AegisCompanySection } from './components/AegisCompanySection';
import { AegisContactSection } from './components/AegisContactSection';
import { AegisFooter } from './components/AegisFooter';
import { AegisProductModal } from './components/AegisProductModal';
import { AegisContactModal } from './components/AegisContactModal';
import { AegisBrochureCatalogModal } from './components/AegisBrochureCatalogModal';
import { PRODUCTS, type ProductItem } from './data/aegisData';

export function App() {
  // Portal State: 'corporate' (PT Maudy Network) vs 'aegis-ai' (Aegis Technology AI Suite)
  const [activePortal, setActivePortal] = useState<'corporate' | 'aegis-ai'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('aegis-ai') || hash.includes('aegis-platform')) {
        return 'aegis-ai';
      }
    }
    return 'corporate';
  });

  // Corporate Portal States
  const [lang, setLang] = useState<'en' | 'id'>('id');
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [credentialsOpen, setCredentialsOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  // Aegis AI Portal States
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [prefilledProduct, setPrefilledProduct] = useState<string | undefined>(undefined);

  // Enforce Single Unified Apple Dark-Keynote Theme permanently across both portals
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // URL Hash Synchronizer
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#aegis-ai' || hash === '#aegis-platform') {
        setActivePortal('aegis-ai');
      } else if (hash === '#corporate') {
        setActivePortal('corporate');
      }
    };

    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const switchPortal = (portal: 'corporate' | 'aegis-ai') => {
    setActivePortal(portal);
    window.location.hash = portal === 'aegis-ai' ? '#aegis-ai' : '#corporate';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAegisSolutions = () => {
    const el = document.getElementById('solusi');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const selectedProduct: ProductItem | null = selectedProductId 
    ? PRODUCTS.find(p => p.id === selectedProductId) || null 
    : null;

  return (
    <CmsProvider>
      <div className="relative min-h-screen selection:bg-[#0071E3] selection:text-white">
        
        {/* ========================================================================= */}
        {/* Persistent Apple-Style Floating Portal Switcher (Centered Apple Dock Style)*/}
        {/* ========================================================================= */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center bg-[#101422]/90 backdrop-blur-2xl border border-white/[0.12] rounded-full p-1.5 shadow-2xl transition-all hover:scale-102">
          <button
            onClick={() => switchPortal('corporate')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activePortal === 'corporate'
                ? 'bg-[#0071E3] text-white shadow-sm'
                : 'text-[#A1A1A6] hover:text-white hover:bg-white/[0.08]'
            }`}
          >
            <span>🏢</span>
            <span>Maudy Corporate</span>
          </button>
          
          <button
            onClick={() => switchPortal('aegis-ai')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activePortal === 'aegis-ai'
                ? 'bg-[#0071E3] text-white shadow-sm'
                : 'text-[#A1A1A6] hover:text-white hover:bg-white/[0.08]'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>⚡ Aegis AI Suite</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* PORTAL 1: PT MAUDY NETWORK NUSANTARA (CORPORATE PORTAL)                   */}
        {/* ========================================================================= */}
        {activePortal === 'corporate' && (
          <div className="relative min-h-screen text-[#F5F5F7] flex flex-col font-sans transition-colors overflow-x-hidden">
            {/* Interactive Atmospheric Background with Cyber Grids and Glow Orbs */}
            <AtmosphericBackground />

            {/* Sticky Enterprise Navigation Bar */}
            <Navbar
              lang={lang}
              setLang={setLang}
              onOpenConsultation={() => setConsultationOpen(true)}
              onOpenCredentials={() => setCredentialsOpen(true)}
              onOpenAdmin={() => setAdminOpen(true)}
              onSwitchToAegis={() => switchPortal('aegis-ai')}
            />

            {/* Main Corporate Content Sections */}
            <main className="relative z-10 flex-grow pt-14">
              {/* Fullscreen Hero Section */}
              <Hero
                lang={lang}
                onOpenConsultation={() => setConsultationOpen(true)}
                onExploreProjects={scrollToProjects}
              />

              {/* Operational Statistics Bar */}
              <StatsBar lang={lang} />

              {/* Brand Logos of 16 Clients & Principals */}
              <ClientsPartners lang={lang} />

              {/* Corporate About & Storytelling */}
              <AboutSection
                lang={lang}
                onOpenConsultation={() => setConsultationOpen(true)}
              />

              {/* Why Choose MNK - Competitive Moats */}
              <WhyChooseUs lang={lang} />

              {/* Comprehensive Services Suite (12 Core Offerings) */}
              <ServicesSection
                lang={lang}
                onOpenConsultation={() => setConsultationOpen(true)}
              />

              {/* Critical Industries & Tailored Solutions */}
              <IndustriesSection
                lang={lang}
                onExploreProjects={scrollToProjects}
              />

              {/* Flagship Projects & Verified Track Record Case Studies */}
              <ProjectsSection
                lang={lang}
                onOpenConsultation={() => setConsultationOpen(true)}
              />

              {/* Proprietary Products & Interactive Live Simulator (XTUR + Aegis Maritime) */}
              <ProductsSection
                lang={lang}
                onOpenConsultation={() => setConsultationOpen(true)}
              />

              {/* Interactive Architecture & Capacity Estimator */}
              <InteractiveEstimator
                lang={lang}
                onOpenConsultation={() => setConsultationOpen(true)}
              />

              {/* Global Certifications & Organization Leadership */}
              <CertificationsSection lang={lang} />

              {/* 8-Stage Engineering Delivery Workflow */}
              <ProcessWorkflow
                lang={lang}
                onOpenConsultation={() => setConsultationOpen(true)}
              />

              {/* Enterprise CTA Banner */}
              <CtaSection
                lang={lang}
                onOpenConsultation={() => setConsultationOpen(true)}
              />

              {/* Direct Contact, Map Visualizer & Technical Form */}
              <ContactSection lang={lang} />
            </main>

            {/* Comprehensive Enterprise Footer */}
            <Footer
              lang={lang}
              onOpenConsultation={() => setConsultationOpen(true)}
              onOpenCredentials={() => setCredentialsOpen(true)}
            />

            {/* Global Consultation Modal */}
            <ConsultationModal
              isOpen={consultationOpen}
              onClose={() => setConsultationOpen(false)}
              lang={lang}
            />

            {/* Verified Contracts & Governance Drawer */}
            <GovernanceDrawer
              isOpen={credentialsOpen}
              onClose={() => setCredentialsOpen(false)}
              lang={lang}
            />

            {/* In-Browser CMS & Admin Control Panel */}
            <AdminPanel
              isOpen={adminOpen}
              onClose={() => setAdminOpen(false)}
              lang={lang}
            />
          </div>
        )}

        {/* ========================================================================= */}
        {/* PORTAL 2: AEGIS TECHNOLOGY (ENTERPRISE AI & AUTOMATION PLATFORM)          */}
        {/* ========================================================================= */}
        {activePortal === 'aegis-ai' && (
          <div className="relative min-h-screen bg-[#07090E] text-slate-100 font-sans selection:bg-[#0071E3] selection:text-white overflow-x-hidden">
            {/* Apple-grade Atmospheric Ambient Background Layer */}
            <AppleAtmosphericBackground />

            {/* 1. Sticky Navigation */}
            <AegisNavbar 
              onOpenDemo={(pName) => {
                setPrefilledProduct(pName);
                setDemoModalOpen(true);
              }}
              onSwitchToCorporate={() => switchPortal('corporate')}
              onOpenBrochure={() => setBrochureModalOpen(true)}
            />

            {/* Main Content Sections */}
            <main className="relative z-10">
              {/* 2. Hero Section */}
              <AegisHero 
                onOpenDemo={() => {
                  setPrefilledProduct(undefined);
                  setDemoModalOpen(true);
                }}
                onExploreSolutions={scrollToAegisSolutions}
                onOpenBrochure={() => setBrochureModalOpen(true)}
              />

              {/* 3. Company Value: AI yang Dibangun untuk Dunia Nyata */}
              <AegisCompanyValue />

              {/* 4. Product Ecosystem (Visual Hierarchy) */}
              <AegisProductEcosystem />

              {/* 5. Flagship Spotlight: Aegis Maritime */}
              <AegisFlagshipMaritime 
                onOpenDemo={(pName) => {
                  setPrefilledProduct(pName);
                  setDemoModalOpen(true);
                }}
                onOpenProductDetail={(pId) => setSelectedProductId(pId)}
              />

              {/* 6. Product Portfolio: All 12 Products with Artwork & Mockups */}
              <AegisProductPortfolio 
                onOpenDemo={(pName) => {
                  setPrefilledProduct(pName);
                  setDemoModalOpen(true);
                }}
                onOpenProductDetail={(pId) => setSelectedProductId(pId)}
                onOpenBrochure={() => setBrochureModalOpen(true)}
              />

              {/* 7. Industry Section: AI untuk Berbagai Industri */}
              <AegisIndustrySection 
                onSelectProduct={(pId) => setSelectedProductId(pId)}
                onOpenDemo={(pName) => {
                  setPrefilledProduct(pName);
                  setDemoModalOpen(true);
                }}
              />

              {/* 8. Technology: Technology Behind the Intelligence */}
              <AegisTechnologySection />

              {/* 9. Private AI: Ketika Data Adalah Aset Strategis */}
              <AegisPrivateAiSection 
                onOpenDemo={(pName) => {
                  setPrefilledProduct(pName);
                  setDemoModalOpen(true);
                }} 
              />

              {/* 10. Security: Arsitektur Keamanan Enterprise */}
              <AegisSecuritySection />

              {/* 11. How It Works: 6-Step Pipeline */}
              <AegisHowItWorks />

              {/* 12. Business Benefits: Dampak Kualitatif */}
              <AegisBenefitsSection />

              {/* 13. Real Use Cases */}
              <AegisUseCases />

              {/* 14. Company Section: Tentang Kami */}
              <AegisCompanySection />

              {/* 15. Contact / Request Demo Section */}
              <AegisContactSection prefilledProduct={prefilledProduct} />
            </main>

            {/* 16. Comprehensive Footer */}
            <AegisFooter onOpenBrochure={() => setBrochureModalOpen(true)} />

            {/* Interactive Product Deep-Dive Modal */}
            <AegisProductModal 
              product={selectedProduct}
              onClose={() => setSelectedProductId(null)}
              onOpenDemo={(pName) => {
                setSelectedProductId(null);
                setPrefilledProduct(pName);
                setDemoModalOpen(true);
              }}
            />

            {/* Interactive Global Demo Consultation Modal */}
            <AegisContactModal 
              isOpen={demoModalOpen}
              onClose={() => setDemoModalOpen(false)}
              prefilledProduct={prefilledProduct}
            />

            {/* Interactive Official E-Catalog & Brochure Modal */}
            <AegisBrochureCatalogModal 
              isOpen={brochureModalOpen}
              onClose={() => setBrochureModalOpen(false)}
              onOpenDemo={(pName) => {
                setBrochureModalOpen(false);
                setPrefilledProduct(pName);
                setDemoModalOpen(true);
              }}
            />
          </div>
        )}

        {/* Global Floating Actions (Maudy AI Virtual Desk, WhatsApp & Scroll-to-Top) */}
        <FloatingActions 
          onOpenEstimator={() => {
            if (activePortal !== 'corporate') {
              switchPortal('corporate');
            }
            setTimeout(() => {
              const el = document.getElementById('estimator');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }} 
        />
      </div>
    </CmsProvider>
  );
}

export default App;
