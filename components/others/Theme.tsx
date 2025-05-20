"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface IThemeProps {
  isSmall?: boolean;
}

const Theme = ({ isSmall }: IThemeProps) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <label className="flex relative items-center cursor-pointer h-full">
      <input
        type="checkbox"
        className="sr-only"
        checked={resolvedTheme === "dark"}
        onChange={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      />
      <div
        className={`  bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-full flex items-center duration-300 relative ${
          isSmall ? "w-14 h-6" : "w-20 h-10"
        }`}
      >
        <div
          className={`absolute  transition-transform duration-300 flex justify-center items-center ${
            resolvedTheme === "dark" ? "scale-100" : "scale-0"
          } ${
            isSmall
              ? "top-[4px] left-[4.5px] size-3.5"
              : "top-[5px] left-[6px] size-7"
          }`}
        >
          <Image
            src={"/theme/moon.svg"}
            alt="Açık Tema"
            width={0}
            height={0}
            className={`invert ${isSmall ? "size-3.5" : "size-6"}`}
          />
        </div>

        <div
          className={`absolute transition-transform duration-300 flex justify-center items-center ${
            resolvedTheme === "light" ? "scale-100" : "scale-0"
          } ${
            isSmall
              ? "top-[4px] right-[4.5px] size-3.5"
              : "top-[5px] right-[6px] size-7"
          }`}
        >
          <Image
            alt="Koyu Tema"
            src={"/theme/sun.svg"}
            width={0}
            height={0}
            className={`${isSmall ? "size-3.5" : "size-6"}`}
          />
        </div>

        <div
          className={`rounded-full shadow-md z-10 transform transition-all duration-300 bg-site dark:bg-gray-200 ${
            resolvedTheme === "dark"
              ? isSmall
                ? "translate-x-[34px]"
                : "translate-x-[46px]"
              : isSmall
              ? "translate-x-[4px]"
              : "translate-x-[8px]"
          } ${isSmall ? "size-4" : "size-6"}
          `}
        ></div>
      </div>
    </label>
  );
};

export default Theme;
