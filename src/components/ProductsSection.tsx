import React, { useState, useEffect } from 'react';
import { PRODUCTS_LIST } from '../data/companyData';
import { LiveSimulator } from './LiveSimulator';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Share2, 
  ExternalLink, 
  ShieldCheck, 
  Cpu, 
  Radio, 
  Eye, 
  Check, 
  X, 
  Layers, 
  Zap, 
  Anchor, 
  Activity
} from 'lucide-react';

interface ProductsSectionProps {
  lang: 'en' | 'id';
  onOpenConsultation: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  lang,
  onOpenConsultation,
}) => {
  const [activeProductId, setActiveProductId] = useState<string>('xtur-ai');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [inspectModalOpen, setInspectModalOpen] = useState<boolean>(false);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);

  // Auto-listen to URL hash for direct linking (e.g. /#xtur or /#aegis or /#products-xtur)
  useEffect(() => {
    const handleHashCheck = () => {
      const hash = window.location.hash.toLowerCase().replace('#', '');
      if (!hash) return;

      const matchedProd = PRODUCTS_LIST.find((p) => {
        if (p.id.toLowerCase() === hash) return true;
        // Check hashAlias
        const aliases = (p as any).hashAlias || [];
        return aliases.some((alias: string) => hash.includes(alias.toLowerCase()));
      });

      if (matchedProd) {
        setActiveProductId(matchedProd.id);
        const sectionElem = document.getElementById('products');
        if (sectionElem) {
          sectionElem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleHashCheck();
    window.addEventListener('hashchange', handleHashCheck);
    return () => window.removeEventListener('hashchange', handleHashCheck);
  }, []);

  const activeProduct =
    PRODUCTS_LIST.find((p) => p.id === activeProductId) || PRODUCTS_LIST[0];

  const handleCopyDirectLink = (prodId: string) => {
    const prod = PRODUCTS_LIST.find((p) => p.id === prodId) || activeProduct;
    const alias = (prod as any).hashAlias?.[0] || prod.id;
    const directUrl = `${window.location.origin}${window.location.pathname}#${alias}`;
    
    // Update hash in browser without jumping
    window.history.pushState(null, '', `#${alias}`);
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(directUrl).then(() => {
        setCopiedLink(alias);
        setTimeout(() => setCopiedLink(null), 3000);
      });
    } else {
      setCopiedLink(alias);
      setTimeout(() => setCopiedLink(null), 3000);
    }
  };

  const handleSelectProduct = (id: string) => {
    setActiveProductId(id);
    setSelectedGalleryImg(null);
    const prod = PRODUCTS_LIST.find((p) => p.id === id);
    if (prod) {
      const alias = (prod as any).hashAlias?.[0] || prod.id;
      window.history.replaceState(null, '', `#${alias}`);
    }
  };

  return (
    <section id="products" className="py-24 bg-slate-50/60 dark:bg-[#06101B]/70 backdrop-blur-md border-t border-slate-200/70 dark:border-slate-800/70 transition-colors relative overflow-hidden">
      {/* Top Animated Beam Sweep Divider */}
      <div className="beam-divider opacity-60 mb-12"></div>

      {/* Decorative High-Tech Background Watermark */}
      <div className="absolute top-12 right-8 text-[11px] font-tech text-slate-400/30 dark:text-cyan-500/10 select-none pointer-events-none tracking-widest hidden md:block">
        [PROPRIETARY R&D // AUTONOMOUS_AI_&_DEFENSE_SUITE]
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gradient-pill text-red-600 dark:text-red-400 text-xs font-tech font-bold tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-red-600 dark:text-cyan-400 animate-spin-slow" />
            <span>{lang === 'en' ? 'PROPRIETARY INNOVATIONS & DIRECT PORTALS' : 'PRODUK & TEKNOLOGI MANDIRI MNK'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002D62] dark:text-white tracking-tight">
            {lang === 'en' ? (
              <>
                Engineered In-House for <span className="text-gradient-brand">Absolute Control</span>
              </>
            ) : (
              <>
                Ekosistem Digital Mandiri untuk <span className="text-gradient-brand">Kendali Penuh</span>
              </>
            )}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'Beyond network integration, MNK engineers autonomous AI vision systems, mission-critical maritime cyber-defense, and custom enterprise IoT platforms.'
              : 'Lebih dari sekadar integrasi perangkat, MNK merancang platform AI Vision mutakhir (XTUR), pertahanan siber kemaritiman (Aegis Maritime), dan IoT industri terpadu.'}
          </p>

          {/* Quick Direct Link Badges */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-slate-500 dark:text-slate-400 font-tech text-[11px] mr-1 flex items-center">
              <Share2 className="w-3 h-3 mr-1 text-red-500" />
              {lang === 'en' ? 'Direct Links:' : 'Tautan Cepat:'}
            </span>
            <button
              onClick={() => handleSelectProduct('xtur-ai')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-tech font-bold transition-all border ${
                activeProductId === 'xtur-ai'
                  ? 'bg-red-500/10 border-red-500 text-red-600 dark:text-red-400'
                  : 'bg-white/60 dark:bg-slate-900/60 border-slate-300 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-red-400'
              }`}
            >
              #xtur (XTUR AI Vision)
            </button>
            <button
              onClick={() => handleSelectProduct('aegis-maritime')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-tech font-bold transition-all border ${
                activeProductId === 'aegis-maritime'
                  ? 'bg-cyan-500/10 border-cyan-500 text-cyan-700 dark:text-cyan-400'
                  : 'bg-white/60 dark:bg-slate-900/60 border-slate-300 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-cyan-400'
              }`}
            >
              #aegis (Aegis Maritime)
            </button>
            <button
              onClick={() => handleSelectProduct('molinar-id')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-tech font-bold transition-all border ${
                activeProductId === 'molinar-id'
                  ? 'bg-blue-500/10 border-blue-500 text-[#0050AE] dark:text-blue-400'
                  : 'bg-white/60 dark:bg-slate-900/60 border-slate-300 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-blue-400'
              }`}
            >
              #molinar-id (IoT)
            </button>
          </div>
        </div>

        {/* Product Selector Tabs (Mandiri Pill Style) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {PRODUCTS_LIST.map((prod) => {
            const isActive = activeProductId === prod.id;
            const isFlagship = prod.id === 'xtur-ai' || prod.id === 'aegis-maritime';

            return (
              <button
                key={prod.id}
                onClick={() => handleSelectProduct(prod.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  isActive
                    ? 'bg-gradient-brand text-white shadow-lg shadow-red-500/25 scale-105'
                    : 'bg-white/70 dark:bg-slate-900/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 hover:text-[#0050AE] dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:scale-102'
                }`}
              >
                {prod.id === 'xtur-ai' && <Eye className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-300' : 'text-red-500'}`} />}
                {prod.id === 'aegis-maritime' && <Anchor className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-300' : 'text-[#0050AE]'}`} />}
                {prod.id === 'molinar-id' && <Radio className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-300' : 'text-emerald-500'}`} />}
                {prod.id === 'ap-portal-erp' && <Layers className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-300' : 'text-purple-500'}`} />}
                {prod.id === 'dss-irigasi' && <Activity className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-300' : 'text-sky-500'}`} />}
                {prod.id === 'pis-bot-noc' && <Zap className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-300' : 'text-amber-500'}`} />}
                
                <span>{prod.name}</span>

                {isFlagship && (
                  <span className={`ml-1 px-1.5 py-0.2 rounded text-[9px] font-tech uppercase ${
                    isActive ? 'bg-white/20 text-white' : 'bg-red-500/10 text-red-600 dark:text-cyan-400'
                  }`}>
                    {prod.id === 'xtur-ai' ? 'NEW AI' : 'NEW'}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Product Detailed Card */}
        <div className="interactive-card bg-white/90 dark:bg-[#0B1F3A]/90 backdrop-blur-xl rounded-3xl border border-slate-200/90 dark:border-cyan-500/40 gradient-border-top p-6 sm:p-10 mb-16 shadow-2xl relative overflow-hidden">
          
          {/* Cyber Corner Crosshairs */}
          <div className="absolute top-3 left-3 text-[10px] font-tech text-slate-400/40 dark:text-cyan-400/30 select-none">
            + CORNER_SEC_A1
          </div>
          <div className="absolute top-3 right-3 text-[10px] font-tech text-slate-400/40 dark:text-cyan-400/30 select-none">
            + CORNER_SEC_B2
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Product Screenshot with Cyber Scanline & Mini Gallery */}
            <div className="lg:col-span-6 space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-950 shadow-2xl group">
                <img
                  src={selectedGalleryImg || activeProduct.image}
                  alt={activeProduct.name}
                  className="w-full h-[340px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />

                {/* Animated Cyber Scanline */}
                <div className="cyber-scanline"></div>

                {/* Overlay Top Badges */}
                <div className="absolute top-3 left-3 flex items-center space-x-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-tech font-bold bg-white/95 dark:bg-slate-950/90 text-red-600 dark:text-cyan-300 shadow-md backdrop-blur-sm border border-red-500/20 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-tech-ping"></span>
                    {activeProduct.category}
                  </span>
                </div>

                {/* Overlay Bottom Telemetry Pill */}
                <div className="absolute bottom-3 right-3">
                  <span className="px-2.5 py-1 rounded-md text-[9px] font-tech bg-slate-950/80 text-cyan-400 border border-cyan-500/30 backdrop-blur-sm">
                    {activeProductId === 'xtur-ai' && 'LATENCY: 4.2ms // 64 RTSP STREAMS'}
                    {activeProductId === 'aegis-maritime' && 'DEFENSE: FORTINET NSE 7 // 30+ TANKERS'}
                    {activeProductId === 'molinar-id' && 'TELEMETRY: 3.8M SENSOR PTS/DAY'}
                    {activeProductId === 'ap-portal-erp' && 'SLA ADHERENCE: 99.4%'}
                    {activeProductId === 'dss-irigasi' && 'COVERAGE: 90,000+ Ha'}
                    {activeProductId === 'pis-bot-noc' && 'RESPONSE: < 30 SEC AUTONOMOUS'}
                  </span>
                </div>
              </div>

              {/* Multi-Image Gallery Thumbnails (For XTUR and products with gallery) */}
              {(activeProduct as any).gallery && (activeProduct as any).gallery.length > 0 && (
                <div className="flex items-center space-x-2 overflow-x-auto pb-1 pt-1">
                  <button
                    onClick={() => setSelectedGalleryImg(activeProduct.image)}
                    className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border transition-all ${
                      (!selectedGalleryImg || selectedGalleryImg === activeProduct.image)
                        ? 'border-red-500 ring-2 ring-red-500/40 scale-105'
                        : 'border-slate-300 dark:border-slate-700 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={activeProduct.image} alt="Poster" className="w-full h-full object-cover" />
                  </button>
                  {(activeProduct as any).gallery.map((gImg: string, gIdx: number) => (
                    <button
                      key={gIdx}
                      onClick={() => setSelectedGalleryImg(gImg)}
                      className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border transition-all ${
                        selectedGalleryImg === gImg
                          ? 'border-cyan-500 ring-2 ring-cyan-500/40 scale-105'
                          : 'border-slate-300 dark:border-slate-700 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={gImg} alt={`View ${gIdx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                  <span className="text-[10px] font-tech text-slate-500 dark:text-slate-400 pl-1 whitespace-nowrap">
                    {lang === 'en' ? 'Click thumb to preview' : 'Pilih thumbnail preview'}
                  </span>
                </div>
              )}
            </div>

            {/* Right: Product Features, Direct Link Action & Metrics */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-tech font-bold text-red-600 dark:text-cyan-400 uppercase tracking-wider flex items-center">
                    <Sparkles className="w-3 h-3 mr-1 inline" />
                    {activeProduct.tagline}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#002D62] dark:text-white mt-1">
                    {activeProduct.name}
                  </h3>
                </div>

                {/* Direct Link Share Button */}
                <button
                  onClick={() => handleCopyDirectLink(activeProduct.id)}
                  title={lang === 'en' ? 'Copy direct link to this product' : 'Salin tautan langsung produk ini'}
                  className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 hover:bg-red-50 dark:hover:bg-red-950/40 border border-slate-300 dark:border-slate-700 hover:border-red-400 text-xs font-tech font-bold text-slate-700 dark:text-slate-300 transition-all flex items-center space-x-1 flex-shrink-0"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">{lang === 'en' ? 'Copied!' : 'Tersalin!'}</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5 text-red-500" />
                      <span>{lang === 'en' ? 'Direct Link' : 'Bagi Link'}</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {activeProduct.description[lang]}
              </p>

              {/* 3 Key Capabilities */}
              <div className="space-y-2.5 pt-1">
                {activeProduct.capabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="bg-slate-50/80 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:border-red-400/40 transition-colors">
                    <div className="text-xs font-bold text-[#002D62] dark:text-cyan-300 mb-1 flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-red-600 dark:text-cyan-400 flex-shrink-0" />
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
                  <div key={mIdx} className="p-2.5 rounded-xl bg-slate-50/80 dark:bg-[#081522]/80 border border-slate-200 dark:border-slate-800 text-center hover:scale-105 hover:border-red-500/40 transition-all">
                    <div className="text-xs font-tech font-bold text-gradient-brand">{val}</div>
                    <div className="text-[9px] font-medium text-slate-500 dark:text-slate-400 uppercase mt-0.5 truncate font-tech">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA and Deep Dive Inspect Action */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-2.5 rounded-full bg-gradient-brand hover:opacity-95 text-white text-xs font-bold shadow-md shadow-red-500/20 hover:scale-105 transition-all flex items-center space-x-2"
                >
                  <span>{lang === 'en' ? `Request ${activeProduct.name} Deployment Plan` : `Pelajari Implementasi ${activeProduct.name}`}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setInspectModalOpen(true)}
                  className="px-4 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700/90 text-slate-800 dark:text-cyan-300 text-xs font-tech font-bold border border-slate-300 dark:border-cyan-500/30 transition-all flex items-center space-x-1.5 hover:scale-105"
                >
                  <Eye className="w-3.5 h-3.5 text-red-500 dark:text-cyan-400" />
                  <span>{lang === 'en' ? 'Deep-Dive Architecture' : 'Detail Arsitektur & Live Telemetri'}</span>
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

      {/* Deep Dive Architecture & Live Inspector Modal */}
      {inspectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white dark:bg-[#071424] border border-slate-200 dark:border-cyan-500/40 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-tech font-bold bg-red-500/10 text-red-600 dark:text-cyan-400 border border-red-500/20">
                    {activeProduct.category}
                  </span>
                  <span className="text-xs font-tech text-slate-500 dark:text-slate-400">
                    DIRECT LINK: #{((activeProduct as any).hashAlias?.[0] || activeProduct.id)}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-[#002D62] dark:text-white mt-1">
                  {activeProduct.name} - Technical Deep-Dive
                </h3>
              </div>
              <button
                onClick={() => setInspectModalOpen(false)}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-red-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Specialized by Product */}
            {activeProductId === 'xtur-ai' ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left: AI Inference Architecture */}
                  <div className="bg-slate-50 dark:bg-[#0B1F3A]/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                    <h4 className="text-sm font-bold text-[#002D62] dark:text-cyan-300 flex items-center">
                      <Cpu className="w-4 h-4 mr-2 text-red-500" />
                      Neural Edge Processing Pipeline
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      XTUR leverages on-premise GPU acceleration (TensorRT & ONNX Runtime) to ingest 64+ RTSP H.264/H.265 video feeds simultaneously with no cloud dependency or bandwidth bottlenecks.
                    </p>
                    <div className="space-y-2 pt-1 text-xs font-tech">
                      <div className="flex justify-between p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <span className="text-slate-500">Inference Core:</span>
                        <span className="text-red-500 font-bold">NVIDIA TensorRT 8.6</span>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <span className="text-slate-500">Model Architecture:</span>
                        <span className="text-cyan-400 font-bold">YOLOv8x-Custom + DeepSORT</span>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <span className="text-slate-500">ANPR Regional Plates:</span>
                        <span className="text-emerald-400 font-bold">57 Indonesia Codes Supported</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Real-Time Telemetry Simulation */}
                  <div className="bg-slate-950 p-5 rounded-2xl border border-cyan-500/30 text-white font-tech text-xs space-y-3 relative overflow-hidden">
                    <div className="flex items-center justify-between text-[11px] text-cyan-400 border-b border-slate-800 pb-2">
                      <span className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-tech-ping"></span>
                        LIVE_AI_STREAM_MONITOR
                      </span>
                      <span>FPS: 59.8 // 4.2ms</span>
                    </div>

                    <div className="space-y-1.5 pt-1 text-[11px]">
                      <div className="p-1.5 rounded bg-slate-900/90 text-emerald-300 border border-emerald-500/30">
                        [DETECTION] Plate B 1945 XYZ - ANPR Conf: 99.4% [AUTHORIZED]
                      </div>
                      <div className="p-1.5 rounded bg-slate-900/90 text-cyan-300 border border-cyan-500/30">
                        [HSE CHECK] Cam_04 Zone B: Hardhat DETECTED, Vest DETECTED [SAFE]
                      </div>
                      <div className="p-1.5 rounded bg-slate-900/90 text-amber-300 border border-amber-500/30">
                        [ZONE ALERT] Cam_12 Perimeter: Human motion inside restricted line
                      </div>
                      <div className="p-1.5 rounded bg-slate-900/90 text-purple-300 border border-purple-500/30">
                        [TELEMETRY] 64 RTSP Active - GPU VRAM 5.4GB / 12GB - Temp 52°C
                      </div>
                    </div>

                    <div className="pt-2 text-[10px] text-slate-400">
                      Autonomous webhook alerts dispatched to Telegram, Discord, and Enterprise REST Endpoints in &lt; 200ms.
                    </div>
                  </div>
                </div>

                {/* Screenshots Gallery Matrix */}
                <div>
                  <h4 className="text-sm font-bold text-[#002D62] dark:text-white mb-3">
                    Verified XTUR System Dashboards & Analytics
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { img: '/xtur/01-dashboard-overview.png', label: 'Dashboard Overview' },
                      { img: '/xtur/02-detection-logs.png', label: 'ANPR & Detection Logs' },
                      { img: '/xtur/03-cameras-monitor.png', label: '64-Cam Matrix' },
                      { img: '/xtur/06-engine-health.png', label: 'GPU Engine Telemetry' }
                    ].map((item, idx) => (
                      <div key={idx} className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900">
                        <img src={item.img} alt={item.label} className="w-full h-24 object-cover" />
                        <div className="p-2 text-[10px] font-tech text-center text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-950">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : activeProductId === 'aegis-maritime' ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left: Vessel Defense Architecture */}
                  <div className="bg-slate-50 dark:bg-[#0B1F3A]/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                    <h4 className="text-sm font-bold text-[#002D62] dark:text-cyan-300 flex items-center">
                      <ShieldCheck className="w-4 h-4 mr-2 text-red-500" />
                      Zero-Trust Vessel Perimeter Architecture
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Deployed across Pertamina International Shipping oceanic tankers. Strict OT vs. Crew network isolation engineered using Fortinet NSE 7 Enterprise Firewalls.
                    </p>
                    <div className="space-y-2 pt-1 text-xs font-tech">
                      <div className="flex justify-between p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <span className="text-slate-500">Security Standard:</span>
                        <span className="text-emerald-400 font-bold">IMO MSC.428(98) Compliant</span>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <span className="text-slate-500">UTM Firewall Engine:</span>
                        <span className="text-red-500 font-bold">Fortinet FortiGate NGFW</span>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <span className="text-slate-500">Orchestrated Fleets:</span>
                        <span className="text-cyan-400 font-bold">30+ Commercial Oil Tankers</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: VSAT QoS Allocation Chart */}
                  <div className="bg-slate-950 p-5 rounded-2xl border border-cyan-500/30 text-white font-tech text-xs space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-cyan-400 border-b border-slate-800 pb-2">
                      <span>BANDWIDTH QoS SHAPING (512 Kbps VSAT)</span>
                      <span className="text-emerald-400">OPTIMIZED</span>
                    </div>

                    <div className="space-y-2 text-[11px]">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-cyan-300">ECDIS Navigation & AIS Matrix</span>
                          <span>40% Guaranteed</span>
                        </div>
                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-cyan-400 h-full w-[40%]"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-blue-300">Engine Telemetry & Fuel IoT</span>
                          <span>30% Guaranteed</span>
                        </div>
                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-blue-500 h-full w-[30%]"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-emerald-300">Master & Official Fleet VoIP</span>
                          <span>20% Guaranteed</span>
                        </div>
                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-emerald-400 h-full w-[20%]"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-slate-400">Crew Leisure & General Internet</span>
                          <span>10% Low Priority</span>
                        </div>
                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-slate-500 h-full w-[10%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
                  <img src="/products/aegis-maritime.jpg" alt="Aegis Maritime Telemetry" className="w-full h-64 object-cover object-center" />
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                <p>{activeProduct.description[lang]}</p>
                <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 max-h-80">
                  <img src={activeProduct.image} alt={activeProduct.name} className="w-full h-full object-cover" />
                </div>
              </div>
            )}

            {/* Modal Footer Actions */}
            <div className="border-t border-slate-200 dark:border-slate-800 pt-5 mt-6 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => handleCopyDirectLink(activeProduct.id)}
                className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-tech font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors flex items-center space-x-1.5"
              >
                <Share2 className="w-3.5 h-3.5 text-red-500" />
                <span>{lang === 'en' ? 'Copy Direct Link' : 'Salin Tautan Langsung'}</span>
              </button>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setInspectModalOpen(false)}
                  className="px-4 py-2 rounded-full text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                >
                  {lang === 'en' ? 'Close' : 'Tutup'}
                </button>
                <button
                  onClick={() => {
                    setInspectModalOpen(false);
                    onOpenConsultation();
                  }}
                  className="px-6 py-2 rounded-full bg-gradient-brand text-white text-xs font-bold shadow-md hover:scale-105 transition-all flex items-center space-x-1.5"
                >
                  <span>{lang === 'en' ? 'Consult Enterprise Implementation' : 'Konsultasikan Implementasi'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

