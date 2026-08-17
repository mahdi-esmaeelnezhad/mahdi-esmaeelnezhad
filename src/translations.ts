export type Lang = 'en' | 'nl' | 'de' | 'es' | 'fr';

export const LANGUAGES: { code: Lang; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
];

interface ExperienceText {
  role: string;
  company: string;
  note: string;
  bullets: string[];
}

interface ProjectText {
  name: string;
  desc: string;
  challenge: string;
  role: string;
}

export interface Dict {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
  };
  hero: {
    badge: string;
    location: string;
    greeting: string;
    role: string;
    tagline: string;
    viewProjects: string;
    contactMe: string;
    downloadCV: string;
    stats: { years: string; projects: string; oss: string; users: string };
    scroll: string;
  };
  about: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    highlights: { icon: string; title: string; desc: string }[];
    lookingForTitle: string;
    lookingFor: string;
  };
  skills: {
    title: string;
    subtitle: string;
    categories: Record<string, string>;
  };
  projects: {
    title: string;
    subtitle: string;
    challengeLabel: string;
    roleLabel: string;
    liveDemo: string;
    sourceCode: string;
    items: Record<string, ProjectText>;
  };
  experience: {
    title: string;
    subtitle: string;
    items: Record<string, ExperienceText>;
  };
  education: {
    title: string;
    subtitle: string;
    items: { degree: string; school: string; period: string; desc: string }[];
  };
  services: {
    title: string;
    subtitle: string;
    items: { icon: string; title: string; desc: string }[];
  };
  oss: {
    title: string;
    subtitle: string;
    statement: string;
    statLabels: Record<string, string>;
    viewPr: string;
    prs: { repo: string; desc: string }[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: { quote: string; name: string; role: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    intro: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    locationValue: string;
    form: { name: string; email: string; message: string; send: string };
    socials: string;
  };
  footer: { rights: string; built: string };
  story: {
    bootKicker: string;
    bootLines: string[];
    bootDone: string;
    scroll: string;
    clock: string;
    deskTitle: string;
    deskCaption: string;
    ideTitle: string;
    buildCmd: string;
    building: string;
    success: string;
    bugTitle: string;
    bugType: string;
    debug: string[];
    hunt: string;
    archTitle: string;
    archCaption: string;
    teamTitle: string;
    teamCaption: string;
    messages: { who: string; text: string }[];
    globeCaption: string;
    termWho: string;
    termSkills: string;
    termOpen: string;
    endTitle: string;
    endCta: string;
  };
}

const en: Dict = {
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
  },
  hero: {
    badge: 'Frontend & Full-Stack Developer',
    location: 'Mashhad, Iran',
    greeting: "Hi, I'm",
    role: 'Frontend / Full-Stack Developer',
    tagline:
      'I build web applications with React, Vue.js, and TypeScript — plus practical backend work with Node.js and Blazor. 5+ years across education, logistics, retail, and tourism products.',
    viewProjects: 'View Projects',
    contactMe: 'Contact Me',
    downloadCV: 'Download CV',
    stats: {
      years: 'Years of Experience',
      projects: 'Open Source Projects',
      oss: 'Professional Roles',
      users: 'Public Repositories',
    },
    scroll: 'Scroll to explore',
  },
  about: {
    title: 'About Me',
    subtitle: 'Developer focused on frontend excellence',
    paragraphs: [
      'I am a developer with 5+ years of hands-on experience building web applications. My main focus is frontend with React, Vue.js, and TypeScript, plus practical backend work with Node.js and Blazor.',
      'My work history spans education, logistics, retail, and tourism products in Iran — from barcode scanner apps and CMS platforms to school management panels and transportation systems.',
      'I enjoy defining reusable components, improving performance and SEO, and connecting polished UIs with reliable backend services.',
    ],
    highlights: [
      { icon: '🚀', title: '5+ Years', desc: 'Building production web applications end to end' },
      { icon: '⚛️', title: 'Frontend Lead', desc: 'Leading component patterns and state management' },
      { icon: '🔗', title: 'Full-Stack', desc: 'React frontends connected to Node.js and Blazor backends' },
      { icon: '🌍', title: 'Mashhad, Iran', desc: 'Persian native · English professional working level' },
    ],
    lookingForTitle: 'What I bring',
    lookingFor:
      'Strong frontend craftsmanship with React and Vue, real-time system experience, CMS builder expertise, and a track record of shipping products across multiple industries.',
  },
  skills: {
    title: 'Skills & Tech Stack',
    subtitle: 'The tools I use to bring products to life',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      aiml: 'AI & Machine Learning',
      tools: 'Tools & DevOps',
    },
  },
  projects: {
    title: 'Featured Projects',
    subtitle: 'A selection of the work I care most about',
    challengeLabel: 'Challenge',
    roleLabel: 'My Role',
    liveDemo: 'Live Demo',
    sourceCode: 'Source',
    items: {
      orbit: {
        name: 'Orbit Task Platform',
        desc: 'Team project and task management backend with JWT authentication, Redis caching, Swagger docs, and Docker Compose.',
        challenge: 'Designing a scalable API with auth, caching, and clear documentation for team collaboration.',
        role: 'Sole developer — built the full backend architecture and deployment pipeline.',
      },
      smartTable: {
        name: 'Angular Smart Table Pro',
        desc: 'Angular data table library with virtual scroll, server-side datasource support, drag-and-drop, and Excel export.',
        challenge: 'Handling large datasets smoothly while keeping the API flexible for different backend integrations.',
        role: 'Created and published the library as an open-source Angular package.',
      },
      configkit: {
        name: 'ConfigKit',
        desc: 'Type-safe Go configuration library for JSON, YAML, TOML, and ENV with hot reload and validation.',
        challenge: 'Supporting multiple config formats with a unified, type-safe API and runtime validation.',
        role: 'Designed and implemented the library from scratch in Go.',
      },
      jobCrawler: {
        name: 'Job Crawler Suite',
        desc: 'Python toolkit for crawling job listings from multiple Iranian job platforms and exporting results to Excel.',
        challenge: 'Parsing heterogeneous site structures reliably and producing clean, exportable data.',
        role: 'Built the crawlers, export pipeline, and CLI tooling.',
      },
    },
  },
  experience: {
    title: 'Work Experience',
    subtitle: 'Where I have made an impact',
    items: {
      tipax: {
        role: 'Frontend Team Lead',
        company: 'Tipax Representatives Management Panel',
        note: 'Logistics · Full-time',
        bullets: [
          'Working on the Tipax representatives management panel with React, TypeScript, and Material UI.',
          'Helped define reusable components and state management patterns for the frontend team.',
        ],
      },
      refah: {
        role: 'Senior Frontend Developer',
        company: 'Refah Barcode Scanner App (Tosan Techno)',
        note: 'Retail · Full-time',
        bullets: [
          'Developed frontend screens for a barcode scanner application used in Refah retail stores.',
          'Worked on real-time communication between scanners, POS devices, and payment systems.',
        ],
      },
      threeclick: {
        role: 'Frontend Developer',
        company: '3click (Deltaban)',
        note: 'B2C Platform · Full-time',
        bullets: [
          'Built and maintained web apps with Vue.js and Nuxt.',
          'Took part in migrating from Nuxt 2 to Nuxt 3 and improving performance and SEO.',
        ],
      },
      toptours: {
        role: 'Full-Stack Developer',
        company: 'TopTours Custom CMS Platform',
        note: 'Tourism · Full-time',
        bullets: [
          'Built a drag-and-drop frontend builder interface with React.',
          'Connected the builder UI with a Blazor Server admin panel and backend services.',
        ],
      },
      kanoon: {
        role: 'Frontend Developer',
        company: 'Kanoon Ghalamchi Educational Platform',
        note: 'Education · Full-time',
        bullets: [
          'Worked on the school website and management panel with React.',
          'Improved UI flows and integration with backend APIs.',
        ],
      },
      mabna: {
        role: 'Frontend Developer',
        company: 'Mabna Intelligent Computing (Amirkabir University)',
        note: 'Transportation & Petrochemical · Full-time',
        bullets: [
          'Developed React apps for transportation and petrochemical use cases.',
          'Implemented a multi-format file uploader with preview (images, PDF, Word).',
        ],
      },
    },
  },
  education: {
    title: 'Education',
    subtitle: 'Academic background',
    items: [],
  },
  services: {
    title: 'What I Do',
    subtitle: 'How I can help your team',
    items: [
      {
        icon: '⚛️',
        title: 'Frontend Development',
        desc: 'React, Vue.js, Nuxt, Angular, and Next.js interfaces with TypeScript and modern UI libraries.',
      },
      {
        icon: '🔗',
        title: 'Full-Stack Development',
        desc: 'End-to-end features with Node.js, Blazor, and Python — from API to UI.',
      },
      {
        icon: '📱',
        title: 'Real-Time Systems',
        desc: 'WebSocket integrations for scanners, POS devices, and live data flows.',
      },
      {
        icon: '⚡',
        title: 'Performance & SEO',
        desc: 'Nuxt migrations, bundle optimization, and measurable speed improvements.',
      },
      {
        icon: '🏗️',
        title: 'CMS & Builders',
        desc: 'Drag-and-drop page builders and admin panels connected to backend services.',
      },
      {
        icon: '🧭',
        title: 'Team Leadership',
        desc: 'Reusable component patterns, state management standards, and frontend architecture.',
      },
    ],
  },
  oss: {
    title: 'Open Source',
    subtitle: 'Projects I build and share on GitHub',
    statement:
      'Beyond client work, I maintain open-source tools — from Angular libraries and Go config utilities to Python crawlers and Node.js backends.',
    statLabels: {
      projects: 'Open source projects',
      years: 'Years of experience',
      roles: 'Professional roles',
      repos: 'Public repositories',
    },
    viewPr: 'View on GitHub',
    prs: [
      { repo: 'orbit-task-platform', desc: 'Team task management backend with JWT, Redis, Swagger, and Docker Compose.' },
      { repo: 'ngx-smart-table-pro', desc: 'Angular data table with virtual scroll, server-side data, and Excel export.' },
      { repo: 'configkit', desc: 'Type-safe Go configuration library with hot reload and validation.' },
      { repo: 'crawl-py', desc: 'Python job listing crawler suite with Excel export for Iranian job platforms.' },
    ],
  },
  testimonials: {
    title: 'Testimonials',
    subtitle: 'What colleagues say about working with me',
    items: [],
  },
  contact: {
    title: 'Get In Touch',
    subtitle: "Let's build something great together",
    intro:
      "Whether you have a project, a role, or just want to connect — my inbox is always open. Based in Mashhad and happy to collaborate remotely.",
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    locationLabel: 'Location',
    locationValue: 'Mashhad, Iran',
    form: {
      name: 'Your name',
      email: 'Your email',
      message: 'Your message',
      send: 'Send Message',
    },
    socials: 'Find me on',
  },
  footer: {
    rights: 'All rights reserved.',
    built: 'Designed & built with React + TypeScript',
  },
  story: {
    bootKicker: 'MAHDI OS  ·  v5.2',
    bootLines: [
      'Loading kernel…',
      'Mounting React / Vue / Angular…',
      'Starting Node + Blazor runtimes…',
      'Hydrating UI…',
    ],
    bootDone: 'Welcome, visitor.',
    scroll: 'Scroll to enter',
    clock: '11:47 PM',
    deskTitle: 'A quiet room. One more deploy.',
    deskCaption:
      'Frontend / full-stack developer. Mashhad, Iran. The monitor is still on.',
    ideTitle: 'Keep scrolling. The editor becomes the product.',
    buildCmd: 'pnpm build && deploy --prod',
    building: 'Building…',
    success: 'Deployment successful',
    bugTitle: 'Something went wrong.',
    bugType: 'TypeError: Cannot read properties of undefined',
    debug: ['console.log()', 'debugger', 'fix', '✓ All tests passed'],
    hunt: "I don't avoid bugs. I hunt them.",
    archTitle: 'Then zoom out.',
    archCaption: 'Frontend, API, data — one system, many stacks.',
    teamTitle: 'From writing code to leading frontend teams.',
    teamCaption: 'Team lead at Tipax. Reusable patterns. Shipped anyway.',
    messages: [
      { who: 'Ali', text: 'PR is ready for review.' },
      { who: 'Sara', text: 'Found an edge case on checkout.' },
      { who: 'Mahdi', text: "Let's pair on it." },
    ],
    globeCaption: 'Mashhad, Iran.',
    termWho: 'whoami',
    termSkills: 'cat skills.txt',
    termOpen: 'open contact',
    endTitle: 'The next project could be ours.',
    endCta: "Let's talk",
  },
};


export const translations: Record<Lang, Dict> = { en, nl: en, de: en, es: en, fr: en };
