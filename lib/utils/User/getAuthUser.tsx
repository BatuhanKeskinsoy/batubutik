/* import axios from "axios";

export async function getAuthUser(token: string, url: string, rememberMe: boolean) {
    try {
      const res = await axios.get(`${url}/api/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
          
        },
      });

      

      const userData = {
        name: res.data.data.name,
        walletBalance: res.data.data.wallet_balance,
        role: res.data.data.role,
      };
  
      const userString = JSON.stringify(userData);
  
      rememberMe
        ? localStorage.setItem("user", userString)
        : sessionStorage.setItem("user", userString);
  
      return userData;
    } catch (err) {
      console.error(err);
      throw new Error("Kullanıcı bilgilerini alma hatası");
    }
  } */