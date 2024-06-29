"use client";
import React from "react";
import Image from "next/image";
import { mainCategories } from "@/constants/(front)";
import { FaRibbon } from "react-icons/fa";

function Categories() {
  return (
    <div className="flex lg:flex-row flex-col gap-4 lg:gap-8 items-center justify-center w-full h-full text-white">
      {mainCategories.map((category, key) => (
        <div
          key={key}
          className="bg-white hover:bg-site/10 hover:border-transparent relative min-h-[180px] max-lg:min-h-[100px] flex lg:items-end items-center justify-start w-full h-full overflow-hidden cursor-pointer hover:lg:rounded-2xl border border-gray-200 hover:lg:shadow-xl hover:lg:shadow-site/20 hover:lg:scale-105 transition-all duration-300 group"
        >
          {/* <Image
            src={category.image}
            alt="Kategori Görseli"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top group-hover:scale-110 group-hover:rotate-[-2deg] transition-all duration-300"
          /> */}
          <FaRibbon className="size-32 absolute right-0 lg:top-6 z-10 text-gray-200 group-hover:text-site/50 scale-[3.5] group-hover:scale-75 lg:group-hover:scale-100 group-hover:-translate-x-6 transition-all duration-300" />
          <div className="text-gray-800 flex p-12 text-4xl lg:text-5xl font-gemunu z-10 transition-all duration-300 group-hover:text-site select-none">
            {category.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;
