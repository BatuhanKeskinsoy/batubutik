import { axios } from "@/lib/axios";
import { baseURL } from "@/constants/(front)";

export async function getProducts() {
  try {
    const response = await axios.get(`${baseURL}/product/list`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
