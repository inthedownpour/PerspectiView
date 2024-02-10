import { privateApi } from "@/util/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

const useCharQueryModule = (teamId, productId) => {
  const queryClient = useQueryClient();

  const { data: charData, isSuccess: getCharIsSuccess } = useQuery({
    queryKey: ["char", teamId, productId],
    queryFn: async () => {
      const response = await privateApi.get(`/api/team/${teamId}/product/${productId}/character`
      );
      console.log(response);
      return response.data.response;
    },
  });

  const { mutate: createChar } = useMutation({
    mutationFn: async (newData) => {
      const response = await privateApi.post(`/api/team/${teamId}/product/${productId}/character`, newData);
      console.log(response);
      return response.data.response;
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["char"] });
    },
  });
  const { mutate: updateChar } = useMutation({
    mutationFn: async (updatedData) => {
      const response = await privateApi.put(
        `/api/team/${teamId}/product/${productId}/character`,
        updatedData
      );
      console.log(response);
      return response.data.response;
    },
    onSuccess: () => {
      // Invalidate and refetch
      // queryClient.invalidateQueries({ queryKey: ["plotList"] });
    },
  });

  const { mutate: deleteChar } = useMutation({
    mutationFn: async () => {
      const response = await privateApi.delete(
        `/api/team/${teamId}/product/${productId}/character`
      );
      console.log(response);
      return response.data.response;
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["char"] });
    },
  });


  return { charData, getCharIsSuccess, createChar, updateChar, deleteChar };
};

export default useCharQueryModule;
