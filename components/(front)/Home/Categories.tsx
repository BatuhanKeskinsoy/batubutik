"use client";
import React from "react";
import Image from "next/image";
import { categories } from "@/constants/(front)";
import { FaTags } from "react-icons/fa";
import Link from "next/link";

function Categories() {
  if (categories.length > 1) {
    return (
      <div className="flex lg:flex-row flex-col gap-4 lg:gap-8 items-center justify-center w-full h-full text-white">
        {categories.map((category, key) => (
          <Link
            href={`/magaza/${category.slug}`}
            title={category.name}
            key={key}
            className="border border-gray-200 bg-gray-100 hover:bg-site hover:border-transparent relative flex lg:items-end items-center justify-start w-full h-full overflow-hidden cursor-pointer lg:rounded-2xl lg:shadow-lg hover:lg:shadow-xl lg:shadow-gray-200 hover:lg:shadow-site/20 hover:lg:scale-105 transition-all duration-300 group"
          >
            <FaTags className="lg:size-16 size-12 absolute right-0 lg:top-6 z-10 text-gray-700 group-hover:text-white scale-[2] group-hover:scale-[1] lg:translate-x-12 translate-x-10 lg:translate-y-16 translate-y-10 group-hover:-translate-x-6 group-hover:-translate-y-0 transition-all duration-300" />
            <div className="text-gray-800 flex lg:p-8 p-4 text-4xl lg:text-5xl font-gemunu z-10 transition-all duration-300 group-hover:text-white select-none">
              {category.name}
            </div>
          </Link>
        ))}
      </div>
    );
  } else return null;
}

export default Categories;
