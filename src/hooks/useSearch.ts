
import { useQuery } from '@tanstack/react-query';
import fetchWrapper from "@/service/fetchwrapper";

export const useSearch = (search: string) => {
  return useQuery({
    queryKey: ['search-data', search],
    queryFn: async () => {
      if (search) {
        const url = `/all?title_like=${search}`;
        return fetchWrapper<any[]>(url, {
          method: 'GET',
        });
      }
      return [];
    },
    enabled: !!search, 
  });
};