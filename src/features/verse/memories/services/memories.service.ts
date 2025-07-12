import axiosInstance from '@/lib/axios';
import { Memory } from '../types';

export const getPublicMemories = async (): Promise<Memory[]> => {
  const res = await axiosInstance.get('/memories', {
    params: { status: 'public', limit: 3 },
  });
  return res.data.data;
};
