import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_BASEURL;

export async function getUser() {
  try {
    const response = await axios.get(`${url}/users`);
    console.log("Fetched users:", response.data); // Kullanıcıları konsola yazdır
    return response.data; // Veriyi döndür
  } catch (error) {
    console.error("Error fetching users:", error); // Hata bilgilerini konsola yazdır
    throw error; // Hata fırlat
  }
}