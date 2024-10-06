import axios, { AxiosError } from "axios";
import { baseURL } from "@/constants/(front)";

export async function getProductShow(slug: string) {
  try {
    const response = await axios.get(`${baseURL}/product/${slug}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    // Hata durumunda null döndür
    if (axiosError.response && axiosError.response.status === 404) {
      console.error("Product not found, returning null:", axiosError);
    } else {
      console.error("Error fetching product detail:", axiosError);
    }
    return undefined;
  }
}
