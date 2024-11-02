import { axios } from "@/lib/axios";
import { baseURL } from "@/constants/(front)";

export async function getBlogs() {
  try {
    const response = await axios.get(`${baseURL}/blog/index`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
}
