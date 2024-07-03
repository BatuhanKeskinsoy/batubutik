"use client";
import React, { useEffect, useState } from "react";
import Aside from "@/components/(front)/Store/Aside";
import { instantProducts } from "@/constants/(front)";
import ProductItem from "@/components/(front)/Product/ProductItem";
import { IoFileTrayFullOutline, IoFileTrayOutline } from "react-icons/io5";
import { productTypes } from "@/types/product/productTypes";

interface IStoreMainProps {
  mainCategoryParam?: string;
  categoryParam?: string;
}

function StoreMain({ mainCategoryParam, categoryParam }: IStoreMainProps) {
  const [search, setSearch] = useState("");
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<
    productTypes[] | null
  >(null);
  const [initialProducts, setInitialProducts] = useState<productTypes[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 0]);
  const [initialPriceRange, setInitialPriceRange] = useState<[number, number]>([
    0, 0,
  ]);

  useEffect(() => {
    setLoadingProducts(true);
    const timeoutId = setTimeout(() => {
      const filtered = instantProducts.filter((product) => {
        const matchesSearch =
          product.title.toLowerCase().includes(search.toLowerCase()) ||
          product.code.toLowerCase().includes(search.toLowerCase());
        const matchesMainCategory = mainCategoryParam
          ? product.mainCategory_slug === mainCategoryParam
          : true;
        const matchesCategory = categoryParam
          ? product.category_slug === categoryParam
          : true;
        return matchesSearch && matchesMainCategory && matchesCategory;
      });
      setInitialProducts(filtered);
      const priceValues = filtered.map((product) => product.price);
      setPriceRange([Math.min(...priceValues), Math.max(...priceValues)]);
      setInitialPriceRange([
        Math.min(...priceValues),
        Math.max(...priceValues),
      ]);
      setFilteredProducts(filtered);
      setLoadingProducts(false);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [search, mainCategoryParam, categoryParam]);

  const filterProducts = (
    searchTerm: string,
    mainCategory?: string,
    category?: string,
    priceRange?: [number, number]
  ) => {
    setLoadingProducts(true);
    const timeoutId = setTimeout(() => {
      const searchLower = searchTerm.toLowerCase();
      const filtered = initialProducts.filter((product) => {
        const matchesSearch =
          product.title.toLowerCase().includes(searchLower) ||
          product.code.toLowerCase().includes(searchLower);
        const matchesMainCategory = mainCategory
          ? product.mainCategory_slug === mainCategory
          : true;
        const matchesCategory = category
          ? product.category_slug === category
          : true;
        const matchesPriceRange = priceRange
          ? product.price >= priceRange[0] && product.price <= priceRange[1]
          : true;
        return (
          matchesSearch &&
          matchesMainCategory &&
          matchesCategory &&
          matchesPriceRange
        );
      });
      setFilteredProducts(filtered);
      setLoadingProducts(false);
    }, 500);
    return () => clearTimeout(timeoutId);
  };

  return (
    <div className="container mx-auto px-4 w-full max-lg:pt-6">
      <div className="flex lg:flex-row flex-col gap-6 w-full h-full">
        <Aside
          mainCategoryParam={mainCategoryParam}
          categoryParam={categoryParam}
          search={search}
          setSearch={setSearch}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          initialPriceRange={initialPriceRange}
          filterProducts={filterProducts}
        />
        <main className="w-full">
          {loadingProducts ? (
            <div className="flex flex-col gap-4 h-[500px] justify-center items-center text-gray-300">
              <IoFileTrayFullOutline className="lg:text-7xl text-6xl" />
              <span className="font-gemunu tracking-wide lg:text-2xl text-xl">
                Ürün aranıyor...
              </span>
            </div>
          ) : (
            <>
              {filteredProducts && filteredProducts.length === 0 ? (
                <div className="flex flex-col gap-4 h-[500px] justify-center items-center animate-pulse text-gray-600">
                  <IoFileTrayOutline className="lg:text-7xl text-6xl" />
                  <span className="font-gemunu tracking-wide lg:text-2xl text-xl">
                    Aradığınız Ürün Bulunamadı
                  </span>
                </div>
              ) : (
                <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 lg:gap-6 gap-3 w-full">
                  {filteredProducts &&
                    filteredProducts.map((product) => (
                      <ProductItem
                        key={product.id}
                        product={product}
                        height={395}
                        mobileHeight={335}
                      />
                    ))}
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default StoreMain;
