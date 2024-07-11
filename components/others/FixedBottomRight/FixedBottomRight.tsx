"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoChevronUpOutline, IoLogoWhatsapp } from "react-icons/io5";
import CustomButton from "@/components/others/CustomButton";

const ScrollTopButton = () => {
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsTop(scrollTop === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <CustomButton
      leftIcon={<IoChevronUpOutline className="text-4xl" />}
      containerStyles={`bg-site/80 hover:bg-site hover:translate-x-0 transition-all duration-300 ${
        isTop
          ? "pointer-events-none !translate-x-20"
          : "pointer-events-auto translate-x-0"
      }`}
      handleClick={handleScrollTop}
    />
  );
};

const WhatsAppButton = () => {
  return (
    <Link
      href={`https://api.whatsapp.com/send?phone=9${"05555555555"}&amp;text=Merhaba, site web sitenizden ulaşıyorum.`}
      title="WhatsApp"
      target="_blank"
      className=" bg-green-500/80 hover:bg-green-500 hover:translate-x-0"
    >
      <IoLogoWhatsapp className="text-4xl" />
    </Link>
  );
};

function FixedBottomRight() {
  return (
    <div
      className="flex flex-col fixed lg:bottom-12 bottom-20 right-0 gap-4 *:text-white *:translate-x-2 *:py-2 *:px-5 *:rounded-full *:rounded-r-none *:transition-all *:duration-300"
      style={{ zIndex: 11 }}
    >
      <ScrollTopButton />
      <WhatsAppButton />
    </div>
  );
}

export default FixedBottomRight;
