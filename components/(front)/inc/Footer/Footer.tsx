"use client";
import CustomButton from "@/components/others/CustomButton";
import React from "react";
import Auth from "@/components/(front)/inc/Header/Auth/Auth";
import Favorite from "@/components/(front)/inc/Header/Favorite/Favorite";
import Search from "@/components/(front)/inc/Header/Search/Search";
import { IoHomeOutline, IoStorefrontOutline } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";

function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <footer className="relative w-full z-10 max-lg:pb-16">
      <aside className="flex lg:hidden fixed bottom-0 h-16 bg-gray-100 w-full shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.3)]">
        <div className="flex items-center justify-around gap-2 py-2.5 px-4 w-full h-full *:flex *:justify-center *:items-center">
          <div className="relative flex items-center rounded-full lg:hover:scale-110 transition-all duration-300 h-full cursor-pointer">
            <CustomButton
              leftIcon={
                <IoStorefrontOutline className="text-xl max-lg:text-2xl" />
              }
              containerStyles={`p-2 border transition-all duration-300 rounded-full ${
                pathname.startsWith("/magaza") ? "text-white border-transparent bg-site" : "border-gray-200"
              }`}
              handleClick={() => router.push("/magaza")}
            />
          </div>
          <Search />
          <CustomButton
            containerStyles="w-full max-w-[80px] h-[calc(100%+36px)] rounded-t-full bg-site text-white -mt-4 shadow-[0_-5px_30px_0_rgba(0,0,0,0.3)]"
            leftIcon={<IoHomeOutline className="text-4xl -mb-2" />}
            handleClick={() => router.push("/")}
          />
          <Favorite />
          <Auth />
        </div>
      </aside>
      <div className="flex items-center justify-center py-4 lg:h-[120px] h-20">
        Footer
      </div>
    </footer>
  );
}

export default Footer;
