import { useQuery } from '@tanstack/react-query';
import { getPublicProjects } from '../services';
import { Project } from '../types';

export const usePublicProjects = (lang: string) => {
  return useQuery<Project[]>({
    queryKey: ['public-projects', lang],
    queryFn: () => getPublicProjects(lang),
  });
};
