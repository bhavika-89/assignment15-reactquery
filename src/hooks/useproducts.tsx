import { useQuery } from "@tanstack/react-query";
import { fetchProducts, fetchProductsByCategory } from "../api";

export const useProducts = (category?: string) => {
  return useQuery({
    queryKey: category ? ["products", category] : ["products"],
    queryFn: () => (category ? fetchProductsByCategory(category) : fetchProducts()),
  });
};
