import axiosInstance from '@/lib/axios';
import { Project } from '../types';

export const getPublicProjects = async (lang: string): Promise<Project[]> => {
  const res = await axiosInstance.get('/projects', {
    params: { lang },
  });
  return res.data.data;
};

export const getPublicProjectBySlug = async (
  slug: string,
  lang: string
): Promise<Project> => {
  const res = await axiosInstance.get(`/projects/${slug}`, {
    params: { lang },
  });
  return res.data.data;
};
