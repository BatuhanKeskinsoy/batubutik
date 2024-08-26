import { users } from "@/constants/(front)";
import { userAuthTypes } from "@/types/user/userAuthTypes";
import { toast } from "react-toastify";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";

export function postLogin(
  email: string,
  password: string,
  rememberMe: boolean,
  setUser: Dispatch<SetStateAction<userAuthTypes | null>>
) {
  const url = process.env.NEXT_PUBLIC_API_BASEURL || "";

  try {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      const { uid, fullName, email, role } = user;
      const userData: userAuthTypes = {
        uid,
        fullName,
        email,
        role,
      };
      setUser(userData);

      const userString = JSON.stringify(userData);
      rememberMe
        ? localStorage.setItem("user", userString)
        : sessionStorage.setItem("user", userString);

    } else {
      toast.error("E-posta veya şifre hatalı");
    }
  } catch (err) {
    console.error(err);
    throw new Error("Giriş yapma hatası");
  }
}

/* await axios
      .post(`${url}/api/auth/login`, {
        email: email,
        password: password,
        remember: rememberMe,
      })
      .then(async (res) => {
        if (res.status === 200) {
          toast(res.data.message);
          const token = res.data.token;
          if (rememberMe) {
            typeof window !== "undefined" &&
              localStorage.setItem("token", token);
          } else {
            typeof window !== "undefined" &&
              sessionStorage.setItem("token", token);
          }
          setLogin(true);
          const userData = await getAuthUser(token, url, rememberMe);
          setUser(userData);
          router.push("/");
        }
      })
      .catch((err) => {
        console.error(err);
        toast(err.message || "API Hatası");
      }); */
