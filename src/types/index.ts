export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
  level: number;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl: string;
}
