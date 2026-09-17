import React, { useState, useEffect } from 'react';
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
import { CmsProvider } from './context/CmsContext';

function AppContent() {
  const [lang, setLang] = useState<'en' | 'id'>('id');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [credentialsOpen, setCredentialsOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors selection:bg-red-600 selection:text-white overflow-x-hidden">
      {/* Interactive Atmospheric Background with Cyber Grids and Glow Orbs */}
      <AtmosphericBackground />

      {/* Sticky Enterprise Navigation Bar with Top Utility Micro-Bar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onOpenConsultation={() => setConsultationOpen(true)}
        onOpenCredentials={() => setCredentialsOpen(true)}
        onOpenAdmin={() => setAdminOpen(true)}
      />

      {/* Main Content Sections with Relative Z-Index */}
      <main className="relative z-10 flex-grow">
        {/* Fullscreen Hero Section */}
        <Hero
          lang={lang}
          onOpenConsultation={() => setConsultationOpen(true)}
          onExploreProjects={scrollToProjects}
        />

        {/* Operational Statistics Bar */}
        <StatsBar lang={lang} />

        {/* Real Brand Logos of Companies that Trust Maudy */}
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

        {/* Flagship Projects & Case Studies */}
        <ProjectsSection
          lang={lang}
          onOpenConsultation={() => setConsultationOpen(true)}
        />

        {/* Proprietary Products & Interactive Live Simulator */}
        <ProductsSection
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

        {/* High-Conversion Enterprise CTA Banner */}
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

      {/* Floating Action Buttons (WhatsApp & Scroll to top) */}
      <FloatingActions />

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
  );
}

export function App() {
  return (
    <CmsProvider>
      <AppContent />
    </CmsProvider>
  );
}

export default App;
