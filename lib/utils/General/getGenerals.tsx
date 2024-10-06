import { axios } from "@/lib/axios";
import { baseURL } from "@/constants/(front)";

export async function getGenerals() {
  try {
    const response = await axios.get(`${baseURL}/general/index`);
    return response.data;
  } catch (error) {
    console.error("Error fetching generals:", error);
    throw error;
  }
}
