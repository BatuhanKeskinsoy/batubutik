"use client";
import { useGlobalContext } from "@/app/Context/store";
import { getPrice } from "@/components/functions/getPrice";
import { getSocialIcon } from "@/components/functions/getSocialIcon";
import CustomButton from "@/components/others/CustomButton";
import Theme from "@/components/others/Theme";
import { categories, generals, navLinks } from "@/constants/(front)";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";

function NavMenu() {
  const { setSidebarStatus, isMobile } = useGlobalContext();
  const router = useRouter();
  const pathname = usePathname();

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
      : "hover:text-site";
  };
  return (
    <div className="flex flex-col w-full h-[calc(100dvh-77px)] justify-between">
      <div className="flex flex-col w-full">
        <nav className="flex flex-col items-start text-lg font-gemunu tracking-wide *:px-4 *:py-2 *:flex *:items-center *:h-full *:transition-all *:duration-300 *:border-b *:dark:border-zinc-800 last:*:border-b-0 *:w-full *:min-w-max">
          <CustomButton
            title={"Anasayfa"}
            containerStyles={getLinkClasses(`/`)}
            handleClick={() => handleNavLink(`/`)}
          />
          {categories &&
            categories.map((category, key) => (
              <CustomButton
                key={key}
                title={category.name}
                containerStyles={getLinkClasses(`/magaza/${category.slug}`)}
                handleClick={() => handleNavLink(`/magaza/${category.slug}`)}
              />
            ))}
          {navLinks.map((link, key) => (
            <CustomButton
              key={key}
              title={link.title}
              containerStyles={getLinkClasses(link.url)}
              handleClick={() => handleNavLink(link.url)}
            />
          ))}
        </nav>
        <div className="flex flex-col items-center gap-1 bg-site/10 text-site p-3">
          {generals.free_shipping > 0 && (
            <span className="text-base tracking-wide">
              {getPrice(generals.free_shipping)} ve üzerine
            </span>
          )}
          <div className="flex items-center justify-center w-full gap-4">
            <LiaShippingFastSolid className="text-3xl" />
            <strong className="tracking-wider uppercase text-base -mb-1">
              KARGO ÜCRETSİZ
            </strong>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        {isMobile && (
          <div className="flex items-center justify-between py-4 px-4 font-gemunu text-xl tracking-wider">
            <span>Tema</span>
            <Theme />
          </div>
        )}
        {(generals.email || generals.phone) && (
          <div className="flex flex-col w-full text-base text-gray-600 dark:text-gray-200">
            {generals.email && (
              <Link
                href={`mailto:${generals.email}`}
                className="flex items-center gap-2 hover:text-site transition-all duration-300 p-4 bg-gray-100 dark:bg-zinc-800 border-b dark:border-zinc-700"
              >
                <IoMailOutline className="text-2xl" />
                <span>{generals.email}</span>
              </Link>
            )}
            {generals.phone && (
              <Link
                href={`tel:${generals.phone}`}
                className="flex items-center gap-2 hover:text-site transition-all duration-300 p-4 bg-gray-100 dark:bg-zinc-800"
              >
                <IoCallOutline className="text-2xl" />
                <span>{generals.phone}</span>
              </Link>
            )}
          </div>
        )}
        <div className="flex justify-evenly p-4 gap-2 flex-wrap items-center *:transition-all *:duration-300">
          {generals.socials.map((social, key) => (
            <Link
              key={key}
              href={social.url}
              title={social.platform}
              className="text-gray-600 dark:text-gray-400 hover:text-site dark:hover:text-site *:text-4xl"
              target="_blank"
            >
              {getSocialIcon(social.platform)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
