import { navLinksAuthAdmin } from "@/constants/(front)";
import { generalsTypes } from "@/types/generalTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";

interface ISidebarProps {
  generals: generalsTypes;
}

function Sidebar({ generals }: ISidebarProps) {
  return (
    <nav className="sm:relative fixed sm:max-w-[240px] w-full h-full dark:bg-zinc-900 bg-white min-h-screen z-10 dark:border-r dark:border-zinc-800 dark:shadow-none shadow-lg shadow-gray-200">
      <div className="flex items-center justify-center h-14 py-4 border-b dark:border-zinc-800 border-gray-200">
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
      <ul className="flex flex-col w-full gap-4 py-4">
        {navLinksAuthAdmin.map((group, groupKey) => (
          <li key={groupKey} className="flex flex-col items-center w-full">
            <span className="text-sm text-gray-500 font-medium uppercase flex w-full px-2">
              {group.name}
            </span>
            {group.links.map((link, linkKey) => (
              <Link
                key={linkKey}
                title={link.title}
                href={link.url}
                className="flex items-center justify-between gap-1 text-sm w-full hover:bg-site/10 hover:text-site transition-all duration-300 py-1.5 px-3.5"
              >
                {link.title}
                <IoChevronForwardOutline className="text-base opacity-70" />
              </Link>
            ))}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
