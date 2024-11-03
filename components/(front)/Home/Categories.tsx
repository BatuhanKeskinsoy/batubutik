"use client";
import React from "react";
import Link from "next/link";
import { FaCircleArrowRight } from "react-icons/fa6";

interface ICategoriesProps {
  categories: { name: string; slug: string }[];
}
function Categories({ categories }: ICategoriesProps) {
  if (categories.length > 1) {
    return (
      <div className="flex lg:flex-row flex-col gap-4 lg:gap-8 items-center justify-center w-full h-full text-white">
        {categories.map((category, key) => (
          <Link
            href={`/magaza/${category.slug}`}
            title={category.name}
            key={key}
            className="bg-gray-200 dark:bg-zinc-800 hover:bg-site hover:dark:bg-site dark:hover:border-site hover:border-transparent relative flex lg:items-end items-center justify-start w-full h-full overflow-hidden cursor-pointer lg:rounded-2xl lg:shadow-xl hover:lg:shadow-site/20 hover:lg:scale-105 transition-all duration-300 group"
          >
            <FaCircleArrowRight className="lg:size-16 size-10 absolute lg:right-0 right-4 lg:top-6 z-10 text-gray-700 dark:text-gray-200 group-hover:text-white lg:scale-[2] group-hover:scale-[1] lg:translate-x-12 lg:translate-y-16 lg:group-hover:-translate-x-6 lg:group-hover:-translate-y-0 transition-all duration-300" />
            <div className="text-gray-800 dark:text-gray-200 flex lg:p-8 p-4 text-4xl lg:text-5xl font-gemunu z-10 transition-all duration-300 group-hover:text-white select-none">
              {category.name}
            </div>
          </Link>
        ))}
      </div>
    );
  } else return null;
}

export default Categories;
