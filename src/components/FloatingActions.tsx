import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

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
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3">
      {/* Scroll to Top (Mandiri Style Orange Circle with Arrow) */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-12 h-12 rounded-full bg-[#FFB800] hover:bg-[#F59E0B] text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}

      {/* WhatsApp Direct Chat (Mandiri Style Green Floating Button) */}
      <a
        href="https://wa.me/6285727487507?text=Halo%20Maudy%20Network%20Komunikasi,%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20infrastruktur%20IT."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"></span>
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />

        {/* Hover Tooltip */}
        <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg pointer-events-none">
          Konsultasi WhatsApp 24/7
        </span>
      </a>
    </div>
  );
};
