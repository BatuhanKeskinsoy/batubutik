"use client";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  IoCaretForwardOutline,
  IoCheckmark,
  IoChevronDown,
  IoChevronUp,
  IoSearchOutline,
} from "react-icons/io5";
import CustomButton from "@/components/others/CustomButton";
import { getPrice } from "@/lib/functions/getPrice";
import { useGlobalContext } from "@/app/Context/store";
import { productAttributesTypes } from "@/types/product/productTypes";
import { Range } from "react-range";
import { mainCategoryTypes } from "@/types/categoryTypes";

interface IStoreAsideProps {
  mainCategorySlug?: string;
  categorySlug?: string;
  subCategorySlug?: string;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  priceRange: [number, number];
  setPriceRange: Dispatch<SetStateAction<[number, number]>>;
  initialPriceRange: [number, number];
  filterProducts: (
    searchTerm: string,
    mainCategory?: string,
    category?: string,
    subCategory?: string,
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
  categories: mainCategoryTypes[];
}

function Aside({
  mainCategorySlug,
  categorySlug,
  subCategorySlug,
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
  categories,
}: IStoreAsideProps) {
  const { isMobile } = useGlobalContext();
  const [isFilterNav, setIsFilterNav] = useState(true);
  const [openCategories, setOpenCategories] = useState<{
    [key: string]: boolean;
  }>({});
  const [openSubCategories, setOpenSubCategories] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleCategory = (slug: string) => {
    setOpenCategories((prevState) => ({
      ...prevState,
      [slug]: !prevState[slug],
    }));
  };

  const toggleSubCategory = (slug: string) => {
    setOpenSubCategories((prevState) => ({
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
      subCategorySlug,
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
      subCategorySlug,
      priceRange,
      undefined,
      selectedBrands,
      updatedAttributes
    );
  };

  const handlePriceRangeChange = (values: number[]) => {
    setPriceRange([values[0], values[1]]);
    filterProducts(
      search,
      mainCategorySlug,
      categorySlug,
      subCategorySlug,
      [values[0], values[1]],
      undefined,
      selectedBrands,
      selectedAttributes
    );
  };

  useEffect(() => {
    setIsFilterNav(!isMobile);
  }, [isMobile]);

  return (
    <aside className="lg:w-[320px] w-full h-fit rounded-sm transition-all duration-300">
      <div className="flex flex-col gap-3 w-full lg:text-sm text-gray-600">
        <label
          htmlFor="search"
          className="flex items-center gap-2 w-full border border-gray-200 dark:border-zinc-800 focus-within:border-site/50 dark:focus-within:border-site/50 transition-all duration-300"
        >
          <input
            type="text"
            id="search"
            required
            className="bg-white dark:bg-zinc-900 py-3 pl-4 outline-none w-full transition-all duration-300 dark:text-gray-200"
            placeholder="Ürün adı veya ürün kodu giriniz"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <IoSearchOutline className="text-2xl mr-4 dark:text-gray-400" />
        </label>
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
            containerStyles={`flex justify-between items-center border border-gray-200 dark:border-zinc-800 w-full px-4 py-3 text-xl ${
              isFilterNav
                ? "bg-site/10 text-site border-b-0"
                : " bg-white dark:bg-zinc-900 text-gray-600 dark:text-gray-200"
            }`}
            handleClick={() => setIsFilterNav(!isFilterNav)}
          />
        )}
        {isFilterNav && (
          <div className="flex flex-col py-2 gap-4">
            <span className="font-medium text-lg dark:text-gray-200">
              Kategori
            </span>
            <div className="flex flex-col w-full gap-2">
              {categories.map(
                (mainCategory: mainCategoryTypes, key: number) => (
                  <div key={key} className="flex flex-col w-full gap-1">
                    <Link
                      href={`/magaza/${mainCategory.slug}`}
                      title={mainCategory.name}
                      className={`flex justify-between items-center rounded-sm font-medium border border-gray-200 dark:border-zinc-800 transition-all duration-300 dark:text-gray-400 group ${
                        mainCategorySlug === mainCategory.slug
                          ? "bg-site text-white border-transparent dark:text-white"
                          : "bg-white dark:bg-zinc-900 hover:bg-site/10 dark:hover:bg-site/10 hover:text-site dark:hover:text-site hover:border-transparent dark:hover:border-transparent"
                      }`}
                    >
                      <div
                        className={`flex justify-between w-full ${
                          mainCategory.categories ? "pl-4 pr-2" : "px-4"
                        } py-2.5 gap-2`}
                      >
                        <span className="line-clamp-1">
                          {mainCategory.name}
                        </span>
                        <small className="text-xs leading-5">({mainCategory.product_count})</small>
                      </div>
                      {mainCategory.categories && (
                        <CustomButton
                          leftIcon={
                            openCategories[mainCategory.slug] ||
                            mainCategorySlug === mainCategory.slug ? (
                              <IoChevronUp size={16} />
                            ) : (
                              <IoChevronDown size={16} />
                            )
                          }
                          containerStyles={`border-l ${
                            mainCategorySlug === mainCategory.slug
                              ? "border-white/30 dark:border-white/70 opacity-50"
                              : "border-gray-200 dark:border-zinc-800 group-hover:border-site/20"
                          } h-full p-2.5`}
                          handleClick={(e) => {
                            e.preventDefault();
                            toggleCategory(mainCategory.slug);
                          }}
                        />
                      )}
                    </Link>
                    {mainCategory.categories &&
                      (openCategories[mainCategory.slug] ||
                        mainCategorySlug === mainCategory.slug) && (
                        <div className="flex flex-col gap-1">
                          {mainCategory.categories.map((category, key) => (
                            <div key={key} className="flex flex-col">
                              <Link
                                href={`/magaza/${mainCategory.slug}/${category.slug}`}
                                title={category.name}
                                className={`flex justify-between w-full items-center dark:text-gray-400 hover:text-site transition-all duration-300 ${
                                  categorySlug == category.slug &&
                                  mainCategorySlug == mainCategory.slug
                                    ? "text-site dark:text-site bg-site/10"
                                    : "hover:text-site dark:hover:text-site bg-gray-100 dark:bg-zinc-800/50"
                                }`}
                              >
                                <div className="flex justify-between w-full pl-4 pr-2 py-2 gap-2">
                                  <span className="line-clamp-1">
                                    {category.name}
                                  </span>
                                  <small className="text-xs leading-5">({category.product_count})</small>
                                </div>
                                {category.sub_categories && (
                                  <CustomButton
                                    leftIcon={
                                      openSubCategories[category.slug] ||
                                      categorySlug === category.slug ? (
                                        <IoChevronUp size={16} />
                                      ) : (
                                        <IoChevronDown size={16} />
                                      )
                                    }
                                    containerStyles={`border-l ${
                                      categorySlug === category.slug
                                        ? "border-white dark:border-zinc-900 opacity-50"
                                        : "border-gray-200 dark:border-zinc-800 group-hover:border-site/20"
                                    } h-full p-2.5`}
                                    handleClick={(e) => {
                                      e.preventDefault();
                                      toggleSubCategory(category.slug);
                                    }}
                                  />
                                )}
                              </Link>
                              {category.sub_categories &&
                                (openSubCategories[category.slug] ||
                                  (categorySlug === category.slug &&
                                    mainCategorySlug ===
                                      mainCategory.slug)) && (
                                  <div className="flex flex-col mt-1">
                                    {category.sub_categories.map(
                                      (subCategory, key) => (
                                        <div key={key} className="flex w-full">
                                          <Link
                                            href={`/magaza/${mainCategory.slug}/${category.slug}/${subCategory.slug}`}
                                            title={subCategory.name}
                                            className={`flex justify-between w-full items-center gap-2 lg:py-1.5 py-2 px-3 dark:text-gray-400 hover:text-site transition-all duration-300 ${
                                              mainCategorySlug ==
                                                mainCategory.slug &&
                                              subCategorySlug ==
                                                subCategory.slug &&
                                              categorySlug === category.slug
                                                ? "text-site dark:text-site"
                                                : "hover:text-site dark:hover:text-site"
                                            }`}
                                          >
                                            <div className="flex items-center gap-2">
                                              <IoCaretForwardOutline className="text-lg" />
                                              <span className="line-clamp-1 -mb-0.5">
                                                {subCategory.name}
                                              </span>
                                            </div>
                                            <small className="text-xs leading-5">
                                              ({subCategory.product_count})
                                            </small>
                                          </Link>
                                        </div>
                                      )
                                    )}
                                  </div>
                                )}
                            </div>
                          ))}
                        </div>
                      )}
                  </div>
                )
              )}
            </div>
            {Number.isFinite(priceRange[0]) &&
              Number.isFinite(priceRange[1]) &&
              priceRange[0] !== 0 &&
              priceRange[1] !== 0 && (
                <>
                  <hr className="dark:border-zinc-800" />
                  <span className="font-medium text-lg dark:text-gray-200">
                    Fiyat Aralığı
                  </span>
                  <div className="flex flex-col gap-4 w-full">
                    <div className="px-2">
                      <Range
                        step={10}
                        min={initialPriceRange[0]}
                        max={initialPriceRange[1]}
                        values={priceRange}
                        onChange={(values) => handlePriceRangeChange(values)}
                        renderTrack={({ props, children }) => (
                          <div
                            {...props}
                            className="bg-site h-1.5 w-full rounded-full !cursor-pointer"
                          >
                            {children}
                          </div>
                        )}
                        renderThumb={({ props, index }) => {
                          const { key, ...rest } = props;
                          return (
                            <div
                              key={index}
                              {...rest}
                              className="lg:size-8 size-10 bg-site border-4 border-white dark:border-zinc-900 rounded-full outline-none"
                            />
                          );
                        }}
                      />
                    </div>
                    <div className="flex items-center justify-between gap-4 font-medium dark:text-gray-400">
                      <span>{getPrice(priceRange[0])}</span>
                      <span>{getPrice(priceRange[1])}</span>
                    </div>
                  </div>
                  <hr className="dark:border-zinc-800" />
                </>
              )}
            {brands && brands.length > 1 && (
              <>
                <div className="flex flex-col gap-3">
                  <label className="font-medium text-lg dark:text-gray-200">
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
                              : "border-gray-300 dark:border-gray-400 lg:group-hover:border-site/50 text-transparent lg:group-hover:text-site"
                          }`}
                          id={`brand-${index}`}
                        />
                        <span
                          className={`-mb-0.5 ${
                            selectedBrands.includes(brand)
                              ? "text-site dark:text-site"
                              : "lg:group-hover:text-site"
                          } transition-all duration-300 dark:text-gray-400`}
                        >
                          {brand}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <hr className="dark:border-zinc-800" />
              </>
            )}
            {productAttributes &&
              productAttributes.map((attribute, key) => (
                <div key={key} className="flex flex-col gap-4 group/border">
                  <span className="font-medium text-lg dark:text-gray-200">
                    {attribute.attr_title}
                  </span>
                  <div className="flex flex-wrap gap-y-1 gap-x-4">
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
                              : "border-gray-300 dark:border-gray-400 lg:group-hover:border-site/50 text-transparent lg:group-hover:text-site"
                          }`}
                          id={`brand-${index}`}
                        />
                        <span
                          className={`-mb-0.5 ${
                            selectedAttributes[attribute.attr_title]?.includes(
                              option.option_name
                            )
                              ? "text-site dark:text-site"
                              : "lg:group-hover:text-site"
                          } transition-all duration-300 dark:text-gray-400`}
                        >
                          {option.option_name}
                        </span>
                      </div>
                    ))}
                  </div>
                  <hr className="group-last/border:hidden dark:border-zinc-800" />
                </div>
              ))}
          </div>
        )}
      </div>
    </aside>
  );
}

export default Aside;
