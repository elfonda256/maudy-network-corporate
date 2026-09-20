import React, { useState, useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { PRODUCTS, INDUSTRIES } from '../data/aegisData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  prefilledProduct?: string;
}

export const AegisContactModal: React.FC<Props> = ({ isOpen, onClose, prefilledProduct }) => {
  const [formData, setFormData] = useState({
    nama: '',
    perusahaan: '',
    jabatan: '',
    email: '',
    telepon: '',
    industri: 'Maritim & Pelayaran',
    solusi: prefilledProduct || 'AEGIS MARITIME',
    pesan: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledProduct) {
      setFormData(prev => ({ ...prev, solusi: prefilledProduct }));
    }
  }, [prefilledProduct]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/80 backdrop-blur-2xl animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#0F0F12] border border-white/[0.12] rounded-3xl shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#141418]/90 border-b border-white/[0.06] px-6 py-4 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white font-sans">Jadwalkan Demo Enterprise</h3>
            <span className="text-[10px] text-[#86868B] font-mono">Aegis Technology</span>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center text-[#86868B] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[85vh] overflow-y-auto">
          {submitted ? (
            <div className="py-10 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#0071E3]/20 text-[#2997FF] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white font-sans">Jadwal Demo Diterima</h3>
              <p className="text-xs text-[#86868B] leading-relaxed font-sans max-w-xs mx-auto">
                Terima kasih, <strong>{formData.nama}</strong>. Tim arsitek solusi Aegis akan menghubungi email <strong>{formData.email}</strong> dalam waktu singkat.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="apple-pill-btn mt-3 px-6 py-2 bg-white/[0.08] text-white hover:bg-white/[0.15] text-xs font-mono"
              >
                Selesai
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-sans text-[#A1A1A6] block mb-1">Nama Lengkap *</label>
                  <input
                    type="text"
                    required
                    placeholder="Nama Anda"
                    value={formData.nama}
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#18181E] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-[#2997FF]"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-sans text-[#A1A1A6] block mb-1">Perusahaan *</label>
                  <input
                    type="text"
                    required
                    placeholder="Nama PT / Instansi"
                    value={formData.perusahaan}
                    onChange={(e) => setFormData({ ...formData, perusahaan: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#18181E] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-[#2997FF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-sans text-[#A1A1A6] block mb-1">Jabatan *</label>
                  <input
                    type="text"
                    required
                    placeholder="Jabatan"
                    value={formData.jabatan}
                    onChange={(e) => setFormData({ ...formData, jabatan: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#18181E] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-[#2997FF]"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-sans text-[#A1A1A6] block mb-1">Email Korporat *</label>
                  <input
                    type="email"
                    required
                    placeholder="nama@perusahaan.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#18181E] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-[#2997FF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-sans text-[#A1A1A6] block mb-1">Nomor Telepon/WA *</label>
                  <input
                    type="tel"
                    required
                    placeholder="0812-xxxx-xxxx"
                    value={formData.telepon}
                    onChange={(e) => setFormData({ ...formData, telepon: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#18181E] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-[#2997FF]"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-sans text-[#A1A1A6] block mb-1">Sektor Industri *</label>
                  <select
                    value={formData.industri}
                    onChange={(e) => setFormData({ ...formData, industri: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#18181E] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-[#2997FF]"
                  >
                    {INDUSTRIES.map((ind) => (
                      <option key={ind.id} value={ind.name} className="bg-[#0F0F12] text-white">
                        {ind.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-sans text-[#A1A1A6] block mb-1">Solusi Yang Diminati *</label>
                <select
                  value={formData.solusi}
                  onChange={(e) => setFormData({ ...formData, solusi: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#18181E] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-[#2997FF]"
                >
                  {PRODUCTS.map((prod) => (
                    <option key={prod.id} value={prod.name} className="bg-[#0F0F12] text-white">
                      {prod.name} ({prod.tagline})
                    </option>
                  ))}
                  <option value="Konsultasi Arsitektur Menyeluruh" className="bg-[#0F0F12] text-white">
                    Konsultasi Arsitektur Menyeluruh (Multi-Solusi)
                  </option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="apple-pill-btn w-full py-3 px-4 bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-medium transition-all cursor-pointer shadow-sm"
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Permintaan Demo'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
