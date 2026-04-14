export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image?: string;
  github?: string;
  liveUrl?: string;
  pdf?: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
  image?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Publication {
  title: string;
  authors: string;
  conference: string;
  year: number;
  award?: string;
  pdf: string;
}