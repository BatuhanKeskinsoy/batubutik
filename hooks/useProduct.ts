import useSWR from "swr";
import { productTypes } from "@/types/product/productTypes";
import { getProducts } from "@/lib/utils/Product/getProducts";

const fetcher = () => getProducts();

export function useProducts() {
  const {
    data: products,
    error,
    mutate,
    isValidating,
    isLoading,
  } = useSWR<productTypes[]>(`products`, fetcher);

  return {
    products,
    error,
    mutate,
    isValidating,
    isLoading: products === undefined && isLoading,
  };
}
