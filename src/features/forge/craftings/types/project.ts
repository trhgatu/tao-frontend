export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  tech: string[];
  category: string;
  status: 'Completed' | 'In Progress';
  link?: string;
  repo?: string;
  featured: boolean;
  year: number;
  slug: string;
}

export type ViewMode = 'grid' | 'list';
export type Category =
  | 'All'
  | 'Full-Stack'
  | 'Frontend'
  | 'Backend'
  | 'AI/ML'
  | 'Mobile'
  | 'Productivity';
