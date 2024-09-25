"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Theme = () => {
  const [theme, setTheme] = useState<string>(
    typeof window !== "undefined" && localStorage.getItem("theme") === "light"
      ? "dark"
      : "light"
  );
  const [switchStatus, setSwitchStatus] = useState<boolean>(theme === "dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }

    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, []);

  const changeTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newTheme;
    });
  };

  return (
    <label className="flex relative items-center cursor-pointer order-2 md:ml-8 h-full">
      <input
        type="checkbox"
        className="sr-only"
        checked={switchStatus}
        onChange={() => {
          changeTheme();
          setSwitchStatus(!switchStatus);
        }}
      />
      <div
        className={`w-20 h-10 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-full flex items-center duration-300 relative`}
      >
        <div
          className={`absolute top-[5px] left-[6px] size-7 transition-transform duration-300 flex justify-center items-center ${
            switchStatus ? "scale-100" : "scale-0"
          }`}
        >
          <Image
            src={"/theme/sun.svg"}
            alt="Açık Tema"
            width={0}
            height={0}
            className="size-6"
          />
        </div>

        <div
          className={`absolute top-[5px] right-[6px] size-7 transition-transform duration-300 flex justify-center items-center ${
            !switchStatus ? "scale-100" : "scale-0"
          }`}
        >
          <Image
            src={"/theme/moon.svg"}
            alt="Koyu Tema"
            width={0}
            height={0}
            className="size-5 invert"
          />
        </div>

        <div
          className={`size-6 rounded-full shadow-md z-10 transform transition-all duration-300 bg-site dark:bg-gray-200 ${
            switchStatus
              ? "translate-x-[46px] "
              : "translate-x-[8px] "
          }`}
        ></div>
      </div>
    </label>
  );
};

export default Theme;
