"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import CustomButton from "@/components/others/CustomButton";
import { IoCallOutline, IoMailOutline, IoMenuOutline } from "react-icons/io5";
import { useGlobalContext } from "@/app/Context/store";
import Basket from "@/components/(front)/inc/Header/Basket/Basket";
import Favorite from "@/components/(front)/inc/Header/Favorite/Favorite";
import Search from "@/components/(front)/inc/Header/Search/Search";
import Auth from "@/components/(front)/inc/Header/Auth/Auth";
import Sidebar from "@/components/(front)/inc/Sidebar/Sidebar";
import Loading from "@/components/others/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { generals, navLinks } from "@/constants/(front)";
import { LiaShippingFastSolid } from "react-icons/lia";
import { getPrice } from "@/components/functions/getPrice";
import { getSocialIcon } from "@/components/functions/getSocialIcon";
import { useRouter, usePathname } from "next/navigation";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const { sidebarStatus, setSidebarStatus, isMobile } = useGlobalContext();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 0 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollTop === 0 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  const handleNavLink = (link: string) => {
    setSidebarStatus("");
    router.push(link);
  };

  const getLinkClasses = (url: string) => {
    if (pathname === '/' && url === '/') {
      return "text-site";
    }
    return pathname.startsWith(url) && url !== '/' ? "text-site" : "hover:text-site";
  };
  return (
    <>
      <ToastContainer />
      {loading && <Loading />}
      <header className="relative w-full lg:h-[120px] h-20 z-20">
        <div className="h-10 w-full max-lg:hidden bg-gray-300/50">
          <div className="container px-4 mx-auto flex justify-between items-center h-full text-xs text-gray-600">
            <div className="flex items-center gap-4 h-full">
              <div className="flex gap-2 items-center *:transition-all *:duration-300">
                {generals.socials.map((social, key) => (
                  <Link
                    key={key}
                    href={social.url}
                    className="hover:text-site *:text-xl"
                    target="_blank"
                  >
                    {getSocialIcon(social.platform)}
                  </Link>
                ))}
              </div>
              <div className="w-1 h-full border-r border-gray-300" />
              <Link
                href="mailto:commerce@gmail.com"
                className="flex items-center gap-2 hover:text-site transition-all duration-300"
              >
                <IoMailOutline className="text-xl" />
                <span>{generals.email}</span>
              </Link>
              <Link
                href="tel:08508508585@gmail.com"
                className="flex items-center gap-2 hover:text-site transition-all duration-300"
              >
                <IoCallOutline className="text-xl" />
                <span>{generals.phone}</span>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <LiaShippingFastSolid className="text-xl" />
              {generals.free_shipping > 0 && (
                <span>{getPrice(generals.free_shipping)} ve üzerine</span>
              )}
              <strong className="text-site tracking-wide uppercase">
                KARGO ÜCRETSİZ
              </strong>
            </div>
          </div>
        </div>
        <div
          className={`h-20 shadow-lg shadow-black/10 w-full fixed transition-all duration-100 ${
            !isMobile && isScrolled ? "-translate-y-10" : ""
          } bg-white`}
        >
          <div className="container px-4 mx-auto flex justify-between items-center w-full h-full gap-6">
            <div className="flex gap-6 h-full items-center justify-between max-lg:w-full">
              <div className="flex w-full h-full items-center justify-center lg:order-1 order-3">
                <Link
                  href={"/"}
                  className="capitalize font-medium font-gemunu text-4xl text-site"
                >
                  {generals.site_name}
                </Link>
              </div>
              <div className="max-lg:hidden w-0.5 h-full border-r border-gray-200 order-2"></div>
              <div className="flex lg:order-3 order-1 h-full">
                <CustomButton
                  containerStyles="lg:hidden"
                  leftIcon={
                    <IoMenuOutline className="text-4xl text-gray-800" />
                  }
                  handleClick={() => setSidebarStatus("MobileMenu")}
                />
                <nav className="flex items-center text-lg font-gemunu tracking-wide *:px-3 *:flex *:items-center *:h-full *:transition-all *:duration-300 max-lg:hidden">
                  {navLinks.map((link, key) => (
                    <CustomButton
                      key={key}
                      title={link.title}
                      containerStyles={getLinkClasses(link.url)}
                      handleClick={() => handleNavLink(link.url)}
                    />
                  ))}
                </nav>
              </div>
            </div>
            <div className="flex items-center gap-3 h-[38px]">
              <div className="max-lg:hidden flex items-center gap-3 h-full">
                <Auth />
                <Search />
                <Favorite />
              </div>
              <Basket />
            </div>
          </div>
        </div>
        {sidebarStatus && <Sidebar />}
      </header>
    </>
  );
}

export default Header;
