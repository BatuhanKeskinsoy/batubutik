import { axios } from "@/lib/axios";
import { baseURL } from "@/constants/(front)";

export async function getOrders() {
  try {
    const response = await axios.get(`${baseURL}/order/index`);
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
}
