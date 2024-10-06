import { generalsTypes } from "@/types/generalTypes";
import Image from "next/image";
import React from "react";

interface IAboutProps {
  about: { content: string; image: string };
}

function About({ about }: IAboutProps) {
  return (
    <div className="container mx-auto px-4 flex lg:flex-row flex-col gap-8">
      <div className="flex flex-col lg:gap-6 gap-4 lg:w-3/5 w-full text-lg tracking-wide">
        <span className="font-gemunu lg:text-4xl text-3xl tracking-wider font-medium">
          Hakkımızda
        </span>
        <div className="flex flex-col w-full text-gray-600 dark:text-gray-400">
          <div
            className="dangeriousContent lg:leading-8 leading-7"
            dangerouslySetInnerHTML={{
              __html: about.content,
            }}
          />
        </div>
      </div>
      <div className="relative flex flex-col gap-4 lg:w-2/5 min-h-[265px] w-full">
        <Image
          src={about.image}
          alt={"Hakkımızda"}
          title={"Hakkımızda"}
          width={630}
          height={420}
          quality={100}
          className="object-contain lg:rounded-xl"
        />
      </div>
    </div>
  );
}

export default About;
