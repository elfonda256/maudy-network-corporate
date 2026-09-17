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
        className="fixed inset-0 bg-[#081522]/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-2xl glass-card rounded-2xl border border-cyan-500/40 shadow-2xl bg-[#0B1F3A]/98 my-8 animate-fadeIn overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-[#081522]/80">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {lang === 'en' ? 'Enterprise Technical Consultation' : 'Permohonan Konsultasi Teknis'}
              </h3>
              <p className="text-xs text-slate-400">
                {lang === 'en'
                  ? 'Connect directly with Director Yahya Hidayatullah & Lead Engineering Team'
                  : 'Terhubung langsung dengan Direksi & Tim Ahli Jaringan MNK'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="p-8 text-center bg-emerald-950/30 rounded-xl border border-emerald-500/40">
              <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
              <h4 className="text-lg font-bold text-white mb-2">
                {lang === 'en' ? 'Consultation Request Sent' : 'Permintaan Berhasil Diterima'}
              </h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed mb-6">
                {lang === 'en'
                  ? 'Our Chief Network Architect will review your specifications and contact you shortly. You may also reach us directly via WhatsApp.'
                  : 'Spesifikasi proyek Anda sedang ditinjau oleh Arsitek Jaringan Utama kami. Anda juga dapat menghubungi langsung melalui WhatsApp.'}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://wa.me/6285727487507?text=Halo%20Maudy%20Network,%20saya%20sudah%20mengirim%20form%20konsultasi%20di%20website."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center space-x-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Chat WhatsApp (+62 857-2748-7507)</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-lg bg-slate-800 text-slate-300 text-xs hover:bg-slate-700"
                >
                  {lang === 'en' ? 'Close Window' : 'Tutup Jendela'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    {lang === 'en' ? 'Full Name *' : 'Nama Lengkap *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Hadi Prabowo"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#081522] border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    {lang === 'en' ? 'Company / Ministry *' : 'Perusahaan / Lembaga *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. PT Pertamina / Kementerian BUMN"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#081522] border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    {lang === 'en' ? 'Email Address *' : 'Alamat Email *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="director@pertamina.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#081522] border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    {lang === 'en' ? 'WhatsApp / Mobile *' : 'Nomor WhatsApp *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+62 857-xxxx-xxxx"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#081522] border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  {lang === 'en' ? 'Primary Scope of Interest' : 'Kategori Kebutuhan'}
                </label>
                <select
                  value={formData.scope}
                  onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#081522] border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
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
                <label className="block text-xs font-mono text-slate-300 mb-1">
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
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#081522] border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 text-white font-semibold text-xs shadow-glow-sm hover:shadow-glow-md transition-all flex items-center justify-center space-x-2"
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
