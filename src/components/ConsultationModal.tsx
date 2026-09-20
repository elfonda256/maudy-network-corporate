import React, { useState } from 'react';
import { X, Send, CheckCircle, ShieldCheck, PhoneCall, Building2 } from 'lucide-react';
import { useCms } from '../context/CmsContext';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'id';
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  if (!isOpen) return null;

  const { addInquiry } = useCms();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    scope: 'Marine Vessel VSAT & Fleet Telemetry',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addInquiry({
      name: formData.name,
      organization: formData.company,
      email: formData.email,
      phone: formData.phone,
      serviceScope: formData.scope,
      message: formData.notes,
    });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-2xl rounded-3xl border border-black/[0.08] dark:border-white/[0.12] shadow-2xl bg-white dark:bg-[#161617] my-8 animate-fadeIn overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-black/[0.08] dark:border-white/[0.08] flex items-center justify-between bg-black/[0.02] dark:bg-white/[0.02]">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-2xl bg-blue-500/10 text-[#0071E3] dark:text-[#2997FF] border border-blue-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-[#1D1D1F] dark:text-white tracking-tight">
                {lang === 'en' ? 'Enterprise Technical Consultation' : 'Permohonan Konsultasi Teknis'}
              </h3>
              <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6]">
                {lang === 'en'
                  ? 'Connect directly with Director Yahya Hidayatullah & Lead Engineering Team'
                  : 'Terhubung langsung dengan Direksi & Tim Ahli Jaringan MNK'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#6E6E73] hover:text-[#1D1D1F] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="p-8 text-center bg-emerald-50 dark:bg-emerald-950/30 rounded-3xl border border-emerald-200 dark:border-emerald-800/40">
              <CheckCircle className="w-12 h-12 text-[#34C759] mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-[#1D1D1F] dark:text-white mb-2">
                {lang === 'en' ? 'Consultation Request Sent' : 'Permintaan Berhasil Diterima'}
              </h4>
              <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] max-w-md mx-auto leading-relaxed mb-6">
                {lang === 'en'
                  ? 'Our Chief Network Architect will review your specifications and contact you shortly. You may also reach us directly via WhatsApp.'
                  : 'Spesifikasi proyek Anda sedang ditinjau oleh Arsitek Jaringan Utama kami. Anda juga dapat menghubungi langsung melalui WhatsApp.'}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://wa.me/6285727487507?text=Halo%20Maudy%20Network,%20saya%20sudah%20mengirim%20form%20konsultasi%20di%20website."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-medium flex items-center space-x-2 shadow-xs"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Chat WhatsApp (+62 857-2748-7507)</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full bg-black/[0.04] dark:bg-white/[0.08] text-[#1D1D1F] dark:text-white text-xs font-medium hover:bg-black/[0.08] dark:hover:bg-white/[0.12] cursor-pointer"
                >
                  {lang === 'en' ? 'Close Window' : 'Tutup Jendela'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#1D1D1F] dark:text-white mb-1.5">
                    {lang === 'en' ? 'Full Name *' : 'Nama Lengkap *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Hadi Prabowo"
                    className="w-full px-4 py-3 rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.1] dark:border-white/[0.15] text-[#1D1D1F] dark:text-white text-xs sm:text-sm focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 focus:outline-none transition-all placeholder:text-[#6E6E73]/60"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#1D1D1F] dark:text-white mb-1.5">
                    {lang === 'en' ? 'Company / Ministry *' : 'Perusahaan / Lembaga *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. PT Pertamina / Kementerian BUMN"
                    className="w-full px-4 py-3 rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.1] dark:border-white/[0.15] text-[#1D1D1F] dark:text-white text-xs sm:text-sm focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 focus:outline-none transition-all placeholder:text-[#6E6E73]/60"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#1D1D1F] dark:text-white mb-1.5">
                    {lang === 'en' ? 'Email Address *' : 'Alamat Email *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="director@pertamina.com"
                    className="w-full px-4 py-3 rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.1] dark:border-white/[0.15] text-[#1D1D1F] dark:text-white text-xs sm:text-sm focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 focus:outline-none transition-all placeholder:text-[#6E6E73]/60"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#1D1D1F] dark:text-white mb-1.5">
                    {lang === 'en' ? 'WhatsApp / Mobile *' : 'Nomor WhatsApp *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+62 857-xxxx-xxxx"
                    className="w-full px-4 py-3 rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.1] dark:border-white/[0.15] text-[#1D1D1F] dark:text-white text-xs sm:text-sm focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 focus:outline-none transition-all placeholder:text-[#6E6E73]/60"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#1D1D1F] dark:text-white mb-1.5">
                  {lang === 'en' ? 'Primary Scope of Interest' : 'Kategori Kebutuhan'}
                </label>
                <select
                  value={formData.scope}
                  onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.1] dark:border-white/[0.15] text-[#1D1D1F] dark:text-white text-xs sm:text-sm focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 focus:outline-none transition-all"
                >
                  <option>Marine Vessel VSAT & Fleet Telemetry</option>
                  <option>Enterprise Network Core Routing & Cabling</option>
                  <option>Fortinet NSE 7 Cyber Security Architecture</option>
                  <option>AI CCTV & Honeywell Physical Security</option>
                  <option>Molinar.id Smart IoT & Industrial Telemetry</option>
                  <option>Custom ERP Software (AP Portal)</option>
                  <option>GIS Decision Support System (DSS)</option>
                  <option>DIgSILENT PowerFactory Grid Studies</option>
                  <option>24/7 Managed NOC Telemetry & SLA Maintenance</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#1D1D1F] dark:text-white mb-1.5">
                  {lang === 'en' ? 'Initial Notes / Challenges' : 'Catatan Kebutuhan Singkat'}
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={
                    lang === 'en'
                      ? 'Specify number of nodes, vessel count, location, or urgent target date...'
                      : 'Sebutkan jumlah titik jaringan, kapal, lokasi, atau target waktu...'
                  }
                  className="w-full px-4 py-3 rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.1] dark:border-white/[0.15] text-[#1D1D1F] dark:text-white text-xs sm:text-sm focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 focus:outline-none transition-all placeholder:text-[#6E6E73]/60"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium text-xs sm:text-sm shadow-xs transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Send Consultation Brief' : 'Kirim Permohonan Konsultasi'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
