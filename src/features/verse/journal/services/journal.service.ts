import axiosInstance from '@/lib/axios';
import { Journal } from '../types';

export const getPublicJournals = async (): Promise<Journal[]> => {
  const res = await axiosInstance.get('/journals', {
    params: { status: 'public', limit: 3 },
  });
  return res.data.data;
};
