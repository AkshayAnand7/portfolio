export const SITE_CONFIG = {
  name: "Akshay Anand",
  title: "Akshay Anand — Full Stack Developer & AI Builder",
  description:
    "Full Stack Developer, Freelancer, and AI Builder crafting digital experiences that solve real-world problems.",
  url: "https://akshay.dev",
};

export const ROLES = [
  "Full Stack Developer",
  "Freelancer",
  "AI Builder",
] as const;

export const ABOUT = {
  headline: "I build digital experiences that solve real-world problems.",
  bio: "B.Tech Information Technology student at Dr. N.G.P. Institute of Technology, Coimbatore.",
  focuses: [
    "Full Stack Development",
    "AI Systems",
    "Automation",
    "Data Analytics",
  ],
};

export const SKILLS = {
  Frontend: {
    items: ["React", "Next.js", "TypeScript", "HTML", "CSS"],
    speed: 0.2,
  },
  Backend: {
    items: ["Node.js", "Express"],
    speed: 0.5,
  },
  Database: {
    items: ["MySQL", "Supabase"],
    speed: 1.0,
  },
  "AI & Analytics": {
    items: ["SQL", "Excel", "Power BI"],
    speed: 1.5,
  },
} as const;

export type SkillCategory = keyof typeof SKILLS;

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  gradient: string;
}

export const PROJECTS: Project[] = [
  {
    id: "muskymisty",
    title: "MuskyMisty",
    subtitle: "Freelance Business Website",
    description:
      "A premium business website built from the ground up for a freelance client. Focused on conversion, performance, and a clean modern aesthetic.",
    tags: ["Next.js", "Tailwind", "Vercel"],
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    id: "auth-platform",
    title: "Authentication Platform",
    subtitle: "Secure User Management System",
    description:
      "End-to-end authentication system with JWT tokens, OAuth providers, role-based access control, and session management.",
    tags: ["Node.js", "PostgreSQL", "JWT"],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    subtitle: "Business Intelligence & Reporting",
    description:
      "Interactive dashboard with real-time data visualization, custom report generation, and AI-powered insights.",
    tags: ["React", "SQL", "Power BI"],
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
];

export interface TimelineEntry {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export const TIMELINE: TimelineEntry[] = [
  {
    id: "kerala",
    title: "Kerala",
    subtitle: "Where it all began",
    description: "Born and raised with a natural curiosity for technology and how things work.",
    icon: "🌿",
  },
  {
    id: "ngp",
    title: "NGP Institute of Technology",
    subtitle: "B.Tech Information Technology",
    description:
      "Pursuing a degree in IT at Dr. N.G.P. Institute of Technology, Coimbatore. Building a strong academic foundation.",
    icon: "🎓",
  },
  {
    id: "webdev",
    title: "Web Development",
    subtitle: "Finding the craft",
    description:
      "Discovered the power of building for the web. Mastered React, Next.js, and modern full-stack development.",
    icon: "💻",
  },
  {
    id: "freelancing",
    title: "Freelancing",
    subtitle: "Building for clients",
    description:
      "Started delivering real projects to real clients. Learning to solve business problems through code.",
    icon: "🚀",
  },
  {
    id: "ai",
    title: "AI & Automation",
    subtitle: "The next frontier",
    description:
      "Exploring AI agents, automation systems, and intelligent software that can think and scale.",
    icon: "🤖",
  },
];

export const VISION = {
  statement:
    "The future belongs to software that can think, automate, and scale.",
  interests: [
    "AI Agents",
    "Automation Systems",
    "SaaS Products",
    "Digital Businesses",
  ],
};

export const CONTACT = {
  tagline: "Let's build something meaningful.",
  email: "akshayanandmp7@gmail.com",
  github: "https://github.com/AkshayAnand7",
  linkedin: "https://www.linkedin.com/in/akshay-anand-mp-27y06",
};
