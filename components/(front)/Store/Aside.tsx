"use client";
import { categories } from "@/constants/(front)";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoChevronDown, IoChevronUp, IoSearchOutline } from "react-icons/io5";
import CustomButton from "@/components/others/CustomButton";
import Slider from "@mui/material/Slider";
import { getPrice } from "@/components/functions/getPrice";
import { useGlobalContext } from "@/app/Context/store";

interface IStoreAsideProps {
  mainCategoryParam?: string;
  categoryParam?: string;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  priceRange: [number, number];
  setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
  initialPriceRange: [number, number];
  filterProducts: (
    searchTerm: string,
    mainCategory?: string,
    category?: string,
    priceRange?: [number, number]
  ) => void;
}

function Aside({
  mainCategoryParam,
  categoryParam,
  search,
  setSearch,
  priceRange,
  setPriceRange,
  initialPriceRange,
  filterProducts,
}: IStoreAsideProps) {
  const { isMobile } = useGlobalContext();
  const [isFilterNav, setIsFilterNav] = useState(true);

  const handlePriceRangeChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    setPriceRange(newValue as [number, number]);
    filterProducts(
      search,
      mainCategoryParam,
      categoryParam,
      newValue as [number, number]
    );
  };

  useEffect(() => {
    setIsFilterNav(!isMobile);
  }, [isMobile]);

  return (
    <aside className="lg:w-[320px] w-full h-fit rounded-sm lg:sticky lg:top-24 transition-all duration-300">
      <div className="flex flex-col gap-3 w-full text-sm text-gray-600">
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
              isFilterNav
                ? "bg-site/10 text-site border-b-0"
                : " bg-white text-gray-600"
            }`}
            handleClick={() => setIsFilterNav(!isFilterNav)}
          />
        )}
        {isFilterNav && (
          <div className="flex flex-col py-2 gap-4">
            <span className="font-medium text-xl font-gemunu tracking-wide">
              Kategori
            </span>
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
            <hr />
            {Number.isFinite(priceRange[0]) &&
              Number.isFinite(priceRange[1]) &&
              priceRange[0] !== 0 &&
              priceRange[1] !== 0 && (
                <>
                  <span className="font-medium text-xl font-gemunu tracking-wide">
                    Ücret Aralığı
                  </span>
                  <div className="flex flex-col w-full">
                    <div className="px-2">
                      <Slider
                        value={priceRange}
                        onChange={handlePriceRangeChange}
                        min={initialPriceRange[0]}
                        max={initialPriceRange[1]}
                      />
                    </div>
                    <div className="flex items-center justify-between gap-4 font-medium">
                      <span>{getPrice(priceRange[0])}</span>
                      <span>{getPrice(priceRange[1])}</span>
                    </div>
                  </div>
                  <hr />
                </>
              )}
            <span className="font-medium text-xl font-gemunu tracking-wide">
              Boyut/Beden
            </span>
            <span>Boyut/Beden</span>
            <hr />
            <span className="font-medium text-xl font-gemunu tracking-wide">
              Renk
            </span>
            <span>Renk</span>
          </div>
        )}
      </div>
    </aside>
  );
}

export default Aside;
