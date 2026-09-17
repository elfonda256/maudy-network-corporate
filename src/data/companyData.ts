export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'maritime' | 'government' | 'energy' | 'enterprise' | 'infrastructure';
  location: string;
  image: string;
  summary: {
    en: string;
    id: string;
  };
  challenge: {
    en: string;
    id: string;
  };
  solution: {
    en: string;
    id: string;
  };
  businessImpact: {
    en: string;
    id: string;
  };
  technologies: string[];
  specs?: string[];
  documentRef?: string;
}

export interface Service {
  id: string;
  title: { en: string; id: string };
  category: string;
  iconName: string;
  description: { en: string; id: string };
  benefits: { en: string[]; id: string[] };
  technologies: string[];
}

export interface TeamMember {
  name: string;
  role: { en: string; id: string };
  certifications: string[];
  bio: { en: string; id: string };
  avatar?: string;
}

export interface Certification {
  code: string;
  name: string;
  issuer: string;
  level: string;
  badgeColor: string;
  image?: string;
}

export const COMPANY_DETAILS = {
  name: "PT. Maudy Network Komunikasi",
  shortName: "MNK",
  tagline: "Empowering Critical Infrastructure Across Land & Sea",
  address: "Jl. Prof. Dr. Hamka BPI Blok A-5, Ngaliyan, Semarang, Jawa Tengah, Indonesia 50184",
  phone: "+62 857-2748-7507",
  tel: "+62 24 76469031",
  email: "support@maudynetwork.id",
  hours: "24/7/365 NOC & Strategic Support",
};

export const CERTIFICATIONS_LIST: Certification[] = [
  {
    code: "CCNP Enterprise",
    name: "Cisco Certified Network Professional Enterprise",
    issuer: "Cisco Systems",
    level: "Elite Enterprise Architecture",
    badgeColor: "#1E5EFF",
    image: "/extracted/img_002.jpg",
  },
  {
    code: "CCNP SP",
    name: "Cisco Certified Network Professional Service Provider",
    issuer: "Cisco Systems",
    level: "Carrier-Grade Core Routing",
    badgeColor: "#0284C7",
  },
  {
    code: "NSE 7 Architect",
    name: "Fortinet NSE 7 Network Security Architect",
    issuer: "Fortinet",
    level: "Tier-1 Enterprise Defense",
    badgeColor: "#DC2626",
    image: "/extracted/img_006.jpg",
  },
  {
    code: "NSE 4 / NSE 1",
    name: "Fortinet Network Security Professional & Associate",
    issuer: "Fortinet",
    level: "NGFW & Perimeter Security",
    badgeColor: "#EA580C",
  },
  {
    code: "MTCINE",
    name: "MikroTik Certified Internetworking Engineer",
    issuer: "MikroTik",
    level: "Top Routing & BGP Authority",
    badgeColor: "#D97706",
    image: "/extracted/img_004.jpg",
  },
  {
    code: "MTCTCE",
    name: "MikroTik Certified Traffic Control Engineer",
    issuer: "MikroTik",
    level: "QoS & Bandwidth Optimization",
    badgeColor: "#059669",
  },
  {
    code: "RSE",
    name: "Ruijie Specialist Engineer",
    issuer: "Ruijie Networks",
    level: "Enterprise Switching & Wi-Fi 6",
    badgeColor: "#2563EB",
    image: "/extracted/img_005.jpg",
  },
  {
    code: "BNSP WebDev",
    name: "Sertifikasi Kompetensi Web Developer",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    level: "National Professional Standard",
    badgeColor: "#7C3AED",
    image: "/extracted/img_007.jpg",
  },
  {
    code: "BNSP Electrical",
    name: "Ahli Madya Pemeriksa Kelaikan Fungsi Elektrikal Gedung",
    issuer: "BNSP - Construction & Safety Services",
    level: "Critical Infrastructure Inspector",
    badgeColor: "#0D9488",
    image: "/extracted/img_008.jpg",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Yahya Hidayatullah",
    role: {
      en: "Chief Executive Officer & Director",
      id: "Direktur Utama & CEO",
    },
    certifications: ["Executive Management", "Enterprise IT Strategy"],
    bio: {
      en: "Visionary leader spearheading MNK's nationwide expansion across high-stakes government, marine fleets, and state-owned enterprises.",
      id: "Pemimpin visioner yang mengarahkan ekspansi strategis MNK dalam infrastruktur nasional, kemaritiman, dan BUMN.",
    },
  },
  {
    name: "Muhammad Yusuf Choirullah",
    role: {
      en: "Operations Manager & Electrical Inspector",
      id: "Operations Manager & Pengawas Elektrikal",
    },
    certifications: ["BNSP Building Electrical Inspector", "Project Management"],
    bio: {
      en: "Directs project delivery, health & safety compliance (HSE), and large-scale infrastructure operations with zero-incident standards.",
      id: "Memimpin operasional proyek, standar kepatuhan K3/HSE, serta eksekusi infrastruktur skala besar dengan standar keandalan tinggi.",
    },
  },
  {
    name: "Ikhwanul Kurnia Rahman",
    role: {
      en: "Technical & Engineering Manager",
      id: "Technical & Engineering Manager",
    },
    certifications: ["Cisco CCNP Enterprise", "Fortinet NSE 7 Architect", "MikroTik MTCINE"],
    bio: {
      en: "Chief network architect overseeing high-availability carrier routing, marine VSAT QoS, and zero-trust cybersecurity implementations.",
      id: "Arsitek jaringan utama yang menguasai routing enterprise, optimasi VSAT kapal, dan protokol keamanan siber zero-trust.",
    },
  },
  {
    name: "Irfan Ardian",
    role: {
      en: "Lead Software & Web Engineer",
      id: "Lead Software & Web Engineer",
    },
    certifications: ["BNSP Certified Web Developer", "Full Stack Cloud Architecture"],
    bio: {
      en: "Architect behind the Molinar.id IoT engine, AP Portal ERP, and GIS Decision Support Systems for critical infrastructure.",
      id: "Pengembang utama ekosistem IoT Molinar.id, ERP AP Portal, serta DSS GIS Irigasi strategis kementerian.",
    },
  },
  {
    name: "Bagus M Rizqiandaru",
    role: {
      en: "Technical Support & NOC Analyst",
      id: "Analis NOC & Dukungan Teknis",
    },
    certifications: ["Network Telemetry Specialist", "Incident Response"],
    bio: {
      en: "Oversees 24/7 real-time NOC surveillance, automated telemetry bot alerts, and rapid SLA escalation matrices.",
      id: "Memantau performa jaringan 24/7 di ruang kontrol NOC, bot alarm cerdas, dan eskalasi penanganan gangguan.",
    },
  },
  {
    name: "Elfano Sultan Syahbana",
    role: {
      en: "Deployment & Infrastructure Engineer",
      id: "Deployment & Infrastructure Engineer",
    },
    certifications: ["Fiber Optics Specialist", "Structured Cabling", "Grounding Systems"],
    bio: {
      en: "Specialist in harsh outdoor installations, deep-trench fiber optic backbones, server rack cable termination, and power grounding.",
      id: "Spesialis instalasi outdoor medan berat, penarikan fiber optik bawah tanah, terminasi data center, dan sistem grounding listrik.",
    },
  },
  {
    name: "Tomi Saputra",
    role: {
      en: "Network & Security Specialist",
      id: "Spesialis Jaringan & Keamanan Siber",
    },
    certifications: ["Ruijie Certified Specialist", "Next-Gen Firewall Admin"],
    bio: {
      en: "Specializes in enterprise switching matrix, VLAN segmentation, hardware firewall provisioning, and Wi-Fi 6 high-density deployments.",
      id: "Ahli konfigurasi switch core, segmentasi VLAN perbankan/kantor, firewall perimeter, dan hotspot enterprise berdensitas tinggi.",
    },
  },
];

export const SERVICES_LIST: Service[] = [
  {
    id: "enterprise-network",
    title: {
      en: "Enterprise Core Network & Cabling",
      id: "Jaringan Enterprise & Data Center",
    },
    category: "Infrastructure",
    iconName: "Network",
    description: {
      en: "Carrier-grade routing, switching, structured fiber optic backbones, and server rack cable termination designed for 99.9% uptime.",
      id: "Desain arsitektur core router, switch distribution, kabel terstruktur fiber optic, dan terminasi data center berstandar internasional.",
    },
    benefits: {
      en: ["Dual-redundancy master/backup WAN failover", "Clean patch-panel cable dressing & labeling", "Sub-millisecond internal latency optimization"],
      id: ["Failover otomatis multi-provider internet", "Perapihan rack & terminasi berstandar industri", "Optimasi latensi rendah dan throughput maksimal"],
    },
    technologies: ["Cisco", "Ruijie", "MikroTik", "CommScope", "Fiber Optic Single-Mode"],
  },
  {
    id: "marine-network",
    title: {
      en: "Marine & Offshore VSAT Network",
      id: "Jaringan Maritim & Kapal (VSAT)",
    },
    category: "Maritime",
    iconName: "Ship",
    description: {
      en: "Specialized satellite communication ecosystem engineered for oceanic tankers, cargo vessels, and offshore oil platforms.",
      id: "Sistem komunikasi internet satelit dan manajemen jaringan maritim di atas kapal tanker dan armada niaga lepas pantai.",
    },
    benefits: {
      en: ["Strict 512 Kbps QoS optimization for 30+ crew", "Real-time vessel position & bandwidth telemetry", "Cloud dashboard for onshore fleet management"],
      id: ["Alokasi bandwidth 512Kbps efisien untuk 30 awak", "Monitoring real-time pemakaian kuota via cloud", "Integrasi portal voucher & captive portal khusus kapal"],
    },
    technologies: ["Marine VSAT", "MikroTik Bandwidth Shaping", "Cloud Telemetry", "Failover Gyro Antennas"],
  },
  {
    id: "cyber-security",
    title: {
      en: "Cyber Security & Threat Defense",
      id: "Keamanan Siber & Pertahanan Jaringan",
    },
    category: "Security",
    iconName: "ShieldCheck",
    description: {
      en: "Architected by Fortinet NSE 7 certified specialists. Next-gen firewall policies, intrusion prevention, deep packet inspection, and zero-trust access.",
      id: "Arsitektur keamanan bersertifikat Fortinet NSE 7 Architect. Perlindungan perimeter, IPS/IDS, inspeksi paket mendalam, dan akses Zero-Trust.",
    },
    benefits: {
      en: ["Proactive vulnerability mitigation", "Granular micro-segmentation & isolated guest VLANs", "Encrypted site-to-site IPsec / SD-WAN tunnels"],
      id: ["Mitigasi proaktif serangan siber & ransomware", "Segmentasi ketat jaringan internal & perimeter", "Tunnel enkripsi aman antar kantor cabang (SD-WAN)"],
    },
    technologies: ["Fortinet FortiGate", "Cisco Secure", "IPsec SD-WAN", "Zero Trust Architecture"],
  },
  {
    id: "smart-iot-telemetry",
    title: {
      en: "Smart IoT & Industrial Telemetry",
      id: "Smart IoT & Telemetri Industri",
    },
    category: "IoT",
    iconName: "Cpu",
    description: {
      en: "Proprietary remote monitoring and telecontrol platform (Molinar.id) connecting field sensors with central decision-makers.",
      id: "Ekosistem telemetri IoT mandiri (Molinar.id) untuk pemantauan presisi sensor temperatur, pintu, daya, dan aktuasi telekontrol jarak jauh.",
    },
    benefits: {
      en: ["Real-time sensor data logging with early anomaly detection", "Remote command execution cutting on-site dispatch costs", "Automated cellular/Wi-Fi failover for remote shelters"],
      id: ["Pencatatan data sensor real-time dengan alarm dini", "Eksekusi telekontrol tanpa perlu teknisi datang ke lokasi", "Konektivitas dual-SIM LTE/Wi-Fi tahan cuaca ekstrem"],
    },
    technologies: ["Molinar.id", "MQTT / Modbus", "Industrial Sensors", "Cellular LTE Gateway"],
  },
  {
    id: "ai-cctv-surveillance",
    title: {
      en: "AI Surveillance & Security Infrastructure",
      id: "CCTV AI & Pengawasan Keamanan Fisik",
    },
    category: "Surveillance",
    iconName: "Camera",
    description: {
      en: "Enterprise multi-floor surveillance maintenance and rugged perimeter outdoor monitoring with trenching, custom poles, and grounding.",
      id: "Pemeliharaan CCTV skala masif (180+ kamera di gedung 22 lantai) dan instalasi tiang pantau outdoor Pertamina dengan proteksi petir.",
    },
    benefits: {
      en: ["High-definition multi-channel NVR health audits", "Fiber optic video transmission with zero lag", "Certified lightning rod grounding protection"],
      id: ["Audit kesehatan NVR dan rekaman rutin berkala", "Distribusi gambar kamera jernih via Fiber Optic", "Instalasi grounding rod proteksi lonjakan listrik"],
    },
    technologies: ["Honeywell", "Hikvision", "NVR Matrix", "Industrial Fiber Extenders"],
  },
  {
    id: "custom-erp-software",
    title: {
      en: "Custom ERP & Enterprise Software",
      id: "Pengembangan ERP & Aplikasi Enterprise",
    },
    category: "Software",
    iconName: "Code2",
    description: {
      en: "Tailored web applications and business portal systems built to automate operations, ticketing, inventory, and cross-department workflows.",
      id: "Rancang bangun aplikasi web portal bisnis (seperti AP Portal) untuk otomatisasi alur kerja operasional, tiket komplain, dan manajemen aset.",
    },
    benefits: {
      en: ["End-to-end requirement mapping to live cloud deployment", "Comprehensive bug regression & staging testing", "Continuous maintenance and SLA performance assurance"],
      id: ["Kustomisasi sesuai alur proses bisnis spesifik", "Pengujian menyeluruh di lingkungan staging", "Pemeliharaan berkelanjutan dan dukungan teknis cepat"],
    },
    technologies: ["React", "Node.js", "PostgreSQL", "REST / GraphQL", "Docker Container"],
  },
  {
    id: "gis-decision-support",
    title: {
      en: "GIS & Decision Support Systems (DSS)",
      id: "Sistem Informasi Geospasial & DSS Irigasi",
    },
    category: "Software",
    iconName: "MapPin",
    description: {
      en: "Strategic national infrastructure digital twins combining geospatial telemetry, meteorological forecasting, and reservoir water management.",
      id: "Transformasi digital infrastruktur strategis nasional: visualisasi geospasial real-time debit air bendungan dan integrasi data BMKG cuaca.",
    },
    benefits: {
      en: ["Live telemetry tracking for major dams (Jatigede, Karedok, Rentang)", "Agricultural crop growth stage forecasting", "Centralized decision dashboard for national food security"],
      id: ["Pemantauan terpusat bendungan utama skala regional", "Analitik siklus tanam dari olah tanah hingga panen", "Penyediaan data akurat penentu kebijakan ketahanan pangan"],
    },
    technologies: ["Web GIS", "BMKG API Weather Integration", "Hydrological Sensors", "Geospatial Analytics"],
  },
  {
    id: "power-factory-simulation",
    title: {
      en: "Electrical Grid Simulation & Studies",
      id: "Simulasi Jaringan Listrik (PowerFactory)",
    },
    category: "Energy",
    iconName: "Zap",
    description: {
      en: "High-voltage grid modeling, load flow analysis, short-circuit calculations, and renewable energy integration using DIgSILENT PowerFactory.",
      id: "Pemodelan transmisi, distribusi, stabilitas daya listrik, dan integrasi energi terbarukan surya/angin dengan DIgSILENT PowerFactory & Solargis.",
    },
    benefits: {
      en: ["Voltage sag and harmonic distortion mitigation", "Optimal Power Flow (OPF) generator dispatch modeling", "Solar yield verification with PVInsight & Solargis"],
      id: ["Analisis kualitas daya (tegangan kedip, harmonisa)", "Optimasi penjadwalan unit pembangkit dan aliran daya", "Kajian kelayakan teknis pembangkit energi terbarukan"],
    },
    technologies: ["DIgSILENT PowerFactory", "Solargis", "PVInsight", "Electrical Grid Modeling"],
  },
  {
    id: "videowall-control-room",
    title: {
      en: "Control Room Video Wall & Command Center",
      id: "Video Wall & Ruang Kontrol (NOC Center)",
    },
    category: "Control Room",
    iconName: "LayoutGrid",
    description: {
      en: "Turnkey multi-screen video display walls engineered with ultra-narrow bezels, commercial matrix processors, and modular aluminum rigging.",
      id: "Instalasi layar pantau video wall multi-panel (LG 49VL5B susunan 2x3), desktop prosesor matriks iBase SI-670E, dan mounting presisi alumunium T-Slot.",
    },
    benefits: {
      en: ["Multi-source matrix layout for simultaneous NOC feeds", "Robust 24/7 continuous operation panels", "Custom tailored audio-video engineering team"],
      id: ["Tampilan matriks multi-layar fleksibel untuk ruang kendali", "Panel display industrial tahan operasional nonstop 24/7", "Struktur rigging T-Slot kokoh dan mudah disesuaikan"],
    },
    technologies: ["LG Commercial Displays", "iBase SI-670E Matrix", "Aluminum T-Slot Rigging", "4K Video Processors"],
  },
  {
    id: "noc-monitoring-alerting",
    title: {
      en: "24/7 Managed NOC & Instant Telegram Bot",
      id: "Layanan NOC 24/7 & Bot Notifikasi Otomatis",
    },
    category: "Managed Services",
    iconName: "Activity",
    description: {
      en: "Round-the-clock proactive infrastructure surveillance with automated bot alerting (PIS_BOT) executing instant traceroutes and notifications.",
      id: "Pemantauan proaktif nonstop dengan integrasi bot notifikasi (PIS_BOT) yang otomatis melakukan traceroute saat host terputus.",
    },
    benefits: {
      en: ["Mean time to detect (MTTD) under 30 seconds", "Automated monthly SLA performance and latency audits", "Immediate escalation to senior certified network engineers"],
      id: ["Deteksi dini gangguan jaringan dalam hitungan detik", "Laporan kepatuhan SLA berkala secara bulanan", "Penanganan langsung oleh tim spesialis bersertifikasi"],
    },
    technologies: ["PIS_BOT Telegram Bot", "ICMP Ping Matrix", "Zabbix / Prometheus", "Auto Traceroute"],
  },
  {
    id: "poc-radio-cellular",
    title: {
      en: "Push-to-Talk Over Cellular (PoC Radio)",
      id: "Radio Digital PoC Hytera & Dispatcher",
    },
    category: "Communications",
    iconName: "Radio",
    description: {
      en: "Next-gen nationwide tactical voice communications using Hytera PNC380 GSM hardware integrated with POCStars central dispatch consoles.",
      id: "Pengadaan dan tata kelola 30 unit radio komunikasi GSM Hytera PNC380 untuk Pertamina International Shipping lengkap dengan dashboard lokasi POCStars.",
    },
    benefits: {
      en: ["Nationwide voice coverage without repeater towers", "Central dispatcher console with real-time GPS speaker locator", "Dynamic talkgroup permissions and priority override"],
      id: ["Jangkauan komunikasi nasional via jaringan seluler", "Pemantauan visual posisi pengguna dan perekam suara", "Manajemen hak akses bicara antar unit kerja cabang"],
    },
    technologies: ["Hytera PNC380", "POCStars Dispatcher", "GSM LTE Cellular", "GPS Telemetry"],
  },
  {
    id: "mission-critical-event-it",
    title: {
      en: "Mission-Critical Event IT & Live Redundancy",
      id: "Infrastruktur Jaringan Event & KTT Strategis",
    },
    category: "Specialized",
    iconName: "Wifi",
    description: {
      en: "High-availability redundant connectivity, dual-provider load balancing, and dedicated on-site engineers for prestigious summits and ceremonies.",
      id: "Penyediaan infrastruktur internet berkeandalan tinggi dengan dual-provider master-backup dan teknisi siaga di tempat (Pertamina Economic Outlook, VLCC Ceremony).",
    },
    benefits: {
      en: ["Zero-downtime dual-WAN active-backup failover", "On-site senior network engineers monitoring live streams", "High-density attendee Wi-Fi with isolated VIP traffic"],
      id: ["Jaminan koneksi tanpa putus dengan skema dual-ISP", "Teknisi standby memastikan kelancaran siaran langsung", "Manajemen bandwidth prioritas untuk tamu VIP dan direksi"],
    },
    technologies: ["Dual-WAN Load Balancer", "Ruijie High-Density Wi-Fi", "Dedicated On-Site Engineers", "Traffic Priority Shaping"],
  },
];

export const PROJECTS_LIST: Project[] = [
  {
    id: "pertamina-vessel-vsat",
    title: "Vessel VSAT Ecosystem & Bandwidth Optimization",
    client: "PT. Pertamina International Shipping",
    category: "maritime",
    location: "Offshore Fleet (Tanker Pertamina Prime & Vessels)",
    image: "/extracted/img_013.jpg",
    summary: {
      en: "Complete hardware & software deployment for maritime satellite communications, vessel cloud monitoring, and high-efficiency bandwidth division.",
      id: "Instalasi ekosistem VSAT software dan hardware IT di atas armada kapal tanker Pertamina, menghadirkan internet satelit dan monitoring cloud.",
    },
    challenge: {
      en: "Extremely restricted oceanic satellite bandwidth (512 Kbps total) that needed to serve operational bridge telemetry, vessel sensors, and 30+ crew members simultaneously without dropping mission data.",
      id: "Keterbatasan bandwidth satelit di tengah laut (hanya 512 Kbps) yang harus melayani komunikasi operasional anjungan, sensor kapal, dan kebutuhan 30 kru tanpa gangguan.",
    },
    solution: {
      en: "Architected custom priority-based QoS shaping, separated operational/crew traffic via captive portal vouchers, and connected the fleet to a central cloud dashboard for real-time latency auditing.",
      id: "Membangun arsitektur QoS berbasis prioritas kebutuhan, sistem captive portal voucher pintar untuk kru, dan dashboard monitoring via cloud untuk kantor pusat.",
    },
    businessImpact: {
      en: "Guaranteed 100% bridge connectivity uptime while maintaining positive crew welfare and real-time remote visibility for onshore superintendents.",
      id: "Menjamin kelancaran komunikasi kritis navigasi kapal serta memberikan akses komunikasi stabil bagi kru kapal.",
    },
    technologies: ["Marine VSAT", "MikroTik Core Router", "Cloud Fleet Dashboard", "Captive Portal"],
    specs: ["512 Kbps Satellite Link", "30+ Active Vessel Crew", "24/7 Cloud Remote Auditing"],
    documentRef: "BAST-2023-07-12-2576434 & Kontrak Core Network HA",
  },
  {
    id: "pertamina-pis-monitoring-bot",
    title: "PIS_BOT Network Monitoring & Automated Telemetry",
    client: "PT. Pertamina International Shipping",
    category: "infrastructure",
    location: "Jakarta Headquarters & Branch Offices",
    image: "/extracted/img_018.jpg",
    summary: {
      en: "Automated network health monitoring and proactive Telegram alert bot capable of immediate automated traceroute diagnostics upon packet loss.",
      id: "Pembangunan aplikasi sistem monitoring dan alarm perangkat jaringan IT otomatis untuk meminimalisir jeda gangguan kerja.",
    },
    challenge: {
      en: "Network anomalies across distributed branch offices and vessels were previously detected only after manual end-user complaints, leading to prolonged troubleshooting cycles.",
      id: "Gangguan jaringan di kantor cabang dan armada laut sebelumnya sering terlambat diketahui, menunggu laporan manual dari staf pengguna.",
    },
    solution: {
      en: "Built a customized monitoring daemon (PIS_BOT) that runs sub-second ping polls, registers all critical hosts, automatically fires Telegram notifications, and executes instant traceroutes upon downtime.",
      id: "Mengembangkan daemon monitoring mandiri (PIS_BOT) dengan layout registrasi perangkat, notifikasi alarm instan Telegram, dan auto-traceroute 15 hops.",
    },
    businessImpact: {
      en: "Cut mean-time-to-detection (MTTD) to under 30 seconds with monthly uptime metrics consistently exceeding 99.91%.",
      id: "Mempercepat waktu respon penanganan insiden hingga di bawah 30 detik dengan catatan uptime bulanan mencapai 99.91%.",
    },
    technologies: ["Telegram Bot API", "Network Daemon", "ICMP Telemetry", "Automated Traceroute Engine"],
    specs: ["Sub-second polling interval", "Automated 15-hop traceroute analysis", "Monthly SLA compliance reporting"],
    documentRef: "SPK No. 130/P15124000/2020-S0 & BAST",
  },
  {
    id: "bumn-cctv-maintenance",
    title: "Critical Multi-Floor CCTV Security Maintenance",
    client: "Kementerian BUMN Republik Indonesia",
    category: "government",
    location: "Kementerian BUMN Tower, 22 Floors, Jakarta",
    image: "/extracted/img_058.jpg",
    summary: {
      en: "Comprehensive preventive maintenance and diagnostic servicing for 180 enterprise Honeywell surveillance cameras and 14 NVR recording matrices.",
      id: "Pekerjaan pemeliharaan preventif dan perbaikan sistem CCTV keamanan sejumlah 180 titik kamera Honeywell di gedung 22 lantai.",
    },
    challenge: {
      en: "High-security ministerial complex operating 24/7 requiring zero interruption to physical surveillance, complex video wall synchronization, and continuous multi-month archival validation.",
      id: "Gedung kementerian dengan protokol keamanan tinggi membutuhkan pengawasan tanpa henti pada 22 lantai serta validasi rekaman 14 unit NVR.",
    },
    solution: {
      en: "Structured periodic optic cleaning, electrical continuity testing, network video troubleshooting, NVR storage health check-and-recheck audits, and video wall signal matrix realignment.",
      id: "Pembersihan lensa 180 titik kamera Honeywell, audit kesehatan rekaman 14 unit NVR selama 2 bulan ke belakang, dan kalibrasi video wall pemantau.",
    },
    businessImpact: {
      en: "100% operational camera availability across all ministerial executive floors, conference halls, and access perimeters.",
      id: "Memastikan seluruh kamera dan alat perekam dalam status sehat optimal tanpa blind-spot pada seluruh lantai kementerian.",
    },
    technologies: ["Honeywell CCTV", "14x Enterprise NVRs", "Digital CCTV Matrix", "Video Wall Integration"],
    specs: ["180 Honeywell Cameras", "22 High-Rise Floors", "14 NVR Recording Units"],
    documentRef: "Surat Perintah Kerja (SPK) No. 001/AP-SK/KMR/01-2024",
  },
  {
    id: "pupr-rentang-irrigation-dss",
    title: "Rentang Irrigation Modernization: Web GIS & DSS",
    client: "Kementerian PUPR Republik Indonesia",
    category: "government",
    location: "Rentang, Jatigede & Karedok Basin, West Java",
    image: "/extracted/img_067.jpg",
    summary: {
      en: "Web-based geospatial Decision Support System (DSS) integrating interactive GIS watershed mapping, hydrological sensor telemetry, and crop analytics.",
      id: "Sistem Pendukung Keputusan (DSS) Irigasi berbasis web dan geospasial untuk memantau kelancaran distribusi air dan produktivitas lahan skala regional.",
    },
    challenge: {
      en: "Managing water distribution across vast agricultural regions and multiple major dams while coordinating varying crop cycles, localized rainfall, and extreme climate fluctuations.",
      id: "Koordinasi pembagian debit air bendungan besar ke ribuan hektar sawah petani dengan kebutuhan musim tanam yang dinamis dan fluktuasi curah hujan.",
    },
    solution: {
      en: "Built a centralized GIS & telemetry portal visualizing P3A agricultural areas, rainfall stations, dam conditions (Jatigede, Karedok, Rentang), and direct API integration with BMKG meteorological forecasts.",
      id: "Membangun portal GIS interaktif terintegrasi sensor telemetri bendungan (Jatigede, Karedok, Rentang), data stasiun curah hujan, dan sinkronisasi cuaca BMKG.",
    },
    businessImpact: {
      en: "Empowered regional water basin authorities to make data-driven gate adjustments, mitigating drought risks and directly supporting national food security.",
      id: "Mendukung efisiensi alokasi distribusi air irigasi, optimalisasi masa tanam petani, dan ketahanan pangan nasional.",
    },
    technologies: ["Web GIS Engine", "BMKG Weather API", "Hydrological Telemetry", "Geospatial Decision Models"],
    specs: ["3 Major Reservoirs Integrated", "Multi-layer P3A Basin Mapping", "Real-time Precipitation Sensor Logging"],
    documentRef: "Rentang Irrigation Modernization Project PUPR",
  },
  {
    id: "pertamina-power-digsilent",
    title: "Comprehensive Grid Modeling & Power Studies",
    client: "PT. Pertamina Power Indonesia",
    category: "energy",
    location: "Pertamina Power Headquarters, Jakarta",
    image: "/extracted/img_047.jpg",
    summary: {
      en: "High-voltage transmission, distribution, and renewable energy modeling using DIgSILENT PowerFactory alongside solar irradiation analytics.",
      id: "Pemodelan berbagai jenis jaringan listrik termasuk transmisi, distribusi, pembangkitan energi terbarukan, serta studi kualitas daya.",
    },
    challenge: {
      en: "Assessing transient stability, load flow parameters, and harmonic distortion for complex industrial power generation facilities and solar farm interconnects.",
      id: "Menganalisis stabilitas transien, aliran daya, tegangan kedip (voltage sag), dan harmonisa pada integrasi pembangkit energi terbarukan.",
    },
    solution: {
      en: "Delivered licensed software deployments, customized modeling templates, Optimal Power Flow (OPF) unit commitment scheduling, and Solargis/PVInsight subscription provisioning.",
      id: "Penyediaan software package DIgSILENT PowerFactory, analisis Optimal Power Flow (OPF), dan pengadaan lisensi PVInsight serta Solargis.",
    },
    businessImpact: {
      en: "Enabled Pertamina Power engineers to simulate complex grid scenarios, prevent voltage sags, and optimize renewable generation yield.",
      id: "Memberikan kepastian kelayakan teknis jaringan dan efisiensi penjadwalan pembangkit listrik ramah lingkungan.",
    },
    technologies: ["DIgSILENT PowerFactory", "Solargis License", "PVInsight Platform", "OPF Optimization Engine"],
    specs: ["Load Flow & Short-Circuit Analysis", "Harmonic & Protection Studies", "Solar Resource Analytics"],
    documentRef: "Kontrak No. SP-001/PP140010/2023-S0",
  },
  {
    id: "universitas-pertamina-assessment",
    title: "Campus-Wide IT Infrastructure Assessment & Redesign",
    client: "Universitas Pertamina",
    category: "enterprise",
    location: "Simprug Campus, Gedung Pemuda MTC, Gedung Perwira KP",
    image: "/extracted/img_043.jpg",
    summary: {
      en: "Comprehensive technical audit, physical cable tracing, topology redesign, and modernization report for aging campus network systems.",
      id: "Pengecekan kualitas perangkat dan jaringan, analisis uji kelayakan sistem IT, dan pembuatan cetak biru peta topologi efisien.",
    },
    challenge: {
      en: "Legacy multi-building campus network with over 7 years of unmanaged undocumented cable sprawl, undocumented switches, and intermittent broadcast storms.",
      id: "Jaringan kampus telah berusia lebih dari 7 tahun tanpa peta dokumentasi topologi resmi, menyebabkan kelambatan data dan kesulitan maintenance.",
    },
    solution: {
      en: "Conducted physical and logical topology mapping across Simprug, Gedung Pemuda MTC, and Gedung Perwira KP, presenting an optimized modular fiber optic distribution proposal.",
      id: "Melakukan audit menyeluruh pada 3 kompleks gedung, penelusuran jalur kabel, dan perancangan kembali arsitektur fiber optik modular.",
    },
    businessImpact: {
      en: "Delivered a certified Network Assessment & Modernization Blueprint accepted with formal BAST by university ICT leadership.",
      id: "Memberikan panduan restrukturisasi jaringan resmi (BAST disahkan) yang mengeliminasi bottleneck jaringan civitas akademika.",
    },
    technologies: ["Cisco Switching", "Fiber Optic Backbone", "Network Topology Mapping", "Fluke Cable Certification"],
    specs: ["3 Campus Multi-Story Facilities", "Complete Cable Tracing", "Engineered Topology Redesign"],
    documentRef: "BAST-2023-03-10-2901417 & PO/SO PO-2022-12-15-2901417",
  },
  {
    id: "airkon-pratama-erp-portal",
    title: "AP Portal: Custom Enterprise ERP Web Application",
    client: "PT. Airkon Pratama",
    category: "enterprise",
    location: "Jakarta & National Operations",
    image: "/extracted/img_061.jpg",
    summary: {
      en: "Full-lifecycle design, engineering, and maintenance of the proprietary AP Portal ERP system for field maintenance, ticketing, and business reporting.",
      id: "Pengembangan sistem Enterprise Resource Planning (ERP) AP Portal berbasis web yang disesuaikan dengan alur proses bisnis perusahaan.",
    },
    challenge: {
      en: "Manual paper-heavy tracking of hundreds of HVAC maintenance tickets, technician assignments, and hospital cooling system service level agreements.",
      id: "Pencatatan ribuan tiket servis AC dan tata udara rumah sakit yang sebelumnya dilakukan secara manual dan rentan keterlambatan penanganan.",
    },
    solution: {
      en: "Engineered a custom responsive web application with role-based access control, ticket status visualization, SLA countdown timers, and automated executive reporting.",
      id: "Mengembangkan aplikasi AP Portal lengkap dengan modul data collection, dashboard grafik tiket, manajemen teknisi, dan pemantauan server berkelanjutan.",
    },
    businessImpact: {
      en: "Over 900+ service tickets processed with real-time auditability, drastically accelerating dispatch turnaround time for critical medical and commercial clients.",
      id: "Mengelola lebih dari 900+ tiket servis secara terintegrasi dan transparan bagi manajemen maupun klien institusional.",
    },
    technologies: ["Custom Web Framework", "Relational Database", "Role-Based Access Control", "Automated Ticketing Workflow"],
    specs: ["900+ Active Service Tickets Handled", "Continuous Maintenance Contract", "Multi-Tier User Permissions"],
    documentRef: "Kontrak Pengembangan AP Portal & Maintenance",
  },
  {
    id: "pertamina-outdoor-monitoring",
    title: "Asset Security Perimeter: Trenching & Solar/FO CCTV",
    client: "PT. Pertamina (Persero)",
    category: "infrastructure",
    location: "Pertamina Land Assets & Access Corridors",
    image: "/extracted/img_029.jpg",
    summary: {
      en: "Heavy-duty outdoor surveillance installation including ground civil foundations, custom pole fabrication, trenching, fiber optic backhaul, and grounding rods.",
      id: "Pemasangan tiang CCTV outdoor untuk monitoring lahan Pertamina, mulai dari survei titik, penggalian kabel, cor pondasi, hingga grounding elektrikal.",
    },
    challenge: {
      en: "Harsh outdoor environment exposed to high tropical lightning strikes, vehicular road traffic, and extended distances between perimeter boundaries and monitoring centers.",
      id: "Lokasi outdoor terbuka yang rawan sambaran petir, dilalui kendaraan berat, serta jarak kabel yang jauh dari ruang kendali.",
    },
    solution: {
      en: "Engineered deep concrete foundations, industrial enclosure boxes with weatherproofing, dedicated grounding rods driven deep into soil, and single-mode fiber optic signal distribution.",
      id: "Pembuatan pondasi beton kokoh, tiang kustom, instalasi grounding rod penangkal lonjakan listrik, serta penarikan kabel fiber optik tahan cuaca.",
    },
    businessImpact: {
      en: "24/7 clear perimeter visibility protecting strategic national land assets with zero equipment damage from seasonal lightning storms.",
      id: "Pengamanan aset lahan strategis terjaga 24 jam dengan sistem yang tahan terhadap cuaca ekstrem dan sambaran petir.",
    },
    technologies: ["Outdoor CCTV", "Fiber Optic Trenching", "Grounding Rod System", "Weatherproof IP66 Enclosures"],
    specs: ["High-Impact Steel Poles", "Industrial Grounding Rods", "Direct-Burial Armored Fiber"],
    documentRef: "Proyek Instalasi Outdoor Monitoring Lahan Pertamina",
  },
  {
    id: "lg-videowall-noc",
    title: "Command Center LG Video Wall (2x3 Matrix)",
    client: "Corporate Command Center",
    category: "infrastructure",
    location: "Executive Monitoring Room",
    image: "/extracted/img_054.jpg",
    summary: {
      en: "Turnkey installation of a 6-panel (2x3) LG 49VL5B commercial ultra-narrow bezel video wall driven by an iBase SI-670E digital signage processor.",
      id: "Pemasangan video wall display ukuran 49 inch model LG 49VL5B susunan panel 2x3 dengan desktop prosesor iBase SI-670E.",
    },
    challenge: {
      en: "Requiring razor-thin bezel alignment across six independent 49-inch panels on a custom acoustic partition with vibration-free stability and clean cable concealment.",
      id: "Penyusunan 6 panel display ukuran besar dengan batas bezel ultra-tipis yang harus terpasang rata sempurna dan bebas distorsi visual.",
    },
    solution: {
      en: "Deployed custom-engineered modular aluminum T-Slot mounting frames allowing millimeter-level micro-adjustments, paired with high-performance multi-head graphical processors.",
      id: "Menggunakan mounting alumunium T-Slot presisi tinggi yang mudah dikalibrasi serta desktop prosesor matriks khusus audio video.",
    },
    businessImpact: {
      en: "Flawless real-time command-and-control visualization of multi-feed security cameras and network telemetry for executive decision-makers.",
      id: "Menghadirkan pusat kendali visual modern dengan tampilan multi-layar jernih untuk pemantauan operasional strategis.",
    },
    technologies: ["LG 49VL5B Commercial Displays", "iBase SI-670E Processor", "Aluminum T-Slot Rigging", "4K HDMI Matrix"],
    specs: ["6x 49-inch Ultra-Narrow Bezel Panels", "2x3 Grid Formation", "Millimeter-Precision Aluminum Mounting"],
    documentRef: "Work Order Instalasi Video Wall Command Center",
  },
  {
    id: "hytera-radio-poc",
    title: "Nationwide Digital PoC Tactical Radio Network",
    client: "PT. Pertamina International Shipping",
    category: "maritime",
    location: "30 Branch Offices Across Indonesia",
    image: "/extracted/img_035.jpg",
    summary: {
      en: "Provisioning and software integration of 30 Hytera PNC380 Push-to-Talk Over Cellular (PoC) terminals connected via POCStars central dispatch.",
      id: "Pengadaan hardware dan software 30 unit radio GSM Hytera PNC380 beserta pengembangan dashboard POCStars untuk komunikasi antar kantor cabang.",
    },
    challenge: {
      en: "Traditional VHF/UHF marine radios could not communicate beyond coastal horizons, isolating port field coordinators from regional management offices.",
      id: "Radio konvensional memiliki jangkauan terbatas dan tidak dapat menghubungkan petugas lapangan pelabuhan dengan manajemen di berbagai pulau.",
    },
    solution: {
      en: "Supplied Hytera PNC380 GSM-enabled terminals paired with a unified POCStars web dispatcher featuring dynamic audio recording, talkgroup controls, and real-time GPS speaker mapping.",
      id: "Menghadirkan HT Radio PoC Hytera berbasis seluler dengan dashboard POCStars yang mampu memetakan lokasi pembicara dan mengatur hak akses panggilan.",
    },
    businessImpact: {
      en: "Instant zero-latency voice coordination across all 30 Indonesian shipping branches without erecting costly private radio repeater infrastructure.",
      id: "Komunikasi taktis instan tanpa batas geografis dengan efisiensi biaya infrastruktur yang signifikan.",
    },
    technologies: ["Hytera PNC380 Handsets", "POCStars Web Dispatcher", "GSM Cellular Data", "GPS Geolocation Mapping"],
    specs: ["30 Distributed Field Terminals", "Nationwide Cellular Coverage", "Instant Voice Logging & Geofencing"],
    documentRef: "Kontrak Berlangganan Radio PoC No. 0101/KONTRAK/I/2023",
  },
  {
    id: "high-profile-event-it",
    title: "High-Availability Event IT for Strategic Summits",
    client: "PT. Pertamina (Persero) Holding",
    category: "enterprise",
    location: "Various Venues (Pertamina Economic Outlook, VLCC Ceremony)",
    image: "/extracted/img_038.jpg",
    summary: {
      en: "Mission-critical dual-ISP active-backup network connectivity and on-site engineering support for high-stakes corporate ceremonies.",
      id: "Penyediaan koneksi internet dual-provider (master dan backup) untuk High Availability serta penjagaan teknisi siaga di lokasi selama acara.",
    },
    challenge: {
      en: "Live-streamed corporate summits attended by national ministers and Pertamina executive boards where any packet loss or latency spike would disrupt global broadcasts.",
      id: "KTT bergengsi yang disiarkan langsung secara nasional dan dihadiri direksi BUMN, di mana gangguan koneksi sedetik pun tidak dapat ditoleransi.",
    },
    solution: {
      en: "Engineered dual-WAN routing with instantaneous sub-second failover between separate fiber ISPs, isolated VIP presentation VLANs, and active live traffic monitoring.",
      id: "Instalasi 2 provider internet terpisah dengan sistem failover otomatis, pemisahan VLAN khusus streaming, dan teknisi bersertifikat siaga 24 jam.",
    },
    businessImpact: {
      en: "100% uninterrupted broadcast uptime and flawless VIP connectivity across all supported events (ECO Run, Synergy Forum, Ceremony VLCC, Pertamina Economic Outlook).",
      id: "Kelancaran penuh tanpa jeda pada seluruh rangkaian perhelatan akbar Pertamina dengan laporan performa resmi (Connection Report).",
    },
    technologies: ["Dual-ISP Active/Backup Failover", "Enterprise Managed Switches", "Dedicated On-Site Engineering", "QoS Priority Bandwidth"],
    specs: ["Sub-second automatic failover", "Zero dropped broadcast packets", "Connection Report verified"],
    documentRef: "Connection Report Pertamina Economic Outlook & Ceremony VLCC",
  },
];

export const PRODUCTS_LIST = [
  {
    id: "xtur-ai",
    name: "XTUR AI Vision Surveillance",
    tagline: "Autonomous Multi-Stream AI Computer Vision & Neural Edge Analytics",
    category: "AI Vision & Surveillance",
    image: "/xtur/xtur-overview-poster.jpg",
    gallery: [
      "/xtur/01-dashboard-overview.png",
      "/xtur/02-detection-logs.png",
      "/xtur/03-cameras-monitor.png",
      "/xtur/06-engine-health.png"
    ],
    directUrl: "/#xtur",
    hashAlias: ["xtur", "xtur-ai"],
    description: {
      en: "Enterprise-grade autonomous AI computer vision platform engineered by MNK. Powers multi-camera video analytics with sub-5ms neural edge inference, 57-region ANPR/ALPR automated license recognition, perimeter intrusion alerts, and HSE safety compliance (PPE hardhat/vest detection) across 64+ RTSP camera streams.",
      id: "Platform pengawasan CCTV kecerdasan buatan (AI Vision) otonom kelas enterprise rancangan MNK. Menyajikan analisis video multi-kamera dengan inferensi edge saraf <5ms, pengenalan plat nomor otomatis (ANPR) 57 wilayah, radar intrusi perimeter, dan audit kepatuhan K3 keselamatan kerja pada 64+ kamera serentak."
    },
    capabilities: [
      {
        title: { en: "Sub-5ms Neural Edge Inference", id: "Inferensi Saraf Edge Sub-5ms" },
        desc: { en: "Hardware-accelerated YOLO & TensorRT computer vision models executing real-time multi-target classification and tracking at 4.2ms GPU latency.", id: "Akselerasi inferensi YOLO & TensorRT pada edge GPU berkecepatan 4.2ms tanpa bergantung pada latensi cloud eksternal." }
      },
      {
        title: { en: "57-Region ANPR & Vehicle Telemetry", id: "ANPR 57 Wilayah & Telemetri Kendaraan" },
        desc: { en: "Autonomous license plate recognition with instantaneous character extraction, vehicle class identification, speed estimation, and blacklist hotlist alarms.", id: "Identifikasi otomatis nomor polisi kendaraan di 57 kode wilayah nasional, klasifikasi tipe kendaraan, dan alarm instan daftar hitam (blacklist)." }
      },
      {
        title: { en: "Industrial HSE & Zone Intrusion Matrix", id: "Kepatuhan K3 & Intrusi Perimeter Digital" },
        desc: { en: "Automated optical inspection for safety helmets, high-vis vests, fire/smoke anomalies, and forbidden zone breach detection with instantaneous webhook dispatch.", id: "Deteksi otomatis kepatuhan APD (helm proyek, rompi), anomali asap/api, serta peringatan pelanggaran batas zona bahaya via webhook instan." }
      }
    ],
    liveMetrics: {
      inferenceLatency: "4.2 ms",
      cameraStreams: "64+ RTSP",
      detectionAccuracy: "99.2%",
      edgeArchitecture: "TensorRT / GPU"
    }
  },
  {
    id: "aegis-maritime",
    name: "Aegis Maritime Suite",
    tagline: "Zero-Trust Maritime Cyber-Defense & Satellite Bandwidth QoS Suite",
    category: "Maritime Cyber Defense",
    image: "/products/aegis-maritime.jpg",
    directUrl: "/#aegis",
    hashAlias: ["aegis", "aegis-maritime"],
    description: {
      en: "Mission-critical maritime cyber-defense ecosystem deployed across oceanic fleets and VLCC crude tankers (including Pertamina International Shipping). Integrates Fortinet NSE 7 zero-trust NGFW perimeter isolation, deep packet inspection at sea, and intelligent VSAT/Starlink satellite QoS bandwidth optimization.",
      id: "Suite pertahanan siber kemaritiman misi kritis yang dioperasikan pada armada kapal tanker samudra dan VLCC (termasuk PT Pertamina International Shipping). Memadukan firewall zero-trust Fortinet NSE 7, inspeksi paket mendalam di laut lepas, dan orkestrasi QoS satelit VSAT/Starlink cerdas."
    },
    capabilities: [
      {
        title: { en: "Zero-Trust Fleet Perimeter Defense", id: "Perlindungan Perimeter Kapal Zero-Trust" },
        desc: { en: "Isolates operational OT shipboard navigation (ECDIS, gyro, engine telemetry) from crew entertainment networks with military-grade firewalling and automated quarantine.", id: "Memisahkan jaringan OT navigasi kritis kapal (ECDIS, gyro, telemetri mesin) dari jaringan internet kru dengan isolasi VLAN militer dan karantina malware otomatis." }
      },
      {
        title: { en: "Mission-Critical VSAT Satellite QoS", id: "Manajemen QoS Bandwidth Satelit VSAT" },
        desc: { en: "Dynamic bandwidth traffic shaping that guarantees mission-critical navigation and corporate VoIP packet delivery even on congested 512Kbps maritime satellite channels.", id: "Shaping traffic dinamis yang menjamin prioritas paket navigasi resmi dan VoIP darurat tetap lancar meski di bandwidth satelit terbatas 512Kbps." }
      },
      {
        title: { en: "Multi-Orbit Failover Telemetry", id: "Telemetri Failover Multi-Orbit Satelit" },
        desc: { en: "Sub-second automated failover orchestrator switching between Starlink LEO, Inmarsat GEO, and coastal 4G/5G cellular modems with continuous packet health telemetry.", id: "Orkestrator failover otomatis sub-detik antara satelit Starlink LEO, Inmarsat GEO, dan seluler pesisir 4G/5G dengan pantauan kesehatan paket konstan." }
      }
    ],
    liveMetrics: {
      vesselsProtected: "30+ Tankers",
      satelliteSLA: "99.98%",
      failoverSpeed: "< 800 ms",
      securityStandard: "IMO 2021 & NIST"
    }
  },
  {
    id: "molinar-id",
    name: "Molinar.id",
    tagline: "Proprietary End-to-End Industrial IoT & Telemetry Platform",
    category: "Industrial IoT",
    image: "/extracted/img_068.jpg",
    description: {
      en: "An integrated hardware-software ecosystem engineered by MNK to deliver absolute control over distributed physical infrastructure, remote shelters, and network assets.",
      id: "Ekosistem terpadu rancangan mandiri MNK yang memadukan keandalan hardware industri dengan kecerdasan software telemetri jarak jauh.",
    },
    capabilities: [
      {
        title: { en: "Advanced Telemetry & Data Logging", id: "Telemetri Presisi & Pencatatan Data" },
        desc: { en: "High-precision real-time sensor acquisition for ambient temperature, door contact security, battery voltage, and dual LTE/Wi-Fi signal status with early anomaly thresholds.", id: "Akuisisi data sensor real-time (suhu, akses pintu, voltase, status LTE/Wi-Fi) dengan tingkat presisi tinggi untuk deteksi dini anomali." }
      },
      {
        title: { en: "Smart Telecontrol & Automation", id: "Telekontrol Cerdas & Otomasi Jarak Jauh" },
        desc: { en: "Execute remote device reboots, power cycling, and automated failover rules from anywhere, eliminating redundant on-site technician dispatches.", id: "Kemampuan eksekusi perintah jarak jauh dan pengaturan otomasi sistem, memangkas biaya operasional dan kebutuhan kunjungan teknisi." }
      },
      {
        title: { en: "Unified Surveillance & Network Matrix", id: "Integrasi Pengawasan Visual & Jaringan" },
        desc: { en: "Consolidates live ICMP ping telemetry, uptime graphs, and server CPU loads with RTSP CCTV camera surveillance into a single unified glass dashboard.", id: "Mengintegrasikan pemantauan performa jaringan (live ping, uptime, utilisasi) dengan sistem pengawasan visual CCTV ke satu layar sentral." }
      }
    ],
    liveMetrics: {
      sensorsRegistered: "1,240+",
      telemetryPointsPerDay: "3.8M",
      batteryLifeAudited: "100%",
      remoteFailoverTime: "< 3s"
    }
  },
  {
    id: "ap-portal-erp",
    name: "AP Portal",
    tagline: "Intelligent Enterprise Resource Planning & Field Ops WebApp",
    category: "Enterprise Software",
    image: "/extracted/img_061.jpg",
    description: {
      en: "Purpose-built modular ERP web application automating maintenance service tickets, equipment lifecycles, and SLA compliance tracking for commercial clients.",
      id: "Aplikasi portal bisnis ERP kustom untuk mengotomasi penanganan tiket servis, jadwal teknisi, dan pemantauan SLA sistem tata udara komersial.",
    },
    capabilities: [
      {
        title: { en: "Automated Ticket Workflow", id: "Alur Kerja Tiket Terotomasi" },
        desc: { en: "Real-time ticket logging, automated technician dispatch, and customer approval signatures with live resolution countdowns.", id: "Pencatatan tiket cepat, penugasan teknisi otomatis, dan tanda tangan digital berita acara servis." }
      },
      {
        title: { en: "Asset & Preventive Maintenance Registry", id: "Registrasi Aset & Jadwal Preventif" },
        desc: { en: "Tracks service histories and warranty cycles across hundreds of distributed commercial installations.", id: "Riwayat servis terperinci untuk setiap unit mesin pelanggan dengan peringatan jadwal servis berkala." }
      },
      {
        title: { en: "Executive Analytics & SLA Dashboard", id: "Dashboard Analitik & Pemantauan SLA" },
        desc: { en: "Provides management with instant visibility into open, in-progress, and resolved tickets across regional accounts.", id: "Grafik performa penyelesaian komplain dan kepatuhan SLA secara real-time untuk pengambil keputusan." }
      }
    ],
    liveMetrics: {
      ticketsProcessed: "900+",
      slaAdherence: "99.4%",
      averageDispatchTime: "12 min",
      activeEnterprises: "45+"
    }
  },
  {
    id: "dss-irigasi",
    name: "GIS Decision Support System (DSS)",
    tagline: "Strategic Water Resource & Irrigation Management Platform",
    category: "Public Infrastructure & GIS",
    image: "/extracted/img_067.jpg",
    description: {
      en: "Geospatial intelligence platform designed for national river basin authorities and public works ministries to optimize reservoir discharge and crop yields.",
      id: "Platform digital geospasial strategis kementerian untuk memantau kelancaran pasokan air bendungan utama dan analitik produktivitas pertanian.",
    },
    capabilities: [
      {
        title: { en: "GIS & Watershed Telemetry", id: "Visualisasi Peta GIS & Sensor Debit" },
        desc: { en: "Interactive real-time map displaying P3A agricultural sectors, rainfall stations, climatology posts, and river level sensors.", id: "Visualisasi peta interaktif mencakup area P3A, stasiun curah hujan, klimatologi, dan sensor ketinggian air." }
      },
      {
        title: { en: "Dam & Reservoir Centralization", id: "Pemantauan Terpusat Bendungan Utama" },
        desc: { en: "Consolidated telemetry for major dams including Jatigede, Karedok, and Rentang with water level trend projections.", id: "Monitoring terpusat status tampungan air bendungan Jatigede, Karedok, dan Rentang." }
      },
      {
        title: { en: "Agricultural Life Cycle & BMKG Forecasts", id: "Analisis Siklus Tanam & Integrasi BMKG" },
        desc: { en: "Models crop growing stages from initial soil tilling through harvest, cross-referenced with live BMKG meteorological projections.", id: "Pemantauan fase tanam padi terintegrasi langsung dengan prakiraan cuaca resmi BMKG." }
      }
    ],
    liveMetrics: {
      damsMonitored: "3 Major",
      hectaresCovered: "90,000+ Ha",
      weatherSyncInterval: "15 min",
      telemetryReliability: "99.9%"
    }
  },
  {
    id: "pis-bot-noc",
    name: "PIS_BOT Network Sentinel",
    tagline: "Automated Proactive NOC Telemetry & Incident Auto-Diagnostics",
    category: "Network Monitoring",
    image: "/extracted/img_018.jpg",
    description: {
      en: "Mission-critical network daemon and bot developed by MNK to eliminate detection latency across corporate and maritime network topologies.",
      id: "Aplikasi sistem monitoring dan bot alarm mandiri yang aktif 24/7 mendeteksi anomali jaringan dan menjalankan diagnosa otomatis.",
    },
    capabilities: [
      {
        title: { en: "Sub-Second Polling Engine", id: "Mesin Polling Sub-Detik" },
        desc: { en: "Continuously interrogates all edge access points, core switches, and maritime VSAT modems for latency anomalies.", id: "Pengecekan berkala perangkat jaringan untuk mendeteksi lonjakan latency atau packet loss seketika." }
      },
      {
        title: { en: "Autonomous Traceroute Execution", id: "Eksekusi Diagnosa Jalur Mandiri" },
        desc: { en: "Automatically executes a 15-hop traceroute the millisecond a host drops, sending the root cause straight to engineers' phones.", id: "Langsung menjalankan traceroute 15 hops saat perangkat mati, mengidentifikasi titik putus secara akurat." }
      },
      {
        title: { en: "Monthly SLA Compliance Auditor", id: "Audit Kepatuhan SLA Bulanan" },
        desc: { en: "Compiles mathematical uptime percentages and response times for formal management reporting.", id: "Merekap persentase uptime dan kecepatan respon jaringan untuk pelaporan resmi kepada manajemen." }
      }
    ],
    liveMetrics: {
      detectionSpeed: "< 30 sec",
      uptimeTracked: "99.91%",
      automatedHopsChecked: "15 hops",
      alertChannel: "Telegram & Webhook"
    }
  }
];

export const CONTRACT_EVIDENCE = [
  {
    id: "bast-vessel",
    title: { en: "BAST - Vessel Network Infrastructure", id: "Berita Acara Serah Terima Infrastruktur Jaringan Kapal" },
    client: "PT. Pertamina (Persero) / PT. Pertamina International Shipping",
    code: "BAST-2023-07-12-2576434",
    date: "12 Juli 2023",
    description: {
      en: "Formal acceptance and sign-off for IT and satellite communication ecosystem deployment across oceanic tanker vessels.",
      id: "Dokumen Berita Acara Serah Terima resmi pekerjaan instalasi jaringan IT dan satelit kapal Pertamina."
    },
    image: "/extracted/img_073.jpg"
  },
  {
    id: "spk-monitoring",
    title: { en: "Work Order - Develop System Monitoring & Alert", id: "Surat Perintah Kerja Sistem Monitoring & Alert" },
    client: "PT. Pertamina International Shipping",
    code: "SPMP No. 130/P15124000/2020-S0",
    date: "15 September 2020",
    description: {
      en: "Official contract mandate for the architecture, deployment, and 24/7 maintenance of network monitoring and bot alerting.",
      id: "Surat perintah resmi perancangan dan pemeliharaan sistem pemantauan jaringan PIS_BOT."
    },
    image: "/extracted/img_071.jpg"
  },
  {
    id: "kontrak-core-network",
    title: { en: "Contract - High Availability Core Network HA", id: "Pokok Perjanjian Pengadaan & Instalasi Core Network HA" },
    client: "PT. Pertamina International Shipping",
    code: "Kontrak Model OCLC 05",
    date: "Oktober 2020",
    description: {
      en: "Enterprise contract for hardware supply and high-availability core routing architecture deployment.",
      id: "Kontrak pengadaan perangkat jaringan inti dan konfigurasi arsitektur High Availability."
    },
    image: "/extracted/img_072.jpg"
  },
  {
    id: "spk-bumn-cctv",
    title: { en: "Work Order - Kementerian BUMN 22-Floor CCTV Maintenance", id: "Surat Perintah Kerja Pemeliharaan CCTV Kementerian BUMN" },
    client: "Kementerian BUMN Republik Indonesia / PT. Airkon Pratama",
    code: "SPK No. 001/AP-SK/KMR/01-2024",
    date: "Januari 2024",
    description: {
      en: "Official order covering comprehensive maintenance of 180 Honeywell camera units across 22 floors and 14 NVR servers.",
      id: "Surat perintah kerja pemeliharaan berkala sistem keamanan 180 titik CCTV dan ruang server NVR di Kementerian BUMN."
    },
    image: "/extracted/img_074.jpg"
  },
  {
    id: "kontrak-power-factory",
    title: { en: "Contract - DIgSILENT PowerFactory & Solargis", id: "Pokok Perjanjian Pembelian Software PowerFactory & Solargis" },
    client: "PT. Pertamina Power Indonesia",
    code: "No. SP-001/PP140010/2023-S0",
    date: "19 Mei 2023",
    description: {
      en: "Contract for electrical grid simulation software and renewable solar resource license subscriptions.",
      id: "Perjanjian pengadaan software simulasi jaringan transmisi kelistrikan dan lisensi analitik Solargis."
    },
    image: "/extracted/img_074.jpg"
  }
];

export const CLIENT_LOGOS = [
  { name: "PT Pertamina (Persero)", category: "SOE Energy", logo: "/logos/pertamina.png" },
  { name: "PT Pertamina International Shipping", category: "Maritime & Tankers", logo: "/logos/pertamina-shipping.png" },
  { name: "Kementerian BUMN RI", category: "Government Ministry", logo: "/logos/bumn.png" },
  { name: "BBWS Cimanuk Cisanggarung (PUPR)", category: "Water Resources & Dam Telemetry", logo: "/logos/bbws-cimancis.png" },
  { name: "Kementerian PUPR RI", category: "Public Works Ministry", logo: "/logos/pupr.png" },
  { name: "Universitas Pertamina", category: "Higher Education", logo: "/logos/univ-pertamina.svg" },
  { name: "PT Airkon Pratama", category: "HVAC & Engineering", logo: "/logos/airkon.png" },
  { name: "BMKG", category: "Meteorology & Climate", logo: "/logos/bmkg.png" },
];

export const TECH_PARTNERS = [
  { name: "Ruijie Networks", category: "Enterprise Wi-Fi 6 & Switching", logo: "/logos/ruijie.png" },
  { name: "Cisco Systems", category: "Enterprise Routing & Core", logo: "/logos/cisco.svg" },
  { name: "Fortinet", category: "NSE 7 Network Security", logo: "/logos/fortinet.svg" },
  { name: "MikroTik", category: "Carrier Traffic & Routing", logo: "/logos/mikrotik.png" },
  { name: "Honeywell", category: "Industrial Surveillance", logo: "/logos/honeywell.png" },
  { name: "Hytera", category: "Digital PoC Tactical Radio", logo: "/logos/hytera.svg" },
  { name: "LG Business Solutions", category: "Commercial Video Wall", logo: "/logos/lg.svg" },
];
