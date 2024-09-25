import { userAuthTypes } from "@/types/user/userAuthTypes";
import { toast } from "react-toastify";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";

export function login(
  email: string,
  password: string,
  rememberMe: boolean,
  setUser: Dispatch<SetStateAction<userAuthTypes | null>>
) {
  const url = process.env.NEXT_PUBLIC_API_BASEURL || "";

  axios
    .post(`${url}/auth/login`, {
      email,
      password,
      remember: rememberMe,
    })
    .then((res) => {
      if (res.status === 200) {
        toast(res.data.message);

        const { uid, fullName, email, role } = res.data.user;
        const userData: userAuthTypes = { uid, fullName, email, role };
        setUser(userData);

        const userString = JSON.stringify(userData);
        if (rememberMe) {
          localStorage.setItem("user", userString);
        } else {
          sessionStorage.setItem("user", userString);
        }

        const token = res.data.token;
        if (token) {
          if (rememberMe) {
            typeof window !== "undefined" && localStorage.setItem("token", token);
          } else {
            typeof window !== "undefined" && sessionStorage.setItem("token", token);
          }
        } else {
          console.error("Token not found in the response.");
        }
      }
    })
    .catch((err) => {
      console.error(err);
      toast(err.response?.data?.message || "API Hatası");
    });
}