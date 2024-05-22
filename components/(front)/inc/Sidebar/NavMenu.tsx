"use client";
import { getPrice } from "@/components/functions/getPrice";
import { getSocialIcon } from "@/components/functions/getSocialIcon";
import { generals } from "@/constants/(front)";
import Link from "next/link";
import React from "react";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";

function NavMenu() {
  return (
    <div className="flex flex-col w-full h-[calc(100dvh-69px)] justify-between">
      <div className="flex flex-col gap-4 w-full">
        <nav className="flex flex-col items-start text-lg font-gemunu tracking-wide *:px-4 *:py-2 *:flex *:items-center *:h-full *:transition-all *:duration-300 *:border-b *:w-full">
          <Link href={"/"} className="hover:text-site">
            Anasayfa
          </Link>
          <Link href={"/magaza"} className="hover:text-site">
            Mağaza
          </Link>
          <Link href={""} className="hover:text-site">
            Blog
          </Link>
          <Link href={""} className="hover:text-site">
            Hakkımızda
          </Link>
          <Link href={""} className="hover:text-site">
            İletişim
          </Link>
        </nav>
        <div className="flex flex-col items-center gap-1 bg-site text-white p-4">
          {generals.free_shipping > 0 && (
            <span className="text-lg">
              {getPrice(generals.free_shipping)} ve üzerine
            </span>
          )}
          <div className="flex items-center justify-center w-full gap-4">
            <LiaShippingFastSolid className="text-4xl" />
            <strong className="tracking-wide uppercase text-lg -mb-1">
              KARGO ÜCRETSİZ
            </strong>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full text-base text-gray-600">
          <Link
            href="mailto:commerce@gmail.com"
            className="flex items-center gap-2 hover:text-site transition-all duration-300 p-4 bg-gray-100 border-b"
          >
            <IoMailOutline className="text-2xl" />
            <span>{generals.email}</span>
          </Link>
          <Link
            href="tel:08508508585@gmail.com"
            className="flex items-center gap-2 hover:text-site transition-all duration-300 p-4 bg-gray-100"
          >
            <IoCallOutline className="text-2xl" />
            <span>{generals.phone}</span>
          </Link>
        </div>
        <hr />
        <div className="flex justify-evenly p-4 gap-4 flex-wrap items-center *:transition-all *:duration-300">
          {generals.socials.map((social, key) => (
            <Link
              key={key}
              href={social.url}
              className="text-gray-600 hover:text-site *:text-4xl"
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
