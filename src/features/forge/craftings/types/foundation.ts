export interface Foundation {
  id: string;
  name: string;
  description: string;
  image: string;
  tech: string[];
  category: string;
  downloads: number;
  featured: boolean;
  link?: string;
  repo?: string;
}

export type ContentType = 'projects' | 'foundations' | 'all';
