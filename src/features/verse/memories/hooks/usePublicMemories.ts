import { useQuery } from '@tanstack/react-query';
import { getPublicMemories } from '../services';
import { Memory } from '../types';

export const usePublicMemories = () => {
  return useQuery<Memory[]>({
    queryKey: ['public-memories'],
    queryFn: getPublicMemories,
  });
};
