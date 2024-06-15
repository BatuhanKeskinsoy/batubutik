"use client";
import React from "react";
import Image from "next/image";
import { mainCategories } from "@/constants/(front)";

function Categories() {
  return (
    <section className="relative w-full container mx-auto lg:px-4">
      <div className="flex lg:flex-row flex-col lg:gap-8 items-center justify-center w-full h-full text-white">
        {mainCategories.map((category, key) => (
          <div
            key={key}
            className="relative min-h-[200px] flex lg:items-end items-center justify-start w-full h-full overflow-hidden cursor-pointer lg:rounded-2xl lg:shadow-[0_15px_100px_-15px_rgba(0,0,0,1)] group"
          >
            <Image
              src={category.image}
              alt="Kategori Görseli"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top group-hover:scale-110 group-hover:rotate-[-2deg] transition-all duration-300"
            />
            <div className="flex text-white p-12 text-5xl font-gemunu z-10 group-hover:scale-110 transition-all duration-300">{category.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
