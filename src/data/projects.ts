import { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'Recycle Web Platform',
    description: 'Community-based recycling platform that promotes sustainable waste management and encourages users to recycle through digital engagement.',
    techStack: ['Laravel', 'PHP', 'SQLite', 'Tailwind CSS'],
    features: [
      'User authentication',
      'Recycling item management',
      'Community participation',
      'Responsive UI'
    ],
    githubUrl: 'https://github.com/ZayYarPhyo',
    imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Blog Post System',
    description: 'Full-stack blogging platform allowing users to create, manage, and publish articles efficiently.',
    techStack: ['Laravel', 'PHP', 'SQLite'],
    features: [
      'Authentication',
      'CRUD operations',
      'Category management',
      'Responsive dashboard'
    ],
    githubUrl: 'https://github.com/ZayYarPhyo',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'My Personal Movies Dashboard',
    description: 'Personal movie tracking dashboard for managing watchlists, favorites, and movie information.',
    techStack: ['Python', 'SQLite', 'JavaScript'],
    features: [
      'Movie management',
      'Search functionality',
      'Favorites tracking',
      'Responsive interface'
    ],
    githubUrl: 'https://github.com/ZayYarPhyo',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];
