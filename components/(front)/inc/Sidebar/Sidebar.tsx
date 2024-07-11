import { useGlobalContext } from "@/app/Context/store";
import CustomButton from "@/components/others/CustomButton";
import Link from "next/link";
import React from "react";
import { generals } from "@/constants/(front)";
import { IoCloseOutline } from "react-icons/io5";
import Basket from "@/components/(front)/inc/Sidebar/Basket/Basket";
import Favorite from "@/components/(front)/inc/Sidebar/Favorite";
import NavMenu from "@/components/(front)/inc/Sidebar/NavMenu";
import Search from "@/components/(front)/inc/Sidebar/Search";
import Auth from "@/components/(front)/inc/Sidebar/Auth";
import Image from "next/image";

function Sidebar() {
  const { sidebarStatus, setSidebarStatus } = useGlobalContext();
  return (
    <div className="fixed w-screen h-screen z-20">
      <div
        className={`bg-gray-900/60 w-screen h-screen fixed left-0 top-0 transition-all duration-300 animate-sidebarBgSmooth z-10`}
        onClick={() => setSidebarStatus("")}
      ></div>
      <div
        className={`bg-white fixed top-0 ${
          sidebarStatus === "MobileMenu"
            ? "left-0 animate-sidebarLeftSmooth"
            : "right-0 animate-sidebarRightSmooth"
        } h-screen lg:w-[500px] w-[calc(100vw-15%)] shadow-lg shadow-gray-600 transition-all duration-300 z-20`}
      >
        <div className="flex flex-col w-full h-full">
          <div className="flex justify-between items-center border-b lg:px-8 px-4 py-5">
            <div className="font-gemunu tracking-wide text-2xl">
              {sidebarStatus === "Basket" ? (
                "Sepetim"
              ) : sidebarStatus === "Favorite" ? (
                "Favori Ürünler"
              ) : sidebarStatus === "Search" ? (
                "Ürün Arayın"
              ) : sidebarStatus === "Auth" ? (
                "Profil"
              ) : sidebarStatus === "MobileMenu" ? (
                <div className="flex w-full h-full items-center justify-center lg:order-1 order-3">
                  <Link
                    href={"/"}
                    title={generals.site_name}
                    className="capitalize font-medium font-gemunu text-4xl text-site"
                  >
                    {generals.logo ? (
                      <Image
                        src={generals.logo}
                        alt="Logo"
                        title={generals.site_name}
                        height={40}
                        width={150}
                      />
                    ) : (
                      <span>{generals.site_name}</span>
                    )}
                  </Link>
                </div>
              ) : null}
            </div>
            <CustomButton
              leftIcon={
                <IoCloseOutline className="text-4xl transition-all duration-300 hover:text-red-500 hover:scale-125" />
              }
              handleClick={() => setSidebarStatus("")}
            />
          </div>
          {sidebarStatus === "Basket" ? (
            <Basket />
          ) : sidebarStatus === "Favorite" ? (
            <Favorite />
          ) : sidebarStatus === "Search" ? (
            <Search />
          ) : sidebarStatus === "Auth" ? (
            <Auth />
          ) : sidebarStatus === "MobileMenu" ? (
            <NavMenu />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
