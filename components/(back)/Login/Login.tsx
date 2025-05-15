"use client";
import CustomButton from "@/components/others/CustomButton";
import Link from "next/link";
import React, { useState } from "react";
import {
  IoCheckmark,
  IoEye,
  IoEyeOff,
  IoLogoFacebook,
  IoLogoGoogle,
} from "react-icons/io5";
import { toast } from "react-toastify";

function Login() {
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  /* FORM STATES */
  const [email, setEmail] = useState("batuhankeskinsoy55@gmail.com");
  const [password, setPassword] = useState("Bk123456+");
  /* FORM STATES END */

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    /* try {
      const res = await login(email, password, rememberMe);

      if (res && res.status === 200) {
        toast.success(res.data.message);
      } else {
        console.error("Login failed:", res && res.data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
    } */
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
              className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 focus:border-site/50 dark:focus:border-site/50 rounded-lg py-3 px-6 outline-none text-base w-full"
              placeholder="E-Posta Adresinizi giriniz"
              value={email}
              autoComplete="email"
              inputMode="email"
              tabIndex={0}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password" className="flex flex-col gap-4 w-full">
            <div className="flex w-full justify-between items-center">
              <span className="text-gray-600 dark:text-gray-200 tracking-wide">
                Şifreniz
              </span>
              <CustomButton
                btnType="button"
                leftIcon={
                  showPassword ? (
                    <IoEye className="text-xl animate-modalContentSmooth text-site" />
                  ) : (
                    <IoEyeOff className="text-xl animate-modalContentSmooth" />
                  )
                }
                handleClick={() => setShowPassword(!showPassword)}
              />
            </div>
            <input
              type={!showPassword ? "password" : "text"}
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
                    : "dark:border-zinc-800 border-gray-400 lg:group-hover:border-site/50 text-transparent lg:group-hover:text-site"
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
        <hr className="dark:border-zinc-800" />
        <div className="flex lg:flex-row flex-col items-center gap-2 w-full">
          <CustomButton
            title={"Giriş Yap"}
            btnType="submit"
            containerStyles={`py-3 px-4 w-full rounded-md bg-site/80 hover:bg-site transition-all duration-300 tracking-wider font-gemunu text-xl text-white ${
              loginControl
                ? "opacity-100"
                : "opacity-50 cursor-not-allowed"
            }`}
            isDisabled={!loginControl}
          />
          <Link
            href={"/"}
            className="py-3 min-w-max max-lg:w-full px-4 w-full bg-gray-100 dark:bg-zinc-800 shadow-lg tracking-wider font-gemunu text-xl flex items-center justify-center rounded-md dark:hover:bg-site hover:bg-site hover:text-white transition-all duration-300"
          >
            Siteye Geri Dön
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
