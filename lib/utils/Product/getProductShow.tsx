import axios from "axios";
import { baseURL } from "@/constants/(front)";

export async function getProductShow(slug: string) {
  try {
    const response = await axios.get(`${baseURL}/product/${slug}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product detail:", error);
    throw error;
  }
}
