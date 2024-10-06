import { toast } from "react-toastify";
import { axios } from "@/lib/axios";
import { baseURL } from "@/constants/(front)";

export async function login(
  email: string,
  password: string,
  rememberMe: boolean
) {
  try {
    const res = await axios.post(`${baseURL}/auth/login`, {
      email,
      password,
      remember: rememberMe,
    });
    return res;
  } catch (err: any) {
    console.error(err);
    toast(err.response?.data?.message || "API Hatası");
  }
}
