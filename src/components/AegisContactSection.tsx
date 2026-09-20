import React, { useState } from 'react';
import { 
  Send, Phone, Mail, MessageSquare, CheckCircle2, 
  Sparkles, Building2, User, Briefcase, FileText, ChevronRight, Globe
} from 'lucide-react';
import { PRODUCTS, INDUSTRIES } from '../data/aegisData';

interface Props {
  prefilledProduct?: string;
}

export const AegisContactSection: React.FC<Props> = ({ prefilledProduct }) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="kontak" className="relative py-28 bg-[#000000] border-t border-white/[0.06] overflow-hidden text-left">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#86868B] text-xs font-mono">
            <span>KONSULTASI & JADWALKAN DEMO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight font-sans">
            Mulai Diskusi Bersama Tim Kami.
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] leading-relaxed font-sans">
            Diskusikan kebutuhan otomasi, audit dokumen, kedaulatan data, atau arsitektur Private AI organisasi Anda secara langsung dengan solusi yang dipersonalisasi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-5">
            <div className="apple-card p-6 sm:p-7 rounded-3xl bg-[#0F0F12]/80 border border-white/[0.08] space-y-4">
              <h3 className="text-xl font-semibold text-white font-sans">
                Saluran Resmi
              </h3>
              <p className="text-xs text-[#86868B] leading-relaxed font-sans">
                Hubungi kami untuk presentasi solusi, permintaan proposal teknis, atau penjadwalan Proof of Concept (PoC) secara aman.
              </p>

              <div className="space-y-2.5 pt-2">
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/6281280000000" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.06] transition-all flex items-center space-x-3.5 text-white group"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-950/60 border border-emerald-800/30 text-emerald-400 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#86868B] uppercase">WhatsApp Enterprise</div>
                    <div className="text-xs font-semibold text-emerald-400 font-mono">+62 812-8000-xxxx</div>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href="mailto:contact@maudynetwork.com" 
                  className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.06] transition-all flex items-center space-x-3.5 text-white group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#0071E3]/20 border border-[#0071E3]/30 text-[#2997FF] flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#86868B] uppercase">Email Korporat</div>
                    <div className="text-xs font-semibold text-[#F5F5F7] font-mono">contact@maudynetwork.com</div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.06] transition-all flex items-center space-x-3.5 text-white group"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-950/60 border border-blue-800/30 text-blue-400 flex items-center justify-center">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.4 9.74V9.92H5.06v8.58h2.8z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#86868B] uppercase">LinkedIn Korporat</div>
                    <div className="text-xs font-semibold text-[#F5F5F7] font-mono">Maudy Network Komunikasi</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="apple-card p-5 rounded-3xl bg-[#0F0F12]/80 border border-white/[0.08] space-y-2">
              <div className="text-xs font-sans font-semibold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2997FF]" /> Uji Coba Proof of Concept (PoC)
              </div>
              <p className="text-xs text-[#86868B] leading-relaxed font-sans">
                Kami menyediakan program demo interaktif dan uji coba terbatas menggunakan sampel dokumen atau telemetri organisasi Anda dalam perimeter yang terisolasi.
              </p>
            </div>
          </div>

          {/* Right Column: Request Demo Form */}
          <div className="lg:col-span-7">
            <div className="apple-card p-6 sm:p-8 rounded-3xl bg-[#0F0F12]/80 border border-white/[0.08] shadow-2xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-[#0071E3]/20 border border-[#0071E3]/40 text-[#2997FF] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white font-sans">
                    Permintaan Demo Diterima
                  </h3>
                  <p className="text-xs text-[#86868B] max-w-md mx-auto leading-relaxed font-sans">
                    Terima kasih, <strong>{formData.nama}</strong> ({formData.perusahaan}). Tim arsitek solusi Aegis Technology akan segera menghubungi Anda melalui email <strong>{formData.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="apple-pill-btn px-6 py-2 rounded-full bg-white/[0.06] text-white hover:bg-white/[0.1] text-xs font-mono"
                  >
                    Kirim Permintaan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-white/[0.06] pb-3 mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-white font-sans">Formulir Jadwalkan Demo</h3>
                      <p className="text-xs text-[#86868B] font-sans">Data Anda terjaga dalam kerahasiaan penuh.</p>
                    </div>
                    <span className="text-[10px] font-mono text-[#2997FF] bg-[#0071E3]/15 px-2.5 py-0.5 rounded-full border border-[#0071E3]/30">
                      Enterprise
                    </span>
                  </div>

                  {/* Nama & Perusahaan */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-sans text-[#A1A1A6] block mb-1">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Budi Pratama"
                        value={formData.nama}
                        onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#141418] border border-white/[0.08] focus:border-[#2997FF] text-white text-xs placeholder-[#6E6E73] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-sans text-[#A1A1A6] block mb-1">
                        Perusahaan / Institusi *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: PT Samudera Perkasa Tbk"
                        value={formData.perusahaan}
                        onChange={(e) => setFormData({ ...formData, perusahaan: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#141418] border border-white/[0.08] focus:border-[#2997FF] text-white text-xs placeholder-[#6E6E73] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Jabatan & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-sans text-[#A1A1A6] block mb-1">
                        Jabatan / Posisi *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Head of IT / Director"
                        value={formData.jabatan}
                        onChange={(e) => setFormData({ ...formData, jabatan: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#141418] border border-white/[0.08] focus:border-[#2997FF] text-white text-xs placeholder-[#6E6E73] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-sans text-[#A1A1A6] block mb-1">
                        Email Korporat *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="nama@perusahaan.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#141418] border border-white/[0.08] focus:border-[#2997FF] text-white text-xs placeholder-[#6E6E73] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Telepon & Industri */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-sans text-[#A1A1A6] block mb-1">
                        Nomor Telepon / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0812-xxxx-xxxx"
                        value={formData.telepon}
                        onChange={(e) => setFormData({ ...formData, telepon: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#141418] border border-white/[0.08] focus:border-[#2997FF] text-white text-xs placeholder-[#6E6E73] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-sans text-[#A1A1A6] block mb-1">
                        Sektor Industri *
                      </label>
                      <select
                        value={formData.industri}
                        onChange={(e) => setFormData({ ...formData, industri: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#141418] border border-white/[0.08] focus:border-[#2997FF] text-white text-xs focus:outline-none transition-colors"
                      >
                        {INDUSTRIES.map((ind) => (
                          <option key={ind.id} value={ind.name} className="bg-[#0C0C0F] text-white">
                            {ind.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Solusi Yang Diminati */}
                  <div>
                    <label className="text-[11px] font-sans text-[#A1A1A6] block mb-1">
                      Solusi AI Yang Diminati *
                    </label>
                    <select
                      value={formData.solusi}
                      onChange={(e) => setFormData({ ...formData, solusi: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#141418] border border-white/[0.08] focus:border-[#2997FF] text-white text-xs focus:outline-none transition-colors"
                    >
                      {PRODUCTS.map((prod) => (
                        <option key={prod.id} value={prod.name} className="bg-[#0C0C0F] text-white">
                          {prod.name} — {prod.tagline}
                        </option>
                      ))}
                      <option value="Konsultasi Arsitektur Menyeluruh" className="bg-[#0C0C0F] text-white">
                        Konsultasi Arsitektur Menyeluruh (Multi-Solusi)
                      </option>
                    </select>
                  </div>

                  {/* Pesan */}
                  <div>
                    <label className="text-[11px] font-sans text-[#A1A1A6] block mb-1">
                      Catatan Singkat Kebutuhan (Opsional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Jelaskan secara singkat tantangan bisnis yang ingin Anda diskusikan..."
                      value={formData.pesan}
                      onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#141418] border border-white/[0.08] focus:border-[#2997FF] text-white text-xs placeholder-[#6E6E73] focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="apple-pill-btn w-full py-3.5 px-6 bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-medium active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                    >
                      {isSubmitting ? (
                        <span>Mengirimkan Permintaan...</span>
                      ) : (
                        <span>Jadwalkan Demo Sekarang</span>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
