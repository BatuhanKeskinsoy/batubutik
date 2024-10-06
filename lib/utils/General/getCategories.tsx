import axios from "axios";
import { baseURL } from "@/constants/(front)";

export async function getCategories() {
  try {
    const response = await axios.get(`${baseURL}/general/categories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}
