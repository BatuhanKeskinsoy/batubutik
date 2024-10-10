import { generalsTypes } from "@/types/generalTypes";
import Image from "next/image";
import React from "react";
interface ILoadingProps {
  generals: generalsTypes;
}
function Loading({ generals }: ILoadingProps) {
  return (
    <div className="z-50 w-screen h-full fixed overflow-hidden left-0 top-0 bg-gray-100 dark:bg-zinc-900">
      <div className="flex h-screen w-screen justify-center items-center">
        <div className="capitalize font-medium font-gemunu text-4xl text-site select-none animate-scaleMobile lg:animate-scaleDesktop">
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
        </div>
      </div>
    </div>
  );
}

export default Loading;
