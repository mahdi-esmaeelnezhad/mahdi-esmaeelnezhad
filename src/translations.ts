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
    badge: 'Senior Frontend Developer',
    location: 'Mashhad, Iran',
    greeting: "Hi, I'm",
    role: 'Senior Frontend Developer',
    tagline:
      'I design and build scalable product user interfaces with React.js, TypeScript, and Material UI — plus strong state management with Redux and Context API. 5+ years shipping frontend for logistics, retail, tourism, and education teams in Tehran.',
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
    subtitle: 'Senior Frontend Developer focused on React excellence',
    paragraphs: [
      'I am a Senior Frontend Developer with 5+ years of hands-on experience designing, developing, and documenting product user interfaces. My core stack is React.js, TypeScript, JavaScript, HTML, and CSS, with production work in Material UI, Redux, and Context API.',
      'My work history spans logistics, retail, tourism, and education products in Tehran — from barcode scanner apps and CMS builders to management panels and transportation systems. Based in Mashhad and open to remote collaboration.',
      'I lead reusable component libraries, improve performance and SEO, run code reviews, write technical documentation, and connect polished UIs with reliable REST APIs and real-time services.',
    ],
    highlights: [
      { icon: '🚀', title: '5+ Years', desc: 'Shipping production React user interfaces end to end' },
      { icon: '⚛️', title: 'Frontend Lead', desc: 'Reusable components, Redux / Context API, Material UI' },
      { icon: '🧩', title: 'UI Architecture', desc: 'Readable, maintainable React codebases across products' },
      { icon: '🌍', title: 'Mashhad, Iran', desc: 'Worked in Tehran · Persian native · English professional' },
    ],
    lookingForTitle: 'What I bring',
    lookingFor:
      'Senior React craftsmanship, teamwork and collaboration, attention to detail, and a track record of delivering UI products on time — from prototypes and wireframes to production, troubleshooting, and technical documentation.',
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
    subtitle: 'Frontend impact across Tehran product teams',
    items: {
      tipax: {
        role: 'Frontend Team Lead',
        company: 'Tipax Representatives Management Panel',
        note: 'Logistics · Full-time · Tehran',
        bullets: [
          'Designed and developed scalable React.js / TypeScript user interfaces with Material UI for the Tipax representatives management panel.',
          'Built reusable React components and defined Redux / Context API state patterns used across multiple screens by the frontend team.',
          'Led code reviews, technical assistance, and improvements to workflows, toolchain, and technical documentation.',
        ],
      },
      refah: {
        role: 'Senior Frontend Developer',
        company: 'Refah Barcode Scanner App (Tosan Techno)',
        note: 'Retail · Full-time · Tehran',
        bullets: [
          'Developed React.js user interfaces for a barcode scanner application used in Refah retail stores.',
          'Implemented real-time HTTP / WebSocket flows between scanners, POS devices, and payment systems; verified integrations with Postman and Chrome DevTools.',
        ],
      },
      threeclick: {
        role: 'Frontend Developer',
        company: '3click (Deltaban)',
        note: 'B2C Platform · Full-time · Tehran',
        bullets: [
          'Built and maintained production user interfaces with Vue.js, Nuxt, HTML, and CSS for a B2C travel platform.',
          'Migrated Nuxt 2 to Nuxt 3 and improved performance and SEO of the shared component layer.',
        ],
      },
      toptours: {
        role: 'Full-Stack Developer',
        company: 'TopTours Custom CMS Platform',
        note: 'Tourism · Full-time · Tehran',
        bullets: [
          'Implemented React.js prototypes and a drag-and-drop frontend builder from wireframes and UI/UX designs.',
          'Connected the React UI to a Blazor Server admin panel over REST APIs and documented complex builder behavior.',
        ],
      },
      kanoon: {
        role: 'Frontend Developer',
        company: 'Kanoon Ghalamchi Educational Platform',
        note: 'Education · Full-time · Tehran',
        bullets: [
          'Developed React.js screens for the school website and management panel with strong attention to detail.',
          'Improved UI flows and REST API integration for content and school-management workflows.',
        ],
      },
      mabna: {
        role: 'Frontend Developer',
        company: 'Mabna Intelligent Computing (Amirkabir University)',
        note: 'Transportation & Petrochemical · Full-time · Tehran',
        bullets: [
          'Developed React applications for transportation and petrochemical use cases.',
          'Implemented a multi-format file uploader with preview for images, PDF, and Word documents.',
        ],
      },
    },
  },
  education: {
    title: 'Education',
    subtitle: 'Academic background',
    items: [
      {
        degree: 'B.Sc. in Software Engineering',
        school: 'Islamic Azad University, Science and Research Branch',
        period: 'Tehran, Iran',
        desc: 'Bachelor’s degree in Software Engineering with focus on software design, programming, and building production web applications.',
      },
    ],
  },
  services: {
    title: 'What I Do',
    subtitle: 'How I help product teams as a Senior Frontend Developer',
    items: [
      {
        icon: '⚛️',
        title: 'React UI Development',
        desc: 'Scalable React.js and TypeScript interfaces with Material UI, Redux, Context API, HTML, and CSS.',
      },
      {
        icon: '🧱',
        title: 'Reusable Components',
        desc: 'Component libraries and design-system patterns that stay readable and reusable across projects.',
      },
      {
        icon: '📱',
        title: 'Real-Time Interfaces',
        desc: 'WebSocket and REST API integrations for scanners, POS devices, and live operational UIs.',
      },
      {
        icon: '⚡',
        title: 'Performance & SEO',
        desc: 'Nuxt migrations, bundle optimization, and frontend performance improvements.',
      },
      {
        icon: '📝',
        title: 'Technical Documentation',
        desc: 'Architecture notes, setup guides, and clear explanations of complex UI code across the SDLC.',
      },
      {
        icon: '🧭',
        title: 'Frontend Leadership',
        desc: 'Code reviews, mentoring, workflow/toolchain improvements, and shipping on time under pressure.',
      },
    ],
  },
  oss: {
    title: 'Open Source',
    subtitle: 'Projects I build and share on GitHub',
    statement:
      'Beyond client work, I maintain open-source tools that sharpen the same craft I use as a Senior Frontend Developer — reusable UI libraries, APIs, and developer tooling.',
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
      "Whether you have a Senior Frontend role, a React product challenge, or just want to connect — my inbox is always open. Based in Mashhad, previously shipping from Tehran teams, and happy to collaborate remotely.",
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
    built: 'Designed & built with React + TypeScript · Senior Frontend Developer',
  },
  story: {
    bootKicker: 'MAHDI OS  ·  v5.2',
    bootLines: [
      'Loading kernel…',
      'Mounting React / TypeScript / Material UI…',
      'Starting Redux + Context runtimes…',
      'Hydrating UI…',
    ],
    bootDone: 'Welcome, visitor.',
    scroll: 'Scroll to enter',
    clock: '11:47 PM',
    deskTitle: 'A quiet room. One more deploy.',
    deskCaption:
      'Senior Frontend Developer. Mashhad, Iran. Worked in Tehran. The monitor is still on.',
    ideTitle: 'Keep scrolling. The editor becomes the product.',
    buildCmd: 'pnpm build && deploy --prod',
    building: 'Building…',
    success: 'Deployment successful',
    bugTitle: 'Something went wrong.',
    bugType: 'TypeError: Cannot read properties of undefined',
    debug: ['console.log()', 'debugger', 'fix', '✓ All tests passed'],
    hunt: "I don't avoid bugs. I hunt them.",
    archTitle: 'Then zoom out.',
    archCaption: 'React UI, APIs, state — one frontend system, many products.',
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
    endTitle: 'The next frontend project could be ours.',
    endCta: "Let's talk",
  },
};


export const translations: Record<Lang, Dict> = { en, nl: en, de: en, es: en, fr: en };
