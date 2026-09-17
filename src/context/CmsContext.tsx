import React, { createContext, useContext, useState, useEffect } from 'react';
import { PROJECTS_LIST, SERVICES_LIST } from '../data/companyData';
import type { Project, Service } from '../data/companyData';

export interface ClientItem {
  id: string;
  name: string;
  category: { en: string; id: string };
  scope: { en: string; id: string };
  logoFile: string;
  brandColor: string;
  initials: string;
  type: 'client' | 'partner';
}

export interface Inquiry {
  id: string;
  name: string;
  organization: string;
  email: string;
  phone: string;
  serviceScope: string;
  terrain?: string;
  message: string;
  date: string;
  status: 'new' | 'contacted' | 'resolved';
}

const DEFAULT_CLIENTS: ClientItem[] = [
  {
    id: 'pertamina',
    name: "PT Pertamina (Persero)",
    category: { en: "State-Owned Energy Enterprise", id: "BUMN Energi Nasional" },
    scope: { en: "Outdoor Land Monitoring & Corporate Summits HA", id: "Monitoring Lahan Aset & Jaringan Event KTT" },
    logoFile: "pertamina.png",
    brandColor: "#0072CE",
    initials: "PTM",
    type: 'client',
  },
  {
    id: 'pertamina-shipping',
    name: "PT Pertamina International Shipping",
    category: { en: "Maritime & Tanker Fleet Logistics", id: "Armada Pelayaran & Tanker Maritim" },
    scope: { en: "Marine VSAT 512Kbps SLA & PIS_BOT Network Sentinel", id: "VSAT Satelit Kapal 512Kbps & Bot Alarm PIS" },
    logoFile: "pertamina-shipping.png",
    brandColor: "#ED1C24",
    initials: "PIS",
    type: 'client',
  },
  {
    id: 'bumn',
    name: "Kementerian BUMN Republik Indonesia",
    category: { en: "Government Ministry", id: "Kementerian Lembaga Negara" },
    scope: { en: "180 Honeywell CCTV Maintenance across 22-Story Tower", id: "Pemeliharaan 180 CCTV Menara 22 Lantai" },
    logoFile: "bumn.png",
    brandColor: "#0050AE",
    initials: "BUMN",
    type: 'client',
  },
  {
    id: 'pupr',
    name: "Kementerian PUPR Republik Indonesia",
    category: { en: "Public Works & Water Resources", id: "Kementerian Pekerjaan Umum & SDA" },
    scope: { en: "Rentang Irrigation Modernization GIS & Dam Telemetry DSS", id: "Web GIS & DSS Modernisasi Irigasi Rentang" },
    logoFile: "pupr.png",
    brandColor: "#FFC72C",
    initials: "PUPR",
    type: 'client',
  },
  {
    id: 'univ-pertamina',
    name: "Universitas Pertamina",
    category: { en: "Higher Education & Research Campus", id: "Institusi Pendidikan Tinggi" },
    scope: { en: "Campus-Wide IT Infrastructure Assessment & Redesign", id: "Audit Kelaikan Jaringan 3 Kampus & Desain FO" },
    logoFile: "univ-pertamina.png",
    brandColor: "#0072CE",
    initials: "UPER",
    type: 'client',
  },
  {
    id: 'airkon',
    name: "PT Airkon Pratama",
    category: { en: "HVAC & Engineering Enterprise", id: "Tata Udara Komersial & Industri" },
    scope: { en: "AP Portal: Custom ERP WebApps & SLA Dispatch System", id: "Aplikasi ERP Web Portal AP & 900+ Tiket Servis" },
    logoFile: "airkon.png",
    brandColor: "#10B981",
    initials: "AP",
    type: 'client',
  },
  {
    id: 'bmkg',
    name: "BMKG",
    category: { en: "Meteorology, Climatology & Geophysics", id: "Badan Meteorologi & Geofisika" },
    scope: { en: "Real-Time Climatology & Weather API Integration for DSS", id: "Integrasi API Cuaca Real-Time untuk DSS Irigasi" },
    logoFile: "bmkg.png",
    brandColor: "#0284C7",
    initials: "BMKG",
    type: 'client',
  },
  {
    id: 'cisco',
    name: "Cisco Systems",
    category: { en: "Enterprise Routing & Core Switching", id: "Core Routing & Switch Carrier-Grade" },
    scope: { en: "CCNP Enterprise & Service Provider Architecture", id: "Arsitektur CCNP Enterprise & Service Provider" },
    logoFile: "cisco.png",
    brandColor: "#049FD9",
    initials: "CISCO",
    type: 'partner',
  },
  {
    id: 'fortinet',
    name: "Fortinet",
    category: { en: "Perimeter Cybersecurity & NGFW", id: "Keamanan Siber & Firewall Generasi Baru" },
    scope: { en: "Fortinet NSE 7 Network Security Architect Standard", id: "Standar Arsitektur Fortinet NSE 7 Architect" },
    logoFile: "fortinet.png",
    brandColor: "#DA291C",
    initials: "FTNT",
    type: 'partner',
  },
  {
    id: 'mikrotik',
    name: "MikroTik",
    category: { en: "Carrier Traffic Control & Bandwidth Shaping", id: "Manajemen Bandwidth & QoS Satelit" },
    scope: { en: "MTCINE & MTCTCE Certified Engineering", id: "Sertifikasi Tertinggi MTCINE & MTCTCE" },
    logoFile: "mikrotik.png",
    brandColor: "#E0292B",
    initials: "MTIK",
    type: 'partner',
  },
  {
    id: 'ruijie',
    name: "Ruijie Networks",
    category: { en: "High-Density Wi-Fi 6 & Campus Access", id: "Wi-Fi 6 Berdensitas Tinggi & Switch Kampus" },
    scope: { en: "Ruijie Specialist Engineer (RSE) Deployments", id: "Implementasi Ruijie Specialist Engineer (RSE)" },
    logoFile: "ruijie.png",
    brandColor: "#E60012",
    initials: "RUIJIE",
    type: 'partner',
  },
  {
    id: 'honeywell',
    name: "Honeywell",
    category: { en: "Enterprise CCTV & Physical Security", id: "Kamera Pengawas CCTV Industrial" },
    scope: { en: "180 High-Rise Surveillance Cameras & 14 NVRs", id: "Audit 180 Kamera & 14 NVR Server" },
    logoFile: "honeywell.png",
    brandColor: "#EE3124",
    initials: "HONEY",
    type: 'partner',
  },
  {
    id: 'hytera',
    name: "Hytera",
    category: { en: "Push-to-Talk Over Cellular (PoC)", id: "Radio Komunikasi Digital PoC Seluler" },
    scope: { en: "Hytera PNC380 GSM Terminals & POCStars Console", id: "30 Unit HT PoC Hytera & Dashboard Lokasi" },
    logoFile: "hytera.png",
    brandColor: "#0050AE",
    initials: "HYTERA",
    type: 'partner',
  },
  {
    id: 'lg',
    name: "LG Business Solutions",
    category: { en: "Commercial Displays & Video Wall", id: "Panel Video Wall Layar Lebar" },
    scope: { en: "LG 49VL5B 2x3 Matrix & iBase Processors", id: "Susunan Layar Video Wall 2x3 & Prosesor iBase" },
    logoFile: "lg.png",
    brandColor: "#A50034",
    initials: "LG",
    type: 'partner',
  },
];

const DEFAULT_INQUIRIES: Inquiry[] = [
  {
    id: 'inq-1',
    name: 'Budi Santoso',
    organization: 'PT Nusantara Maritime Logistics',
    email: 'budi.santoso@nml.co.id',
    phone: '+62 812-9876-5432',
    serviceScope: 'Marine Vessel VSAT & Satellite QoS',
    terrain: 'Offshore Maritime / Vessel Tanker',
    message: 'Membutuhkan penawaran optimasi VSAT untuk 4 unit kapal tugboat dan kargo dengan kuota satelit terkontrol.',
    date: '17 Sep 2026, 10:15 WIB',
    status: 'new',
  },
  {
    id: 'inq-2',
    name: 'Ir. Dewi Lestari',
    organization: 'Balai Besar Wilayah Sungai (BBWS)',
    email: 'dewi.lestari@pu.go.id',
    phone: '+62 813-2234-8899',
    serviceScope: 'GIS Decision Support System (DSS)',
    terrain: 'Remote Agricultural Basin / Dam',
    message: 'Tertarik mengimplementasikan sistem DSS dan integrasi telemetri BMKG untuk sistem irigasi waduk di Jawa Tengah.',
    date: '16 Sep 2026, 14:30 WIB',
    status: 'contacted',
  },
];

interface CmsContextType {
  projects: Project[];
  services: Service[];
  clients: ClientItem[];
  inquiries: Inquiry[];
  addProject: (project: Project) => void;
  updateProject: (project: Project) => void;
  deleteProject: (id: string) => void;
  addService: (service: Service) => void;
  updateService: (service: Service) => void;
  deleteService: (id: string) => void;
  addClient: (client: ClientItem) => void;
  updateClient: (client: ClientItem) => void;
  deleteClient: (id: string) => void;
  addInquiry: (inquiry: Omit<Inquiry, 'id' | 'date' | 'status'>) => void;
  updateInquiryStatus: (id: string, status: Inquiry['status']) => void;
  deleteInquiry: (id: string) => void;
  resetToDefaults: () => void;
}

const CmsContext = createContext<CmsContextType | undefined>(undefined);

export const CmsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem('mnk_projects');
      return saved ? JSON.parse(saved) : PROJECTS_LIST;
    } catch {
      return PROJECTS_LIST;
    }
  });

  const [services, setServices] = useState<Service[]>(() => {
    try {
      const saved = localStorage.getItem('mnk_services');
      return saved ? JSON.parse(saved) : SERVICES_LIST;
    } catch {
      return SERVICES_LIST;
    }
  });

  const [clients, setClients] = useState<ClientItem[]>(() => {
    try {
      const saved = localStorage.getItem('mnk_clients');
      return saved ? JSON.parse(saved) : DEFAULT_CLIENTS;
    } catch {
      return DEFAULT_CLIENTS;
    }
  });

  const [inquiries, setInquiries] = useState<Inquiry[]>(() => {
    try {
      const saved = localStorage.getItem('mnk_inquiries');
      return saved ? JSON.parse(saved) : DEFAULT_INQUIRIES;
    } catch {
      return DEFAULT_INQUIRIES;
    }
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('mnk_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('mnk_services', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem('mnk_clients', JSON.stringify(clients));
  }, [clients]);

  useEffect(() => {
    localStorage.setItem('mnk_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  // Project CRUD
  const addProject = (project: Project) => {
    setProjects((prev) => [project, ...prev]);
  };

  const updateProject = (project: Project) => {
    setProjects((prev) => prev.map((p) => (p.id === project.id ? project : p)));
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  // Service CRUD
  const addService = (service: Service) => {
    setServices((prev) => [...prev, service]);
  };

  const updateService = (service: Service) => {
    setServices((prev) => prev.map((s) => (s.id === service.id ? service : s)));
  };

  const deleteService = (id: string) => {
    setServices((prev) => prev.filter((s) => s.id !== id));
  };

  // Client CRUD
  const addClient = (client: ClientItem) => {
    setClients((prev) => [...prev, client]);
  };

  const updateClient = (client: ClientItem) => {
    setClients((prev) => prev.map((c) => (c.id === client.id ? client : c)));
  };

  const deleteClient = (id: string) => {
    setClients((prev) => prev.filter((c) => c.id !== id));
  };

  // Inquiries CRUD
  const addInquiry = (inquiry: Omit<Inquiry, 'id' | 'date' | 'status'>) => {
    const newInq: Inquiry = {
      ...inquiry,
      id: `inq-${Date.now()}`,
      date: new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }),
      status: 'new',
    };
    setInquiries((prev) => [newInq, ...prev]);
  };

  const updateInquiryStatus = (id: string, status: Inquiry['status']) => {
    setInquiries((prev) =>
      prev.map((i) => (i.id === id ? { ...i, status } : i))
    );
  };

  const deleteInquiry = (id: string) => {
    setInquiries((prev) => prev.filter((i) => i.id !== id));
  };

  const resetToDefaults = () => {
    setProjects(PROJECTS_LIST);
    setServices(SERVICES_LIST);
    setClients(DEFAULT_CLIENTS);
    setInquiries(DEFAULT_INQUIRIES);
    localStorage.removeItem('mnk_projects');
    localStorage.removeItem('mnk_services');
    localStorage.removeItem('mnk_clients');
    localStorage.removeItem('mnk_inquiries');
  };

  return (
    <CmsContext.Provider
      value={{
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
        addInquiry,
        updateInquiryStatus,
        deleteInquiry,
        resetToDefaults,
      }}
    >
      {children}
    </CmsContext.Provider>
  );
};

export const useCms = () => {
  const context = useContext(CmsContext);
  if (!context) {
    throw new Error('useCms must be used within a CmsProvider');
  }
  return context;
};
