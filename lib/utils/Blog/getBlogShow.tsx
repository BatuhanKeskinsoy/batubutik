import { axios } from "@/lib/axios";
import { baseURL } from "@/constants/(front)";

export async function getBlogShow(slug: string) {
  try {
    const response = await axios.get(`${baseURL}/blog/${slug}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw error;
  }
}
