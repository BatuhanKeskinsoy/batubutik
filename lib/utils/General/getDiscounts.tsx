import { axios } from "@/lib/axios";
import { baseURL } from "@/constants/(front)";

export async function getDiscounts() {
  try {
    const response = await axios.get(`${baseURL}/general/discounts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching discounts:", error);
    throw error;
  }
}
