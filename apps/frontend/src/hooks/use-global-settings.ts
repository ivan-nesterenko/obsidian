import { useQuery, useQueryClient } from "@tanstack/react-query";


export const useGlobalSettings = () => {
  const queryClient = useQueryClient();
  // const { isPending, isError, data, error }  = useQuery({ queryKey: ['globalSettings'], queryFn: async () => {} })

  return {};
};
