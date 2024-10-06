import useSWR from "swr";
import { discountTypes } from "@/types/discountTypes";
import { getDiscounts } from "@/lib/utils/General/getDiscounts";

const fetcher = () => getDiscounts();

export function useDiscountCodes() {
  const {
    data: discountCodes,
    error,
    mutate,
    isValidating,
    isLoading,
  } = useSWR<discountTypes[]>(`discountCodes`, fetcher);

  return {
    discountCodes,
    error,
    mutate,
    isValidating,
    isLoading: discountCodes === undefined && isLoading,
  };
}
