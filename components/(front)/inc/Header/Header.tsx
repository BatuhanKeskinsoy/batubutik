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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { navLinks } from "@/constants/(front)";
import { LiaShippingFastSolid } from "react-icons/lia";
import { getPrice } from "@/lib/functions/getPrice";
import { getSocialIcon } from "@/lib/functions/getSocialIcon";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Theme from "@/components/others/Theme";
import { generalsTypes } from "@/types/generalTypes";
import { useTheme } from "next-themes";
import { mainCategoryTypes } from "@/types/categoryTypes";
import { useProducts } from "@/hooks/useProduct";

interface IHeaderProps {
  generals: generalsTypes;
  categories: mainCategoryTypes[];
}
function Header({ generals, categories }: IHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { sidebarStatus, setSidebarStatus, isMobile } = useGlobalContext();
  const router = useRouter();
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const { products } = useProducts();

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

  const handleNavLink = (link: string) => {
    setSidebarStatus("");
    router.push(link);
  };

  const getLinkClasses = (url: string) => {
    if (pathname === "/" && url === "/") {
      return "text-site";
    }
    return pathname && pathname.startsWith(url) && url !== "/"
      ? "text-site"
      : "dark:text-gray-200 hover:text-site dark:hover:text-site";
  };

  return (
    <>
      <ToastContainer theme={resolvedTheme} />
      <header className="relative w-full lg:h-[120px] h-20 z-20">
        <div className="h-10 w-full max-lg:hidden bg-gray-300/50 dark:bg-zinc-800">
          <div className="container px-4 mx-auto flex justify-between items-center h-full text-xs text-gray-600 dark:text-gray-200">
            <div className="flex items-center gap-4 h-full">
              {generals.socials && (
                <div className="flex gap-2 items-center *:transition-all *:duration-300">
                  {generals.socials.map((social, key) => (
                    <Link
                      key={key}
                      href={social.url}
                      title={social.platform}
                      className="hover:text-site *:text-xl"
                      target="_blank"
                    >
                      {getSocialIcon(social.platform)}
                    </Link>
                  ))}
                </div>
              )}
              <div className="w-1 h-full border-r border-gray-300 dark:border-zinc-700" />
              <Link
                href={`mailto:${generals.email}`}
                className="flex items-center gap-2 hover:text-site transition-all duration-300"
              >
                <IoMailOutline className="text-xl" />
                <span>{generals.email}</span>
              </Link>
              <Link
                href={`tel:${generals.phone}`}
                className="flex items-center gap-2 hover:text-site transition-all duration-300"
              >
                <IoCallOutline className="text-xl" />
                <span>{generals.phone}</span>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <LiaShippingFastSolid className="text-xl" />
              {generals.free_shipping && generals.free_shipping > 0 && (
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
          } bg-white dark:bg-zinc-900`}
        >
          <div className="container px-4 mx-auto flex justify-between items-center w-full h-full gap-6">
            <div className="flex gap-6 h-full items-center justify-between max-lg:w-full">
              <div className="flex w-full h-full items-center justify-center lg:order-1 order-3">
                <Link
                  href={"/"}
                  title={generals.site_name}
                  className="capitalize font-medium text-3xl text-site"
                >
                  {generals.logo ? (
                    <Image
                      src={generals.logo}
                      alt={generals.site_name}
                      title={generals.site_name}
                      width={0}
                      height={0}
                      className="h-[30px] w-auto"
                    />
                  ) : (
                    <span>{generals.site_name}</span>
                  )}
                </Link>
              </div>
              <div className="max-lg:hidden w-0.5 h-full border-r border-gray-200 dark:border-zinc-800 order-2"></div>
              <div className="flex lg:order-3 order-1 h-full">
                <CustomButton
                  btnType="button"
                  containerStyles="lg:hidden"
                  leftIcon={
                    <IoMenuOutline className="text-4xl text-gray-800 dark:text-gray-200" />
                  }
                  handleClick={() => setSidebarStatus("MobileMenu")}
                />
                <nav className="flex items-center text-base font-medium *:px-3 *:flex *:items-center *:h-full *:transition-all *:duration-300 *:min-w-max max-lg:hidden">
                  <CustomButton
                    btnType="button"
                    title={"Anasayfa"}
                    containerStyles={getLinkClasses(`/`)}
                    handleClick={() => handleNavLink(`/`)}
                  />
                  {categories &&
                    categories.map((category, key) => (
                      <CustomButton
                        key={key}
                        title={category.name}
                        containerStyles={getLinkClasses(
                          `/magaza/${category.slug}`
                        )}
                        handleClick={() =>
                          handleNavLink(`/magaza/${category.slug}`)
                        }
                      />
                    ))}
                  {navLinks.map((link, key) => (
                    <CustomButton
                      btnType="button"
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
              {!isMobile && <Theme />}
              <Basket products={products} />
            </div>
          </div>
        </div>
        {sidebarStatus && <Sidebar generals={generals} categories={categories} />}
      </header>
    </>
  );
}

export default Header;
