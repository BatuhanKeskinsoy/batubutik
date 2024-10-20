"use client";
import { navLinksAuthUser } from "@/constants/(front)";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function ProfileSidebar() {
  const path = usePathname();

  const isActive = (linkUrl: string) => {
    return path === linkUrl || (path.startsWith(linkUrl + '/') && linkUrl !== '/profilim');
  };

  return (
    <div className="flex flex-col gap-2 w-full rounded-md overflow-hidden sticky top-28 pb-4">
      {navLinksAuthUser.map((link, key) => (
        <Link
          key={key}
          href={link.url}
          title={link.title}
          className={`lg:py-2.5 py-3 px-4 w-full font-gemunu tracking-wider text-lg transition-all duration-300 rounded-md shadow-md ${
            isActive(link.url) 
              ? "text-white bg-site dark:bg-site shadow-site/20"
              : "dark:bg-zinc-800 bg-gray-100 hover:text-site hover:bg-site/10 dark:hover:bg-site/10"
          }`}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}
export default ProfileSidebar;
