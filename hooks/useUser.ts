import useSWR from "swr";
import { getUsers } from "@/lib/utils/User/getUser";
import { userAuthTypes } from "@/types/user/userAuthTypes";

const fetcher = () => getUsers();

export function useUsers() {
  const {
    data: users,
    error,
    mutate,
    isValidating,
    isLoading,
  } = useSWR<userAuthTypes[]>(`users`, fetcher);

  return {
    users,
    error,
    mutate,
    isValidating,
    isLoading: users === undefined && isLoading,
  };
}
