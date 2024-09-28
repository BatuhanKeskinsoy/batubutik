import axios from "axios";
import baseURL from "@/lib/functions/getBaseUrl";

export async function getUser() {
  try {
    const response = await axios.get(`${baseURL}/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
