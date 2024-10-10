import { axios } from "@/lib/axios";
import { baseURL } from "@/constants/(front)";

export async function getUser() {
  try {
    const response = await axios.get(`${baseURL}/user/profile`);
    return response.data;
  } catch (error: any) {
    console.error("Error fetching user:", error);
    return error;
  }
}
