import { Project, Experience, SkillCategory, Publication } from './types';

export const PERSONAL_INFO = {
  name: 'Cheng-hung Hsieh',
  title: 'Senior Firmware Engineer',
  company: 'MediaTek Inc.',
  location: 'Taipei, Taiwan',
  email: 'chadcoco1444@gmail.com',
  phone: '(+886) 989-365-782',
  linkedin: 'https://www.linkedin.com/in/cheng-hung-hsieh-b36487b6',
  github: 'https://github.com/chadcoco1444',
  bio: 'Senior Firmware Engineer with over 7 years of experience in embedded software development, specializing in NR/LTE Cellular Protocol Stack and Automotive Electronic software. Proven expertise in 3GPP RRC/NAS protocols, A-GPS/LPP positioning, system-level memory optimization, and automation testing. Adept at coordinating cross-functional teams and leading critical feature developments from design to commercialization.',
  tagline: 'Senior Firmware Engineer specializing in NR/LTE Cellular Protocol Stack and Embedded Systems Development',
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'NTN & 5G RedCap Cell Selection',
    description: 'Led development of Terrestrial/Non-Terrestrial Networks (NTN) and 5G RedCap cell selection features based on 3GPP R17. Optimized Power Saving in Out-of-Service scenarios and enhanced Dual SIM capabilities to minimize interference on the active data SIM.',
    techStack: ['C/C++', '3GPP R17', 'RRC', 'NAS', 'NTN'],
  },
  {
    id: 2,
    title: 'A-GPS/LPP Positioning Protocols',
    description: 'Developed LPP Control Plane (CP) and User Plane (UP) for positioning features. Maintained related A-GPS modules, supporting CP/UP procedures (MOLR, MTLR, SI, NI).',
    techStack: ['C/C++', 'LPP', 'A-GPS', 'SUPL', '3GPP'],
  },
  {
    id: 3,
    title: 'Modem Footprint Optimization',
    description: 'Spearheaded system-level footprint reduction and performance tuning across RRC modules. Leveraged SPLUNK Big Data analytics to analyze real-world field trial logs. Redesigned data structures and AI tensor memory management, achieving significant heap memory savings.',
    techStack: ['C/C++', 'SPLUNK', 'Big Data', 'RRC'],
  },
  {
    id: 4,
    title: 'Unit Testing & Automation Framework',
    description: 'Architected highly efficient unit-testing frameworks that accelerated regression cycles. Developed automated log-parsing tools to streamline triage of complex customer field issues and enhance code security (Coverity/UBSan resolution).',
    techStack: ['C/C++', 'Python', 'Coverity', 'UBSan'],
  },
  {
    id: 5,
    title: 'Wireless Charger 15W Firmware',
    description: 'Developed firmware for 15W Wireless Charger on NXP platform utilizing C/C++. Integrated overheat protection and Foreign Object Detection (FOD) for wireless charger systems.',
    techStack: ['C', 'NXP MCU', 'I2C', 'SPI', 'LIN', 'ADC'],
  },
  {
    id: 6,
    title: 'GPU-Accelerated NIDS',
    description: 'Proposed a novel hierarchical parallelism for accelerating network intrusion detection on multiple GPUs. Achieved 70 Gbps throughput (40x faster than Snort AC algorithm) and 99.2% memory reduction. Awarded Best Conference Paper at IEEE ICASI 2018.',
    techStack: ['C/C++', 'CUDA', 'Aho-Corasick', 'GPU', 'Snort'],
  },
];

export const PUBLICATIONS: Publication[] = [
  {
    title: 'A Novel Hierarchical Parallelism for Accelerating NIDS Using GPUs',
    authors: 'Cheng-Hung Lin, Cheng-Hung Hsieh',
    conference: 'IEEE International Conference on Applied System Innovation (ICASI)',
    year: 2018,
    award: 'Best Conference Paper Award',
    pdf: 'assets/papers/ICASI2018.pdf',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: 'MediaTek Inc.',
    role: 'Senior Firmware Engineer (Protocol Stack)',
    period: '2021 – Present',
    description: [
      'Led development of Terrestrial/Non-Terrestrial Networks (NTN) and 5G RedCap cell selection features based on 3GPP R17',
      'Developed LPP Control Plane and User Plane for positioning features, maintained A-GPS modules',
      'Spearheaded system-level footprint reduction, leveraged SPLUNK Big Data analytics, redesigned data structures and AI tensor memory management',
      'Served as Feature Project Manager, orchestrating cross-layer (L1/NAS/RRC) development. Architected unit-testing frameworks and automated log-parsing tools',
    ],
    skills: ['C/C++', '3GPP', 'RRC', 'NAS', 'LPP', 'A-GPS', 'NTN', '5G RedCap', 'SPLUNK'],
  },
  {
    id: 2,
    company: 'LITEON Technology Corp.',
    role: 'Automotive Electronic Software Engineer',
    period: '2018 – 2021',
    description: [
      'Developed firmware for 15W Wireless Chargers and Head Unit Displays (HUD) on NXP and STM32 platforms',
      'Integrated overheat protection and Foreign Object Detection (FOD) for wireless charger systems',
      'Developed communication interfaces including I2C, SPI, CAN, and LIN',
      'Complied with ISO 26262 functional safety and ASPICE procedures',
    ],
    skills: ['C/C++', 'NXP', 'STM32', 'ARM Cortex-M3/A7', 'I2C', 'SPI', 'CAN', 'LIN', 'ISO 26262', 'ASPICE'],
  },
  {
    id: 3,
    company: 'National Taiwan Normal University',
    role: 'M.S. in Electrical Engineering',
    period: '2016 – 2018',
    description: [
      'Research focus on GPU-accelerated network intrusion detection systems',
      'Thesis: "A Novel Hierarchical Parallelism for Accelerating NIDS Using GPUs"',
      'Awarded Best Conference Paper at IEEE ICASI 2018',
    ],
    skills: ['C/C++', 'CUDA', 'GPU Programming', 'Aho-Corasick', 'Parallel Computing'],
  },
  {
    id: 4,
    company: 'National Taiwan Normal University',
    role: 'B.S. in Electrical Engineering',
    period: '2012 – 2016',
    description: [
      'Coursework: Data Structures, Operating Systems, Computer Architecture, Advanced Computer Networks, Parallel Computing, Computer Vision, Signal Processing',
    ],
    skills: ['C/C++', 'Python', 'Electrical Engineering'],
  },
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'Protocols & Standards',
    skills: ['NR/LTE Protocol Stack', 'RRC', 'NAS', '3GPP 38.331', '3GPP 38.304', '3GPP 37.355', 'Cell Selection', 'A-GPS', 'LPP/LPPe', 'SUPL'],
  },
  {
    category: 'Programming & Tools',
    skills: ['C/C++', 'Python', 'CUDA', 'POSIX Thread', 'Git', 'SVN', 'Oscilloscope', 'JTAG/SWD', 'Parallel Computing'],
  },
  {
    category: 'Embedded Systems',
    skills: ['RTOS', 'NXP MCUs/MPUs', 'STM32', 'ARM Cortex-M3', 'ARM Cortex-A7', 'I2C', 'SPI', 'CAN', 'LIN', 'ADC', 'PWM', 'IPC'],
  },
  {
    category: 'Domain Knowledge',
    skills: ['3GPP Protocol Stack', 'Terrestrial Networks', 'Non-Terrestrial Networks (NTN)', '5G RedCap', 'Cell Selection'],
  },
  {
    category: 'Automotive Standards',
    skills: ['ISO 26262 Functional Safety', 'ASPICE'],
  },
  {
    category: 'Data & Analytics',
    skills: ['SPLUNK', 'Big Data Analytics', 'Coverity', 'UBSan'],
  },
];
