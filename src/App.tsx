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

export function App() {
  const [lang, setLang] = useState<'en' | 'id'>('id');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [credentialsOpen, setCredentialsOpen] = useState(false);

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
    <div className="min-h-screen bg-white dark:bg-[#081522] text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors selection:bg-[#0050AE] selection:text-white">
      {/* Sticky Enterprise Navigation Bar with Top Utility Micro-Bar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onOpenConsultation={() => setConsultationOpen(true)}
        onOpenCredentials={() => setCredentialsOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Fullscreen Hero Section (Bank Mandiri Livin' Style) */}
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
    </div>
  );
}

export default App;
