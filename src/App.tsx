import React, { useState, useEffect } from 'react';
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
import { PRODUCTS, type ProductItem } from './data/aegisData';

export function App() {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [prefilledProduct, setPrefilledProduct] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Force dark mode for dark cinematic enterprise theme
    document.documentElement.classList.add('dark');
  }, []);

  const handleOpenDemo = (productName?: string) => {
    setPrefilledProduct(productName);
    setDemoModalOpen(true);
  };

  const handleOpenProductDetail = (productId: string) => {
    setSelectedProductId(productId);
  };

  const selectedProduct: ProductItem | null = selectedProductId 
    ? PRODUCTS.find(p => p.id === selectedProductId) || null 
    : null;

  const scrollToSolutions = () => {
    const el = document.getElementById('solusi');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#000000] text-slate-100 font-sans selection:bg-[#0050AE] selection:text-white overflow-x-hidden">
      {/* Apple-grade Atmospheric Ambient Background Layer */}
      <AppleAtmosphericBackground />

      {/* 1. Sticky Navigation */}
      <AegisNavbar onOpenDemo={handleOpenDemo} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 2. Hero Section */}
        <AegisHero 
          onOpenDemo={() => handleOpenDemo()}
          onExploreSolutions={scrollToSolutions}
        />

        {/* 3. Company Value: AI yang Dibangun untuk Dunia Nyata */}
        <AegisCompanyValue />

        {/* 4. Product Ecosystem (Visual Hierarchy) */}
        <AegisProductEcosystem />

        {/* 5. Flagship Spotlight: Aegis Maritime */}
        <AegisFlagshipMaritime 
          onOpenDemo={handleOpenDemo}
          onOpenProductDetail={handleOpenProductDetail}
        />

        {/* 6. Product Portfolio: All 12 Products */}
        <AegisProductPortfolio 
          onOpenDemo={handleOpenDemo}
          onOpenProductDetail={handleOpenProductDetail}
        />

        {/* 7. Industry Section: AI untuk Berbagai Industri */}
        <AegisIndustrySection 
          onSelectProduct={handleOpenProductDetail}
          onOpenDemo={handleOpenDemo}
        />

        {/* 8. Technology: Technology Behind the Intelligence */}
        <AegisTechnologySection />

        {/* 9. Private AI: Ketika Data Adalah Aset Strategis */}
        <AegisPrivateAiSection onOpenDemo={handleOpenDemo} />

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
      <AegisFooter />

      {/* Interactive Product Deep-Dive Modal */}
      <AegisProductModal 
        product={selectedProduct}
        onClose={() => setSelectedProductId(null)}
        onOpenDemo={(pName) => {
          setSelectedProductId(null);
          handleOpenDemo(pName);
        }}
      />

      {/* Interactive Global Demo Consultation Modal */}
      <AegisContactModal 
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        prefilledProduct={prefilledProduct}
      />
    </div>
  );
}

export default App;
