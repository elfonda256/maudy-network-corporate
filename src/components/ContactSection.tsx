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
    <section id="contact" className="py-24 bg-slate-50 dark:bg-[#081522] border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-[#0050AE] dark:text-cyan-300 text-xs font-mono font-bold mb-3">
            <span>{lang === 'en' ? 'DIRECT TECHNICAL DIALOGUE' : 'HUBUNGI KAMI'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#002D62] dark:text-white tracking-tight">
            {lang === 'en' ? (
              <>
                Ready to Secure <span className="text-gradient-ocean dark:text-gradient-creative">Your Infrastructure?</span>
              </>
            ) : (
              <>
                Konsultasikan <span className="text-gradient-ocean dark:text-gradient-creative">Infrastruktur Anda</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {lang === 'en'
              ? 'Connect directly with our senior network architects and engineering directors for technical evaluation and quotation.'
              : 'Hubungi kami untuk konsultasi teknis, survei lokasi, dan evaluasi jaringan korporat Anda.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-[#0B1F3A]/80 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <h3 className="text-base font-bold text-[#002D62] dark:text-white font-mono uppercase tracking-wider flex items-center">
                <Building className="w-4 h-4 mr-2 text-[#0050AE] dark:text-cyan-400" />
                <span>{lang === 'en' ? 'Headquarters & NOC Center' : 'Kantor Pusat & Pusat NOC'}</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start space-x-3 text-slate-700 dark:text-slate-300">
                  <MapPin className="w-5 h-5 text-[#0050AE] dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-[#002D62] dark:text-white">Maudy Network Komunikasi (MNK)</div>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5 leading-relaxed">
                      Jl. Prof. Dr. Hamka BPI Blok A-5, Ngaliyan, Semarang, Jawa Tengah, Indonesia 50184
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                  <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <div>
                    <a
                      href="tel:+6285727487507"
                      className="hover:text-[#0050AE] dark:hover:text-cyan-400 transition-colors font-mono font-bold"
                    >
                      +62 857-2748-7507
                    </a>
                    <span className="text-slate-400 mx-2">|</span>
                    <a
                      href="tel:+622476469031"
                      className="hover:text-[#0050AE] dark:hover:text-cyan-400 transition-colors font-mono"
                    >
                      +62 24 76469031
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                  <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                  <a
                    href="mailto:support@maudynetwork.id"
                    className="hover:underline font-mono text-[#0050AE] dark:text-cyan-300 font-semibold"
                  >
                    support@maudynetwork.id
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                  <Clock className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-[#002D62] dark:text-white">24/7/365</span>
                    <span className="text-slate-500 dark:text-slate-400 text-xs ml-1">
                      {lang === 'en' ? 'Continuous NOC & Technical Support' : 'Operasional NOC & Dukungan Teknis 24 Jam'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Quick Chat */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <a
                  href="https://wa.me/6285727487507?text=Halo%20Maudy%20Network%20Komunikasi,%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20infrastruktur%20IT."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Instant WhatsApp Chat with Director' : 'Chat WhatsApp Langsung'}</span>
                </a>
              </div>
            </div>

            {/* Google Maps Location */}
            <div className="bg-white dark:bg-[#0B1F3A]/80 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              <div className="p-3.5 bg-slate-50 dark:bg-[#0B1F3A] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center font-bold">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-[#0050AE] dark:text-cyan-400" />
                  Semarang HQ Coordinates: -7.0016, 110.3458
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Head Office</span>
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
            <div className="bg-white dark:bg-[#0B1F3A]/80 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md">
              <h3 className="text-lg font-bold text-[#002D62] dark:text-white mb-2 flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-[#0050AE] dark:text-cyan-400" />
                <span>{lang === 'en' ? 'Schedule Infrastructure Consultation' : 'Formulir Pengajuan Evaluasi Teknis'}</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 font-normal">
                {lang === 'en'
                  ? 'Provide your project requirements below. A certified lead engineer will review and respond within 2 business hours.'
                  : 'Isi spesifikasi kebutuhan Anda di bawah ini. Tim insinyur bersertifikasi kami akan merespon dalam 2 jam kerja.'}
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl border border-emerald-200 dark:border-emerald-500/40">
                  <CheckCircle className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-[#002D62] dark:text-white mb-1">
                    {lang === 'en' ? 'Consultation Request Dispatched' : 'Permohonan Berhasil Dikirim'}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    {lang === 'en'
                      ? 'Thank you. Your technical requirements have been forwarded to Director Yahya Hidayatullah and Lead Architect Ikhwanul Rahman.'
                      : 'Terima kasih. Spesifikasi kebutuhan Anda telah diteruskan langsung ke Direktur Yahya Hidayatullah dan Tim Engineering.'}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs text-[#0050AE] dark:text-cyan-300 font-bold"
                  >
                    {lang === 'en' ? 'Submit Another Technical Brief' : 'Kirim Permintaan Baru'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {lang === 'en' ? 'Full Name *' : 'Nama Lengkap *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Hadi Prabowo"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#081522] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:border-[#0050AE] dark:focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {lang === 'en' ? 'Organization / Institution *' : 'Instansi / Perusahaan *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. PT Pertamina / Kementerian"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#081522] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:border-[#0050AE] dark:focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {lang === 'en' ? 'Corporate Email *' : 'Email Kantor *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@pertamina.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#081522] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:border-[#0050AE] dark:focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {lang === 'en' ? 'Phone / WhatsApp *' : 'Nomor WhatsApp *'}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+62 812-xxxx-xxxx"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#081522] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:border-[#0050AE] dark:focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {lang === 'en' ? 'Primary Scope of Work' : 'Ruang Lingkup Kebutuhan'}
                      </label>
                      <select
                        value={formData.serviceScope}
                        onChange={(e) => setFormData({ ...formData, serviceScope: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#081522] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:border-[#0050AE] dark:focus:border-cyan-400 focus:outline-none"
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
                      <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {lang === 'en' ? 'Operational Terrain / Environment' : 'Lokasi & Medan Operasional'}
                      </label>
                      <select
                        value={formData.terrain}
                        onChange={(e) => setFormData({ ...formData, terrain: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#081522] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:border-[#0050AE] dark:focus:border-cyan-400 focus:outline-none"
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
                    <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1">
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#081522] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:border-[#0050AE] dark:focus:border-cyan-400 focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#0050AE] hover:bg-[#004294] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-2"
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
