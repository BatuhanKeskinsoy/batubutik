import axios from "axios";
import { baseURL } from "@/constants/(front)";

export async function getGeneral() {
  try {
    const response = await axios.get(`${baseURL}/general`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
