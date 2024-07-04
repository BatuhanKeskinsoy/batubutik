"use client";
import { categories } from "@/constants/(front)";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  IoCheckmark,
  IoChevronDown,
  IoChevronUp,
  IoSearchOutline,
} from "react-icons/io5";
import CustomButton from "@/components/others/CustomButton";
import Slider from "@mui/material/Slider";
import { getPrice } from "@/components/functions/getPrice";
import { useGlobalContext } from "@/app/Context/store";
import { productAttributesTypes } from "@/types/product/productTypes";

interface IStoreAsideProps {
  mainCategorySlug?: string;
  categorySlug?: string;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  priceRange: [number, number];
  setPriceRange: Dispatch<SetStateAction<[number, number]>>;
  initialPriceRange: [number, number];
  filterProducts: (
    searchTerm: string,
    mainCategory?: string,
    category?: string,
    priceRange?: [number, number],
    sortOption?: string,
    selectedBrands?: string[],
    selectedAttributes?: { [key: string]: string[] }
  ) => void;
  brands: string[] | null;
  selectedBrands: string[];
  setSelectedBrands: Dispatch<SetStateAction<string[]>>;
  productAttributes: productAttributesTypes[] | null;
  selectedAttributes: {
    [key: string]: string[];
  };
  setSelectedAttributes: Dispatch<
    SetStateAction<{
      [key: string]: string[];
    }>
  >;
}

function Aside({
  mainCategorySlug,
  categorySlug,
  search,
  setSearch,
  priceRange,
  setPriceRange,
  initialPriceRange,
  filterProducts,
  brands,
  selectedBrands,
  setSelectedBrands,
  productAttributes,
  selectedAttributes,
  setSelectedAttributes,
}: IStoreAsideProps) {
  const { isMobile } = useGlobalContext();
  const [isFilterNav, setIsFilterNav] = useState(true);
  const [openCategories, setOpenCategories] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleCategory = (slug: string) => {
    setOpenCategories((prevState) => ({
      ...prevState,
      [slug]: !prevState[slug],
    }));
  };

  const handleBrandSelection = (brand: string) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    setSelectedBrands(updatedBrands);
    filterProducts(
      search,
      mainCategorySlug,
      categorySlug,
      priceRange,
      undefined,
      updatedBrands
    );
  };

  const handleAttributeSelection = (
    attributeTitle: string,
    optionName: string
  ) => {
    const updatedAttributes = { ...selectedAttributes };
    if (!updatedAttributes[attributeTitle]) {
      updatedAttributes[attributeTitle] = [];
    }
    if (updatedAttributes[attributeTitle].includes(optionName)) {
      updatedAttributes[attributeTitle] = updatedAttributes[
        attributeTitle
      ].filter((name) => name !== optionName);
      if (updatedAttributes[attributeTitle].length === 0) {
        delete updatedAttributes[attributeTitle];
      }
    } else {
      updatedAttributes[attributeTitle].push(optionName);
    }
    setSelectedAttributes(updatedAttributes);
    filterProducts(
      search,
      mainCategorySlug,
      categorySlug,
      priceRange,
      undefined,
      selectedBrands,
      updatedAttributes
    );
  };

  const handlePriceRangeChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    setPriceRange(newValue as [number, number]);
    filterProducts(
      search,
      mainCategorySlug,
      categorySlug,
      newValue as [number, number],
      undefined,
      selectedBrands,
      selectedAttributes
    );
  };

  useEffect(() => {
    setIsFilterNav(!isMobile);
  }, [isMobile]);

  return (
    <aside className="lg:w-[320px] w-full h-fit rounded-sm lg:sticky lg:top-24 transition-all duration-300">
      <div className="flex flex-col gap-3 w-full lg:text-sm text-gray-600">
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
                    className={`flex justify-between items-center rounded-sm font-medium border border-gray-200 transition-all duration-300 group ${
                      mainCategorySlug === category.slug
                        ? "bg-site text-white border-transparent"
                        : "bg-white hover:bg-site/10 hover:text-site hover:border-transparent"
                    }`}
                  >
                    <div
                      className={`flex justify-between w-full ${
                        category.sub_categories ? "pl-4 pr-2" : "px-4"
                      } py-2 gap-2`}
                    >
                      <span className="line-clamp-1">{category.name}</span>
                      <small>({category.product_count})</small>
                    </div>
                    {category.sub_categories && (
                      <CustomButton
                        leftIcon={
                          openCategories[category.slug] ||
                          mainCategorySlug === category.slug ? (
                            <IoChevronUp size={16} />
                          ) : (
                            <IoChevronDown size={16} />
                          )
                        }
                        containerStyles={`border-l ${
                          mainCategorySlug === category.slug
                            ? "border-white/30 opacity-50"
                            : "border-gray-200 group-hover:border-site/20"
                        } h-full py-2 px-2.5`}
                        handleClick={(e) => {
                          e.preventDefault();
                          toggleCategory(category.slug);
                        }}
                      />
                    )}
                  </Link>
                  {category.sub_categories &&
                    (openCategories[category.slug] ||
                      mainCategorySlug === category.slug) && (
                      <div className="flex flex-col">
                        {category.sub_categories.map((subCategory, key) => (
                          <Link
                            key={key}
                            href={`/magaza/${category.slug}/${subCategory.slug}`}
                            title={subCategory.name}
                            className={`flex justify-between items-center gap-2 bg-white py-2 px-4 hover:text-site transition-all duration-300 ${
                              categorySlug == subCategory.slug
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
                    Fiyat Aralığı
                  </span>
                  <div className="flex flex-col w-full">
                    <div className="px-2 ">
                      <Slider
                        value={priceRange}
                        onChange={handlePriceRangeChange}
                        min={initialPriceRange[0]}
                        max={initialPriceRange[1]}
                        step={10}
                        marks
                        className="customRangeSlider"
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
            {brands && brands.length > 1 && (
              <>
                <div className="flex flex-col gap-3">
                  <label className="font-medium text-xl font-gemunu tracking-wide">
                    Markalar
                  </label>

                  <div className="flex flex-col w-full">
                    {brands.map((brand, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 w-full cursor-pointer py-1.5 group"
                        onClick={() => handleBrandSelection(brand)}
                      >
                        <CustomButton
                          leftIcon={<IoCheckmark className="text-base" />}
                          textStyles="hidden"
                          btnType="button"
                          containerStyles={`flex items-center justify-center gap-2 w-5 h-5 border rounded-full transition-all duration-300 ${
                            selectedBrands.includes(brand)
                              ? "border-transparent bg-site text-white"
                              : "border-gray-300 lg:group-hover:border-site/50 text-transparent lg:group-hover:text-site"
                          }`}
                          id={`brand-${index}`}
                        />
                        <span className="-mb-0.5">{brand}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <hr />
              </>
            )}
            {productAttributes &&
              productAttributes.map((attribute, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <span className="font-medium text-xl font-gemunu tracking-wide">
                    {attribute.attr_title}
                  </span>
                  <div className="flex flex-wrap gap-3">
                    {attribute.attr_options.map((option, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 cursor-pointer py-1.5 group"
                        onClick={() =>
                          handleAttributeSelection(
                            attribute.attr_title,
                            option.option_name
                          )
                        }
                      >
                        <CustomButton
                          leftIcon={<IoCheckmark className="text-sm" />}
                          textStyles="hidden"
                          btnType="button"
                          containerStyles={`flex items-center justify-center gap-2 w-4 h-4 border rounded-full transition-all duration-300 ${
                            selectedAttributes[attribute.attr_title]?.includes(
                              option.option_name
                            )
                              ? "border-transparent bg-site text-white"
                              : "border-gray-300 lg:group-hover:border-site/50 text-transparent lg:group-hover:text-site"
                          }`}
                          id={`brand-${index}`}
                        />
                        <span className="-mb-0.5">{option.option_name}</span>
                      </div>
                    ))}
                  </div>
                  <hr />
                </div>
              ))}
          </div>
        )}
      </div>
    </aside>
  );
}

export default Aside;
