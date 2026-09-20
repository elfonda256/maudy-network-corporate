import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  ArrowUp, 
  X, 
  PhoneCall, 
  ShieldAlert, 
  Cpu, 
  Anchor, 
  Send, 
  Headphones 
} from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = (customMessage?: string) => {
    const defaultMsg = 'Halo Maudy Network Komunikasi, saya ingin berkonsultasi mengenai kebutuhan infrastruktur IT.';
    const text = encodeURIComponent(customMessage || defaultMsg);
    window.open(`https://wa.me/6285727487507?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      {/* Scroll to Top (Mandiri Style Orange Circle with Arrow) */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-11 h-11 rounded-full bg-[#FFB800] hover:bg-[#F59E0B] text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}

      {/* Floating Chat Box Popup (Enterprise NOC & B2B) */}
      {chatOpen && (
        <div className="w-[340px] sm:w-[380px] rounded-3xl bg-white/95 dark:bg-[#161617]/95 backdrop-blur-2xl border border-black/[0.08] dark:border-white/[0.12] shadow-2xl overflow-hidden mb-2 animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="p-4 bg-[#1D1D1F] text-white flex items-center justify-between relative overflow-hidden">
            <div className="flex items-center space-x-3 relative z-10">
              <div className="w-10 h-10 rounded-full bg-white/10 p-1 border border-white/20 flex items-center justify-center flex-shrink-0">
                <img src="/logo-mnk.png" alt="MNK" className="h-6 w-auto object-contain" />
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-tight">MNK Direct Enterprise Desk</h4>
                <div className="flex items-center text-[10px] text-white/70">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
                  <span>24/7 NOC Engineers Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors relative z-10"
              aria-label="Tutup Chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Consultation Options */}
          <div className="p-4 space-y-2.5 max-h-[360px] overflow-y-auto text-xs">
            <p className="text-[11px] text-[#6E6E73] dark:text-[#A1A1A6] font-medium pb-1">
              Pilih topik untuk langsung terhubung dengan tim teknisi atau representatif resmi MNK:
            </p>

            <button
              onClick={() => openWhatsApp('Halo MNK, saya ingin konsultasi mengenai implementasi sistem CCTV cerdas XTUR AI Vision Surveillance untuk fasilitas kami.')}
              className="w-full p-3 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.04] hover:border-[#0071E3]/50 dark:hover:border-[#2997FF]/50 text-left transition-all flex items-center justify-between group"
            >
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-[#0071E3]/10 text-[#0071E3] dark:text-[#2997FF]">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-[#1D1D1F] dark:text-white group-hover:text-[#0071E3] dark:group-hover:text-[#2997FF] transition-colors">
                    XTUR AI Vision Surveillance
                  </div>
                  <div className="text-[10px] text-[#6E6E73] dark:text-[#A1A1A6]">Konsultasi ANPR & Kamera AI Edge</div>
                </div>
              </div>
              <Send className="w-3.5 h-3.5 text-[#6E6E73] group-hover:text-[#0071E3] transition-colors" />
            </button>

            <button
              onClick={() => openWhatsApp('Halo MNK, kami memerlukan solusi jaringan satelit maritim VSAT dan proteksi siber kapal Aegis Suite untuk armada kapal kami.')}
              className="w-full p-3 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.04] hover:border-[#0071E3]/50 dark:hover:border-[#2997FF]/50 text-left transition-all flex items-center justify-between group"
            >
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-[#0071E3]/10 text-[#0071E3] dark:text-[#2997FF]">
                  <Anchor className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-[#1D1D1F] dark:text-white group-hover:text-[#0071E3] dark:group-hover:text-[#2997FF] transition-colors">
                    Aegis Maritime & Satelit Kapal
                  </div>
                  <div className="text-[10px] text-[#6E6E73] dark:text-[#A1A1A6]">VSAT QoS, Starlink & Zero-Trust IMO</div>
                </div>
              </div>
              <Send className="w-3.5 h-3.5 text-[#6E6E73] group-hover:text-[#0071E3] transition-colors" />
            </button>

            <button
              onClick={() => openWhatsApp('URGENT: Kami memerlukan eskalasi darurat tim NOC Maudy Network Komunikasi untuk kendala jaringan operasional.')}
              className="w-full p-3 rounded-2xl border border-rose-500/20 bg-rose-500/5 hover:bg-rose-500/10 text-left transition-all flex items-center justify-between group"
            >
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-rose-500 text-white">
                  <ShieldAlert className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <div className="font-semibold text-rose-600 dark:text-rose-400">
                    Incident Response NOC Darurat
                  </div>
                  <div className="text-[10px] text-[#6E6E73] dark:text-[#A1A1A6]">Eskalasi kendala kritis jaringan 24/7</div>
                </div>
              </div>
              <Send className="w-3.5 h-3.5 text-rose-500" />
            </button>

            <button
              onClick={() => openWhatsApp()}
              className="w-full p-3 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.04] hover:border-emerald-500/50 text-left transition-all flex items-center justify-between group"
            >
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600">
                  <Headphones className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-[#1D1D1F] dark:text-white group-hover:text-emerald-600 transition-colors">
                    Konsultasi Umum & Pengadaan
                  </div>
                  <div className="text-[10px] text-[#6E6E73] dark:text-[#A1A1A6]">Tanya jawab proposal proyek & B2B</div>
                </div>
              </div>
              <Send className="w-3.5 h-3.5 text-[#6E6E73] group-hover:text-emerald-500 transition-colors" />
            </button>
          </div>

          {/* Footer Call Link */}
          <div className="p-3.5 bg-black/[0.02] dark:bg-white/[0.02] border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between text-[11px]">
            <span className="text-[#6E6E73] dark:text-[#A1A1A6]">Panggilan Langsung:</span>
            <a
              href="tel:+6285727487507"
              className="text-[#0071E3] dark:text-[#2997FF] font-semibold hover:underline flex items-center"
            >
              <PhoneCall className="w-3 h-3 mr-1" />
              +62 857-2748-7507
            </a>
          </div>
        </div>
      )}

      {/* Main WhatsApp Trigger Button */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        aria-label="Konsultasi WhatsApp 24/7"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"></span>
        {chatOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
        )}

        {/* Hover Tooltip */}
        {!chatOpen && (
          <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg pointer-events-none">
            Hubungi NOC / Konsultasi 24/7
          </span>
        )}
      </button>
    </div>
  );
};
