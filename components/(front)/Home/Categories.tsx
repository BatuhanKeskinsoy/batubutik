"use client";
import React from "react";
import Image from "next/image";
import { mainCategories } from "@/constants/(front)";
import { FaRibbon } from "react-icons/fa";

function Categories() {
  return (
    <section className="relative w-full container mx-auto px-4">
      <div className="flex lg:flex-row flex-col gap-4 lg:gap-8 items-center justify-center w-full h-full text-white">
        {mainCategories.map((category, key) => (
          <div
            key={key}
            className="bg-white relative min-h-[200px] max-lg:min-h-[100px] flex lg:items-end items-center justify-start w-full h-full overflow-hidden cursor-pointer lg:rounded-2xl border border-gray-200 lg:shadow-lg shadow-gray-200 group"
          >
            <FaRibbon className="size-32 absolute right-0 top-10 z-10 text-gray-200 group-hover:text-site/50 scale-[3.5] group-hover:scale-125 group-hover:-translate-x-6 transition-all duration-300" />
            <div className="text-gray-800 flex p-12 text-4xl lg:text-5xl font-gemunu z-10 group-hover:scale-110 transition-all duration-300 group-hover:text-site select-none">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
