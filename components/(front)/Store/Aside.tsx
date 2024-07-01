"use client";
import { categories } from "@/constants/(front)";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IoChevronDown, IoChevronUp, IoSearchOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useGlobalContext } from "@/app/Context/store";
import CustomButton from "@/components/others/CustomButton";

interface IStoreAsideProps {
  mainCategoryParam?: string;
  categoryParam?: string;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

function Aside({
  mainCategoryParam,
  categoryParam,
  search,
  setSearch,
}: IStoreAsideProps) {
  const pathname = usePathname();
  const { isMobile } = useGlobalContext();
  const [isFilterNav, setIsFilterNav] = useState(true);

  useEffect(() => {
    setSearch("");
  }, [pathname]);

  useEffect(() => {
    setIsFilterNav(!isMobile);
  }, [isMobile]);

  return (
    <aside className="lg:w-[320px] w-full h-fit rounded-sm lg:sticky lg:top-24 transition-all duration-300">
      <div className="flex flex-col gap-3 w-full text-sm text-gray-600">
        <div className="pb-0">
          <label
            htmlFor="search"
            className="flex items-center gap-2 w-full border border-gray-200"
          >
            <input
              type="text"
              id="search"
              required
              className="bg-white focus:border-site/50 py-3 pl-4 outline-none w-full transition-all duration-300"
              placeholder="Ürün adı veya ürün kodu giriniz"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <IoSearchOutline className="text-2xl mr-4" />
          </label>
        </div>
        <hr className="mt-2" />
        {isMobile && (
          <CustomButton
            title="Filtre"
            rightIcon={
              isFilterNav ? (
                <IoChevronUp className="text-2xl" />
              ) : (
                <IoChevronDown className="text-2xl" />
              )
            }
            containerStyles={`flex justify-between font-gemunu items-center border-b border-gray-200 w-full px-4 py-3 text-2xl ${
              isFilterNav ? "bg-site/10 text-site border-b-0" : " bg-white text-gray-600"
            }`}
            handleClick={() => setIsFilterNav(!isFilterNav)}
          />
        )}
        {isFilterNav && (
          <div className="flex flex-col py-2 gap-2">
            <div className="flex flex-col w-full gap-2">
              {categories.map((category, key) => (
                <div key={key} className="flex flex-col w-full">
                  <Link
                    href={`/magaza/${category.slug}`}
                    title={category.name}
                    className={`flex justify-between items-center rounded-sm font-medium gap-2 py-2 px-4 border border-gray-200 transition-all duration-300 ${
                      mainCategoryParam === category.slug
                        ? "bg-site text-white border-transparent"
                        : "bg-white hover:bg-site/10 hover:text-site hover:border-transparent"
                    }`}
                  >
                    <span className="line-clamp-1">{category.name}</span>
                    <small>({category.product_count})</small>
                  </Link>
                  {category.sub_categories &&
                    mainCategoryParam === category.slug && (
                      <div className="flex flex-col">
                        {category.sub_categories.map((subCategory, key) => (
                          <Link
                            key={key}
                            href={`/magaza/${category.slug}/${subCategory.slug}`}
                            title={subCategory.name}
                            className={`flex justify-between items-center gap-2 bg-white py-2 px-4 hover:text-site transition-all duration-300 ${
                              categoryParam == subCategory.slug
                                ? "text-site"
                                : "hover:text-site"
                            }`}
                          >
                            <span className="line-clamp-1">
                              {subCategory.name}
                            </span>
                            <small>({subCategory.product_count})</small>
                          </Link>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

export default Aside;
