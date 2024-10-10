import useSWR from "swr";
import { getUsers } from "@/lib/utils/User/getUsers";
import { userAuthTypes } from "@/types/user/userAuthTypes";
import { getUser } from "@/lib/utils/User/getUser";
import { userProfileTypes } from "@/types/user/userProfileTypes";


export function useUser() {
  const fetcher = () => getUser();
  const {
    data: user,
    error,
    mutate,
    isValidating,
    isLoading,
  } = useSWR<userProfileTypes>(`user`, fetcher);

  return {
    user,
    error,
    mutate,
    isValidating,
    isLoading: user === undefined && isLoading,
  };
}



export function useUsers() {
  const fetcher = () => getUsers();
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
