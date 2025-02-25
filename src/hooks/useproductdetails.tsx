import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../api";

export const useProductDetail = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
  });
};
