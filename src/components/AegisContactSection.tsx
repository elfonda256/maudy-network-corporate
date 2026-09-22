import React, { useState } from 'react';
import { 
  Phone, Mail, MessageSquare, CheckCircle2
} from 'lucide-react';
import { PRODUCTS, INDUSTRIES } from '../data/aegisData';
import type { Language } from '../i18n/translations';
import { AEGIS_UI_TEXTS, getAegisProductLocalized } from '../i18n/aegisTranslations';

interface Props {
  lang?: Language;
  prefilledProduct?: string;
}

export const AegisContactSection: React.FC<Props> = ({ lang = 'id', prefilledProduct }) => {
  const t = AEGIS_UI_TEXTS[lang]?.contact || AEGIS_UI_TEXTS.id.contact;

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

  const pocText = {
    id: {
      title: 'Uji Coba Proof of Concept (PoC)',
      desc: 'Kami menyediakan program demo interaktif dan uji coba terbatas menggunakan sampel dokumen atau telemetri organisasi Anda dalam perimeter yang terisolasi.'
    },
    en: {
      title: 'Proof of Concept (PoC) Sandbox',
      desc: 'We offer interactive sandbox deployments and bounded pilot evaluations utilizing sanitized samples of your documents or telemetry within an isolated perimeter.'
    },
    ja: {
      title: '概念実証 (PoC) トライアルプログラム',
      desc: '完全隔離された自社検証環境において、お客様の実データ（文書サンプルやセンサーログ）を用いた実機デモ・PoC評価をご提供いたします。'
    },
    ar: {
      title: 'برنامج إثبات المفهوم التجريبي (PoC)',
      desc: 'نوفر بيئة تجريبية معزولة لاختبار وتقييم حلولنا باستخدام عينات مخصصة من مستندات أو قياسات مؤسستك في بيئة آمنة تماماً.'
    }
  }[lang] || {
    title: 'Uji Coba Proof of Concept (PoC)',
    desc: 'Kami menyediakan program demo interaktif dan uji coba terbatas menggunakan sampel dokumen atau telemetri organisasi Anda dalam perimeter yang terisolasi.'
  };

  const multiSolutionOption = {
    id: 'Konsultasi Arsitektur Menyeluruh (Multi-Solusi)',
    en: 'Holistic Architecture Consultation (Multi-Solution)',
    ja: '包括的アーキテクチャ相談 (複数ソリューション統合)',
    ar: 'استشارة معمارية شاملة (حلول متعددة متكاملة)'
  }[lang] || 'Konsultasi Arsitektur Menyeluruh (Multi-Solusi)';

  const anotherRequestBtn = {
    id: 'Kirim Permintaan Lain',
    en: 'Send Another Request',
    ja: '別の問い合わせを送信',
    ar: 'إرسال طلب آخر'
  }[lang] || 'Kirim Permintaan Lain';

  const formBadge = {
    id: { title: 'Formulir Jadwalkan Demo', sub: 'Data Anda terjaga dalam kerahasiaan penuh.' },
    en: { title: 'Schedule a Consultation', sub: 'Strict non-disclosure confidentiality guaranteed.' },
    ja: { title: '技術相談・デモお申し込み', sub: '入力された情報は厳格な機密保持基準で保護されます。' },
    ar: { title: 'نموذج حجز العرض التجريبي', sub: 'بياناتكم محمية بأعلى معايير السرية والخصوصية.' }
  }[lang] || { title: 'Formulir Jadwalkan Demo', sub: 'Data Anda terjaga dalam kerahasiaan penuh.' };

  const sendBtnLabel = isSubmitting 
    ? (t.form?.submitting || 'Memproses...')
    : (t.form?.submitBtn || 'Jadwalkan Demo Sekarang');

  return (
    <section id="kontak" className="relative py-24 bg-transparent border-t border-white/[0.06] overflow-hidden text-left">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#86868B] text-xs font-mono">
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight font-sans">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] leading-relaxed font-sans">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-5">
            <div className="apple-card p-6 sm:p-7 rounded-3xl bg-[#0F0F12]/80 border border-white/[0.08] space-y-4">
              <h3 className="text-xl font-semibold text-white font-sans">
                {t.channelsTitle}
              </h3>
              <p className="text-xs text-[#86868B] leading-relaxed font-sans">
                {t.channelsSubtitle}
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
                    <div className="text-xs font-semibold text-emerald-400 font-mono">+62 857-2748-7507</div>
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
                    <div className="text-[10px] font-mono text-[#86868B] uppercase">Corporate Desk</div>
                    <div className="text-xs font-semibold text-[#F5F5F7] font-mono">support@maudynetwork.id</div>
                  </div>
                </a>

                {/* Phone */}
                <a 
                  href="tel:+622476469031" 
                  className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.06] transition-all flex items-center space-x-3.5 text-white group"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-950/60 border border-blue-800/30 text-blue-400 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#86868B] uppercase">Headquarters Line</div>
                    <div className="text-xs font-semibold text-[#F5F5F7] font-mono">+62 24 76469031</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="apple-card p-5 rounded-3xl bg-[#0F0F12]/80 border border-white/[0.08] space-y-2">
              <div className="text-xs font-sans font-semibold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2997FF]" /> {pocText.title}
              </div>
              <p className="text-xs text-[#86868B] leading-relaxed font-sans">
                {pocText.desc}
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
                    {t.form?.successTitle || 'Permintaan Demo Diterima'}
                  </h3>
                  <p className="text-xs text-[#86868B] max-w-md mx-auto leading-relaxed font-sans">
                    {t.form?.successDesc || 'Tim arsitek solusi Aegis Technology akan segera menghubungi Anda.'}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="apple-pill-btn px-6 py-2 rounded-full bg-white/[0.06] text-white hover:bg-white/[0.1] text-xs font-mono cursor-pointer"
                  >
                    {anotherRequestBtn}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-white/[0.06] pb-3 mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-white font-sans">{formBadge.title}</h3>
                      <p className="text-xs text-[#86868B] font-sans">{formBadge.sub}</p>
                    </div>
                    <span className="text-[10px] font-mono text-[#2997FF] bg-[#0071E3]/15 px-2.5 py-0.5 rounded-full border border-[#0071E3]/30">
                      Enterprise
                    </span>
                  </div>

                  {/* Nama & Perusahaan */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-sans text-[#A1A1A6] block mb-1">
                        {t.form?.name || 'Nama Lengkap'} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe / Tanaka Kenji"
                        value={formData.nama}
                        onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#141418] border border-white/[0.08] focus:border-[#2997FF] text-white text-xs placeholder-[#6E6E73] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-sans text-[#A1A1A6] block mb-1">
                        {t.form?.company || 'Perusahaan / Institusi'} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Maritime Corp / Ministry"
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
                        {t.form?.jobTitle || 'Jabatan / Posisi'} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Head of IT / Fleet Director"
                        value={formData.jabatan}
                        onChange={(e) => setFormData({ ...formData, jabatan: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#141418] border border-white/[0.08] focus:border-[#2997FF] text-white text-xs placeholder-[#6E6E73] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-sans text-[#A1A1A6] block mb-1">
                        {t.form?.email || 'Email Korporat'} *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@enterprise.com"
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
                        {t.form?.phone || 'Nomor Telepon / WhatsApp'} *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+62 / +81 / +966 ..."
                        value={formData.telepon}
                        onChange={(e) => setFormData({ ...formData, telepon: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#141418] border border-white/[0.08] focus:border-[#2997FF] text-white text-xs placeholder-[#6E6E73] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-sans text-[#A1A1A6] block mb-1">
                        {t.form?.industry || 'Sektor Industri'} *
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
                      {t.form?.solution || 'Solusi AI Yang Diminati'} *
                    </label>
                    <select
                      value={formData.solusi}
                      onChange={(e) => setFormData({ ...formData, solusi: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#141418] border border-white/[0.08] focus:border-[#2997FF] text-white text-xs focus:outline-none transition-colors"
                    >
                      {PRODUCTS.map((prod) => {
                        const lp = getAegisProductLocalized(prod.id, lang);
                        const pName = lp?.name || prod.name;
                        const pTagline = lp?.tagline || prod.tagline;
                        return (
                          <option key={prod.id} value={pName} className="bg-[#0C0C0F] text-white">
                            {pName} — {pTagline}
                          </option>
                        );
                      })}
                      <option value="Multi-Solution Architecture" className="bg-[#0C0C0F] text-white">
                        {multiSolutionOption}
                      </option>
                    </select>
                  </div>

                  {/* Pesan */}
                  <div>
                    <label className="text-[11px] font-sans text-[#A1A1A6] block mb-1">
                      {t.form?.message || 'Catatan Singkat Kebutuhan (Opsional)'}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={lang === 'ja' ? 'ご希望の導入時期、データ規模、現状の課題をご記入ください...' : lang === 'ar' ? 'يرجى كتابة نبذة عن المتطلبات الفنية أو الاستفسارات التي تودون مناقشتها...' : 'Briefly describe your enterprise operational requirements...'}
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
                      <span>{sendBtnLabel}</span>
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
