import { getGenerals } from "@/lib/utils/General/getGenerals";
import { generalsTypes } from "@/types/generalTypes";
import useSWR from "swr";

const fetcher = () => getGenerals();

export function useGenerals() {
  const {
    data: generals,
    error,
    mutate,
    isValidating,
    isLoading,
  } = useSWR<generalsTypes>(`generals`, fetcher);

  return {
    generals,
    error,
    mutate,
    isValidating,
    isLoading: generals === undefined && isLoading,
  };
}
