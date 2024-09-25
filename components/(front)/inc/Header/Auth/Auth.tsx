"use client";
import { useGlobalContext } from "@/app/Context/store";
import { getShortName } from "@/components/functions/getShortName";
import CustomButton from "@/components/others/CustomButton";
import React, { useEffect, useState } from "react";
import { IoPersonOutline } from "react-icons/io5";

function Auth() {
  const { setSidebarStatus, user } = useGlobalContext();
  return (
    <div
      className="relative flex items-center rounded-full lg:hover:scale-110 transition-all duration-300 h-full cursor-pointer"
      onClick={() => setSidebarStatus("Auth")}
    >
      {!user ? (
        <CustomButton
          leftIcon={<IoPersonOutline className="text-xl max-lg:text-2xl" />}
          containerStyles={`p-2 border transition-all duration-300 border-gray-200 dark:border-zinc-800 dark:text-gray-200 rounded-full`}
        />
      ) : (
        <CustomButton
          title={getShortName(user.fullName)}
          containerStyles={`py-1.5 px-2.5 transition-all duration-300 rounded-full bg-site/10 text-site shadow-lg select-none font-gemunu text-lg max-lg:text-xl uppercase hover:bg-site hover:text-white`}
        />
      )}
    </div>
  );
}

export default Auth;