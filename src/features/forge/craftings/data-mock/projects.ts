import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 1,
    name: 'E-Commerce Platform',
    slug: 'e-commerce-platform',
    description:
      'Full-stack e-commerce solution with Next.js, Stripe integration, and admin dashboard',
    image: '/projects/ecommerce.jpg',
    tech: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Stripe',
      'Tailwind',
    ],
    category: 'Full-Stack',
    status: 'Completed',
    link: 'https://demo.example.com',
    repo: 'https://github.com/username/project',
    featured: true,
    year: 2024,
  },
  {
    id: 2,
    name: 'AI Chat Application',
    slug: 'ai-chat-application',
    description:
      'Real-time chat app with AI integration using OpenAI API and WebSocket',
    image: '/projects/ai-chat.jpg',
    tech: ['React', 'Node.js', 'Socket.io', 'OpenAI', 'MongoDB', 'Express'],
    category: 'AI/ML',
    status: 'In Progress',
    link: 'https://chat.example.com',
    repo: 'https://github.com/username/ai-chat',
    featured: true,
    year: 2024,
  },
  {
    id: 3,
    name: 'Task Management System',
    slug: 'task-management-system',
    description:
      'Collaborative project management tool with real-time updates and team features',
    image: '/projects/task-manager.jpg',
    tech: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'Docker'],
    category: 'Productivity',
    status: 'Completed',
    link: 'https://tasks.example.com',
    repo: 'https://github.com/username/task-manager',
    featured: false,
    year: 2023,
  },
];

export const categories = [
  'All',
  'Full-Stack',
  'Frontend',
  'Backend',
  'AI/ML',
  'Mobile',
  'Productivity',
];

export const techStack = [
  'React',
  'Next.js',
  'Vue.js',
  'Node.js',
  'TypeScript',
  'Python',
  'Laravel',
];
