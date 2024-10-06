"use client";
import CustomButton from "@/components/others/CustomButton";
import { userAuthTypes } from "@/types/user/userAuthTypes";
import { login } from "@/lib/utils/Auth/login";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";
import { IoCheckmark, IoLogoFacebook, IoLogoGoogle } from "react-icons/io5";
import { toast } from "react-toastify";

interface ILoginProps {
  setUser: Dispatch<SetStateAction<userAuthTypes | null>>;
  authLoading: boolean;
  setAuthLoading: Dispatch<SetStateAction<boolean>>;
  setAuth: Dispatch<SetStateAction<string>>;
}

function Login({ setUser, authLoading, setAuthLoading, setAuth }: ILoginProps) {
  const [rememberMe, setRememberMe] = useState(true);

  /* FORM STATES */
  const [email, setEmail] = useState("batuhankeskinsoy55@gmail.com");
  const [password, setPassword] = useState("123456+");
  /* FORM STATES END */

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAuthLoading(true);

    try {
      const res = await login(email, password, rememberMe);

      if (res && res.status === 200) {
        toast.success(res.data.message);

        const { uid, fullName, email, role } = res.data.user;
        const userData: userAuthTypes = { uid, fullName, email, role };
        setUser(userData);

        document.cookie = `swr-auth-token=${res.data.token}; path=/; ${
          rememberMe ? "expires=Fri, 31 Dec 9999 23:59:59 GMT" : ""
        }`;

        // Burada bilgileri localstorageye kaydiyorum ama useUser SWR'si yapıldıktan sonra localstorageden çekilmeyecek ve context'den user kaldırılacak.

        const userString = JSON.stringify(userData);
        if (rememberMe) {
          localStorage.setItem("user", userString);
        } else {
          sessionStorage.setItem("user", userString);
        }
      } else {
        console.error("Login failed:", res && res.data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setAuthLoading(false);
    }
  };

  const loginControl = email !== "" && password !== "";

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <form
        onSubmit={(e) => (loginControl ? handleLogin(e) : undefined)}
        className="flex flex-col w-full lg:gap-6 gap-3 h-full justify-between"
      >
        <div className="flex flex-col gap-4 w-full h-full">
          <label htmlFor="email" className="flex flex-col gap-4 w-full">
            <span className="text-gray-600 dark:text-gray-200 tracking-wide">
              E-Posta Adresiniz
            </span>
            <input
              type="email"
              id="email"
              required
              className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 focus:border-site/50 dark:focus:border-site/50 rounded-lg py-3 px-6 outline-none text-base lg:min-w-[350px] max-lg:w-full"
              placeholder="E-Posta Adresinizi giriniz"
              value={email}
              autoComplete="email"
              inputMode="email"
              tabIndex={0}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password" className="flex flex-col gap-4 w-full">
            <span className="text-gray-600 dark:text-gray-200 tracking-wide">
              Şifreniz
            </span>
            <input
              type="password"
              id="password"
              required
              className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 focus:border-site/50 dark:focus:border-site/50 rounded-lg py-3 px-6 outline-none text-base lg:min-w-[350px] max-lg:w-full"
              placeholder="Şifrenizi giriniz"
              value={password}
              tabIndex={1}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2 cursor-pointer py-1.5 group">
              <CustomButton
                title=""
                leftIcon={<IoCheckmark className="text-base" />}
                textStyles="hidden"
                btnType="button"
                containerStyles={`flex items-center justify-center gap-2 w-5 h-5 border rounded-md transition-all duration-300 ${
                  rememberMe
                    ? "border-transparent bg-site text-white"
                    : "dark:border-zinc-800 border-gray-300 lg:group-hover:border-site/50 text-transparent lg:group-hover:text-site"
                }`}
                id="rememberMe"
                handleClick={() => setRememberMe(!rememberMe)}
              />
              <label
                htmlFor="rememberMe"
                className={`transition-all duration-300 -mb-0.5 cursor-pointer text-gray-600 dark:text-gray-200 tracking-wide select-none ${
                  rememberMe ? "text-site" : "lg:group-hover:text-site"
                }`}
              >
                Beni Hatırla
              </label>
            </div>
            <Link
              href={"/"}
              className="text-gray-500 text-sm tracking-wide min-w-max hover:text-site transition-all duration-300"
            >
              Şifremi Unuttum?
            </Link>
          </div>
        </div>

        <div className="flex w-full items-center justify-center gap-4">
          <div className="h-[1px] flex-1 bg-[#d2d6d8] dark:bg-zinc-800"></div>
          <p className="font-[500] dark:text-gray-400">Ya da</p>
          <div className="h-[1px] flex-1 bg-[#d2d6d8] dark:bg-zinc-800"></div>
        </div>
        <div className="flex gap-4 text-base text-gray-600 dark:text-gray-400">
          <div className="flex lg:gap-3 gap-4 items-center justify-center border border-gray-200 dark:border-zinc-800 rounded-md px-2 py-3 w-full cursor-pointer hover:bg-site/10 hover:border-site/10 hover:text-site transition-all duration-300">
            <IoLogoGoogle className="text-4xl" />
            <div className="flex flex-col items-start justify-center capitalize">
              <span className="font-medium text-sm">Google</span>
              <span className="font-light text-xs">İle giriş yap</span>
            </div>
          </div>
          <div className="flex lg:gap-3 gap-4 items-center justify-center border border-gray-200 dark:border-zinc-800 rounded-md px-2 py-3 w-full cursor-pointer hover:bg-site/10 hover:border-site/10 hover:text-site transition-all duration-300">
            <IoLogoFacebook className="text-4xl" />
            <div className="flex flex-col items-start justify-center capitalize">
              <span className="font-medium text-sm">Facebook</span>
              <span className="font-light text-xs">İle giriş yap</span>
            </div>
          </div>
        </div>
        <hr className="dark:border-zinc-800" />
        <div className="flex lg:flex-row flex-col items-center gap-2 w-full">
          <CustomButton
            title={"Kayıt Ol"}
            btnType="button"
            containerStyles={`py-3 px-4 w-full rounded-md transition-all duration-300 bg-gray-200 dark:bg-zinc-800 hover:bg-gray-500 dark:hover:bg-gray-200 text-gray-600 dark:text-gray-200 hover:text-white dark:hover:text-gray-700 lg:order-1 order-2`}
            handleClick={() => setAuth("register")}
          />
          <CustomButton
            title={!authLoading ? "Giriş Yap" : "Giriş Yapılıyor.."}
            btnType="submit"
            containerStyles={`py-3 px-4 w-full rounded-md transition-all duration-300 lg:order-2 order-1 ${
              loginControl ? "opacity-100" : "opacity-50 cursor-not-allowed"
            } ${
              !authLoading
                ? "bg-site/80 hover:bg-site text-white"
                : "bg-site text-white hover:bg-site"
            }`}
            isDisabled={!loginControl}
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
