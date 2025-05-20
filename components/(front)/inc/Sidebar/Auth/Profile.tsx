"use client";
import { getShortName } from "@/lib/functions/getShortName";
import CustomButton from "@/components/others/CustomButton";
import { userAuthTypes } from "@/types/user/userAuthTypes";
import React, { Dispatch, SetStateAction } from "react";
import { IoChevronForwardOutline, IoLogOutOutline } from "react-icons/io5";
import { navLinksAuthAdmin, navLinksAuthUser } from "@/constants/(front)";
import Link from "next/link";

interface IProfileProps {
  user: userAuthTypes | null;
  setUser: Dispatch<SetStateAction<userAuthTypes | null>>;
  setSidebarStatus: Dispatch<SetStateAction<string>>;
}

function Profile({ user, setUser, setSidebarStatus }: IProfileProps) {
  const handleLogout = (e: any) => {
    e.preventDefault();
    setUser(null);
    document.cookie =
      "swr-auth-token=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";

    // Burada bilgileri localstorageden siliyorum ama useUsers SWR'si yapıldıktan sonra localstoragede olmayacak ve context'den user kaldırılacak.
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
  };

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      {user && (
        <div className="flex flex-col w-full h-full gap-6">
          <div className="flex gap-4 items-center select-none">
            <div
              className={`flex items-center justify-center size-20 min-w-20 rounded-full bg-site/10 text-site select-none text-3xl uppercase shadow-lg`}
            >
              {getShortName(user.firstName, user.lastName)}
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col leading-4">
                <span className="text-site font-semibold text-lg">
                  {user.firstName} {user.lastName}
                </span>
              </div>
              <small className="text-gray-600 dark:text-gray-400 tracking-wide">
                {user.email}
              </small>
            </div>
          </div>
          <hr className="dark:border-zinc-800" />
          <div className="flex flex-col w-full gap-2">
            {user.role === "user"
              ?
                navLinksAuthUser.map((link, key) => (
                  <Link
                    key={key}
                    title={link.title}
                    href={link.url}
                    className="flex items-center gap-4 justify-between bg-gray-100 dark:bg-zinc-800 py-3 px-4 text-base hover:pl-6 hover:bg-site/10 dark:hover:bg-site/10 hover:text-site transition-all duration-300 text-left"
                    onClick={() => setSidebarStatus("")}
                  >
                    {link.title}
                    <IoChevronForwardOutline className="text-xl opacity-70" />
                  </Link>
                ))
              :
                navLinksAuthAdmin.map((group, groupKey) => (
                  <div key={groupKey} className="flex flex-col gap-1">
                    <span className="text-sm text-gray-500 pt-3 font-medium tracking-wide uppercase">
                      {group.name}
                    </span>
                    {group.links.map((link, linkKey) => (
                      <Link
                        key={linkKey}
                        title={link.title}
                        href={link.url}
                        className="flex items-center gap-4 justify-between bg-gray-100 dark:bg-zinc-800 py-3 px-4 text-base hover:pl-6 hover:bg-site/10 dark:hover:bg-site/10 hover:text-site transition-all duration-300 text-left"
                        onClick={() => setSidebarStatus("")}
                      >
                        {link.title}
                        <IoChevronForwardOutline className="text-xl opacity-70" />
                      </Link>
                    ))}
                  </div>
                ))}
            <hr className="my-2 dark:border-zinc-800" />
            <CustomButton
              title={"Çıkış Yap"}
              btnType="submit"
              containerStyles={`flex items-center gap-4 justify-between bg-gray-100 dark:bg-zinc-800 py-3 px-4 text-base hover:pl-6 transition-all duration-300 text-left hover:bg-site/10 dark:hover:bg-site/10 hover:text-site`}
              rightIcon={<IoLogOutOutline className="text-xl opacity-70" />}
              handleClick={(e) => handleLogout(e)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
