"use client";
import { getShortName } from "@/components/functions/getShortName";
import CustomButton from "@/components/others/CustomButton";
import { userAuthTypes } from "@/types/user/userAuthTypes";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";
import { IoChevronForwardOutline, IoLogOutOutline } from "react-icons/io5";

interface IProfileProps {
  user: userAuthTypes | null;
  setUser: Dispatch<SetStateAction<userAuthTypes | null>>;
  setSidebarStatus: Dispatch<SetStateAction<string>>;
}

function Profile({ user, setUser, setSidebarStatus }: IProfileProps) {
  const [loadingLogout, setLoadingLogout] = useState(false);

  const handleLogout = (e: any) => {
    e.preventDefault();
    setLoadingLogout(true);

    if (!loadingLogout) {
      localStorage.removeItem("user");
      sessionStorage.removeItem("user");
      setUser(null);
      setLoadingLogout(false);
    }
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
              <small className="text-gray-600 tracking-wide">
                {user.email}
              </small>
            </div>
          </div>
          <hr />
          <div className="flex flex-col w-full gap-2">
            <CustomButton
              title="Profilim"
              containerStyles="flex items-center gap-4 justify-between bg-gray-100 py-3 px-4 font-gemunu text-lg tracking-wide hover:pl-6 hover:bg-site/10 hover:text-site transition-all duration-300 text-left"
              rightIcon={
                <IoChevronForwardOutline className="text-xl opacity-70" />
              }
            />
            <CustomButton
              title="Siparişlerim"
              containerStyles="flex items-center gap-4 justify-between bg-gray-100 py-3 px-4 font-gemunu text-lg tracking-wide hover:pl-6 hover:bg-site/10 hover:text-site transition-all duration-300 text-left"
              rightIcon={
                <IoChevronForwardOutline className="text-xl opacity-70" />
              }
            />
            <CustomButton
              title="Favorilerim"
              containerStyles="flex items-center gap-4 justify-between bg-gray-100 py-3 px-4 font-gemunu text-lg tracking-wide hover:pl-6 hover:bg-site/10 hover:text-site transition-all duration-300 text-left"
              rightIcon={
                <IoChevronForwardOutline className="text-xl opacity-70" />
              }
              handleClick={() => setSidebarStatus("Favorite")}
            />
            <CustomButton
              title="Kargo Takibi"
              containerStyles="flex items-center gap-4 justify-between bg-gray-100 py-3 px-4 font-gemunu text-lg tracking-wide hover:pl-6 hover:bg-site/10 hover:text-site transition-all duration-300 text-left"
              rightIcon={
                <IoChevronForwardOutline className="text-xl opacity-70" />
              }
            />
            <hr className="my-2" />
            <CustomButton
              title={!loadingLogout ? "Çıkış Yap" : "Çıkış Yapılıyor.."}
              btnType="submit"
              containerStyles={`flex items-center gap-4 justify-between bg-gray-100 py-3 px-4 font-gemunu text-lg tracking-wide hover:pl-6 transition-all duration-300 text-left ${
                !loadingLogout
                  ? "hover:bg-site/10 hover:text-site"
                  : "bg-site/10 text-site"
              }`}
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
