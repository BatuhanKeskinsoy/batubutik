"use client";
import React from "react";
import Image from "next/image";
import { mainCategories } from "@/constants/(front)";
import { FaTags } from "react-icons/fa";

function Categories() {
  if (mainCategories.length > 1) {
    return (
      <div className="flex lg:flex-row flex-col gap-4 lg:gap-8 items-center justify-center w-full h-full text-white">
        {mainCategories.map((category, key) => (
          <div
            key={key}
            className="border border-gray-200 bg-gray-100 hover:bg-site hover:border-transparent relative flex lg:items-end items-center justify-start w-full h-full overflow-hidden cursor-pointer lg:rounded-2xl lg:shadow-lg hover:lg:shadow-xl lg:shadow-gray-200 hover:lg:shadow-site/20 hover:lg:scale-105 transition-all duration-300 group"
          >
            {/* <Image
              src={category.image}
              alt="Kategori Görseli"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top group-hover:scale-110 group-hover:rotate-[-2deg] transition-all duration-300"
            /> */}
            <FaTags className="lg:size-16 size-12 absolute right-0 lg:top-6 z-10 text-gray-700 group-hover:text-white scale-[2] group-hover:scale-[1] lg:translate-x-12 translate-x-10 lg:translate-y-16 translate-y-10 group-hover:-translate-x-6 group-hover:-translate-y-0 transition-all duration-300" />
            <div className="absolute"></div>
            <div className="text-gray-800 flex lg:p-8 p-4 text-4xl lg:text-5xl font-gemunu z-10 transition-all duration-300 group-hover:text-white select-none">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    );
  } else return null;
}

export default Categories;
