import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  RefreshCw, 
  PhoneCall, 
  MessageSquare, 
  ExternalLink,
  ChevronRight,
  Calculator,
  ShieldAlert,
  Cpu,
  Anchor,
  Headphones
} from 'lucide-react';
import { queryMaudyAi, type ChatMessage, type AiAction } from '../data/aiKnowledge';

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEstimator?: () => void;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({ 
  isOpen, 
  onClose,
  onOpenEstimator
}) => {
  const [activeTab, setActiveTab] = useState<'ai' | 'quickDesk'>('ai');
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'assistant',
      text: 'Halo! Selamat datang di portal resmi **PT Maudy Network Nusantara**.\n\nSaya adalah **Maudy AI Virtual Assistant**. Saya dapat membantu Anda dengan info teknis seputar **konektivitas satelit maritim VSAT**, **kamera AI CCTV XTUR**, **keamanan siber IMO**, atau **estimasi biaya implementasi B2B**.\n\nApa yang ingin Anda ketahui hari ini?',
      timestamp: 'Baru saja',
      actions: [
        {
          label: '📊 Buka Kalkulator Estimasi Biaya',
          type: 'scroll_estimator'
        },
        {
          label: '💬 Chat WhatsApp Tim Teknis',
          type: 'whatsapp',
          payload: 'Halo PT Maudy Network Nusantara, saya ingin berkonsultasi mengenai kebutuhan infrastruktur perusahaan.'
        }
      ]
    }
  ]);

  const [suggestions, setSuggestions] = useState<string[]>([
    'Apa keunggulan XTUR AI CCTV?',
    'Solusi satelit VSAT untuk kapal laut',
    'Berapa estimasi biaya implementasi?',
    'Hubungi tim darurat NOC 24/7'
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen, messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isTyping) return;

    const userMsgId = `user-${Date.now()}`;
    const newMessages: ChatMessage[] = [
      ...messages,
      {
        id: userMsgId,
        sender: 'user',
        text: query,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];

    setMessages(newMessages);
    setInputMessage('');
    setIsTyping(true);

    // Realistic AI thinking delay (400ms - 700ms)
    setTimeout(() => {
      const response = queryMaudyAi(query);
      const assistantMsgId = `ai-${Date.now()}`;

      setMessages((prev) => [
        ...prev,
        {
          id: assistantMsgId,
          sender: 'assistant',
          text: response.reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          actions: response.actions
        }
      ]);
      setSuggestions(response.suggestions || []);
      setIsTyping(false);
    }, 550);
  };

  const handleActionClick = (action: AiAction) => {
    if (action.type === 'whatsapp') {
      const text = encodeURIComponent(action.payload || 'Halo MNK, saya ingin konsultasi kebutuhan infrastruktur.');
      window.open(`https://wa.me/6285727487507?text=${text}`, '_blank');
    } else if (action.type === 'scroll_estimator') {
      if (onOpenEstimator) {
        onOpenEstimator();
      } else {
        const estimatorEl = document.getElementById('estimator') || document.querySelector('[data-section="estimator"]');
        if (estimatorEl) {
          estimatorEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
      onClose();
    } else if (action.type === 'scroll_contact') {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
      onClose();
    } else if (action.type === 'call') {
      window.location.href = `tel:${action.payload || '+6285727487507'}`;
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `init-${Date.now()}`,
        sender: 'assistant',
        text: 'Obrolan telah direset. Ada yang bisa **Maudy AI** bantu jelaskan seputar produk, layanan maritim, atau CCTV XTUR?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actions: [
          {
            label: '📊 Buka Kalkulator Estimasi',
            type: 'scroll_estimator'
          }
        ]
      }
    ]);
    setSuggestions([
      'Apa keunggulan XTUR AI CCTV?',
      'Solusi satelit VSAT untuk kapal laut',
      'Berapa estimasi biaya implementasi?',
      'Hubungi tim darurat NOC 24/7'
    ]);
  };

  const openWhatsAppDirect = (msg: string) => {
    window.open(`https://wa.me/6285727487507?text=${encodeURIComponent(msg)}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="w-[360px] sm:w-[420px] max-w-[calc(100vw-24px)] rounded-3xl bg-[#0B0F19]/95 backdrop-blur-2xl border border-white/[0.12] shadow-2xl overflow-hidden mb-2 animate-in fade-in slide-in-from-bottom-5 duration-300 flex flex-col z-50 text-white">
      
      {/* Header Bar with Live AI Status & Tab Bar */}
      <div className="p-3.5 bg-gradient-to-b from-[#161B2B] to-[#0F1320] border-b border-white/[0.08] relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="relative">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#0071E3] to-[#2997FF] p-0.5 shadow-lg flex items-center justify-center">
                <div className="w-full h-full bg-[#0B0F19] rounded-[14px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#2997FF] animate-pulse" />
                </div>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0B0F19]"></span>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <h4 className="text-xs font-bold tracking-tight text-white">Maudy AI Virtual Desk</h4>
                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#0071E3]/20 text-[#2997FF] border border-[#2997FF]/30 font-mono">v2.4</span>
              </div>
              <p className="text-[10px] text-white/60">PT Maudy Network Nusantara • Ready</p>
            </div>
          </div>

          <div className="flex items-center space-x-1">
            {activeTab === 'ai' && (
              <button
                onClick={handleResetChat}
                title="Reset Percakapan"
                className="p-1.5 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Tutup Panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex p-1 mt-2.5 rounded-xl bg-black/30 border border-white/[0.06] text-[11px]">
          <button
            onClick={() => setActiveTab('ai')}
            className={`flex-1 py-1.5 px-2 rounded-lg font-medium transition-all flex items-center justify-center space-x-1.5 ${
              activeTab === 'ai'
                ? 'bg-[#0071E3] text-white shadow-md'
                : 'text-white/60 hover:text-white'
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            <span>Tanya AI Cerdas</span>
          </button>
          <button
            onClick={() => setActiveTab('quickDesk')}
            className={`flex-1 py-1.5 px-2 rounded-lg font-medium transition-all flex items-center justify-center space-x-1.5 ${
              activeTab === 'quickDesk'
                ? 'bg-[#0071E3] text-white shadow-md'
                : 'text-white/60 hover:text-white'
            }`}
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>NOC & WhatsApp</span>
          </button>
        </div>
      </div>

      {/* TAB 1: AI CHAT ASSISTANT */}
      {activeTab === 'ai' && (
        <>
          <div className="p-3.5 space-y-3.5 max-h-[380px] min-h-[290px] overflow-y-auto text-xs bg-[#07090E]/60">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className="flex items-start space-x-2 max-w-[88%]">
                  {msg.sender === 'assistant' && (
                    <div className="w-6 h-6 rounded-full bg-[#0071E3]/20 border border-[#2997FF]/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#2997FF]">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`rounded-2xl p-3 shadow-md whitespace-pre-wrap leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-[#0071E3] to-[#2997FF] text-white rounded-tr-none'
                        : 'bg-[#121626]/90 border border-white/[0.08] text-white/90 rounded-tl-none'
                    }`}
                  >
                    {/* Render bold and bullet points nicely */}
                    {msg.text.split('\n').map((line, idx) => {
                      if (line.startsWith('• ') || line.startsWith('- ')) {
                        return (
                          <div key={idx} className="flex items-start space-x-1.5 my-1">
                            <span className="text-[#2997FF]">•</span>
                            <span>{line.replace(/^[•-]\s*/, '')}</span>
                          </div>
                        );
                      }
                      if (line.includes('**')) {
                        const parts = line.split(/\*\*(.*?)\*\*/g);
                        return (
                          <p key={idx} className="my-0.5">
                            {parts.map((p, i) => (i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{p}</strong> : p))}
                          </p>
                        );
                      }
                      return <p key={idx} className="min-h-[1.1em] my-0.5">{line}</p>;
                    })}

                    {/* Action buttons embedded in message */}
                    {msg.actions && msg.actions.length > 0 && (
                      <div className="mt-2.5 pt-2 border-t border-white/[0.08] flex flex-col space-y-1.5">
                        {msg.actions.map((act, aIdx) => (
                          <button
                            key={aIdx}
                            onClick={() => handleActionClick(act)}
                            className="w-full text-left px-2.5 py-1.5 rounded-xl bg-white/[0.06] hover:bg-[#0071E3]/30 border border-white/[0.08] hover:border-[#2997FF]/50 text-[#2997FF] font-medium text-[11px] transition-all flex items-center justify-between group"
                          >
                            <span>{act.label}</span>
                            <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-white">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>

                <span className="text-[9px] text-white/40 mt-1 px-8">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center space-x-2 max-w-[80%]">
                <div className="w-6 h-6 rounded-full bg-[#0071E3]/20 border border-[#2997FF]/30 flex items-center justify-center flex-shrink-0 text-[#2997FF]">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-[#121626] border border-white/[0.08] rounded-2xl rounded-tl-none p-3 text-white/70 flex items-center space-x-1.5">
                  <span className="text-[11px]">Maudy AI sedang menganalisis...</span>
                  <div className="flex space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2997FF] animate-bounce"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2997FF] animate-bounce [animation-delay:0.15s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2997FF] animate-bounce [animation-delay:0.3s]"></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          {suggestions.length > 0 && !isTyping && (
            <div className="px-3 pt-2 pb-1 flex flex-wrap gap-1.5 bg-[#0B0F19]/90 border-t border-white/[0.06]">
              {suggestions.map((sug, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => handleSendMessage(sug)}
                  className="px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-[#0071E3]/20 border border-white/[0.08] hover:border-[#2997FF]/40 text-white/80 hover:text-white text-[10px] transition-all"
                >
                  💡 {sug}
                </button>
              ))}
            </div>
          )}

          {/* Input Bar */}
          <div className="p-3 bg-[#0F1320] border-t border-white/[0.08] flex items-center space-x-2">
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendMessage();
              }}
              placeholder="Tanya harga, satelit kapal, CCTV XTUR..."
              disabled={isTyping}
              className="flex-1 px-3 py-2 text-xs rounded-xl bg-black/40 border border-white/[0.1] text-white placeholder-white/40 focus:outline-none focus:border-[#2997FF] focus:ring-1 focus:ring-[#2997FF] transition-all disabled:opacity-50"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim() || isTyping}
              aria-label="Kirim Pesan"
              className="p-2 rounded-xl bg-[#0071E3] hover:bg-[#2997FF] text-white disabled:opacity-30 transition-all flex items-center justify-center flex-shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </>
      )}

      {/* TAB 2: DIRECT QUICK CONSULTATION DESK */}
      {activeTab === 'quickDesk' && (
        <div className="p-4 space-y-2.5 max-h-[380px] overflow-y-auto text-xs bg-[#07090E]/60">
          <p className="text-[11px] text-white/60 font-medium pb-1">
            Hubungi langsung teknisi berwenang dan tim representatif resmi MNK via WhatsApp atau Telepon:
          </p>

          <button
            onClick={() => openWhatsAppDirect('Halo MNK, saya ingin konsultasi mengenai implementasi sistem CCTV cerdas XTUR AI Vision Surveillance untuk fasilitas kami.')}
            className="w-full p-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-[#2997FF]/50 text-left transition-all flex items-center justify-between group"
          >
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-xl bg-[#0071E3]/20 text-[#2997FF]">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <div className="font-semibold text-white group-hover:text-[#2997FF] transition-colors">
                  XTUR AI Vision Surveillance
                </div>
                <div className="text-[10px] text-white/60">Konsultasi ANPR & Kamera AI Edge</div>
              </div>
            </div>
            <Send className="w-3.5 h-3.5 text-white/40 group-hover:text-[#2997FF] transition-colors" />
          </button>

          <button
            onClick={() => openWhatsAppDirect('Halo MNK, kami memerlukan solusi jaringan satelit maritim VSAT dan proteksi siber kapal Aegis Suite untuk armada kapal kami.')}
            className="w-full p-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-[#2997FF]/50 text-left transition-all flex items-center justify-between group"
          >
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-xl bg-[#0071E3]/20 text-[#2997FF]">
                <Anchor className="w-4 h-4" />
              </div>
              <div>
                <div className="font-semibold text-white group-hover:text-[#2997FF] transition-colors">
                  Aegis Maritime & Satelit Kapal
                </div>
                <div className="text-[10px] text-white/60">VSAT QoS, Starlink & Zero-Trust IMO</div>
              </div>
            </div>
            <Send className="w-3.5 h-3.5 text-white/40 group-hover:text-[#2997FF] transition-colors" />
          </button>

          <button
            onClick={() => openWhatsAppDirect('URGENT: Kami memerlukan eskalasi darurat tim NOC Maudy Network Komunikasi untuk kendala jaringan operasional.')}
            className="w-full p-3 rounded-2xl border border-rose-500/30 bg-rose-500/10 hover:bg-rose-500/15 text-left transition-all flex items-center justify-between group"
          >
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-xl bg-rose-500 text-white">
                <ShieldAlert className="w-4 h-4 animate-pulse" />
              </div>
              <div>
                <div className="font-semibold text-rose-400">
                  Incident Response NOC Darurat
                </div>
                <div className="text-[10px] text-white/60">Eskalasi kendala kritis jaringan 24/7</div>
              </div>
            </div>
            <Send className="w-3.5 h-3.5 text-rose-400" />
          </button>

          <button
            onClick={() => openWhatsAppDirect('Halo MNK, saya ingin konsultasi umum terkait pengadaan infrastruktur IT dan proposal B2B.')}
            className="w-full p-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-emerald-400/50 text-left transition-all flex items-center justify-between group"
          >
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                <Headphones className="w-4 h-4" />
              </div>
              <div>
                <div className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  Konsultasi Umum & Pengadaan
                </div>
                <div className="text-[10px] text-white/60">Tanya jawab proposal proyek & B2B</div>
              </div>
            </div>
            <Send className="w-3.5 h-3.5 text-white/40 group-hover:text-emerald-400 transition-colors" />
          </button>

          {/* Footer Call Link */}
          <div className="p-3 bg-white/[0.02] rounded-2xl border border-white/[0.08] flex items-center justify-between text-[11px] mt-2">
            <span className="text-white/60">Panggilan Darurat NOC:</span>
            <a
              href="tel:+6285727487507"
              className="text-[#2997FF] font-semibold hover:underline flex items-center"
            >
              <PhoneCall className="w-3 h-3 mr-1" />
              +62 857-2748-7507
            </a>
          </div>
        </div>
      )}

      {/* Footer Branding */}
      <div className="px-3.5 py-2 bg-[#090C15] border-t border-white/[0.06] flex items-center justify-between text-[10px] text-white/50">
        <span>Didukung Basis Pengetahuan Resmi PT MNK</span>
        <span className="flex items-center">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1"></span>
          24/7 Engine
        </span>
      </div>
    </div>
  );
};
