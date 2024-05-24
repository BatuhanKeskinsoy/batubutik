"use client";
import React from "react";
import Image from "next/image";
import { mainCategories } from "@/constants/(front)";

function Banner() {
  return (
    <section className="relative lg:h-[calc(100vh-120px)] h-[calc(100vh-144px)] w-full ">
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center w-full h-full text-white">
        {mainCategories.map((category, key) => (
          <div
            key={key}
            className="relative flex lg:items-end items-center justify-start w-full h-full overflow-hidden cursor-pointer group"
          >
            <Image
              src={category.image}
              alt="Kategori Görseli"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top group-hover:scale-110 group-hover:rotate-[-2deg] transition-all duration-300"
            />
            <div className="flex text-white p-12 text-6xl font-gemunu z-10 group-hover:scale-110 transition-all duration-300">{category.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Banner;
