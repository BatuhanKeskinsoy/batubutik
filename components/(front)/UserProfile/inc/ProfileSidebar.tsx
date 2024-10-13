"use client";
import { navLinksAuthUser } from "@/constants/(front)";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function ProfileSidebar() {
  const path = usePathname();
  const currentNavLink = navLinksAuthUser.find(
    (navlink) => navlink.url === path
  );

  const Title = currentNavLink ? currentNavLink.title : "Profilim";

  return (
    <div className="flex flex-col gap-2 w-full rounded-sm overflow-hidden sticky top-32">
      {navLinksAuthUser.map((link, key) => (
        <Link
          key={key}
          href={link.url}
          title={link.title}
          className={`lg:py-2.5 py-3 px-4 w-full font-gemunu tracking-wider text-lg transition-all duration-300 rounded-md ${
            Title === link.title
              ? "text-white bg-site dark:bg-site"
              : "dark:bg-zinc-800 bg-gray-100 hover:text-site hover:bg-site/10 dark:hover:bg-site/10 "
          }`}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default ProfileSidebar;
