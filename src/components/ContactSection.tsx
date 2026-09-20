import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Clock,
  Send,
  CheckCircle,
  Building,
  ShieldCheck,
} from 'lucide-react';
import { useCms } from '../context/CmsContext';

interface ContactProps {
  lang: 'en' | 'id';
}

export const ContactSection: React.FC<ContactProps> = ({ lang }) => {
  const { addInquiry } = useCms();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    serviceScope: 'Enterprise Network Architecture',
    terrain: 'Onshore Corporate / Data Center',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addInquiry({
      name: formData.name,
      organization: formData.organization,
      email: formData.email,
      phone: formData.phone,
      serviceScope: formData.serviceScope,
      terrain: formData.terrain,
      message: formData.message,
    });
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden transition-colors">
      {/* Top Animated Beam Sweep Divider */}
      <div className="beam-divider opacity-60 mb-12"></div>

      {/* Decorative High-Tech Background Watermark */}
      <div className="absolute top-12 right-8 text-[11px] font-tech text-slate-400/30 dark:text-cyan-500/10 select-none pointer-events-none tracking-widest hidden md:block">
        [COMMUNICATION: ENCRYPTED_NOC_DISPATCH // SEMARANG_HQ]
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] text-[#0071E3] dark:text-[#2997FF] text-xs font-mono font-medium tracking-wider mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3] dark:bg-[#2997FF] animate-ping mr-1"></span>
            <span>{lang === 'en' ? 'DIRECT TECHNICAL DIALOGUE' : 'HUBUNGI KAMI'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1D1D1F] dark:text-white tracking-tight leading-[1.12]">
            {lang === 'en' ? (
              <>
                Ready to Secure <span className="text-[#0071E3] dark:text-[#2997FF]">Your Infrastructure?</span>
              </>
            ) : (
              <>
                Konsultasikan <span className="text-[#0071E3] dark:text-[#2997FF]">Infrastruktur Anda</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-[#6E6E73] dark:text-[#A1A1A6] text-base leading-relaxed">
            {lang === 'en'
              ? 'Connect directly with our senior network architects and engineering directors for technical evaluation and quotation.'
              : 'Hubungi kami untuk konsultasi teknis, survei lokasi, dan evaluasi jaringan korporat Anda.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Contact Info & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-[#161617] p-6 sm:p-8 rounded-3xl border border-black/[0.08] dark:border-white/[0.12] shadow-xs space-y-6">
              <h3 className="text-base font-semibold text-[#1D1D1F] dark:text-white tracking-tight flex items-center">
                <Building className="w-4 h-4 mr-2 text-[#0071E3] dark:text-[#2997FF]" />
                <span>{lang === 'en' ? 'Headquarters & NOC Center' : 'Kantor Pusat & Pusat NOC'}</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start space-x-3 text-[#1D1D1F] dark:text-white">
                  <MapPin className="w-5 h-5 text-[#0071E3] dark:text-[#2997FF] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-[#1D1D1F] dark:text-white">Maudy Network Komunikasi (MNK)</div>
                    <p className="text-[#6E6E73] dark:text-[#A1A1A6] text-xs mt-0.5 leading-relaxed">
                      Jl. Prof. Dr. Hamka BPI Blok A-5, Ngaliyan, Semarang, Jawa Tengah, Indonesia 50184
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-[#1D1D1F] dark:text-white">
                  <Phone className="w-5 h-5 text-[#0071E3] dark:text-[#2997FF] flex-shrink-0" />
                  <div>
                    <a
                      href="tel:+6285727487507"
                      className="hover:text-[#0071E3] dark:hover:text-[#2997FF] transition-colors font-mono font-semibold"
                    >
                      +62 857-2748-7507
                    </a>
                    <span className="text-black/20 dark:text-white/20 mx-2">|</span>
                    <a
                      href="tel:+622476469031"
                      className="hover:text-[#0071E3] dark:hover:text-[#2997FF] transition-colors font-mono"
                    >
                      +62 24 76469031
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-[#1D1D1F] dark:text-white">
                  <Mail className="w-5 h-5 text-[#0071E3] dark:text-[#2997FF] flex-shrink-0" />
                  <a
                    href="mailto:support@maudynetwork.id"
                    className="hover:underline font-mono text-[#0071E3] dark:text-[#2997FF] font-semibold"
                  >
                    support@maudynetwork.id
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-[#1D1D1F] dark:text-white">
                  <Clock className="w-5 h-5 text-[#34C759] flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-[#1D1D1F] dark:text-white">24/7/365</span>
                    <span className="text-[#6E6E73] dark:text-[#A1A1A6] text-xs ml-1.5">
                      {lang === 'en' ? 'Continuous NOC & Technical Support' : 'Operasional NOC & Dukungan Teknis 24 Jam'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Quick Chat */}
              <div className="pt-4 border-t border-black/[0.08] dark:border-white/[0.08]">
                <a
                  href="https://wa.me/6285727487507?text=Halo%20Maudy%20Network%20Komunikasi,%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20infrastruktur%20IT."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-xs transition-all shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Instant WhatsApp Chat with Director' : 'Chat WhatsApp Langsung'}</span>
                </a>
              </div>
            </div>

            {/* Google Maps Location */}
            <div className="bg-white dark:bg-[#161617] rounded-3xl border border-black/[0.08] dark:border-white/[0.12] overflow-hidden shadow-xs">
              <div className="p-3.5 bg-black/[0.02] dark:bg-white/[0.02] border-b border-black/[0.08] dark:border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-[#6E6E73] dark:text-[#A1A1A6]">
                <span className="flex items-center font-medium">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-[#0071E3] dark:text-[#2997FF]" />
                  Semarang HQ Coordinates: -7.0016, 110.3458
                </span>
                <span className="text-[#34C759] font-medium">Head Office</span>
              </div>
              <div className="h-56 w-full bg-slate-100 relative">
                <iframe
                  title="MNK Office Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15840.485292419407!2d110.3371661!3d-7.0016147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708a96e25531b9%3A0x6a1610e7b4e72aa6!2sNgaliyan%2C%20Semarang%20City%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1715000000000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right: Technical Consultation Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#161617] p-6 sm:p-8 rounded-3xl border border-black/[0.08] dark:border-white/[0.12] shadow-xs relative overflow-hidden">
              <h3 className="text-xl font-semibold text-[#1D1D1F] dark:text-white mb-2 flex items-center space-x-2 tracking-tight">
                <ShieldCheck className="w-5 h-5 text-[#0071E3] dark:text-[#2997FF]" />
                <span>{lang === 'en' ? 'Schedule Infrastructure Consultation' : 'Formulir Pengajuan Evaluasi Teknis'}</span>
              </h3>
              <p className="text-sm text-[#6E6E73] dark:text-[#A1A1A6] mb-6 font-normal leading-relaxed">
                {lang === 'en'
                  ? 'Provide your project requirements below. A certified lead engineer will review and respond within 2 business hours.'
                  : 'Isi spesifikasi kebutuhan Anda di bawah ini. Tim insinyur bersertifikasi kami akan merespon dalam 2 jam kerja.'}
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-emerald-50 dark:bg-emerald-950/30 rounded-3xl border border-emerald-200 dark:border-emerald-800/40">
                  <CheckCircle className="w-12 h-12 text-[#34C759] mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-[#1D1D1F] dark:text-white mb-1">
                    {lang === 'en' ? 'Consultation Request Dispatched' : 'Permohonan Berhasil Dikirim'}
                  </h4>
                  <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] max-w-md mx-auto leading-relaxed">
                    {lang === 'en'
                      ? 'Thank you. Your technical requirements have been forwarded to Director Yahya Hidayatullah and Lead Architect Ikhwanul Rahman.'
                      : 'Terima kasih. Spesifikasi kebutuhan Anda telah diteruskan langsung ke Direktur Yahya Hidayatullah dan Tim Engineering.'}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-xs text-white font-medium transition-all"
                  >
                    {lang === 'en' ? 'Submit Another Technical Brief' : 'Kirim Permintaan Baru'}
                  </button>
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
                        {lang === 'en' ? 'Organization / Institution *' : 'Instansi / Perusahaan *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. PT Pertamina / Kementerian"
                        className="w-full px-4 py-3 rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.1] dark:border-white/[0.15] text-[#1D1D1F] dark:text-white text-xs sm:text-sm focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 focus:outline-none transition-all placeholder:text-[#6E6E73]/60"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#1D1D1F] dark:text-white mb-1.5">
                        {lang === 'en' ? 'Corporate Email *' : 'Email Kantor *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@pertamina.com"
                        className="w-full px-4 py-3 rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.1] dark:border-white/[0.15] text-[#1D1D1F] dark:text-white text-xs sm:text-sm focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 focus:outline-none transition-all placeholder:text-[#6E6E73]/60"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#1D1D1F] dark:text-white mb-1.5">
                        {lang === 'en' ? 'Phone / WhatsApp *' : 'Nomor WhatsApp *'}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+62 812-xxxx-xxxx"
                        className="w-full px-4 py-3 rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.1] dark:border-white/[0.15] text-[#1D1D1F] dark:text-white text-xs sm:text-sm focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 focus:outline-none transition-all placeholder:text-[#6E6E73]/60"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#1D1D1F] dark:text-white mb-1.5">
                        {lang === 'en' ? 'Primary Scope of Work' : 'Ruang Lingkup Kebutuhan'}
                      </label>
                      <select
                        value={formData.serviceScope}
                        onChange={(e) => setFormData({ ...formData, serviceScope: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.1] dark:border-white/[0.15] text-[#1D1D1F] dark:text-white text-xs sm:text-sm focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 focus:outline-none transition-all"
                      >
                        <option>Enterprise Network & Data Center</option>
                        <option>Marine Vessel VSAT & Satellite QoS</option>
                        <option>Fortinet NSE 7 Cyber Security Defense</option>
                        <option>AI CCTV Surveillance (Honeywell/Hikvision)</option>
                        <option>Molinar.id Smart IoT & Telemetry</option>
                        <option>Custom ERP Software (AP Portal)</option>
                        <option>GIS Decision Support System (DSS)</option>
                        <option>DIgSILENT PowerFactory Grid Simulation</option>
                        <option>24/7 Managed NOC & PIS_BOT Sentinel</option>
                        <option>Video Wall & Control Room Integration</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#1D1D1F] dark:text-white mb-1.5">
                        {lang === 'en' ? 'Operational Terrain / Environment' : 'Lokasi & Medan Operasional'}
                      </label>
                      <select
                        value={formData.terrain}
                        onChange={(e) => setFormData({ ...formData, terrain: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.1] dark:border-white/[0.15] text-[#1D1D1F] dark:text-white text-xs sm:text-sm focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 focus:outline-none transition-all"
                      >
                        <option>Onshore Corporate / Data Center</option>
                        <option>Offshore Maritime / Vessel Tanker</option>
                        <option>Multi-Floor Ministerial Tower</option>
                        <option>Remote Agricultural Basin / Dam</option>
                        <option>Outdoor Industrial Plant / Refinery</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#1D1D1F] dark:text-white mb-1.5">
                      {lang === 'en' ? 'Technical Specifications / Project Details' : 'Keterangan Kebutuhan Teknis'}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        lang === 'en'
                          ? 'Describe existing infrastructure bottlenecks, number of nodes, desired timeline, or required compliance standards...'
                          : 'Jelaskan kendala jaringan saat ini, jumlah titik perangkat, estimasi waktu, atau standar kepatuhan yang dibutuhkan...'
                      }
                      className="w-full px-4 py-3 rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.1] dark:border-white/[0.15] text-[#1D1D1F] dark:text-white text-xs sm:text-sm focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 focus:outline-none transition-all placeholder:text-[#6E6E73]/60"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium text-xs sm:text-sm transition-all flex items-center justify-center space-x-2 shadow-xs cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{lang === 'en' ? 'Submit Technical Consultation Request' : 'Kirim Pengajuan Konsultasi'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
