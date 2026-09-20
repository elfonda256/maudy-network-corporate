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
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] text-[#0071E3] dark:text-[#2997FF] text-xs font-mono font-medium tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            <span>{lang === 'en' ? 'PROPRIETARY INNOVATIONS & DIRECT PORTALS' : 'PRODUK & TEKNOLOGI MANDIRI MNK'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1D1D1F] dark:text-white tracking-tight leading-[1.12]">
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
          <p className="mt-4 text-[#6E6E73] dark:text-[#A1A1A6] text-base leading-relaxed">
            {lang === 'en'
              ? 'Beyond network integration, MNK engineers autonomous AI vision systems, mission-critical maritime cyber-defense, and custom enterprise IoT platforms.'
              : 'Lebih dari sekadar integrasi perangkat, MNK merancang platform AI Vision mutakhir (XTUR), pertahanan siber kemaritiman (Aegis Maritime), dan IoT industri terpadu.'}
          </p>

          {/* Quick Direct Link Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-[#86868B] font-mono text-[11px] mr-1 flex items-center">
              <Share2 className="w-3 h-3 mr-1 text-[#0071E3]" />
              {lang === 'en' ? 'Direct Links:' : 'Tautan Cepat:'}
            </span>
            <button
              onClick={() => handleSelectProduct('xtur-ai')}
              className={`px-3 py-1 rounded-full text-[11px] font-mono font-medium transition-all border cursor-pointer ${
                activeProductId === 'xtur-ai'
                  ? 'bg-[#0071E3] border-[#0071E3] text-white shadow-xs'
                  : 'bg-black/[0.03] dark:bg-white/[0.06] border-black/[0.06] dark:border-white/[0.08] text-[#1D1D1F] dark:text-white hover:border-[#0071E3]'
              }`}
            >
              #xtur (XTUR AI Vision)
            </button>
            <button
              onClick={() => handleSelectProduct('aegis-maritime')}
              className={`px-3 py-1 rounded-full text-[11px] font-mono font-medium transition-all border cursor-pointer ${
                activeProductId === 'aegis-maritime'
                  ? 'bg-[#0071E3] border-[#0071E3] text-white shadow-xs'
                  : 'bg-black/[0.03] dark:bg-white/[0.06] border-black/[0.06] dark:border-white/[0.08] text-[#1D1D1F] dark:text-white hover:border-[#0071E3]'
              }`}
            >
              #aegis (Aegis Maritime)
            </button>
            <button
              onClick={() => handleSelectProduct('molinar-id')}
              className={`px-3 py-1 rounded-full text-[11px] font-mono font-medium transition-all border cursor-pointer ${
                activeProductId === 'molinar-id'
                  ? 'bg-[#0071E3] border-[#0071E3] text-white shadow-xs'
                  : 'bg-black/[0.03] dark:bg-white/[0.06] border-black/[0.06] dark:border-white/[0.08] text-[#1D1D1F] dark:text-white hover:border-[#0071E3]'
              }`}
            >
              #molinar-id (IoT)
            </button>
          </div>
        </div>

        {/* Product Selector Tabs (Apple Pill Style) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {PRODUCTS_LIST.map((prod) => {
            const isActive = activeProductId === prod.id;
            const isFlagship = prod.id === 'xtur-ai' || prod.id === 'aegis-maritime';

            return (
              <button
                key={prod.id}
                onClick={() => handleSelectProduct(prod.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-medium transition-all flex items-center space-x-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#0071E3] text-white shadow-xs scale-105'
                    : 'bg-black/[0.04] dark:bg-white/[0.06] text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white border border-black/[0.06] dark:border-white/[0.08]'
                }`}
              >
                {prod.id === 'xtur-ai' && <Eye className="w-3.5 h-3.5" />}
                {prod.id === 'aegis-maritime' && <Anchor className="w-3.5 h-3.5" />}
                {prod.id === 'molinar-id' && <Radio className="w-3.5 h-3.5" />}
                {prod.id === 'ap-portal-erp' && <Layers className="w-3.5 h-3.5" />}
                {prod.id === 'dss-irigasi' && <Activity className="w-3.5 h-3.5" />}
                {prod.id === 'pis-bot-noc' && <Zap className="w-3.5 h-3.5" />}
                
                <span>{prod.name}</span>

                {isFlagship && (
                  <span className={`ml-1 px-1.5 py-0.5 rounded-full text-[9px] font-mono uppercase ${
                    isActive ? 'bg-white/20 text-white' : 'bg-black/[0.06] dark:bg-white/[0.1] text-[#1D1D1F] dark:text-white'
                  }`}>
                    {prod.id === 'xtur-ai' ? 'AI' : 'FLAGSHIP'}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Product Detailed Card */}
        <div className="bg-white dark:bg-[#161617] rounded-3xl border border-black/[0.08] dark:border-white/[0.08] p-6 sm:p-10 mb-16 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Product Screenshot with Cyber Scanline & Mini Gallery */}
            <div className="lg:col-span-6 space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.08] bg-slate-950 shadow-sm group">
                <img
                  src={selectedGalleryImg || activeProduct.image}
                  alt={activeProduct.name}
                  className="w-full h-[340px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />

                {/* Animated Cyber Scanline */}
                <div className="cyber-scanline"></div>

                {/* Overlay Top Badges */}
                <div className="absolute top-3 left-3 flex items-center space-x-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-medium bg-black/85 text-white shadow-md backdrop-blur-sm border border-white/10 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
                    {activeProduct.category}
                  </span>
                </div>

                {/* Overlay Bottom Telemetry Pill */}
                <div className="absolute bottom-3 right-3">
                  <span className="px-2.5 py-1 rounded-full text-[9px] font-mono bg-black/85 text-white/90 border border-white/10 backdrop-blur-sm">
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
                    className={`relative flex-shrink-0 w-16 h-12 rounded-xl overflow-hidden border transition-all cursor-pointer ${
                      (!selectedGalleryImg || selectedGalleryImg === activeProduct.image)
                        ? 'border-[#0071E3] ring-2 ring-[#0071E3]/40 scale-105'
                        : 'border-black/[0.08] dark:border-white/[0.08] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={activeProduct.image} alt="Poster" className="w-full h-full object-cover" />
                  </button>
                  {(activeProduct as any).gallery.map((gImg: string, gIdx: number) => (
                    <button
                      key={gIdx}
                      onClick={() => setSelectedGalleryImg(gImg)}
                      className={`relative flex-shrink-0 w-16 h-12 rounded-xl overflow-hidden border transition-all cursor-pointer ${
                        selectedGalleryImg === gImg
                          ? 'border-[#0071E3] ring-2 ring-[#0071E3]/40 scale-105'
                          : 'border-black/[0.08] dark:border-white/[0.08] opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={gImg} alt={`View ${gIdx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                  <span className="text-[10px] font-mono text-[#86868B] pl-1 whitespace-nowrap">
                    {lang === 'en' ? 'Click thumb to preview' : 'Pilih thumbnail preview'}
                  </span>
                </div>
              )}
            </div>

            {/* Right: Product Features, Direct Link Action & Metrics */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-mono font-semibold text-[#0071E3] dark:text-[#2997FF] uppercase tracking-wider flex items-center">
                    <Sparkles className="w-3 h-3 mr-1 inline" />
                    {activeProduct.tagline}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F] dark:text-white mt-1">
                    {activeProduct.name}
                  </h3>
                </div>

                {/* Direct Link Share Button */}
                <button
                  onClick={() => handleCopyDirectLink(activeProduct.id)}
                  title={lang === 'en' ? 'Copy direct link to this product' : 'Salin tautan langsung produk ini'}
                  className="px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.1] border border-black/[0.06] dark:border-white/[0.08] text-xs font-mono font-medium text-[#1D1D1F] dark:text-white transition-all flex items-center space-x-1.5 flex-shrink-0 cursor-pointer"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">{lang === 'en' ? 'Copied!' : 'Tersalin!'}</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5 text-[#0071E3]" />
                      <span>{lang === 'en' ? 'Direct Link' : 'Bagi Link'}</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-sm text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed font-normal">
                {activeProduct.description[lang]}
              </p>

              {/* 3 Key Capabilities */}
              <div className="space-y-2.5 pt-1">
                {activeProduct.capabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="bg-black/[0.02] dark:bg-white/[0.04] p-3.5 rounded-2xl border border-black/[0.06] dark:border-white/[0.08]">
                    <div className="text-xs font-semibold text-[#1D1D1F] dark:text-white mb-1 flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#0071E3] dark:text-[#2997FF] flex-shrink-0" />
                      <span>{cap.title[lang]}</span>
                    </div>
                    <div className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] font-normal leading-relaxed pl-5">
                      {cap.desc[lang]}
                    </div>
                  </div>
                ))}
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                {Object.entries(activeProduct.liveMetrics).map(([key, val], mIdx) => (
                  <div key={mIdx} className="p-3 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] text-center">
                    <div className="text-xs font-mono font-bold text-[#0071E3] dark:text-[#2997FF]">{val}</div>
                    <div className="text-[9px] font-medium text-[#86868B] uppercase mt-0.5 truncate font-mono">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA and Deep Dive Inspect Action */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-medium shadow-none hover:shadow-sm transition-all flex items-center space-x-2 cursor-pointer"
                >
                  <span>{lang === 'en' ? `Request ${activeProduct.name} Deployment Plan` : `Pelajari Implementasi ${activeProduct.name}`}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setInspectModalOpen(true)}
                  className="px-5 py-3 rounded-full bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.1] text-[#1D1D1F] dark:text-white text-xs font-mono font-medium border border-black/[0.08] dark:border-white/[0.1] transition-all flex items-center space-x-2 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#2997FF]" />
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white/95 dark:bg-[#161617]/95 backdrop-blur-2xl border border-black/[0.08] dark:border-white/[0.12] rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8 text-[#1D1D1F] dark:text-white">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-black/[0.08] dark:border-white/[0.08] pb-4 mb-6">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#0071E3]/10 text-[#0071E3] dark:text-[#2997FF] border border-[#0071E3]/20">
                    {activeProduct.category}
                  </span>
                  <span className="text-xs font-mono text-[#6E6E73] dark:text-[#A1A1A6]">
                    DIRECT LINK: #{((activeProduct as any).hashAlias?.[0] || activeProduct.id)}
                  </span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-[#1D1D1F] dark:text-white mt-1">
                  {activeProduct.name} - Technical Deep-Dive
                </h3>
              </div>
              <button
                onClick={() => setInspectModalOpen(false)}
                className="p-2 rounded-full bg-black/[0.05] dark:bg-white/[0.1] text-[#6E6E73] hover:text-[#1D1D1F] dark:hover:text-white transition-colors"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Specialized by Product */}
            {activeProductId === 'xtur-ai' ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left: AI Inference Architecture */}
                  <div className="bg-black/[0.02] dark:bg-white/[0.04] p-5 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] space-y-3">
                    <h4 className="text-sm font-bold text-[#1D1D1F] dark:text-white flex items-center">
                      <Cpu className="w-4 h-4 mr-2 text-[#0071E3]" />
                      Neural Edge Processing Pipeline
                    </h4>
                    <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed">
                      XTUR leverages on-premise GPU acceleration (TensorRT & ONNX Runtime) to ingest 64+ RTSP H.264/H.265 video feeds simultaneously with no cloud dependency or bandwidth bottlenecks.
                    </p>
                    <div className="space-y-2 pt-1 text-xs font-mono">
                      <div className="flex justify-between p-2.5 rounded-xl bg-white dark:bg-black/40 border border-black/[0.06] dark:border-white/[0.08]">
                        <span className="text-[#6E6E73] dark:text-[#A1A1A6]">Inference Core:</span>
                        <span className="text-[#0071E3] dark:text-[#2997FF] font-semibold">NVIDIA TensorRT 8.6</span>
                      </div>
                      <div className="flex justify-between p-2.5 rounded-xl bg-white dark:bg-black/40 border border-black/[0.06] dark:border-white/[0.08]">
                        <span className="text-[#6E6E73] dark:text-[#A1A1A6]">Model Architecture:</span>
                        <span className="text-[#0071E3] dark:text-[#2997FF] font-semibold">YOLOv8x-Custom + DeepSORT</span>
                      </div>
                      <div className="flex justify-between p-2.5 rounded-xl bg-white dark:bg-black/40 border border-black/[0.06] dark:border-white/[0.08]">
                        <span className="text-[#6E6E73] dark:text-[#A1A1A6]">ANPR Regional Plates:</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">57 Indonesia Codes Supported</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Real-Time Telemetry Simulation */}
                  <div className="bg-[#161617] p-5 rounded-2xl border border-white/[0.1] text-white font-mono text-xs space-y-3 relative overflow-hidden">
                    <div className="flex items-center justify-between text-[11px] text-[#2997FF] border-b border-white/10 pb-2">
                      <span className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
                        LIVE_AI_STREAM_MONITOR
                      </span>
                      <span>FPS: 59.8 // 4.2ms</span>
                    </div>

                    <div className="space-y-1.5 pt-1 text-[11px]">
                      <div className="p-2 rounded-xl bg-black/50 text-emerald-300 border border-emerald-500/30">
                        [DETECTION] Plate B 1945 XYZ - ANPR Conf: 99.4% [AUTHORIZED]
                      </div>
                      <div className="p-2 rounded-xl bg-black/50 text-cyan-300 border border-cyan-500/30">
                        [HSE CHECK] Cam_04 Zone B: Hardhat DETECTED, Vest DETECTED [SAFE]
                      </div>
                      <div className="p-2 rounded-xl bg-black/50 text-amber-300 border border-amber-500/30">
                        [ZONE ALERT] Cam_12 Perimeter: Human motion inside restricted line
                      </div>
                      <div className="p-2 rounded-xl bg-black/50 text-purple-300 border border-purple-500/30">
                        [TELEMETRY] 64 RTSP Active - GPU VRAM 5.4GB / 12GB - Temp 52°C
                      </div>
                    </div>

                    <div className="pt-2 text-[10px] text-[#A1A1A6]">
                      Autonomous webhook alerts dispatched to Telegram, Discord, and Enterprise REST Endpoints in &lt; 200ms.
                    </div>
                  </div>
                </div>

                {/* Screenshots Gallery Matrix */}
                <div>
                  <h4 className="text-sm font-bold text-[#1D1D1F] dark:text-white mb-3">
                    Verified XTUR System Dashboards & Analytics
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { img: '/xtur/01-dashboard-overview.png', label: 'Dashboard Overview' },
                      { img: '/xtur/02-detection-logs.png', label: 'ANPR & Detection Logs' },
                      { img: '/xtur/03-cameras-monitor.png', label: '64-Cam Matrix' },
                      { img: '/xtur/06-engine-health.png', label: 'GPU Engine Telemetry' }
                    ].map((item, idx) => (
                      <div key={idx} className="rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02]">
                        <img src={item.img} alt={item.label} className="w-full h-24 object-cover" />
                        <div className="p-2 text-[10px] font-mono text-center text-[#6E6E73] dark:text-[#A1A1A6]">
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
                  <div className="bg-black/[0.02] dark:bg-white/[0.04] p-5 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] space-y-3">
                    <h4 className="text-sm font-bold text-[#1D1D1F] dark:text-white flex items-center">
                      <ShieldCheck className="w-4 h-4 mr-2 text-[#0071E3]" />
                      Zero-Trust Vessel Perimeter Architecture
                    </h4>
                    <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed">
                      Deployed across Pertamina International Shipping oceanic tankers. Strict OT vs. Crew network isolation engineered using Fortinet NSE 7 Enterprise Firewalls.
                    </p>
                    <div className="space-y-2 pt-1 text-xs font-mono">
                      <div className="flex justify-between p-2.5 rounded-xl bg-white dark:bg-black/40 border border-black/[0.06] dark:border-white/[0.08]">
                        <span className="text-[#6E6E73] dark:text-[#A1A1A6]">Security Standard:</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">IMO MSC.428(98) Compliant</span>
                      </div>
                      <div className="flex justify-between p-2.5 rounded-xl bg-white dark:bg-black/40 border border-black/[0.06] dark:border-white/[0.08]">
                        <span className="text-[#6E6E73] dark:text-[#A1A1A6]">UTM Firewall Engine:</span>
                        <span className="text-[#0071E3] dark:text-[#2997FF] font-semibold">Fortinet FortiGate NGFW</span>
                      </div>
                      <div className="flex justify-between p-2.5 rounded-xl bg-white dark:bg-black/40 border border-black/[0.06] dark:border-white/[0.08]">
                        <span className="text-[#6E6E73] dark:text-[#A1A1A6]">Orchestrated Fleets:</span>
                        <span className="text-[#0071E3] dark:text-[#2997FF] font-semibold">30+ Commercial Oil Tankers</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: VSAT QoS Allocation Chart */}
                  <div className="bg-[#161617] p-5 rounded-2xl border border-white/[0.1] text-white font-mono text-xs space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-[#2997FF] border-b border-white/10 pb-2">
                      <span>BANDWIDTH QoS SHAPING (512 Kbps VSAT)</span>
                      <span className="text-emerald-400">OPTIMIZED</span>
                    </div>

                    <div className="space-y-2.5 text-[11px]">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-white/90">ECDIS Navigation & AIS Matrix</span>
                          <span className="text-emerald-400 font-semibold">40% Guaranteed</span>
                        </div>
                        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                          <div className="bg-[#0071E3] h-full w-[40%]"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-white/90">Engine Telemetry & Fuel IoT</span>
                          <span className="text-[#2997FF] font-semibold">30% Guaranteed</span>
                        </div>
                        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                          <div className="bg-[#2997FF] h-full w-[30%]"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-white/90">Master & Official Fleet VoIP</span>
                          <span className="text-emerald-400 font-semibold">20% Guaranteed</span>
                        </div>
                        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                          <div className="bg-emerald-400 h-full w-[20%]"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-[#A1A1A6]">Crew Leisure & General Internet</span>
                          <span className="text-[#A1A1A6]">10% Low Priority</span>
                        </div>
                        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                          <div className="bg-white/20 h-full w-[10%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.08] shadow-sm">
                  <img src="/products/aegis-maritime.jpg" alt="Aegis Maritime Telemetry" className="w-full h-64 object-cover object-center" />
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-xs leading-relaxed text-[#6E6E73] dark:text-[#A1A1A6]">
                <p>{activeProduct.description[lang]}</p>
                <div className="rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.08] max-h-80">
                  <img src={activeProduct.image} alt={activeProduct.name} className="w-full h-full object-cover" />
                </div>
              </div>
            )}

            {/* Modal Footer Actions */}
            <div className="border-t border-black/[0.08] dark:border-white/[0.08] pt-5 mt-6 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => handleCopyDirectLink(activeProduct.id)}
                className="px-4 py-2 rounded-full bg-black/[0.04] dark:bg-white/[0.08] text-xs font-semibold text-[#1D1D1F] dark:text-white hover:bg-black/[0.08] transition-colors flex items-center space-x-1.5"
              >
                <Share2 className="w-3.5 h-3.5 text-[#0071E3]" />
                <span>{lang === 'en' ? 'Copy Direct Link' : 'Salin Tautan Langsung'}</span>
              </button>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setInspectModalOpen(false)}
                  className="px-4 py-2 rounded-full text-xs font-semibold text-[#6E6E73] hover:text-[#1D1D1F] dark:hover:text-white transition-colors"
                >
                  {lang === 'en' ? 'Close' : 'Tutup'}
                </button>
                <button
                  onClick={() => {
                    setInspectModalOpen(false);
                    onOpenConsultation();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-semibold shadow-sm transition-all flex items-center space-x-1.5"
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

