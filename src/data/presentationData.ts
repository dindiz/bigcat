import { ProductItem, VerticalDetail, RoadmapItem, SlideData } from '../types';

export const COMPANY_INFO = {
  name: 'BigCat Wireless Private Limited',
  tagline: 'Leading Innovators in 5G O-RU, Wireless Test Equipment & Tactical Defense SDR',
  location: {
    address: 'Block E, 8th Floor, Unit E8-06, IIT Madras Research Park',
    street: 'Kanagam Road, Taramani',
    city: 'Chennai – 600113, India',
    mapsUrl: 'https://maps.app.goo.gl/kJrJoi2PCvXqpZhT6',
    coordinates: { lat: 12.9904, lng: 80.2415 }
  },
  contacts: {
    general: 'bigcat@bigcatwireless.com',
    executive: 'kannan@bigcatwireless.com',
    website: 'https://www.bigcatwireless.com'
  },
  version: '1.0',
  date: '15 Aug 2026',
  author: 'Kannan G',
  confidentiality: 'BigCat Wireless Confidential, V1.0'
};

export const VERTICALS: VerticalDetail[] = [
  {
    id: '5g-oru',
    title: '5G ORU (O-RAN Radio Unit)',
    tagline: 'Carrier-Grade Open RAN & Non-Terrestrial Network PHY Solutions',
    description: 'Transforming complex 5G O-RAN requirements into market-ready O-RU products spanning terrestrial Massive MIMO and satellite Non-Terrestrial Networks (NTN).',
    keyFeatures: [
      'O-RAN Option 7.2x Fronthaul compliance',
      'Cat A & Cat B Massive MIMO up to 64T64R',
      'Non-Terrestrial Networks (NTN) Doppler-resilient Digital PHY',
      'Embedded Crest Factor Reduction (CFR) & Digital Pre-Distortion (DPD)'
    ],
    subCapabilities: [
      {
        title: 'Massive MIMO Digital PHY',
        description: 'Ultra-low-latency FPGA-based physical layer processing for high antenna counts up to 64T64R.',
        metrics: 'Up to 64T64R | 100MHz BW'
      },
      {
        title: 'NTN Digital PHY',
        description: 'Doppler-shift resilient PHY algorithms for LEO/MEO satellite constellations and non-terrestrial links.',
        metrics: 'High Latency & Doppler Resilient'
      },
      {
        title: 'Fronthaul Split 7.2x',
        description: 'Complete IEEE 1588v2 PTP precision time synchronization and eCPRI fronthaul packetization.',
        metrics: 'Nanosecond PTP Precision'
      }
    ]
  },
  {
    id: '5g-test',
    title: '5G Test Equipment',
    tagline: 'Precision Emulation, Fronthaul Validation & Spectrum Instrumentation',
    description: 'Comprehensive test instrumentation suite for verifying O-RU compliance, eCPRI packet flows, real-time RF capture, and full-stack radio emulation.',
    keyFeatures: [
      'Real-time Fronthaul Split 7.2x protocol analysis and conformance verification',
      'UE Radio Emulator & gNB Radio Emulator in 2U rack or portable form factors',
      'High-speed 2x100 GbE + 1x1GbE data ingestion pipelines',
      'CatNet-WCE software suite supporting both Windows and Linux hosts'
    ],
    subCapabilities: [
      {
        title: '5G Fronthaul Tester',
        description: 'Wire-speed eCPRI and IEEE 1588v2 validation with PCAP-based traffic generation.',
        metrics: '2x 100GbE + 1x 1GbE'
      },
      {
        title: 'UE & gNB Radio Emulator',
        description: 'Generates complex multi-user traffic profiles and baseband scenarios for end-to-end stress testing.',
        metrics: 'Full Stack 3GPP v16/v17'
      },
      {
        title: 'CatNet-WCE Suite',
        description: 'Interactive control software providing real-time telemetry, constellation diagrams, and logging.',
        metrics: 'Windows / Linux Native'
      }
    ]
  },
  {
    id: 'defense',
    title: 'Defense Solutions',
    tagline: 'Resilient Tactical MANET, SatCom Modems & Electronic Surveillance',
    description: 'Battle-proven tactical communication systems built for mission-critical electronic warfare, situational awareness, and secure battlefield networks.',
    keyFeatures: [
      'V/UHF SDR Manpack with fast frequency hopping up to 10,000 hops/sec',
      'Self-healing tactical MANET mesh supporting up to 32 active nodes',
      'Indigenous DVB-S2 & DSSS satellite modem solutions (CatLink SDR)',
      'High-speed RF channel surveillance & 6.4TB IQ recording'
    ],
    subCapabilities: [
      {
        title: '4G LTE Network in a Box',
        description: 'Standalone tactical cellular bubble deployable in backpack, vehicle, or drone payloads.',
        metrics: '4 km LOS | 150 Mbps DL'
      },
      {
        title: 'SDR Manpack (TRL 6)',
        description: 'Field-tested resilient tactical transceiver with tamper erasure and military-grade CODEC.',
        metrics: '30-512 MHz | 10k hops/s'
      },
      {
        title: 'Friend or Foe (IFF)',
        description: 'Encrypted tactical interrogation and transponder systems for secure identification in active theater.',
        metrics: 'Secure Encrypted Crypto'
      }
    ]
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'network-in-a-box',
    name: 'Network in a Box (4G / LTE)',
    subtitle: 'Autonomous Tactical Cellular Base Station & Picocell',
    vertical: 'defense',
    verticalLabel: 'Defense / Tactical Comms',
    status: 'In Production',
    badgeColor: 'emerald',
    tagline: 'Self-contained 4G tactical LAN providing rapid cellular bubbles for battlefield operations and drone payloads.',
    summary: 'A ruggedized, high-throughput autonomous 4G/LTE base station delivering local broadband connectivity, voice, and data across remote operational theaters without relying on backhaul infrastructure.',
    highlights: [
      'MIMO 2x2 with 150 Mbps Downlink & 50 Mbps Uplink throughput',
      'LTE Band 28 Frequency Division Duplex (FDD) operation',
      'Hardware-accelerated Crest Factor Reduction (CFR) & Digital Pre-Distortion (DPD)',
      'Up to 4 Km Line-of-Sight (LOS) communication radius',
      'Deployable as Picocell, Drone Base Station Payload, or High-Power 30W SISO node'
    ],
    specs: [
      { label: 'MIMO Configuration', value: '2 x 2 MIMO', highlight: true },
      { label: 'Downlink Throughput', value: '150 Mbps', highlight: true },
      { label: 'Uplink Throughput', value: '50 Mbps' },
      { label: 'Operating Frequency Band', value: 'LTE Band 28 (FDD)' },
      { label: 'Channel Bandwidth', value: '20 MHz' },
      { label: 'RF Output Power', value: '2 x 4W (MIMO) / 1 x 30W (SISO)', highlight: true },
      { label: 'Coverage Range', value: '4 Km Line-of-Sight (LOS)' },
      { label: 'Network Interface', value: '1 GbE Ethernet' },
      { label: 'Signal Processing', value: 'Integrated CFR & DPD' },
      { label: 'Next-Gen Roadmap', value: '5G O-RU 4T4R & 64T64R (In Development)' }
    ],
    formFactors: ['Picocell Standalone', 'Drone Aerial Payload', '30W High-Power SISO Unit', '2x4W Tactical MIMO'],
    applications: ['Tactical Battlefield LAN', 'Emergency Disaster Response', 'Drone-Mounted Cellular Relay', 'Border Surveillance'],
    standards: ['3GPP Rel-10/12 LTE', 'FDD Band 28', 'IEEE 802.3 Ethernet'],
    imagePlaceholderText: '4G/LTE Tactical Base Station & Drone Payload'
  },
  {
    id: 'sdr-vhf-manpack',
    name: 'V/UHF SDR Manpack (TRL 6)',
    subtitle: 'Fast Frequency Hopping SDR Platform for Resilient MANET',
    vertical: 'defense',
    verticalLabel: 'Defense / Electronic Warfare',
    status: 'TRL 6 Field Proven',
    badgeColor: 'blue',
    tagline: 'Field-proven tactical software-defined radio delivering jam-resistant voice, data, and mesh networking in hostile environments.',
    summary: 'Engineered for dismounted soldiers, vehicular mounts, and Armored Fighting Vehicles (AFV), featuring 10,000 hops/sec frequency hopping, tamper detection, and multi-hop MANET.',
    highlights: [
      'Configured operating band from 30 MHz to 512 MHz with wideband RF platform up to 6 GHz',
      'Ultra-fast frequency hopping demonstrated at 10,000 hops/second for extreme anti-jamming',
      'Supports dynamic MANET mesh networking with up to 32 nodes and up to 50 km multi-hop range',
      '8+ hours active battery life on field missions with hot-swappable packs',
      'Zeroize security tamper detection with immediate cryptographic key erasure',
      'Integrated GPS and indigenous NAVIC satellite positioning'
    ],
    specs: [
      { label: 'RF Platform Capability', value: 'Up to 6 GHz RF Platform', highlight: true },
      { label: 'Configured Operating Band', value: '30 MHz to 512 MHz (V/UHF)' },
      { label: 'Channel Bandwidth', value: 'Up to 40 MHz Bandwidth' },
      { label: 'Hopping Rate', value: '10,000 hops / sec (Demonstrated)', highlight: true },
      { label: 'MANET Mesh Nodes', value: 'Up to 32 Nodes supported', highlight: true },
      { label: 'Operational Range', value: '10 km (Direct) / 50 km (MANET Mesh)' },
      { label: 'Power & Battery Life', value: '8 Hours Battery Run Time' },
      { label: 'Security & Anti-Tamper', value: 'Tamper Detection & Instant Zeroize Erasure' },
      { label: 'Audio & Forward Error', value: 'Advanced Audio CODEC + Adaptable FEC' },
      { label: 'Control & Navigation', value: 'Touch-Tablet Web UI, IP-Based, GPS/NAVIC' }
    ],
    formFactors: ['Manpack Dismount', 'Vehicular Mount', 'Armored Fighting Vehicle (AFV)'],
    applications: ['Tactical Dismount Patrols', 'Convoy Mesh Communications', 'Battle Management System (BMS)', 'Electronic Warfare Defense'],
    standards: ['SDR Architecture', 'MIL-STD Jamming Resilient', 'GPS/NAVIC Satellite Timing'],
    imagePlaceholderText: 'TRL 6 V/UHF Tactical SDR Manpack'
  },
  {
    id: 'catlink-sdr-satcom',
    name: 'CatLink SDR SatCom Modem',
    subtitle: 'Indigenous High-Performance DVB-S2 & DSSS Satellite Modems',
    vertical: 'satcom',
    verticalLabel: 'SatCom / Space Networks',
    status: '2027 Release',
    releaseDate: 'April 2027',
    badgeColor: 'amber',
    tagline: 'Mission-critical satellite communication modem designed for GEO, MEO, and LEO satellite terminals and hubs.',
    summary: 'Indigenous high-throughput SDR modem delivering DVB-S2 and direct-sequence spread spectrum (DSSS) waveforms with TCOO timing synchronization and IRSA compliance.',
    highlights: [
      'Wideband RF tuning up to 6 GHz (configurable from 100 MHz to 6 GHz)',
      'Dual independent channel processing with 2 x 40 MHz channel bandwidth',
      'Dual-mode waveforms: High-throughput DVB-S2 & Anti-jam DSSS',
      'Fast Frequency Hopping up to 10,000 hops/sec across satellite carriers',
      'True Timing Offset Compensation (TCOO) for GEO and non-geostationary orbits',
      'IRSA compliance with 1 PPS input/output synchronization'
    ],
    specs: [
      { label: 'RF Frequency Range', value: 'Up to 6 GHz RF (Configurable 100 MHz - 6 GHz)', highlight: true },
      { label: 'Channel Architecture', value: '2 Independent Channels', highlight: true },
      { label: 'Channel Bandwidth', value: '2 x 40 MHz Bandwidth' },
      { label: 'Supported Waveforms', value: 'DVB-S2 & DSSS (Direct-Sequence Spread Spectrum)' },
      { label: 'RF Output Power', value: '0 dBm Nominal Output' },
      { label: 'Frequency Hopping', value: 'Up to 10,000 hops/sec' },
      { label: 'Timing Synchronization', value: '1 PPS In / Out & TCOO Timing Sync for GEO+' },
      { label: 'Satellite Compliance', value: 'IRSA Standard Compliant' },
      { label: 'Positioning System', value: 'GPS & NAVIC Supported' },
      { label: 'Commercial Target', value: 'April 2027 General Availability', highlight: true }
    ],
    formFactors: ['Satellite Terminal Modem', 'Gateway Hub Modem', 'Stabilized Gimbal Mount'],
    applications: ['Tactical SatCom Beyond Line-of-Sight', 'Stabilized Marine & Airborne Gimbals', 'Remote Earth Station Hubs', 'Strategic Defense SatCom'],
    standards: ['ETSI DVB-S2 / DVB-S2X', 'IRSA Compliant', 'IEEE 1588v2 / 1 PPS'],
    imagePlaceholderText: 'CatLink Indigenous SatCom SDR Modem'
  },
  {
    id: 'channel-recorder',
    name: 'Wireless Channel Surveillance & Recorder',
    subtitle: 'Real-Time Spectrum Instrumentation & High-Capacity IQ Storage',
    vertical: 'defense',
    verticalLabel: 'Defense / Test & Surveillance',
    status: 'In Production',
    badgeColor: 'emerald',
    tagline: 'High-speed dual-channel RF spectrum analyzer and uncompressed IQ recording engine for signals intelligence and channel sounding.',
    summary: 'Captures and records massive bandwidth RF signals continuously up to 100 minutes at 122.88 MSps directly to on-board 6.4TB NVMe SSD storage with real-time FFT spectrum display.',
    highlights: [
      'Dual RF capture channels covering 800 MHz to 6 GHz spectrum',
      'Massive instantaneous channel bandwidth up to 1200 MHz',
      'Real-time continuous IQ sample recording at 122.88 MSamples/sec',
      'Massive storage capacity up to 6.4 TB high-speed SSD (100+ minutes raw capture)',
      'High-speed data exfiltration over 1 GbE and optional 10 GbE optical links',
      'Dedicated external reference clock input and precision trigger ports'
    ],
    specs: [
      { label: 'RF Channels', value: '2 Synchronized Channels', highlight: true },
      { label: 'Frequency Coverage', value: '800 MHz to 6 GHz RF', highlight: true },
      { label: 'Instantaneous Bandwidth', value: 'Up to 1200 MHz' },
      { label: 'IQ Sampling Rate', value: '122.88 MSps Continuous', highlight: true },
      { label: 'On-board Storage', value: 'Up to 6.4 TB NVMe SSD (100 min raw IQ)' },
      { label: 'Data Download Interface', value: '1 GbE Standard & Optional 10 GbE' },
      { label: 'Trigger & Clocking', value: 'External Clock Reference & Hardware Trigger' },
      { label: 'Analysis Capabilities', value: 'Channel Power, Occupied Bandwidth, Real-Time FFT' }
    ],
    formFactors: ['1U Rack Enclosure', 'Rugged Benchtop Unit', 'Lab Surveillance Chassis'],
    applications: ['Electronic Signals Intelligence (SIGINT)', 'Wireless Propagation Sounding', 'Interference Hunting & Spectrum Audits', 'Radar & Comms Signal Analysis'],
    standards: ['Standard I/Q Data Formats', '10 GbE SFP+', 'IEEE 1588 Precision Timing'],
    imagePlaceholderText: 'WiCatEye Channel Surveillance & IQ Recorder'
  },
  {
    id: 'fronthaul-tester',
    name: '5G Front Haul Tester / UE & gNB Emulator',
    subtitle: 'High-Density eCPRI Option 7.2x Protocol Tester & Radio Emulator',
    vertical: '5g-test',
    verticalLabel: '5G Test Equipment',
    status: '2027 Release',
    releaseDate: 'June 2027',
    badgeColor: 'indigo',
    tagline: 'Complete 100G wire-speed validation system for O-RAN Split 7.2x fronthaul interoperability, compliance, and end-to-end traffic stress.',
    summary: 'Integrates Fronthaul Protocol Analyzer, User Equipment (UE) Radio Emulator, and Next-Gen NodeB (gNB) Radio Emulator with CatNet-WCE software.',
    highlights: [
      'Dual 100 GbE optical interfaces + dedicated 1 GbE management port',
      'Native O-RAN Split 7.2X conformance testing for Cat A and Cat B O-RUs',
      'Sub-nanosecond IEEE 1588v2 Precision Time Protocol (PTP) & 1 PPS synchronization',
      'Portable enclosure for field demonstrations and 2U rack mount for laboratory certification',
      'PCAP-based realistic network traffic generation with custom impairment injection',
      'Includes CatNet-WCE software for Windows and Linux environments'
    ],
    specs: [
      { label: 'Optical Fronthaul Interfaces', value: '2 x 100 GbE QSFP28', highlight: true },
      { label: 'Management & Sync', value: '1 x 1 GbE RJ45 & 1 PPS In / Sync Out' },
      { label: 'O-RAN Specification', value: 'O-RAN Split 7.2x (Cat A & Cat B)', highlight: true },
      { label: 'Timing Protocol', value: 'IEEE 1588v2 (PTP) Telecom Profile' },
      { label: 'Traffic Generation', value: 'PCAP-based Real-Time Packet Injection' },
      { label: 'Accompanying Software', value: 'CatNet-WCE (Windows / Linux Native)' },
      { label: 'Chassis Form Factor', value: 'Portable Demo Chassis & 2U Rack Mountable' },
      { label: 'Power Supply', value: '110V / 220V AC, 5A' },
      { label: 'Operating Temperature', value: '0°C to 30°C Ambient' },
      { label: 'Target Release', value: 'June 2027 Launch', highlight: true }
    ],
    formFactors: ['Portable Field Demo Unit', '2U Rackmount Lab Chassis'],
    applications: ['O-RU Conformance Testing', 'O-DU Interoperability Certification', '5G / 6G Baseband R&D Labs', 'Telecom Operator Trials (BSNL)'],
    standards: ['O-RAN Alliance Split 7.2x', 'IEEE 1588v2 PTP', '3GPP Rel-15/16/17'],
    imagePlaceholderText: '5G Front Haul Tester & Radio Emulator Unit'
  }
];

export const ROADMAP_ITEMS: RoadmapItem[] = [
  {
    year: '2026 - Current',
    target: 'Commercial TRL 6 & O-RAN Deployments',
    vertical: '5G ORU',
    statusBadge: 'Active Deployments',
    items: [
      '4T4R / 32T32R 5G O-RU Split 7.2x compliant systems',
      '1T1R & 2T2R Non-Terrestrial Network (NTN) satellite PHY algorithms',
      '4G LTE Network in a Box for tactical defense bubbles',
      'V/UHF SDR Manpack field-proven at TRL 6 readiness',
      'WiCatEye real-time RF channel recorder with 6.4TB IQ storage'
    ]
  },
  {
    year: '2027 - Q1/Q2',
    target: 'Indigenous SatCom & Dual 100G Test Equipment',
    vertical: '5G Test Equipment',
    statusBadge: 'Upcoming Release',
    items: [
      'CatLink SDR SatCom Modem release (April 2027) with DVB-S2 & DSSS',
      '5G Fronthaul Tester & UE/gNB Emulator launch (June 2027) with 2x100GbE',
      'Integrated DU + RU architecture for ultra low-cost 5G deployments',
      'Commercial trials and collaboration discussions with BSNL for 5G deployment'
    ]
  },
  {
    year: '2027 - Q3/Q4',
    target: 'Next-Gen 64T64R & 6G Research',
    vertical: 'Defense',
    statusBadge: 'Forward Horizon',
    items: [
      'Massive MIMO 64T64R commercial O-RU for dense urban cell sites',
      'Indigenous tactical SDR platform rollout for national defense forces',
      'Initiation of 6G research: Sub-THz physical layer and full duplex wireless',
      'Global market expansion for test instrumentation leadership'
    ]
  }
];

export const EXPERTISE_PILLARS = [
  {
    title: 'FPGA Design & Optimization',
    icon: 'Cpu',
    description: 'High-density RTL implementation for ultra-low latency baseband algorithms, FFT/IFFT, and beamforming engines.'
  },
  {
    title: 'IEEE 1588v2 & Precision Timing',
    icon: 'Clock',
    description: 'Sub-nanosecond phase and frequency alignment, SyncE, and telecom PTP profiles for O-RAN fronthaul synchronization.'
  },
  {
    title: 'System Validation & Interoperability',
    icon: 'CheckCircle2',
    description: 'Rigorous 3GPP and O-RAN Alliance conformance testing ensuring plug-and-play interoperability with leading DU vendors.'
  },
  {
    title: '3GPP Standards Compliance',
    icon: 'ShieldCheck',
    description: 'In-depth protocol implementation from Release 15 to Release 17/18 across eMBB, URLLC, and NTN profiles.'
  },
  {
    title: 'High-Speed Signal Integrity & Board Design',
    icon: 'Activity',
    description: 'Multi-layer high-frequency PCB layout with 28Gbps/56Gbps SERDES routing, impedance matching, and thermal modeling.'
  },
  {
    title: 'Embedded Software & Firmware Development',
    icon: 'Terminal',
    description: 'Real-time Linux drivers, DPDK high-speed packet processing, microcode, and native web-based management suites.'
  }
];

export const CAPABILITIES_MATRIX = {
  products: [
    { title: '4G, 5G, Massive MIMO', desc: 'Deployable cellular base stations & carrier-grade O-RUs up to 64T64R' },
    { title: '6G, Full Duplex', desc: 'Cutting-edge R&D into simultaneous transmit and receive architectures' }
  ],
  ips: [
    { title: 'SDR Platforms', desc: 'Configurable wideband transceivers from 30 MHz to 6 GHz' },
    { title: 'Tactical Wireless', desc: 'Fast frequency hopping (10,000 hops/s) & jam-resilient waveforms' }
  ],
  solutions: [
    { title: 'Power Efficiency', desc: 'Hardware-level CFR, DPD, and dynamic amplifier power scaling' },
    { title: 'MANET', desc: 'Autonomous ad-hoc multi-hop tactical mesh networks up to 32 nodes' }
  ],
  consultancy: [
    { title: 'IoT & Wireless Sensor Networks', desc: 'Specialized industrial telemetry, smart city sensor hubs, and low-power RF' },
    { title: 'Wireless Test Platforms', desc: 'Custom protocol analyzers, hardware-in-the-loop testbeds, and RF emulators' }
  ]
};

// All 19 Slides structured for the Interactive Slide Deck Viewer
export const SLIDES_DATA: SlideData[] = [
  {
    slideNumber: 1,
    title: 'Overview',
    subtitle: 'BigCat Wireless Private Limited',
    category: 'Overview',
    summaryText: 'Executive overview and comprehensive product portfolio of BigCat Wireless — pioneers in 5G Open RAN, Test Instrumentation, and Defense SDR.',
    keyHighlights: [
      { label: 'Organization', value: 'BigCat Wireless' },
      { label: 'Focus', value: '5G O-RU, Test, Defense' },
      { label: 'Base', value: 'IIT Madras Research Park' }
    ],
    confidentialFooter: 'BigCat Wireless Confidential, V1.0'
  },
  {
    slideNumber: 2,
    title: 'Version History',
    subtitle: 'Document Metadata & Revisions',
    category: 'Overview',
    summaryText: 'Revision history log of the official BigCat Wireless corporate and technical overview presentation.',
    tableData: {
      headers: ['Ver No', 'Date', 'Author', 'Change Log'],
      rows: [
        ['1.0', '15 Aug 2026', 'Kannan G', 'Overview of BigCat Wireless']
      ]
    },
    confidentialFooter: 'BigCat Wireless Confidential, V1.0'
  },
  {
    slideNumber: 3,
    title: 'Location & Headquarters',
    subtitle: 'IIT Madras Research Park, Chennai',
    category: 'Overview',
    summaryText: 'Centrally located within India premier deep-tech ecosystem at IIT Madras Research Park.',
    bulletPoints: [
      'BigCat Wireless Private Limited',
      'Block E, 8th Floor, Unit E8-06, IIT Madras Research Park',
      'Kanagam Road, Taramani, Chennai – 600113, India',
      'Contact: bigcat@bigcatwireless.com / kannan@bigcatwireless.com',
      'Direct Google Maps coordinates and research facility access'
    ],
    confidentialFooter: 'BigCat Wireless Confidential, V1.0'
  },
  {
    slideNumber: 4,
    title: 'Solution Spaces',
    subtitle: 'Three Core Technology Pillars',
    category: 'Strategy',
    summaryText: 'BigCat Wireless operates across three synergistic strategic pillars spanning commercial telecom, test instrumentation, and tactical defense.',
    bulletPoints: [
      '5G ORU (Open RAN Radio Units)',
      '5G Test Equipment & Protocol Analyzers',
      'Defense Solutions & Tactical SDR'
    ],
    confidentialFooter: 'BigCat Wireless Confidential, V1.0'
  },
  {
    slideNumber: 5,
    title: 'Three Verticals Breakdown',
    subtitle: 'Technical Domain Decomposition',
    category: 'Strategy',
    summaryText: 'Detailed breakdown of active engineering and research domains across all three verticals.',
    tableData: {
      headers: ['5G ORU', '5G Test Equipment', 'Defense'],
      rows: [
        ['Massive MIMO digital Phy', 'Front haul Tester', '4G LTE Network in a Box'],
        ['NTN Digital Phy', 'UE Radio Emulator', 'SDR Man Pack'],
        ['Split 7.2x Architecture', 'GNB Radio Emulator', 'SatCom MODEM'],
        ['CFR & DPD Engines', 'CatNet-WCE Software', 'Friend or Foe (IFF)'],
        ['-', '-', 'Wireless Channel Recorder']
      ]
    },
    confidentialFooter: 'BigCat Wireless Confidential, V1.0'
  },
  {
    slideNumber: 6,
    title: 'BigCat Wireless Portfolio, Use Cases, R&D',
    subtitle: 'Integrated Telecom, SatCom & Defense Spectrum',
    category: 'Products',
    summaryText: 'Holistic portfolio covering tactical defense communications, carrier 4G/5G nodes, and satellite tracking solutions.',
    bulletPoints: [
      'Defense: Tactical Communication 4G/5G, Situational Awareness, Battle Management System',
      '4G/5G: eNB / gNB, O-RU Split 7.2 Compliant, Channel Recorder, 5G Front haul Tester',
      'SatCom: Stabilized Gimbal, Modems',
      'Flagship Hardware: 2x4W MIMO, 30W SISO, 4G Drone Payload, IFF Modules',
      'Design in India | Make in India'
    ],
    confidentialFooter: 'BigCat Wireless Confidential, V1.0, Jan 8, 2026'
  },
  {
    slideNumber: 7,
    title: 'Defense Portfolio, Use Cases, R&D',
    subtitle: 'Tactical Battlefield Communications & Surveillance',
    category: 'Defense',
    summaryText: 'Dedicated tactical defense suite designed for extreme operational resilience, encrypted telemetry, and air-to-ground integration.',
    bulletPoints: [
      'Tactical Communication 4G/5G: Deployable cellular tactical bubbles',
      'Situational Awareness: Real-time sensor feeds and drone relay payloads',
      'Battle Management System (BMS): High-speed data links for command and control',
      'Channel Recorder: High-speed spectrum surveillance and raw IQ storage',
      'Hardware Suite: IFF (Friend or Foe), 4G Tactical LAN, 30W SISO, 2x4W MIMO, Drone Payload'
    ],
    confidentialFooter: 'BigCat Wireless Confidential, V1.0, Jan 8, 2026'
  },
  {
    slideNumber: 8,
    title: 'Forward Looking : 2027 Roadmap',
    subtitle: 'Strategic Milestones & Market Expansion',
    category: 'Roadmap',
    summaryText: 'Strategic development goals targeted for 2027 across commercial 5G, test equipment leadership, and indigenous defense sovereignty.',
    tableData: {
      headers: ['5G ORU', '5G Test Equipment', 'Defense'],
      rows: [
        ['Integrated DU + RU', 'To enable local 5G/6G R&D', 'Indigenous Satellite MODEM'],
        ['Low Cost fully compliant 5G Deployment', 'Aim for Global market and leadership', 'Indigenous SDR'],
        ['Discuss plan for trials with BSNL for 5G deployment', '-', '-']
      ]
    },
    confidentialFooter: 'BigCat Wireless Confidential, V1.0'
  },
  {
    slideNumber: 9,
    title: '5G Capabilities',
    subtitle: 'Moving towards 6G Research',
    category: '5G & NTN',
    summaryText: 'Pushing the boundaries of 5G advanced architectures while laying the foundation for 6G sub-THz and full-duplex communications.',
    bulletPoints: [
      'Carrier-grade Massive MIMO baseband processing',
      'Doppler-resilient Non-Terrestrial Network (NTN) physical layer',
      'Full Duplex transceiver algorithms & interference cancellation',
      'Active collaboration with national and international academic consortia'
    ],
    confidentialFooter: 'BigCat Wireless Confidential, V1.0'
  },
  {
    slideNumber: 10,
    title: '4T4R / 32T32R 5G ORU and 1T1R/2T2R NTN',
    subtitle: 'From Complex O-RAN Challenges to Market-Ready Products',
    category: '5G & NTN',
    summaryText: 'Your trusted partner for innovation, compliance, and speed across terrestrial and non-terrestrial networks.',
    bulletPoints: [
      'Enabling diverse 5G services across Terrestrial & Non-Terrestrial Networks',
      'Enhanced Mobile Broadband (eMBB)',
      'Ultra-Reliable Low-Latency Communications (URLLC)',
      'Massive MIMO configurations up to 32T32R / 64T64R',
      'Satellite-connected & NTN solutions'
    ],
    confidentialFooter: 'BigCat Wireless Confidential, V1.0'
  },
  {
    slideNumber: 11,
    title: 'End to End Solutions',
    subtitle: 'Comprehensive 3-Tier Telecom Architecture',
    category: '5G & NTN',
    summaryText: 'A complete product continuum from physical layer silicon design to satellite bridges and lab instrumentation.',
    bulletPoints: [
      '1. O-RU Digital PHY Solutions: High-performance, Flexible, Standards-aligned. Cat A & Cat B | Option 7.2x Fronthaul | Massive MIMO up to 64T64R | High-performance PHY inside O-RU.',
      '2. NTN Solutions based on 5G O-RU: Extending 5G to the skies with confidence. NTN-optimized O-RU designs | High-latency & Doppler-resilient | Bridging terrestrial & satellite worlds.',
      '3. Test Instrumentation & Validation: Real-time confidence, End-to-end assurance. DU Emulator & Fronthaul Analyzer | PCAP-based traffic generation | O-RU compliance & interoperability.'
    ],
    confidentialFooter: 'BigCat Wireless Confidential, V1.0'
  },
  {
    slideNumber: 12,
    title: 'Built on Deep Expertise',
    subtitle: 'Your Outcome. Our Mission.',
    category: 'Strategy',
    summaryText: 'Combining proven platforms, reference designs, and deep engineering expertise to help build differentiated O-RU products faster with lower risk.',
    bulletPoints: [
      'Core Domains: FPGA Design & Optimization, IEEE 1588v2 (PTP) Precision Timing, System Validation, 3GPP Standards Compliance, High-Speed Signal Integrity, Embedded Software.',
      'Process: Reference Designs + Core Solutions (PHY, Test) + Skills -> Integration & Customization -> Market-Ready Differentiated O-RU Product.',
      'Client Outcomes: Faster Time to Market, Lower Development Risk, Standards Compliance, Product Differentiation.'
    ],
    confidentialFooter: 'BigCat Wireless Confidential, V1.0'
  },
  {
    slideNumber: 13,
    title: 'Product Portfolio',
    subtitle: 'Commercial Hardware & Defense Systems',
    category: 'Products',
    summaryText: 'In-depth specification sheets for BigCat Wireless production and upcoming hardware platforms.',
    keyHighlights: [
      { label: 'Production Units', value: '4G LTE NiB, WiCatEye Recorder' },
      { label: 'Defense TRL-6', value: 'V/UHF SDR Manpack' },
      { label: '2027 Pipeline', value: 'SatCom Modem & 100G Tester' }
    ],
    confidentialFooter: 'BigCat Wireless Confidential, V1.0'
  },
  {
    slideNumber: 14,
    title: 'Network in a Box (4G / LTE)',
    subtitle: 'Picocell & Drone-Mounted Tactical Cellular Station',
    category: 'Products',
    summaryText: 'Ruggedized standalone cellular base station for defense, drone payloads, and tactical LAN deployment.',
    tableData: {
      headers: ['Parameter', 'Specification'],
      rows: [
        ['MIMO', '2 x 2 MIMO'],
        ['Downlink Throughput', '150 Mbps'],
        ['Uplink Throughput', '50 Mbps'],
        ['Band', 'LTE Band 28 (FDD)'],
        ['Bandwidth', '20 MHz'],
        ['RF Power', '2 x 4W MIMO / 1 x 30W SISO'],
        ['Range', '4 Km Line-of-Sight (LOS)'],
        ['Ethernet', '1 GbE Interface'],
        ['Processing', 'Crest Factor Reduction (CFR) & Digital Pre Distortion (DPD)'],
        ['Under Development', '5G O-RU 4T4R, 5G ORU – 64T64R']
      ]
    },
    confidentialFooter: 'BigCat Wireless Confidential, V1.0'
  },
  {
    slideNumber: 15,
    title: 'SDR: VHF Manpack : TRL 6',
    subtitle: 'Fast Frequency Hopping SDR for Resilient Tactical MANET',
    category: 'Defense',
    summaryText: 'Field-proven TRL-6 prototype built for mobile, hostile, and field-deployed defense environments.',
    tableData: {
      headers: ['Feature', 'Specification'],
      rows: [
        ['RF Platform', 'Up to 6 GHz RF Platform'],
        ['Configured Band', '30 MHz to 512 MHz'],
        ['Channel Bandwidth', 'Up to 40 MHz Bandwidth'],
        ['MANET Support', 'Up to 32 Nodes in dynamic mesh'],
        ['Range', '10 km (Direct) / 50 km (with MANET Mesh)'],
        ['Battery Run Time', '8 Hours Battery Powered'],
        ['Hopping Rate', '10,000 hops/sec lab demonstrated'],
        ['Security', 'Tamper detection and key zeroization erasure'],
        ['Audio & FEC', 'Advanced audio CODEC + adaptable FEC'],
        ['Control', 'IP-based network operation, Touch-tablet web interface, GPS/NAVIC']
      ]
    },
    confidentialFooter: 'BigCat Wireless Confidential, V1.0'
  },
  {
    slideNumber: 16,
    title: 'CatLink SDR SatCom Modem',
    subtitle: 'DVBS2 and DSSS Indigenous Satellite Modem Solutions',
    category: 'Products',
    summaryText: 'Mission-critical satellite connectivity solution engineered to perform in the worlds most demanding environments (Target Release: April 2027).',
    tableData: {
      headers: ['Capability', 'Details'],
      rows: [
        ['RF Frequency', 'Up to 6 GHz RF (Configurable 100 MHz to 6 GHz)'],
        ['Channels', '2 Channel Support'],
        ['Bandwidth', '2 x 40 MHz Bandwidth'],
        ['Waveforms', 'DVB-S2 and DSSS Waveforms (Upgradeable)'],
        ['RF Output', '0 dBm Output'],
        ['Frequency Hopping', 'Up to 10,000 hops/sec'],
        ['Timing Synchronization', '1 PPS In and Out, TCOO for Timing Sync in GEO & Beyond'],
        ['Standard Compliance', 'IRSA Compliance, GPS/NAVIC Supported'],
        ['Deployment', 'SatCom Application: Both Terminal and Hub'],
        ['Availability', '2027 April Release']
      ]
    },
    confidentialFooter: 'BigCat Wireless Confidential, V1.0'
  },
  {
    slideNumber: 17,
    title: 'Wireless Channel Surveillance and Recorder',
    subtitle: 'Real-Time Spectrum Instrumentation & 6.4TB IQ Storage',
    category: 'Products',
    summaryText: 'Continuous high-bandwidth RF spectrum recording and signal intelligence analysis.',
    tableData: {
      headers: ['Specification', 'Value'],
      rows: [
        ['Channels', '2 Channels'],
        ['RF Range', '800 MHz – 6 GHz RF'],
        ['Channel Bandwidth', 'Up to 1200 MHz Channel Bandwidth'],
        ['Instrumentation', 'Real Time Spectrum Instrumentation & FFT'],
        ['IQ Recording', 'Up to 100 minutes continuous IQ recording at 122.88 MSps'],
        ['Storage Capacity', 'Up to 6.4 TB NVMe SSD Storage'],
        ['Data Download', 'Download over 1 GbE & optional 10 GbE'],
        ['Synchronization', 'External clock reference and hardware trigger']
      ]
    },
    confidentialFooter: 'BigCat Wireless Confidential, V1.0'
  },
  {
    slideNumber: 18,
    title: '5G Front Haul Tester / UE Emulator / gNB Emulator',
    subtitle: 'O-RAN Split 7.2X Protocol Validation & Emulation System',
    category: 'Products',
    summaryText: 'Wire-speed 100G validation platform for O-RU testing and radio emulation (Target Release: June 2027).',
    tableData: {
      headers: ['Subsystem', 'Specification'],
      rows: [
        ['Form Factor', 'Portable for Demonstration use / 2U Rack Mountable for Lab use'],
        ['Interfaces', '2x 100 GbE, 1x 1GbE, 1 PPS In'],
        ['Power', '110V / 220V AC, 5A'],
        ['Environment', '0 deg C to 30 deg C'],
        ['Compliance', 'IEEE 1588 (PTP) & O-RAN Split 7.2X'],
        ['Accompanying Software', 'CatNet-WCE (Windows / Linux Native)'],
        ['Target Release', '2027 June Release']
      ]
    },
    confidentialFooter: 'BigCat Wireless Confidential, V1.0'
  },
  {
    slideNumber: 19,
    title: 'Capabilities Matrix & Contact',
    subtitle: 'Design in India • Make in India',
    category: 'Summary',
    summaryText: 'Full-spectrum wireless innovation and sovereign engineering capabilities at IIT Madras Research Park.',
    bulletPoints: [
      'Products: 4G, 5G, Massive MIMO | 6G, Full Duplex',
      'IPs: SDR Platforms | Tactical Wireless',
      'Solutions: Power Efficiency | MANET',
      'Consultancy: IoT, Wireless Sensor Networks | Wireless Test Platforms',
      'Address: BigCat Wireless Private Limited, 8th Floor, Block E, E806, IIT Madras Research Park, Kanagam Road, Taramani, Chennai – 600113, India',
      'Web: www.bigcatwireless.com | Email: kannan@bigcatwireless.com'
    ],
    confidentialFooter: 'BigCat Wireless Confidential, V1.0'
  }
];
