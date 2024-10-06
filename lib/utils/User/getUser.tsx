import { axios } from "@/lib/axios";
import { baseURL } from "@/constants/(front)";

export async function getUsers() {
  try {
    const response = await axios.get(`${baseURL}/user/index`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
