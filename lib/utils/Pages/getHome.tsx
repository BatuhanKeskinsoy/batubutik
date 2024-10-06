import axios from "axios";
import { baseURL } from "@/constants/(front)";

export async function getHome() {
  try {
    const response = await axios.get(`${baseURL}/pages/home`);
    return response.data;
  } catch (error) {
    console.error("Error fetching home API:", error);
    throw error;
  }
}
