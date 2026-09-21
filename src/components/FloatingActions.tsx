import React, { useState, useEffect } from 'react';
import { 
  ArrowUp, 
  X, 
  Sparkles,
  Bot,
  MessageSquare
} from 'lucide-react';
import { AiAssistantModal } from './AiAssistantModal';

interface FloatingActionsProps {
  onOpenEstimator?: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenEstimator }) => {
  const [showScroll, setShowScroll] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [showPromptBadge, setShowPromptBadge] = useState(true);

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

      {/* AI Assistant Modal Window */}
      <AiAssistantModal 
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
        onOpenEstimator={onOpenEstimator}
      />

      {/* Main AI Floating Action Button with Animated Pill */}
      <div className="flex items-center space-x-2">
        {/* Floating Callout Badge (Auto hides when chat is open) */}
        {!chatOpen && showPromptBadge && (
          <div 
            onClick={() => setChatOpen(true)}
            className="cursor-pointer hidden sm:flex items-center space-x-2 px-3.5 py-2 rounded-2xl bg-[#0F1320]/90 border border-white/[0.12] text-white shadow-xl backdrop-blur-xl text-xs font-medium hover:border-[#2997FF]/50 transition-all hover:scale-105 group"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="text-white/90 group-hover:text-white flex items-center space-x-1.5">
              <span>Ada pertanyaan?</span>
              <strong className="text-[#2997FF] font-semibold flex items-center">
                <Sparkles className="w-3 h-3 mr-1 inline" />
                Tanya Maudy AI
              </strong>
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowPromptBadge(false);
              }}
              className="text-white/40 hover:text-white p-0.5 rounded-md ml-1"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Floating Action Trigger Button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          aria-label="Buka Asisten AI & Konsultasi 24/7"
          className={`relative group w-14 h-14 rounded-full text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${
            chatOpen 
              ? 'bg-[#1D1D1F] border border-white/20' 
              : 'bg-gradient-to-tr from-[#0071E3] via-[#1055B8] to-[#2997FF] shadow-[0_0_25px_rgba(0,113,227,0.45)]'
          }`}
        >
          {!chatOpen && (
            <span className="absolute -inset-1 rounded-full bg-[#0071E3] opacity-30 animate-ping pointer-events-none"></span>
          )}

          {chatOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <div className="relative flex items-center justify-center">
              <Bot className="w-7 h-7 text-white transition-transform group-hover:scale-110" />
              <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#0B0F19]"></span>
              </span>
            </div>
          )}

          {/* Hover Tooltip for Mobile & Desktop */}
          {!chatOpen && (
            <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-[#0B0F19] text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-xl border border-white/10 pointer-events-none">
              ✨ Maudy AI & NOC 24/7
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
