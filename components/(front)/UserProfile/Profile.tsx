"use client";
import CustomButton from "@/components/others/CustomButton";
import { useUser } from "@/hooks/useUser";
import React, { useEffect, useState } from "react";
import { IoCheckmark, IoClose, IoEye, IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";

function Profile() {
  const { user, isLoading, mutate, error } = useUser();
  const [showPassword, setShowPassword] = useState(false);

  /* FORM STATES */
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  /* FORM STATES END */

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setEmail(user.email || "");
      setPhone(user.phone || "");
      setPassword(user.password || "");
      setPasswordConfirm(user.password || "");
    }
  }, [user]);

  const regexNumber = /\d/;
  const regexUppercase = /[A-Z]/;

  const profileControl =
    firstName !== "" &&
    lastName !== "" &&
    email !== "" &&
    phone !== "" &&
    password.length >= 8 &&
    regexNumber.test(password) &&
    regexUppercase.test(password) &&
    password === passwordConfirm;

  const handleSaveProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast("Profil değişikliği henüz hazır değil!")
  };

  return (
    <>
      {!isLoading ? (
        <form
          onSubmit={(e) => (profileControl ? handleSaveProfile(e) : undefined)}
          className="flex flex-col lg:gap-8 gap-4 w-full"
        >
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-4">
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
                <span className="-mb-0.5">
                  Şifreniz, en az 8 karakter olmalıdır.
                </span>
              </div>
              <div className="flex items-center gap-2">
                {regexNumber.test(password) ? (
                  <IoCheckmark className="text-xl text-green-500 animate-modalContentSmooth" />
                ) : (
                  <IoClose className="text-xl text-red-500 animate-modalContentSmooth" />
                )}
                <span>Şifrenizde en az bir sayı olmalıdır.</span>
              </div>
              <div className="flex items-center gap-2">
                {regexUppercase.test(password) ? (
                  <IoCheckmark className="text-xl text-green-500 animate-modalContentSmooth" />
                ) : (
                  <IoClose className="text-xl text-red-500 animate-modalContentSmooth" />
                )}
                <span>Şifreniz, en az bir büyük harf içermelidir.</span>
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

          <CustomButton
            title={"Değişiklikleri Kaydet"}
            btnType="submit"
            containerStyles={`py-3 px-4 lg:w-fit w-full rounded-md transition-all duration-300 lg:order-2 order-1 bg-site/80 hover:bg-site text-white ml-auto ${
              profileControl ? "opacity-100" : "opacity-50 cursor-not-allowed"
            }`}
            isDisabled={!profileControl}
          />
        </form>
      ) : (
        <div>Yükleniyor...</div>
      )}
    </>
  );
}

export default Profile;
