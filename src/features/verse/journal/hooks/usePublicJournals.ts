import { useQuery } from '@tanstack/react-query';
import { getPublicJournals } from '../services';
import { Journal } from '../types';

export const usePublicJournals = () => {
  return useQuery<Journal[]>({
    queryKey: ['public-journals'],
    queryFn: getPublicJournals,
  });
};
