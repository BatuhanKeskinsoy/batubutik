import { axios } from "@/lib/axios";
import { baseURL } from "@/constants/(front)";

export async function getProductComments(code: string) {
  try {
    const response = await axios.get(`${baseURL}/product/comments/${code}`);
    return response.data;
  } catch (error: any) {
    console.error("Error fetching comments:", error);
    throw error;
  }
}
