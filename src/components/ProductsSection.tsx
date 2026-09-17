import React, { useState } from 'react';
import { PRODUCTS_LIST } from '../data/companyData';
import { LiveSimulator } from './LiveSimulator';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

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
    <section id="products" className="py-24 bg-slate-50 dark:bg-[#081522] border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gradient-pill text-[#0050AE] dark:text-cyan-300 text-xs font-bold tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'PROPRIETARY INNOVATIONS' : 'PRODUK & TEKNOLOGI MANDIRI'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#002D62] dark:text-white tracking-tight">
            {lang === 'en' ? (
              <>
                Engineered In-House for <span className="text-gradient-ocean dark:text-gradient-creative">Absolute Control</span>
              </>
            ) : (
              <>
                Ekosistem Digital Mandiri untuk <span className="text-gradient-ocean dark:text-gradient-creative">Kendali Penuh</span>
              </>
            )}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {lang === 'en'
              ? 'Beyond integration, MNK engineers proprietary software platforms tailored to mission-critical operational challenges.'
              : 'Lebih dari sekadar integrasi perangkat, MNK merancang bangun platform software mandiri untuk menjawab tantangan operasional spesifik.'}
          </p>
        </div>

        {/* Product Selector Tabs (Mandiri Pill Style) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {PRODUCTS_LIST.map((prod) => (
            <button
              key={prod.id}
              onClick={() => setActiveProductId(prod.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeProductId === prod.id
                  ? 'bg-gradient-brand text-white shadow-md shadow-blue-500/20'
                  : 'bg-white dark:bg-[#0B1F3A]/70 text-slate-600 dark:text-slate-400 hover:text-[#0050AE] dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
            >
              {prod.name}
            </button>
          ))}
        </div>

        {/* Active Product Detailed Card */}
        <div className="bg-white dark:bg-[#0B1F3A]/90 rounded-3xl border border-slate-200 dark:border-cyan-500/30 gradient-border-top p-6 sm:p-10 mb-16 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Product Screenshot */}
            <div className="lg:col-span-6 relative group">
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-900 shadow-md">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className="w-full h-[320px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Overlay Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-white/95 dark:bg-slate-950/85 text-[#0050AE] dark:text-cyan-300 shadow">
                  {activeProduct.category}
                </span>
              </div>
            </div>

            {/* Right: Product Features & Metrics */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-xs font-bold text-[#0050AE] dark:text-cyan-400 uppercase tracking-wider">
                  {activeProduct.tagline}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#002D62] dark:text-white mt-1">
                  {activeProduct.name}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {activeProduct.description[lang]}
              </p>

              {/* 3 Key Capabilities */}
              <div className="space-y-2.5 pt-1">
                {activeProduct.capabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                    <div className="text-xs font-bold text-[#002D62] dark:text-cyan-300 mb-1 flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-[#0050AE] dark:text-cyan-400 flex-shrink-0" />
                      <span>{cap.title[lang]}</span>
                    </div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 font-normal leading-relaxed pl-5">
                      {cap.desc[lang]}
                    </div>
                  </div>
                ))}
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                {Object.entries(activeProduct.liveMetrics).map(([key, val], mIdx) => (
                  <div key={mIdx} className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#0B1F3A]/70 border border-slate-200 dark:border-slate-800 text-center">
                    <div className="text-xs font-bold text-gradient-ocean dark:text-gradient-creative">{val}</div>
                    <div className="text-[9px] font-medium text-slate-500 dark:text-slate-400 uppercase mt-0.5 truncate">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-2.5 rounded-full bg-gradient-brand hover:opacity-95 text-white text-xs font-bold shadow-md transition-all flex items-center space-x-2"
                >
                  <span>{lang === 'en' ? `Request ${activeProduct.name} Deployment Plan` : `Pelajari Implementasi ${activeProduct.name}`}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Live Simulator */}
        <div>
          <LiveSimulator lang={lang} />
        </div>
      </div>
    </section>
  );
};
