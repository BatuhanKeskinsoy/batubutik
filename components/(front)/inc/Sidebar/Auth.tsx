import React from "react";
import { IoPersonOutline } from "react-icons/io5";

function Auth() {
  return (
    <div className="flex flex-col gap-4 w-full h-[calc(100dvh-77px)] justify-center items-center text-gray-300">
      <div className="flex flex-col gap-4 justify-center items-center animate-pulse">
        <IoPersonOutline className="lg:text-7xl text-6xl" />
        <span className="font-gemunu tracking-wide lg:text-2xl text-xl">
          Üyelik sistemi henüz hazır değil
        </span>
      </div>
    </div>
  );
}

export default Auth;
