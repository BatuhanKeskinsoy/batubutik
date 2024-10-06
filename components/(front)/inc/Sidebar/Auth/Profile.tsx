"use client";
import { getShortName } from "@/lib/functions/getShortName";
import CustomButton from "@/components/others/CustomButton";
import { userAuthTypes } from "@/types/user/userAuthTypes";
import React, { Dispatch, SetStateAction, useState } from "react";
import { IoChevronForwardOutline, IoLogOutOutline } from "react-icons/io5";

interface IProfileProps {
  user: userAuthTypes | null;
  setUser: Dispatch<SetStateAction<userAuthTypes | null>>;
  setSidebarStatus: Dispatch<SetStateAction<string>>;
}

function Profile({ user, setUser, setSidebarStatus }: IProfileProps) {
  const handleLogout = (e: any) => {
    e.preventDefault();
    setUser(null);
    document.cookie =
      "swr-auth-token=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";

    // Burada bilgileri localstorageden siliyorum ama useUser SWR'si yapıldıktan sonra localstoragede olmayacak ve context'den user kaldırılacak.
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
  };

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      {user && (
        <div className="flex flex-col w-full h-full gap-6">
          <div className="flex gap-4 items-center">
            <div
              className={`flex items-center justify-center size-16 min-w-16 rounded-full bg-site/10 text-site select-none font-gemunu text-2xl max-lg:text-3xl uppercase shadow-lg`}
            >
              {getShortName(user.fullName)}
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-site font-medium tracking-wider font-gemunu text-xl">
                {user.fullName}
              </span>
              <small className="text-gray-600 dark:text-gray-400 tracking-wide">
                {user.email}
              </small>
            </div>
          </div>
          <hr className="dark:border-zinc-800" />
          <div className="flex flex-col w-full gap-2">
            <CustomButton
              title="Profilim"
              containerStyles="flex items-center gap-4 justify-between bg-gray-100 dark:bg-zinc-800 py-3 px-4 font-gemunu text-lg tracking-wide hover:pl-6 hover:bg-site/10 dark:hover:bg-site/10 hover:text-site transition-all duration-300 text-leftflex items-center gap-4 justify-between bg-gray-100 dark:bg-zinc-800 py-3 px-4 font-gemunu text-lg tracking-wide hover:pl-6 hover:bg-site/10 dark:hover:bg-site/10 hover:text-site transition-all duration-300 text-left"
              rightIcon={
                <IoChevronForwardOutline className="text-xl opacity-70" />
              }
            />
            <CustomButton
              title="Siparişlerim"
              containerStyles="flex items-center gap-4 justify-between bg-gray-100 dark:bg-zinc-800 py-3 px-4 font-gemunu text-lg tracking-wide hover:pl-6 hover:bg-site/10 dark:hover:bg-site/10 hover:text-site transition-all duration-300 text-left"
              rightIcon={
                <IoChevronForwardOutline className="text-xl opacity-70" />
              }
            />
            <CustomButton
              title="Favorilerim"
              containerStyles="flex items-center gap-4 justify-between bg-gray-100 dark:bg-zinc-800 py-3 px-4 font-gemunu text-lg tracking-wide hover:pl-6 hover:bg-site/10 dark:hover:bg-site/10 hover:text-site transition-all duration-300 text-left"
              rightIcon={
                <IoChevronForwardOutline className="text-xl opacity-70" />
              }
              handleClick={() => setSidebarStatus("Favorite")}
            />
            <CustomButton
              title="Kargo Takibi"
              containerStyles="flex items-center gap-4 justify-between bg-gray-100 dark:bg-zinc-800 py-3 px-4 font-gemunu text-lg tracking-wide hover:pl-6 hover:bg-site/10 dark:hover:bg-site/10 hover:text-site transition-all duration-300 text-left"
              rightIcon={
                <IoChevronForwardOutline className="text-xl opacity-70" />
              }
            />
            <hr className="my-2 dark:border-zinc-800" />
            <CustomButton
              title={"Çıkış Yap"}
              btnType="submit"
              containerStyles={`flex items-center gap-4 justify-between bg-gray-100 dark:bg-zinc-800 py-3 px-4 font-gemunu text-lg tracking-wide hover:pl-6 transition-all duration-300 text-left hover:bg-site/10 dark:hover:bg-site/10 hover:text-site`}
              rightIcon={<IoLogOutOutline className="text-xl opacity-70" />}
              handleClick={(e) => handleLogout(e)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
