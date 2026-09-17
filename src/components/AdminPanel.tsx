import React, { useState } from 'react';
import {
  X,
  Plus,
  Trash2,
  Edit2,
  Save,
  RotateCcw,
  CheckCircle,
  Briefcase,
  Layers,
  Building2,
  Inbox,
  Search,
  ExternalLink,
  ShieldAlert,
} from 'lucide-react';
import { useCms } from '../context/CmsContext';
import type { ClientItem, Inquiry } from '../context/CmsContext';
import type { Project, Service } from '../data/companyData';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'id';
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose, lang }) => {
  const {
    projects,
    services,
    clients,
    inquiries,
    addProject,
    updateProject,
    deleteProject,
    addService,
    updateService,
    deleteService,
    addClient,
    updateClient,
    deleteClient,
    updateInquiryStatus,
    deleteInquiry,
    resetToDefaults,
  } = useCms();

  const [activeTab, setActiveTab] = useState<'projects' | 'services' | 'clients' | 'inquiries' | 'settings'>('projects');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Search filters
  const [projectSearch, setProjectSearch] = useState('');
  const [clientSearch, setClientSearch] = useState('');

  // Editing state for Project
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isCreatingProject, setIsCreatingProject] = useState(false);

  // Editing state for Service
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [isCreatingService, setIsCreatingService] = useState(false);

  // Editing state for Client
  const [editingClient, setEditingClient] = useState<ClientItem | null>(null);
  const [isCreatingClient, setIsCreatingClient] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  if (!isOpen) return null;

  // Filtered lists
  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(projectSearch.toLowerCase()) ||
      p.client.toLowerCase().includes(projectSearch.toLowerCase())
  );

  const filteredClients = clients.filter(
    (c) =>
      c.name.toLowerCase().includes(clientSearch.toLowerCase()) ||
      c.scope.id.toLowerCase().includes(clientSearch.toLowerCase())
  );

  // Handle Save Project
  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;
    if (isCreatingProject) {
      addProject(editingProject);
      showToast('Proyek baru berhasil ditambahkan!');
    } else {
      updateProject(editingProject);
      showToast('Perubahan proyek berhasil disimpan!');
    }
    setEditingProject(null);
    setIsCreatingProject(false);
  };

  // Handle Save Service
  const handleSaveService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingService) return;
    if (isCreatingService) {
      addService(editingService);
      showToast('Layanan baru berhasil ditambahkan!');
    } else {
      updateService(editingService);
      showToast('Perubahan layanan berhasil disimpan!');
    }
    setEditingService(null);
    setIsCreatingService(false);
  };

  // Handle Save Client
  const handleSaveClient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingClient) return;
    if (isCreatingClient) {
      addClient(editingClient);
      showToast('Klien/Prinsipal baru berhasil ditambahkan!');
    } else {
      updateClient(editingClient);
      showToast('Data klien berhasil diperbarui!');
    }
    setEditingClient(null);
    setIsCreatingClient(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#081522]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Main CMS Container */}
      <div className="relative z-10 w-full max-w-6xl bg-white dark:bg-[#0B1F3A] rounded-3xl border border-slate-200 dark:border-cyan-500/40 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-[#081522]/90">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-2xl bg-[#0050AE] text-white shadow-sm">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-lg sm:text-xl font-bold text-[#002D62] dark:text-white">
                  MNK Corporate CMS & Web Manager
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[10px] font-mono font-bold">
                  LIVE CRUD
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Kelola konten proyek, layanan, direktori logo klien, dan tinjau pesan masuk secara real-time
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher & Metrics Summary */}
        <div className="px-6 pt-4 pb-2 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1F3A] flex flex-wrap items-center justify-between gap-4">
          <div className="flex space-x-2 overflow-x-auto pb-2 sm:pb-0">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                activeTab === 'projects'
                  ? 'bg-[#0050AE] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Proyek ({projects.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('services')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                activeTab === 'services'
                  ? 'bg-[#0050AE] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Layanan ({services.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('clients')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                activeTab === 'clients'
                  ? 'bg-[#0050AE] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Klien & Logo ({clients.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('inquiries')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                activeTab === 'inquiries'
                  ? 'bg-[#0050AE] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Inbox className="w-3.5 h-3.5" />
              <span>Pesan Masuk ({inquiries.length})</span>
              {inquiries.some((i) => i.status === 'new') && (
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              )}
            </button>
          </div>

          {/* Quick Action: Reset to Defaults */}
          <button
            onClick={() => {
              if (window.confirm('Reset semua data ke versi default bawaan PDF? Perubahan custom Anda akan dikembalikan.')) {
                resetToDefaults();
                showToast('Data berhasil di-reset ke versi bawaan pabrik.');
              }
            }}
            className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 flex items-center space-x-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Data Default</span>
          </button>
        </div>

        {/* Toast Feedback */}
        {toastMessage && (
          <div className="mx-6 mt-4 p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/30 rounded-xl flex items-center space-x-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300 animate-fadeIn">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Tab Content Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {/* TAB 1: PROJECTS MANAGER */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="relative w-full sm:w-72">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={projectSearch}
                    onChange={(e) => setProjectSearch(e.target.value)}
                    placeholder="Cari judul proyek atau klien..."
                    className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs focus:outline-none focus:border-[#0050AE]"
                  />
                </div>

                <button
                  onClick={() => {
                    setIsCreatingProject(true);
                    setEditingProject({
                      id: `proj-${Date.now()}`,
                      title: '',
                      client: '',
                      category: 'maritime',
                      location: '',
                      image: '/extracted/img_013.jpg',
                      summary: { en: '', id: '' },
                      challenge: { en: '', id: '' },
                      solution: { en: '', id: '' },
                      businessImpact: { en: '', id: '' },
                      technologies: ['Cisco', 'VSAT', 'Fiber Optic'],
                      specs: ['SLA 99.9%'],
                      documentRef: '',
                    });
                  }}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#0050AE] hover:bg-[#004294] text-white text-xs font-bold flex items-center justify-center space-x-2 shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Proyek Baru</span>
                </button>
              </div>

              {/* Projects Table / Card List */}
              <div className="space-y-3">
                {filteredProjects.map((p) => (
                  <div
                    key={p.id}
                    className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-14 h-14 rounded-xl object-cover border border-slate-200 dark:border-slate-700 flex-shrink-0"
                      />
                      <div>
                        <div className="text-xs font-mono font-bold text-[#0050AE] dark:text-cyan-400">
                          {p.client}
                        </div>
                        <h4 className="text-sm font-bold text-[#002D62] dark:text-white">
                          {p.title}
                        </h4>
                        <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {p.summary.id || p.summary.en}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 self-end sm:self-center">
                      <button
                        onClick={() => {
                          setIsCreatingProject(false);
                          setEditingProject(p);
                        }}
                        className="p-2 rounded-lg bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-[#0050AE] border border-slate-200 dark:border-slate-700 shadow-xs"
                        title="Edit Proyek"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm(`Hapus proyek "${p.title}"?`)) {
                            deleteProject(p.id);
                            showToast('Proyek berhasil dihapus.');
                          }
                        }}
                        className="p-2 rounded-lg bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-rose-600 border border-slate-200 dark:border-slate-700 shadow-xs"
                        title="Hapus Proyek"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: SERVICES MANAGER */}
          {activeTab === 'services' && (
            <div className="space-y-6">
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    setIsCreatingService(true);
                    setEditingService({
                      id: `serv-${Date.now()}`,
                      title: { en: '', id: '' },
                      category: 'Infrastructure',
                      iconName: 'Network',
                      description: { en: '', id: '' },
                      benefits: { en: ['High Availability', 'Proactive SLA'], id: ['Keandalan Tinggi', 'SLA Terjamin'] },
                      technologies: ['Cisco', 'MikroTik'],
                    });
                  }}
                  className="px-4 py-2 rounded-xl bg-[#0050AE] hover:bg-[#004294] text-white text-xs font-bold flex items-center space-x-2 shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Layanan Baru</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((s) => (
                  <div
                    key={s.id}
                    className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/50 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-[#0050AE] dark:text-cyan-300">
                          {s.category}
                        </span>
                        <div className="flex items-center space-x-1">
                          <button
                            onClick={() => {
                              setIsCreatingService(false);
                              setEditingService(s);
                            }}
                            className="p-1.5 rounded-lg text-slate-500 hover:text-[#0050AE]"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm(`Hapus layanan "${s.title.id}"?`)) {
                                deleteService(s.id);
                                showToast('Layanan berhasil dihapus.');
                              }
                            }}
                            className="p-1.5 rounded-lg text-slate-500 hover:text-rose-600"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <h4 className="text-sm font-bold text-[#002D62] dark:text-white mb-1">
                        {s.title.id || s.title.en}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-3 font-normal">
                        {s.description.id || s.description.en}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-200 dark:border-slate-800">
                      {s.technologies.map((t, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: CLIENTS & LOGOS MANAGER */}
          {activeTab === 'clients' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="relative w-full sm:w-72">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={clientSearch}
                    onChange={(e) => setClientSearch(e.target.value)}
                    placeholder="Cari instansi atau nama..."
                    className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs focus:outline-none focus:border-[#0050AE]"
                  />
                </div>

                <button
                  onClick={() => {
                    setIsCreatingClient(true);
                    setEditingClient({
                      id: `client-${Date.now()}`,
                      name: '',
                      category: { en: 'Strategic Enterprise Partner', id: 'Mitra Korporasi Strategis' },
                      scope: { en: 'IT Infrastructure Integration', id: 'Integrasi Infrastruktur IT Terpadu' },
                      logoFile: 'logo-baru.png',
                      brandColor: '#0050AE',
                      initials: 'MNK',
                      type: 'client',
                    });
                  }}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#0050AE] hover:bg-[#004294] text-white text-xs font-bold flex items-center justify-center space-x-2 shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Klien / Mitra</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredClients.map((c) => (
                  <div
                    key={c.id}
                    className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/50 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs text-white shadow-xs"
                            style={{ backgroundColor: c.brandColor }}
                          >
                            {c.initials}
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-[#002D62] dark:text-white line-clamp-1">
                              {c.name}
                            </h4>
                            <span className="text-[10px] font-mono text-slate-500">
                              {c.category.id}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-1">
                          <button
                            onClick={() => {
                              setIsCreatingClient(false);
                              setEditingClient(c);
                            }}
                            className="p-1 rounded-lg text-slate-400 hover:text-[#0050AE]"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm(`Hapus "${c.name}"?`)) {
                                deleteClient(c.id);
                                showToast('Data klien berhasil dihapus.');
                              }
                            }}
                            className="p-1 rounded-lg text-slate-400 hover:text-rose-600"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <p className="text-[11px] text-slate-600 dark:text-slate-300 font-normal line-clamp-2">
                        {c.scope.id}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-800 text-[10px] font-mono text-slate-400">
                      File: public/logos/{c.logoFile}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: INQUIRIES INBOX */}
          {activeTab === 'inquiries' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                <span className="text-xs font-bold text-slate-500 uppercase">
                  Daftar Pesan & Permohonan Konsultasi Pengunjung
                </span>
                <span className="text-xs font-mono font-bold text-[#0050AE]">
                  Total: {inquiries.length} Pesan
                </span>
              </div>

              {inquiries.length === 0 ? (
                <div className="p-8 text-center text-slate-400 text-xs">
                  Belum ada pesan masuk. Setiap form konsultasi di website akan otomatis tersimpan di sini.
                </div>
              ) : (
                <div className="space-y-3">
                  {inquiries.map((inq) => (
                    <div
                      key={inq.id}
                      className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/50 flex flex-col justify-between space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-bold text-[#002D62] dark:text-white">
                              {inq.name}
                            </span>
                            <span className="text-xs text-slate-400">({inq.organization})</span>
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${
                                inq.status === 'new'
                                  ? 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-300'
                                  : inq.status === 'contacted'
                                  ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
                                  : 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'
                              }`}
                            >
                              {inq.status}
                            </span>
                          </div>
                          <div className="text-xs text-slate-500 mt-0.5">
                            {inq.email} • {inq.phone} • Scope: <strong className="text-[#0050AE]">{inq.serviceScope}</strong>
                          </div>
                        </div>

                        <div className="text-[11px] font-mono text-slate-400">
                          {inq.date}
                        </div>
                      </div>

                      <p className="text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 leading-relaxed font-normal">
                        "{inq.message}"
                      </p>

                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center space-x-2 text-xs font-semibold">
                          <span className="text-[11px] text-slate-400">Ubah Status:</span>
                          <button
                            onClick={() => updateInquiryStatus(inq.id, 'new')}
                            className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] hover:bg-slate-200"
                          >
                            New
                          </button>
                          <button
                            onClick={() => updateInquiryStatus(inq.id, 'contacted')}
                            className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] hover:bg-slate-200"
                          >
                            Contacted
                          </button>
                          <button
                            onClick={() => updateInquiryStatus(inq.id, 'resolved')}
                            className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] hover:bg-slate-200"
                          >
                            Resolved
                          </button>
                        </div>

                        <button
                          onClick={() => {
                            if (window.confirm('Hapus pesan ini dari inbox?')) {
                              deleteInquiry(inq.id);
                              showToast('Pesan berhasil dihapus.');
                            }
                          }}
                          className="text-xs text-rose-500 hover:underline flex items-center space-x-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Hapus</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* MODAL: EDIT / CREATE PROJECT */}
        {editingProject && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-white dark:bg-[#0B1F3A] rounded-2xl border border-slate-200 dark:border-slate-700 p-6 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-base font-bold text-[#002D62] dark:text-white">
                  {isCreatingProject ? 'Tambah Proyek Baru' : 'Edit Data Proyek'}
                </h3>
                <button onClick={() => setEditingProject(null)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveProject} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold mb-1">Judul Proyek *</label>
                  <input
                    type="text"
                    required
                    value={editingProject.title}
                    onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:border-[#0050AE]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-1">Nama Klien *</label>
                    <input
                      type="text"
                      required
                      value={editingProject.client}
                      onChange={(e) => setEditingProject({ ...editingProject, client: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:border-[#0050AE]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1">Kategori *</label>
                    <select
                      value={editingProject.category}
                      onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value as any })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:border-[#0050AE]"
                    >
                      <option value="maritime">Maritime & Tankers</option>
                      <option value="government">Government & Ministries</option>
                      <option value="energy">Power & Energy</option>
                      <option value="enterprise">Enterprise & Education</option>
                      <option value="infrastructure">Outdoor & Infrastructure</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-1">Lokasi Proyek</label>
                    <input
                      type="text"
                      value={editingProject.location}
                      onChange={(e) => setEditingProject({ ...editingProject, location: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:border-[#0050AE]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1">Path Gambar (URL atau /extracted/img_xxx.jpg)</label>
                    <input
                      type="text"
                      value={editingProject.image}
                      onChange={(e) => setEditingProject({ ...editingProject, image: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:border-[#0050AE]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold mb-1">Ringkasan Proyek (Bahasa Indonesia) *</label>
                  <textarea
                    rows={2}
                    required
                    value={editingProject.summary.id}
                    onChange={(e) => setEditingProject({
                      ...editingProject,
                      summary: { ...editingProject.summary, id: e.target.value, en: e.target.value }
                    })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:border-[#0050AE]"
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-1">Tantangan Lapangan</label>
                    <textarea
                      rows={2}
                      value={editingProject.challenge.id}
                      onChange={(e) => setEditingProject({
                        ...editingProject,
                        challenge: { ...editingProject.challenge, id: e.target.value, en: e.target.value }
                      })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:border-[#0050AE]"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block font-semibold mb-1">Solusi Rekayasa MNK</label>
                    <textarea
                      rows={2}
                      value={editingProject.solution.id}
                      onChange={(e) => setEditingProject({
                        ...editingProject,
                        solution: { ...editingProject.solution, id: e.target.value, en: e.target.value }
                      })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:border-[#0050AE]"
                    ></textarea>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold mb-1">Dampak & Manfaat Operasional</label>
                  <textarea
                    rows={2}
                    value={editingProject.businessImpact.id}
                    onChange={(e) => setEditingProject({
                      ...editingProject,
                      businessImpact: { ...editingProject.businessImpact, id: e.target.value, en: e.target.value }
                    })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:border-[#0050AE]"
                  ></textarea>
                </div>

                <div className="flex justify-end space-x-2 pt-3 border-t border-slate-200 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => setEditingProject(null)}
                    className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-[#0050AE] text-white text-xs font-bold shadow-sm"
                  >
                    Simpan Proyek
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL: EDIT / CREATE CLIENT */}
        {editingClient && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-white dark:bg-[#0B1F3A] rounded-2xl border border-slate-200 dark:border-slate-700 p-6 max-w-lg w-full shadow-2xl">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-base font-bold text-[#002D62] dark:text-white">
                  {isCreatingClient ? 'Tambah Klien / Prinsipal' : 'Edit Klien'}
                </h3>
                <button onClick={() => setEditingClient(null)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveClient} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold mb-1">Nama Instansi / Perusahaan *</label>
                  <input
                    type="text"
                    required
                    value={editingClient.name}
                    onChange={(e) => setEditingClient({ ...editingClient, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:border-[#0050AE]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-1">Kategori / Sektor *</label>
                    <input
                      type="text"
                      required
                      value={editingClient.category.id}
                      onChange={(e) => setEditingClient({
                        ...editingClient,
                        category: { id: e.target.value, en: e.target.value }
                      })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:border-[#0050AE]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1">Inisial / Kode Singkat *</label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      value={editingClient.initials}
                      onChange={(e) => setEditingClient({ ...editingClient, initials: e.target.value.toUpperCase() })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:border-[#0050AE]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-1">Nama File Logo (di public/logos/) *</label>
                    <input
                      type="text"
                      required
                      value={editingClient.logoFile}
                      onChange={(e) => setEditingClient({ ...editingClient, logoFile: e.target.value })}
                      placeholder="contoh: pertamina.png"
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:border-[#0050AE]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1">Warna Brand (Hex)</label>
                    <input
                      type="text"
                      value={editingClient.brandColor}
                      onChange={(e) => setEditingClient({ ...editingClient, brandColor: e.target.value })}
                      placeholder="#0072CE"
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:border-[#0050AE]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold mb-1">Ruang Lingkup Pekerjaan *</label>
                  <textarea
                    rows={2}
                    required
                    value={editingClient.scope.id}
                    onChange={(e) => setEditingClient({
                      ...editingClient,
                      scope: { id: e.target.value, en: e.target.value }
                    })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:border-[#0050AE]"
                  ></textarea>
                </div>

                <div className="flex justify-end space-x-2 pt-3 border-t border-slate-200 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => setEditingClient(null)}
                    className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-[#0050AE] text-white text-xs font-bold shadow-sm"
                  >
                    Simpan Klien
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 dark:bg-[#081522] border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span className="font-mono">
            Perubahan otomatis tersimpan di LocalStorage browser ini
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-white font-bold hover:bg-slate-300 transition-colors"
          >
            Tutup Panel
          </button>
        </div>
      </div>
    </div>
  );
};
