import useSWR from "swr";
import { productTypes } from "@/types/product/productTypes";
import { getProducts } from "@/lib/utils/Product/getProducts";
import { getProductShow } from "@/lib/utils/Product/getProductShow";
import { productDetailTypes } from "@/types/product/productDetailTypes";

const fetcherProducts = () => getProducts();

export function useProducts() {
  const {
    data: products,
    error,
    mutate,
    isValidating,
    isLoading,
  } = useSWR<productTypes[]>(`products`, fetcherProducts);

  return {
    products,
    error,
    mutate,
    isValidating,
    isLoading: products === undefined && isLoading,
  };
}

const fetcherProductDetail = (slug: string) => getProductShow(slug);

export function useProductDetail(slug: string) {
  const {
    data: productDetail,
    error,
    mutate,
    isValidating,
    isLoading,
  } = useSWR<productDetailTypes>(slug ? slug : null, fetcherProductDetail);

  return {
    productDetail,
    error,
    mutate,
    isValidating,
    isLoading: productDetail === undefined && isLoading,
  };
}
