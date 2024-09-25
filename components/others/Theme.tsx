"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Theme: React.FC = () => {
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
        document.body.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.body.classList.add("dark");
    }

    return () => {
      document.body.classList.remove("dark");
    };
  }, []);

  const changeTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      if (newTheme === "dark") {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark");
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
        className={`w-20 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center duration-300 relative`}
      >
        <div className="absolute top-1.5 left-[6px] bg-yellow-500 size-7 transition-all flex justify-center items-center rounded-full shadow-md">
          <Image
            src={"/theme/sun.svg"}
            alt="Açık Tema"
            width={0}
            height={0}
            className="size-5"
          />
        </div>

        <div className="absolute top-1.5 right-[6px] bg-gray-400 size-7 transition-all flex justify-center items-center rounded-full shadow-md">
          <Image
            src={"/theme/moon.svg"}
            alt="Koyu Tema"
            width={0}
            height={0}
            className="size-5"
          />
        </div>

        <div
          className={`size-7 bg-white rounded-full shadow-md z-10 transform transition-transform duration-300 ${
            switchStatus ? "translate-x-[46px]" : "translate-x-1.5"
          }`}
        ></div>
      </div>
    </label>
  );
};

export default Theme;
