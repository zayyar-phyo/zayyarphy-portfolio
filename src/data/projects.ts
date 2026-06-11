import { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'kindred_space',
    description: 'KindredSpace is a sharing platform designed for local communities. The goal of this project is to deepen bonds among residents by exchanging goods through "offering" and "requesting" without using money. ',
    techStack: ['Python', 'Django', 'SQLite'],
    features: [
      'User authentication',
      'Item management',
      'Community participation',
      'Responsive UI'
    ],
    githubUrl: 'https://github.com/zayyar-phyo',
    imageUrl: '/rwp-cover.png'
  },
  {
    title: 'Blog Post System',
    description: 'Full-stack blogging platform allowing users to create, manage, and publish articles efficiently.',
    techStack: ['PHP', 'Laravel', 'MySQL'],
    features: [
      'Authentication',
      'CRUD operations',
      'Category management'
    ],
    githubUrl: 'https://github.com/zayyar-phyo',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'My Personal Movies Dashboard',
    description: 'Personal movie tracking dashboard for managing watchlists, favorites, and movie information.',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Movie management',
      'Search functionality',
      'Favorites tracking',
      'Responsive interface'
    ],
    githubUrl: 'https://github.com/zayyar-phyo',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];
