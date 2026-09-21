import React, { useState } from 'react';
import { 
  FileText, ShoppingCart, HardHat, Wrench, Ship, Shield, 
  Trash2, Truck, Activity, CheckSquare, BarChart2, Cpu,
  ChevronRight, Sparkles, CheckCircle2
} from 'lucide-react';
import { PRODUCTS, type ProductItem } from '../data/aegisData';
import { DashboardMockupRenderer } from './DashboardMockupRenderer';
import { ProductVisualIllustration } from './ProductVisualIllustration';

interface Props {
  onOpenDemo: (prefilledProduct?: string) => void;
  onOpenProductDetail: (productId: string) => void;
  onOpenBrochure?: () => void;
}

export const AegisProductPortfolio: React.FC<Props> = ({ onOpenDemo, onOpenProductDetail, onOpenBrochure }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'enterprise' | 'industry' | 'core' | 'operations'>('all');

  const productIcons: Record<string, React.ElementType> = {
    'ai-doc-intel': FileText,
    'procure-ai': ShoppingCart,
    'construct-ai': HardHat,
    'maintenance-ai': Wrench,
    'aegis-maritime': Ship,
    'aegis-cyber-ai': Shield,
    'smart-waste-ai': Trash2,
    'fleetos-ai': Truck,
    'factory-twin-ai': Activity,
    'comply-ai': CheckSquare,
    'business-ai': BarChart2,
    'aegis-private-ai': Cpu,
  };

  const filteredProducts = PRODUCTS.filter(p => {
    return activeCategory === 'all' || p.category === activeCategory;
  });

  return (
    <section id="produk" className="relative py-24 bg-transparent border-t border-white/[0.06] overflow-hidden text-left">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#86868B] text-xs font-mono">
            <span>PORTFOLIO PRODUK LENGKAP (12 SOLUSI)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight font-sans">
            Solusi yang Dirancang untuk Setiap Kebutuhan.
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] leading-relaxed font-sans">
            Jelajahi 12 platform solusi kecerdasan buatan, otomasi, dan analitik yang dibangun khusus untuk tantangan skala enterprise.
          </p>

          {onOpenBrochure && (
            <div className="pt-2">
              <button
                onClick={onOpenBrochure}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] text-xs font-medium text-white transition-all shadow-sm cursor-pointer"
              >
                <span>📑 Buka E-Katalog Lengkap &amp; Cetak Brosur PDF &rarr;</span>
              </button>
            </div>
          )}
        </div>

        {/* Apple Style Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {[
            { id: 'all', label: 'Semua Produk (12)' },
            { id: 'enterprise', label: 'Dokumen & Pengadaan' },
            { id: 'industry', label: 'Industri & Maritim' },
            { id: 'operations', label: 'Armada & Operasional' },
            { id: 'core', label: 'Core AI & Keamanan' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`apple-pill-btn px-4 py-2 text-xs transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'bg-white/[0.04] text-[#86868B] hover:text-white border border-white/[0.06] hover:bg-white/[0.08]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 12 Apple Bento Product Cards with Visual Artwork + Telemetry Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProducts.map((product) => {
            const Icon = productIcons[product.id] || Cpu;
            return (
              <div
                key={product.id}
                className="apple-card p-6 sm:p-8 rounded-3xl bg-[#0C0C0F]/85 border border-white/[0.08] shadow-2xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Card Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-[#2997FF]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-semibold text-white font-sans">
                            {product.name}
                          </h3>
                          {product.flagship && (
                            <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-medium bg-[#0071E3]/20 text-[#2997FF] border border-[#0071E3]/30">
                              Flagship
                            </span>
                          )}
                          {product.corePlatform && (
                            <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-medium bg-white/[0.08] text-[#F5F5F7] border border-white/[0.1]">
                              Core Platform
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-[#86868B] font-sans mt-0.5">
                          {product.tagline}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#A1A1A6] leading-relaxed font-sans">
                    {product.description}
                  </p>

                  {/* 1. Tailored Visual Illustration Asset (Zero Placeholders) */}
                  <div className="pt-1">
                    <ProductVisualIllustration product={product} />
                  </div>

                  {/* Target Industries Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {product.targetIndustries.slice(0, 4).map((ind, idx) => (
                      <span 
                        key={idx} 
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-sans bg-white/[0.04] text-[#86868B] border border-white/[0.06]"
                      >
                        {ind}
                      </span>
                    ))}
                    {product.targetIndustries.length > 4 && (
                      <span className="px-2 py-0.5 text-[10px] text-[#6E6E73] font-mono">
                        +{product.targetIndustries.length - 4} sektor
                      </span>
                    )}
                  </div>

                  {/* 2. Interactive Dashboard Telemetry Mockup */}
                  <div className="pt-2">
                    <DashboardMockupRenderer product={product} interactive={true} />
                  </div>
                </div>

                {/* Card Action Controls */}
                <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenProductDetail(product.id)}
                    className="text-xs font-medium text-[#2997FF] hover:text-white flex items-center gap-1 transition-colors cursor-pointer group"
                  >
                    <span>Spesifikasi & Use Case</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenDemo(product.name)}
                    className="apple-pill-btn px-4 py-1.5 text-xs font-medium text-white bg-[#0071E3] hover:bg-[#0077ED] transition-all cursor-pointer shadow-sm"
                  >
                    Minta Demo
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
