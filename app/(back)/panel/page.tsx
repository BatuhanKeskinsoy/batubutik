import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="w-screen h-screen flex flex-col gap-8 justify-center items-center overflow-hidden">
      <span className="font-gemunu lg:text-4xl text-3xl text-site tracking-wide select-none">
        PANEL HENÜZ HAZIR DEĞİL !
      </span>
      <Link
        href={"/"}
        className="py-4 px-8 bg-gray-100 shadow-lg tracking-wider font-gemunu lg:text-xl text-2xl dark:bg-zinc-800 flex items-center justify-center rounded-full dark:hover:bg-site hover:bg-site hover:text-white transition-all duration-300"
      >
        ANASAYFAYA DÖN
      </Link>
    </div>
  );
}

export default page;