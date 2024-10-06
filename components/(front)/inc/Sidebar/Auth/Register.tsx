"use client";
import CustomButton from "@/components/others/CustomButton";
import { userAuthTypes } from "@/types/user/userAuthTypes";
import { login } from "@/lib/utils/Auth/login";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  IoCheckmark,
  IoClose,
  IoEye,
  IoEyeOff,
  IoLogoFacebook,
  IoLogoGoogle,
} from "react-icons/io5";
import Image from "next/image";

interface ILoginProps {
  setUser: Dispatch<SetStateAction<userAuthTypes | null>>;
  authLoading: boolean;
  setAuthLoading: Dispatch<SetStateAction<boolean>>;
  setAuth: Dispatch<SetStateAction<string>>;
}

function Register({
  setUser,
  authLoading,
  setAuthLoading,
  setAuth,
}: ILoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [accept, setAccept] = useState(false);

  /* FORM STATES */
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  /* FORM STATES END */

  const regexNumber = /\d/;
  const regexUppercase = /[A-Z]/;

  const registerControl =
    firstName !== "" &&
    lastName !== "" &&
    email !== "" &&
    phone !== "" &&
    password.length >= 8 &&
    regexNumber.test(password) &&
    regexUppercase.test(password) &&
    accept &&
    password === passwordConfirm;

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    /* register({
        name: firstName + " " + lastName,
        email: email,
        phone: phone,
        password: password,
        password_confirmation: passwordConfirm,
        setErrors,
        setStatus: () => { }
      }).catch((err) => {
        toast(err.response.data.message);
      }); */
  };

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <form
        onSubmit={(e) => (registerControl ? handleRegister(e) : undefined)}
        className="flex flex-col w-full h-full lg:gap-6 gap-3 justify-between"
      >
        <div className="flex flex-col lg:gap-8 gap-4 w-full lg:h-full h-max overflow-y-auto pr-3">
          <div className="grid grid-cols-1 gap-4">
            <label htmlFor="firstname" className="flex flex-col gap-4 w-full">
              <span className="text-gray-600 dark:text-gray-200 tracking-wide">
                Adınız
              </span>
              <input
                type="text"
                id="firstname"
                required
                className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 focus:border-site/50 dark:focus:border-site/50 rounded-lg py-3 px-6 outline-none text-base w-full"
                placeholder="Adınız"
                value={firstName}
                autoComplete="given-name"
                inputMode="text"
                tabIndex={0}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label htmlFor="lastname" className="flex flex-col gap-4 w-full">
              <span className="text-gray-600 dark:text-gray-200 tracking-wide">
                Soyadınız
              </span>
              <input
                type="text"
                id="lastname"
                required
                className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 focus:border-site/50 dark:focus:border-site/50 rounded-lg py-3 px-6 outline-none text-base w-full"
                placeholder="Soyadınız"
                value={lastName}
                autoComplete="family-name"
                inputMode="email"
                tabIndex={1}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <label htmlFor="email" className="flex flex-col gap-4 w-full">
              <span className="text-gray-600 dark:text-gray-200 tracking-wide">
                E-Posta Adresiniz
              </span>
              <input
                type="email"
                id="email"
                required
                className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 focus:border-site/50 dark:focus:border-site/50 rounded-lg py-3 px-6 outline-none text-base w-full"
                placeholder="E-Posta Adresiniz"
                value={email}
                autoComplete="email"
                inputMode="email"
                tabIndex={2}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="phone" className="flex flex-col gap-4 w-full">
              <span className="text-gray-600 dark:text-gray-200 tracking-wide">
                Telefon Numaranız
              </span>
              <input
                type="tel"
                id="phone"
                required
                className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 focus:border-site/50 dark:focus:border-site/50 rounded-lg py-3 px-6 outline-none text-base w-full"
                placeholder="Telefon Numaranız"
                value={phone}
                autoComplete="phone"
                inputMode="tel"
                tabIndex={3}
                onChange={(e) => setPhone(e.target.value)}
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
                className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 focus:border-site/50 dark:focus:border-site/50 rounded-lg py-3 px-6 outline-none text-base w-full"
                placeholder="Şifrenizi giriniz"
                value={password}
                autoComplete="off"
                tabIndex={4}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label htmlFor="password" className="flex flex-col gap-4 w-full">
              <span className="text-gray-600 dark:text-gray-200 tracking-wide">
                Şifreniz (Tekrar)
              </span>
              <input
                type={!showPassword ? "password" : "text"}
                id="passwordConfirm"
                required
                className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 focus:border-site/50 dark:focus:border-site/50 rounded-lg py-3 px-6 outline-none text-base w-full"
                placeholder="Şifrenizi Tekrar giriniz"
                value={passwordConfirm}
                autoComplete="off"
                tabIndex={5}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </label>
          </div>

          {(password !== "" || passwordConfirm !== "") && (
            <div className="flex flex-col gap-1.5 text-sm animate-sidebarBgSmooth origin-top-left">
              <div className="flex items-center gap-2">
                {password.length >= 8 ? (
                  <IoCheckmark className="text-xl text-green-500 animate-modalContentSmooth" />
                ) : (
                  <IoClose className="text-xl text-red-500 animate-modalContentSmooth" />
                )}
                <span className="-mb-0.5">En az 8 karakter olmalıdır.</span>
              </div>
              <div className="flex items-center gap-2">
                {regexNumber.test(password) ? (
                  <IoCheckmark className="text-xl text-green-500 animate-modalContentSmooth" />
                ) : (
                  <IoClose className="text-xl text-red-500 animate-modalContentSmooth" />
                )}
                <span>Bir sayı olmalıdır.</span>
              </div>
              <div className="flex items-center gap-2">
                {regexUppercase.test(password) ? (
                  <IoCheckmark className="text-xl text-green-500 animate-modalContentSmooth" />
                ) : (
                  <IoClose className="text-xl text-red-500 animate-modalContentSmooth" />
                )}
                <span>Bir büyük harf olmalıdır.</span>
              </div>
              <div className="flex items-center gap-2">
                {password === passwordConfirm ? (
                  <IoCheckmark className="text-xl text-green-500 animate-modalContentSmooth" />
                ) : (
                  <IoClose className="text-xl text-red-500 animate-modalContentSmooth" />
                )}
                <span>Şifreleriniz eşleşmelidir.</span>
              </div>
            </div>
          )}
          <hr className="dark:border-zinc-800 border-gray-200" />

          <div className="flex items-center gap-3 cursor-pointer group">
            <CustomButton
              title=""
              leftIcon={<IoCheckmark className="text-base" />}
              textStyles="hidden"
              btnType="button"
              containerStyles={`flex items-center justify-center gap-2 size-5 min-w-5 border rounded-md transition-all duration-300 ${
                accept
                  ? "border-transparent bg-site text-white"
                  : "dark:border-zinc-800 border-gray-300 lg:group-hover:border-site/50 text-transparent lg:group-hover:text-site"
              }`}
              id="accept"
              handleClick={() => setAccept(!accept)}
            />
            <label
              htmlFor="accept"
              className={`transition-all duration-300 -mb-0.5 cursor-pointer text-gray-600 dark:text-gray-200 tracking-wide select-none ${
                accept ? "text-site" : "lg:group-hover:text-site"
              }`}
            >
              <p className="text-sm dark:text-gray-400 text-gray-600">
                <Link
                  className="font-medium text-gray-800 dark:text-gray-200 dark:hover:text-site hover:text-site transition-all"
                  href="/"
                >
                  Kullanıcı Sözleşmesi
                </Link>{" "}
                <span className="font-normal">ve</span>{" "}
                <Link
                  className="font-medium text-gray-800 dark:text-gray-200 dark:hover:text-site hover:text-site transition-all"
                  href="/"
                >
                  Çerez Aydınlatma Metni'ni
                </Link>{" "}
                <span className="font-normal">Okudum, Kabul Ediyorum.</span>
              </p>
            </label>
          </div>
        </div>

        <div className="flex w-full items-center justify-center gap-4">
          <div className="h-[1px] flex-1 bg-[#d2d6d8] dark:bg-zinc-800"></div>
          <p className="font-normal lg:text-base text-sm dark:text-gray-400">
            Ya da
          </p>
          <div className="h-[1px] flex-1 bg-[#d2d6d8] dark:bg-zinc-800"></div>
        </div>
        <div className="flex gap-4 text-base text-gray-600 dark:text-gray-400">
          <div className="flex lg:gap-3 gap-4 items-center justify-center border border-gray-200 dark:border-zinc-800 rounded-md px-2 py-3 w-full cursor-pointer hover:bg-site/10 hover:border-site/10 hover:text-site transition-all duration-300">
            <IoLogoGoogle className="text-4xl" />
            <div className="flex flex-col items-start justify-center capitalize">
              <span className="font-medium text-sm">Google</span>
              <span className="font-light text-xs">İle kayıt ol</span>
            </div>
          </div>
          <div className="flex lg:gap-3 gap-4 items-center justify-center border border-gray-200 dark:border-zinc-800 rounded-md px-2 py-3 w-full cursor-pointer hover:bg-site/10 hover:border-site/10 hover:text-site transition-all duration-300">
            <IoLogoFacebook className="text-4xl" />
            <div className="flex flex-col items-start justify-center capitalize">
              <span className="font-medium text-sm">Facebook</span>
              <span className="font-light text-xs">İle kayıt ol</span>
            </div>
          </div>
        </div>
        <hr className="dark:border-zinc-800" />
        <div className="flex lg:flex-row flex-col items-center gap-2 w-full">
          <CustomButton
            title={"Giriş Yap"}
            btnType="button"
            containerStyles={`py-3 px-4 w-full rounded-md transition-all duration-300 bg-gray-200 dark:bg-zinc-800 hover:bg-gray-500 dark:hover:bg-gray-200 text-gray-600 dark:text-gray-200 hover:text-white dark:hover:text-gray-700 lg:order-1 order-2`}
            handleClick={() => setAuth("login")}
          />
          <CustomButton
            title={!authLoading ? "Kayıt Ol" : "Kayıt Olunuyor.."}
            btnType="submit"
            containerStyles={`py-3 px-4 w-full rounded-md transition-all duration-300 lg:order-2 order-1 ${
              registerControl ? "opacity-100" : "opacity-50 cursor-not-allowed"
            } ${
              !authLoading
                ? "bg-site/80 hover:bg-site text-white"
                : "bg-site text-white hover:bg-site"
            }`}
            isDisabled={!registerControl}
          />
        </div>
      </form>
    </div>
  );
}

export default Register;
