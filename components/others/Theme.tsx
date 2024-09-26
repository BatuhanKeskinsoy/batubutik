"use client";
import Image from "next/image";
import React from "react";
import { useTheme } from "@/app/Context/themeContext";

const Theme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="flex relative items-center cursor-pointer order-2 md:pl-3 lg:border-l dark:border-zinc-800 h-full">
      <input
        type="checkbox"
        className="sr-only"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <div
        className={`w-20 h-10 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-full flex items-center duration-300 relative`}
      >
        <div
          className={`absolute top-[5px] left-[6px] size-7 transition-transform duration-300 flex justify-center items-center ${
            theme === "dark" ? "scale-100" : "scale-0"
          }`}
        >
          <Image
            src={"/theme/moon.svg"}
            alt="Açık Tema"
            width={0}
            height={0}
            className="size-6 invert"
          />
        </div>

        <div
          className={`absolute top-[5px] right-[6px] size-7 transition-transform duration-300 flex justify-center items-center ${
            theme === "light" ? "scale-100" : "scale-0"
          }`}
        >
          <Image
            alt="Koyu Tema"
            src={"/theme/sun.svg"}
            width={0}
            height={0}
            className="size-6"
          />
        </div>

        <div
          className={`size-6 rounded-full shadow-md z-10 transform transition-all duration-300 bg-site dark:bg-gray-200 ${
            theme === "dark" ? "translate-x-[46px] " : "translate-x-[8px] "
          }`}
        ></div>
      </div>
    </label>
  );
};

export default Theme;