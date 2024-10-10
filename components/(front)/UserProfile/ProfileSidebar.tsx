import { navLinksAuthUser } from "@/constants/(front)";
import Link from "next/link";
import React from "react";

function ProfileSidebar() {
  return (
    <div className="flex flex-col gap-2 w-full rounded-sm overflow-hidden sticky top-32">
      {navLinksAuthUser.map((link, key) => (
        <Link
          key={key}
          href={link.url}
          title={link.title}
          className="py-3 px-4 w-full hover:text-site hover:bg-site/10 dark:hover:bg-site/10 transition-all duration-300 dark:bg-zinc-800 bg-gray-100"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default ProfileSidebar;
