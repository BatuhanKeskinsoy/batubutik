"use client";
import CustomButton from "@/components/others/CustomButton";
import { userAuthTypes } from "@/types/user/userAuthTypes";
import React, { Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";

interface IProfileProps {
  setUser: Dispatch<SetStateAction<userAuthTypes | null>>;
}

function Profile({ setUser }: IProfileProps) {
  const [loadingLogout, setLoadingLogout] = useState(false);

  const handleLogout = (e: any) => {
    e.preventDefault();

    if (!loadingLogout) {
      setLoadingLogout(true);
      localStorage.removeItem("user");
      sessionStorage.removeItem("user");
      setUser(null);
      toast.success(`Çıkış Yapıldı.`);
      setLoadingLogout(false);
    }
  };
  return (
    <div className="flex flex-col w-full">
      Profil Bilgileriniz
      <CustomButton
        title={!loadingLogout ? "Çıkış Yap" : "Çıkış Yapılıyor.."}
        btnType="submit"
        containerStyles={`py-3 px-4 w-full rounded-md transition-all duration-300 lg:order-2 order-1 ${
          !loadingLogout
            ? "bg-site/80 hover:bg-site text-white"
            : "bg-site text-white hover:bg-site"
        }`}
        handleClick={(e) => handleLogout(e)}
      />
    </div>
  );
}

export default Profile;
