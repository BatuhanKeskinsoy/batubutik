import Login from "@/components/(back)/Login/Login";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="w-screen lg:h-screen flex max-lg:flex-col gap-x-8 items-center overflow-hidden bg-site/10 max-lg:min-h-screen">
      <div className="relative lg:max-w-[600px] w-full h-full max-lg:h-[200px] select-none overflow-hidden">
        <Image
          src={"/assets/about/about.png"}
          alt=""
          fill
          className="object-cover blur-sm z-10"
        />
        <div className="bg-zinc-900/70 absolute w-full h-full z-20"></div>
        <Image
          src={"/assets/logo/logo.svg"}
          alt=""
          fill
          className="scale-[.65] z-30"
        />
      </div>
      <div className="w-full flex lg:h-[450px] h-full justify-center items-center">
        <div className="relative flex items-center justify-center w-[550px] max-lg:h-[calc(100vh-200px)] p-8 animate-modalContentSmooth">
          <div className="bg-site dark:bg-white opacity-10 absolute lg:rounded-3xl w-full h-full z-10 shadow-lg shadow-black-900"></div>
          <div className="flex flex-col rounded-md w-full h-full z-20">
            <span className="font-gemunu text-3xl tracking-wide text-site">
              Yönetim Paneli
            </span>
            <hr className="dark:border-zinc-800 border-gray-200 pt-3 mt-3" />
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
