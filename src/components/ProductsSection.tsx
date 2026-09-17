import React, { useState } from 'react';
import { PRODUCTS_LIST } from '../data/companyData';
import { LiveSimulator } from './LiveSimulator';
import { Cpu, CheckCircle2, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

interface ProductsSectionProps {
  lang: 'en' | 'id';
  onOpenConsultation: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  lang,
  onOpenConsultation,
}) => {
  const [activeProductId, setActiveProductId] = useState<string>('molinar-id');
  const activeProduct =
    PRODUCTS_LIST.find((p) => p.id === activeProductId) || PRODUCTS_LIST[0];

  return (
    <section id="products" className="py-24 relative bg-[#081522]/95 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3">
            <Sparkles className="w-3 h-3 text-purple-400" />
            <span>{lang === 'en' ? 'PROPRIETARY INNOVATIONS' : 'PRODUK & TEKNOLOGI MANDIRI'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'en' ? (
              <>
                Engineered In-House for <span className="text-gradient">Absolute Control</span>
              </>
            ) : (
              <>
                Ekosistem Digital Mandiri untuk <span className="text-gradient">Kendali Penuh</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            {lang === 'en'
              ? 'Beyond integration, MNK engineers proprietary software platforms tailored to mission-critical operational challenges.'
              : 'Lebih dari sekadar integrasi perangkat, MNK merancang bangun platform software mandiri untuk menjawab tantangan operasional spesifik.'}
          </p>
        </div>

        {/* Product Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {PRODUCTS_LIST.map((prod) => (
            <button
              key={prod.id}
              onClick={() => setActiveProductId(prod.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                activeProductId === prod.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-glow-sm scale-105'
                  : 'bg-[#0B1F3A]/70 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {prod.name}
            </button>
          ))}
        </div>

        {/* Active Product Detailed Card */}
        <div className="glass-card rounded-2xl border border-cyan-500/30 p-6 sm:p-10 mb-16 shadow-card-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Product Screenshot / Interface Mockup */}
            <div className="lg:col-span-6 relative group">
              <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-xl">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className="w-full h-[320px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Overlay Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-md text-[10px] font-mono font-bold bg-slate-950/85 text-cyan-300 border border-cyan-500/40">
                  {activeProduct.category}
                </span>
              </div>
            </div>

            {/* Right: Product Features & Metrics */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  {activeProduct.tagline}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {activeProduct.name}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {activeProduct.description[lang]}
              </p>

              {/* 3 Key Capabilities */}
              <div className="space-y-3 pt-2">
                {activeProduct.capabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                    <div className="text-xs font-bold text-cyan-300 mb-1 flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-cyan-400 flex-shrink-0" />
                      <span>{cap.title[lang]}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 font-light leading-relaxed pl-5">
                      {cap.desc[lang]}
                    </div>
                  </div>
                ))}
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                {Object.entries(activeProduct.liveMetrics).map(([key, val], mIdx) => (
                  <div key={mIdx} className="p-2.5 rounded-lg bg-[#0B1F3A]/70 border border-slate-800 text-center">
                    <div className="text-xs font-bold font-mono text-cyan-300">{val}</div>
                    <div className="text-[9px] font-mono text-slate-400 uppercase mt-0.5 truncate">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold shadow-glow-sm hover:shadow-glow-md transition-all flex items-center space-x-2"
                >
                  <span>{lang === 'en' ? `Request ${activeProduct.name} Deployment Plan` : `Pelajari Implementasi ${activeProduct.name}`}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hands-On Interactive Simulator Section */}
        <div className="mt-8">
          <div className="text-center mb-6">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              {lang === 'en' ? 'Interactive Hands-On Demonstration' : 'Uji Coba Interaktif Langsung'}
            </span>
          </div>
          <LiveSimulator lang={lang} />
        </div>
      </div>
    </section>
  );
};
