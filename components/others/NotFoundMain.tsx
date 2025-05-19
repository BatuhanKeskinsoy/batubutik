import { generalsTypes } from "@/types/generalTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbError404 } from "react-icons/tb";

interface INotFoundMainProps {
  generals: generalsTypes;
}

function NotFoundMain({ generals }: INotFoundMainProps) {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center gap-4 py-4 dark:bg-zinc-900 bg-gray-100">
      <div className="flex flex-col items-center justify-center lg:gap-12 gap-8">
        <div className="lg:p-12 p-6 bg-site/10 rounded-full">
          <TbError404 className="lg:size-72 size-52 max-w-full text-site" />
        </div>
        <span className="font-gemunu lg:text-4xl text-xl tracking-wider text-center">
          Aradığınız Sayfa Bulunamadı!
        </span>
        <Link
          href="/"
          title={generals.site_name}
          className="px-8 lg:py-6 py-4 bg-site/10 text-site font-gemunu lg:text-4xl text-2xl rounded-xl dark:hover:bg-site hover:bg-site hover:text-white transition-all duration-300"
        >
          Anasayfa'ya Dön!
        </Link>
        <Link
          href={"/"}
          className="relative capitalize font-medium font-gemunu text-5xl text-site"
          title={generals.site_name}
        >
          {generals.logo ? (
            <Image
              src={generals.logo}
              alt={generals.site_name}
              title={generals.site_name}
              width={0}
              height={0}
              className="h-10 w-auto"
            />
          ) : (
            <span>{generals.site_name}</span>
          )}
        </Link>
      </div>
    </div>
  );
}

export default NotFoundMain;
