"use client";
import Theme from "@/components/others/Theme";
import { navLinksAuthAdmin } from "@/constants/(front)";
import { generalsTypes } from "@/types/generalTypes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";

interface ISidebarProps {
  generals: generalsTypes;
  sidebarShow: boolean;
  setSidebarShow: Dispatch<SetStateAction<boolean>>;
}

function Sidebar({ generals, sidebarShow, setSidebarShow }: ISidebarProps) {
  const pathname = usePathname();

  const getLinkClasses = (url: string) => {
    if (pathname === "/panel" && url === "/panel") {
      return "bg-site/10 text-site";
    }
    return pathname && pathname.startsWith(url) && url !== "/panel"
      ? "bg-site/10 text-site"
      : "hover:bg-site/10 hover:text-site dark:hover:text-site";
  };

  return (
    <>
      <div
        className={`transition-all duration-500 fixed sm:hidden bg-black-900/50 w-full h-full left-0 top-0 z-10 origin-right ${
          sidebarShow
            ? "max-sm:opacity-100 visible"
            : "max-sm:opacity-0 invisible"
        }`}
        onClick={() => setSidebarShow(false)}
      ></div>
      <nav
        className={`transition-all duration-500 sm:relative fixed w-[80%] sm:min-w-[240px] sm:w-[240px] h-full dark:bg-zinc-900 bg-white min-h-screen z-20 dark:border-r dark:border-zinc-800 dark:shadow-none shadow-lg sm:shadow-gray-300 shadow-gray-500 ${
          sidebarShow ? "max-sm:translate-x-0" : "max-sm:-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-start h-14 py-4 border-b dark:border-zinc-800 border-gray-200">
          <Link
            href={"/"}
            className="relative flex items-center justify-center w-full h-full capitalize font-medium text-2xl text-site"
            title={generals.site_name}
          >
            {generals.logo ? (
              <Image
                src={generals.logo}
                alt={generals.site_name}
                title={generals.site_name}
                fill
                className="object-contain"
              />
            ) : (
              <span>{generals.site_name}</span>
            )}
          </Link>
        </div>
        <ul className="flex flex-col w-full gap-4 py-4 min-h-[calc(100vh-88px)] overflow-y-auto scrollbar-thick">
          {navLinksAuthAdmin.map((group, groupKey) => (
            <li key={groupKey} className="flex flex-col items-center w-full">
              <span className="text-xs text-gray-500 font-medium uppercase flex w-full px-2 mb-2">
                {group.name}
              </span>
              {group.links.map((link, linkKey) => (
                <Link
                  key={linkKey}
                  title={link.title}
                  href={link.url}
                  className={
                    getLinkClasses(link.url) +
                    ` flex items-center justify-between gap-1 w-full transition-all duration-300 py-2.5 px-3.5 border-b last:border-b-0 dark:border-zinc-800 border-gray-200`
                  }
                >
                  <div className="flex items-center gap-2">
                    <span className="lg:text-lg text-xl opacity-70">
                      {link.icon}
                    </span>
                    <span className="lg:text-sm text-base">{link.title}</span>
                  </div>
                  <IoChevronForwardOutline className="lg:text-base text-lg opacity-70" />
                </Link>
              ))}
            </li>
          ))}
        </ul>
        <div className="h-8 flex items-center justify-between px-2 w-full border-t dark:border-zinc-800">
          <small className="text-xs select-none text-gray-600 dark:text-gray-400">Versiyon = 0.001</small>
          <Theme isSmall />
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
