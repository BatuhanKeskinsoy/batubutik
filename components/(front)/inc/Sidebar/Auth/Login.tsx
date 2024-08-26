"use client";
import CustomButton from "@/components/others/CustomButton";
import Link from "next/link";
import React, { useState } from "react";
import { IoCheckmark, IoLogoFacebook, IoLogoGoogle } from "react-icons/io5";
import { toast } from "react-toastify";

function Login() {
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  /* FORM STATES */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /* FORM STATES END */

  const handleLogin = (e: any) => {
    e.preventDefault();

    if (!loadingLogin) {
      setLoadingLogin(true);
      setTimeout(() => {
        setEmail("");
        setPassword("");
        toast.success(`Giriş Yapıldı. Sayın, ${email}`);
        setLoadingLogin(false);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <form
        onSubmit={(e) => handleLogin(e)}
        className="flex flex-col w-full gap-6 h-full justify-between"
      >
        <div className="flex flex-col gap-4 w-full h-full">
          <label htmlFor="email" className="flex flex-col gap-4 w-full">
            <span className="text-gray-600 tracking-wide">
              E-Posta Adresiniz
            </span>
            <input
              type="email"
              id="email"
              required
              className="bg-white border border-gray-200 focus:border-site/50 rounded-lg py-3 px-6 outline-none lg:min-w-[350px] max-lg:w-full"
              placeholder="E-Posta Adresinizi giriniz"
              value={email}
              autoComplete="email"
              tabIndex={0}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password" className="flex flex-col gap-4 w-full">
            <span className="text-gray-600 tracking-wide">Şifreniz</span>
            <input
              type="password"
              id="password"
              required
              className="bg-white border border-gray-200 focus:border-site/50 rounded-lg py-3 px-6 outline-none lg:min-w-[350px] max-lg:w-full"
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
                    : "border-gray-300 lg:group-hover:border-site/50 text-transparent lg:group-hover:text-site"
                }`}
                id="rememberMe"
                handleClick={() => setRememberMe(!rememberMe)}
              />
              <label
                htmlFor="rememberMe"
                className={`transition-all duration-300 -mb-0.5 cursor-pointer text-gray-600 tracking-wide ${
                  rememberMe ? "text-site" : "lg:group-hover:text-site"
                }`}
              >
                Beni Hatırla
              </label>
            </div>
            <Link href={"/"} className="text-gray-500 text-sm tracking-wide min-w-max hover:text-site transition-all duration-300">
              Şifremi Unuttum?
            </Link>
          </div>
        </div>

        <div className="flex w-full items-center justify-center gap-4">
          <div className="h-[1px] flex-1 bg-[#d2d6d8]"></div>
          <p className="font-[500]">Ya da</p>
          <div className="h-[1px] flex-1 bg-[#d2d6d8]"></div>
        </div>
        <div className="flex max-lg:flex-col gap-4 text-base text-gray-600">
          <div className="flex lg:gap-2 gap-4 items-center justify-center border border-gray-200 rounded-md p-2 w-full cursor-pointer hover:bg-site/10 hover:border-site/10 hover:text-site transition-all duration-300">
            <IoLogoGoogle className="text-4xl" />
            <div className="flex flex-col items-start justify-center capitalize">
              <span className="font-medium text-sm">Google</span>
              <span className="font-light text-xs">İle giriş yap</span>
            </div>
          </div>
          <div className="flex lg:gap-2 gap-4 items-center justify-center border border-gray-200 rounded-md p-2 w-full cursor-pointer hover:bg-site/10 hover:border-site/10 hover:text-site transition-all duration-300">
            <IoLogoFacebook className="text-4xl" />
            <div className="flex flex-col items-start justify-center capitalize">
              <span className="font-medium text-sm">Facebook</span>
              <span className="font-light text-xs">İle giriş yap</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex lg:flex-row flex-col items-center gap-2 w-full">
          <CustomButton
            title={"Kayıt Ol"}
            btnType="submit"
            containerStyles={`py-3 px-4 w-full rounded-md transition-all duration-300 bg-gray-200 hover:bg-gray-500 text-gray-600 hover:text-white`}
          />
          <CustomButton
            title={!loadingLogin ? "Giriş Yap" : "Giriş Yapılıyor.."}
            btnType="submit"
            containerStyles={`py-3 px-4 w-full rounded-md transition-all duration-300 ${
              !loadingLogin
                ? "bg-site/80 hover:bg-site text-white"
                : "bg-site text-white hover:bg-site"
            }`}
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
