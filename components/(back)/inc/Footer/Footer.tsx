import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="dark:bg-zinc-900 bg-white px-4 md:h-8 h-16 flex items-center w-full border-t dark:border-zinc-800 border-gray-200 text-sm">
      <div className="w-full flex justify-between text-gray-600 dark:text-gray-400 text-xs md:flex-row flex-col text-center">
        <div className="md:my-0 my-1">
          Copyright ©{" "}
          <span className="text-site select-none font-semibold">
            {" "}
            {new Date().getFullYear() === 2025
              ? new Date().getFullYear()
              : "2025 - " + new Date().getFullYear()}{" "}
          </span>
           Tüm hakları saklıdır.
        </div>
        <div className="md:my-0 my-1">
          Kodlama ve Tasarım{" "}
          <Link
            href={"https://www.avaken.com/"}
            target="_blank"
            className="text-site hover:text-site/70 transition-all duration-300 font-medium"
          >
            Avaken
          </Link>
          'e aittir.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
