import { axios } from "@/lib/axios";
import { baseURL } from "@/constants/(front)";

export async function getAbout() {
  try {
    const response = await axios.get(`${baseURL}/general/about`);
    return response.data;
  } catch (error) {
    console.error("Error fetching about:", error);
    throw error;
  }
}
