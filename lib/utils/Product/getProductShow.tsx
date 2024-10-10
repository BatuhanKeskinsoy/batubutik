import { axios } from "@/lib/axios";
import { baseURL } from "@/constants/(front)";

export async function getProductShow(slug: string) {
  try {
    const response = await axios.get(`${baseURL}/product/${slug}`);
    return response.data;
  } catch (error: any) {
    console.error("Error fetching product:", error);
    return undefined;
  }
}