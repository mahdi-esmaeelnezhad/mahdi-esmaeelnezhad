export const LINKS = {
  email: 'mahdiesmaeelnezhad7@gmail.com',
  phone: '+98 912 638 1582',
  phoneHref: 'tel:+989126381582',
  github: 'https://github.com/mahdi-esmaeelnezhad',
  linkedin: 'https://www.linkedin.com/in/mahdi-esmaeilnezhad-173982207',
  portfolio: 'https://mahdi-esmaeelnezhad.vercel.app/',
  cv: '/Mahdi_Esmaeelnezhad_CV.pdf',
  orbit: 'https://github.com/mahdi-esmaeelnezhad/orbit-task-platform',
  smartTable: 'https://github.com/mahdi-esmaeelnezhad/ngx-smart-table-pro',
  configkit: 'https://github.com/mahdi-esmaeelnezhad/configkit',
  jobCrawler: 'https://github.com/mahdi-esmaeelnezhad/crawl-py',
};

export const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    icon: '🎨',
    skills: [
      'React',
      'Vue.js',
      'Nuxt',
      'Angular',
      'Next.js',
      'React Native',
      'Flutter',
      'TypeScript',
      'JavaScript',
      'HTML5 / CSS3',
      'Redux',
      'Material UI',
      'Tailwind CSS',
    ],
  },
  {
    id: 'backend',
    icon: '⚙️',
    skills: ['Node.js', 'Python', 'Go', 'C#', 'Blazor', 'REST APIs', 'WebSocket'],
  },
  {
    id: 'database',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MongoDB', 'SQL'],
  },
  {
    id: 'tools',
    icon: '🛠️',
    skills: ['Git', 'npm', 'Docker', 'Swagger', 'Redis', 'JWT'],
  },
] as const;

export interface ProjectMeta {
  id: string;
  icon: string;
  gradient: string;
  tech: string[];
  live?: string;
  source?: string;
}

export const PROJECTS: ProjectMeta[] = [
  {
    id: 'orbit',
    icon: '🛰️',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #1e3a5f 100%)',
    tech: ['Node.js', 'JWT', 'Redis', 'Swagger', 'Docker Compose'],
    source: LINKS.orbit,
  },
  {
    id: 'smartTable',
    icon: '📊',
    gradient: 'linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)',
    tech: ['Angular', 'Virtual Scroll', 'Excel Export', 'Drag & Drop'],
    source: LINKS.smartTable,
  },
  {
    id: 'configkit',
    icon: '⚙️',
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)',
    tech: ['Go', 'JSON', 'YAML', 'TOML', 'ENV', 'Hot Reload'],
    source: LINKS.configkit,
  },
  {
    id: 'jobCrawler',
    icon: '🔍',
    gradient: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 100%)',
    tech: ['Python', 'Web Scraping', 'Excel Export'],
    source: LINKS.jobCrawler,
  },
];

export interface ExperienceMeta {
  id: string;
  period: string;
  location: string;
  tech: string[];
}

export const EXPERIENCE: ExperienceMeta[] = [
  {
    id: 'tipax',
    period: 'Aug 2025 — Aug 2026',
    location: 'Mashhad, Iran',
    tech: ['React', 'TypeScript', 'Material UI'],
  },
  {
    id: 'refah',
    period: 'Mar 2025 — Aug 2026',
    location: 'Mashhad, Iran',
    tech: ['React', 'WebSocket', 'Real-time'],
  },
  {
    id: 'threeclick',
    period: 'Mar 2024 — Jun 2025',
    location: 'Mashhad, Iran',
    tech: ['Vue.js', 'Nuxt 2/3', 'SEO', 'Performance'],
  },
  {
    id: 'toptours',
    period: 'Feb 2023 — Feb 2024',
    location: 'Mashhad, Iran',
    tech: ['React', 'Blazor Server', 'Drag & Drop'],
  },
  {
    id: 'kanoon',
    period: 'Sep 2022 — Apr 2023',
    location: 'Mashhad, Iran',
    tech: ['React', 'REST API'],
  },
  {
    id: 'mabna',
    period: 'Mar 2021 — Jul 2022',
    location: 'Mashhad, Iran',
    tech: ['React', 'File Upload', 'PDF Preview'],
  },
];

export const GITHUB_STATS = [
  { value: '4', id: 'projects' },
  { value: '5+', id: 'years' },
  { value: '6', id: 'roles' },
  { value: '10+', id: 'repos' },
] as const;
